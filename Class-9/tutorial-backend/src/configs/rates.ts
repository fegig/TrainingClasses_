export class RateLimiter {
    private requests = new Map<string, { count: number; resetTime: number }>();
  
    
    constructor(
      private maxRequests: number = 100,
      private windowMs: number = 15 * 60 * 1000 // 15 minutes
    ) {}
  
     isAllowed = (identifier: string): boolean => {
      const now = Date.now();
      const record = this.requests.get(identifier);
  
      if (!record || now > record.resetTime) {
        this.requests.set(identifier, {
          count: 1,
          resetTime: now + this.windowMs
        });
        return true;
      }
  
      if (record.count >= this.maxRequests) {
        return false;
      }
  
      record.count++;
      
      return true;
    }
  
    getRemaining = (identifier: string): number => {
      const record = this.requests.get(identifier);
      if (!record) return this.maxRequests;
      return Math.max(0, this.maxRequests - record.count);
    }
  }
  