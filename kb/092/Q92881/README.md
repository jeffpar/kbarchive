---
layout: page
title: "Q92881: Installing WFWG over IBM Lan Server Causes Netbind Error"
permalink: /kb/092/Q92881/
---

## Q92881: Installing WFWG over IBM Lan Server Causes Netbind Error

{% raw %}

	Article: Q92881
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install Windows for Workgroups on a machine that was once an IBM OS/2 Lan
	Server client, you may receive a "Netbind" error followed by an "Undefined
	Dynalink" error when you start Windows for Workgroups.
	
	CAUSE
	=====
	
	These errors indicate that there are still IBM Lan Server drivers in the
	CONFIG.SYS and AUTOEXEC.BAT files.
	
	RESOLUTION
	==========
	
	The following lines need to be removed or remarked out (using REM) from the
	CONFIG.SYS file:
	
	- Any lines that reference PROTMAN.EXE (Windows for Workgroups uses
	  PROTMAN.DOS)
	
	- Any lines that reference DXMEOMOD.SYS
	
	In the AUTOEXEC.BAT file, any reference to the Lan Server software directory in
	the PATH= statement should be removed.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
