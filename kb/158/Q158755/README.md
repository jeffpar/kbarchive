---
layout: page
title: "Q158755: FIX: CLEAR ALL with Object References Causes Page Fault"
permalink: kb/158/Q158755/
---

## Q158755: FIX: CLEAR ALL with Object References Causes Page Fault

	Article: Q158755
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If there are objects that reference each other, Visual FoxPro displays the
	following error message when CLEAR ALL is carried out:
	
	  This Program has performed an illegal operation and will be shut down.
	
	Visual FoxPro terminates due to an Invalid Page Fault.
	
	WORKAROUND
	==========
	
	Delete object references before carrying out CLEAR ALL.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create and run a program containing the following code:
	
	        oform = CreateObject( "Form" )
	        oform.AddObject("X", "CB")
	        oform.AddObject("Y", "CB")
	        oform.y.pointer=oform.x
	        oform.x.pointer=oform.y
	        CLEAR ALL  && This causes an Invalid Page Fault and
	                   && shuts down Visual FoxPro.
	
	        DEFINE CLASS CB as CommandButton
	          pointer= .NULL.
	        ENDDEFINE
	
	Object references for "X" and "Y" above can be cleared by doing the following:
	
	        oform.removeobject("X")
	        oform.removeobject("Y")
	
	Additional query words: vfoxwin kbdsd kbvfp500 kbvfp600fix
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
