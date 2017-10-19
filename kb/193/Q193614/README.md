---
layout: page
title: "Q193614: Viewing Computer from MMC Causes Access Violation to Occur"
permalink: /kb/193/Q193614/
---

## Q193614: Viewing Computer from MMC Causes Access Violation to Occur

	Article: Q193614
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 04-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Microsoft Management Console (MMC) to view the information of a
	computer that contains more than 256 characters in its DNS name, an access
	violation error occurs.
	
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
	
	MORE INFORMATION
	================
	
	MMC successfully connects to the computer, but when the plus sign next to the
	computer name is clicked in the scope pane of the MMC, the access violation
	occurs.
	
	
	Additional query words: Internet Service Manager ISM crash hang long domain name server computername computer_name machinename machine_name URL Dr. Watson blue screen bluescreen akz
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
