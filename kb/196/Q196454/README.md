---
layout: page
title: "Q196454: FIX: Application Error in Windows NT With Access 97"
permalink: kb/196/Q196454/
---

## Q196454: FIX: Application Error in Windows NT With Access 97

	Article: Q196454
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive an access violation in Msaccess.exe. This problem can be reproduced
	with an .mdb file using Access forms with many bitmaps.
	
	CAUSE
	=====
	
	Access 97 displays various resources, such as button, static text, an so on,
	with the forms as meta file and then it uses PlayMetaFileRecord() of Gdi32.dll.
	The application error always occurs at the LOGFONT32FROMLOGFONT16 macro in
	PlayMetaFileRecord(). This problem is not reproducible in Windows 95 because
	Windows 95 only copies the length of a font face name into lfFaceName[] of
	LOGFONT struc from LOGFONT16 struc; it never copies 32 bytes(LF_FACESIZE).
	
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
	
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
