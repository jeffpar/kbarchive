---
layout: page
title: "Q219313: Hyperterminal: Microsoft BBS profile still carries the 206 area"
permalink: kb/219/Q219313/
---

## Q219313: Hyperterminal: Microsoft BBS profile still carries the 206 area

	Article: Q219313
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you choose the Microsoft BBS option in the HyperTerminal folder of the
	Accessories group, the default profile will configure the Area Code to be (206).
	This is not currently the correct area code for the Microsoft BBS location. The
	correct area code is (425).
	
	CAUSE
	=====
	
	The area code for the Washington state location of the BBS server was changed
	from (206) to (425), but the profile for the BBS in HyperTerminal was not
	appropriately updated.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT 4.0 Service Pack 5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
