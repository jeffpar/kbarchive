---
layout: page
title: "Q176212: Service Pack 3 May Render Office Application Fonts Too Large"
permalink: /kb/176/Q176212/
---

## Q176212: Service Pack 3 May Render Office Application Fonts Too Large

	Article: Q176212
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0;Win95
	Operating System(s): 
	Keyword(s): kbdisplay
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	User-written Office applications developed on non-English version platforms (for
	example, Access applications developed under Hebrew Windows 95) render fonts too
	large when run under other language versions of Windows NT 4.0 (for example the
	US English version) after installing Service Pack 3.
	
	The larger text may make dialog boxes and forms unreadable if it causes text to
	wrap within its enclosing static text box.
	
	The same applications run fine on earlier versions of Windows NT 4.0.
	
	CAUSE
	=====
	
	The font mapping algorithm was modified in Windows NT 4.0 Service Pack 3.
	
	This improves font mapping in the majority of cases where an exact font match
	does not occur. However, a side effect of the new algorithm is that it may cause
	fonts for locales other than the operation system locale to be mapped to the
	Arial font.
	
	For example, if an application requests the Hebrew Tahoma font, US English
	Windows NT Service Pack 3 font mapping chooses the US English Arial font,
	whereas earlier versions of Windows NT 4.0 would map the Hebrew Tahoma font to
	US English Tahoma font.
	
	RESOLUTION
	==========
	
	To work around this problem, use one of the following methods:
	
	- Modify all affected text windows, using a version of the development tool
	  that matches the locale of the target operating system (for example US
	  English Access 97).
	
	  -or-
	
	- Install the required fonts from the original development locale onto the
	  target computer (for example Hebrew Tahoma fonts).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0 Service
	Pack 3. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: sp3
	======================================================================
	Keywords          : kbdisplay 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : WinNT:4.0;Win95
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
