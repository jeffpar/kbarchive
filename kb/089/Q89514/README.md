---
layout: page
title: "Q89514: LAN Man 2.1 Test Summary (DigiBoard DigiCHANNEL PC/16e)"
permalink: /kb/089/Q89514/
---

## Q89514: LAN Man 2.1 Test Summary (DigiBoard DigiCHANNEL PC/16e)

{% raw %}

	Article: Q89514
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The following are the test results for the DigiBoard DigiCHANNEL PC/16e
	multiport communication board. The test was conducted as part of the Microsoft
	Compatibility Lab (MCL) peripheral test for LAN Manager version 2.1:
	
	MORE INFORMATION
	================
	
	Manufacturer
	------------
	
	DigiBoard
	6751 Oxford St.
	Minneapolis, MN 55426
	(612) 943-9020
	
	Date Tested
	-----------
	
	5/19/92
	
	Multiport Communication Board
	-----------------------------
	
	Model:                 DigiCHANNEL PC/16e
	Serial number:         493054
	I/O port:              120h
	Memory address:        0D0000h
	IRQ #                  10
	
	Board Switch Settings
	---------------------
	
	  Switch Number | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |10 |11 |
	  --------------|---|---|---|---|---|---|---|---|---|---|---|
	  DS1 Settings  |OFF|ON |OFF|OFF|ON |ON |ON |ON |ON |ON |OFF|
	  DS2 Settings  |OFF|OFF|OFF|OFF|ON |OFF|OFF|OFF| - | - |-  |
	
	Other Hardware Supplied
	-----------------------
	
	Connector for port board:        Hex Box (16 25 pin RS232 ports)
	Part number:                     760000652A
	
	Software and Drivers
	--------------------
	
	OS/2 device driver filename     XALL.SYS
	File date                       11/20/91
	Version                         1.3.2
	
	Line Added to CONFIG.SYS
	------------------------
	
	device=c:\digi\xall.sys /a:Q /n:3 /p:0120 /m:0D0000
	
	Testing Environment
	-------------------
	
	Operating system:        OS/2 1.3
	Network:                 LAN Manager 2.1
	Test platforms:          486/33 16 MB RAM
	Bus specification:       EISA
	Network topology:        Ethernet
	Server file system:      HPFS
	
	Final Test Results
	------------------
	
	Test Focus                  Pass     Anomalies and/or Workarounds
	----------                  ----     ----------------------------
	
	Installation                 Yes     The server and all RAS clients
	
	                                    are using a null modem cable
	                                    running at 9600 bps. Higher
	                                    transmission rates are available
	                                    using the DigiBoard, but are not
	                                    recommended for the RAS service.
	
	Remote Access Admin          Yes
	Remote Access Server         Yes
	Network functionality        Yes
	Stress                       Yes
	Named pipes                  Yes
	
	Additional query words: certification 2.1 2.10
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
