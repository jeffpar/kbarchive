---
layout: page
title: "Q165296: PRB: Hiding Standard Toolbar Moves Position of Command Window"
permalink: /kb/165/Q165296/
---

## Q165296: PRB: Hiding Standard Toolbar Moves Position of Command Window

	Article: Q165296
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbtool kbui kbHWMAC kbvfp
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Command window shifts upward when undocking or closing (via the Toolbars
	selection from the View menu) the Standard toolbar or any docked toolbar when
	this removes a toolbar docking level. The Visual FoxPro desktop, Form Designer,
	Project Manager, Report Designer, Database Designer, user-designed forms and
	just about everything in Visual FoxPro all exhibit this behavior. Conversely,
	the windows shift down when another toolbar docking level is added.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Position the Command window flush against the lower left corner of the Visual
	  FoxPro desktop.
	
	2. Click Toolbars from the View menu. Clear the check box next to Standard.
	
	3. The Command window shifts slightly upward from its original position.
	
	Changing the value of SET MACDESKTOP does not change this behavior.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbui kbHWMAC kbvfp 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	Issue type        : kbprb
	
	=============================================================================
	
