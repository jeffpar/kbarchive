---
layout: page
title: "Q112985: FIX: new Allocates 0 Bytes for Typedef Class Function Pointer"
permalink: /kb/112/Q112985/
---

## Q112985: FIX: new Allocates 0 Bytes for Typedef Class Function Pointer

{% raw %}

	Article: Q112985
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbVC400bug kbVC500bug kbVC600bug kbNoUpdate
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52 
	   - The C/C++ Compiler (CL.EXE), used with:
	      - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0, 4.1 
	      - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	      - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	      - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the new operator to dynamically allocate memory for a typedef pointer to a
	class member function that has return type void will allocate 0 (zero) bytes for
	the function pointer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	When typecasting a pointer to a class member function that returns type void and
	trying to dynamically allocate pointers to this user defined type, the compiler
	allocates 0 (zero) bytes. This can best be seen by generating a mixed
	source/assembly language listing file using the /Fc compiler option and
	observing that the new operator is passed 0 bytes as the amount of memory to
	allocate. Using the sample code below, the following is the source/assembly
	listing for the call to new:
	
	     ; 26   : // Try to allocate array of ptr's to ptr to member functions
	     ; 27   : ppfVoid = new PtrVoid[10];  // Allocates zero bytes
	
	       0002e     6a 00          push     0
	       00030     e8 00 00 00 00     call     ??2@YAPAXI@Z   ; operator new
	
	       00035     83 c4 04     add     esp, 4
	       00038     89 45 fc     mov     DWORD PTR _ppfVoid$[ebp], eax
	
	This problem occurs only when using a return type of void for the typedef pointer
	to class member function. Any other return type causes the proper amount of
	memory to be allocated by the new operator.
	
	To work around this problem, allocate an array of chars using the sizeof()
	keyword to cause the new operator to allocate the proper number of bytes. The
	returned pointer will need to be typecast to the proper type.
	
	The following code sample demonstrates the problem and workaround:
	
	Sample Code
	-----------
	
	     /* Compile options needed: /Fc
	        To generate assembly/source listing */ 
	     class CTest
	     {
	     public:
	          void FcnVoid();
	          int  FcnInt();
	     };
	
	     typedef void (CTest::*PtrVoid)(); // Defines PtrVoid as type pointer
	                                       // to member function which returns
	                                       // void.
	
	     typedef int (CTest::*PtrInt)();   // Defines PtrInt as type pointer to
	                                       // member function which returns int.
	
	     void main(void)
	     {
	     PtrVoid *ppfVoid;  // Declares ppfVoid to be of type pointer to
	                        // PtrVoid.
	     PtrInt  *ppfInt;   // Declares ppfInt to be of type pointer to
	                        // PtrInt.
	
	     // Allocating ptr to ptr to member fcn that returns
	     // int works correctly.
	
	     ppfInt = new PtrInt;        // Allocates correct number of bytes.
	     delete ppfInt;
	
	     // Try to allocate array of ptr's to ptr to member functions.
	
	     ppfVoid = new PtrVoid[10];  // Allocates 0 bytes.
	     delete ppfVoid;
	
	     // *** Use sizeof() to work around. ***
	     // Allocate correct number of bytes and cast return
	     // pointer to proper type.
	
	     ppfVoid = (PtrVoid*)new char[sizeof(PtrVoid)*10];
	     delete ppfVoid;
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVC400bug kbVC500bug kbVC600bug kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
