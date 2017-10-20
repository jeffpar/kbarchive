---
layout: page
title: "Q92934: Installing Workgroup Connections to a Floppy Disk"
permalink: /kb/092/Q92934/
---

## Q92934: Installing Workgroup Connections to a Floppy Disk

{% raw %}

	Article: Q92934
	Product(s): Microsoft Access Distribution Kit
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Workgroup Connections, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to install Microsoft Workgroup Connections, without Microsoft
	Mail, to a 1.2-megabyte (MB) or 1.44-MB floppy disk. Workgroup Connections and
	the required MS-DOS files necessary to make the disk bootable require
	approximately 1.1 MB. On a 1.2-MB disk, you have approximately 50K free disk
	space after installing Workgroup Connections.
	
	MORE INFORMATION
	================
	
	Contents AUTOEXEC.BAT File Created
	----------------------------------
	
	SET PATH=A:\DOS
	A:\DOS\net start
	
	Contents CONFIG.SYS File Created
	--------------------------------
	
	device=A:\DOS\protman.dos /i:A:\DOS
	device=A:\DOS\workgrp.sys
	device=A:\DOS\<driver>.dos
	LASTDRIVE=Z
	
	Files Put in the \DOS Directory on Drive A
	------------------------------------------
	
	CONNECT  TXT
	<driver> DOS
	NCDINFO  INI
	NET      EXE
	NET      MSG
	NETH     MSG
	NETWORK  INF
	PROTMAN  DOS
	PROTMAN  EXE
	PROTOCOL 001
	PROTOCOL INI
	SETUP    EXE
	SETUP    INF
	SYSTEM   INI
	WORKGRP  SYS
	
	Additional query words: 1.0 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWFWSearch kbWFW310
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
