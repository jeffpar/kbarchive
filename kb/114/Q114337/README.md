---
layout: page
title: "Q114337: WFWG: Using NetDDE with Third-Party Networks"
permalink: /kb/114/Q114337/
---

## Q114337: WFWG: Using NetDDE with Third-Party Networks

	Article: Q114337
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows for Workgroups version 3.11 with a third-party network
	as the primary network, or after you install Windows for Workgroups 3.11 with
	the /H switch from a Novell NetWare network, you encounter one or both of the
	following situations:
	
	- When you start Windows for Workgroups, a dialog box with the following
	  message appears:
	
	  NETDDEX loads NetDDE and CLIPSRV, and a computer name is required. Please
	  enter computer name:
	
	- When Windows for Workgroups starts, the Chat icon appears in the Network
	  group.
	
	CAUSE
	=====
	
	NETDDEX requires NetBIOS. If NetBIOS services have not been started for the
	primary network, NetDDE services are not available.
	
	If you use the /H switch to install Windows for Workgroups with Novell NetWare as
	the primary network and you are using "NETWORK=NOVELL/00032600" in the
	[Configuration] section of the SETUP.SHH file, the Windows for Workgroups Setup
	program installs NetDDE services and the Chat utility.
	
	RESOLUTION
	==========
	
	- If the use of NetDDE is not required, remove NETDDEX.EXE from the Load= line
	  in the [Windows] section of the WIN.INI file.
	
	  -OR -
	
	- NetBIOS services are provided differently for each third-party network that
	  can be set up as the primary network. For instructions on how to provide
	  NetBIOS services for your network, consult with the network administrator or
	  network vendor, or refer to the documentation.
	
	  For example, if Novell NetWare is selected as the primary network, in order
	  for NetDDE to function properly, the Novell terminate-and- stay-resident
	  (TSR) program that provides NetBIOS services under NetWare, NETBIOS.EXE, must
	  be run before starting Windows.
	
	  -OR-
	
	- If you are installing Windows for Workgroups with the /H switch, edit the
	  WINNET.INF file and remark out or remove the following line and section.
	
	  NOTE: Editing .INF files is not encouraged as a troubleshooting technique.
	  Make a backup copy of the .INF file before you edit it.
	
	        [novell3x]
	        install=netdde_appsx   --   Remark out this line only.
	
	        [netdde_apps]          --   Remark out this entire section.
	
	  To remark out a line, insert a semicolon (;) at the beginning of the line. To
	  remark out a section, insert an "X" at the beginning of the section name. For
	  example, to remark out a section called [TEST], change the section name to
	  [XTEST].
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.11. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When you set up a third-party network as the primary network, Windows for
	Workgroups Setup adds NETDDEX to the Load= line of the WIN.INI file regardless
	of whether NetBIOS services are loaded at that time.
	
	NetWare is manufactured by Novell, Inc., a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
