---
layout: page
title: "Q146299: XFOR: SMTP Address Space Appears as a Semicolon"
permalink: kb/146/Q146299/
---

## Q146299: XFOR: SMTP Address Space Appears as a Semicolon

	Article: Q146299
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Address Space on the Microsoft Exchange Internet Mail Connector (IMC) is
	set to TYPE:SMTP and the ADDRESS value is left blank then on the Site
	Addressing-Routing property page the SMTP address appears as a semi- colon (;)
	in the VALUE column.
	
	RESOLUTION
	==========
	
	This is just a display problem and does not effect the working of the Microsoft
	Exchange IMC and the Microsoft Exchange message transfer agent (MTA). The blank
	address space on the IMC means that any address of type SMTP should be sent to
	the IMC from the MTA.
	
	Microsoft suggests to get better performance from the IMC/MA, the value of "*"
	should be used instead of leaving it blank.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 4.0, of Microsoft
	Exchange. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 4.00 ROUTING TABLE GWART Semi colon
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	
