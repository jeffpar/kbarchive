---
layout: page
title: "Q185952: Information from BDC Sent to PDC, and Then Replicated to Domain"
permalink: kb/185/Q185952/
---

## Q185952: Information from BDC Sent to PDC, and Then Replicated to Domain

	Article: Q185952
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Traditionally, all user account database changes are made on the primary domain
	controller (PDC), and then replicated to each of the backup domain controllers
	(BDC). There are a few instances when the flow of information is reversed. A few
	domain activities are actually triggered by a BDC that sends the change to the
	PDC. After the PDC has the new information, usual Netlogon replication
	distributes the change to each of the BDCs at an interval specified by the
	Netlogon Pulse parameter. The default is five minutes. Below are some of these
	examples.
	
	MORE INFORMATION
	================
	
	Account Lockout
	---------------
	
	Each BDC maintains a bad logon counter, and, when reached, this information is
	sent to the PDC. After replicated to the remaining BDCs, the account is locked
	out on the whole domain.
	
	In theory, this may potentially give a user a window of bad logon attempts that
	may exceed the account lockout counter. This theoretical limit is ((number of
	bad logon attempts) x (number of domain controllers)). In actuality, this is
	very unlikely. Domain validation is usually handled by the nearest domain
	controller, and it is also this domain controller that would continue to respond
	to the bad logon requests. Also, this theoretical window is the amount of time
	between normal domain synchronization, which, by default, is five minutes.
	
	Trust Account Password Changes
	------------------------------
	
	Every seven days, the PDC of the trusting domain changes the password used for
	pass-through authentication with the trusted domain. This password change is
	sent to the domain controller in the trusted domain that has a secure channel
	established with the PDC in the trusting domain. The trusting PDC sends an
	I_NetServerPasswordSet RPC call to the DC of the trusted domain asking it to
	change the password. If this DC is not the PDC, the BDC sends the password
	change to its PDC. At the next replication interval, all domain controllers in
	the trusted domain will have the new password. If there are many BDCs in the
	trusted domain, and the PDC of the trusting domain is closer to these than it is
	to the PDC in the trusted domain, it is more likely that the secure channel will
	be between the PDC in the trusting domain and a BDC in the trusted domain.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
