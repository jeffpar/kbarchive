---
layout: page
title: "Q160273: LPR 'o' Option Does Not Work After Applying SP5"
permalink: kb/160/Q160273/
---

## Q160273: LPR 'o' Option Does Not Work After Applying SP5

	Article: Q160273
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Service Pack 5 for Windows NT Server 3.51, the TCP/IP printing
	service no longer interprets the 'o' option correctly. Prior to the release of
	Service Pack 5, a PostScript file sent to the TCP/IP Print Server with the 'o'
	option would properly send an already-formatted-as- PostScript file to the
	printer without formatting the file. After adding SP5, the same command would
	result either in the file printing the PostScript file as text or result in no
	output at all.
	
	RFC 1179 states the following:
	
	  7.24 o - Print PostScript output file
	
	  +---+------+----+
	  | o | file | LF |
	  +---+------+----+
	  Command code - 'o'
	  Operand - File to print
	
	This command prints the data file to be printed, treating the data as standard
	PostScript input.
	
	CAUSE
	=====
	
	Changes in Service Pack 5 disabled the functionality of this option.
	
	RESOLUTION
	==========
	
	The current workaround, if the 'o' option is needed, is to revert back to the
	LPD files prior to Service Pack 5. These files are:
	
	  lpdsvc.dll
	  lprhelp.dll
	  lprmon.dll
	
	If you need the SP5 files for the added functions they offer, the other
	workaround, as specified in
	
	  ARTICLE-ID: Q153666
	  TITLE : Updated TCP/IP Printing Components for Windows NT 3.51
	
	is to use the 'l' option, instead, to send a PostScript file to the TCP/IP Print
	server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: lpd ps
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51
	Issue type        : kbbug
	
	=============================================================================
	
