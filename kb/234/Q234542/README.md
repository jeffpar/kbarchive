---
layout: page
title: "Q234542: SMTP and NNTP Are Updated with New Files by SP5"
permalink: kb/234/Q234542/
---

## Q234542: SMTP and NNTP Are Updated with New Files by SP5

	Article: Q234542
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	There are a number of non-core service pack files (ones not installed by the
	service pack Setup program) that were updated with Windows NT 4.0 Service Pack 5
	(SP5) that are not updated by Windows NT 4.0 Service Pack 4.
	
	CAUSE
	=====
	
	These files were updated to reduce the number of potential system crashes and
	data corruption.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	The latest service pack is also available at the following Internet location:
	
	  http://www.microsoft.com/windows/servicepacks/
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT 4.0 Service Pack 5.
	
	MORE INFORMATION
	================
	
	The following files are installed by SP5 to update Windows NT Option Pack
	(NTOP)- SMTP and News.
	
	- Smtpsvc.dll
	
	- Smtpctrs.dll
	
	- Smtpsnap.dll
	
	- Nntpsvc.dll
	
	- Nntpsnap.dll
	
	- Mboxapi.dll
	
	- Cdonts.dll
	
	The following files are installed by SP5 to update MCIS.
	
	- Imapsnal.dll
	
	- Imapsvc.dll
	
	- Msmtpsnp.dll
	
	- Pop3snap.dll
	
	- Pop3svc.dll
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
