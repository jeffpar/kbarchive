---
layout: page
title: "Q314642: FIX: VFP Disappears When You Hold Mouse Pointer over Memo Field"
permalink: /kb/314/Q314642/
---

## Q314642: FIX: VFP Disappears When You Hold Mouse Pointer over Memo Field

{% raw %}

	Article: Q314642
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700fix kbvfp700 _IK283
	Last Modified: 24-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you hold the mouse pointer over a memo field in the debugger, Visual FoxPro
	may close with a fatal exception error.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Visual FoxPro for Windows 7.0 Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.prg) file:
	
	  CREATE CURSOR D1043 (cPlaceTheMouseHereAndWait M)
	  INSERT INTO D1043 VALUES (REPLICATE("X",64000))
	  SET STEP ON
	  RETURN
	
	2. When the debugger appears, move the mouse pointer over
	  cPlaceTheMouseHereAndWait in the Trace window. Visual FoxPro closes with a
	  fatal exception error.
	
	Additional query words: kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700fix kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
