---
layout: page
title: "Q156511: PRB: WhatsThisButton Disappears when Form Designer Gets Focus"
permalink: kb/156/Q156511/
---

## Q156511: PRB: WhatsThisButton Disappears when Form Designer Gets Focus

	Article: Q156511
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbvfp500
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The WhatsThisButton button for a form disappears when the Form Designer receives
	focus at design time. However, when you click the place where WhatsThisButton is
	located in the form, WhatsThisButton becomes visible again. This behavior
	happens at only design time. The button is visible at run time.
	
	CAUSE
	=====
	
	The operating system is causing the button to disappear. Whenever the Close
	button is grayed out, the WhatsThisButton button is not available.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The WhatsThisButton button is used for context-sensitive Help in Windows
	
	1. This button is located in the upper-right corner of the form and has a
	
	question mark (?) inside the button. This button is used to start Windows Help
	and load a topic identified by the WhatsThisHelpID property.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form.
	
	2. Set all of the appropriate settings below in the Property window to make the
	  WhatsThisButton property visible in the form.
	
	        WhatsThisButton property = .T.
	        WhatsThisHelp property = .T
	        BorderStyle property = 3
	        MinButton property =  .F.
	        MaxButton property .F.
	
	3. Once the WhatsThisButton button(?) is visible on the upper-right corner of
	  the form, click on the form design area.
	
	The WhatsThisButton button disappears from the upper-right corner of the form.
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          : kbvfp500 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	
	=============================================================================
	
