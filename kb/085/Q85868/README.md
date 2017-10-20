---
layout: page
title: "Q85868: Banyan Message Causes MS-DOS-Based Application to Minimize"
permalink: /kb/085/Q85868/
---

## Q85868: Banyan Message Causes MS-DOS-Based Application to Minimize

{% raw %}

	Article: Q85868
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Banyan Vines network messages may cause a running MS-DOS-based application to
	minimize in Microsoft Windows operating system version 3.1. It does not matter
	if the MS-DOS-based application is running in a full screen or in a window. This
	problem does not occur in Banyan versions earlier than 4.1 patch 5.
	
	WORKAROUND
	==========
	
	Set the MS-DOS-based application's PIF to Execution: Exclusive, so that no other
	application, including the network message, affects the running application.
	
	  -or-
	
	Disable network messaging from the Network option in Control Panel. This prevents
	you from receiving messages.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Banyan Vines versions 4.1 patch
	5 and later. We are researching this problem and will post new information here
	as it becomes available.
	
	MORE INFORMATION
	================
	
	When a Banyan network message is sent to the workstation from a user's mail
	program or network print queue, the message appears on the last line of the
	screen and minimizes the running MS-DOS-based application.
	
	Additional query words: 3.10 3.1 Banan 4.11 5.0
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
