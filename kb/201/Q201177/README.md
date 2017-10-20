---
layout: page
title: "Q201177: INFO: Visual Studio Macros for MFC and ATL Source Code"
permalink: /kb/201/Q201177/
---

## Q201177: INFO: Visual Studio Macros for MFC and ATL Source Code

{% raw %}

	Article: Q201177
	Product(s): Microsoft C Compiler
	Version(s): 3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbATL kbAutomation kbide kbMFC kbScript kbVC500 kbVC600 kbVS97 kbVS600 kbDevStudio kbDS
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0 
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Opening an SDK or Visual C++ header, or source file can be a tedious task as it
	often requires typing the full Visual C++ installation path (C:\Program
	Files\Microsoft Visual Studio\VC98) followed by the directory that you are
	interested in (include, atl\include, mfc\src, and so forth).
	
	MORE INFORMATION
	================
	
	The Visual Studio macros included in this article reduce this typing to a
	keystroke sequence or button press. These macros open a File Open dialog box
	with the directory set appropriately. For example, running the macro ATLInclude
	below invokes the File Open command with the directory set to the ATL Include
	directory.
	
	These macros are handy when attached to a tool bar button in the Visual C++
	Integrated Development Environment (IDE).
	
	  '---------------------------------------------------------------------
	  ' FILE DESCRIPTION: Macros for opening MFC/ATL Source files.
	  ' - Change the BaseDir settings for your installation
	  '----------------------------------------------------------------------
	  BaseDir ="C:\Program Files\Microsoft Visual Studio\VC98\"
	
	  Sub Include
	     'DESCRIPTION: Open VC Include dir
	     OpenDir "include"
	  End Sub
	
	  Sub ATLInclude
	     'DESCRIPTION: Open ATL Include dir
	     OpenDir "ATL\include"
	  End Sub
	
	  Sub ATLSrc
	     'DESCRIPTION: Open ATL Source dir
	     OpenDir "ATL\src"
	  End Sub
	
	  Sub MFCInclude
	     'DESCRIPTION: Open MFC Include dir
	     OpenDir "MFC\include"
	  End Sub
	
	  Sub MFCLib
	     'DESCRIPTION: Open MFC Library dir
	     OpenDir "MFC\lib"
	  End Sub
	
	  Sub MFCSrc
	     'DESCRIPTION: Open MFC Source dir
	     OpenDir "MFC\src"
	  End Sub
	
	  Private Sub OpenDir(dir)
	     OriginalDir = CurrentDirectory
	     CurrentDirectory = BaseDir + dir
	     ExecuteCommand "FileOpen"
	     CurrentDirectory = OriginalDir
	  End Sub
	
	Follow these steps to create a toolbar item out of one of these macros:
	
	1. From the Tools menu in the IDE, click Customize.
	
	2. On the Commands tab, select Macros from the Category drop-down list box.
	
	3. Drag-and-drop the macro from the Commands list onto an existing toolbar or
	  into blank space in the IDE.
	
	4. Select an image from the pop-up Button Appearance dialog box and click OK.
	
	REFERENCES
	==========
	
	Visual Studio Macro Reference
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Mike Francis, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbATL kbAutomation kbide kbMFC kbScript kbVC500 kbVC600 kbVS97 kbVS600 kbDevStudio kbDSupport kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbMFC kbATLsearch
	Version           : :3.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
