---
layout: page
title: "Q178489: PRB: Error 53 &quot;File Not Found&quot; When Calling a DLL Function"
permalink: kb/178/Q178489/
---

## Q178489: PRB: Error 53 &quot;File Not Found&quot; When Calling a DLL Function

	Article: Q178489
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbAPI kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 10-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message displays when you attempt to call a function in a
	dynamic-link library (DLL) file from Visual Basic:
	
	  Error 53 "File Not Found"
	
	The error message occurs at the function call statement.
	
	CAUSE
	=====
	
	This message occurs when Windows is unable to load the specified DLL,
	particularly if the DLL has not been saved at the specified location. It will
	also occur if the dependency files required by the DLL file are not installed in
	the computer.
	
	RESOLUTION
	==========
	
	Install the dependency files required by the DLL file.
	
	MORE INFORMATION
	================
	
	There are a several available tools that will help you determine the dependency
	files for a DLL file:
	
	1. The Dependency Walker on the Platform Software Development Kit (SDK) will
	  display dependencies in a graphical form. In fact, if you use Depends on a
	  machine where this problem occurs, the missing DLL is displayed with a red
	  circle, making it easy to determine what the trouble lies.
	
	  You can obtain the Dependency Walker (Depends.exe) from the Platform SDK
	  CD-ROM that comes with the MSDN. It can also be downloaded from the following
	  Microsoft Web site:
	
	  http://www.microsoft.com/msdownload/platformsdk/setuplauncher.asp
	
	2. The QuickView utility that ships with Windows NT 4.0 shows the dependency
	  files required by a selected DLL file. The QuickView utility can be installed
	  from the Windows NT Setup tab of the Add/Remove Programs Properties dialog
	  box in the Control Panel.
	
	  NOTE: The Windows 95 version of QuickView does not provide this functionality.
	
	3. DUMPBIN.EXE is a utility that ships with Microsoft Visual C++ that can also
	  tell what are the required dependency files required by a DLL file. Use this
	  command line utility with the /import parameter to determine the dependency
	  files.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbAPI kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
