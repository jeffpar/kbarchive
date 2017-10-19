---
layout: page
title: "Q106392: PRB: C2666 Error Generated with Overloaded Operator"
permalink: /kb/106/Q106392/
---

## Q106392: PRB: C2666 Error Generated with Overloaded Operator

	Article: Q106392
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kb
	Last Modified: 29-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error
	
	  C2666: '+' : 'number' overloads have similar conversions
	
	is generated when there is no single or exact match between multiple operators.
	In some cases, the type conversion may look trivial but actually is not, and an
	explicit type conversion or typecast is needed to force the operators to match.
	
	CAUSE
	=====
	
	In the following sample, the line where the error is generated has the form:
	
	     int + Fraction
	
	Because there is no exact match to the operators provided for this operation, a
	set of candidate operator + must be determined.
	
	First, there are the user-supplied operators:
	
	  + ( long,            const Fraction& )
	  + ( const Fraction&, long )
	  + ( const Fraction&, const Fraction& )
	
	Second, there are the built-in operators:
	
	  + ( int, float )
	
	The above is chosen because it is "int" plus an arbitrary type, and the Fraction
	object can be converted only to a "float".
	
	Now, the candidate selection list is:
	
	  + ( long,            const Fraction& )
	  + ( const Fraction&, long )
	  + ( const Fraction&, const Fraction& )
	  + ( int,             float )
	
	Because there is more than one choice, the overload disambiguation takes place.
	
	The first argument is considered:
	
	  + ( long, ... )             Requires one standard conversion.
	  + ( const Fraction&, ... )  Requires one user-defined conversion.
	  + ( int, ... )              Is an exact match.
	
	Therefore, the set of best candidates for the first argument consists of:
	
	  + ( int, float )
	
	Then the second argument is considered:
	
	  + ( ..., const Fraction& )   Requires only trivial conversions.
	  + ( ..., long )              Requires 1 user-defined conversion and
	                               one standard conversion.
	  + ( ..., float )             Requires one user-defined conversion.
	
	Therefore, the set of best candidates for the second argument consists of:
	
	  + ( const Fraction&, const Fraction& )
	  + ( long,            const Fraction& )
	
	The intersection of these two sets is NULL, it contains nothing, and therefore
	the operation is ambiguous.
	
	RESOLUTION
	==========
	
	1. Typecast the operand that is causing the ambiguity. For example:
	
	     c = 1234L + a;
	
	  -or-
	
	     c = (long)1234 + a;
	
	2. Remove the float operator from the Fraction class. This prevents a default
	  operator "+" from being provided by the compiler because there is no
	  conversion provided by the user for the second argument. The selection is
	  made from the list of three user-provided "+" operators. For the first
	  argument, the first operator
	
	     + ( long,          const Fraction& )
	
	  is chosen because a trivial conversion is required for int to long. The same
	  selection is also made for the second argument, making the operator
	
	     + ( long,           const Fraction& )
	
	  common to both the selections, and thus resolving the ambiguity.
	
	Sample Code
	-----------
	
	  /* Compile Options needed: none
	  */ 
	
	  class Fraction {
	   private:
	     int x;
	     int y;
	   public:
	     Fraction(int a=0, int b=0) : x(a), y(b) { }
	     ~Fraction(){}
	     operator float () {return int(x);}
	  };
	
	  Fraction& operator+(long i, const Fraction& ) { Fraction f ; return f; }
	  Fraction& operator+(const  Fraction& , const Fraction& ){ Fraction f;
	  return f; }
	  Fraction& operator+(const Fraction&  , long i ) { Fraction f ; return f;}
	
	  void main()
	  {
	     Fraction a(2,3), c;
	
	     c =     1234 + a;   // error C2666: '+' : 4 overloads have
	                // similar conversion
	  }
	
	MORE INFORMATION
	================
	
	If you change the operator float to int, the candidate list will contain "+ (
	int, int )", which will still be the best candidate for the left operand. The
	intersection of the two sets will still be empty.
	
	Additional query words: 8.00 8.00c 9.00 9.10
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbZNotKeyword3 kbVC500 kbVC600 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC16bitSearch kbVC152 kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
