---
layout: page
title: "Q190443: XADM: Replication Msg. Can't Be Sent If IS Send Limit Reached"
permalink: /kb/190/Q190443/
---

## Q190443: XADM: Replication Msg. Can't Be Sent If IS Send Limit Reached

{% raw %}

	Article: Q190443
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When viewing the storage limit column on mailbox resources for a directory
	replication bridgehead server, you may see the directory service mailbox go into
	a "prohibit send" state.
	
	The following events are also logged in the application event log:
	
	  1102
	  MSExchangeDS
	  Warning
	  Replication
	
	  During intersite replication the directory replication agent (DRA)
	  closed the connection to the mail service in response to error 80004005.
	  Will attempt to connect again later.
	
	-and-
	
	  1079
	  MSexchangeDS
	  Warning
	  Replication
	
	  Intersite replication warning. Couldn't send changes in naming context
	  /o=Organization/ou=Site/cn=Configuration to directory at address
	  EX:/o=Organization/ou=Site2/cn=Configuration/cn+Servers/cn=Server/cn=Mic
	  rosoft DSA
	
	CAUSE
	=====
	
	There is a prohibit send limit configured against the private information store.
	The directory service mailbox has exceeded the limit applied to the private
	information store.
	
	WORKAROUND
	==========
	
	To work around this problem, clear the prohibit send limit on the information
	store of the directory replication bridgehead server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 5.0 and 5.5.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
