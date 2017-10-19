---
layout: page
title: "Q180070: FIX: RESTORE SCREEN Does Not Refresh Form in VFP 5.0"
permalink: /kb/180/Q180070/
---

## Q180070: FIX: RESTORE SCREEN Does Not Refresh Form in VFP 5.0

	Article: Q180070
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the RESTORE SCREEN FROM <variable name> command does not restore
	information on a form or on a window created with the DEFINE WINDOW command when
	either object was saved to a memory variable using the SAVE SCREEN TO
	<variable name> command.
	
	RESOLUTION
	==========
	
	To refresh the form, use the toggle the LockScreen property of the form as shown
	below:
	
	     Testform.LockScreen=.T.
	     RESTORE SCREEN FROM y
	     Testform.LockScreen=.F.
	
	There is not a way to refresh a window created with the DEFINE WINDOW command.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	In the FoxPro Command window, enter the following commands:
	
	     Testform=CREATEOBJECT("form")
	     Testform.Show
	     ? "Hello"
	     SAVE SCREEN TO y
	     CLEAR
	     RESTORE SCREEN FROM y
	
	"Hello" does not appear on the form and the form is not refreshed.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q174244 RESTORE SCREEN Causes Memory Leak in Visual FoxPro 5.0
	
	Additional query words: kbvfp600fix
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
