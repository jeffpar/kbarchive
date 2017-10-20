---
layout: page
title: "Q194744: Netscape Navigator Stops Responding Over SSL Connection"
permalink: /kb/194/Q194744/
---

## Q194744: Netscape Navigator Stops Responding Over SSL Connection

{% raw %}

	Article: Q194744
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Posting from Netscape Navigator stops responding over a secure connection when
	the Enable Buffering setting in Internet Information Server is enabled.
	
	The Netscape client stops responding if a post request completes and a second
	post request is made on the same connection.
	
	CAUSE
	=====
	
	An extra CR-LF is sent by the Netscape client at the end of the buffered
	request. When using SSL, Internet Information Server attempts to decrypt these
	bytes and fails.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	To work around this problem, disable the Enable Buffering setting under the
	properties for the default Web site in the Home Directory\Application
	Settings\Configuration dialog.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0. This problem was first corrected in Windows NT 4.0 Service Pack 4.0
	and Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	
	Additional query words: post fail stop freeze secure sockets layer https
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
