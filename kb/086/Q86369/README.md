---
layout: page
title: "Q86369: Banyan Err Msg: File Volume &quot;&quot; Is Not Available"
permalink: kb/086/Q86369/
---

## Q86369: Banyan Err Msg: File Volume &quot;&quot; Is Not Available

	Article: Q86369
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running Microsoft Windows operating system version 3.1 on a Banyan Vines
	network, you may receive the following error message:
	
	  File Volume "" is not available.
	
	CAUSE
	=====
	
	This error message is caused by the Banyan Vines network drivers not properly
	safe-guarding against disconnecting drives that are currently in use. On a LAN
	Manager or Novell network, you are not allowed to disconnect from a network
	drive on which you have an open file.
	
	
	MORE INFORMATION
	================
	
	The Banyan drivers will also allow you to disconnect from a shared copy of
	Windows while running Windows.
	
	Additional query words: 3.10 3.11 4.11 3rdparty err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
