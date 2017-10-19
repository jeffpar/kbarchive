---
layout: page
title: "Q74507: BUG: Combo Boxes in DS_SYSMODAL Dialog Boxes"
permalink: /kb/074/Q74507/
---

## Q74507: BUG: Combo Boxes in DS_SYSMODAL Dialog Boxes

	Article: Q74507
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1,95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1, 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a combo box with the CBS_DROPDOWN or CBS_DROPDOWNLIST style inside
	a system modal dialog box, the following problem occurs in Windows versions 3.0,
	3.1, and Windows 95:
	
	- You cannot select an item from the drop-down list box by clicking it with the
	  mouse. The original selection remains in the edit control or static-text
	  control.
	
	When you use a combo box with the CBS_DROPDOWN or CBS_DROPDOWNLIST style within a
	system modal dialog box in Windows version 3.0, the following problems occur:
	
	- You cannot close the drop-down list box by clicking on a part of the list box
	  that lies outside the dialog box.
	
	- The parts of the drop-down list box that lie outside the dialog box are not
	  erased when the drop-down list box is closed.
	
	CAUSE
	=====
	
	The mouse messages that are meant for the drop-down list box never reach the
	list box.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.0, 3.1, and
	Windows 95.
	
	Additional query words: kbDSupport kbdsd kbUserGrp kbCtrl combobox
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1,95
	Issue type        : kbbug
	
	=============================================================================
	
