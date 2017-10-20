---
layout: page
title: "Q151994: Basketball 94-95 Err Msg: Unable To Start DDE Communications"
permalink: /kb/151/Q151994/
---

## Q151994: Basketball 94-95 Err Msg: Unable To Start DDE Communications

{% raw %}

	Article: Q151994
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1994-1995 edition; WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Complete NBA Basketball for Windows 1994-1995 edition 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Microsoft Complete NBA Basketball for Windows in Windows 95,
	you may receive the following error message:
	
	  Unable to Start DDE communications with Program Manager
	
	  Abort, Retry, Ignore
	
	If you click Ignore, the installation continues; however, the above error message
	is received once more in the final portion of the installation. At that point,
	clicking Ignore again does not allow you to complete the installation.
	
	CAUSE
	=====
	
	This error occurs if Adobe Type Manager (ATM) is being loaded as the system
	driver in Windows 95.
	
	RESOLUTION
	==========
	
	Determine if ATM is being loaded. When ATM is installed, it modifies the
	System.ini file by changing the System.drv line and adding a new line.
	
	For example:
	
	     [Boot]
	     system.drv=atmsys.drv
	     atm.system.drv=system.drv
	
	To turn off Adobe Type Manager, do the following:
	
	NOTE: The following instructions require modifying system files. For more
	information about how to accomplish this task in Windows, see your Windows
	printed documentation or online Help.
	
	1. In a text editor such as Notepad, open the System.ini file.
	
	2. Modify the line in the [Boot] section that reads
	
	  system.drv=atmsys.drv
	
	  to read:
	
	  system.drv=system.drv
	
	3. Modify the line in the [Boot] section that reads:
	
	  atm.system.drv=system.drv
	
	  to read:
	
	  ;atm.system.drv=system.drv
	
	
	MORE INFORMATION
	================
	
	Adobe Type Manager is manufactured by a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding Adobe Type Manager's performance or
	reliability.
	
	Additional query words: 1994/95 multi media multimedia multi-media mmtitles kbmm netdde atm.sys
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWin95 kbOSWinSearch kbHomeProdSearch kbGamesSearch kbCompleteBasketballSearch kbCompleteNBABasketball kbCompleteNBABasketball1994
	Version           : :1994-1995 edition; WINDOWS:95
	
	=============================================================================
	

{% endraw %}
