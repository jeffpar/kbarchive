---
layout: page
title: "Q222956: AV When Adding Demand-dial Interfaces in RRAS Admin"
permalink: kb/222/Q222956/
---

## Q222956: AV When Adding Demand-dial Interfaces in RRAS Admin

	Article: Q222956
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0, on platform(s):
	   - the hardware: DEC Alpha 
	   - the hardware: Intel x86 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add demand-dial interfaces in the Microsoft Routing and RAS
	Administrator tool, a c0000005 access violation error message may be displayed
	in the Mprapi.dll module.
	
	CAUSE
	=====
	
	This problem occurs after you create demand-dial interfaces where the option to
	create a local user was selected. This problem may appear after an undetermined
	number of connections.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT version 4.0 Service Pack 5.
	
	Additional query words: RRAS DOD
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbAudDeveloper kbRRASNTSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
