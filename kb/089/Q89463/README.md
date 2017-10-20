---
layout: page
title: "Q89463: LAN Man 2.1 Test Summary (American Power Back-UPS 1250)"
permalink: /kb/089/Q89463/
---

## Q89463: LAN Man 2.1 Test Summary (American Power Back-UPS 1250)

{% raw %}

	Article: Q89463
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The following are the test results for the Back-UPS 1250 uninterruptable power
	supply (UPS). The test was conducted as part of the Microsoft Compatibility Lab
	(MCL) peripheral test for LAN Manager version 2.1:
	
	MORE INFORMATION
	================
	
	Manufacturer
	------------
	
	American Power Conversion
	132 Fairgrounds Rd.
	West Kingston RI 02892
	(800) 800-4272
	
	Date Tested
	-----------
	
	5/26/92
	
	Uninterruptable Power Supply Data
	---------------------------------
	
	Model:                          Back-UPS 1250
	Serial number:                  W920523386
	Supplied cable part number:     940-0020A
	Vendor supplied software:       N/A
	Software part number:           N/A
	
	UPS Switch Settings
	-------------------
	
	Switch Number       Setting
	-------------       -------
	
	    1                OFF
	    2                OFF
	    3                OFF
	    4                OFF
	
	The switch settings used are also factory defaults.
	
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
	
	Test Focus                            Pass    Anomalies and/or Workarounds
	----------                            ----    ----------------------------
	
	Installation                          Yes
	Fully chargeable                      Yes
	Power lost signal                     Yes
	Power restored signal                 Yes
	Low battery signal to server          Yes
	Shut down server                      Yes
	Server boots when power restored      Yes
	Sustains server power for 5 minutes   Yes
	
	Additional query words: certification 2.1 2.10
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
