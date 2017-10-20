---
layout: page
title: "Q91067: WFWG Err Msg: The Version of the SETUP.INF File on Your..."
permalink: /kb/091/Q91067/
---

## Q91067: WFWG Err Msg: The Version of the SETUP.INF File on Your...

{% raw %}

	Article: Q91067
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	- Microsoft Workgroup Connections, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when you install Windows for
	Workgroups in the same directory as a Workgroup Connections installation:
	
	  The version of the SETUP.INF file on your system is not valid for use with
	  this version of SETUP.EXE. If you continue, Windows may not run properly. It
	  is recommended that you quit Setup and then copy SETUP.INF from Windows disk
	  #1 to your Windows SYSTEM directory.
	
	CAUSE
	=====
	
	Normally, you install Workgroup Connections in the DOS directory along with the
	MS-DOS files. You receive this error if you install Workgroup Connections in
	another directory, such as WINDOWS, and then try to install Windows for
	Workgroups in the same directory.
	
	WORKAROUND
	==========
	
	To avoid any problems with Windows for Workgroups Setup and to ensure a
	complete, successful installation, install Windows for Workgroups in a different
	directory or rename the following files in the target directory:
	
	- SETUP.INF
	
	- SYSTEM.INI
	
	- PROTOCOL.INI
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1; :1.0
	
	=============================================================================
	

{% endraw %}
