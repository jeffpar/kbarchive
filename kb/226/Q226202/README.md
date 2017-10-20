---
layout: page
title: "Q226202: XCON: No Delivery Receipts When IMS Is in Mailbox Disabled State"
permalink: /kb/226/Q226202/
---

## Q226202: XCON: No Delivery Receipts When IMS Is in Mailbox Disabled State

{% raw %}

	Article: Q226202
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following Event ID may appear in the Windows NT Application Event log:
	
	  Event ID: 2018
	  Source: MSExchangeIS Private
	  Type: Information
	  Category: Transfer Out Of Gateway
	  Description: The generation of a delivery report or a non - delivery report
	  for a gateway /o=MyOrg/ou=MySite/cn=configuration/cn=connections/cn=internet
	  mail connector has failed due to error 0x4dd.
	
	Also, in the Microsoft Exchange Server Administration program if you add the
	column "Storage Limits", the mailbox of the Internet Mail Service appears as
	"Mailbox disabled". The "Storage Limits" is added when you click the server in
	the left pane, click Private Information Store in the right pane, and then click
	Properties on the File menu. Click the Mailbox Resources tab, click Columns,
	click Storage Limits in the list of available columns, click Add, and then click
	OK.
	
	CAUSE
	=====
	
	The Delivery Report cannot be created because the mailbox of the Internet Mail
	Service has reached a quota. This quota is the one being defined in the Exchange
	Server Administration program. This quota is defined when you click the server
	in the left pane, click Private Information Store in the right pane, and then
	click Properties on the File menu. On the General tab, there is an area called
	Storage limits that has three check boxes: Issue warning (K), Prohibit send (K),
	and Prohibit send and receive (K). Next to each check box, there's a box where
	you can specify the actual value.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+-------------------------+
	| File name  | Version    | 
	+-------------------------+
	| Gapi32.dll | 5.5.2591.0 | 
	+-------------------------+
	| Mdbmsg.dll | 5.5.2591.0 | 
	+-------------------------+
	| Store.exe  | 5.5.2591.0 | 
	+-------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words: DR IMC
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
