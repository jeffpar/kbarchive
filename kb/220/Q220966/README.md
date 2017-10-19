---
layout: page
title: "Q220966: FIX: Custom Expression Builder with Query Designer Crashes VFP"
permalink: /kb/220/Q220966/
---

## Q220966: FIX: Custom Expression Builder with Query Designer Crashes VFP

	Article: Q220966
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbDesigner kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 02-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A custom expression builder is defined with the _getexpr system variable.
	Pressing the expression builder button next to the "Functions and expressions"
	text box in the Query Designer causes the following error:
	
	  Fatal error. Exception=C0000005
	
	This also occurs if you set _getexpr to a file that does not exist.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program called Mytest that contains the following code and save it:
	
	  PARAMETER x
	  ? x
	  RETURN
	
	2. Issue the following commands in the Command window:
	
	  _getexpr="Mytest"
	  CREATE QUERY
	
	3. After the Open dialog appears, press the ESCAPE key.
	
	4. Press the button containing the ellipses (...) next to the Functions and
	  Expressions text box.
	
	The error listed in the SYMPTOMS section occurs.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDesigner kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
