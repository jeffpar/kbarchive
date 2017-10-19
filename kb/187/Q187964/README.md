---
layout: page
title: "Q187964: MGI PhotoSuite May Paste Screenshots As Garbage Or an AV Occurs"
permalink: /kb/187/Q187964/
---

## Q187964: MGI PhotoSuite May Paste Screenshots As Garbage Or an AV Occurs

	Article: Q187964
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0,4.0a
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix sbs
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use MGI PhotoSuite versions 8.0 or 8.05 on a computer running Windows
	NT to paste screen shots into a new window, one or more of the following
	symptoms may occur:
	
	- Screenshots do not show up correctly when pasted into a new window.
	
	- 
	
	  An Application Error has occurred.
	
	  Exception: access violation
	
	CAUSE
	=====
	
	In Windows NT, when performing an ALT+PrintScreen to copy something to the
	clipboard while running at 16 bpp (bits per pixel), a 16 bpp DIB (device
	independent bitmap) will be copied to the clipboard. When you paste the image
	into MGI PhotoSuite, it calls GetClipboardData and receives a 16 bpp image as
	the return value but it assumes that the DIB is 24 bpp. Depending on what is in
	memory, this copy can cause the application to generate and error or display the
	new DIB that does not resemble the original DIB because PhotoSuite is attempting
	to interpret 16 bpp data as 24 bpp data.
	
	On Windows 95, pressing ALT+PrintScreen forces a 24 bpp DIB to be copied to the
	clipboard (regardless of the current color resolution), so this problem does not
	happen.
	
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
	
	
	Additional query words: screen resolution garbage dr. watson smallbiz
	
	======================================================================
	Keywords          : kbWinNT400sp4fix sbs 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a
	Version           : WinNT:4.0,4.0a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
