---
layout: page
title: "Q137397: NWConv Err Msg: &lt;Ntservername&gt; Is Not a Server"
permalink: /kb/137/Q137397/
---

## Q137397: NWConv Err Msg: &lt;Ntservername&gt; Is Not a Server

	Article: Q137397
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetworkkbfaq
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft File and Print Services for NetWare versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to use the Migration Tool for NetWare (Nwconv.exe) to migrate a
	Novell NetWare server to a computer running Windows NT Server, you may receive
	the following error message:
	
	  <ntserver_name> is not a server
	
	CAUSE
	=====
	
	This behavior occurs if the computer you are attempting to migrate to is not a
	domain controller. The Migration Tool for NetWare does not allow migration of a
	NetWare server to a non-domain controller.
	
	RESOLUTION
	==========
	
	Perform the migration of the NetWare server to a computer that is a primary
	domain controller (PDC) or a backup domain controller (BDC).
	
	
	Additional query words: nwconv fpnw role member migrate convert
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbfaq
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbServicesNetwareSearch kbFPNW351 kbFPNW400
	Version           : winnt:3.51,4.0
	
	=============================================================================
	
