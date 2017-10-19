---
layout: page
title: "Q255158: Cannot Start WordPad Maximized by Double-Clicking .wri/.doc File"
permalink: /kb/255/Q255158/
---

## Q255158: Cannot Start WordPad Maximized by Double-Clicking .wri/.doc File

	Article: Q255158
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start WordPad (or any other MFC-dependent program) in Windows NT 4.0 by
	double-clicking an associated file type (such as a .doc or .wri file), WordPad
	does not start maximized even if it was maximized when you last quit it.
	However, if you start WordPad by itself (not by double-clicking an associated
	file type), WordPad does start maximized if you last quit it while maximized.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	WordPad is a Microsoft Foundation Class Libraries (MFC) program that uses the
	MFC dynamic-link libraries (DLLs). WordPad does not start maximized on some
	computers when you perform a single operation that both starts WordPad and
	instructs WordPad to load a specified file.
	
	The problem occurs as soon as you install Windows NT, including service packs 1,
	2, 3, 4, 5, 6, and 6a.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
