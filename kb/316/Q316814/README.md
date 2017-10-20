---
layout: page
title: "Q316814: FIX: Mismatched Pushjmp Err Msg Using Beautify in IntelliSense"
permalink: /kb/316/Q316814/
---

## Q316814: FIX: Mismatched Pushjmp Err Msg Using Beautify in IntelliSense

{% raw %}

	Article: Q316814
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbvfp kbGrpDSFox kbDSupport kbvfp700 _IK283
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Beautify function on a memo field in the IntelliSense Manager,
	the following error messages may appear:
	
	  Mismatched pushjmp/popjmp call.
	
	  -followed by-
	
	  The instruction at "0x0041d983" referenced memory at "0x00000000". The memory
	  could not be "read".
	
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
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. On the Tools menu, click IntelliSense Manager.
	
	2. Click the Custom tab.
	
	3. Click to select any record in the grid window.
	
	4. Click Edit to open the FoxCode Browse window.
	
	5. Scroll to the right in the FoxCode Browse window, and then double-click the
	  "Data memo" field to open the Data memo window.
	
	6. On the Tools menu, click Beautify. (You do not need to enter data in the Data
	  memo window.)
	
	7. Close the Data memo window.
	
	8. Close the FoxCode Browse window.
	
	(In Visual FoxPro 7.0 SP1, the Beautify menu option is disabled after you open a
	memo field.)
	
	Additional query words: kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbvfp kbGrpDSFox kbDSupport kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
