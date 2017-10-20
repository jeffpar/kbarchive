---
layout: page
title: "Q132044: INFO: Using _declspec(dllimport) &amp; _declspec(dllexport) in Code"
permalink: /kb/132/Q132044/
---

## Q132044: INFO: Using _declspec(dllimport) &amp; _declspec(dllexport) in Code

{% raw %}

	Article: Q132044
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0,5.0
	Operating System(s): 
	Keyword(s): kbcode kbCompiler kbVC100 kbVC200 kbVC210 kbVC400 kbVC500
	Last Modified: 09-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 2.0, 2.1, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article supplements the information covered in the following article in the
	Microsoft Knowledge Base:
	
	  Q107501 INFO: __export Replaced By __declspec in Visual C++ 32-bit
	
	This article discusses the advantages and mechanics of using _declspec(dllimport)
	and _declspec(dllexport) in your application.
	
	MORE INFORMATION
	================
	
	The 32-bit edition of Visual C++ uses _declspec(dllimport) and
	_declspec(dllexport) to replace the __export keyword previously used in 16-bit
	versions of Visual C++.
	
	You do not need to use _declspec(dllimport) for your code to compile correctly,
	but doing so allows the compiler to generate better code. The compiler is able
	to generate better code because it knows for sure whether a function exists in a
	DLL or not, so the compiler can produce codes that skip a level of indirection
	that would normally be present in a function call that crossed a DLL boundary.
	
	With the proper .DEF file EXPORTS section, _declspec(dllexport) is not required.
	_declspec(dllexport) was added to provide an easy way to export functions from
	an .EXE or .DLL without using a .DEF file.
	
	The remainder of this article provides a fairly low-level, thorough discussion of
	these issues.
	
	The Win32 Portable Executable format is designed to minimize the number of pages
	that must be touched to fix imports. To do this, it places all the import
	addresses for any program in one place called the Import Address Table. This
	allows the loader to modify only one or two pages when accessing these imports.
	
	Using _declspec(dllimport) for Function Calls
	---------------------------------------------
	
	In the following code example, assume func1 is a function that resides in a DLL
	separate from the .EXE file that contains the main() function.
	
	Without _declspec(dllimport), given this code:
	
	  void main(void) {
	      func1();
	  }
	
	the compiler generates code that looks like this:
	
	  call func1
	
	and the linker translates the call into something like this:
	
	  call 0x4000000         ; The address of 'func1'.
	
	If 'func1' exists in another DLL, the linker can't resolve this directly because
	it has no way of knowing what the address of 'func1' is. In 16-bit environments,
	the linker adds this code address to a list in the .EXE that the loader would
	patch at run-time with the correct address. In 32-bit environments, the linker
	generates a thunk for which it does know the address. The thunk looks like
	this:
	
	  0x40000000:    jmp DWORD PTR __imp_func1
	
	Here __imp_func1 is the address for func1's slot in the import address table of
	the .EXE file. All the addresses are thus known to the linker. The loader only
	has to update the .EXE file's import address table at load time for everything
	to work correctly.
	
	Therefore, using _declspec(dllimport) is better because it is better if the
	linker does not generate a thunk if it does not have to. Thunks make the code
	larger (on RISC systems, it can be several instructions) and can degrade your
	cache performance. If you tell the compiler the function is in a DLL, it can
	generate an indirect call for you.
	
	So now this code:
	
	  __declspec(dllimport) void func1(void);
	
	  void main(void) {
	      func1();
	  }
	
	generates this instruction:
	
	  call DWORD PTR __imp_func1
	
	There is no thunk and no jmp instruction, so the code is smaller and faster.
	
	On the other hand, for function calls inside a DLL, you don't want to have to use
	an indirect call. You already know a function's address. Time and space are
	required to load and store the address of the function before an indirect call,
	so a direct call is always faster and smaller. You only want to use
	__declspec(dllimport) when calling DLL functions from the outside the DLL
	itself. Don't use __declspec(dllimport) on functions inside a DLL when building
	that DLL.
	
	Using _declspec(dllexport)
	--------------------------
	
	Microsoft introduced __export in the 16-bit compiler version to allow the
	compiler to generate the export names automatically and place them in a .LIB
	file. This .LIB file could then be used just like a static .LIB to link with a
	DLL.
	
	Microsoft added __declspec(dllexport) to continue this convenience. Its purpose
	is to add the export directive to the object file so you don't need a .DEF
	file.
	
	This convenience is most apparent when trying to export decorated C++ function
	names. There is no standard specification for name decoration, so the name of an
	exported function may change between compiler versions. If you use
	_declspec(dllexport), recompiling the DLL and dependent .EXE files is necessary
	only to account for any naming convention changes.
	
	Many export directives such as ordinals, NONAME, or PRIVATE, can be made only in
	a .DEF file, and there is no way to specify these attributes without a .DEF
	file. However, using _declspec(dllexport) in addition to using a .DEF file does
	not cause build errors.
	
	As a reference, search through the Win32 WINBASE.H header file. It contains
	examples of preferred __declspec(dllexport) and __declspec(dllimport) usage.
	
	Using _declspec(dllexport) and _declspec(dllimport) on Data
	-----------------------------------------------------------
	
	In the case of data, using _declspec(dllimport) is a convenience item that
	removes a layer of indirection. When you import data from a DLL, you still have
	to go through the import address table. In the Win32 days before
	_declspec(dllimport), this meant you had to remember to do an extra level of
	indirection when accessing data exported from the DLL:
	
	  // project.h
	  #ifdef _DLL     // If accessing the data from inside the DLL
	     ULONG ulDataInDll;
	
	  else            // If accessing the data from outside the DLL
	     ULONG *ulDataInDll;
	  #endif
	
	You would then export the data in your .DEF file:
	
	  // project.def
	  LIBRARY project
	  EXPORTS
	      ulDataInDll   CONSTANT
	
	and access it outside the DLL:
	
	  if (*ulDataInDll == 0L) {
	     // Do stuff here
	  }
	
	When you mark the data as __declspec(dllimport), the compiler automatically
	generates the indirection code for you. You no longer have to worry about the
	steps above. As stated previously, do not use _declspec(dllimport) declaration
	on the data when building the DLL. Functions within the DLL will not use the
	Import Address Table to access the data object. Therefore, you will not have the
	extra level of indirection present.
	
	To export the data automatically from the DLL, use this declaration:
	
	  __declspec(dllexport) ULONG ulDataInDLL;
	
	Using a .DEF File
	-----------------
	
	If you choose to use __declspec(dllimport) along with a .DEF file, you should
	change the .DEF file to use DATA in place of CONSTANT to reduce the likelihood
	that incorrect coding will cause a problem:
	
	  // project.def
	  LIBRARY project
	  EXPORTS
	      ulDataInDll   DATA
	
	The following chart shows why:
	
	Keyword     Emits in the import lib     Exports
	CONSTANT    __imp_ulDataInDll           ulDataInDll
	           __ulDataInDll
	
	DATA        __imp_ulDataInDll           ulDataInDll
	
	Using _declspec(dllimport)and CONSTANT lists both the __imp_ version and the
	undecorated name in the .LIB DLL import library that is created to allow
	explicit linking. Using _declspec(dllimport) and DATA lists just the __imp_
	version of the name.
	
	If you use CONSTANT, either of the following code constructs could be used to
	access the ulDataInDll:
	
	  __declspec(dllimport) ULONG ulDataInDll; /*prototype*/ 
	     if (ulDataInDll == 0L)   /*sample code fragment*/ 
	
	  -or-
	
	  ULONG *ulDataInDll;      /*prototype*/ 
	  if (*ulDataInDll == 0L)  /*sample code fragment*/ 
	
	However, if you use DATA in your .DEF file, only code compiled with the following
	definition can access the variable ulDataInDll:
	
	  __declspec(dllimport) ULONG ulDataInDll;
	  if (ulDataInDll == 0L)   /*sample code fragment*/ 
	
	Using CONSTANT is more risky because if you forget to use the extra level of
	indirection, you could potentially access the Import Address Table's pointer to
	the variable -- not the variable itself. This type of problem can often manifest
	as an Access Violation because the Import Address Table is currently made
	read-only by the Microsoft compiler and linkers.
	
	The Current Visual C++ linker issues a warning if it sees CONSTANT in the .DEF
	file to account for this case. The only real reason to use CONSTANT is if you
	can't recompile some object file where the header file didn't list dllimport on
	the prototype.
	
	
	REFERENCES
	==========
	
	The Visual C++ Books Online provide a substantial amount of documentation on the
	dllexport and dllimport storage-class attributes. This includes "The dllexport
	and dllimport Attributes" and the "Using dllimport and dllexport in C++" topics
	in the "Microsoft-Specific Modifiers" chapter of the C++ Language Reference, and
	the "Exporting Symbols" topics in the "Creating DLLs for Win32" chapter of the
	Programming Techniques reference. For a thorough listing related topics, search
	the Books Online for "dllimport" or "dllexport".
	
	For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q90530 How To Export Data from a DLL or an Application
	
	  Q107501 INFO: __export Replaced By __declspec in Visual C++ 32-bit
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbCompiler kbVC100 kbVC200 kbVC210 kbVC400 kbVC500 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc100 kbVC500 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : winnt:1.0,2.0,2.1,4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
