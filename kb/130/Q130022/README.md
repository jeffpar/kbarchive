---
layout: page
title: "Q130022: XCLN: White Space Not Ignored When Grouping by Subject"
permalink: /kb/130/Q130022/
---

## Q130022: XCLN: White Space Not Ignored When Grouping by Subject

	Article: Q130022
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusagekbbuglist
	Last Modified: 11-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you choose Common Views on the View menu and then choose Group By Subject,
	you may see two different groupings for a subject, even though the subject line
	is the same.
	
	CAUSE
	=====
	
	This problem occurs if there is a blank space at the end of the subject line.
	The Group By Subject algorithm does not ignore white space at the end of the
	subject. Therefore, the result is two separate groupings.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange version
	4.0 Windows 3.x, Windows 95, and Windows NT clients. We are researching this
	problem and will post new information here in the Microsoft Knowledge Base as it
	becomes available.
	
	
	Additional query words: faq
	
	======================================================================
	Keywords          : kbusage kbbuglist
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : 4.0 5.0
	
	=============================================================================
	
