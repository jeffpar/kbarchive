---
layout: page
title: "Q231636: HOWTO: Controlling the Visual C++ IDE Source Code Editor Window"
permalink: kb/231/Q231636/
---

## Q231636: HOWTO: Controlling the Visual C++ IDE Source Code Editor Window

	Article: Q231636
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbEditor kbide kbScript kbVC500 kbVC600 kbVCObj kbDevStudio kbDSupport kbG
	Last Modified: 10-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Visual C++ Integrated Development Environment (IDE) you can open a file
	belonging to a Project via the Open item on the File menu or from the FileView
	tab in the Workspace window. You can open files that don't belong to the current
	project using the File menu's Open item only. The window displaying the file
	contents opens up docked or with certain dimensions that cannot be specified by
	anyone.
	
	This article explains how to control the dimensions of the window that is
	launched when an existing file is opened in the Visual C++ editor.
	
	MORE INFORMATION
	================
	
	The dimensions of the windows containing the file data can be controlled using
	Visual C++ Automation. The Visual Basic Scripting Edition code below captures
	the DocumentOpen event and then specifies the Window dimensions:
	
	  sub Application_DocumentOpen(theDocument)
	    theDocument.ActiveWindow.Height = 500
	    theDocument.ActiveWindow.Width = 500
	  end sub
	
	Use the following steps to use the above macro in Visual C++:
	
	1. Open an existing file with the .dsm extension or create one.
	
	2. Paste the above code in the file.
	
	3. In Visual C++ do the following:
	  a. From the Tools menu, select Customize.
	
	  b. Select the Add-ins and Macros Files tab
	
	  c. Click the Browse button to load the DSM file containing the above Macro.
	     Once the file has been selected in the Browse dialog box, your DSM file
	     will appear in the Add-ins and macro file list with a checked box next to
	     it.
	
	  d. Click Close to continue.
	
	If you modify the macro, you should reload it by right-clicking within the Visual
	C++ editor window that has the corresponding .dsm file open and selecting the
	Reload Macro File item from the shortcut menu.
	
	This macro works for the text-based files only, For example, it has no effect in
	the Resource Editor. You can also implement this as an Add-In written in Visual
	C++ or Visual Basic. It handles only opening existing files. To handle creation
	of new documents, you should use the NewDocument event.
	
	REFERENCES
	==========
	
	For more information please refer the following topic in the MSDN Library
	(http://msdn.microsoft.com/library/default.htm):
	
	  Visual Studio 6.0 Documentation; Visual C++ Documentation; Using Visual C++;
	  Visual C++ User's Guide; Automating Tasks in Developer Studio; Developer
	  Studio Objects
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAutomation kbEditor kbide kbScript kbVC500 kbVC600 kbVCObj kbDevStudio kbDSupport kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
