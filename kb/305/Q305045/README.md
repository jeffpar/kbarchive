---
layout: page
title: "Q305045: PRB: Messagebox() or Inputbox() Fails to Time Out"
permalink: kb/305/Q305045/
---

## Q305045: PRB: Messagebox() or Inputbox() Fails to Time Out

	Article: Q305045
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet kbvfp500xSearch kbvfp700
	Last Modified: 31-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A MessageBox() or InputBox() function with a timeout parameter less than one
	millisecond may never time out.
	
	CAUSE
	=====
	
	Because both functions use milliseconds as their timeout parameter, any number
	that is less than one is treated as a zero. For example, using 0.5 as the
	timeout parameter causes InputBox or MessageBox to display indefinitely because
	the value is treated as a zero.
	
	RESOLUTION
	==========
	
	Use a timeout parameter that is greater than or equal to one.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	To reproduce the behavior, type either of these lines in the Command window:
	
	  =INPUTBOX("Hello world","Hey there! ","",0.5)
	  =MESSAGEBOX("Hello world", 0, "", 0.5)
	
	Note that neither window times out; both windows remain on the screen
	indefinitely.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet kbvfp500xSearch kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbprb
	
	=============================================================================
	
