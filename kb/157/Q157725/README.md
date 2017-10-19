---
layout: page
title: "Q157725: PRB: Min and Max Buttons Disappear when ControlBox = .F."
permalink: /kb/157/Q157725/
---

## Q157725: PRB: Min and Max Buttons Disappear when ControlBox = .F.

	Article: Q157725
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 5.0, the Minimize, Maximize, and Exit buttons disappear from
	the title bar of a form when the ControlBox property of a form is set to
	False(.F.). This behavior is different in Visual FoxPro versions 3.0 and 3.0b,
	where the Control-Menu box in the upper left corner of the form disappears and
	the Exit button only becomes disabled, when the ControlBox property is set to
	False(.F.).
	
	CAUSE
	=====
	
	This behavior in Visual FoxPro 5.0 occurs because FoxPro no longer draws all of
	its non-client areas. The operating system, which is Windows 95 or Windows NT
	4.0, takes care of this operation. When the ControlBox property of a form is set
	to False(.F.), Windows 95 or Windows NT 4.0 detects that there is no control
	box. It then presumes that you do not want to perform any of the operations that
	were contained within th1s control, such as Minimize, Maximize, or Exit.
	Therefore, the controls are removed.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The ControlBox property is used to specify whether a Control-menu box appears in
	the upper-left corner of a form or toolbar at run time. When the ControlBox
	property is set to False(.F.), the control-menu box disappears from the upper
	left corner of a form; however, when the ControlBox property is set to
	True(.T.), the control-menu box re-appears again.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form in the Form Designer.
	
	2. Set the ControlBox property of the form in the Properties windows to
	  False(.F.).
	
	Immediately after setting the ControlBox property to False(.F.), the Maximize,
	Minimize, and Close buttons disappear from the form title bar.
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          : kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	
	=============================================================================
	
