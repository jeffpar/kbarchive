---
layout: page
title: "Q108433: Illustrates Multithreaded Programming Techniques"
permalink: /kb/108/Q108433/
---

## Q108433: Illustrates Multithreaded Programming Techniques

	Article: Q108433
	Product(s): Microsoft C Compiler
	Version(s): 1.0,2.0,2.1,4.0,4.1,5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbfile kbCRT kbVC100 kbVC200 kbVC210 kbVC400 kbVC410 kbVC500 kbVC600
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 4.1, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MTDLL sample illustrates several techniques and concepts related to
	multithreaded programming in Win32. The sample uses a multithreaded dynamic-link
	library (DLL) to implement six sorting algorithms. The DLL is called into from a
	Microsoft Foundation Class (MFC) Libraries application that uses a dialog box as
	the main window. The six sorting algorithms implemented are the Bubble sort,
	Exchange sort, Heap sort, Insertion sort, Quick sort, and Shell sort.
	
	NOTE: The sample code has been built using Visual C++, version 2.0. If you are
	using versions 4.0 or later, you need to convert the project files to Developer
	Studio projects. To do so, open a workspace specifying SORTDEMO.MAK and
	SORTDLL.MAK file. A message box appears that prompts you for the project name
	and it does a conversion for you. Visual C++ 5.0 and 6.0 cannot convert the
	Sortdll.mak. A makefile wrapper project is generated instead.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Mtdll.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	MORE INFORMATION
	================
	
	Some of the multithreaded concepts and techniques illustrated by the sample
	are:
	
	- Conditionally using __declspec(dllexport) and __declspec(dllimport) on
	  function prototypes that reside in a header file that is included in both the
	  DLL and the calling application.
	
	- Using __declspec(thread) to allocate thread-local data.
	
	- Using a critical section object to control access to the display.
	
	- Handling termination of a currently executing thread.
	
	- Using _beginthread() and _endthread() to handle thread creation and
	  termination.
	
	The calling executable and the sorting DLL in this sample also use mutual
	imports. That is, the executable calls routines that have been exported from the
	DLL, and the DLL calls routines that have been exported from the executable. The
	sample includes the import libraries needed to build both the DLL and the
	calling executable. However, if the sample is modified and additional functions
	are exported from both the executable and the DLL, the mutual imports could make
	it impossible to build either the DLL or the executable, because one must be
	built before the other. This situation can be worked around by using the LIB
	utility with the /DEF option to build an import library from a linker .DEF file.
	This technique is discussed in Chapter 4 of the "Programming Techniques" manual
	and Chapter 3 of the "Build Tools User's Guide" supplied with Visual C++ for
	Windows NT.
	
	This sample does not use .DEF files to specify exported functions. It illustrates
	using __declspec instead. However, the sample does include .DEF files for the
	DLL and the executable, which can be used as starting points if at some point
	the LIB utility needs to be used with the /DEF option to solve the problem of
	mutual imports.
	
	This sample also uses CTL3D32.DLL to implement a 3-D look for its dialog box
	controls. For CTL3D32.DLL to work, however, it must be copied from the
	multithreaded DLL sample directory to the Windows NT SYSTEM32 subdirectory, for
	example C:\WINNT\SYSTEM32. After copying the DLL, it must be deleted from the
	multithreaded DLL sample directory. If CTL3D32.DLL is not copied to the
	\WINNT\SYSTEM32 directory and deleted from the multithreaded DLL sample
	directory, a message box with the following error will be displayed when the
	sample is run:
	
	  This application uses CTL3D32.DLL, which has not been correctly installed.
	
	After choosing OK to dismiss the message box, the main dialog box of the sample
	is displayed but it uses a white background and none of the dialog box controls
	will be 3-D.
	
	You may receive a linker error of the type:
	
	  error LNK2001: unresolved external symbol _Ctl3dxxxxxxxx
	
	This means that the Ctl3d32.lib file is not one of the library modules passed to
	the linker. Specify this library in the "Object/library modules:" box on the
	Link property page in the Project Settings dialog box.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbfile kbCRT kbVC100 kbVC200 kbVC210 kbVC400 kbVC410 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : :1.0,2.0,2.1,4.0,4.1,5.0,6.0
	
	=============================================================================
	
