---
layout: page
title: "Q113239: X.25 Support with Windows for Workgroups 3.11 RAS"
permalink: kb/113/Q113239/
---

## Q113239: X.25 Support with Windows for Workgroups 3.11 RAS

	Article: Q113239
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-SEP-1999
	
	3.11
	
	WINDOWS
	
	kbnetwork kb3rdparty
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	Microsoft does not encourage nor support changes to .INF files; therefore,
	Microsoft Product Support Services (PSS) does not support the procedure in
	this article. Although we have tested the following procedure and it
	appears to function as described, we recommend that you make a backup copy
	of your .INF file before you proceed.
	
	SUMMARY
	=======
	
	The Remote Access Services (RAS) client that ships with Microsoft Windows for
	Workgroups supports the packet-switching protocol X.25. The X.25 protocol is
	used to gain access to vendor-provided wide area networks (WANs) by modem or
	direct connections from terminals and computers.
	
	MORE INFORMATION
	================
	
	RAS can be set up as a client to dial Packet Assembly/Disassembly (PAD) services
	that are supplied by X.25 carriers. Windows for Workgroups RAS clients support
	X.25 networking if the PAD.INF file is set up with the correct X.25 command
	scripts. The default PAD entries in the PAD.INF file include InfoNet, SprintNet
	Alternate, and SprintNet Standard.
	
	In some cases, you may need to manually enter the specific PAD command scripts in
	the PAD.INF file. These command scripts allow you to automate communication with
	your vendor's X.25 dial-up PAD, however, you have the option to log on
	interactively to the dial-up PAD by using the Windows For Workgroups RAS
	Terminal feature. For additional information refer to the section titled
	"CONFIGURING WINDOWS RAS TO USE RAS TERMINAL AFTER DIALING" in the following
	article:
	
	  Q125975 Automating Remote RAS Logons Using SWITCH.INF Scripts
	
	The following steps may allow you to connect to an X.25 provider through Windows
	for Workgroups RAS:
	
	1. In Remote Access, choose Add from the toolbar.
	
	2. In the Phone Book Entry dialog box, select Advanced.
	
	3. At the bottom of the Advanced Phone Book Entry dialog box, select X.25.
	
	4. Fill in the fields in the X.25 dialog boxes.
	
	   - PAD Type: Enter the name of the X.25 provider (for example, SprintNet,
	     InfoNet, or another provider that was added to PAD.INF file manually).
	
	   - X.121 Address: Provide the access phone number for the X.25 network.
	
	   - User Data: Enter any additional connection information required by the
	     X.25 host computer. In Windows for Workgroups RAS Setup for X.25, the User
	     Data field is usually left blank unless additional connection information
	     is required.
	
	   - Facilities: Facility parameters for the X.25 provider. (For example, some
	     X.25 providers support the /R parameter to specify reverse charging.
	     Consult the X.25 documentation or provider for more information.)
	
	  NOTE: "PAD Type" and "X.121 Address" are mandatory settings. The options for
	  "User Data" and "Facilities" may be optional settings if you are using RAS
	  X.25 connectivity for Windows for Workgroups.
	
	To access the X.25 network as a client or server with X.25 smart cards, you must
	have RAS 1.1a, which ships with Microsoft Windows NT and Microsoft Windows NT
	Advanced Server. Direct connections with X.25 smart cards are not supported with
	the Windows for Workgroups 3.11 RAS product.
	
	Additional query words: 3.11 X25 smartcards twenty five ntas ptp
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
