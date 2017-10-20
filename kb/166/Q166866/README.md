---
layout: page
title: "Q166866: XFOR: SMTP Outbound Mail Transfer Stops After SP1 is Installed"
permalink: /kb/166/Q166866/
---

## Q166866: XFOR: SMTP Outbound Mail Transfer Stops After SP1 is Installed

{% raw %}

	Article: Q166866
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After upgrading a Microsoft Exchange Server version 5.0 to Microsoft Exchange
	Server Service Pack 1, all SMTP mail may return a Non-Delivery Report (NDR) with
	the following text:
	
	  Your message did not reach some or all of the intended recipients.
	  Subject: alskjdf; Sent: 6/11/97 5:02:18 PM
	
	  The following recipient(s) could not be reached:
	  'no1' on 6/11/97 5:02:36 PM
	  One or more arguments in the recipient was detected as being invalid
	
	The following Event IDs are logged in the Windows NT Event Viewer Application
	log:
	
	  Event 1026; Source: MSExchIS; Type: warning, Category Transport General
	  An error occurred with the following call stack:
	  FStartTransferIn EcDeliverGWMessage(): 0000000bb8
	  EcTferInMessage(): 0000000bb8
	  EcBilateralInfoEntryFromOmObj(): 0000000bb8
	
	  Event 2007; Source: MSExchIS, Type: error, Category MTA Connections
	  ma_open returned error 22.
	
	MORE INFORMATION
	================
	
	Checking the X.400 Site Addressing of the recipient's Site in the Microsoft
	Exchange Administrator program, you will find that this Site is without a PRMD
	field in its X400 Site Addressing. The PRMD field is not a required as long as
	the organization or surname fields are present. The Microsoft Exchange Internet
	Mail Service (IMS) does not appear to be involved in the NDR as the problem
	ovcurs when the IMS is not running.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
