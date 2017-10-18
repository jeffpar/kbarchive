---
layout: page
title: "Q181631: XCLN: Exchange Client Polls Flag.glb File on MS Mail Postoffice"
permalink: kb/181/Q181631/
---

## Q181631: XCLN: Exchange Client Polls Flag.glb File on MS Mail Postoffice

	Article: Q181631
	Product(s): Microsoft Exchange
	Version(s): 8.0,8.01,8.02,8.03; WINDOWS:4.0,5.0,8.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 03-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Outlook, Exchange Server Edition, version 8.0, used with:
	   - the operating system: Microsoft Windows versions 3.1, 3.11 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you configure the Microsoft Exchange or Outlook client to connect to a
	Microsoft Mail postoffice and set the client to check for new mail at a specific
	interval greater than 10 minutes, you notice the Microsoft Mail postoffice is
	polled and the Flag.glb file checked approximately every two minutes.
	
	If you apply a network trace between the client and the server hosting the
	Microsoft Mail postoffice, you see that every two minutes the client checks the
	Flag.glb file and thus makes a network connection.
	
	WORKAROUND
	==========
	
	For networks configured to do remote Domain Name Service via on-demand ISDN
	dial-up, changing the network topology is typically the only workaround.
	
	STATUS
	======
	
	This is by design.
	
	The behavior of the client can prove to be unexpectedly very expensive for
	networks that are configured with dial-up on-demand ISDN connections, especially
	when outbound connections are expected to occur at greater time intervals.
	
	
	Additional query words: Configure Profile Information Service
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbOutlook97Search kbZNotKeyword3
	Version           : :8.0,8.01,8.02,8.03; WINDOWS:4.0,5.0,8.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
