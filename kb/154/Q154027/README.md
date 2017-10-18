---
layout: page
title: "Q154027: Print Manager Hangs If Printer Description Has Multiple Commas"
permalink: kb/154/Q154027/
---

## Q154027: Print Manager Hangs If Printer Description Has Multiple Commas

	Article: Q154027
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Under Windows NT 3.51, Print Manager stops responding when you attempt to
	connect to a shared network printer. This problem occurs when Print Manager is
	building a browse list of available printers in your workgroup or domain.
	
	Under Windows NT 4.0, the Add Printer wizard stops responding when you attempt to
	perform the same operation as above.
	
	CAUSE
	=====
	
	One or more of the shared printers in the workgroup or domain has a comment or
	description that contains multiple comma characters in succession, such as
	"Finance printer,,High Quality,2nd Floor".
	
	RESOLUTION
	==========
	
	Edit the printer description or comment to remove the multiple, successive
	commas.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt hung freeze browsing
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	
	=============================================================================
	
