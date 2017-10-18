---
layout: page
title: "Q174229: Control Panel Date/Time Tool Changes the Date"
permalink: kb/174/Q174229/
---

## Q174229: Control Panel Date/Time Tool Changes the Date

	Article: Q174229
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95 win98
	Last Modified: 01-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you change the date in the Date/Time tool in Control Panel, the change is
	effective without having to click Apply or OK. This can cause problems for
	programs that record or use the date for logging purposes.
	
	CAUSE
	=====
	
	Changes to the Date/Time tool in Control Panel are effective immediately for
	date operations.
	
	RESOLUTION
	==========
	
	To work around this behavior, it is recommended that you synchronize your date
	with a computer on your network. To do this, type the following command at the
	command prompt, and then press ENTER:
	
	net time [\\computername | /domain[:domainname]] [/set]
	
	Alternatively, make sure that any services that record data along with date
	information are paused or stopped while the date is changed.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	For additional information about this issue on Windows NT, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q194078 System Date Reflects Changes Immediately
	
	Additional query words: cpanel
	
	======================================================================
	Keywords          : win95 win98 
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95
	Hardware          : ALPHA PPC x86
	Issue type        : kbbug
	
	=============================================================================
	
