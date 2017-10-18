---
layout: page
title: "Q191689: Incorrect Font Characteristics May Be Used on Imported Graphics"
permalink: kb/191/Q191689/
---

## Q191689: Incorrect Font Characteristics May Be Used on Imported Graphics

	Article: Q191689
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Text information stored with imported graphics may be displayed using an
	incorrect font, size, or orientation. This problem may occur in both 16-bit and
	32-bit Windows-based applications.
	
	CAUSE
	=====
	
	Graphics files stored in various formats such as Computer Graphics Metafile
	(CGM), JPEG, Windows Bitmap (BMP), and others store information describing the
	graphic and all information related to any text the graphic file contains. The
	text information includes descriptors for style, width, and color. The text may
	be displayed incorrectly if one of the descriptors is invalid. For instance, a
	word-processing document with an embedded line chart that contains rotated text
	may display the text without rotation.
	
	
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
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
