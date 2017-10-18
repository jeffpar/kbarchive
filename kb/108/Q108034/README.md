---
layout: page
title: "Q108034: Installing a Banyan VINES Network with WFWG 3.11"
permalink: kb/108/Q108034/
---

## Q108034: Installing a Banyan VINES Network with WFWG 3.11

	Article: Q108034
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article provides information about installing Windows for Workgroups
	version 3.11 with a Banyan VINES network. The following versions of Banyan VINES
	network operating system software are supported with Windows for Workgroups
	3.11:
	
	  Banyan VINES 4.11 (rev.5)
	  Banyan VINES 5.00 (rev.5)
	  Banyan VINES 5.52 (rev.5) (Token Ring and Ethernet Support)
	
	Windows for Workgroups 3.11 provides no files to support connectivity to the
	Banyan VINES network. To upgrade your current installation to Windows for
	Workgroups 3.11, you must first have an existing working connection to a Banyan
	VINES server.
	
	MORE INFORMATION
	================
	
	Before installing Windows for Workgroups 3.11, the Banyan server must be updated
	with all the appropriate patches and modifications. Banyan patches are available
	on CompuServe in the Banyan forum (type "go banyan" [without the quotation
	marks] at the ! prompt). If you have any questions about Banyan-related files,
	or if you are not sure if you have the latest patches available for your
	installation, call Banyan VINES technical support.
	
	Windows for Workgroups 3.11 Setup recognizes Banyan VINES connectivity and
	maintains it as the secondary network. Installation should be seamless with no
	further action required by the user.
	
	As with previous versions of Windows, it is necessary to be able to log on to
	Banyan VINES from MS-DOS before Windows connectivity can be ensured.
	
	The load order of the drivers in your AUTOEXEC.BAT file is important for
	maintaining VINES connectivity. If there are any problems during the upgrade
	and/or the Banyan login screen does not appear as usual after rebooting, check
	for error messages during the boot process and check the AUTOEXEC.BAT file to
	ensure the Banyan VINES files are loading and are in the correct order. The
	correct files and their order in the AUTOEXEC.BAT file are:
	
	Order in AUTOEXEC.BAT       Description
	------------------------------------------------------------------------
	
	C:\WINDOWS\NET INITIALIZE   This command is for Windows for Workgroups
	                           3.11. It allows loading the files into memory
	                           without invoking them.
	
	CD\<BANYAN FILES>           This command changes to the directory where
	                           the Banyan files are located. This is necessary
	                           because Banyan cannot read the full path and
	                           must be in the appropriate directory to load
	                           the file.
	
	BAN /NC                     Loads BAN.EXE without initializing Banyan's
	                           communications hardware on the system.
	
	NDISBAN                     Loads the NDIS-specific portion of the VINES
	                           software.
	
	                           NOTE: If you are using a Token Ring network
	                           and Banyan VINES 5.52 (rev.5) you should use
	                           NDTOKBAN.COM instead of NDISBAN.COM. For more
	                           information on query on the following words in
	                           the Microsoft Knowledge Base:
	
	                              WORKGROUPS and NDISBAN.COM
	
	REDIRALL                    Loads REDIRALL.EXE, which is redirector support
	                           for all versions of DOS.
	
	C:\WINDOWS\NET START        This command from Windows starts the network
	                           software.
	
	ARSWAIT                     This command "Address Resolution Server Wait,"
	                           holds further processing until your computer
	                           has been assigned a network address by a
	                           server. After it sees that your computer has
	                           received a network address from the network, it
	                           exits and allows your computer to continue.
	                           This function is normally built into VINES
	                           native drivers, but NDIS requires that this
	                           functionality be added after the NDIS driver
	                           BAN.EXE is loaded.
	
	Z:LOGIN                     Brings up the Banyan VINES login screen.
	
	If there are no error messages at startup, but you are having problems in Windows
	for Workgroups with VINES connectivity, check the SYSTEM.INI file.
	
	SYSTEM.INI File Entries
	-----------------------
	
	The following entries should be made to the SYSTEM.INI file when you install
	Windows for Workgroups 3.11 with Banyan VINES connectivity:
	
	  [boot]
	  secondnet=Z:vines.drv
	
	  [boot.description]
	  secondnet.drv=Banyan VINES (version x.xx(x))
	
	  [386Enh]
	  secondnet=z:vvinesd.386
	
	  [Network]
	  multinet=vines411
	
	REFERENCES
	==========
	
	Additional information on Banyan VINES connectivity can be found in the
	NETWORK.WRI file and in the Windows for Workgroups Resource Kit version 3.11.
	
	Banyan VINES Technical Support can be reached at (800) 2-BANYAN. To access the
	Banyan VINES forum on CompuServe type "go banyan" (without the quotation marks)
	at the ! prompt in CompuServe.
	
	For more information, query on the following words in the Microsoft Knowledge
	Base:
	
	  win and banyan and vines
	
	
	Banyan VINES is manufactured by a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 3.11 3rdparty 5.25 (5) 5.25.5 revision
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
