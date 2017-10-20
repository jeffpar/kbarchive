---
layout: page
title: "Q119519: BUG: Aggregate Initializer Fails In VC++ 32-bit, Ver. 1.0, 2.0"
permalink: /kb/119/Q119519/
---

## Q119519: BUG: Aggregate Initializer Fails In VC++ 32-bit, Ver. 1.0, 2.0

{% raw %}

	Article: Q119519
	Product(s): Microsoft C Compiler
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVCkbbuglist
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If "operator =" is overridden in an aggregate class, you can no longer use an
	initializer list to construct a constant object.
	
	CAUSE
	=====
	
	The assignment operator causes the const object to be place in read only memory
	before it is initialized. Upon initialization of the object, the application
	fails with an access violation.
	
	RESOLUTION
	==========
	
	To work around this problem, create a constructor to initialize the object.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. We are researching this bug and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following sample generates an Application Error message box when
	initializing kZeroMLUInt64:
	
	Sample Code
	-----------
	
	  class MLUInt64 {
	  public:
	   // If this following inline method is commented out the correct code
	   // will be generated.
	      const MLUInt64 & operator= (const MLUInt64 &u64)
	                        {fVal[0] = u64.fVal[0];
	                         fVal[1] = u64.fVal[1];
	                         return *this;}
	
	      int    fVal[2];
	  }; // class MLUInt64
	
	  const MLUInt64 kZeroMLUInt64 = {1,1};
	
	  void main(void) {
	
	     MLUInt64 kTempMLUInt64;
	
	     kTempMLUInt64 = kZeroMLUInt64;
	  }
	
	Additional query words: 8.00 9.00 1.00 2.00
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,2.0
	
	=============================================================================
	

{% endraw %}
