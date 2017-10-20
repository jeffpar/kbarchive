---
layout: page
title: "Q317425: FIX: Exception Error With Two Successive INDEX ON Commands"
permalink: /kb/317/Q317425/
---

## Q317425: FIX: Exception Error With Two Successive INDEX ON Commands

{% raw %}

	Article: Q317425
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0,7.0
	Operating System(s): 
	Keyword(s): kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0, 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you issue two successive INDEX ON commands, you may receive the following
	error message:
	
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
	Windows 7.0. This problem was first corrected in Visual FoxPro for Windows 7.0
	Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps To Reproduce Behavior
	---------------------------
	
	The following code may not produce an error when you run the program from the
	Command window. However, the INDEX ON command may cause the error when you run
	the program from within a large Visual FoxPro application.
	
	Save the following code in a program (.prg) file and then run the program:
	
	  SET TALK ON
	  SET SAFETY OFF
	  LOCAL xrec_cnt
	
	  CREATE CURSOR av_tbl ( fld_01 C(2))
	
	  FOR xrec_cnt = 1 TO 13316
	     INSERT INTO av_tbl ( fld_01 ) VALUES (SPACE(2) )
	  ENDFOR
	
	  INDEX ON fld_01 TAG key_field
	
	  INDEX ON fld_01 TAG key_field
	
	Additional query words: kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP700 kbVFP500a
	Version           : :5.0,5.0a,6.0,7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
