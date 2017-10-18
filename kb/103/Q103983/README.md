---
layout: page
title: "Q103983: PRB: Serializing an Abstract Base Class"
permalink: kb/103/Q103983/
---

## Q103983: PRB: Serializing an Abstract Base Class

	Article: Q103983
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0,4.1
	Operating System(s): 
	Keyword(s): kbFileIO kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbVC410 kbGrpDSMFCATL kbArchitecture
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An abstract base class is a class that contains one or more pure virtual
	functions. Attempting to use the IMPLEMENT_SERIAL() macro with an abstract base
	class results in the compiler error:
	
	  error C2259 : illegal attempt to instantiate abstract class
	
	With Microsoft Visual C++ 32-bit edition, version 2.x, this compiler error is
	accompanied by an explanatory warning:
	
	  error C2259: cannot instantiate abstract class due to following members:
	  warning C4259: pure virtual function was not defined
	
	To work around this problem, implement the Serialize() function as normal for the
	abstract base class, and classes derived from the abstract base class, but skip
	over the abstract base class when using the IMPLEMENT_SERIAL() and
	DECLARE_SERIAL() macros.
	
	MORE INFORMATION
	================
	
	The IMPLEMENT_SERIAL() and DECLARE_SERIAL() macros declare a Construct()
	function, which creates an instance of the class. This function is used to
	create a new instance of the class when an object is read from a CArchive.
	Because C++ does not allow you to create instances of an abstract base class,
	the compiler error mentioned above is given when attempting to implement the
	construct function.
	
	However, because an object of the abstract base class cannot be created, it is
	not possible that such an object was ever stored in an archive. Only objects
	derived from the abstract base class need to be capable of serialization.
	
	To serialize a class derived from an abstract base class, do not use the
	IMPLEMENT_SERIAL() and DECLARE_SERIAL() macros with an abstract base class.
	Instead, just declare the Serialize() function and implement it as normal so
	that it will serialize the data in the abstract base class.
	
	When you derive classes from the abstract base class, use the IMPLEMENT_SERIAL()
	and DECLARE_SERIAL() macros. In the IMPLEMENT_SERIAL() macro, specify the base
	class of the abstract base class as the base class. In the Serialize() function
	of the derived class, serialize the data in the class and then call the base
	class version of Serialize() in the abstract base class so that data in the base
	class is serialized. For an example of the technique, please see the BLOCKS
	sample (S13483) in the Microsoft Software Library.
	
	Additional query words: kbinf 1.00 1.50 2.00 2.10 2.50 2.51 2.52 3.00 3.10 4.00 4.10
	
	======================================================================
	Keywords          : kbFileIO kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbVC410 kbGrpDSMFCATL kbArchitecture 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,4.0,4.1
	Issue type        : kbprb
	
	=============================================================================
	
