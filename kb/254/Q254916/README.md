---
layout: page
title: "Q254916: XFOR: Line Overwritten Sending Files to an Exchange Server"
permalink: /kb/254/Q254916/
---

## Q254916: XFOR: Line Overwritten Sending Files to an Exchange Server

{% raw %}

	Article: Q254916
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you send a data file that contains the plus sign printer control character
	(+) in the first column from a TSO XMIT application to an Exchange Server
	recipient by using the Microsoft Exchange Connector for IBM OfficeVision/VM
	(PROFS), the Exchange PROFS Connector deletes the next line of data in the data
	file.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	The following are the ASA carriage control codes (note that they are executed
	before the line is printed):
	
	- (1) Page feed, then print line.
	
	- ( ) Line feed, then print line.
	
	- (0) Line feed twice, then print line.
	
	- (+) Overprint line without advancing.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
