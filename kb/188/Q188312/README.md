---
layout: page
title: "Q188312: Lexmark Optra E+ Unprintable Region Is Incorrect"
permalink: kb/188/Q188312/
---

## Q188312: Lexmark Optra E+ Unprintable Region Is Incorrect

	Article: Q188312
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When printing to a Lexmark Optra E+ printer, the printable area may not be
	consistent with the Lexmark specifications for the unprintable region. The
	output results are as follows::
	
	 PAPER SIZE     PORTRAIT                      LANDSCAPE
	 ----------     --------                      ---------
	 Letter         Shifts 1/8" left              Shifts 1/8" up
	 Letter Small   Shifts 1/8" left              Shifts 1/8" up
	 Legal          Shifts 1/8" left              Shifts 1/8" up
	                                              Bottom line does not print
	 Executive      Shifts 1/8" left              Top line shifts 1/8" up
	 A4             Shifts 1/8" left              Shifts 1/8" up
	 A4 Small       Shifts 1/8" left              Shifts 1/8" up
	 A5             Shifts 1/8" left              Shifted 1/8" up
	                                              Left line shifts 1/8" left
	 B5             Bottom line shifts 1/8" down  Top line shifts 1/8" up
	                Left line shifts 1/8" left    Left line shifts 1/8" left
	 Note           Shifts 1/8" left              Shifts 1/8" up
	 Envelope #10   Right line shifts 1/8" left   Right line shifts 1/8" right
	 Envelope C5    Left line shifts 1/8" left    Shifts 1/8" up
	                                              Left line shifts 1/8" left
	 Envelope B5    Shifts 1/8" left              Top line shifts 1/8" up
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: margin margins off print prints
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
