---
layout: page
title: "Q140185: XCLN: Distribution List in To: Field Not Bold in Message"
permalink: /kb/140/Q140185/
---

## Q140185: XCLN: Distribution List in To: Field Not Bold in Message

	Article: Q140185
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you receive a message that was sent to a Microsoft Exchange Distribution
	List, the name of the Distribution List is not bold in the To: field. If you
	double-click the Distribution List name in the To: field, it brings up the
	details of the Distribution List and the Distribution List name is bold in the
	To: field.
	
	CAUSE
	=====
	
	This is by product design.
	
	MORE INFORMATION
	================
	
	To improve the performance of the Microsoft Exchange clients, the member list of
	a Distribution List is not loaded into memory when the message is first opened.
	Only the Display Name of the Distribution List is used in the To: field. When
	you double-click the Distribution List name, the member list of the Distribution
	List is loaded from the address book and displayed. Once this procedure is done,
	the client has confirmed that the name is a valid Distribution List name, so it
	displays the Distribution List name in bold, which is the default format to
	display a Distribution List name in Microsoft Exchange.
	
	
	Additional query words: highlight group name
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : :4.0,5.0
	
	=============================================================================
	
