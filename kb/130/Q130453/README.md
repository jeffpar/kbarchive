---
layout: page
title: "Q130453: Cannot See Details Processing NetWare Login Script"
permalink: kb/130/Q130453/
---

## Q130453: Cannot See Details Processing NetWare Login Script

	Article: Q130453
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to a Novell network server with the Microsoft client for NetWare
	networks, you may not be able to view the details of the login script by
	clicking the Details button.
	
	CAUSE
	=====
	
	This behavior occurs if the login script is so short that it has already
	finished executing by the time you click the Details button.
	
	RESOLUTION
	==========
	
	The login script processor in Windows 95 normally runs login scripts without
	displaying any output from the commands that are run to the screen. Clicking the
	Details button opens a window that displays the output from the commands that
	are run in the login script. When the login script is finished, the window
	closes.
	
	To keep the window open on the screen, place a Pause command at the end of your
	login script. The Pause command forces the execution of the login script to halt
	until you press a key. It also forces the login script processor to open a
	window displaying the script file output.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
