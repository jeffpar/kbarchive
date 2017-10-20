---
layout: page
title: "Q187705: Application Error in CorelWEB.GALLERY"
permalink: /kb/187/Q187705/
---

## Q187705: Application Error in CorelWEB.GALLERY

{% raw %}

	Article: Q187705
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:4.0,4.0a; WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
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
	
	When you double-click a graphic or image (such as .jpg or .gif) in
	CorelWEB.GALLERY version 2.0, the following error messages may occur:
	
	  Gallery2
	  An error has occurred in your application.
	
	  Gallery2 caused a General Protection Fault in module Wgallery.exe at
	  0002:A37B. Choose close. Gallery2 will close.
	
	After you click Close or Ignore, the application may also hang.
	
	If you click Ignore enough times, the application error box appears repeatedly,
	and will eventually launch the application that the file is associated with. For
	example, CorelWEB.GALLERY will eventually open and display the .gif or .jpg file
	in Internet Explorer.
	
	NOTE: CorelWEB.GALLERY is a Windows Explorer-like catalog application that sorts
	image files and displays thumbnail prints of the graphics. Double- click an
	image to open the associated application, such as Internet Explorer.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	After applying this fix, Windows NT must be restarted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	Steps to reproduce the problem:
	
	1. Install CorelWEB.GALLERY version 2.0 from compact disc.
	
	2. Launch WEB.GALLERY.
	
	3. On the File menu, click Open.
	
	4. Navigate to <drive>:\albums, where the gallery files are stored. This
	  directory is on the compact disc.
	
	5. Select and open any gallery file.
	
	6. Double-click any of the books in the right pane of the upper window, and
	  double-click any thumbnail.
	
	The error message may also occur when the file extension is associated with other
	applications such as Apple QuickTime Viewer for Windows.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: corel web gallery webgal webgallery opening book album hung hangs wowexec
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a
	Version           : WINDOWS:4.0,4.0a; WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
