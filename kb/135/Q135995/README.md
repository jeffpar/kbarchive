---
layout: page
title: "Q135995: Visual SourceSafe Integration with Visual Basic 4.0 and 5.0"
permalink: /kb/135/Q135995/
---

## Q135995: Visual SourceSafe Integration with Visual Basic 4.0 and 5.0

	Article: Q135995
	Product(s): Microsoft SourceSafe
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600 kbVBp400 kbVBp500kbfaq
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article covers some of the most frequently asked questions (FAQ) about the
	Visual Basic Add-In to Visual SourceSafe.
	
	MORE INFORMATION
	================
	
	1. Q. I have installed Visual Basic and Visual SourceSafe, but Visual SourceSafe
	  is still not available in the Visual Basic Add-In menu. Why?
	
	  A. Make sure Visual SourceSafe was installed after you installed Visual Basic.
	  If you install Visual SourceSafe before Visual Basic, Visual SourceSafe does
	  not know you plan to use the add-in functionality because it does not find
	  Visual Basic. Therefore, the installation does not install the add-in hooks.
	  You must install Visual SourceSafe (Client, Custom, or preferably
	  Netsetup.exe) after installing Visual Basic.
	
	  If you install the custom version, you must select the "Visual Basic and
	  Visual C++ Registration" check box in Visual SourceSafe version 4.x, or
	  "Enable SourceSafe Integration" for version 5.0 or later. This is what
	  installs the registry hooks necessary for Visual Basic to find Visual
	  SourceSafe.
	
	  For more information about what the registry hooks are and how integration
	  works, please see the following article in the Microsoft Knowledge Base:
	
	  Q133018 Visual SourceSafe Setup Registration Settings
	
	
	2. Q. I have a project under Visual SourceSafe control. Why can't I make any
	  modifications to my files in this project now?
	
	  A. When anything is under Visual SourceSafe control, the files must be checked
	  out of Visual SourceSafe before they can be modified in Visual Basic. There
	  are several easy ways to tell if the files are checked out:
	
	   - When viewing the project in Visual Basic, if a file is checked out, there
	     will be a check mark in the box on the left side of the given file icon.
	     When viewing the code, if the file is checked out, you will be able to
	     make modifications. If the file is not checked out, you will see (read
	     only) on the top.
	
	     In addition, within Visual Basic, when you select any control, there will
	     be a black stretch box instead of a white stretch box.
	
	   - In the Visual SourceSafe Explorer, if the files are checked out, there
	     will be a check mark on top of the icon next to the file name and there
	     will be a check-out directory specified.
	
	3. Q. I have my Visual Basic project under Visual SourceSafe control. Now I see
	  miniature icons appearing by my file names when I view the project. What are
	  these and what do they mean?
	
	  A. These miniature icons are called glyphs. There are a variety of glyphs used
	  by Visual SourceSafe, Visual Basic, and other programs to let the user know
	  the status of each and every file under Visual SourceSafe control.
	
	  For files that are under SourceSafe control but not checked out, you will see
	  a little red padlock on the corner of the icon for that file. This means that
	  the files are under SourceSafe Control and are not checked out.
	
	  The glyph you see when you check out a file is a check mark on the side next
	  to the icon. This means the file is checked out of SourceSafe to you and that
	  it is editable.
	
	  The Visual SourceSafe Explorer uses these and a number of other different
	  icons to represent different states of various files. See your Visual
	  SourceSafe documentation for details.
	
	4. Q. I have renamed a file in the Visual SourceSafe Explorer. Why is the file
	  not renamed in Visual Basic?
	
	  A. Visual SourceSafe doesn't have a way to tell Visual Basic to rename a file
	  in a given project. On the other hand, Visual Basic, through the integration
	  component, can tell SourceSafe that a file has been renamed. Therefore, the
	  best way to rename a file is to do it within Visual Basic. This will update
	  the Visual SourceSafe Explorer.
	
	REFERENCES
	==========
	
	For additional information on Visual SourceSafe Integration with Visual Basic
	version 6.0, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q201649 FAQ: Visual SourceSafe Integration with Visual Basic 6.0
	
	Additional query words: vss FAQ Q&A vbwin VB Visual Basic
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 kbVBp400 kbVBp500 kbfaq
	Technology        : kbVBSearch kbSSafeSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500 kbVB400Search kbVB400 kbVB16bitSearch kbSSafe600 kbSSafe400 kbSSafe500
	Version           : :4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
