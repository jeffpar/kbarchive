---
layout: page
title: "Q186514: Terminal Server Does Not Support Sentinel Devices"
permalink: /kb/186/Q186514/
---

## Q186514: Terminal Server Does Not Support Sentinel Devices

{% raw %}

	Article: Q186514
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	Terminal Server does not support applications that use a sentinel device
	(dongle). Software that uses this means of security is intended for a
	single operating system and a single user, and therefor inappropriate for
	use with Terminal Server. This is true even if only one user were to use
	the Terminal Server computer.
	
	Terminal Server is intended to behave like multiple Windows NT
	Workstations. Software written to make use of a sentinel device (dongle) is
	typically also licensed for single user/single computer use. Under no
	circumstances would Terminal Server fulfill this licensing requirement.
	Because of this, Terminal Server does not support any application that uses
	a sentinel device.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
