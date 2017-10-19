---
layout: page
title: "Q194918: XCOPY /D Uses Universal Time, Not Local Time, to Filter Files"
permalink: /kb/194/Q194918/
---

## Q194918: XCOPY /D Uses Universal Time, Not Local Time, to Filter Files

	Article: Q194918
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The /D option of the XCOPY command does not specify local time. Instead, XCOPY
	/D copies all files created GMT 12:00 A.M. or later on the date specified. XCOPY
	/D: does not convert the entered date from local time to universal time before
	doing the copy.
	
	For example, if the system is set for PDT (-7) and the following files exist in
	the Test folder
	
	  TEST1.TMP  07/27/98  04:02p
	  TEST2.TMP  07/27/98  05:02p
	  TEST3.TMP  07/28/98  12:01a
	  TEST4.TMP  07/28/98  12:02a
	
	and the following command is entered
	
	  xcopy *.tmp d:\test\*.* /D:07-28-98
	
	the following files are copied:
	
	  TEST2.TMP  07/27/98  05:02p
	  TEST3.TMP  07/28/98  12:01a
	  TEST4.TMP  07/28/98  12:02a
	
	CAUSE
	=====
	
	XCOPY compares the date provided in the /D switch against the file date to
	determine which files to copy. In Windows NT, the file date is stored in
	Universal Time (GMT).
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was first corrected in Windows NT 4.0 Service Pack 5.
	
	Additional query words: 4.00
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
