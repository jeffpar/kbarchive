---
layout: page
title: "Q95884: How To: Modifying WFWG for Use with Artisoft's LANtastic"
permalink: kb/095/Q95884/
---

## Q95884: How To: Modifying WFWG for Use with Artisoft's LANtastic

	Article: Q95884
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	The following article contains information on the use of Windows for
	Workgroups with third-party products or configurations that have not
	been tested and are not supported by Microsoft.
	
	If the steps or procedures described in this article do not function
	properly, contact the manufacturer of the third-party product for more
	information or use a supported configuration.
	
	SUMMARY
	=======
	
	This article contains information about modifying Windows for Workgroups version
	3.1 for use with Artisoft's LANtastic network operating system. If the following
	procedures do not allow connectivity between Windows for Workgroups and
	LANtastic, call Artisoft Technical Support at (602) 670-7000.
	
	MORE INFORMATION
	================
	
	Microsoft does not ensure the stability of Windows for Workgroups when running
	with Artisoft's LANtastic.
	
	Artisoft has provided the following modifications so that you can use components
	of Windows for Workgroups with MS-DOS-based LANtastic versions 4.x and with
	LANtastic for Windows.
	
	NOTE: If you make the following changes according to Artisoft's specifications,
	the Windows for Workgroups peer-to-peer and networking capabilities are
	disabled.
	
	LANtastic provides its own networking functionality as if it were running with
	Windows 3.1, with added support for Mail and Schedule+. For the MS-DOS based
	versions of LANtastic to use any Windows for Workgroups components, a file
	called LANTNET.DRV is required. This file may be obtained from Artisoft's
	bulletin board service (BBS) at (602) 293-0065.
	
	Windows for Workgroups can use all Artisoft's "AE" boards when the cards are set
	for the NE2000 mode. Additionally, the Intel EtherExpress 16-bit network
	interface card that ships with Windows for Workgroups is compatible with
	LANtastic/AI cards. It requires the driver EXP16LAN.EXE, which is available by
	calling Intel's BBS at (503) 645-6275. If you loaded Windows for Workgroups
	using the Intel EtherExpress adapter card, the low-level drivers from the
	CONFIG.SYS file must be removed. The current network card compatibility list on
	Artisoft's BBS should be checked for further information on other types of
	compatible adapters.
	
	With a normal installation of Windows for Workgroups, a LANtastic network does
	not function at all. Windows for Workgroups has its own redirector (REDIR),
	server functions, and low-level drivers (which are incompatible with the
	LANtastic system).
	
	Required Changes to SYSTEM.INI
	------------------------------
	
	To replace a Windows for Workgroups network with a LANtastic network, make the
	following changes to the SYSTEM.INI file.
	
	1. In the [Boot] section, change
	
	        network=wfwnet.drv
	
	  to:
	
	        network.drv=lantnet.drv
	
	2. In the [386Enh] section, change
	
	        NetHeapSize=20
	
	  to:
	
	        NetHeapSize=64
	
	3. Add the following lines to the [386Enh] section:
	
	        NetAsynchFallback=TRUE
	        NetAsynchTimout=5.0
	        PerVMFiles=0
	
	4. Add the following lines to the [LANtastic] section:
	
	        Network_IRQ=xx
	
	  where xx is the appropriate IRQ setting for your machine.
	
	Resulting Functionality
	-----------------------
	
	After you make these changes, normal LANtastic networking functionality is
	available, with the following additions:
	
	  Mail
	  Schedule+
	  Network File Manager
	  ClipBook Viewer
	
	NOTE: The ClipBook Viewer cannot share files across the network, but it does work
	locally.
	
	The LANtastic for Windows dynamic data exchange (DDE) features function; however,
	the following Windows for Workgroups network DDE programs do not work:
	
	  Chat
	  Hearts
	  VSERVER.386
	  NetWatcher
	  WinMeter
	
	Questions
	---------
	
	Any questions concerning the conversion of Windows for Workgroups network should
	be directed to Artisoft Technical Support.
	
	LANtastic and LANtastic for Windows are manufactured by Artisoft, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 3.10 wfwg 3rdparty netdde
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
