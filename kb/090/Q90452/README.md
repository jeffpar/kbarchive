---
layout: page
title: "Q90452: WFWG Err Msg: The Network Software Currently...LAN Manager 2.0"
permalink: /kb/090/Q90452/
---

## Q90452: WFWG Err Msg: The Network Software Currently...LAN Manager 2.0

{% raw %}

	Article: Q90452
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While installing Windows for Workgroups over an existing Microsoft LAN Manager
	2.0 installation, you may receive following error message:
	
	  The network software currently installed on your computer cannot be used with
	  this version of Windows for Workgroups.
	
	CAUSE
	=====
	
	While you may be able to manually upgrade and use Windows for Workgroups over
	LAN Manager 2.0, Windows for Workgroups was designed to automatically upgrade
	and work best on a LAN Manager 2.1 installations only.
	
	WORKAROUND
	==========
	
	Due to differences in the PROTOCOL.INI file and other LAN Manager configuration
	files, you may have difficulty installing or updgrading Windows for Workgroups
	over LAN Manager 2.0. If you need to use Windows for Workgroups with LAN Manager
	2.0, you should follow the procedures outlined below.
	
	1. Before installing Windows for Workgroups, use an ASCII text editor (such as
	  the MS-DOS 5.0 Editor) to make the following changes:
	
	  a. Remove ALL references to LAN Manager 2.0 device drivers (that is, remove
	     DEVICE=[drive][path]PROTMAN.DOS, DEVICE=[drive][path]UBNEI.DOS, and so on)
	     from the CONFIG.SYS file.
	
	  b. Remove ALL references to LAN Manager 2.0 commands (NET START, LOAD
	     NETBEUI, NET LOGON, and so on) from the AUTOEXEC.BAT file. Also remove any
	     references to LAN Manager 2.0 in the MS-DOS PATH environment variable(s.)
	
	2. After making and saving the above changes to CONFIG.SYS and AUTOEXEC.BAT,
	  reboot the computer for the changes to take effect.
	
	You should then be able to proceed with the normal installation of Windows for
	Workgroups.
	
	Additional query words: 3.10 err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
