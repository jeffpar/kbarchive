---
layout: page
title: "Q324655: FP: Err Msg: Error 1904: Setup Cannot Register...Msador15.dll..."
permalink: kb/324/Q324655/
---

## Q324655: FP: Err Msg: Error 1904: Setup Cannot Register...Msador15.dll...

	Article: Q324655
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbdta
	Last Modified: 27-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 2002 
	- Microsoft FrontPage 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install FrontPage, you may receive an error message similar to
	the following:
	
	  Error 1904: Setup cannot register module c:\program files\common
	  files\system\ado\msador15.dll, msadox.dll, msadomd.dll, msjro.dll,
	  oledb/oledb32.dll, program files\common files\system\oledb\msdaora.dll,
	  ado\msadrah15.dll
	
	CAUSE
	=====
	
	This issue may occur if you have missing, corrupted, or outdated Microsoft Data
	Access Components (MDAC) files.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps to download and install the latest
	version of MDAC:
	
	1. Visit the following Microsoft Web site, and then locate the appropriate MDAC
	  update for your computer:
	
	  Microsoft Universal Data Access - Free Downloads
	  http://www.microsoft.com/data/download.htm
	
	  NOTE: If you are not sure which version to download, use the MDAC Component
	  Checker. This utility scans your system and tells you what version of MDAC is
	  appropriate for your computer. To obtain this utility, visit the following
	  Microsoft Web site:
	
	  MDAC Component Checker
	  http://www.microsoft.com/data/download.htm#CCinfo
	
	2. Follow the instructions on the download page to download the MDAC update file
	  to your computer.
	
	3. Save the file to a familiar location, such as the desktop or the My Documents
	  folder. Make a note of the file name and location.
	
	4. When the download is complete, locate the file that you just downloaded, and
	  then click it to start the update process.
	
	5. When the update is complete, restart your computer.
	
	6. Reinstall Microsoft FrontPage.
	
	MORE INFORMATION
	================
	
	For additional information about how to install the MDAC update, please visit
	the following Microsoft Web site:
	
	  Microsoft Universal Data Access - Installing MDAC Q&A
	  http://www.microsoft.com/data/mdac21info/MDACinstQ.htm
	
	Additional query words: front page prb
	
	======================================================================
	Keywords          : kberrmsg kbdta 
	Technology        : kbFrontPageSearch kbFrontPage2002 kbFrontPage2000Search kbFrontPage2002Search kbZNotKeyword5
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
