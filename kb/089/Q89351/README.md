---
layout: page
title: "Q89351: LAN Man 2.1 Test Summary (American Power Smart-UPS 600)"
permalink: /kb/089/Q89351/
---

## Q89351: LAN Man 2.1 Test Summary (American Power Smart-UPS 600)

{% raw %}

	Article: Q89351
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The following is a report of the test results of an uninterruptible power supply
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
	
	Uninterruptible Power Supply Data
	---------------------------------
	
	Model                          Smart-UPS 600
	Serial Number                  W920329362
	Supplied Cable Part Number     940-0020A
	Vendor Supplied Software       N/A
	Software Part Number           N/A
	
	UPS Switch Settings
	-------------------
	
	Switch Number       Setting
	-------------       -------
	    1               OFF
	    2               OFF
	    3               OFF
	    4               OFF
	
	The switch settings used are also factory defaults.
	
	Testing Environment
	-------------------
	
	Operating System      OS/2 1.3
	Network               LAN Manager 2.1
	Test Platforms        486/33 16 MB RAM
	Bus Specification     EISA
	Network Topology      Ethernet
	
	LANMAN.INI [UPS] Settings
	-------------------------
	
	BatteryTime          60
	CmdFile             N/A
	MessDelay             2
	MessTime            300
	Recharge            100
	Signals             111
	VoltLevels          111
	
	Final Test Results
	------------------
	
	Test Focus                            Pass  Anomalies and/or Workarounds
	----------                            ----  ----------------------------
	Installation                          Yes
	Fully Chargeable                      Yes
	Power Lost Signal                     Yes
	Power Restored Signal                 Yes
	Low Battery Signal to Server          Yes
	Shut Down Server                      Yes
	Server Boots When Power Restored      Yes
	Sustains Server Power for 5 Minutes   Yes
	
	Additional query words: certification mcl
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
