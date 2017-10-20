---
layout: page
title: "Q134581: Xtradrive 3.0 Requires SETVER Before LOADHIGH Will Work"
permalink: /kb/134/Q134581/
---

## Q134581: Xtradrive 3.0 Requires SETVER Before LOADHIGH Will Work

{% raw %}

	Article: Q134581
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
	
	Using the LOADHIGH (LH) statement in the Autoexec.bat file when Micro House's
	Xtradrv.sys is loaded in the Config.sys file causes the computer to stop
	responding (hang).
	
	CAUSE
	=====
	
	Xtradrv.sys is being loaded in the Config.sys file before Setver.exe.
	
	RESOLUTION
	==========
	
	Modify the Config.sys file so that Setver.exe is loaded before Xtradrv.sys.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
