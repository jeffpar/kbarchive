---
layout: page
title: "Q138326: HOWTO: Create a Browser Library for the Common Control Classes"
permalink: /kb/138/Q138326/
---

## Q138326: HOWTO: Create a Browser Library for the Common Control Classes

	Article: Q138326
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.1,2.2
	Operating System(s): 
	Keyword(s): kbprogramming kbusage kbnokeyword kbCmnCtrls kbCompiler kbCtrl kbMFC kbVC200 kbVC210 kb
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	As shipped on the 32-bit Edition Visual C++ CD-ROM compact disc, the Mfc.bsc
	browser database lacks information for the new MFC common control classes. This
	article describes the steps necessary to build the browse information for these
	new classes.
	
	MORE INFORMATION
	================
	
	Follow this procedure:
	
	1. Verify that you have at least 90 megabytes of free disk space on the drive
	  where Visual C++ is installed. This much space is required to build the
	  browse information. 86 megabytes can be freed once the browser database has
	  been built.
	
	2. Make a backup copy of the Makefile in Msvc20\Mfc\Src so that it can be easily
	  restored.
	
	3. Edit the Makefile to include the new common controls classes:
	
	  Change this line:
	
	        $D\winctrl1.obj $D\winbtn.obj \ 
	
	  to this:
	
	        $D\winctrl1.obj $D\winctrl2.obj $D\winbtn.obj \ 
	
	4. On some Visual C++ version 2.20 compact discs, the Appui3.cpp file contains
	  an error. View the Appui3.cpp file that was installed in your Msvc20\Mfc\Src
	  directory, and remove any characters that appear before the // (that is, the
	  start of the comment) on the first line.
	
	5. From a Command Prompt, run the \Msvc20\Bin\Vcvars32.Bat file to set the
	  proper environment variables.
	
	6. Change to the \Msvc20\Mfc\Src directory, and build the browse information by
	  running the NMAKE tool:
	
	     nmake browseonly=1 no_pch=1
	
	7. Provided you do not plan to rebuild the browse database frequently, remove
	  all files in the $NWD directory, and then remove the directory itself. The
	  intermediate .sbr files occupy roughly 54 megabytes of disk space and are not
	  required to use the browser.
	
	8. If you want, rename the new browse file from NafxcWD.bsc to Mfc.bsc.
	
	To use the browser file, start Visual C++, and on the File menu, click Open. Then
	choose the .BSC file that you just created. The Browser window will appear, and
	you can then look up any of the MFC functions or data variables including the
	common control classes such as CListCtrl.
	
	REFERENCES
	==========
	
	Please refer to Chapter 13 of the Visual C++ User's Guide in Books Online for
	information on how to effectively use the browser.
	
	Additional query words: 3.10 3.20 Windows 95
	
	======================================================================
	Keywords          : kbprogramming kbusage kbnokeyword kbCmnCtrls kbCompiler kbCtrl kbMFC kbVC200 kbVC210 kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC220 kbVC210
	Version           : winnt:2.1,2.2
	Issue type        : kbhowto
	
	=============================================================================
	
