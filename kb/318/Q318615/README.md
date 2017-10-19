---
layout: page
title: "Q318615: FIX: VFP 7.0 Does Not Open Properly with Some Screen Readers"
permalink: /kb/318/Q318615/
---

## Q318615: FIX: VFP 7.0 Does Not Open Properly with Some Screen Readers

	Article: Q318615
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbGrpDSFox kbDSupport kbvfp700 _IK283
	Last Modified: 08-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In some cases, Visual FoxPro may open momentarily and then close when a screen
	reader program is running. This problem occurs with screen reader applications
	that use Microsoft Active Accessibility.
	
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
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	This problem has been verified with the following screen readers. This behavior
	also may occur with other screen reader applications.
	
	SynthaVoice Window Bridge 2.0 - Window Bridge Web site
	(http://www.techno-vision.co.uk/windowbridge.htm)
	Window-Eyes 4.1 - Window-Eyes Web site (http://www.gwmicro.com/windoweyes)
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install and run one of the screen readers listed in this article.
	
	2. Install and attempt to start Visual FoxPro 7.0.
	
	NOTE: Earlier versions of Visual FoxPro run with these screen readers, but do not
	interact well with these applications.
	
	For additional information about Visual FoxPro and other screen readers, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q191326 PRB: JAWS Software Cannot Read Some of FoxPro Menus
	
	
	Additional query words: kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbGrpDSFox kbDSupport kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
