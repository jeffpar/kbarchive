---
layout: page
title: "Q323729: XADM: You Cannot View or Add Organizational Forms Library"
permalink: /kb/323/Q323729/
---

## Q323729: XADM: You Cannot View or Add Organizational Forms Library

{% raw %}

	Article: Q323729
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you click Forms Administrator on the Tools menu in the Microsoft Exchange
	Server Administrator program, there are not any Organization Form Libraries
	listed and you cannot create a new one.
	
	If you view the contents of the Organizational Form Libraries in the Public
	Folder hierarchy in System Folders/EFORMS REGISTRY in the Exchange
	Administrator, you may not see an Organization Forms folder. An Organization
	Forms folder may also be missing from the Organization Forms Library
	Administrator program, available on the Tools menu in the Exchange
	Administrator.
	
	  The contents of this public folder are currently unavailable. Either the
	  Microsoft Exchange Server Computer servicing this public folder is down or
	  the public folder has not been replicated to this site.
	
	CAUSE
	=====
	
	This behavior can occur if the Organization Forms folder does not have a replica
	in the local site.
	
	RESOLUTION
	==========
	
	To resolve this behavior, follow these steps:
	
	1. Click Start, point to Programs, point to Microsoft Exchange, and then click
	  Microsoft Exchange Administrator.
	
	2. In the Microsoft Exchange Administrator program, expand Servers, expand
	  Exchange Server, and then click Public Information Store.
	
	3. Click Properties on the toolbar.
	
	4. Click Instances.
	
	5. Click the Organization Forms Library that you want to use in the left pane,
	  and then click Add.
	
	  NOTE: If the Organization Forms Library does not appear in the left or right
	  panes, your Microsoft Exchange Server is experiencing difficulties other than
	  those addressed in this article.
	
	6. Click OK.
	
	7. Quit the Microsoft Exchange Administrator program.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q272187 XADM: Error Message When Viewing the Organization Forms Library
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange550 kbExchangeClientSearch kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
