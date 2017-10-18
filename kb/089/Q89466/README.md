---
layout: page
title: "Q89466: LAN Man 2.1 Test Summary (NSSI Network Security Systems)"
permalink: kb/089/Q89466/
---

## Q89466: LAN Man 2.1 Test Summary (NSSI Network Security Systems)

	Article: Q89466
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The following are the test results for the IPS/A.I. 800 uninterruptable power
	supply (UPS). The test was conducted as part of the Microsoft Compatibility Lab
	(MCL) peripheral test for LAN Manager version 2.1:
	
	MORE INFORMATION
	================
	
	Manufacturer
	------------
	
	NSSI Network Security Systems, Inc.
	9401 Waples Street
	San Diego CA 92121
	(800) 755-7078
	
	Date Tested
	-----------
	
	May 30, 1992
	
	Uninterruptable Power Supply Data
	---------------------------------
	
	Model:                          IPS/A.I. 800
	Serial number:                  1264
	Supplied cable part number:     5970250 A for use with LANSAFE
	
	                               5970246-01  for use LAN Manager 2.1
	
	Vendor supplied software:       LANSAFE/A.I.+ OS/2 3.00
	Software part number:           5722020-01
	
	Testing Environment
	-------------------
	
	Operating system:      OS/2 1.3
	Network:               LAN Manager 2.1
	Test platforms:        486/33 16 MB RAM
	Bus specification:     EISA
	Network topology:      Ethernet
	
	LANMAN.INI [UPS] Settings
	-------------------------
	
	BatteryTime:          60
	CmdFile:             N/A
	MessDelay:             2
	MessTime:            300
	Recharge:            100
	Signals:             111
	VoltLevels:          111
	
	Final Test Results
	------------------
	
	Test Focus                           Pass   Anomalies and/or Workarounds
	----------                           ----   ----------------------------
	
	Installation                          Yes
	Fully chargeable                      Yes
	Power lost signal                     Yes
	Power restored signal                 Yes
	Low battery signal to server          Yes
	Shut down server                      Yes
	Server boots when power restored      Yes
	Sustains server power for 5 minutes   Yes
	
	Additional Test Results Using LAN Manager 2.1 UPS Service
	---------------------------------------------------------
	
	UPS switch settings:
	
	  Switch    Position
	  ------    --------
	
	    4          OFF
	    3          ON
	    2          OFF
	    1          ON
	
	The UPS was connected to COM1 using an NSSI cable (part number 5970246-01).
	
	LAN Manager UPS service configured for use with COM1 added the following line to
	CONFIG.SYS:
	
	  device=c:\<lan root>\drivers\upsdrv.os2
	
	This driver must be installed before COM0x.SYS.
	
	Additional Test Results Using LANSAFE
	-------------------------------------
	
	UPS switch settings used with LANSAFE:
	
	  Switch     Position
	  ------     --------
	    4          ON
	    3          ON
	    2          ON
	    1          OFF
	
	LANSAFE AI+ OS/2 version 3.0 (NSSI part number 5722020-01) was installed
	replacing the UPS service of LAN Manager because of the following additional
	features and functionality:
	
	- Power monitoring
	
	- Power management
	
	- Remote monitoring, shutdown, and reboot of IPS/A.I 800
	
	To use LANSAFE remote IPS/A.I. console, the workstation must be running OS/2 and
	have admin privileges on the server; the server must be running LANSAFE local
	IPS/A.I Console.
	
	The UPS was connected to COM1 using NSSI cable (part number 5970250 A). LANSAFE
	replaces the UPS service of LAN Manager, and makes the following modifications
	to CONFIG.SYS and STARTUP.CMD.
	
	LANSAFE configured for use with COM1 adds the following line to CONFIG.SYS:
	
	  device=c:\lansafe\ipsia.sys 03f8 4
	
	Note: The UPS driver for LAN Manager should not be installed, and the UPS service
	should not be started when using LANSAFE.
	
	Modifications made to STARTUP.CMD:
	
	  REM The next 5 lines start IPS/A.I. monitoring. DO NOT REMOVE!
	  SETLOCAL
	  C:
	  CD C:\LANSAFE
	  START IPSCON.EXE
	  ENDLOCAL
	
	Additional query words: certification 2.1 2.10
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
