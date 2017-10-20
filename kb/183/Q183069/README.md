---
layout: page
title: "Q183069: Ensoniq PCI Sound Card Experiences Static When Disk Is Accessed"
permalink: /kb/183/Q183069/
---

## Q183069: Ensoniq PCI Sound Card Experiences Static When Disk Is Accessed

{% raw %}

	Article: Q183069
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You have an EIDE/ATA hard drive and you have applied the fix mentioned in the
	following Knowledge Base article:
	
	  ARTICLE-ID: Q153296
	  TITLE : Write Cache on IDE/ATAPI Disks Is Not Flushed on Shut Down
	
	Your Ensoniq PCI Soundcard is experiencing static when the hard disk drive is
	accessed.
	
	CAUSE
	=====
	
	This problem is caused by a regression introduced in the fix mentioned in the
	above article. That hotfix includes two modifications to Atapi.sys. The first
	modification was to flush the write cache on the disk when the system is being
	shut down and the second added periodic flushes of the write cache by the file
	system. It is this second change that is causing the problem with the sound
	card. Because these flushes were being done synchronously, this was tying up the
	PCI bus long enough to prevent the Ensoniq driver from updating the synthesizer
	regularly. The fix to this problem was to make the flushes asynchronous, so they
	would not interfere with other drivers.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	This fix is a replacement for the fix described in the following Knowledge Base
	article and should be used in its place:
	
	  ARTICLE-ID: Q153296
	  TITLE : Write Cache on IDE/ATAPI Disks Is Not Flushed on Shut Down
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
