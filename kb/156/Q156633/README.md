---
layout: page
title: "Q156633: PRB: Wizards Echo Commands to the FoxPro Desktop"
permalink: kb/156/Q156633/
---

## Q156633: PRB: Wizards Echo Commands to the FoxPro Desktop

	Article: Q156633
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After starting any Visual FoxPro wizard, commands echo to the desktop.
	
	CAUSE
	=====
	
	The wizards are not setting the TALK to OFF before execution.
	
	WORKAROUND
	==========
	
	Issue the command SET STATUS BAR ON before running a wizard. However, since the
	default value of STATUS BAR is ON, this is only necessary if the command's value
	is changed in a program or interactively.
	
	If the command SET STATUS BAR OFF is necessary, you must issue the command SET
	TALK OFF. This also prevents the wizard from echoing commands to the desktop.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The wizards are sensitive to the settings of STATUS BAR and TALK. SET STATUS BAR
	OFF allows any Visual FoxPro wizard to echo commands to the desktop if TALK on
	ON. In FoxPro, the default value of TALK is ON. If STATUS BAR must be set to
	OFF, setting TALK to OFF before running a wizard prevents commands from
	appearing on the desktop.
	
	In the situation below, STATUS BAR is set OFF and TALK remains at its default
	value of ON. Therefore, commands appear.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Command window, type:
	
	     SET STATUS BAR OFF
	
	2. Run any FoxPro wizard, and note that commands echo on the FoxPro desktop.
	
	Additional query words: kbdsd VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	
	=============================================================================
	
