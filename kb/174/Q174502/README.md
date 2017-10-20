---
layout: page
title: "Q174502: Fault Tolerant Recovery Does Not Reoccur After Shut Down"
permalink: /kb/174/Q174502/
---

## Q174502: Fault Tolerant Recovery Does Not Reoccur After Shut Down

{% raw %}

	Article: Q174502
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Windows NT disk mirroring (RAID-1) or Stripe set with parity
	(RAID-5), and the system is not shut down properly (for example, during a power
	outage) or an FT member is replaced after a failure, Ftdisk.sys recovers the
	fault tolerant sets by performing a resynchronization function.
	
	If a normal shutdown of the Windows NT system begins before the completion of the
	resynchronization function, Ftdisk.sys does not begin a recovery again when the
	Windows NT system restarts.
	
	CAUSE
	=====
	
	Ftdisk.sys does not set a flag for a shutdown in the Windows NT registry
	information key in HKEY_LOCAL_MACHINE\System\DISK.
	
	Ftdisk.sys should set a Regenerating flag in the proper DISK_PARTITION structure
	in the Windows NT registry before the system is shut down. The flag tells
	Ftdisk.sys to start the resynchronization when the system is restarted.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: regenerate
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
