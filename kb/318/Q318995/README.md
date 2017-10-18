---
layout: page
title: "Q318995: FIX: When You Mix TEXT TO and SET TEXTMERGE Commnds Error Occurs"
permalink: kb/318/Q318995/
---

## Q318995: FIX: When You Mix TEXT TO and SET TEXTMERGE Commnds Error Occurs

	Article: Q318995
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
	
	If you issue both the TEXT TO and the SET TEXTMERGE commands to assign data to a
	variable, you may eventually receive the following error message and Visual
	FoxPro may stop responding:
	
	  Fatal error: Exception code=C0000005
	
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
	
	Paste the following code in a program (.prg) file, and then run the program from
	the Command window:
	
	NOTE: You may need to run the following code several times before Visual FoxPro
	stops responding.
	
	  TEXT TO text_var
	  	This is the first line of text.
	  ENDTEXT 
	
	  SET TEXTMERGE ON TO MEMVAR text_var ADDITIVE
	  	\This is the second line of text.
	  SET TEXTMERGE TO 
	
	  TEXT TO text_var ADDITIVE
	  	This is the third line of text.
	  ENDTEXT 
	
	  SET TEXTMERGE ON TO MEMVAR text_var ADDITIVE
	  	\This is the fourth line of text.
	  SET TEXTMERGE TO
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
