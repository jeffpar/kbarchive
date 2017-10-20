---
layout: page
title: "Q89081: WFWG Err Msg: No Files Found... Using CD-ROM and NetWare"
permalink: /kb/089/Q89081/
---

## Q89081: WFWG Err Msg: No Files Found... Using CD-ROM and NetWare

{% raw %}

	Article: Q89081
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Either of the following error messages may appear in Windows for Workgroups when
	you attempt to access a shared CD-ROM drive in File Manager
	
	- No files found
	
	  -or-
	
	- Error Reading Drive <x>
	
	where <x> is the next logical drive.
	
	CAUSE
	=====
	
	This occurs if MSIPX.COM, VLM.EXE, NETX.COM, or NETX.EXE are loaded before
	MSCDEX.EXE or if the /S parameter is not used with MSCDEX.EXE in the
	AUTOEXEC.BAT file on the computer sharing the CD-ROM.
	
	MORE INFORMATION
	================
	
	To allow Novell NetWare connectivity with Windows for Workgroups, MSIPX.COM
	VLM.EXE, NETX.COM, and NETX.EXE may be placed in the AUTOEXEC.BAT file. If these
	files appear before the CD-ROM driver MSCDEX.EXE, the error message appears when
	the CD-ROM is a shared resource and is being accessed remotely. The server that
	is sharing the CD-ROM has access to files, but any attempt by users to access
	files on the CD-ROM results in the error.
	
	To correct the problem, edit the AUTOEXEC.BAT and file on the server and move the
	MSCDEX.EXE command above the other entries listed above. You may also need to
	edit the CONFIG.SYS so that the CD-ROM driver is the first driver listed.
	
	The error may also appear if the server is not sharing the CD-ROM properly. To
	share the CD-ROM, the /S parameter must be used with MSCDEX.EXE. Under Windows
	3.1, LANMAN10.386 was needed for enhanced mode functionality of the CD-ROM. In
	Windows for Workgroups, this functionality is inherent and LANMAN10.386 is not
	needed.
	
	If the line
	
	       device=LANMAN10.386
	
	exists in the [386Enh] section of the SYSTEM.INI file, you should remove it and
	add the /S parameter to MSCDEX.EXE
	
	Additional query words: 3.10 3.11 ipx ms 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
