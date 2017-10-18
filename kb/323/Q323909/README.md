---
layout: page
title: "Q323909: ANONYMOUS LOGON Print Jobs Appear in Print Queue"
permalink: kb/323/Q323909/
---

## Q323909: ANONYMOUS LOGON Print Jobs Appear in Print Queue

	Article: Q323909
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv kbtool kbui
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Print jobs that are reported by event ID 10 in the System Event log and banner
	pages may indicate that they are owned by ANONYMOUS LOGON. Additionally, if the
	RestrictAnonymous key is set to level 2, and the Everyone group was removed from
	the permissions of the Spool folder, the spooler stops responding (hangs).
	
	Log Entry Example
	-----------------
	
	  Event Type: Information
	  Event Source: Print
	  Event Category: None
	  Event ID: 10
	  User: NT AUTHORITY\ANONYMOUS LOGON
	  Computer: <computer name>
	  Description:
	  Document 1, Test - Notepad owned by ANONYMOUS LOGON was printed on HP LaserJet
	  4Si via port LPT1:. Size in bytes: 818; pages printed: 1
	
	CAUSE
	=====
	
	The Windows NT 4.0 spooler on the client tried to close the remote printer by
	using the SYSTEM account instead of impersonating the user who originally opened
	the printer. The SYSTEM account tried to do this under the following
	conditions:
	
	- When it spooled a GDI print message.
	
	- The local spooler was under load.
	
	- It was necessary to create another RPC connection to the computer.
	
	Under these conditions, a NULL session pipe is created with no credentials.
	
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
	
	The English version of this fix has the following file attributes (or later):
	
	  Date         Time   Version        Size       File name
	  --------------------------------------------------------
	  31 May 2002  17:26  4.0.1381.7165  1,254,608  Win32k.sys
	  31 May 2002  17:28  4.0.1381.7159    327,440  User32.dll
	  31 May 2002  17:28  4.0.1381.7102    175,888  Winsrv.dll
	  31 May 2002  17:28  4.0.1381.7155    169,744  Gdi32.dll
	
	
	
	WORKAROUND
	==========
	
	You do not have to use this workaround if the hotfix is installed on all of the
	clients that are printing to the print server. A client is defined as any
	computer, including servers and workstations, that sends print jobs to a print
	server. However, to prevent the spooler from hanging and continue to
	occasionally print ANONYMOUS LOGON print jobs, you can restore the permissions
	on the Spool folder, or restore the default setting on the RestrictAnonymous
	setting to 0 or 1:
	
	1. View the %SystemRoot%\System32\Spool\Printers folder.
	
	2. Add the Everyone group with Full Control rights.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	  Q143474 Restricting Information Available to Anonymous Logon Users
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNTW400sp5 kbWinNTW400sp3 kbWinNTW400sp1 kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp4 kbWinNTS400sp2 kbWinNTS400search kbWinNTW400sp6 kbWinNTW400SP6a kbWinNTW400 kbWinNT400search kbWinNTW400sp4 kbWinNTW400sp2 kbWinNTS400sp5 kbWinNTS400sp3 kbWinNTS400sp1 kbWinNTS400
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
