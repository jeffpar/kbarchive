---
layout: page
title: "Q230420: XCON: Configuring an X.400 Connector Between a Commercial and a"
permalink: /kb/230/Q230420/
---

## Q230420: XCON: Configuring an X.400 Connector Between a Commercial and a

{% raw %}

	Article: Q230420
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set up an X.400 Connector from a commercial Exchange Server computer or
	site to a Defense Messaging System (DMS) Exchange Server computer or site, you
	may get the following non-delivery report (NDR) when you send or reply to a user
	on the DMS server:
	
	  From: System Administrator
	  Sent: Wednesday, April 21, 1999 1:59 PM
	  To: DMS USER1
	  Subject: Undeliverable: Test message from commercial to DMS
	
	  Your message did not reach some or all of the intended recipients.
	  Subject: Test message from commercial to DMS
	  Sent: 4/21/99 1:58 PM
	
	  The following recipient(s) could not be reached:
	
	  DMS USER1 on 4/21/99 1:59 PM
	  One or more arguments in the recipient was detected as being invalid.
	  The MTS-ID of the original message is: c=US;a=
	  ;p=ORGANIZATION;l=DMSSERVER1-990421235817Z-5
	  MSEXCH:MSExchangeMTA:SITE:DMSSITE1
	
	This may cause the following events to appear in the Event Viewer application
	log:
	
	  Event ID: 211
	  Source: MSExchangeMTA
	  Type: Warning
	  Category: X.400
	
	  An error has occurred during a Transfer-In procedure. Private Extensions are
	  not allowed to or from the Administrative Management Domain (ADMD). The
	  Message Identifier (MTS-ID) is C=US;A=
	  ;Organization;L=SERVERNAME-990430211926Z-125. X.400 reason code
	  unable-to-transfer, X.400 diagnostic code invalid-arguments. [MTA XFER-IN 12
	  97] (14)
	
	RESOLUTION
	==========
	
	On the commercial version of Exchange Server, modify the Advanced tab of the
	X.400 Connector to the DMS version of Exchange Server as follows:
	
	1. Select the "Use the GDI specified below" radio button.
	
	2. The "PRMD (p)" option should be configured to correctly reflect the remote
	  system's GDI settings.
	
	3. In the ADMD (a) section, select Specific.
	
	4. In the ADMD text box, type "DMS" (without the quotation marks).
	
	5. In the Country/Region (c) section, select US (United States).
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
