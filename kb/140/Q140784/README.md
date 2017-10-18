---
layout: page
title: "Q140784: Call to NetUserGetLocalGroups results in NERR_UserNotFound"
permalink: kb/140/Q140784/
---

## Q140784: Call to NetUserGetLocalGroups results in NERR_UserNotFound

	Article: Q140784
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When an application running on Windows NT 3.51 makes a call to
	NetUserGetLocalGroups and passes <domainname>\<username> as the
	username parameter, where <domainname> is a trusted domain, the following
	error is returned:
	
	  NERR_UserNotFound (2221)
	
	CAUSE
	=====
	
	In this API call, username does not allow username to be in the form
	<domainname>\<username>.
	
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
