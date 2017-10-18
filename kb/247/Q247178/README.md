---
layout: page
title: "Q247178: Programs May Hang When Accessing Files from a File Server"
permalink: kb/247/Q247178/
---

## Q247178: Programs May Hang When Accessing Files from a File Server

	Article: Q247178
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Programs (such as Microsoft Internet Information Server) may stop responding
	(hang) while they are attempting to gain access to files on a remote server.
	
	CAUSE
	=====
	
	The Windows NT Redirector (Rdr.sys) may hang threads while trying to close a
	file because of a problem in the cache manager. These threads wait for an event
	that never happens.
	
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
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date       Time    Size        File name      Platform
	  ------------------------------------------------------
	  11/18/99   7:16p     952,896   Ntkrnlmp.exe   Intel
	  11/18/99   7:14p     932,736   Ntoskrnl.exe   Intel
	  11/18/99   7:13p   1,403,968   Ntkrnlmp.exe   Alpha
	  11/18/99   7:13p   1,375,744   Ntoskrnl.exe   Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400search kbWinNTW400sp6 kbWinNTW400SP6a
	Version           : :4.0 SP5,4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
