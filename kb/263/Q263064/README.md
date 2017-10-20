---
layout: page
title: "Q263064: XADM: Blackberry Service Stops If Exchange Server Comp. Offline"
permalink: /kb/263/Q263064/
---

## Q263064: XADM: Blackberry Service Stops If Exchange Server Comp. Offline

{% raw %}

	Article: Q263064
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Blackberry pager service can monitor multiple Exchange Server computers for
	new e-mail activity. If one of the monitored Exchange Server computers goes
	offline, the Blackberry pager service may stop responding, or "hang."
	
	CAUSE
	=====
	
	This problem can occur because one thread is waiting for a server response to a
	remote procedure call (RPC). However, a response never comes because the
	Exchange Server computer is offline. In some instances, two other threads are
	blocked because they are waiting for the first thread to finish, and many other
	threads are blocked because they are waiting for a critical section that is held
	by one of the two threads.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server version 5.5 service pack that contains
	this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+----------------------------+
	| File name    | Version     | 
	+----------------------------+
	| Emsmdb32.dll | 5.5.2652.61 | 
	+----------------------------+
	
	
	
	Install this fix on the Blackberry server. The Blackberry server acts as a client
	to the Exchange Server computer. There may be more than one instance of the
	Emsmdb32.dll file on the server, depending on the applications that are
	installed on that server. You need to replace all instances of the Emsmdb32.dll
	file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
