---
layout: page
title: "Q162017: XFOR: Messages Not Being Delivered to X.400 Recipients"
permalink: /kb/162/Q162017/
---

## Q162017: XFOR: Messages Not Being Delivered to X.400 Recipients

	Article: Q162017
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use a Microsoft Exchange Client against a Microsoft Mail for PC
	Networks postoffice to send mail to an X.400 recipient by means of the Microsoft
	Mail Connector, the following non-delivery report (NDR) may be generated
	
	  Delivery failed to
	  X400:C=au;A=myadmd;P=myprmd;O=myorg;S=given.init.surname
	  Reason: 1 (transfer impossible)
	  diagnostic:  0 (OR name (Email address) unrecognized).
	
	CAUSE
	=====
	
	When a new X.400 address is created using the Microsoft Mail template, the given
	name, initials, and surname are combined into a personal name (PN) field. When
	the Microsoft Mail Connector Interchange (MSMI) reads this PN field, it
	incorrectly translates it to the Surname field only, rather than splitting the
	field into Given Name, Initials, and Surname for correct delivery.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Send messages to addresses in the Global or Postoffice Address Lists as
	  created by the administrator.
	
	  -or-
	
	1. Create new X.400 addresses using the "Other Address" option in the New Entry
	  dialog box.
	
	2. Type X400 as the E-mail type and type the full and correct X.400 address in
	  the E-mail address field without using a PN value.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: X.400 PN MSMI
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
