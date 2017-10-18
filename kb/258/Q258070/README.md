---
layout: page
title: "Q258070: NUM LOCK Not Synchronized When Using ALT+TAB in Terminal Server"
permalink: kb/258/Q258070/
---

## Q258070: NUM LOCK Not Synchronized When Using ALT+TAB in Terminal Server

	Article: Q258070
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Server 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows 98 Second Edition 
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The NUM LOCK keyboard indicator may not be synchronized in Windows 95-based or
	Windows 98-based Terminal Server client sessions when using the ALT-TAB key in
	conjunction with the NUMLOCK. For example, you may not be able to type numbers
	on the numeric keypad even though the NUM LOCK light (or indicator) is on.
	
	This problem can occur with all versions of the Terminal Server client in Windows
	95 or Windows 98. The problem does not occur when you are using the Terminal
	Server client in Windows NT.
	
	RESOLUTION
	==========
	
	Windows 95, Windows 98, Windows 98 Second Edition
	-------------------------------------------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information about support costs, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	 Date      Time   Version      Size     File name  Platform
	 ----------------------------------------------------------------
	 03/23/00  00:22  4.10.2225    549,696  User.exe   Windows 98 
	                                                   Second Edition
	 04/07/00  11:06  4.00.953     462,560  User.exe   Windows 95
	 04/07/00  08:37  4.10.0.2000  549,632  User.exe   Windows 98
	
	NOTE: For additional information about installing a fix to resolve this problem,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q277822 Monitor Does Not Return Correctly From Hibernate Mode in
	  Multiple-Monitor Configuration
	
	The preceding fix updates the User.exe program to version 4.10.2230.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information about how to resolve this issue in Windows 2000
	Professional, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q295951 Number Lock Status Is Not Synchronized During Terminal Services
	  Session
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbwin2000ServSearch kbwin2000Search kbNTTermServ400 kbNTTermServSearch kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : :2000,4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
