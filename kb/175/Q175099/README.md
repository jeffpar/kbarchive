---
layout: page
title: "Q175099: XCLN: Shiva Error: Unable to Negotiate LCP Connection"
permalink: /kb/175/Q175099/
---

## Q175099: XCLN: Shiva Error: Unable to Negotiate LCP Connection

	Article: Q175099
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Outlook, Exchange Server Edition, version 8.0, used with:
	   - the operating system: Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When using the ShivaRemote client software to establish a connection through a
	Remote Access Service (RAS) server to an Exchange Server computer, you may
	receive the following error message:
	
	  Unable to negotiate LCP connection. Please check that
	  remote device is installed and configured and that
	  dial-in is enabled
	
	CAUSE
	=====
	
	The RAS server is a computer running Windows NT 4.0. If your RAS server is
	configured to "Allow any authentication including clear text," a RAS client is
	able to connect with Password Authentication Protocol (PAP), Shiva Password
	Authentication Protocol (SPAP), Challenge Handshake Authentication Protocol
	(CHAP), or Microsoft CHAP (MS- CHAP) depending on what the client supports.
	Normally, a client will attempt to connect with CHAP or MS-CHAP, if that is
	valid for the RAS server to which it is connecting. In the case of Shiva remote
	client connections, Shiva does not support MS-CHAP. Encountering this protocol
	causes the Shiva client to fail.
	
	For additional information about Windows NT 4.0 RAS server authentication
	configuration, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q172216 How to Force Routing and Remote Access to Use PAP
	
	WORKAROUND
	==========
	
	To work around the problem:
	
	- Set the Windows NT 4.0 RAS server to use NetBEUI as the only protocol. This
	  will allow the Exchange connection to work successfully. However, the NetBEUI
	  protocol has limitations that others do not.
	
	  -or-
	
	- Upgrade the client to Windows 95 and use dial-up networking to configure a
	  remote connection.
	
	  -or-
	
	- Downgrade the RAS server to Windows NT version 3.51 with the latest service
	  pack. Shiva can successfully negotiate connections through Windows NT 3.51
	  RAS servers using any protocol.
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword3
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
