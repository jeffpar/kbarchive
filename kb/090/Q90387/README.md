---
layout: page
title: "Q90387: Information on Network Card Detection (NCD)"
permalink: /kb/090/Q90387/
---

## Q90387: Information on Network Card Detection (NCD)

	Article: Q90387
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 1.0,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Workgroup Connections, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Hardware detection in Windows for Workgroups Setup has been extended from
	Microsoft Windows operating system version 3.1 to include network card detection
	(NCD).
	
	MORE INFORMATION
	================
	
	NCD occurs between the MS-DOS-based and Windows-based portions of Windows for
	Workgroups Setup and is finished by the time you see your first dialog box. If
	Setup detects a network adapter, it writes any information it can detect plus
	information from the NETWORK.INF file to the NCDINFO.INI file in the Windows for
	Workgroups directory (C:\WINDOWS by default). Setup later uses this information
	when it suggests a network adapter for you to install.
	
	If your computer has multiple network cards, NCD does not detect all cards; it
	stops after it detects the first one. Since very few machines use more than one
	card, multiple card detection was not built into NCD. You can configure Windows
	for Workgroups to use additional network cards by running Control Panel (if you
	are running Windows for Workgroups 3.1) or by running Network Setup (if you are
	using Windows for Workgroups 3.11).
	
	Like Windows hardware detection, NCD can be skipped by running Setup with the /I
	option (SETUP /I). You may need to use this switch if NCD prevents Setup from
	completing your Windows for Workgroups installation.
	
	NOTE: When you select a network adapter from Control Panel, NCD does not run. The
	settings displayed in the Networks option are factory defaults taken from the
	NETWORK.INF file. You need to supply the correct adapter configuration
	information.
	
	WHEN NCD IS USED
	----------------
	
	Because Setup may fail during NCD, under the following circumstances, Setup does
	not perform NCD:
	
	- Workgroup Connections is installed, detected by the presence of WRKGRP.SYS in
	  the CONFIG.SYS file.
	
	- Windows for Workgroups is installed, detected by the presence of the
	  network.drv=wfwnet.drv statement in the SYSTEM.INI file.
	
	- Setup with the /I option is run.
	
	- Original equipment manufacturer (OEM) provided network adapter information is
	  in the NCDINFO.INI file in the Windows for Workgroups target directory. OEMs
	  may put network adapter information in the [OEMDetected] section with the key
	  name, NETCARD1=.
	
	- Setup failed during a previous installation, detected by the presence of the
	  Ignore_HW_Detect= statement in the SYSTEM.INI file. Just before Setup starts
	  NCD, Ignore_HW_Detect= is added to the SYSTEM.INI file under the [boot]
	  section. If Setup sees this flag, it assumes that the last installation
	  failed due to NCD problems. Setup then skips NCD and clears the statement
	  when it has successfully completed installation.
	
	NOTE: Setup may suggest a network adapter to you even if NCD was not run because
	Setup may be able to determine what the network adapter was from a previous
	installation of Windows for Workgroups, Workgroup Connections, or Microsoft LAN
	Manager.
	
	NCD FAILURE
	-----------
	
	NCD can fail in any of the following ways:
	
	NCD Fails to Detect the Network Adapter
	---------------------------------------
	
	The Unlisted Or Updated Network Adapter selection is selected in the Network
	Identification list box.
	
	Solution: You must manually select your network adapter. Make sure the hardware
	settings for your adapter are correct.
	
	NCD Detects the Adapter, But Not All the Necessary Settings
	-----------------------------------------------------------
	
	Your network adapter is selected in the Network Identification list box. When you
	choose the OK button, hardware settings are displayed.
	
	NCD detects as many settings as possible, but may not detect them all. For
	example, Setup may not be able to detect the interrupt request line (IRQ) used
	by the adapter. If this happens, Setup displays the factory default for the
	particular setting it cannot detect.
	
	Unfortunately, Setup does not inform you if a particular setting was not
	detected. Some of the displayed settings are factory defaults while others were
	properly detected settings. Also, the factory defaults may not match the actual
	settings on the network adapter. If you do not know the correct settings, and
	accept Setup's suggestions, the network drivers will fail to initialize.
	
	Solution: You must select the correct adapter settings during Setup, or change
	the settings in Control Panel after Windows for Workgroups is installed.
	
	NCD Detects the Wrong Network Adapter
	-------------------------------------
	
	This is usually due to some incorrect or old information left on your hard drive.
	Causes include:
	
	- Old or incorrect versions of Microsoft LAN Manager drivers.
	
	- Old or incorrect IPX.COM in the PATH or the root directory of the boot drive.
	
	- Old or incorrect EISA Setup information.
	
	- Old or incorrect information from an earlier Windows for Workgroups or
	  Workgroup Connections installation.
	
	Solution: During Setup (or from Control Panel) change the incorrect network
	adapter to the correct one, making sure the hardware settings are correct.
	
	NCD Interferes with the Hardware, Failing Installation
	------------------------------------------------------
	
	One of several things may happen:
	
	- Your machine can stop responding (hang) or restart when Setup informs you
	  that it is going into Windows.
	
	- Setup can cause a general protection (GP) fault or hang or restart your
	  machine just before the Virtual Memory dialog box displays.
	
	- If you are running Setup over a network, the network adapter may be reset or
	  disabled (until you restart your computer), making Setup unable to copy files
	  from the remote drive.
	
	Solution: Run Setup again. Windows for Workgroups does not perform NCD if it
	failed the first time. However, if your computer hangs again, use the /I switch
	with Setup.
	
	HOW NCD WORKS
	-------------
	
	NCD attempts to detect the network adapter many different ways. It runs detection
	methods that are least likely to fail Setup first. It then goes to more
	sensitive detection methods. A brief summary of detection methods (in order of
	sensitivity):
	
	- Use the OEM provided information in the [OEMDetected] section of NCDINFO.INI.
	
	- Look for Micro-Channel Architecture (MCA) adapters in an MCA machine. (Only
	  finds adapters known by their MCA identifications as of the release of
	  Windows for Workgroups.)
	
	- Look for adapters in Extended Industry Standard Architecture (EISA) machines
	  using the built-in EISA configuration capabilities. (Only finds adapters
	  known by their EISA identifications as of the release of Windows for
	  Workgroups.)
	
	- Try to extract information from Novell's IPX.COM. (Successful only if: IPX is
	  running, NETx is running, IPX.COM is in the path or in the root directory of
	  the boot drive and IPX.COM has been created for an adapter known by its IPX
	  identification as of the release of Windows for Workgroups.)
	
	- Attempt to identify the network adapter by communicating with the physical
	  hardware and seeing if it reacts in a characteristic manner.
	
	HOW AND WHERE NCD INFORMATION IS STORED
	---------------------------------------
	
	When Setup detects a network adapter, it writes the information in the file,
	NCDINFO.INI, under the [LastDetectedFromSetup] section. All values that cannot
	be detected are marked -1 or 0xffff. For example:
	
	  NETCARD1=301,-1,0x300,16,0xffff,-1,0xffff,-1,-1,0,-1, 0xffffffff,1,0x1b67
	
	Explanation of Values
	---------------------
	
	  NETCARD1   - Key name.
	
	  301        - Network adapter number. Assigned and used
	               internally by Microsoft, this is the same
	               number used in the NETWORK.INF and
	               OEMSETUP.INF files. In this case it is the
	               Intel EtherExpress 16.
	
	  -1         - IRQ.
	
	  0x300      - Base Input/Output (I/O) address.
	
	  16         - Number of I/O ports used.
	
	  0xFFFF     - Base RAM address (in paragraphs).
	
	  -1         - Kilobytes of address space used by RAM.
	
	  0xFFFF     - Base ROM address (in paragraphs).
	
	  -1         - Kilobytes of address space used by ROM.
	
	  -1         - DMA Channel used.
	
	  0          - Bus type (0=ISA, 1=MCA, 2=EISA, 3=TURBO,
	               4= PCMCIA).
	
	  -1         - Slot number.
	
	  0xFFFFFFFF - MCA/EISA identification.
	
	  0x1b67     - CRC-16 Check-Sum of the above information.
	
	  1          - Card specific information. In this case it
	               stands for IOCHRDY=LATE.
	
	Additional query words: 1.00 gpf 3.10 wc 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : :1.0,3.1,3.11
	Issue type        : kbinfo
	
	=============================================================================
	
