---
layout: page
title: "Q140641: Updated Samsrv.dll Supports AppleTalk and Banyan Vines Clients"
permalink: /kb/140/Q140641/
---

## Q140641: Updated Samsrv.dll Supports AppleTalk and Banyan Vines Clients

	Article: Q140641
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.00
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.00 
	- Microsoft Windows NT Server versions 3.51, 4.00 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to change passwords on a Windows NT Server from AppleTalk or Banyan
	Vines clients, the attempt fails.
	
	CAUSE
	=====
	
	Previous versions of Samsrv.dll did not have support for AppleTalk or Banyan
	vines applications that made Security Account Manager (SAM) API calls to change
	passwords. This fix was primarily included for Exchange clients that were having
	problems changing their user passwords on these networks.
	
	WORKAROUND
	==========
	
	Obtain the fix mentioned below, or upgrade to Windows NT Workstation and Server
	version 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	
	
	Additional query words: prodnt samsrv fix
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.00
	
	=============================================================================
	
