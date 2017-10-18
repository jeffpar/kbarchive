---
layout: page
title: "Q325086: Windows NT 4.0 Roaming Profiles May Not Be Saved to the Server"
permalink: kb/325/Q325086/
---

## Q325086: Windows NT 4.0 Roaming Profiles May Not Be Saved to the Server

	Article: Q325086
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbWinNT400nospFix
	Last Modified: 30-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under Windows NT 4.0, if you make a connection to a network printer, your
	roaming profile may not be saved back to the server when you log off. This
	problem typically occurs when common desktop settings (such as icons) are also
	used. When this problem occurs, you are prompted during a later logon attempt
	with a message that indicates that the local profile is newer than the roaming
	profile.
	
	CAUSE
	=====
	
	Print Job Monitor keeps a handle to Shell32.dll open, which in turn keeps a
	handle to HKEY_CURRENT_USER open. This registry handle is not released until
	Csrss.exe exits during the logoff process. This can cause a problem because the
	handle may be released too late in the logoff cycle, preventing the user's
	profile from being unloaded.
	
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
	
	The English version of this fix has the file attributes (or later) that are
	listed in the following table. The dates and times for these files are listed in
	coordinated universal time (UTC). When you view the file information, it is
	converted to local time. To find the difference between UTC and local time, use
	the Time Zone tab in the Date and Time tool in Control Panel.
	
	  Date        Time   Version        Size   File name
	  -----------------------------------------------------
	  9-Jul-2002  11:35  4.0.1381.7177  96528  Winspool.drv
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information about a similar issue that is related to the
	Telephony service, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q241572 Roaming Profile May Not Be Saved to the Server
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400nospFix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServSearch kbWinNTW400SP6a
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
