---
layout: page
title: "Q123463: BUG: MSODISUP.386 Giving Bad Value for Link Speed Causes Hang"
permalink: kb/123/Q123463/
---

## Q123463: BUG: MSODISUP.386 Giving Bad Value for Link Speed Causes Hang

	Article: Q123463
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows for Workgroups version 3.11 hangs (stops responding), particularly with
	Remote LAN drivers such as RLN, when you attempt to run a protocol stack (such
	as NetBEUI) over ODI.
	
	CAUSE
	=====
	
	The ODI driver specifies the line speed in terms of KBPS instead of in MBPS.
	There appears to be a bug in MSODISUP.386, which causes the link speed
	conversion to generate a bogus value when an ODI driver specifies the line speed
	in terms of KBPS instead of MBPS. The bogus link speed value is used to
	calculate time-out values. The calculated time-out values are so huge they will
	never time out. This causes the computer to hang in VREDIR.386 because the
	Add.Name requests never complete.
	
	RESOLUTION
	==========
	
	Change the line speed reported by the ODI driver to be specified in terms of
	MBPS.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK310 kbWinDDK311
	Version           : :3.1,3.11
	
	=============================================================================
	
