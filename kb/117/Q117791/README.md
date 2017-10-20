---
layout: page
title: "Q117791: Err Msg w/NetWare Scheduler: The Password is Invalid for..."
permalink: /kb/117/Q117791/
---

## Q117791: Err Msg w/NetWare Scheduler: The Password is Invalid for...

{% raw %}

	Article: Q117791
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to access a NetWare server using a batch file to make the drive
	connections through the Scheduler service configured with the correct user name
	and password, the following message may appear:
	
	  The password is invalid for <NetWare server and sharename>.
	  Type the password for <NetWare server and sharename>.
	
	If you then type the exact same password configured in the Scheduler service, the
	operation continues.
	
	CAUSE
	=====
	
	This problem occurs due to a problem with the SCREG.EXE file applied by Service
	Pack 2.
	
	STATUS
	======
	
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem was corrected in the latest U.S.
	Service Pack for Windows NT and Windows NT Advanced Server version 3.1. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	The NetWare product discussed here is manufactured by Novell, Inc., a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: prodnt 3rdparty thirdparty 3rd third party
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search kbWinNTW310Search
	Version           : :3.1
	
	=============================================================================
	

{% endraw %}
