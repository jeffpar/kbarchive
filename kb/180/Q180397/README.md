---
layout: page
title: "Q180397: XFOR: ICS Kill Notifications Not Sent to Administrator"
permalink: /kb/180/Q180397/
---

## Q180397: XFOR: ICS Kill Notifications Not Sent to Administrator

{% raw %}

	Article: Q180397
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Internet Chat Server currently does not properly display visual notification
	that the /kill command was successful. However, the /kill command does operate
	correctly and will properly delete the channel or force the user off the server
	when issued.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Chat Server version
	2.0, included with Microsoft Exchange Server version 5.5. Microsoft is
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When you are logged on to the Microsoft Internet Chat Server (ICS) as an
	administrator, you can use the /kill command from the server console to either
	disconnect users from the server or remove channels.
	
	To verify that the /kill command was successful, the ICS administrator can do the
	following:
	
	1. After you issue a /kill on a user, perform a /whois <nickname>. This
	  should report "No such nick/channel."
	
	2. After you issue a /kill on a channel, perform a /list to verify that the
	  channel no longer exists.
	
	Additional query words: remove kick ban force
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
