---
layout: page
title: "Q135338: HOWTO: View Exported Functions in a DLL"
permalink: /kb/135/Q135338/
---

## Q135338: HOWTO: View Exported Functions in a DLL

	Article: Q135338
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 28-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses two methods you can use to find out which functions are
	used (imported or exported) in a .DLL (dynamic link library) file. You can use
	these methods to determine if a function or API call is supported in a
	particular DLL or to find out which DLL has a particular exported function. In
	addition, other DLL details that you discover may help you debug your
	application or call functions in a DLL.
	
	MORE INFORMATION
	================
	
	Method One
	----------
	
	By using the Windows 95 shell and the Explorer with the QuickView option
	installed, you can view the functions imported and exported by the DLL. To do
	so, use the secondary (right) mouse button, and click the .DLL file. Then select
	QuickView.
	
	You can also select an .FLL file that has an extension not normally associated
	with the QuickView DLL viewer. Using the secondary mouse button, click the file,
	select open, and use the QuickView default viewer.
	
	NOTE: The QuickView capability of Windows 95 is available only on the CD-ROM
	version of the Windows 95.
	
	Method Two
	----------
	
	This method requires Microsoft Visual C++. Through the DUMPBIN.EXE, LINK.EXE, or
	the LINK32.EXE (Microsoft Visual C++ version 1.1) tools that you can find in the
	\Msvc\Bin directory, you can find information similar to that provided by
	QuickView. Microsoft Visual C++ version 1.0 also has this capability through a
	utility in the \Msvc\Bin directory called Exehdr.exe, though this program is not
	capable of opening 32-bit .DLL files.
	
	How to Install Windows 95 QuickView
	-----------------------------------
	
	The Windows 95 QuickView functionality is not installed by default, so you may
	find that it is not installed on your computer. To add it, follow these steps:
	
	1. In the Control Panel, select Add/Remove Programs.
	
	2. Select Windows Setup and then the Accessories category.
	
	3. Select QuickView in the details section of the Accessories group.
	
	Example Syntax
	--------------
	
	Assuming you want to use the Microsoft Visual C++ utilities to view the details
	of Foxtools.fll, use this syntax:
	
	- 
	
	  LINK -DUMP -EXPORTS C:\VFP\FOXTOOLS.FLL > DETAILS.TXT
	
	  -or-
	
	     LINK /DUMP /EXPORTS C:\VFP\FOXTOOLS.FLL > DETAILS.TXT
	
	- 
	
	  DUMPBIN -EXPORTS C:\VFP\FOXTOOLS.FLL > DETAILS.TXT
	
	  -or-
	
	     DUMPBIN /EXPORTS C:\VFP\FOXTOOLS.FLL > DETAILS.TXT
	
	- 
	
	  EXEHDR C:\FPW26\FOXTOOLS.FLL > DETAILS.TXT
	
	This syntax creates a text file called Details.txt that contains the listing of
	imported and exported functions.
	
	NOTE: These tools won't tell you which parameters the function is expecting. You
	need to know that already or find out from the appropriate Windows API reference
	(if it is a Microsoft Windows DLL) or from the specifications of the product
	that installed the DLL.
	
	REFERENCES
	==========
	
	- Window 95 documentation, Resource Kit
	
	- Visual C++ documentation
	
	Additional query words: export
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
