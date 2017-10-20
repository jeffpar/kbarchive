---
layout: page
title: "Q260695: XADM: Third-Party Backup Program May Stop Working After Fix"
permalink: /kb/260/Q260695/
---

## Q260695: XADM: Third-Party Backup Program May Stop Working After Fix

{% raw %}

	Article: Q260695
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Third-party backup programs may stop working correctly after you apply the fixes
	that are described in the following Microsoft Knowledge Base article:
	
	  Q254682 XADM: Exchange Server 5.5 Post-SP3 Database Engine Fixes Available
	
	Software that may be affected includes the backup software from Legato. In the
	Legato software, a backup operator may notice that the backup never finishes and
	times out after an extended period of time (possibly several hours).
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this issue, remove the fixes that are described in the following
	Microsoft Knowledge Base article:
	
	  Q254682 XADM: Exchange Server 5.5 Post-SP3 Database Engine Fixes Available
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	
	Additional query words: hang stop networker ese
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Component         : Backup/Rest
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
