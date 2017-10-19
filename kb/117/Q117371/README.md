---
layout: page
title: "Q117371: Setting Performance Monitor Alert to Run Program May Not Work"
permalink: /kb/117/Q117371/
---

## Q117371: Setting Performance Monitor Alert to Run Program May Not Work

	Article: Q117371
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you set the Admin Performance Monitor (Perfmon) Alert to run a program on
	alert, it may not work properly or error messages may appear.
	
	CAUSE
	=====
	
	The execute command from Perfmon is also passing the Alert condition to the
	program. This allows users to log the alert information. However, this also
	causes a problem because most applications, such as Notepad, MPlay32, and even
	Perfmon, are not ready for the extra arguments at the end of the command line.
	
	WORKAROUND
	==========
	
	To set up a program to run on alert, put the line in a batch file and insert the
	batch file name in the Run Program On Alert box.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	
