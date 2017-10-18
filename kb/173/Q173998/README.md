---
layout: page
title: "Q173998: Middle East/Thai Windows NT May Print Incorrect Characters"
permalink: kb/173/Q173998/
---

## Q173998: Middle East/Thai Windows NT May Print Incorrect Characters

	Article: Q173998
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbinterop kbprint kbWinNT400sp4fix
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When clients running Middle East or Thai versions of Windows NT use a printer
	connected to a U.S. version of Windows NT Server with "substitute with device
	fonts" enabled, the printed output may display the wrong characters.
	
	For example, when printing lines of pure English text, formatted with the Arial
	font, to a server that had codepage 1252 loaded at the time of driver
	installation, the wrong characters with the right widths may be displayed. It
	looks as if the printer driver has taken the glyph indices and treated them as
	ANSI character codes.
	
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
	
	
	Additional query words: prodnt lpd lpr
	
	======================================================================
	Keywords          : kbinterop kbprint kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
