---
layout: page
title: "Q145714: How to Establish Two 802.2 Connections To AS/400"
permalink: /kb/145/Q145714/
---

## Q145714: How to Establish Two 802.2 Connections To AS/400

	Article: Q145714
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SNA Server can establish a second connection to the same AS/400 if the second
	APPC controller is set up as a non-APPN controller and the APPC device is set as
	non-APPN capable. This article describes how you can establish the second
	connection.
	
	MORE INFORMATION
	================
	
	To establish a second connection to the same AS/400, do the following:
	
	SNA Server Configuration
	------------------------
	
	1. Use SNA Server Setup to create a new link service with a different SAP than
	  the existing one. For additional information, please see Chapter 3 of the SNA
	  Server Administration Guide and the following article in the Microsoft
	  Knowledge Base:
	
	  Q107192 Multiple Connections to the Same Host Over 802.2
	
	2. Create a new connection for the link service created in step 1. To do this,
	  enter a valid Remote Network Address and a Local Node ID. Do NOT enter a
	  Network Name, Control Point Name, or Remote Node ID. For additional
	  information, please see Chapter 3 of the SNA Server Administration Guide.
	
	3. Create a new Remote LU for the new connection. To do this, disable automatic
	  partnering for the LU. Verify that the LU name matches the Control Point Name
	  defined on the AS/400. For additional information, please see Chapter 6 of
	  the SNA Server Administration Guide.
	
	4. Create a new Local LU. To do this, disable automatic partnering. Partner with
	  the Remote LU created in step 3 above. For additional information, please see
	  Chapter 6 of the SNA Server Administration Guide.
	
	AS/400 Configuration
	--------------------
	
	1. Create a new controller description. To do this, set all parameters as a
	  standard SNA Server controller, except for the following:
	
	  AS/400 Parameter      Value
	  ----------------      -----
	  Exchange Identifier   Local Node ID (set up in Step 2 of SNA Server
	                        Configuration above)
	  Remote Control Point  *ANY
	  Initial Connection    *ANS
	  LAN DSAP              SAP for new link service (set up in Step 1 of SNA
	                        Server Configuration above)
	  APPN-capable          *NO
	
	2. Create a new APPC device description. To do this, set all parameters as a
	  standard SNA Server controller, except for the following:
	
	  AS/400 Parameter      Value
	  ----------------      -----
	  Remote location       New Local LU Name (set up in Step 4 of SNA Server
	                        Configuration above)
	  Attached controller   Controller (set up in Step 1 of AS/400
	                        Configuration above)
	  APPN-capable          *NO
	
	3. Vary on both the SNA Server controller and the APPC device.
	
	4. Attempt to start the connection. If any one of the configurations above are
	  set up incorrectly, the connection will not be available.
	
	  NOTE: Since the connection is non-APPN capable, any APPN related functions are
	  ignored.
	
	For additional information on SNA Server and AS/400 communication over an 802.2
	network, please see the following article in the Microsoft Knowledge Base:
	
	  Q112158 Configuring SNA Server to Talk to AS/400 Over 802.2
	
	Additional query words: prodsna 2.00 2.10 2.11 3.50 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbinfo
	
	=============================================================================
	
