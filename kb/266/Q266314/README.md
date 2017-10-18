---
layout: page
title: "Q266314: OS/2 Programs May Not Work When Calling DosCreateCSAlias()"
permalink: kb/266/Q266314/
---

## Q266314: OS/2 Programs May Not Work When Calling DosCreateCSAlias()

	Article: Q266314
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Multiple-threaded OS/2-based programs that call the DosCreateCSAlias function
	may occasionally not succeed and may generate a general protection (GP) fault.
	When this occurs, you receive an error message stating "An OS/2 program caused a
	protection violation" with a hexadecimal register list. The error message also
	states "The program will be terminated," with the name of the program in the
	title bar.
	
	All other OS/2-based programs that are running are halted until you click OK to
	quit the program that stopped working.
	
	CAUSE
	=====
	
	DosCreateCSAlias takes a data segment selector as input and creates an aliased
	code segment selector for that data segment.
	
	There is a very small time window in the code for DosCreateCSAlias in which the
	data segment could become unmapped and inaccessible. If another thread in the
	program tries to touch the data segment during this time window, that thread
	does not succeed and generates an access violation.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time   Size     File name  Platform
	  ---------------------------------------------
	  24/06/00  01:28  443,664  Os2.exe    Intel
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
