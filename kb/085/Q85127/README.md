---
layout: page
title: "Q85127: Changes to the SYSTEM.INI Made by BallPoint Mouse"
permalink: /kb/085/Q85127/
---

## Q85127: Changes to the SYSTEM.INI Made by BallPoint Mouse

{% raw %}

	Article: Q85127
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a Microsoft BallPoint mouse is installed into Microsoft Windows version 3.0
	or is being restored from a failed Windows 3.1 installation, the following
	changes are made to the SYSTEM.INI file:
	
	  From                            To
	  ----                            --
	
	  [boot]
	  mouse.drv=mouse.drv             mouse.drv=c:\ballpt\mouse.drv
	
	  [386enh]
	  keyboard=*vkd                   keyboard=c:\ballpt\bpvkd.386
	
	MORE INFORMATION
	================
	
	BPVKD.386 is not required for Windows 3.1 because its functionality has been
	built into the *VKD driver in WIN386.EXE.
	
	The BallPoint Setup program also creates a new program group (called BallPoint)
	in Program Manager. This group contains an icon for changing the parameters of
	BallPoint's operation.
	
	Additional query words: 3.10 3.00 3.00a 3.11 compaq lap top laptop ball point pointing device pointing-device
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
