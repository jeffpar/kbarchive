---
layout: page
title: "Q85526: Novell Workstation Hangs Due to Queued Messages"
permalink: /kb/085/Q85526/
---

## Q85526: Novell Workstation Hangs Due to Queued Messages

{% raw %}

	Article: Q85526
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A Novell workstation running Microsoft Windows operating system version 3.1 may
	hang or lock after you exit Windows if:
	
	1. The ability to receive messages is disabled in the Network option in Control
	  Panel.
	
	  -and-
	
	2. A message is received before you exit Windows.
	
	The message(s) will be queued at MS-DOS and will appear on the twenty-fifth line
	of the monitor after exiting Windows. When you press CTRL+ENTER to clear the
	message, your workstation will hang or scroll unreadable characters ("garbage")
	on the screen.
	
	This problem is caused by NETX.COM. A future updated version of this file may
	address this problem.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Do not disable the ability to receive messages in Windows with Control
	  Panel's Network option.
	
	  -or-
	
	2. Before exiting Windows, enable the ability to receive messages.
	
	Additional query words: 3.10 3.1 3.11 25th
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
