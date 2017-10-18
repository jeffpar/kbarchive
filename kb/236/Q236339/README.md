---
layout: page
title: "Q236339: Removing Custom DHCP Scope Option Sets Lease Duration to Zero"
permalink: kb/236/Q236339/
---

## Q236339: Removing Custom DHCP Scope Option Sets Lease Duration to Zero

	Article: Q236339
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kbnetwork kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view the lease duration for a DHCP scope, it may be set to 0 days, 0
	hours, and 0 minutes.
	
	CAUSE
	=====
	
	This problem can occur after a customized DHCP Option is removed from the DHCP
	Scope. Note that this does not happen when you remove a custom Global Option.
	
	RESOLUTION
	==========
	
	To work around this problem, manually set the lease duration back to the
	previous value. Note that the default lease duration is 3 days.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	DHCP extensibility provides the ability to add custom DHCP options. This is done
	within DHCP Manager by clicking Defaults on the DHCP Options menu. In the
	Default Values window, the New button permits you to create the custom option.
	For example, to create a custom option that assigns an FTP server with an option
	number of 161, type the following information in the following fields:
	
	Name: FTP Option
	Data Type: IP Address
	Identifier: 161
	Comment: FTP Server
	
	After this is done, the custom scope option can now be added to global or scope
	properties.
	
	Additional query words: zero
	
	======================================================================
	Keywords          : kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5
	Issue type        : kbprb
	
	=============================================================================
	
