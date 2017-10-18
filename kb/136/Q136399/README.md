---
layout: page
title: "Q136399: INFO: Visual Basic and Source Code Control Glyphs"
permalink: kb/136/Q136399/
---

## Q136399: INFO: Visual Basic and Source Code Control Glyphs

	Article: Q136399
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600 kbVBp400 kbVBp600
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Visual Basic, the Project window displays a list of all the form modules,
	class modules, and standard modules in the project, as well as a single resource
	file, if one is used in the project. To the left of the file name, is a small
	icon (called a glyph) which shows the file type. There are different glyphs for
	forms, classes, modules, and resource files. In addition, if the file is read
	only, there will be a tiny red padlock on the bottom left hand corner of the VB
	glyph.
	
	There can be a second glyph to the left of the Visual Basic file glyph. This
	second glyph only appears if the file is under source code control. The Source
	Code Control glyphs are the same in Visual SourceSafe as they are in Visual
	Basic.
	
	NOTE: The forms, classes and modules should only be modified when the red check
	mark is visible. The red check mark is only visible when you have checked out
	the file.
	
	MORE INFORMATION
	================
	
	The source code control glyphs include the following:
	
	1. A sheet of paper with the corner folded and a black border indicates that the
	  file is under source code control and currently has read only status.
	
	2. A sheet of paper with the corner folded and a gray border indicates that the
	  file is under source code control and is currently checked out by another
	  user.
	
	3. A sheet of paper with a red check mark and a black border indicates that the
	  file is checked out of source code control to you and currently has
	  read/write status.
	
	4. Multiple sheets of paper with the corner folded and a gray border indicates
	  that the file is under source code control, is currently being shared with
	  another source code control project, and is currently checked out by another
	  user.
	
	5. Multiple sheets of paper with the corner folded, a red check mark, and black
	  border indicates that the file is under source code control, is currently
	  being shared with another source code control project, and is currently
	  checked out to you.
	
	IMPORTANT: Caution should be advised if the sheet of paper with the corner folded
	has a black border but neither the tiny padlock nor the red check mark are
	present. This indicates the file is under source code control, NOT checked out,
	but has read/write status. Anytime a file is not checked out, it should be
	marked read-only so you do not accidentally modify the file without it being
	checked out. To avoid possible problems, either check the file out to edit it or
	set the read-only flag from the Windows Explorer.
	
	If the Source Code Control Add-in is turned off by clearing the box in the Add-In
	Manager, all the source code control glyphs disappear. In addition, all the
	source code control menu items are disabled.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 kbVBp400 kbVBp600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500
	Issue type        : kbinfo
	
	=============================================================================
	
