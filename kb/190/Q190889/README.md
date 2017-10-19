---
layout: page
title: "Q190889: Configuring Hayes Modem for SNA Server Switched Line"
permalink: /kb/190/Q190889/
---

## Q190889: Configuring Hayes Modem for SNA Server Switched Line

	Article: Q190889
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To configure a Hayes Optima modem to communicate with an SNA Server SDLC link
	service in a switched line environment, the following commands must be sent to
	the modem. These commands will set the modem for synchronous mode and store a
	phone number in the modem. When SNA Server is started, this will cause the modem
	to automatically dial the stored number.
	
	Hyperterminal can be used to send the commands to the modem while the modem is
	still connected to the SDLC card in the computer. It is not necessary to move
	the cable to a serial port to configure the modem.
	
	Send the following strings to the modem:
	
	  "AT&F&Y
	  AT&Z0=Txxx-xxxx
	  AT&Q2&C1&D2&S1
	  ATE0Q1&W" (without the quotation marks)
	
	Replace xxx-xxxx with the phone number you want the modem to dial.
	
	NOTE: These settings will overwrite any previously stored startup parameters.
	
	MORE INFORMATION
	================
	
	Here is the meaning of the required modem commands. For additional information,
	refer to the documentation accompanying your modem.
	
	   &F              Set to factory defaults
	   &Y              Select stored profile as active profile
	   &Z0=Txxx-xxxx   Tone mode, autodial
	   &Q2             Synchronous mode
	   &C1             Received Line Signal Detector (RLSD) state
	   &D2             Data Terminal Ready (DTR) behavior
	   &S1             Data Set Ready (DSR) turned ON at handshake
	   E0              Echo Off
	   Q1              Result codes disabled
	   &W              Store active profile
	
	In SNA Server's configuration for the link service, set the line type for
	Switched: Modem-Stored Number.
	
	This third-party product is manufactured by Hayes Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: SNASDLC
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbhowto
	
	=============================================================================
	
