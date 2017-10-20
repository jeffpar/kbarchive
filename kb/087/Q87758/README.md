---
layout: page
title: "Q87758: XGAAIDOX.SYS May Cause Windows 3.1 to Stop"
permalink: /kb/087/Q87758/
---

## Q87758: XGAAIDOX.SYS May Cause Windows 3.1 to Stop

{% raw %}

	Article: Q87758
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you have trouble starting Windows 3.1 in standard or 386 enhanced mode on a
	PS/2, you may need to remove the device= line for XGAAIDOS.SYS from the
	CONFIG.SYS file.
	
	According to the Windows 3.1 SETUP.TXT file, Windows will run correctly in
	standard mode even if XGAAIDOS.SYS is loaded. This may not be true.
	
	WORKAROUND
	==========
	
	To work around this problem, remove the device=xgaaidos.sys line from the
	CONFIG.SYS file and call IBM to obtain an updated version of XGAAIDOS.SYS.
	According to IBM, this problem will not occur if you are using version 1.2 of
	the driver.
	
	Additional query words: 3.10 3.11 hang freeze crash 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
