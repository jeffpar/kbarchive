---
layout: page
title: "Q139908: Creating a SMSSAFE.TMP To Bypass Specific Hardware Detection"
permalink: kb/139/Q139908/
---

## Q139908: Creating a SMSSAFE.TMP To Bypass Specific Hardware Detection

	Article: Q139908
	Product(s): Microsoft Systems Management Server
	Version(s): 1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When troubleshooting a hardware inventory problem, it might be necessary to
	disable portions of the hardware detection during the SMS inventory on the
	client. This can be accomplished by manually creating a SMSSAFE.TMP file.
	
	MORE INFORMATION
	================
	
	When the Inventory Agent runs, it creates a SMSSAFE.TMP file to keep track of
	any hardware failures. This file is stored in the \MS\SMS\DATA directory for SMS
	1.1 and 1.2 clients and in the <SMS> root directory for SMS 1.0 clients.
	
	Any failed hardware tests are written into this file while the Inventory Agent
	scans the hardware. Then next time the Inventory Agent performs hardware
	inventory, it will write any failures recorded in the SMSSAFE.TMP file to the
	SMS.INI file in the [WorkstationStatus] section, using the FailedHardwareChecks
	keyword.
	
	After moving the failed tests to the SMS.INI file, the SMSSAFE.TMP file is
	deleted. When the inventory continues to run it will detect the failed tests in
	the SMS.INI file and skip failed hardware tests.
	
	To create a SMSSAFE.TMP file, use a text editor, such as Notepad, and add valid
	entries of hardware devices or parameters you want the hardware detection to
	bypass (listed below). For example, if you want to bypass the mouse detection,
	enter the following in the SMSSAFE.TMP file:
	
	     MouseInfo=CRASHED
	
	The following are valid entries for SMSSAFE.TMP (or FailedHardwareChecks):
	
	Note: The items below are not listed in the same order that the inventory agent
	performs them.
	
	  BanyanVines
	  BiosInfo
	  CMOSMemory
	  CommPorts
	  ComputerConfig
	  ComputerName
	  ConventionalMemory
	  DeviceInfo
	  Disks
	  Dma
	  DPMIMemory
	  Drive<X>
	  EMMMemory
	  EMMMemoryInfo
	  ExtendedMemory
	  GamePorts
	  IRQInfo
	  Keyboard
	  Lanman
	  LanmanInfo
	  LanManNetcardInfo
	  Lantastic
	  LantasticInfo
	  MouseInfo
	  MSNet
	  NetBios
	  Novell
	  NovellInfo
	  NovellNetcardInfo
	  PrinterPorts
	  TSRInfo
	  VCPIMemory
	  Video
	  WolverineInfo
	  XMSMemory
	
	When a failed hardware component is fixed or replaced, remove the appropriate
	FailedHardwareChecks entry from the [WorkstationStatus] section in SMS.INI and
	remove the SMSSAFE.TMP file (if it only referenced one component). Start the
	client computer again and run the Inventory Agent to have the component
	reinventoried.
	
	NOTE: This functionality does not work with Windows NT 4.0 or Windows 2000. In
	these environments we do not inventory the HW itself, but instead look in the
	registry for the hardware information. This new way of inventorying clients does
	not result in machine hangs. Therefore, this functionality is unnecessary.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : :1.0,1.1,1.2
	
	=============================================================================
	
