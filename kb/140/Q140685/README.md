---
layout: page
title: "Q140685: MAC Clients Get Access Denied on Newly Created Folders"
permalink: /kb/140/Q140685/
---

## Q140685: MAC Clients Get Access Denied on Newly Created Folders

	Article: Q140685
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a user on a MAC client creates a folder on a Windows NT Services for
	Macintosh server, they receive Access Denied when trying to access the folder.
	Examination of the permissions on the new folder will show it is owned by an
	unknown user and the primary group is some random domain that has a trust with
	the SFM servers domain. For example:
	
	  Owner: account unknown
	  Primary Group: America domain no permissions
	  Everyone: no permissions
	
	CAUSE
	=====
	
	This is caused by incorrect trust information.
	
	
	WORKAROUND
	==========
	
	Delete all the trusts, then recreate them. Allow time for the trust information
	to replicate to the BDCs and then reboot all servers running the Services for
	Macintosh service.
	
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT 3.51.
	
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
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
