---
layout: page
title: "Q203745: DHCP Reconcile Does Not Recover Reservations Outside Scopes"
permalink: kb/203/Q203745/
---

## Q203745: DHCP Reconcile Does Not Recover Reservations Outside Scopes

	Article: Q203745
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With the Windows NT 4.0 DHCP server, you can create a Reservation that is
	outside a particular scope range but still within the subnet. If you delete the
	database and need to perform a Reconcile to recover your lease information, you
	will lose any reservations that are outside the Scope. Reservations defined
	within scopes are recovered.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0. This
	problem was first corrected in Windows NT version 4.0 Service Pack 5.
	
	MORE INFORMATION
	================
	
	For additional information about how to create DHCP reservations or for a better
	definition of what reservations outside scopes are, please see the following
	article(s) in the Microsoft Knowledge Base:
	
	  Q196066 Limitations Creating DHCP Reservations
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
