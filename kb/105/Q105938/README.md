---
layout: page
title: "Q105938: FORTRAN PowerStation 1.0 ANSWERS.TXT"
permalink: /kb/105/Q105938/
---

## Q105938: FORTRAN PowerStation 1.0 ANSWERS.TXT

{% raw %}

	Article: Q105938
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is an extract of the Microsoft FORTRAN PowerStation
	QUESTION.TXT file located in the \F32\README directory. It contains the answers
	to nine common questions.
	
	MORE INFORMATION
	================
	
	Question 1
	----------
	
	The FORTRAN 5.1 development system ran under MS-DOS and built applications for
	MS-DOS and Windows, and DLLs for Windows. Why does FORTRAN PowerStation run in
	Windows and build applications for MS-DOS?
	
	Answer:
	FORTRAN 5.1 is a 16-bit compiler. There are inherent capacity limitations
	associated with the 16-bit architecture. In order to let users overcome the DOS
	640K barrier, we created FORTRAN 5.1 that could generate QuickWin applications,
	essentially 16-bit applications that use extended memory as managed by Microsoft
	Windows. FORTRAN PowerStation is a 32-bit targeted compiler. Since Windows for
	DOS is a 16-bit operating system, it would be a potential source of performance
	constraints for 32-bit applications. 32-bit DOS-extended applications,
	therefore, was the route of choice. When Windows NT is released, Microsoft will
	release a 32-bit Windows NT (Win32) targeted compiler.
	
	Question 2
	----------
	
	Why is a program sometimes faster when compiled with F5.1?
	
	Answer:
	In some cases, code compiled with optimization disabled (-Od) may be faster with
	FORTRAN 5.1. We chose to provide a fast compile (-Od, default) and a fast
	execute (-Ox) option. FORTRAN 5.1 did some optimization even with -Od. Also
	there is no optimization default with FORTRAN Powerstation, but -Ox is the
	default with version 5.1. Since the default optimization is different between
	these versions, it is important to be careful and compare using the same level
	of optimization.
	
	Question 3
	----------
	
	How can I get the editor in the Visual Workbench to do column selections or use
	macros?
	
	Answer:
	These are not currently features that are available in the FORTRAN Visual
	Workbench editor. If you have a DOS editor that has these capabilities, it is
	often convenient to add the DOS editor to the Tools menu in FORTRAN Visual
	Workbench. You can do this by going to the Options.Tools menu item and clicking
	on the Add button. When you find the DOS editor executable file, select it and
	click OK. In the resulting dialog box in the Arguments text entry line, type
	
	  " $file" (without the quotation marks)
	
	and click on the OK button. You will now have an entry under your Tools menu that
	when selected will bring up your DOS editor with the file that is currently in
	the active window in FORTRAN Visual Workbench. You can then edit your file, and
	when you exit from the DOS editor you will return to FORTRAN Visual Workbench.
	The FORTRAN Visual Workbench will then allow you to reload the edited file using
	a dialog box.
	
	Question 4
	----------
	
	If I have created a project how do I delete it and its associated files?
	
	Answer:
	If you have created a project named TEST and want to delete it and all of its
	associated files you need to delete
	
	  TEST.FMK   This is the project makefile.
	  TEST.FPW   This is the project status file.
	  TEST.WSP   This is the project workspace file.
	
	The easiest way to maintain projects is to have a single project in a directory.
	After saving your source code, you can delete the entire directory to delete the
	project.
	
	Question 5
	----------
	
	When I compile with the /Zi option from the command line I get the following
	error:
	
	  Usage: cvpack [-p] [-help] exefile
	  LINK32() : warning LNK4527: CVPACK error
	
	Answer:
	Check your path and make sure that F32\BIN is the first thing in the path. If you
	have other language products in your path before F32\BIN, the version of
	CVPACK.EXE that is used by LINK32.EXE may be incorrect. If you type CVPACK at
	the DOS command line and press ENTER, you should see the following message:
	
	  Microsoft (R) Debugging Information Compactor Version 4.21
	  Copyright (c) Microsoft Corp 1987-1993. All rights reserved.
	
	If you see a version number earlier that the one above, you need to correct the
	order of directories in your path so that F32\BIN is first.
	
	Question 6
	----------
	
	I compiled and linked my program and it runs fine on the machine where FORTRAN
	Powerstation is installed but when I take it to another machine it won't run.
	How can I make this application run on another machine?
	
	Answer:
	There are two additional files that need to be installed on the machine where you
	are going to run the FORTRAN application: DOSXMSF.EXE and DOSXNT.386.
	DOSXMSF.EXE is the actual DOS extender that allows your 32-bit program to run
	under MS-DOS. DOXSNT.386 is a DPMI device driver that allows your program to run
	as a 32-bit DOS-extended program under Windows.
	
	You need to install DOSXMSF.EXE either in the same directory as the FORTRAN
	program or in a directory that is in your DOS PATH environment variable.
	DOSXNT.386 is a Windows device driver that is necessary if you want to run the
	FORTRAN application in an MS-DOS session under Windows. To install DOSXNT.386,
	you need the following entry in the SYSTEM.INI file under the [386Enh] section:
	
	  device=C:\F32\BIN\dosxnt.386
	
	Question 7
	----------
	
	I have a number of assembly code modules that I would like to use with FORTRAN
	PowerStation. How can I do this?
	
	Answer:
	16-bit assembly code must be modified to work with 32-bit applications. The
	assembly code will need to be converted to use a 32-bit flat memory model and,
	in some cases, will have to adjust for the fact that the application is running
	in 32-bit protected-mode and not in real-mode. Object modules produced by
	assemblers will probably be OMF-type files. They will need to be converted to
	COFF-type object modules. It is recommended that MASM 6.1 be used for 32-bit
	programmming. Please consult your MASM manual and Chapter 18 of the FORTRAN
	PowerStation User's Guide.
	
	An extended example of 32-bit MASM programming is provided with the GRDEMO sample
	project in the ..F32\SAMPLES\DEMO directory. The file MOUSE.ASM is a MASM
	routine used in the sample. The comments in this file include tips on assembly
	language programming.
	
	Question 8
	----------
	
	I see various components of the package with Windows NT in the name. Do I need
	Windows NT to run this product?
	
	Answer:
	Microsoft has committed to producing a Windows NT compiler. Certain elements of
	the FORTRAN PowerStation have been designed to facilitate the process of
	supporting the Windows NT operating system in future products. But this product
	is targeted at 32-bit DOS, and Windows NT is not a supported or required element
	of this package.
	
	Question 9
	----------
	
	I used to do mixed-language programming with high-level languages and FORTRAN.
	Can I do this with FORTRAN Powerstation?
	
	Answer:
	The object modules produced with 16-bit versions of C will not link correctly
	with FORTRAN Powerstation object modules. You can use one of the 32-bit C
	compilers available from Microsoft and other vendors to produce object modules
	that can be linked with FORTRAN Powerstation object modules.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
