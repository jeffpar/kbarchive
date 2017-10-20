---
layout: page
title: "Q74658: PC-Kwik Print Spooler 3.0 with Windows Enhanced and Standard"
permalink: /kb/074/Q74658/
---

## Q74658: PC-Kwik Print Spooler 3.0 with Windows Enhanced and Standard

{% raw %}

	Article: Q74658
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To allow PC-Kwik Print Spooler version 3.0 to operate properly with Microsoft
	Windows, Multisoft Corporation recommends that you follow these steps:
	
	1. Disable the Print Manager. This is not required but sometimes it improves
	  performance. If you want the Print Spooler to only spool data from
	  non-Windows applications, leave the Print Manager enabled. By default,
	  Windows only lets the Print Spooler spool data from non-Windows applications.
	
	2. If you want to spool data from Windows applications, change port connection
	  to LPTx.OS2, where x specifies the port being used.
	
	If you are running Windows in 386 enhanced mode, you should try the following
	steps:
	
	1. Set the following statements in the [386Enh] section of the SYSTEM.INI file:
	
	        Com1AutoAssign=0 (If Com1 exits)
	        Com2AutoAssign=0 (If Com2 exits)
	        LPT1AutoAssign=0
	
	2. From the Control Panel, select the 386 Icon.
	
	3. Select Never Warn for device contention. Turning off the conflict messages
	  means that Windows cannot warn you if more than one program is trying to use
	  the same port at the same time. Make sure that the first application has
	  completed sending data to the spooler before sending data from the second
	  application.
	
	MORE INFORMATION
	================
	
	The PC-Kwik Print Spooler product included here is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	REFERENCES
	==========
	
	"Power Pak Version 2" manual, page 195-196.
	
	Additional query words: 3.0 3.00 3.00a 3.1 3.10 3.11 3rdparty win30 win31
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
