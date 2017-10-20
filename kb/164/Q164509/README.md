---
layout: page
title: "Q164509: XCLN: Microsoft Mail Address Book Not Displayed"
permalink: /kb/164/Q164509/
---

## Q164509: XCLN: Microsoft Mail Address Book Not Displayed

{% raw %}

	Article: Q164509
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Exchange Client with an MSMail Service installed may not display the
	complete list of Microsoft Mail networks and postoffices when you view the
	address book. This happens when the Microsoft Mail Network.glb file is corrupted
	or a specific .xtn file is corrupted with duplicate entries for the same network
	or postoffice definition.
	
	When you scroll through the address book, the list does not display any further
	than the duplicate network or postoffice definition. When viewing with the
	Microsoft Mail 3.5 client, all networks and postoffices are available.
	
	The corruption is due to a duplicate Network or postoffice definition in
	Network.glb or a specific .xtn file.
	
	RESOLUTION
	==========
	
	Because the entry is duplicate, the .xtn file will still be divisible by 698
	bytes. If an .xtn or Network.glb file is corrupted, perform the following step:
	
	- Send the access (Access.*) files, the .xtn files, and the Network.glb file to
	  Microsoft Technical Support (MTS).
	
	A support professional can verify information in the XTN files, or Network.glb,
	correct the record, and return your file to you.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 4.0 and 5.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
