---
layout: page
title: "Q183976: XFOR: 3 KB or Larger Attachments Cause PROFS Connector to Stop"
permalink: /kb/183/Q183976/
---

## Q183976: XFOR: 3 KB or Larger Attachments Cause PROFS Connector to Stop

{% raw %}

	Article: Q183976
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you attempt to send a message containing an attachment that is larger than 3
	KB in size through the Microsoft Exchange PROFS Connector, and the associated
	Microsoft SNA Server connection is configured for a frame size greater than 3
	KB, the Exchange PROFS Connector may stop unexpectedly.
	
	CAUSE
	=====
	
	There is a problem in Microsoft Windows NT Server that causes the SNA Server
	computer to end all existing connections under these conditions. This causes the
	Exchange PROFS Connector to stop unexpectedly.
	
	RESOLUTION
	==========
	
	To work around this problem, use one of the following methods:
	
	- Configure the SNA Server connection so that the frame size is not greater
	  than 3 KB.
	
	- Obtain the appropriate Microsoft Windows NT Server fix. For information about
	  how to do so, please see the following article in the Microsoft Knowledge
	  Base:
	
	  Q175321 SNA Client Sessions Hang Until SNA Server Is Restarted
	
	Additional query words: rscs buffer officevision ov/vm dlc.sys
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
