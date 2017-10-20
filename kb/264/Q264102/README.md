---
layout: page
title: "Q264102: XADM: Third-Party Backup Programs Do Not Work After ESE Fix"
permalink: /kb/264/Q264102/
---

## Q264102: XADM: Third-Party Backup Programs Do Not Work After ESE Fix

{% raw %}

	Article: Q264102
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you install the Extensible Storage Engine (ESE) fix that is described in
	the following Microsoft Knowledge Base article
	
	  Q254682 XADM: Exchange Server 5.5 Post-SP3 Database Engine Fixes
	
	Cheyenne ARCserve 6.5 and other third-party backup programs may stop responding
	when you back up Exchange Server databases.
	
	CAUSE
	=====
	
	This issue can occur because the Edbbcli.dll file stops some third-party backup
	programs during overlapped input/output (I/O) and attempts to read beyond the
	end of a file.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this issue, replace the Edbbcli.dll file with the Exchange Server
	5.5 Service Pack 3 (version 5.5.2650.17) version of the Edbbcli.dll file until
	the fix that is described in this article is available.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server 5.5. This
	problem was first corrected in Exchange Server 5.5 Service Pack 4.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Component         : JET MDB Backup/Rest
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
