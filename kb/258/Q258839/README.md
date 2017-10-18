---
layout: page
title: "Q258839: Space at End of Batch File Name Causes Server to Hang"
permalink: kb/258/Q258839/
---

## Q258839: Space at End of Batch File Name Causes Server to Hang

	Article: Q258839
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Cmd.exe from other programs or batch files with another batch
	file as a parameter, the script does not run but appears to be busy if the file
	name is padded with space character.
	
	When you check in Task Manager, you find a large number of instances of Cmd.exe.
	Eventually, you receive error messages caused by insufficient memory, C run-time
	error messages, or DLL initialization error messages.
	
	A sample command line is:
	
	  cmd /c "test.bat "
	
	Note the extra space character before the second quotation mark. The contents of
	Test.bat do not matter.
	
	CAUSE
	=====
	
	Cmd.exe contains a parsing error that results in the behavior described in the
	"Symptoms" section.
	
	RESOLUTION
	==========
	
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
	
	  Date         Time     Size      File name   Platform
	  ----------------------------------------------------
	  04/03/2000   04:45p   357,648   Cmd.exe     Alpha
	  04/03/2000   04:46p   208,144   Cmd.exe     Intel
	
	
	
	WORKAROUND
	==========
	
	To avoid the problem, remove the extra space at the end of the file name.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
