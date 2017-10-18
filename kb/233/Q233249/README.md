---
layout: page
title: "Q233249: NET SEND &lt;MyComputer&gt; May Not Work with Disabled Network Adapter"
permalink: kb/233/Q233249/
---

## Q233249: NET SEND &lt;MyComputer&gt; May Not Work with Disabled Network Adapter

	Article: Q233249
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Workstation version 4.0 SP4 
	- Microsoft Windows NT Server version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have a computer with two network interface cards in it, and you use a
	hardware profile to boot the computer with one of the interfaces disabled, you
	may not be able to run a "NET SEND" (without the quotation marks) command to the
	local computername.
	
	CAUSE
	=====
	
	This problem occurs because the Netbt.sys driver maintains an internal name
	table, visible using the "nbtstat -n" (without the quotation marks) command.
	When you run a "NET SEND" (without the quotation marks) command to the local
	computername, Service Pack 4's Netbt.sys file used the first name/address
	mapping in the local name table, without validating it to make sure it was a
	legitimate address.
	
	RESOLUTION
	==========
	
	NetBT has been fixed to check for a valid (non-zero) IP address when looking up
	an IP address in the local name table.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
