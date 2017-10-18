---
layout: page
title: "Q221991: Screen Saver Vulnerability Lets User Privileges Be Elevated"
permalink: kb/221/Q221991/
---

## Q221991: Screen Saver Vulnerability Lets User Privileges Be Elevated

	Article: Q221991
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT starts a screen saver in the local system context and then
	immediately changes the context to match that of the logged on user. However,
	Windows NT does not verify that this change completed successfully. If the
	change fails, the screen saver is running in a privileged state that permits a
	specially programmed screen saver to use these privileges to elevate the
	security of the logged on user.
	
	RESOLUTION
	==========
	
	Windows NT 4.0
	--------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	This hotfix has been posted to the following Internet location as Scrnsavi.exe
	(x86) and Scrnsava.exe (Alpha):
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP4/ScrnSav-fix/
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this problem could result in some degree of security
	vulnerability in Windows NT 4.0 and Windows NT Server 4.0, Terminal Server
	Edition. This problem was first corrected in Windows NT version 4.0 Service Pack
	5.
	
	MORE INFORMATION
	================
	
	For more information on this issue, please see the following Microsoft Security
	Bulletin at:
	
	  http://www.microsoft.com/security/bulletins/MS99-008.asp
	
	For additional security related information about Microsoft products, visit the
	Microsoft Security Web site at:
	
	  http://www.microsoft.com/security
	
	Additional query words: 4.00 Patch Available for Windows NT "Screen Saver" Vulnerability
	
	======================================================================
	Keywords          : kbWinNT400sp4fix kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
