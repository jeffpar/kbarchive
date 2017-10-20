---
layout: page
title: "Q269278: &quot;Stop 0x0000007f&quot; During Windows NT 4.0 Setup"
permalink: /kb/269/Q269278/
---

## Q269278: &quot;Stop 0x0000007f&quot; During Windows NT 4.0 Setup

{% raw %}

	Article: Q269278
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbWinNT4sp6fix
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Windows NT 4.0, you may receive the following error
	message on a blue screen:
	
	  Stop 0x0000007f
	
	When this issue occurs, you must reboot the computer.
	
	CAUSE
	=====
	
	This behavior can occur because of a timing issue between the hard disk and the
	operating system. This is a known issue with the original Hal.dll file that is
	included with Windows NT 4.0.
	
	RESOLUTION
	==========
	
	To resolve this issue, reboot the computer and allow Setup to restart. If the
	problem occurs repeatedly, format the partition with the FAT file system, and
	then install Windows NT 4.0. If you want to use the NTFS file system, convert
	the partition to NTFS by using the convert command after you install Windows NT
	4.0.
	
	After you successfully install Windows NT 4.0, install Windows NT 4.0 Service
	Pack 6a (SP6a) as soon as possible. SP6a includes an updated Hal.dll file that
	resolves this issue. For additional information about obtaining Windows NT
	service packs, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
