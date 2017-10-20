---
layout: page
title: "Q164028: XCON: Setting up an X.400 Connector to MSMail X400 Gtwy over TP4"
permalink: /kb/164/Q164028/
---

## Q164028: XCON: Setting up an X.400 Connector to MSMail X400 Gtwy over TP4

{% raw %}

	Article: Q164028
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article will explain how to setup the Microsoft Exchange Server X.400
	Connector to communicate with a Microsoft Mail 3.x X.400 Gateway server.
	
	This article assumes that the both the Microsoft Mail X.400 Gateway and the TP4
	stack for that Gateway are fully operational. For assistance with that, please
	consult the Microsoft Mail Gateway to X.400 Administrator's Guide.
	
	MORE INFORMATION
	================
	
	The first thing that needs to be done is to install the TP4 protocol for Windows
	NT Server. The software for this protocol is located on both the Windows NT
	Server compact disk and the Microsoft Exchange Server compact disk. This article
	will be based upon using the one on the Microsoft Exchange Server compact disk.
	
	To install the protocol, open the Control Panel, double-click the Network icon,
	and add a protocol. Select the Other option (Have Disk under NT 4.0) and give
	the path to the TP4 installation directory. This should be similar to:
	
	  X:\TP4SETUP\<cputype>
	
	Once the protocol is installed, it will display the TP4 configuration dialog box.
	By default the Local Address and NSAP are identical to the name of the Windows
	NT Server. This will need to be changed in order to connect to the Microsoft
	Mail Gateway because this gateway, like many other older messaging systems,
	requires HEX NSAPS as defined in ISO 8348.
	
	The first piece of information needed is the MAC address for the Windows NT
	Server's network card. The easiest way to find this out is to run IPCONFIG /ALL
	at a command prompt. This will show the Physical Address of the card such as:
	
	  Physical Address: 00-C0-4F-C3-2B-46
	
	The formula for creating a HEX NSAP is as follows:
	
	  Octet 0-1 is the Authority and Format Identifier. 49 is for locally assigned
	  values
	
	  Octet 2-5 is the Subnet ID
	
	  Octet 6-17 is the MAC address
	
	  Octet 18-19 is the NSAP selector, generally 01.
	
	Based on the above formula, the NSAP for the above Physical address would be -
	49000000C04FC32B4601
	
	  49 is local authority ID
	  0000 is subnet ID (under most instances this will be 0000)
	  00C04FC32B46 is the MAC address
	  01 is the NSAP selector
	
	In the TP4 configuration dialog, the Local Address and NSAP would be entered as
	the same value and would like this:
	
	  Local Address
	  $49000000C04FC32B4601
	
	  NSAP
	  $49000000C04FC32B4601
	
	It is very important to add the '$' in front of the HEX ID because this tells the
	protocol to pass the HEX value and not the ASCII value of the address.
	
	This is also the address that will need to be entered under the Remote MTA setup
	for the Microsoft Mail Gateway for X.400.
	
	The next step is to setup the X.400 Connector in the Microsoft Exchange
	Administrator program. Most of the information for doing this is available in
	Chapter 8 'Using the X400 to Connect Sites or Foreign Systems' of the Microsoft
	Exchange Server Administrator's Guide.
	
	The areas that need special attention are the Stack and Advanced tabs of the
	X.400 connector.
	
	On the Stack Tab, the NSAP of the Microsoft Mail X.400 Gateway server will need
	to be entered. This can be obtained from the Microsoft Mail X.400 Admin program.
	Also, any TSAP, SSAP, or other information may be entered here if it is required
	by the Microsoft Mail X.400 Gateway installation.
	
	On the Advanced Tab, the following options need to be set
	
	  MTA conformance needs to be set to 1984
	  Clear all boxes under X400 Link Options.
	
	All other selections may be left at defaults.
	
	Additional query words: tp4 vodka msmail x400 retix mta monolouge
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	
	=============================================================================
	

{% endraw %}
