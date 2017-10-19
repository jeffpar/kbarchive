---
layout: page
title: "Q136450: Programs Must Support 32-Bit Windows Sockets to Use AutoDial"
permalink: /kb/136/Q136450/
---

## Q136450: Programs Must Support 32-Bit Windows Sockets to Use AutoDial

	Article: Q136450
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): dun win95 kbDialUp
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to start a program that requires access to the Internet after you
	enable the "Connect to the Internet as needed" feature in Microsoft Plus! for
	Windows 95, Windows 95 may not automatically dial the Internet using the Dial-Up
	Networking connection you specified.
	
	CAUSE
	=====
	
	This problem can occur if the Internet program you are using does not support
	the 32-bit Windows sockets that are included with Windows 95. 16- bit Internet
	programs and 32-bit Internet programs that do not support the 32-bit Windows
	sockets included with Windows 95 cannot use the AutoDial feature of Microsoft
	Plus!.
	
	RESOLUTION
	==========
	
	To determine if the Internet program that you are using supports the 32-bit
	Windows sockets included with Windows 95, or for information regarding a
	possible software upgrade that will allow you to use the AutoDial feature of
	Microsoft Plus!, please contact your software manufacturer.
	
	======================================================================
	Keywords          : dun win95 kbDialUp 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
