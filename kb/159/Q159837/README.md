---
layout: page
title: "Q159837: PRB: Setting the Frame Type for IPX During Unattended Setup"
permalink: kb/159/Q159837/
---

## Q159837: PRB: Setting the Frame Type for IPX During Unattended Setup

	Article: Q159837
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbOPK kbSBK
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the ?Restoring
	Registry Key? Help topic in Regedit.exe or the ?Restoring a Registry Key?
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you use the unattended setup feature in Windows NT 4.0 and install the
	NWLINK/IPX protocol, the !AUTONETIPXFRAMETYPE = variable is ignored and,
	instead, defaults to autodetect. !AUTONETIPXFRAMETYPE can have the following
	values:
	
	     0 = Ethernet II
	     1 = Ethernet_802.3
	     2 = 802.2
	     3 = SNAP
	     4 = ArcNet
	     ff = Autodetect (default)
	
	The following is a section of an Unattended.txt answer file and shows how this
	value would appear in the file:
	
	     [Network]
	     DetectAdapters = ""
	     JoinWorkgroup = OPK-GRP
	     InstallProtocols = InstallProtocolsSection
	     InstallServices = InstallServicesSection
	
	     [InstallProtocolsSection]
	     NWLNKIPX = NwlinkParams
	
	     [NwlinkParams]
	     !AUTONETIPXFRAMETYPE = 0  ;For ethernet II
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the ?Changing Keys and
	Values? Help topic in Registry Editor (Regedit.exe) or the ?Add and Delete
	Information in the Registry? and ?Edit Registry Data? Help topic in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To workaround this problem, complete the following steps:
	
	1. On any computer running Windows NT 4.0 that has the same network card and
	  NWLINK/IPX protocol installed, use the Regedit.exe command to export the
	  following key:
	
	  HKey_Local_machine\system\CurrentControlSet\Services
	  \NwlnkIpx\NetConfig\%Netcard%X
	
	  NOTE: The above registry key is one path; it has been wrapped for
	  readability.
	
	  Where X = the number of the netcard installed.
	
	2. Save the key out as any file name (for example Frame.reg).
	
	3. In your I386 share create a directory called $oem$.
	
	4. Use a text editor to create a Cmdlines.txt file with the following commands:
	
	  .\regedit /s .\Frame.reg
	
	5. Place a copy of Frame.reg and Regedit.exe in the $oem$ directory.
	
	6. In your unattended answer file, make sure the OemPreinstall = yes is set in
	  the [Unattend] section.
	
	7. Run unattended setup.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: Automated SBK OPK Unattended Setup
	
	======================================================================
	Keywords          : kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
