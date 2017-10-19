---
layout: page
title: "Q171501: FIX: User Control Moves When Width/Height Is Set in Container"
permalink: /kb/171/Q171501/
---

## Q171501: FIX: User Control Moves When Width/Height Is Set in Container

	Article: Q171501
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using a Frame or a PictureBox as its container at run-time, a user- created
	ActiveX control will move when its width or height is changed. However, the
	problem does not occur when a Form is used as the container or when the control
	is placed in the container at design-time.
	
	CAUSE
	=====
	
	UserControl caches the window handle it was activated on. When the size is
	changed, it tries to figure out its current coordinates within its parent by
	getting its screen coordinates and then mapping them relative to its parent's
	screen coordinates. Because its cached parent is no longer its real parent, it
	calculates the wrong coordinates and moves the control to those wrong
	coordinates.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ActiveX Control project. UserControl1 is created by default.
	
	2. Set some of UserControl1's properties to the following:
	
	  ScaleMode = 3 - Pixel
	  Backcolor = Blue or some color other than gray
	
	3. Close UserControl1. It now appears in the Toolbox.
	
	4. Select Add Project from the File menu and add a Standard EXE. Form1 is
	  created by default.
	
	5. Place the following controls on Form1:
	
	        Two CommandButton controls(Command1 and Command2);
	        One PictureBox (Picture1);
	        One UserControl1(UserControl11) that was just created;
	
	  NOTE: Make Picture1 large and UserControl11 small so that the undesired
	  behavior is more obvious.
	
	6. Set Picture1's ScaleMode to 3 - Pixel.
	
	7. Insert the following code to Command1's Click event procedure:
	
	        Set UserControl11.Container = Picture1
	        UserControl11.Top = 0
	        UserControl11.Left = 0
	
	8. Insert the following code to Command2's Click event procedure:
	
	        UserControl11.Top = 0
	        UserControl11.Left = 0
	        UserControl11.Width = UserControl11.Width + 30
	
	9. Press the F5 key to run the application
	
	10. Click on Command1 first. Usercontrol11 should be placed inside the Picture1.
	
	11. Click on Command2. UserControl11 should increase its width. It also moves in
	  Picture1.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
