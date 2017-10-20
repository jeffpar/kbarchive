---
layout: page
title: "Q245178: Cannot Print to HP 6P Printer, Terminal Server Stops Responding."
permalink: /kb/245/Q245178/
---

## Q245178: Cannot Print to HP 6P Printer, Terminal Server Stops Responding.

{% raw %}

	Article: Q245178
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on remotely to a computer that is running Microsoft Windows NT
	Server 4.0, Terminal Server Edition, and then try to print from your local hard
	disk to a local Hewlett-Packard (HP) 6P printer, you may not be able to do so.
	Also, the Terminal Server client on your computer may stop responding (hang).
	
	CAUSE
	=====
	
	This behavior can occur if you use the printer drivers that are included with
	the HP 6P printer.
	
	RESOLUTION
	==========
	
	To resolve this issue, install the Microsoft version of the HP printer drivers
	on your computer. To obtain the Microsoft version of the HP printer drivers,
	visit the following Microsoft Web site:
	
	  http://support.microsoft.com/support/downloads/dp2334.asp
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	MORE INFORMATION
	================
	
	For information about the Windows NT 4.0 driver library, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q142643 Windows NT 4.0 Driver Library
	
	Additional query words: Hewlett-Packard
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
