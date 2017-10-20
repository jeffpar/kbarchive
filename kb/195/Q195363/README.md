---
layout: page
title: "Q195363: XADM: Admin Error When Viewing Internet Newsgroups Root Folder"
permalink: /kb/195/Q195363/
---

## Q195363: XADM: Admin Error When Viewing Internet Newsgroups Root Folder

{% raw %}

	Article: Q195363
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2
	Operating System(s): 
	Keyword(s): exc55sp2fix exc55 exc55sp1 exc55sp2
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to view the property pages of the Internet Newsgroup root
	folder, no property pages will be displayed and the following pop-up error
	message may be displayed:
	
	  The object cannot be found in the directory. This may be because
	  replication has not completed.
	
	  Microsoft Exchange Directory
	  ID no: c1010aae
	
	CAUSE
	=====
	
	The Exchange Server Administrator program inappropriately attempted to Look up
	the folder in a remote Exchange Server computer's directory. The Internet
	Newsgroup folder is a special type of folder which does not have a directory
	object. This pop-up error message occurs when the Exchange Server computer that
	the Exchange Server Administrator program is running on points to a different
	server in the site as the Public Folder hierarchy server. To view which server
	is being pointed to, perform the following steps:
	
	1. In the Exchange Server Administrator program, click <orgname>, click
	  <sitename>, and then click Configuration.
	
	2. In Configuration, click Servers, click <localsvrname>, and click
	  Private Information Store.
	
	3. On the File menu, click Properties, and then click the General tab to view
	  the Public folder server list box.
	
	If this list box contains a name other than the local server name that the
	Exchange Server Administrator program is focused on, then this pop-up error
	message would be displayed when you attempt to view the Internet Newsgroups
	folder.
	
	NOTE: This pop-up error message is a generic error. It could occur under other
	circumstances and should be interpreted literally under most other
	circumstances.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Administrator Program
	
	  File Name   Version
	  -----------------------
	  Admin.exe   5.05.2431.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2fix exc55 exc55sp1 exc55sp2 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2
	Version           : winnt:5.5,5.5 SP1,5.5 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
