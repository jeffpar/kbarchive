---
layout: page
title: "Q250441: XFOR: Internet Mail Service Moves Messages to Archive Folder"
permalink: /kb/250/Q250441/
---

## Q250441: XFOR: Internet Mail Service Moves Messages to Archive Folder

{% raw %}

	Article: Q250441
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a large number of files are copied to the Exchange Server Internet Mail
	Service Pickup folder, a random message may be moved to the Archive folder and
	the following event may be logged in the application event log of the Microsoft
	Windows NT Event Viewer:
	
	  Event ID: 4164
	  Source: MSExchangeIMC
	  Category: Message Transfer
	  Description: the file <file_name> in the pickup directory could not be
	  parsed to get the originator and recipients due to the error 0x80004005. It
	  either contains no recipients, or it is not a valid 822 message. It is moved
	  to the archive directory.
	
	CAUSE
	=====
	
	This issue can occur if the file does not have a size associated with it when it
	is first copied to the folder. The Internet Mail Service picks the file up, but
	the Internet Mail Service cannot process a file that has no size. Even though
	the file grows to its correct size on disk, the Internet Mail Service does not
	know that the file contains content.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	WORKAROUND
	==========
	
	To work around this issue, recopy the files from the Archive folder back to the
	Pickup folder.
	
	However, you must be sure that these files are formatted correctly.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
