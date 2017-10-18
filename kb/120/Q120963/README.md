---
layout: page
title: "Q120963: PRB: ON KEY LABEL CMD+&lt;Key_Name&gt; Causes &quot;Syntax Error&quot;"
permalink: kb/120/Q120963/
---

## Q120963: PRB: ON KEY LABEL CMD+&lt;Key_Name&gt; Causes &quot;Syntax Error&quot;

	Article: Q120963
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5x,2.6a,3.0b
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 03-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the command "ON KEY LABEL CMD+<key_name>" (without the quotation
	marks), causes a "Syntax Error" error message.
	
	CAUSE
	=====
	
	The ON KEY LABEL command does not support the Macintosh COMMAND (CMD) key.
	
	RESOLUTION
	==========
	
	Use "ON KEY LABEL CTRL+<key_name>" (without the quotation marks) instead.
	FoxPro for Macintosh treats the COMMAND key like the CTRL key, so pressing
	either the COMMAND or the CTRL key will activate the ON KEY LABEL CTRL command.
	
	For example, to display a WAIT window when either CTRL+A or COMMAND+A are
	pressed, type the following in the Command window:
	
	     ON KEY LABEL CTRL+A WAIT WINDOW 'Test'
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	In the Command window, type the following:
	
	     ON KEY LABEL CMD+A WAIT WINDOW 'Test'
	
	Press COMMAND+A. Note that a "Syntax Error" message is displayed.
	
	Additional query words: VFoxMac FoxMac 2.50b 2.50c errmsg err msg control akz
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.5x,2.6a,3.0b
	
	=============================================================================
	
