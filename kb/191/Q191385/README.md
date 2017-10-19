---
layout: page
title: "Q191385: Duplicate Rules Appear in Secure Channel Account Mappings Advanc"
permalink: /kb/191/Q191385/
---

## Q191385: Duplicate Rules Appear in Secure Channel Account Mappings Advanc

	Article: Q191385
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a wildcard mapping rule is created for certificates, and then deleted, it
	is only deleted from the UI list. Other wildcard mappings created after the
	deletion will appear twice in the list. This may also cause an access violation
	in Inetinfo.
	
	CAUSE
	=====
	
	The delete function only deletes the item from the display list. The function
	called when the Ok button is subsequently pressed resets the entire rule and
	then adds the items back. The problem is that only the first entry in the rule
	is deleted. The remaining items are added back to the list, creating duplicates.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0. This problem was first corrected in Windows NT 4.0 Service Pack 4.0
	and Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	Additional query words: sp hot fix qfe inetinfo.exe
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
