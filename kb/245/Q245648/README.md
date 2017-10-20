---
layout: page
title: "Q245648: Values List from Query Builder Not Always Sorted and Is Limited"
permalink: /kb/245/Q245648/
---

## Q245648: Values List from Query Builder Not Always Sorted and Is Limited

{% raw %}

	Article: Q245648
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbtool kbsms200 kbsms200bug kbsms200preSP3fix kbsms200SP3fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you browse a list of values in the query builder criteria section of the
	Microsoft Management Console (MMC) Systems Management Server (SMS) Administrator
	Console snap-in, the Values list may not appear in a sorted alpha-numeric order,
	making it difficult to locate desired values. Also, only a maximum of 2000
	records are listed.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	SMS 2.0 Service Pack 1:
	
	The English-language version of this fix that can be applied to a site or
	administrator console running SMS 2.0 Service Pack 1 should have the following
	file attributes:
	
	  Date      Time     Version         Size       File name   Platform
	  ------------------------------------------------------------------
	  3/29/2000 20:00:46 2.00.1380.1147   534,528  Mmcbasui.dll  Intel
	  3/29/2000 20:00:46 2.00.1380.1147   997,888  Mmcbasui.dll  Alpha
	
	SMS 2.0 Service Pack 2:
	
	The English-language version of this fix that can be applied to a site or
	administrator console running SMS 2.0 Service Pack 2 should have the following
	file attributes:
	
	  Date       Time    Version          Size     File name     Platform
	  -------------------------------------------------------------------
	  6/10/2000  3:55:00 2.00.1493.2112   534,528  Mmcbasui.dll  Intel
	  6/10/2000  3:55:00 2.0.1493.2112    998,672  Mmcbasui.dll  Alpha
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	To override the 2000 value limit, the fix uses a new registry value:
	
	  HKEY_LOCAL_MACHINE/Software/Microsoft/SMS/AdminUI/QueryBuilder/ValueLimit
	
	The ValueLimit value is a DWORD value. If it does not exist, the default limit of
	2000 is used; this is consistent with current functionality. If it has a zero
	value, there is no value limitation and all possible values are returned.
	
	When you add the key, do not enter anything for Class (leave it blank). Name the
	key QueryBuilder, click OK, add a new REG_DWORD value named ValueLimit, and then
	click OK. When you are prompted to provide a value, type 0 as the value.
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 3.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtool kbsms200 kbsms200bug kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
