---
layout: page
title: "Q196892: XFOR: Dirsync Service Stops Unexpectedly-Event 181 in Event Log"
permalink: /kb/196/Q196892/
---

## Q196892: XFOR: Dirsync Service Stops Unexpectedly-Event 181 in Event Log

{% raw %}

	Article: Q196892
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to start the Microsoft Exchange Directory Synchronization
	service, an access violation may occur, and the service may stop unexpectedly.
	No error messages are displayed, but the following event may appear in the event
	log one or more times:
	
	  Event ID: 181
	
	This problem occurs when the Microsoft Exchange Server computer is configured as
	a directory synchronization (dirsync) requestor, and the server and the
	Microsoft Mail for PC Networks postoffice are configured to transfer template
	information.
	
	CAUSE
	=====
	
	This problem can occur when the Exchange Server computer does not properly
	process the list of template prompts. The dirsync service assumes that the
	strings in the template prompts are zero-terminated, but they are not. This
	causes the service to sort the template prompts incorrectly.
	
	In addition, this problem can occur if one or more of the template prompts
	contains a trailing slash mark (/). A slash mark is normally used to separate
	the template prompt from the template data. When the template prompt contains a
	trailing slash mark, a second slash mark is used to separate the template prompt
	from the template data. This may cause the dirsync service to determine that two
	template prompts are the same when they are not.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Directory Synchronization (Dirsync)
	
	  File Name   Version
	  ----------------------
	  Dxa.exe     5.5.2396.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words: custom recipient attribute
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
