---
layout: page
title: "Q186929: LowercaseFiles Registry Key Has Added Functionality"
permalink: /kb/186/Q186929/
---

## Q186929: LowercaseFiles Registry Key Has Added Functionality

{% raw %}

	Article: Q186929
	Product(s): Internet Information Server
	Version(s): 
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
	
	When using the LowercaseFile registry key as documented in the online product
	documentation, you may find that it does not always display the files in
	lowercase.
	
	CAUSE
	=====
	
	This problem occurs because the LowercaseFiles registry key in
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSFTPSVC\Para
	  meters\LowercaseFiles:REG_DWORD:1
	
	is designed to work on FAT files systems. Microsoft has added the functionality
	to perform this action on all supported files systems.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server version 4.0 This problem was first corrected in Windows NT 4.0 Service
	Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	Additional query words: hot fix qfe
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbiisSearch kbiis400
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
