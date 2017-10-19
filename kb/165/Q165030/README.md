---
layout: page
title: "Q165030: XCON: Sample Configuration between Exchange and MailBus 400"
permalink: /kb/165/Q165030/
---

## Q165030: XCON: Sample Configuration between Exchange and MailBus 400

	Article: Q165030
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0 5.5
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The following information should allow you to make a 1988 connection between
	Microsoft Exchange Server and Mailbus 400 using TCP/IP as the transport
	mechanism. It is recommend that you do this in the order specified, but it is
	not required. The information below covers the trouble spots and the parameters
	which must be set in a non-intuitive or non-default way.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	The system in this examples uses the following configuration:
	
	  IP Address: 204.5.25.76
	  Hostname: IGPAA2.IGA.COM
	  TSAP MTA88-DECUS1 MTA88-DECUS1
	  SSAP MTA MTA
	  PSAP MTA MTA
	
	To make a 1988 connection between the MailBus 400 system and Exchange Server,
	follow these steps:
	
	1. On the MailBus 400 system, define your Message Transfer Agent (MTA) and note
	  your MTA presentation address.
	
	  NCL>SHO MTA PRESENTATION ADDR Node 0 MTA at 1996-05-06-15:16:52.751+00:00Iinf 
	  Characteristics Presentation Address="""MTA""/""MTA""/""MTA88-IGPAA2""/RFC1006+
	  IGPAA2.IGA.COM,RFC1006" 
	
	2. Similarly, define the PEER MTA (in other words, the Exchange Server) to
	  MailBus 400, and make note of the presentation address. At the end of this
	  article is attached the NCL script we are using to define our Exchange Server
	  computer (called DECUS1).
	
	  NCL>SHO MTA PEER MTA [TYPE=MANUALLY CONFIGURED,NAME="nnnn"] 
	  PRES ADDR Node 0 MTA Peer MTA [ Type = Manually Configured , Name = "nnnn" ] at
	  1996-05-06-15:27:04.798+00:00Iinf 
	  Characteristics Presentation Address = """MTA""/""MTA""/""MTA88-DECUS1""
	  /RFC1006+204.5.25.76,RFC1006" 
	
	3. Now we will use those presentation addresses to tell Exchange how to talk to
	  MailBus 400. Create the TCP transport stack definition or if it already
	  exists, click on it (under Server in the Microsoft Exchange Administrator
	  program) to modify it. The OSI address information must look like this:
	
	     T selector:MTA88-DECUS1
	     S selector:MTA
	     P selector:MTA
	
	  Get these values from step 2 above - the presentation address of the PEER in
	  MailBus 400. They are case sensitive so use upper case for everything.
	
	4. Create your X.400 connector, or if it already exists, modify it. On the STACK
	  tab of the X.400 connector, you must set the fields as follows:
	
	     IP address: 1.2.3.4 (put in the address of the MB400 machine)
	     Outgoing OSI address information
	        T selector:MTA88-IGPAA2
	        S selector:MTA
	        P selector:MTA
	     Incoming OSI address information
	        T selector:MTA88-IGPAA2
	        S selector:MTA
	        P selector:MTA
	     Use expedited data: Yes
	
	  Both sets of selectors are identical, this is crucial. You got these values
	  from step 1 above.
	
	5. Click on the X.400 connector's ADVANCED tab and verify the following
	  settings:
	
	     MTA conformance: 1988 normal mode
	     X.400 link options Allow BP-15 [in addition to BP-14]: Allow MS-Exchange
	     contents: Two way alternate.
	
	6. After you've saved all of the X.400 connector changes, start the Windows NT
	  Registry Editor and go to:
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeMTA\Parameters
	
	  Find the Supports 2K TPDU parameter, double-click it, and set it to 1.
	
	7. Check your Local/Remote passwords. Specify the MTA name/password on the
	  Exchange MTA\General Tab.
	
	8. Make sure the X400 address is configured correctly.
	
	9. Restart the Exchange MTA for the parameter change to take effect.
	
	The 1988 connection should now be made.
	
	Administrator of the DECMAILBUS 400 should know how to configure the NCL Script.
	Refer the mailbus documentation for more information.
	
	
	Additional query words: Mailbus400 exchange configuration x400
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0 5.5
	Issue type        : kbinfo
	
	=============================================================================
	
