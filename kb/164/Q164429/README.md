---
layout: page
title: "Q164429: XCLN: Windows for Workgroups Not Responding During Startup"
permalink: /kb/164/Q164429/
---

## Q164429: XCLN: Windows for Workgroups Not Responding During Startup

{% raw %}

	Article: Q164429
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbusage
	Last Modified: 21-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows for Workgroups stops responding during startup after you install
	Microsoft Exchange Client. The Windows logo appears and then the computer
	remains at a black screen indefinitely.
	
	CAUSE
	=====
	
	TCP version 3.11 is installed; version 3.11b should be installed instead.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	1. Start Windows for Workgroups without loading the networking components. To do
	  so, type the following command at the MS-DOS prompt:
	
	  " win /n " (without the quotation marks)
	
	2. Remove TCP/IP version 3.11 from Network Setup and install TCP/IP version
	  3.11b from the Clients\Tcp32wfw\Disks\Disk1 folder on the Windows NT Server
	  CD.
	
	NOTE: It is very important to use version 3.11b, not 3.11.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword3
	Version           : WINDOWS:4.0
	
	=============================================================================
	

{% endraw %}
