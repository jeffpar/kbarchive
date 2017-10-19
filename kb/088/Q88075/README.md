---
layout: page
title: "Q88075: WinLogin Err Msg: Could Not Connect to a Remote Resource..."
permalink: /kb/088/Q88075/
---

## Q88075: WinLogin Err Msg: Could Not Connect to a Remote Resource...

	Article: Q88075
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft WinLogin, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Microsoft WinLogin version 1.0, you may receive the following error
	message:
	
	  Could not connect to the remote resource
	
	CAUSE
	=====
	
	This error occurs when the WinLogin Client software cannot communicate with the
	server where the WinLogin database resides.
	
	This error may occur when starting Windows using WinLogin if you save changes
	with WinLogin or if you exit Windows on a workstation using WinLogin.
	
	The following situations may create the error:
	
	- The server where the WinLogin database resides is no longer active on the
	  network (that is, it has been taken offline).
	
	- The server has an "auto-disconnect" feature that disconnects inactive users
	  from shared directories after a specified period of time.
	
	- There are other network problems that are preventing the WinLogin Client
	  software from communicating with the server where the WinLogin database
	  resides.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Restore the WinLogin server to an active state.
	
	- Disable the Auto-Disconnect feature on the WinLogin server.
	
	MORE INFORMATION
	================
	
	This information applies to version 1.0 of Microsoft WinLogin. For information
	about ordering Microsoft WinLogin, call the Microsoft Sales Information Center
	(MSIC) at (800) 426-9400, or mail the form supplied with the Windows Resource
	Kit (WRK) for the Microsoft Windows operating system version 3.1.
	
	Additional query words: 1.00 1.0 3.10 3.1 LAN Manager LanMan remove novell network share winlog
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbWinLoginSearch kbZNotKeyword3 kbWin310 kbWin311 kbWinLogin100
	Version           : WINDOWS:3.1,3.11; :1.0
	
	=============================================================================
	
