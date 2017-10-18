---
layout: page
title: "Q169694: XCON: Content Conversion Fails When MDBEF Formatting Disabled"
permalink: kb/169/Q169694/
---

## Q169694: XCON: Content Conversion Fails When MDBEF Formatting Disabled

	Article: Q169694
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 20-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange message transfer agent (MTA) may fail to deliver messages
	across an X.400 connector when MDBEF message transfer has been disabled. Content
	conversion errors will be logged in the Exchange Server computer's event log,
	and users will receive non-delivery reports (NDRs).
	
	This problem will only occur with specific builds of the MTA when messages are
	sent over an X.400 Connector that is using metamorf conversion with MDBEF turned
	off. MDBEF is turned off by selecting the X.400 Connector's Advanced tab and
	clearing the check box for "Allow MS Exchange contents".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange MTA builds
	996.31 and 996.32 for Exchange Server version 4.0. This problem has been
	corrected in the latest U.S. Service Pack for Microsoft Exchange Server version
	4.0. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange MTA builds
	1459.17, 1459.18, 1459.19, 1459.20, 1459.21, 1459.22, and 1459.23 for Exchange
	Server version 5.0. This problem has been corrected in the latest U.S. Service
	Pack for Microsoft Exchange Server version 5.0. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	Users who encounter this problem will receive NDRs from the system administrator
	with messages similar to the following:
	
	Your message did not reach some or all of the intended recipients.
	
	     Subject:Test Message
	     Sent:8/1/97 2:02:00 PM
	
	The following recipient(s) could not be reached:
	
	     John Doe on 8/1/97 2:02:10 PM
	           The message contains a content type that is not supported
	           MSEXCH:MSExchangeMTA:CPRWA:MARIAH
	
	  -or-
	
	Your message did not reach some or all of the intended recipients.
	
	     Subject:Test Message
	     Sent:8/1/97 11:36:37 AM
	
	The following recipient(s) could not be reached:
	
	     Kitty on 8/1/97 11:33:28 AM
	           A syntax error was detected in the content of the message
	           MSEXCH:MSExchangeMTA:Guitars:BRASS_KITTEN
	
	In addition, events similar to the following will be logged in the event log on
	the server when content conversion fails:
	
	  Event ID:210
	  Source:MSExchangeMTA
	  Type:Warning
	  Category:X.400 Service
	  Description:
	  An internal MTA error occurred. Content conversion for message C=US;A=
	  ;P=Microsoft;L=BRASS_KITTEN-970801221402Z-9376 failed. Conversion error:
	  4096, Object at fault: 0600003B, Original content type: 56010A01, New
	  content type: 2A864886F7140501. PDU dump reference 4 [MTA DISP:FANOUT 16
	  112] (14)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
