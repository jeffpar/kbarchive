---
layout: page
title: "Q112558: PCL.SEP and SYSPRINT.SEP Incorrectly Documented"
permalink: /kb/112/Q112558/
---

## Q112558: PCL.SEP and SYSPRINT.SEP Incorrectly Documented

{% raw %}

	Article: Q112558
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page 192 of the of the Microsoft Windows NT 3.1 "System Guide" or page 213 of
	the Microsoft Windows NT 3.5 "System Guide" describes the separator files that
	are included with Windows NT 3.1. The documentation suggests that PCL.SEP only
	"switches [a] printer to PCL printing." This is not completely correct, PCL.SEP
	also causes a separator page to be printed in front of the print job.
	SYSPRINT.SEP is not mentioned at all in the description under the heading "Using
	Separator Files."
	
	MORE INFORMATION
	================
	
	SYSPRINT.SEP is one of the four separator files installed by default on a
	Windows NT system in the %SYSTEMROOT%\SYSTEM32 directory. The other three files
	are PSLANMAN.SEP, PCL.SEP, and PSCRIPT.SEP. PSCRIPT.SEP functions as the
	documentation states, it does not print a separator page at the beginning of the
	document, but it does switch the printer to PostScript printing. The DEFAULT.SEP
	file mentioned in the documentation on page 192 does not actually exist.
	
	SYSPRINT.SEP is a PostScript-compatible separator file that has virtually the
	same functionality as the PSLANMAN.SEP file. That is, it prints a separator page
	at the beginning of each document. The only real difference between SYSPRINT.SEP
	and PSLANMAN.SEP is that there is some error handling code at the beginning of
	the SYSPRINT.SEP file which is not found in the PSLANMAN.SEP file.
	
	Additional query words: prodnt header footer title sheet
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51
	
	=============================================================================
	

{% endraw %}
