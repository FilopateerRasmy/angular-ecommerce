import { TestBed } from '@angular/core/testing';

import { ProductResolverResolver } from './product-resolver.resolver';

describe('ProductResolverResolver', () => {
  let resolver: ProductResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProductResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
