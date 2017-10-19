---
layout: page
title: "Q169781: XFOR: IMC Fails to Send Mail to Domains with Multiple MX Records"
permalink: /kb/169/Q169781/
---

## Q169781: XFOR: IMC Fails to Send Mail to Domains with Multiple MX Records

	Article: Q169781
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5,0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 30-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	This problem occurs when you send SMTP messages through the Internet Mail
	Service (or the Internet Mail Connector [IMC], in version 4.0) to domains with
	multiple MX records. The message stays in the outbound queue waiting delivery,
	gets name resolution, and then times out, and a non-delivery report (NDR) is
	returned. This problem is usually encountered when sending messages to large
	corporations.
	
	The following error message may be received when you get information on the
	messages sitting in the queue:
	
	  421 NSO hq.com Unable to contact destination SMTP demon nestle.com
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Add DisableResolverSearchList to the following registry key:
	
	     HKEY_LOCAL_MACHINE\System\CCS\Services
	     \MSExchangeIMC\parameters
	
	  DisableResolverSearchList is added in the
	
	  For more details on this process refer to Q150969.
	
	2. Use NSLookup to get the correct IP addresses for the correct MX records of
	  each E-Mail Domain.
	
	3. In the IMC \ IMS Connections property tab, click on the E-Mail Domain command
	  to specify Message Delivery by E-Mail domain.
	
	4. Enter one Domain name- IP address pairs for every MX record found in step 2.
	
	5. Repeat steps 3 and 4 for every other domain that has having multiple
	  MXrecords and is experiencing this problem.
	
	6. Send a message to each one of these domains to test the workaround solution.
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5,0
	Issue type        : kbprb
	
	=============================================================================
	
