---
layout: page
title: "Q90361: Using SETUP /N with a Novell NetWare Server"
permalink: /kb/090/Q90361/
---

## Q90361: Using SETUP /N with a Novell NetWare Server

{% raw %}

	Article: Q90361
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to run a shared copy of Windows for Workgroups from a Novell
	NetWare server as long as Novell NetWare has been added as a secondary network.
	
	MORE INFORMATION
	================
	
	For Windows for Workgroups to run from a shared directory on the network, a
	real-mode redirector must be loaded prior to starting Windows and a connection
	to the shared directory must be made. Setup does NOT modify AUTOEXEC.BAT to
	start the real-mode network; this modification must be made manually.
	
	However, Setup does ensure that all of the necessary components for running the
	real-mode redirector are on the local drive. Setup adds MSIPX and NETX to the
	AUTOEXEC.BAT file when Novell NetWare compatibility is added.
	
	NOTE: You must log on before starting Windows.
	
	Using a Local Windows Directory
	-------------------------------
	
	If your personal Windows directory is on a local hard drive, the real-mode
	network driver files are copied to the local Windows directory. These files
	include PROTMAN.DOS, PROTOCOL.INI, MSIPX.SYS, MSIPX.COM, and NETX.COM.
	
	Using a Windows Directory on the Network
	----------------------------------------
	
	If your personal Windows directory is on the Novell server, the real-mode network
	driver files will be copied to the system startup driver root directory (usually
	C:\). The files are copied there to guarantee that the files will be accessible
	from the CONFIG.SYS and AUTOEXEC.BAT files during system startup.
	
	The PATH= Statement
	-------------------
	
	As with any SETUP /N configuration, your PATH= statement in the AUTOEXEC.BAT file
	must contain the personal WINDOWS directory and the shared WINDOWS directory.
	The personal WINDOWS directory should come first on the path. For example:
	
	  path=c:\windows;z:\shared\windows;c:\dos
	
	Setup adds these to the path automatically during SETUP /N, but if you change the
	path or the drive letter where the directories exist, you will have to edit the
	AUTOEXEC.BAT file and change the PATH= statement yourself.
	
	The NetWare product included here is manufactured by Novell, a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	Additional query words: 3.10 novell net ware 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
