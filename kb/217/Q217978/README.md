---
layout: page
title: "Q217978: Outgoing and Incoming Values Do Not Refresh as Frequently"
permalink: /kb/217/Q217978/
---

## Q217978: Outgoing and Incoming Values Do Not Refresh as Frequently

{% raw %}

	Article: Q217978
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5
	Operating System(s): 
	Keyword(s): kbtool kbui
	Last Modified: 23-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server version 4.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Manage Electronic Mail console provides a summary of e-mail flow and
	management in a BackOffice Small Business Server-based network. When Microsoft
	Exchange Server is installed on the Small Business Server computer, the Outgoing
	E-mail displays the number of outbound messages awaiting delivery in the
	Internet Mail Service Outbound Queue and the Incoming E-mail displays the number
	of inbound messages awaiting delivery in the Internet Mail Service Inbound
	Queue.
	
	Messages from the Internet are received by the Internet Mail Service. The
	Internet Mail Service processes the messages by delivering mail to the
	appropriate Exchange recipient mailbox. Because the Internet Mail Service
	processes these messages quickly, this value generally reads "0" unless your
	organization receives large quantities of Internet mail.
	
	Messages awaiting delivery to the Internet will appear more often because the
	Internet Mail Service connects on a scheduled basis and this queue reflects
	messages waiting to be delivered externally.
	
	MORE INFORMATION
	================
	
	These values are automatically updated every 15 minutes. To update the values
	manually, press F5, or right-click the page and then click Refresh.
	
	This behavior is modified from previous versions of Small Business Server where
	the page refreshes as frequently as every five seconds.
	
	Additional query words: smallbiz bof 4.50
	
	======================================================================
	Keywords          : kbtool kbui 
	Technology        : kbAudDeveloper kbSBServSearch kbSBServ450
	Version           : winnt:4.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
