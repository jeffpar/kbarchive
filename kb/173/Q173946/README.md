---
layout: page
title: "Q173946: XFOR: Disabling Support for Pull Newsfeeds"
permalink: /kb/173/Q173946/
---

## Q173946: XFOR: Disabling Support for Pull Newsfeeds

{% raw %}

	Article: Q173946
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	A large number of NNTP pull newsfeeds can create a significant amount of
	overhead on your Microsoft Exchange Server computer. This can slow response
	times for other operations such as servicing NNTP newsreader clients. If you
	have a Microsoft Exchange Server computer configured to support NNTP
	newsreaders, and you would like to disable support for pull newsfeeds, create
	the following DWORD registry value and set its value to 1:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\
	  ParametersSystem\NNTP NewNews Disabled
	
	MORE INFORMATION
	================
	
	This can be useful in cases where your computer is freely accessible on your
	intranet or the Internet, and you do not want people to pull newsfeeds from your
	server.
	
	Additional query words: XADM
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
