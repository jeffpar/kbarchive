---
layout: page
title: "Q268513: Error Message Appears When Installing 3Com 3C575-TX CardBus NIC"
permalink: /kb/268/Q268513/
---

## Q268513: Error Message Appears When Installing 3Com 3C575-TX CardBus NIC

{% raw %}

	Article: Q268513
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install a 3Com 3C575-TX CardBus network interface card (NIC),
	using the Have Diskette option from the Network tool in Control Panel, you may
	receive the following error message:
	
	  Missing OEMNT.inf or OEMSETUP.inf file
	
	This happens when you have downloaded the 3c575x.exe file from the 3Com Web site,
	saved it to a floppy disk, and then run the .exe file, creating several folders
	and saved files on the disk.
	
	CAUSE
	=====
	
	This behavior can occur because some of the files are not extracted when you run
	the .exe file from the floppy disk.
	
	RESOLUTION
	==========
	
	To resolve this behavior, copy the 3c575x.exe file to the \Winnt folder and then
	run it from there. The files should be extracted properly.
	
	MORE INFORMATION
	================
	
	The 3Com 3C575-TX CardBus NIC can be installed only on a computer that supports
	CardBus; it should not be installed on a computer that supports only PC Card
	mode (PCIC). On a computer that supports PCIC only, use the 3C574-TX NIC, which
	is designed for PC Card interfaces running in 16-bit PC Card mode.
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q171465 CardBus PC Card Socket Unsupported in Windows NT 4.0
	
	  Q167212 Supported PCMCIA Mode on Toshiba Tecra 700 Series
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
