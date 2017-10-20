---
layout: page
title: "Q241290: Can't Install Windows NT to Compaq 6000 Computer 1/29/99 BIOS"
permalink: /kb/241/Q241290/
---

## Q241290: Can't Install Windows NT to Compaq 6000 Computer 1/29/99 BIOS

{% raw %}

	Article: Q241290
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbhw kbsetup kbHardware
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install Windows NT Server version 4.0, Terminal Server Edition
	to your Compaq Proliant 6000-based computer, you may receive a STOP 0x0000000A
	error message in the Scsiport.sys file on a blue screen. Note that this may
	occur if you boot from a CD-ROM or from floppy disk.
	
	CAUSE
	=====
	
	This issue can occur if your Compaq Proliant 6000-based computer has a Basic
	Input/Output System (BIOS) version that is dated 1/29/99. This particular BIOS
	is not totally compatible with Windows NT Server version 4.0, Terminal Server
	Edition.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact Compaq to obtain a BIOS version that is dated
	later than 1/29/99, and then install Windows NT Server version 4.0, Terminal
	Server Edition. For information about how to contact Compaq to obtain a BIOS
	update, please view the following Compaq Web site for BIOS updates:
	
	  http://www.compaq.com/support/servers/
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words: 0x0A
	
	======================================================================
	Keywords          : kberrmsg kbhw kbsetup kbHardware 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
