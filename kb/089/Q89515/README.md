---
layout: page
title: "Q89515: LAN Man 2.1 Test Summary (DigiBoard DigiCHANNEL C/X EISA)"
permalink: /kb/089/Q89515/
---

## Q89515: LAN Man 2.1 Test Summary (DigiBoard DigiCHANNEL C/X EISA)

{% raw %}

	Article: Q89515
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The following are the test results for the DigiBoard DigiCHANNEL C/X System,
	EISA Host Adapter multiport communication board. The test was conducted as part
	of the Microsoft Compatibility Lab (MCL) peripheral test for LAN Manager version
	2.1:
	
	MORE INFORMATION
	================
	
	Company
	-------
	
	DigiBoard
	6751 Oxford St.
	Minneapolis, MN 55426
	(612) 943-9020
	
	Date Tested
	-----------
	
	5/19/92
	
	Multiport Communication Board
	-----------------------------
	
	Model:                 DigiCHANNEL C/X System, EISA Host Adapter
	Serial number:         473672
	I/O port:              N/A
	Memory address:        0D0000h
	
	Board Switch Settings
	---------------------
	
	No switches to set on this board.
	
	Other Hardware Supplied
	-----------------------
	
	Connector for port board:        DIGICHANNEL C/CON - 16 (DB25)
	Part number:                     50000043 REV.F
	
	Software and Drivers
	--------------------
	
	OS/2 device driver filename:     XALL.SYS
	Date of file:                    11/20/91
	Version:                         1.3.2
	
	Line Added to CONFIG.SYS
	------------------------
	
	device=c:\digi\xall.sys /a:Q /n:3 /p:5005 /m:D0000 /t:m10
	
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
	
	Test Focus                    Pass    Anomalies and/or Workarounds
	----------                    ----    ----------------------------
	Installation                   Yes    The server and all RAS clients
	                                     are using a null modem Cable
	                                     running at 9600 baud. Higher
	                                     baud rates are available using
	                                     the DigiBoard, but are not
	                                     recommended for the RAS service.
	
	Remote Access admin            Yes
	Remote Access server           Yes
	Network functionality          Yes
	Stress                         Yes
	Named pipes                    Yes
	
	Additional query words: certification 2.1 2.10
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
