---
layout: page
title: "Q250263: PDC and BDC Show as Workstations in Server Manager"
permalink: kb/250/Q250263/
---

## Q250263: PDC and BDC Show as Workstations in Server Manager

	Article: Q250263
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have a Microsoft Windows NT Server 4.0-based network that includes a
	primary domain controller (PDC), several backup domain controllers (BDCs), and a
	Samba Linux server, the PDC and one of the BDCs may appear as workstations in
	Server Manager.
	
	When you run the net accounts command on each computer, each has the correct
	server role. However, when you run the net accounts /sync command, the following
	information appears in the event log:
	
	  There are currently no logon servers available
	
	When you try to add accounts, promote a BDC, or synchronize in Server Manager,
	you receive the following error message:
	
	  The tag is invalid.
	
	Also, when you attempt to start the Netlogon service, you receive the following
	error message:
	
	  Error 3097 - A Primary Domain Controller is already running for this domain.
	
	CAUSE
	=====
	
	This issue occurs when you add a Samba server that is configured as PDC to an
	existing Windows NT domain. However, Windows NT networking does not allow more
	than on PDC per domain.
	
	RESOLUTION
	==========
	
	To resolve this problem, disable the domain controller functionality on the
	Samba server. You can accomplish this by changing the following values in the
	Samba configuration file (Smb.conf):
	
	  domain master = no preferred master = no domain logons = no
	
	For additional information, refer to the product documentation or to the
	manufacturer's Web site (http://www.samba.org).
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	MORE INFORMATION
	================
	
	Samba is a third-party implementation of the SMB networking protocol used by
	Windows NT.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
