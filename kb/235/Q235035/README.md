---
layout: page
title: "Q235035: PRB: Visual Basic Causes a Divide Error in Module GDI.EXE"
permalink: /kb/235/Q235035/
---

## Q235035: PRB: Visual Basic Causes a Divide Error in Module GDI.EXE

	Article: Q235035
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVBp600 kbOSWin98 kbGrpDSVB kbDSupport
	Last Modified: 10-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows 98 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows 98 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you place a visual control (such as a PictureBox, Image, ListView,
	TreeView, RptText, RptLabel, and so forth) on a form when you are running Visual
	Basic 5.0 or 6.0 on Microsoft Windows 98-based system, Visual Basic crashes with
	the following error messages concerning the Graphics Device Interface (GDI)
	module:
	
	  An Error has occurred in your program, to continue working anyway click on
	  Ignore...
	
	If you click the Close button, the following error message is displayed:
	
	  The program has performed an illegal operation...
	
	If you click the Details button, the following error message is displayed:
	
	  VB6 caused a divide error in module GDI.EXE at 0004:000006fe.
	
	  -or-
	
	  VB5 caused a divide error in module GDI.EXE at 0004:000006fe.
	
	The exact memory address may vary.
	
	
	CAUSE
	=====
	
	This behavior occurs because of a video driver that is not compatible with
	Visual Basic 5.0 or 6.0.
	
	RESOLUTION
	==========
	
	Restarting in Safe Mode (which uses the Windows standard VGA driver) eliminates
	the errors. Obtain and install a newer version of the video driver or try
	running the current video driver at a lower resolution or at a lower color
	depth.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q127139 Troubleshooting Video Problems in Windows
	
	
	Additional query words: GDI
	
	======================================================================
	Keywords          : kbVBp500 kbVBp600 kbOSWin98 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbPTNotAssigned kbZNotKeyword2
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
