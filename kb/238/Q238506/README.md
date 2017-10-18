---
layout: page
title: "Q238506: XADM: Installing Exchange Server Message Transfer Agent MIXER"
permalink: kb/238/Q238506/
---

## Q238506: XADM: Installing Exchange Server Message Transfer Agent MIXER

	Article: Q238506
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article explains how to install the Exchange Server Message Transfer Agent
	(MTA) MIME Internet X.400 Enhanced Relay (MIXER).
	
	MORE INFORMATION
	================
	
	Best Practices for Implementing the X.400/SMTP Address Mixer Server As a Gateway
	--------------------------------------------------------------------------------
	
	- There should only be two points of entry into the MIXER server: one Internet
	  Mail Service, and one X.400 connector. If you need to route out to another
	  X.400 address space (that is, use additional X.400 connectors), this should
	  be done downstream of the MIXER-enabled server.
	
	- Do not deploy MIXER on a distribution list (DL) expansion server because of
	  possible performance issues involved in running the MIXER functionality.
	
	- Do not deploy MIXER on a message journaling server because of the specific
	  configurations and message flow routes when message journaling is enabled.
	
	Pre-Installation Tasks
	----------------------
	
	1. Decide on your mapping scheme. The MIXER functionality is only invoked if an
	  address to be mapped cannot be found in the global address list already. For
	  these addresses, decide if an algorithmic mapping will suffice, or list the
	  specific mappings that need to be added to the Mcgam file.
	
	
	  NOTE: Algorithmic mappings will, for example, map "microsoft.com" to c=com;
	  a=microsoft, which is invalid because a country cannot have three alphabetic
	  characters. In practice, a mapping for .com must be placed in the Mcgam file.
	
	2. If you want algorithmic mapping, set the following registry entry in the MTA
	  Parameters key:
	
	  Value: Strict MIXER Conformance
	  Type: REG_DWORD
	  Data: 1
	
	NOTE: The setting above may be appropriate if, for example, you have complete
	control over which domains will be mapped, and you know that they will map
	automatically to valid X.400 addresses, or if you know that the messages may
	return to the Internet over another MIXER MTA/Internet Mail Service and the
	reverse algorithmic mapping will restore the original SMTP address.
	
	If you want any non-Mcgam addresses to be mapped to the site X.400 Address and
	Domain Defined Attribute (DDA) RFC-822, omit the registry entry or set it to 0.
	
	3. Create the Mcgam.in.txt file. This file contains the mappings that are used
	  by the MIXER MTA. In a production environment, install MIXER on all MTAs in
	  the organization that have a local Internet Mail Service. This is to maintain
	  consistency as the MIXER MTA and older MTAs use different encapsulation DDAs,
	  and it is better not to mix them (that is, a non-MIXER MTA does not recognize
	  an RFC-822 DDA.)
	
	Installation
	------------
	
	Install Service Pack 3 for Exchange Server 5.5, and carry out the following tasks
	before restarting the Exchange Server services.
	
	1. Create the Exchsrvr\Mtadata\Mcgam.in.txt file.
	
	  NOTE: This is required to activate the MIXER code. If you only require
	  algorithmic mapping, create an empty file. (This path assumes Mtadata is the
	  MTA run directory.) Create a Local.in.txt file, if required.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q241037 XADM: Local.in.txt Is Needed When Using Mixer
	
	2. Add a new registry value to the MSExchangeIMC parameters:
	
	  Value: AddressingNeverFails
	  Type: REG_DWORD
	  Data: 1
	
	NOTE: This is required because the Internet Mail Service normally only passes
	messages to the MTA if it can resolve the recipients against the global address
	list. In the MIXER case, there is no global address list entry and you want the
	MTA to map the address, so this registry entry overrides the check the Internet
	Mail Service makes.
	
	3. If you want MIXER algorithmic mapping for addresses not defined in the Mcgam
	  file, add the MTA parameter:
	
	  Value: Strict MIXER Conformance
	  Type: REG_DWORD
	  Data: 1
	
	4. In the Microsoft Exchange Server Administrator program, click the Routing tab
	  of the IMS Properties page. Add all of the domains for which MIXER will map
	  the addresses (for example, microsoft.com), and set them as Route to
	  <inbound>.
	
	5. Start the Exchange Server services.
	
	Post-Installation
	-----------------
	
	Examine the application event log and look for an ExchangeMTA Informational Event
	260. This says that the Mcgam mappings have been written to the
	Mtadata\Mappings.out.txt file. Examine this file, and ensure the mappings are
	correct. If the MTA detects an error in the Mcgam.in.txt, it logs a 232 or a 233
	event, and the Mappings.out.txt file will contain only ?Revert to old tables.?
	This means that the MIXER is not active.
	
	In this case, correct the error in the Mcgam.in.txt file, and add the following
	MTA parameter in the following registry location:
	
	  Value: Reload MIXER Tables
	  Type: REG_DWORD
	  Data: <any number>
	
	NOTE: Whenever this value is changed, the MTA immediately recalculates its
	mapping table and then checks for a correct Mappings.out.txt file. You may wish
	to create this entry initially, and assign it a value of 0. Then, whenever you
	make a change to the Local.in.txt file or Mcgam.in.txt file while the MTA is
	running, incrementing the value will cause the MTA to immediately recalculate
	its mapping table and create a new Mappings.out.txt file.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
