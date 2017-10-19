---
layout: page
title: "Q312576: User Without Shutdown Privileges Can Shut Down the Computer"
permalink: /kb/312/Q312576/
---

## Q312576: User Without Shutdown Privileges Can Shut Down the Computer

	Article: Q312576
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv kbtool kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6a 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After a user that does not have the "Shut Down the System" right runs code on a
	computer, the user might be able to shut down the computer.
	
	CAUSE
	=====
	
	This problem may be caused by a flaw that could allow code to end a user's
	session, even though that user has not been granted the right to shut down the
	system.
	
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
	
	  Date         Time   Version        Size       File name     Platform
	  --------------------------------------------------------------------
	  14-Nov-2001  13:27  4.0.1381.7103    169,744  Gdi32.dll     Intel
	  05-Jul-2001  12:35  4.0.1381.7095    378,640  Kernel32.dll  Intel
	  08-Nov-2001  16:49  3.10.0.103        47,392  User.exe      Intel
	  14-Nov-2001  13:27  4.0.1381.7109    327,440  User32.dll    Intel
	  14-Nov-2001  13:27  4.0.1381.7092     76,048  Userenv.dll   Intel
	  08-Nov-2001  16:48  4.0.1381.7103  1,254,512  Win32k.sys    Intel
	  14-Nov-2001  13:27  4.0.1381.7103    192,784  Winlogon.exe  Intel
	  14-Nov-2001  13:27  4.0.1381.7102    175,888  Winsrv.dll    Intel
	
	  14-Nov-2001  13:23  4.0.1381.7103    305,424  Gdi32.dll     Alpha 
	  20-Mar-2001  22:01  4.0.1381.7095    593,168  Kernel32.dll  Alpha 
	  21-Mar-2001  22:12  3.10.0.103        42,464  User.exe      Alpha
	  14-Nov-2001  13:23  4.0.1381.7109    575,760  User32.dll    Alpha 
	  14-Nov-2001  13:23  4.0.1381.7092    123,664  Userenv.dll   Alpha 
	  08-Nov-2001  16:44  4.0.1381.7103  2,053,552  Win32k.sys    Alpha 
	  14-Nov-2001  13:23  4.0.1381.7103    275,728  Winlogon.exe  Alpha 
	  14-Nov-2001  13:23  4.0.1381.7097    314,128  Winsrv.dll    Alpha 
	
	NOTE: Due to file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServ400sp6 kbNTTermServSearch kbWinNTSEnt400SP6a kbWinNTW400SP6a
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
