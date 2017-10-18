---
layout: page
title: "Q306026: Lsass.exe Uses Excessive CPU Time After SFU User Password Change"
permalink: kb/306/Q306026/
---

## Q306026: Lsass.exe Uses Excessive CPU Time After SFU User Password Change

	Article: Q306026
	Product(s): Microsoft Windows NT
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbtoolkbfixlist
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Changing a password for a user account for a Services for UNIX (SFU) user may
	cause CPU usage for the Local Security Authority Server service (LSASS) to go to
	98 percent for some time. You can see the CPU usage for this process on the
	Processes tab in Windows Task Manager.
	
	
	CAUSE
	=====
	
	This issue occurs because the Network Information service (NIS) process
	(Nissvc.exe) makes many Lightweight Directory Access Protocol (LDAP) requests to
	rebuild the UNIX files in the following folder:
	
	  %Homedrive%\SFU\Nis\MapCache\<Domainname>
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to systems
	that are experiencing this specific problem.
	
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
	
	  Date         Time   Version         Size     File name
	  ---------------------------------------------------------
	  06-Aug-2001  12:54  5.3000.1314.4    81,920  Nisprop.dll
	  20-Sep-2001  07:04  5.3000.1314.11  138,240  Nissvc.exe
	  16-Aug-2001  08:15  5.3000.1314.11   89,600  Pswdsync.dll
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words: slow
	
	======================================================================
	Keywords          : kbtool kbfixlist
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
