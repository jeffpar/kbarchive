---
layout: page
title: "Q248127: XCLN: Free and Busy Information Not Updated When Working Offline"
permalink: /kb/248/Q248127/
---

## Q248127: XCLN: Free and Busy Information Not Updated When Working Offline

{% raw %}

	Article: Q248127
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000,97,98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you use Outlook to work offline your public free and busy information is
	not updated to the server when you synchronize your folders.
	
	MORE INFORMATION
	================
	
	Public free and busy updates are client-side operations that are only initiated
	when you work online. When you are logged on to the network your public free and
	busy information is updated at a specified interval; the server has no part in
	this process. The Calendar folder is synchronized when you work offline and
	click Send and Receive or Synchronize. However, free and busy information is not
	updated during either of these processes. The only workaround is to connect
	(on-line mode) to your mailbox and either wait for the specified interval to
	publish free and busy data or just exit and logoff, which forces the client to
	write free and busy data to the server. To update free and busy information on
	the server, you must log on to the network; either connect to a local area
	network (LAN) or initiate a Dial-Up Networking connection before you open
	Outlook.
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q163634 XCLN: Can't Synchronize Microsoft Schedule+ File if Offline
	
	  Q139934 XCLN: The Microsoft Exchange Client and Mobile Users
	
	Additional query words: Schedule+
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:2000,97,98
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
