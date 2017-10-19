---
layout: page
title: "Q119370: Creating Customized Configuration Defaults for TCP/IP-32"
permalink: /kb/119/Q119370/
---

## Q119370: Creating Customized Configuration Defaults for TCP/IP-32

	Article: Q119370
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 1.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Microsoft TCP/IP-32 includes a MSTCP32.DEF file, which allows you to specify
	customized configuration defaults during installation of TCP/IP-32. You can use
	this file to have user installations default to specific values for the given
	settings.
	
	MORE INFORMATION
	================
	
	If the MSTCP32.DEF file is modified, performing any installations from the
	location of the modified MSTCP32.DEF file causes the installations to have the
	specified settings. When the user installs the file, they will not be prompted
	with the Microsoft TCP/IP Configuration dialog box. Setup copies the necessary
	files and makes the necessary changes to the .INI files; the user then needs to
	restart their computer.
	
	The default contents of the file are:
	
	     ; MSTCP32.DEF for Microsoft TCP/IP-32 for Windows For Workgroups 3.11
	     ; Copyright (C) 1994 Microsoft Corporation
	     ;
	     ; This file allows administrators to specify customized
	     ; configuration defaults for Microsoft TCP/IP-32. By
	     ; altering the values in this file, you can alter the
	     ; defaults that the user experiences during installation.
	     ; The valid parameter files are described in your User's
	     ; Guide or in online help.
	
	     [MSTCP]
	     deadgwdetect=1
	     pmtudiscovery=1
	     [NBT]
	     NameServer1=
	     NameServer2=
	     ScopeID=
	     [DNS]
	     DomainName=
	     DNSServers=
	     DNSDomains=
	     [MISC]
	     DHCPEnabled=0
	     RouterEnabled=1
	     IPMask=
	     DefaultGateway=
	
	NOTE: The settings in the [MISC] section of the MSTCP32.DEF file are not
	documented in the online Help.
	
	These settings are defined as:
	
	  DHCPEnabled= 0 or 1
	     Specifies whether Microsoft TCP/IP-32 will use dynamic host
	     configuration.
	     Default=0 (false)
	
	  RouterEnabled= 0 or 1
	     Specifies whether the "Enable IP Routing" check box will be available
	     or unavailable (grayed out) in the Advanced Microsoft TCP/IP
	     Configuration dialog box.
	     Default=1 (true)
	
	  IPMask= #.#.#.#
	     Specifies the subnet mask.
	     Default= (blank)
	
	  DefaultGateway= #.#.#.#
	     Specifies the IP Address for the default gateway.
	     Default= (blank)
	
	Additional query words: wfw wfwg prodtcp32 1.0 WFWG
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311
	Version           : 1.00
	
	=============================================================================
	
