---
layout: page
title: "Q107474: Setting Up a Shared Copy of WFWG on LAN Manager-Based Servers"
permalink: /kb/107/Q107474/
---

## Q107474: Setting Up a Shared Copy of WFWG on LAN Manager-Based Servers

	Article: Q107474
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Windows for Workgroups 3.11 may not install properly when you use the SETUP /N
	command from a shared copy that is located on a Microsoft LAN Manager- or
	Windows NT-based server. This article explains how to correctly set up a shared
	copy of Windows for Workgroups on a LAN Manager-based network.
	
	Please note that when Windows for Workgroups is set up this way, Windows for
	Workgroups server capabilities are not available because users must start the
	real-mode network redirector to access the shared files on the server. The
	Windows for Workgroups server cannot run when the real-mode redirector is
	started. This behavior is different from that of Windows for Workgroups 3.1
	(because of changes made in 3.11 to facilitate use of the Installable File
	System [IFS] Manager).
	
	MORE INFORMATION
	================
	
	Users wanting to set up a shared copy of Windows for Workgroups must first have
	a real-mode networking client installed that is able to connect to the file
	server where the shared copy of Windows for Workgroups had been installed. This
	article describes how to set up Windows for Workgroups with either Workgroups
	Connections 1.0 or the Microsoft LAN Manager client, which is included in the
	Microsoft Network client. This article assumes that SETUP /A has already been
	completed and the shared files are already located on the file server.
	
	Workgroup Connections
	---------------------
	
	Workgroup Connections is a real-mode networking client that is normally used to
	connect to Windows for Workgroups servers. Use the following steps to set up a
	shared copy of Windows for Workgroups with Workgroup Connections:
	
	1. Install Workgroup Connections in a clean directory. The Setup program
	  defaults to the DOS directory; do NOT install to this directory. If you do
	  so, you install Windows for Workgroups user files over the top of this
	  directory.
	
	2. Use the Workgroup Connections network to connect to the file server's Windows
	  for Workgroups share with drive <W>. (It does not matter which drive
	  you use, but you must remember the drive letter because the same drive must
	  be used after Windows for Workgroups has been set up.)
	
	3. Run the Windows for Workgroups SETUP /N command and let Windows for
	  Workgroups install to the same directory in which you installed Workgroup
	  Connections. Setup should automatically choose the Microsoft Windows Network,
	  and you should verify that your network card driver is set up properly. Be
	  sure to let Setup configure your CONFIG.SYS and AUTOEXEC.BAT files.
	
	4. Once Setup is complete, reboot the machine. The real-mode network should
	  start and log you on to the network. Use the NET USE command to connect drive
	  <W> to the file server's Windows for Workgroups share. (This drive
	  letter should be the same one you used in step 2.)
	
	5. Use the WIN command to start Windows for Workgroups. The first time you start
	  Windows for Workgroups, a warning message states that you do not have sharing
	  capabilities (because the real-mode network is started). You can ignore this
	  message and choose the NO button to prevent it from coming up again.
	
	Microsoft Network Client (LAN Manager Client)
	---------------------------------------------
	
	The Microsoft Network Client is a real-mode LAN Manager client that is available
	for download from the Internet server [type "GOWINNT ! AdvSys\MSClient" (without
	the quotation marks)]. If you can't access these services, the Microsoft Network
	client is available for sale from Microsoft Sales and Service at (800)
	426-9400.
	Use the following steps to set up a shared copy of Windows for Workgroups with
	the LAN Manager client:
	
	1. Use the LAN Manager client to connect to the file server's Windows for
	  Workgroups share with drive <W>. (It doesn't matter which drive you
	  use, but you must remember the drive letter because the same drive must be
	  used after Windows for Workgroups has been set up.)
	
	2. Run the Windows for Workgroups SETUP /N command and direct Windows for
	  Workgroups to a clean directory. Do not set up Windows for Workgroups in the
	  directory that LAN Manager is in. (If you do, the PROTOCOL.INI file is not
	  set up correctly.) Setup should automatically choose the Microsoft Windows
	  Network, and you should verify that your network card driver is set up
	  properly. Be sure to let Setup configure your CONFIG.SYS and AUTOEXEC.BAT
	  files, and make sure that all references to LAN Manager are removed from both
	  files.
	
	3. Once Setup is complete, reboot the machine. The real-mode network should
	  start and log you on to the network. Use the NET USE command to connect drive
	  <W> to the file server's Windows for Workgroups share. This drive
	  letter should be the same drive letter you used in step 1.
	
	4. Use the WIN command to start Windows for Workgroups. The first time you start
	  Windows for Workgroups, a warning message states you do not have sharing
	  capabilities (because the real-mode network is started). You can ignore this
	  message and choose the NO button to prevent it from coming up again.
	
	Additional query words: WC 3.11 setup
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
