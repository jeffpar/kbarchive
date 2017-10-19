---
layout: page
title: "Q185263: FIX: Keyboard &quot;{PAUSE KEY}&quot; Command Hangs Visual FoxPro"
permalink: /kb/185/Q185263/
---

## Q185263: FIX: Keyboard &quot;{PAUSE KEY}&quot; Command Hangs Visual FoxPro

	Article: Q185263
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbnokeyword kbvfp500 kbvfp500a kbvfp600 kbVS600sp2 kbVS600SP1 kbVS600sp3f
	Last Modified: 20-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Issuing a KEYBOARD "{PAUSE KEY}" command in a program or in the Command window
	causes Visual FoxPro 5.x to hang.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	This behavior does not occur in Visual FoxPro 3.x.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run Visual FoxPro.
	
	2. From the Command window, issue the following command:
	
	  KEYBOARD "{PAUSE KEY}"
	
	  NOTE: Once the ENTER key is pressed, Visual FoxPro loses its cursor in the
	  Command window and none of the menu options respond to the mouse click. At
	  this point, the only way to exit Visual FoxPro is from the Windows Task
	  Manager.
	
	Additional query words: vfoxwin
	
	======================================================================
	Keywords          : kbservicepack kbnokeyword kbvfp500 kbvfp500a kbvfp600 kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
