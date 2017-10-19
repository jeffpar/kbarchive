---
layout: page
title: "Q318985: FIX: Error With Left Parenthesis in CREATE SQL VIEW Command"
permalink: /kb/318/Q318985/
---

## Q318985: FIX: Error With Left Parenthesis in CREATE SQL VIEW Command

	Article: Q318985
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbCtrl kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix
	Last Modified: 10-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If IntelliSense is enabled on your computer, and you create a local or remote
	view by using the CREATE SQL VIEW command, and you then type the left
	parenthesis after the AS clause of the CREATE SQL VIEW command, you receive the
	following error message:
	
	  Internal Consistency Error
	
	After this message is reported, Visual FoxPro closes.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Visual FoxPro for
	Windows 7.0.
	
	This problem was first corrected in Visual FoxPro for Windows 7.0 Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. On the IntelliSense Manager menu, click Tools, and then select Enable
	  IntelliSense.
	
	2. Paste the following code in a program (.prg) file named View_test.prg, and
	  then run the program from the Command window:
	
	  CREATE SQL VIEW mytest AS (
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
