---
layout: page
title: "Q81704: PRB: VGA Monitor Loses Sync on 8514 Dual Monitor System"
permalink: /kb/081/Q81704/
---

## Q81704: PRB: VGA Monitor Loses Sync on 8514 Dual Monitor System

{% raw %}

	Article: Q81704
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a system equipped with both an 8514 and a VGA monitor, when the user uses
	ALT+ENTER to switch the display from a full screen MS-DOS prompt to a windowed
	MS-DOS prompt, the VGA monitor loses synchronization.
	
	CAUSE
	=====
	
	Windows does not change the settings for the registers of the VGA card.
	
	RESOLUTION
	==========
	
	Load the ANSI.SYS device driver by adding the following line to CONFIG.SYS:
	
	  device=c:\dos\ansi.sys
	
	Then, place a command into the WINSTART.BAT file to initialize the settings of
	the VGA card as Windows starts. Create or modify a WINSTART.BAT in the Windows
	directory (by default, C:\WINDOWS). To place the VGA monitor into 50-line mode,
	add the following line to the WINSTART.BAT file:
	
	  @MODE 80,50
	
	To place the monitor into 25 line mode, add the following line to the
	WINSTART.BAT file:
	
	  @MODE 80,25
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
