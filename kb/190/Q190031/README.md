---
layout: page
title: "Q190031: PRB: Control Does Not Remain in Lightweight Frame Control"
permalink: /kb/190/Q190031/
---

## Q190031: PRB: Control Does Not Remain in Lightweight Frame Control

	Article: Q190031
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A lightweight control is placed within the boundaries of a lightweight Frame
	control. When you move the lightweight Frame control, the other lightweight
	control does not move with the Frame control: it remains in the original
	position.
	
	CAUSE
	=====
	
	The lightweight Frame control is not a true container.
	
	RESOLUTION
	==========
	
	Either use the standard Frame control to contain other controls or just place
	controls on top of the lightweight Frame so that it visually contains the
	controls. You can group lightweight OptionButtons by setting their Group
	properties to the same unique string.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Although lightweight or windowless controls can contain other lightweight
	controls, the lightweight Frame control cannot contain another lightweight
	control.
	
	The next section assumes that you have the lightweight controls installed and
	registered on your system.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a reference to the Microsoft Windowless Controls 6.0 by completing the
	  following steps:
	
	  a. From the Project menu, select Components to display the Components dialog
	     box.
	
	  b. In the Controls Tab, check "Microsoft Windowless Controls 6.0."
	
	  c. Click OK to close the Components dialog box.
	
	3. Add a WLFrame control to Form1. Select the WLFrame control.
	
	4. Place a second lightweight control within the boundaries of the WLFrame
	  control.
	
	5. Move the WLFrame control. Note that the other lightweight control remains in
	  the original position.
	
	REFERENCES
	==========
	
	For additional information, search Help for "Frame Control (Lightweight)" and
	the Group property.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q189950 HOWTO: Install the Microsoft Windowless Controls for VB6
	
	  Q184687 INFO: Lightweight Controls in Visual Basic 6.0
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp600 kbCtrl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
