---
layout: page
title: "Q164911: Improve SNA Manager Handling of Host Security Domain Deletion"
permalink: kb/164/Q164911/
---

## Q164911: Improve SNA Manager Handling of Host Security Domain Deletion

	Article: Q164911
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a host security domain is deleted using SNA Server Manager, the Windows NT
	Server group account for the domain remains active. There are no observable
	consequences of this problem, however, it will not be clear to the Windows NT
	Server account administrator that the host security domain group is still being
	used with host account synchronization.
	
	CAUSE
	=====
	
	SNA Server Manager was only removing the host security domain from the SNA
	Server configuration file, though no changes are made to the Window NT Server
	group account.
	
	NOTE: The registry entries associated with this host security domain are not
	removed, because SNA Server Manager does not know which computers contain the
	domain entries for the SNA Host Account Synchronization service
	(SNAHOSTPROCESS).
	
	RESOLUTION
	==========
	
	An update to SNA Server 3.0 is available which corrects this problem. When a
	host security domain is removed, SNA Server Manager now disables the Windows NT
	group account associated with the host security domain.
	
	The following module has been updated:
	
	  <Snaroot>\System\Hostproc.exe
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
