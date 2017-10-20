---
layout: page
title: "Q154099: XFOR: cc:Mail Migration Wizard Adds Quotes in User.pri"
permalink: /kb/154/Q154099/
---

## Q154099: XFOR: cc:Mail Migration Wizard Adds Quotes in User.pri

{% raw %}

	Article: Q154099
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you migrate from cc:Mail using the Microsoft Exchange Migration Wizard,
	messages addressed to users using a cc:Mail Template will not be migrated
	successfully. The Migration Wizard will attempt to resolve this template address
	and add unwanted quotes in the User.pri file.
	
	In the event log, it will generate the following error:
	
	  Event ID: 27 Source: MSExchangeMig
	  Description: Parser Error 00000001.PRI line Number = XX. Characters found
	  after end doublequote. Details: Check the number of double quotes in the
	  line.
	
	CAUSE
	=====
	
	If a cc:Mail address consists of a name and a postoffice, and the name does not
	contain any quotable characters but the postoffice does, the opening quote will
	be inserted at the start of the whole address list rather than the start of the
	affected address.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
