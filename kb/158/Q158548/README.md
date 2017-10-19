---
layout: page
title: "Q158548: Sysdiff Changes Dates on Files It Applies to Windows NT"
permalink: /kb/158/Q158548/
---

## Q158548: Sysdiff Changes Dates on Files It Applies to Windows NT

	Article: Q158548
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbfile kbnetwork kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the sysdiff package is used to apply software to computers running Windows
	NT Server or Workstation, the dates on files that are applied via the package
	are changed from their original date to the current date. This happens whether
	you are doing a sysdiff /apply or a sysdiff /inf.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	Please note that you must rebuild any packages that were built using the previous
	Sysdiff.exe.
	
	This hotfix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/utilities/Sysdiff-fix
	
	NOTE: This version of Sysdiff replaces the version that ships with Service Pack
	3.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	
	MORE INFORMATION
	================
	
	For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q157576
	  TITLE : How to Troubleshoot the Sysdiff Tool in Windows NT
	
	Additional query words: prodnt automated
	
	======================================================================
	Keywords          : kbfile kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
