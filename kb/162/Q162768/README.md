---
layout: page
title: "Q162768: Cannot Access Data Disk in CD Drive When CD Player is Running"
permalink: /kb/162/Q162768/
---

## Q162768: Cannot Access Data Disk in CD Drive When CD Player is Running

{% raw %}

	Article: Q162768
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to access a data CD-ROM in your CD-ROM drive while CD Player is
	running, you may receive one of the following error messages:
	
	  <driver letter>:\ is not accessible. The parameter is incorrect.
	
	  The system cannot find the drive specified.
	
	  The device is not ready.
	
	CAUSE
	=====
	
	CD Player opens all available CD-ROM Drives in exclusive mode.
	
	RESOLUTION
	==========
	
	To work around this problem, use one of the following methods:
	
	- Close CD Player before you attempt to read a data CD-ROM.
	
	- Insert the Data CD-ROM before you start CD Player.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	You may also experience this behavior if you have only one CD-ROM drive and
	Media Player is running.
	
	
	Additional query words: 4.00
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
