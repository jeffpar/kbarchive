---
layout: page
title: "Q142666: HOWTO: Setting Up an Additional Service in Unattended Setup"
permalink: kb/142/Q142666/
---

## Q142666: HOWTO: Setting Up an Additional Service in Unattended Setup

	Article: Q142666
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup kbOPK kbSBK
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can automate the setup of any service by installing the service during
	unattended setup.
	
	MORE INFORMATION
	================
	
	To install a service during unattended setup:
	
	- Generate an Unattend.txt file, using either the Unattend.txt file supplied
	  with the Windows NT 4.0 compact disc or Setupmgr.exe from the Windows NT 4.0
	  Resource Kit.
	
	  The following example can be used to install TCP/IP, TCP/IP Printing Services,
	  the Simple TCP/IP Services, and Network Monitor in an unattended mode.
	
	        [Unattended]
	        OemPreinstall = yes
	        NoWaitAfterTextMode = 1
	        NoWaitAfterGUIMode = 1
	        FileSystem = LeaveAlone
	        ExtendOEMPartition = 0
	        ConfirmHardware = no
	        NtUpgrade = no
	        Win31Upgrade = no
	        TargetPath = NTW40.US
	        OverwriteOemFilesOnUpgrade = no
	        KeyboardLayout =
	
	        [UserData]
	        FullName = "Admin"
	        OrgName = "Test Company"
	        ComputerName = C_ADMIN
	
	        [GuiUnattended]
	        OemSkipWelcome = 1
	        OEMBlankAdminPassword = 1
	        TimeZone = "(GMT+01:00) Paris, Madrid"
	
	        [Display]
	        ConfigureAtLogon = 0
	        BitsPerPel = 8
	        XResolution = 800
	        YResolution = 600
	        VRefresh = 60
	        AutoConfirm = 1
	
	        [Network]
	        DetectAdapters = ""
	        InstallProtocols = ProtocolsSection
	        InstallServices = ServicesSection
	        JoinDomain = domlogon
	        CreateComputerAccount = domlogon\admin, password
	
	        [ProtocolsSection]
	        TC = TCParamSection
	
	        [TCParamSection]
	        DHCP = yes
	
	        [ServicesSection]
	        NETMON = InstallNetMon  <----- new section for a service to add
	        STCPIP = InstallSimpleTCP  <----- new section for a service to add
	        TCPPRINT = InstallTCPPrint <----- new section for a service to add
	
	        [InstallNetMon]
	
	        [InstallSimpleTCP]
	
	        [InstallTCPPrint]
	
	  In this case, the [ServicesSection] section has three particular services to
	  install:
	
	  NETMON = InstallNetMon
	  STCPIP = InstallSimpleTCP
	  TCPPRINT = InstallTCPPrint
	
	  NETMON, STCPIP and TCPPRINT come from the [Options] sections of Oemnsvbh.inf,
	  Oemnsvsp.inf and Oemnsvtp.inf files that are parsed to set up those services.
	
	This successfully installs TCP/IP, TCP/IP Printing Services, the Simple TCP/IP
	Services and Network Monitor in an unattended mode with this setup file.
	
	REFERENCES
	==========
	
	SBK OPK Unattended Setup Install
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork kbsetup kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
