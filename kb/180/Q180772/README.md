---
layout: page
title: "Q180772: PRB: Form Is Movable When Maximized"
permalink: kb/180/Q180772/
---

## Q180772: PRB: Form Is Movable When Maximized

	Article: Q180772
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB
	Last Modified: 16-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set the WindowState property of a form to "2 - Maximized," you can move
	the form by clicking on the titlebar and dragging it.
	
	RESOLUTION
	==========
	
	The standard for Windows CE applications is to have no titlebar on maximized
	forms. To do this, set the BorderStyle property of the Form to "0 - None" and
	the Windowstate property to "2 - Maximized." Be sure to include a button, menu,
	or some other means of closing the form (for example, using the Hide method or
	the App.End method).
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: vbce vbce6 wince wce evb
	
	======================================================================
	Keywords          : kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
