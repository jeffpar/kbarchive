---
layout: page
title: "Q240414: Desktop Link to Local Folder Does Not Work After Installing SP5"
permalink: /kb/240/Q240414/
---

## Q240414: Desktop Link to Local Folder Does Not Work After Installing SP5

{% raw %}

	Article: Q240414
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP5
	Operating System(s): 
	Keyword(s): kbWinNT400sp6afix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP5 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP5 
	- Microsoft Windows NT Workstation version 4.0 SP5 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your computer uses the "NoDrives" policy to hide local drives in Windows NT
	Explorer, but your desktop includes links to folders on hidden local drives to
	provide limited access to local data, you cannot gain access to these local
	folders by using their desktop links after upgrading to Windows NT 4.0 Service
	Pack 5 (SP5).
	
	When you attempt to open such a folder from the desktop, you receive the
	following error message:
	
	  This operation has been canceled due to restrictions in effect on this
	  computer. Please contact your system administrator.
	
	CAUSE
	=====
	
	This behavior was introduced in SP5 by the fix documented in the following
	article in the Microsoft Knowledge Base:
	
	  Q219392 System Drive Cannot be Hidden in Windows NT Explorer View
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT 4.0 and Windows NT Server 4.0, Terminal Server Edition Service Pack
	6a.
	
	MORE INFORMATION
	================
	
	For additional information about how to restrict drive visibility using the
	NoDrives policy, please click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q158457 Defining Local and Remote Drive Visibility Under Windows NT 4.0
	
	Additional query words: cancelled
	
	======================================================================
	Keywords          : kbWinNT400sp6afix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp5 kbWinNTS400sp5 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0,4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
