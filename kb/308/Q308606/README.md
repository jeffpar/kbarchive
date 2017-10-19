---
layout: page
title: "Q308606: FIX: VFP 7.0 Hangs If Immersion Desktop Software Is Running"
permalink: /kb/308/Q308606/
---

## Q308606: FIX: VFP 7.0 Hangs If Immersion Desktop Software Is Running

	Article: Q308606
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbMiscTools kbvfp kbGrpDSFox kbDSupport kbvfp700 _IK283
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Immersion Desktop 2.1 software that comes with the IFeel Logitech mouse
	is running, Visual FoxPro 7.0 may stop responding upon starting or soon
	thereafter.
	
	Earlier versions of Visual FoxPro do not have a problem with the Immersion
	Desktop 2.1 software.
	
	CAUSE
	=====
	
	Visual FoxPro 7.0 does not run properly if the Immersion software is already
	running.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	To work around this problem, turn off the Immersion software.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Visual FoxPro for
	Windows 7.0. This problem was first corrected in Visual FoxPro for Windows 7.0
	Service Pack 1.
	
	MORE INFORMATION
	================
	
	The Logitech IFeel mouse comes with software created by Immersion Software. This
	software makes the mouse vibrate when the cursor passes over an object that
	performs an action when clicked; for example, a hyperlink or a button object.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install the Immersion software that comes with the Logitech IFeel mouse. You
	  can also download this software from the Logitech Web site:
	
	  http://www.logitech.com (http://www.logitech.com)
	
	  Follow the links to the IFeel mouse and select the Download Software link. The
	  file name is IMMDESKTOP21_ALL.MSI.
	
	2. After the software is installed, you will see an icon on the Windows Taskbar
	  that looks like a hand. (An Immersion Desktop tool tip appears when you move
	  the mouse over it.)
	
	3. Click Start, point to Programs, and click Microsoft Visual FoxPro 7.0. Note
	  that Visual FoxPro stops responding upon starting or shortly thereafter.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbMiscTools kbvfp kbGrpDSFox kbDSupport kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
