---
layout: page
title: "Q119516: Find Source: Please Enter the Path for MFC"
permalink: kb/119/Q119516/
---

## Q119516: Find Source: Please Enter the Path for MFC

	Article: Q119516
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbide kbVC
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Workbench for Windows 
	- Microsoft Visual C++, versions 1.0, 1.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When debugging an application written using the Microsoft Foundation Class (MFC)
	Libraries, the Visual Workbench's integrated debugger is often used to trace
	into class library source code. If the debugger can not find the source files
	for the MFC Libraries, it displays a "Find Source" dialog box requesting the
	path for the MFC source file. After entering the path for the MFC source file,
	the debugger works fine.
	
	MORE INFORMATION
	================
	
	When Visual C++ is installed, the Setup program determines the correct directory
	paths for several file types and updates the "Options|Directories..." dialog box
	with these paths in the Visual Workbench. One of the file types is for the
	Microsoft Foundation Class Library source files. Its path is set to C:\MSVC\MFC
	by the Setup program if the user selects the "Typical Installation" without
	changing the default directory. The path could be changed through the
	"Directories" dialog box in the Visual Workbench under the "Options" menu item.
	Typically this needs to be done if a user copies the MFC source code to a
	different directory other than the default directory.
	
	To change the path for the MFC source code in the "Directories" dialog box,
	follow the steps below:
	
	1. Open the Visual Workbench.
	
	2. Select "Options" on the menu bar.
	
	3. Select "Directories...".
	
	4. In the "MFC Files Path:" edit box, specify the base directory where the
	  Microsoft Foundation Class Library source code is located. For example, if
	  the MFC library source code is located in directory
	
	                 C:\VC150\mfc\src
	
	  then specify the following in the "MFC Files Path:" edit box:
	
	                 C:\VC150\mfc
	
	  The relative path \src is embeded in the MFC libraries and will be appended to
	  the end of the path speicifed in the "MFC Files Path:" edit box when the MFC
	  source code is needed for debugging.
	
	5. Click OK button to save the changes.
	
	Incorrectly specifying the path for the MFC source code could trigger the "Find
	Source" dialog box to be displayed each time the debugger could not find the
	source code for the MFC libraries.
	
	NOTE: For Visual C++ 2.x you cannot change the "MFC Files Path" as described in
	this article. When debugging you will be presented with a dialog box requesting
	the location of the MFC files. This information is stored in the .VCP file for
	the project. It will not be requested again until you open a new project that
	does not have this information stored.
	
	
	Additional query words: kbinf 1.00 1.10 1.50
	
	======================================================================
	Keywords          : kbide kbVC 
	Technology        : kbVCsearch kbVSsearch kbAudDeveloper kbvc150 kbvc100
	
	=============================================================================
	
