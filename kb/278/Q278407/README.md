---
layout: page
title: "Q278407: XADM: Event ID 4097 Occurs If You Run the Move Mailbox Wizard"
permalink: kb/278/Q278407/
---

## Q278407: XADM: Event ID 4097 Occurs If You Run the Move Mailbox Wizard

	Article: Q278407
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Move Mailbox wizard in Exchange Server, the following event ID
	message may be logged in the application event log in Microsoft Event Viewer:
	
	  Event ID: 4097
	  Source: Dr. Watson
	  Description
	  The application, exe\store.dbg, generated an application error. The error
	  occurred on 10/24/2000 @ 9:41:42.854. The exception generated was c0000005 at
	  address 780015cc (wcslen).
	
	CAUSE
	=====
	
	This issue may occur if there is a remote procedure call (RPC) problem on the
	Exchange Server computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, make sure that Microsoft Windows NT 4.0 Service Pack 6a
	(SP6a) is installed on the server.
	
	MORE INFORMATION
	================
	
	If this issue continues to occur after you apply Windows NT SP6a, contact
	Microsoft Product Support Services (PSS). For information about how to contact
	PSS, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/directory/question.asp?sd=gn&fr=0
	
	Before you contact PSS, make sure that you have the following information
	available to send to the support professional:
	
	- The Drwtsn32.log from the %SystemRoot% folder
	
	- A Winmsd report
	
	- A Pstat.exe report
	
	For additional information about the issues that are resolved in SP6a, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q241211 List of Bugs Fixed in Windows NT 4.0 Service Pack 6/6a (Part 1)
	
	  Q244690 List of Bugs Fixed in Windows NT 4.0 Service Pack 6/6a (Part 2)
	
	For additional information how to obtain the latest Windows NT 4.0 service pack,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	Additional query words: store.exe user.dmp
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
