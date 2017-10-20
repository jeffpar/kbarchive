---
layout: page
title: "Q221434: XADM: &quot;Send As&quot; Functionality Does Not Work When DPA Is Used"
permalink: /kb/221/Q221434/
---

## Q221434: XADM: &quot;Send As&quot; Functionality Does Not Work When DPA Is Used

{% raw %}

	Article: Q221434
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 EXC55SP3Fix
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Distributed Password Authentication (DPA) as the authentication
	method, "SendAs" functionality does not work correctly.
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Assign "SendAs" Permission for User1 to User2.
	
	2. Log on as User2 and make sure you are able to send as User1.
	
	3. Log on as User3 and send message using User1 in the From field. This message
	  will also get delivered.
	
	This problem does not occur when Windows NT LAN Manager (NTLM) is used as the
	authentication method.
	
	CAUSE
	=====
	
	This behavior is caused by a logic error in the code. The main difference
	between Windows NT and Membership security is that with Membership, one Windows
	NT account, the "broker," is mapped to all the Exchange Server mailboxes.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+-------------------------+
	| File name  | Version    | 
	+-------------------------+
	| Gapi32.dll | 5.5.2561.0 | 
	+-------------------------+
	| Mdbmsg.dll | 5.5.2561.0 | 
	+-------------------------+
	| Store.exe  | 5.5.2561.0 | 
	+-------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Exchange Server 5.5 Service Pack 3.
	
	Additional query words: SendAs DPA NTLM Authentication
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2
	Version           : winnt:5.5,5.5 SP1,5.5 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
