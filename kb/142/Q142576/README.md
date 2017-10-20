---
layout: page
title: "Q142576: Date Set to Year Later Than 2038 Can Cause Problems"
permalink: /kb/142/Q142576/
---

## Q142576: Date Set to Year Later Than 2038 Can Cause Problems

{% raw %}

	Article: Q142576
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.01,95; winnt:4.0
	Operating System(s): 
	Keyword(s): win95 msiew95
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Internet Explorer versions 3.0, 3.01 for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience either of the following symptoms:
	
	- When you attempt to start Microsoft Exchange or Windows Messaging with the
	  Internet Mail information service included in the current profile, the
	  following error message may be displayed:
	
	  The MAPI Spooler has exited unexpectedly. Close all mail-enabled applications
	  before attempting to log on again.
	
	- When you attempt to use Microsoft Internet Explorer version 3.0 for Windows
	  95 to connect to the Microsoft Find Fast page or another Web page that
	  contains a Java script, the following error message may be displayed:
	
	  An error has occurred in the script on this page. The script has been
	  canceled.
	  Microsoft Jscript runtime error
	
	  If you click OK, Internet Explorer stops responding (hangs).
	
	CAUSE
	=====
	
	This error can occur if the date on your computer is set to a year later than
	2038.
	
	
	RESOLUTION
	==========
	
	Set the date on your computer to the year 2038 or earlier. If Internet Explorer
	has stopped responding, you can close it by pressing CTRL+ALT+DELETE to open the
	Close Program dialog box, clicking Microsoft Internet Explorer in the list of
	programs, and then clicking End Task.
	
	Additional query words: prodnt 3.00 ie3 ie30 msiexplore
	
	======================================================================
	Keywords          : win95 msiew95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbIEsearch kbWin95search kbIE95Search kbZNotKeyword3 kbIE300Win95 kbIE301Win95
	Version           : WINDOWS:3.0,3.01,95; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
