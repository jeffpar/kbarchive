---
layout: page
title: "Q215374: BUG: Selecting &quot;Send to Back&quot; and &quot;Bring to Front&quot; Has No Affect"
permalink: /kb/215/Q215374/
---

## Q215374: BUG: Selecting &quot;Send to Back&quot; and &quot;Bring to Front&quot; Has No Affect

{% raw %}

	Article: Q215374
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB
	Last Modified: 04-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When right-clicking on a control in design time and selecting either "Send to
	Back" or "Bring to Front," the control appears to be placed accordingly. When
	the project is run, however, the controls appear as they were originally placed.
	
	CAUSE
	=====
	
	The controls are being passed to the VBCE run-time engine in the order that they
	appear in the VBControls collection of the Extensibility model.
	
	RESOLUTION
	==========
	
	Set the ZOrder property of the appropriate controls in code.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Windows CE HPC Project in Visual Basic. Form1 is created by
	  default.
	
	2. Place three command buttons on form1 and ensure that they overlap each other.
	
	3. Right-click Command1 and select Bring to Front from the pop-up menu. Note
	  that Command1 is now in front of the other command buttons.
	
	4. Run the project and target either emulation or the remote device. Note that
	  the controls are displayed as they were originally placed on the form.
	
	Additional query words: vbce vbce5 vbce6 wce wince
	
	======================================================================
	Keywords          : kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch kbWinCETK100VB600
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
