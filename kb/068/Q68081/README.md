---
layout: page
title: "Q68081: Creating a Single Import Library for Multiple DLLs"
permalink: /kb/068/Q68081/
---

## Q68081: Creating a Single Import Library for Multiple DLLs

{% raw %}

	Article: Q68081
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A single import library that contains information about multiple dynamic-link
	libraries (DLLs) can sometimes be useful. One example in the Microsoft Windows
	graphical environment is LIBW.LIB, which serves as the single import library
	through which an application can link to the Windows system DLLs GDI.DLL,
	KERNEL.DLL, and USER.DLL.
	
	An import library for many DLLs can be created by supplying multiple module
	definition (DEF) files as input parameters to the IMPLIB utility. However, one
	must make sure that none of the exported functions is defined in more than one
	DEF file. IMPLIB issues an error message when a function name is defined more
	than once, which occurs most often with the Windows exit procedure (WEP) because
	each DLL must export its own WEP in its DEF file.
	
	To avoid an IMPLIB error indicating that the WEP routine is defined many times,
	create modified DEF files that do not contain EXPORT statements for the WEP
	routine and specify these files as input to IMPLIB.
	
	MORE INFORMATION
	================
	
	Defining a function in an import library more than once creates an ambiguity
	when the loader resolves references to functions exported by other modules. For
	example, suppose two DLLs that share a common import library export an Open
	function. When an application refers to a function in a DLL, the loader resolves
	a reference to the function (known as a fix-up) to its true address (which is
	not known until run time). The DLL containing the function must be loaded to
	provide a true address for its functions. However, in this example, this poses a
	dilemma: because both DLLs contain an Open function, which one should be used?
	Because the application's source code makes no distinction between the two Open
	functions, the loader cannot resolve the reference correctly.
	
	To avoid the potential for ambiguity, IMPLIB issues an error message for each
	function that is defined in multiple DEF files and does not create a combined
	import library. Two DLLs that share a common function name cannot share a single
	import library. The one exception to this rule is the WEP function, which every
	DLL must export. Because an application does not call the WEP, the function need
	not be listed in the combined import library.
	
	To create a single import library, MYIMPLIB.LIB, that can be used to link to the
	three DLLs (DLL1, DLL2, and DLL3), perform the following four steps in this
	order:
	
	1. Compile and link all three DLLs as outlined in Chapter 20 of the "Microsoft
	  Windows Software Development Kit: Guide to Programming" for versions 3.0 and
	  3.1. Use the original DEF file to link each DLL. Each file must list the WEP
	  in its EXPORTS section with the RESIDENTNAME qualifier to properly export the
	  WEP function.
	
	2. Copy the module definition files for each DLL (DLL1.DEF, DLL2.DEF, and
	  DLL3.DEF) into three dummy DEF files (DUMMY1.DEF, DUMMY2.DEF, and
	  DUMMY3.DEF). These dummy DEF files are used to create the combined import
	  library as outlined in Step 3 below. Do not link any DLL using its dummy DEF
	  file.
	
	3. Remove the WEP from the EXPORTS statement of each dummy DEF file. Only
	  Windows calls the WEP procedure; the application does not. Therefore, the WEP
	  does not need to be defined in the import library. Removing the WEP entries
	  prevents an IMPLIB error about multiple definitions of the WEP routine.
	
	4. Use DUMMY1.DEF, DUMMY2.DEF, and DUMMY3.DEF as input parameters to the IMPLIB
	  utility, as follows:
	
	     IMPLIB MYIMPLIB.LIB DUMMY1.DEF DUMMY2.DEF DUMMY3.DEF
	
	The four steps above build a combined import library that contains the linkage
	information required for all of the exported functions in each of the three
	DLLs. It does not contain any information about any of the WEP functions.
	Because applications do not call the WEP function, this omission does not cause
	any linkage problems.
	
	A dummy DEF file must not be used to link a DLL because a dummy DEF file does not
	export the WEP function. Every DLL must export a WEP that Windows can call
	before removing the DLL from memory.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
