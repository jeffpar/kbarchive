---
layout: page
title: "Q313921: FIX: Spanish Vers. of VFP 7.0 Doesn't Put Product ID in Registry"
permalink: kb/313/Q313921/
---

## Q313921: FIX: Spanish Vers. of VFP 7.0 Doesn't Put Product ID in Registry

	Article: Q313921
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbsetup kbvfp kbGrpDSFox kbDSupport kbvfp700 _IK283
	Last Modified: 06-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot obtain the product ID from the Help About dialog box or from Visual
	FoxPro (VFP) language functions.
	
	CAUSE
	=====
	
	The Spanish version of Visual FoxPro 7.0 does not write the product ID into the
	Windows registry. The setup routine that installs the Spanish version sets the
	HKLM\Software\Microsoft\VisualFoxPro\7.0\Registration\ProductID value to "".
	
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
	
	1. Install the Spanish version of VFP 7.0 on any operating system. The operating
	  system can be any language version.
	
	2. From the System menu, click Help, and then click About Microsoft Visual
	  FoxPro. Note that the Product ID field is blank.
	
	Because the registry key mentioned in the "Cause" section contains "", SYS(9) and
	VERSION(1) return nothing.
	
	Additional query words: kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbsetup kbvfp kbGrpDSFox kbDSupport kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
