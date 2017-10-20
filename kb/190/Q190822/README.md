---
layout: page
title: "Q190822: XADM: Error During Installation: Account Information Is Incorrec"
permalink: /kb/190/Q190822/
---

## Q190822: XADM: Error During Installation: Account Information Is Incorrec

{% raw %}

	Article: Q190822
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 24-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run the Exchange Server Setup program, you are required to choose a
	Windows NT account that is used as the Exchange Server Service Account. After
	you choose the account, you may receive the following error message:
	
	  Account information is incorrect.
	
	If you are using Exchange Server version 4.0, the following error message is
	displayed:
	
	  No mapping between account names and security Ids was done.
	
	  MS Win NT 0xc0020534
	
	CAUSE
	=====
	
	This error occur because the Windows NT service RPC Configuration has been
	removed or needs to be added.
	
	WORKAROUND
	==========
	
	To resolve this problem, add the RPC Configuration service to the Windows NT
	Server computer on which you are trying to install Exchange Server.
	
	You can add the RPC Configuration service by selecting the Network Icon in
	Control Panel. Click the Services Tab, and then click the Add button. Find and
	select the RPC Configuration service in the Network Service list and click OK.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
