---
layout: page
title: "Q306500: PRB: &quot;Foxcode Script '' Failure&quot; Error with Intellisense"
permalink: /kb/306/Q306500/
---

## Q306500: PRB: &quot;Foxcode Script '' Failure&quot; Error with Intellisense

	Article: Q306500
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbvfp kbGrpDSFox kbDSupport kbvfp700
	Last Modified: 16-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you uninstall a beta version of Visual FoxPro 7.0 and then install the
	release version, when Intellisense tries to display the syntax of a command or
	function, the following error may occur:
	
	  Foxcode Script '' Failure
	
	CAUSE
	=====
	
	The Visual FoxPro 7.0 beta uninstall program does not remove information in the
	Windows registry used by Intellisense. This information has pathing data that
	changed between the beta and release versions of the product.
	
	RESOLUTION
	==========
	
	Run VFPClean.app from the Command window of Visual FoxPro. VFPClean.app is
	installed in the home folder of Visual FoxPro 7.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install a beta version of Visual FoxPro 7.0.
	
	2. Uninstall the beta version.
	
	3. Install the release version of Visual FoxPro 7.0 on the same computer.
	
	4. Start Visual FoxPro 7.0 and in the Command window type a command to invoke
	  Intellisense. The error mentioned in the "Symptoms" section may occur.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbGrpDSFox kbDSupport kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbprb
	
	=============================================================================
	
