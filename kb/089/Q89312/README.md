---
layout: page
title: "Q89312: MS LAN Man 2.1 Test Summary (American Power Back-UPS 400)"
permalink: /kb/089/Q89312/
---

## Q89312: MS LAN Man 2.1 Test Summary (American Power Back-UPS 400)

	Article: Q89312
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	SUMMARY
	=======
	
	The following is a report of the test results of an Uninterruptible Power Supply
	(UPS) that participated in the Microsoft Compatibility Lab's (MCL) peripheral
	test for Microsoft LAN Manager version 2.1.
	
	MORE INFORMATION
	================
	
	Address
	-------
	
	American Power Conversion
	132 Fairgrounds Rd.
	West Kingston, RI 02892
	
	Phone Number
	------------
	
	(800) 800-4272
	
	Date Tested
	-----------
	
	5/26/92
	
	UNINTERRUPTIBLE POWER SUPPLY DATA
	---------------------------------
	
	Model                          Back-UPS 400
	Serial number                  W920369111
	Supplied cable part number     940-0020A
	Vendor-supplied software       N/A
	Software part number           N/A
	
	UPS SWITCH SETTINGS
	-------------------
	
	Switch Number       Setting
	-------------       -------
	
	1                   OFF
	2                   OFF
	3                   OFF
	4                   OFF
	
	The switch settings used are also factory defaults.
	
	TESTING ENVIRONMENT
	-------------------
	
	Operating system      OS/2 version 1.3
	Network               LAN Manager 2.1
	Test platforms        80486/33 w/ 16 MB of RAM
	Bus specification     EISA
	Network topology      Ethernet
	
	LANMAN.INI [UPS] SETTINGS
	-------------------------
	
	BatteryTime          60
	CmdFile             N/A
	MessDelay             2
	MessTime            300
	Recharge            100
	Signals             111
	VoltLevels          111
	
	FINAL TEST RESULTS
	------------------
	
	Test Focus                            Pass     Anomalies and/or Workarounds
	----------                            ----     ----------------------------
	
	Installation                          Yes
	Fully chargeable                      Yes
	Power-lost signal                     Yes
	Power-restored signal                 Yes
	Low-battery signal to server          Yes
	Shut down server                      Yes
	Server boots when power restored      Yes
	Sustains server power for 5 minutes   Yes
	
	Additional query words: 2.10 certification mcl
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
