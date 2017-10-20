---
layout: page
title: "Q316443: FIX: Exception Error when Using Period in EDITSOURCE Syntax"
permalink: /kb/316/Q316443/
---

## Q316443: FIX: Exception Error when Using Period in EDITSOURCE Syntax

{% raw %}

	Article: Q316443
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbvfp kbXBase kbGrpDSFox kbDSupport kbvfp700 _IK283
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you pass the EDITSOURCE function a third parameter that contains a period,
	the following error message may appear:
	
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
	
	The third parameter of the EDITSOURCE function identifies the name of a class or
	data environment for editing.
	
	Steps to Reproduce Behavior
	---------------------------
	
	In the Command window, type the following line of code and then press ENTER:
	
	  EDITSOURCE("Test.vcx",1,"x.y")
	
	Additional query words: kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbvfp kbXBase kbGrpDSFox kbDSupport kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
