---
layout: page
title: "Q154476: XCLN: System 11 Error w/Cleared &quot;Show Rules for All Profiles&quot;"
permalink: kb/154/Q154476/
---

## Q154476: XCLN: System 11 Error w/Cleared &quot;Show Rules for All Profiles&quot;

	Article: Q154476
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you clear the Show Rules for all Profiles checkbox on the Microsoft
	Exchange Client for Macintosh, a System 11 error occurs. This only occurs when
	an Alert Inbox rule has been created using a Microsoft Exchange client for
	Windows and only on PowerMac computers.
	
	WORKAROUND
	==========
	
	1. Delete all rules with "alerts" from the Windows client. (that is, in Tools,
	  Inbox Assistant, highlight any rule with "alert" and delete.)
	
	2. Click OK and save the Inbox Rules from the Windows client.
	
	3. Re-create rules from the Mac client(that is, in Tools, Inbox Assistant,
	  Add...).
	
	4. Click OK to save the Inbox Rules from the Mac client.
	
	NOTE: This workaround does not apply for sound rules.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbExchange400Mac
	Version           : WINDOWS:4.0
	
	=============================================================================
	
