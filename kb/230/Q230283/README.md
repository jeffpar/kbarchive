---
layout: page
title: "Q230283: XADM: Extension SMTP Could Not Be Loaded"
permalink: /kb/230/Q230283/
---

## Q230283: XADM: Extension SMTP Could Not Be Loaded

{% raw %}

	Article: Q230283
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open the properties for the Internet Mail Service in the Exchange
	Server Administrator program, the following error message is displayed:
	
	  Extension SMTP Could Not Be Loaded.
	
	The SMTP extension is located in the computer share \\ExchangeServer\Add-ins and
	is required for the Internet Mail Service to start. When you attempt to access
	this extension, you cannot, and the following secondary error message is
	displayed:
	
	  Not enough server storage is available to process this command.
	
	CAUSE
	=====
	
	When you access shares on a computer running Windows NT Server from a Windows NT
	client and the IRPstackSize parameter is set too low on the server, the error
	message in the "Symptoms" section of this article may be displayed (not enough
	server storage is available to process this command).
	
	RESOLUTION
	==========
	
	For additional information about how to correct the IRPstackSize, or for
	information about a fix that corrects this problem, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q198386 Changes in IRP Stack Size in Lanman Server
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
