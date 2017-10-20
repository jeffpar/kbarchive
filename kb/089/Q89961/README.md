---
layout: page
title: "Q89961: Windows Err Msg: Fatal Error -- Cannot Swap Windows"
permalink: /kb/089/Q89961/
---

## Q89961: Windows Err Msg: Fatal Error -- Cannot Swap Windows

{% raw %}

	Article: Q89961
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows in standard mode on a network, you may receive the
	following message when trying to switch between applications:
	
	  Fatal Error - Cannot Swap Windows
	
	CAUSE
	=====
	
	This error occurs when multiple machines use the same directory for Windows
	temporary files. Because Windows uses standard filenames when it creates swap
	files, more than one swap file can have the same name and intermittent errors
	can occur.
	
	RESOLUTION
	==========
	
	To correct the problem, set the TEMP environment variable to a directory on the
	local hard drive. If you are using a diskless workstation, set the TEMP variable
	to a unique directory for each machine.
	
	Additional query words: 3.10 3.11 3.00 3.00a Novell Banyan Vines LANtastic LAN Manager LANMAN
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
