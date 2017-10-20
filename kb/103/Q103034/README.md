---
layout: page
title: "Q103034: NT Err Msg: PNTVIDEO.DRV Not Found or Not Enough Memory"
permalink: /kb/103/Q103034/
---

## Q103034: NT Err Msg: PNTVIDEO.DRV Not Found or Not Enough Memory

{% raw %}

	Article: Q103034
	Product(s): Microsoft Windows NT
	Version(s): 3.0 3.1 3.5 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to run Corel Photo-Paint versions 3.0 or 4.0 with Windows NT, you
	receive the following error message:
	
	  PntVideo.DRV not found or not enough memory
	
	CAUSE
	=====
	
	This error message occurs because the Photo-Paint application tries to access a
	16-bit Windows 3.x driver.
	
	Windows NT does not support 16-bit drivers or virtual device drivers (VxDs). As a
	result, any application that requires such needs to be modified to run correctly
	with Windows NT.
	
	For more information, call Corel Technical Support at (613) 728-1990
	
	The product included here is manufactured by Corel Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.0 3.1 3.5 4.0
	
	=============================================================================
	

{% endraw %}
