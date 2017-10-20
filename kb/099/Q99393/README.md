---
layout: page
title: "Q99393: Mac Srv: Serial Number Conflicts and Routing"
permalink: /kb/099/Q99393/
---

## Q99393: Mac Srv: Serial Number Conflicts and Routing

{% raw %}

	Article: Q99393
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	It is possible to see inconsistent routing problems with versions 3.0 and 3.1 of
	Microsoft Mail for AppleTalk Networks. Symptoms for routing problems are the
	following:
	
	- Routing configurations suddenly defaults to "No Connection" in the Mail
	  Network Administrator program.
	
	- User lists disappear from the All listing on one or more servers with no
	  warning.
	
	CAUSE
	=====
	
	Two Microsoft Mail servers at different sites contain identical serial numbers.
	If a duplicate serial number server is inadvertently placed on a routed network,
	the following standard duplicate serial number message will NOT be displayed:
	
	  "There is another copy of this Microsoft Mail Server active on your network.
	  The server on this machine has been stopped."
	
	RESOLUTION
	==========
	
	Use Global Server Report feature from the Mail Network Administrator program to
	verify that all servers have a unique serial number. If two or more servers
	contain the same serial number, all but one must be removed and the existing
	users moved to another server. It is not possible to change the serial number of
	a mail server.
	
	If data from the duplicate server must be maintained, use the Move User feature
	from version 3.1a of the Mail Network Administrator. With version 3.0 of
	Microsoft Mail, it is possible to duplicate user accounts on a second server and
	then forward mail messages to the new account. After all messages have been
	forwarded, the duplicate server can be removed from the network.
	
	After the duplicate server has been removed, routing and user name propagation
	will return to normal.
	
	
	Additional query words: 3.00 3.10 dropped
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
