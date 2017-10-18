---
layout: page
title: "Q195838: PRB: Cut, Copy, and Paste Unavailable in Text Annotation Menu"
permalink: kb/195/Q195838/
---

## Q195838: PRB: Cut, Copy, and Paste Unavailable in Text Annotation Menu

	Article: Q195838
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDataview kbVBp600 kbVC600 kbVisID600 kbVS600 kbGrpDSVBDB _IK
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual InterDev, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you right-click a text annotation in a Database Diagram dialog box, the
	cut, copy, paste, and delete menu items in the pop-up menu are unavailable.
	
	RESOLUTION
	==========
	
	To workaround this behavior, use the following keyboard shortcuts to perform
	cut, copy, and paste functions in the Text Annotation box:
	
	Function     Keyboard Shortcut
	--------     -----------------
	
	Cut          Ctrl-X
	Copy         Ctrl-C
	Paste        Ctrl-V
	
	STATUS
	======
	
	This behavior is by design.
	
	
	MORE INFORMATION
	================
	
	This sections shows you how to reproduce the behavior. The section assumes you
	know how to create a Database Diagram.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Database diagram.
	
	2. Right-click the database diagram window and click New Text Annotation.
	
	3. Type four characters in the Text Annotation box.
	
	4. Right-click the Text Annotation area. The cut, copy, paste, and delete items
	  in the pop-up menu are unavailable. This behavior also occurs when you select
	  characters in the Text Annotation area.
	
	REFERENCES
	==========
	
	For more information on creating a Database diagram, please see Creating a
	Database Diagram in the Online help or at the following location on MSDN:
	
	  Creating a Database Diagram
	  (http://msdn.microsoft.com/library/default.asp?URL=/library/devprods/vs6/vstudio/vdbref/dvhowcreatingdatabasediagram.htm)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDataview kbVBp600 kbVC600 kbVisID600 kbVS600 kbGrpDSVBDB _IK 
	Technology        : kbVCsearch kbVisIDsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbVC600 kbVC32bitSearch kbVisID600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
