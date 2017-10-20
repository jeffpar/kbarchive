---
layout: page
title: "Q94657: Upgrading WFWG Over Windows with Novell NetWare Lite"
permalink: /kb/094/Q94657/
---

## Q94657: Upgrading WFWG Over Windows with Novell NetWare Lite

{% raw %}

	Article: Q94657
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If Windows for Workgroups (WFWG) is upgraded over Windows with Novell NetWare
	Lite installed as the network, Windows for Workgroups workstations may not be
	able to view other Windows for Workgroups servers on the network.
	
	
	For Windows for Workgroups to operate properly, all references and settings for
	NetWare Lite should be removed from the Windows for Workgroups configuration
	files, and from the AUTOEXEC.BAT and CONFIG.SYS files.
	
	MORE INFORMATION
	================
	
	To remove NetWare Lite and the changes it may have made, do the following:
	
	1. Remove the following lines from the [386Enh] section of the Windows for
	  Workgroups SYSTEM.INI file:
	
	        UniqueDOSPSP=True
	        PSPIncrement=5
	        OverlappedIO=Off
	        TimerCriticalSection=10000
	        ReflectDOSInt2A=True
	
	2. Remove the following entry from the Network= line in the [386Enh] section of
	  the SYSTEM.INI file:
	
	        VIPX.386
	
	3. Remove any changes that NetWare Lite made to the CONFIG.SYS and AUTOEXEC.BAT
	  files, including removing the NetWare Lite directory from the PATH line of
	  the AUTOEXEC.BAT file.
	
	Novell NetWare Lite is manufactured by Novell, a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3.10 3rdparty browse light net ware
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
