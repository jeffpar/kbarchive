---
layout: page
title: "Q252829: Warning Message When Gaining Access to Windows Update Web Site"
permalink: kb/252/Q252829/
---

## Q252829: Warning Message When Gaining Access to Windows Update Web Site

	Article: Q252829
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv win95 win98 win98se
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	- Microsoft Windows 95 
	- Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to gain access to the Windows Update Web site, you may receive
	the following warning message:
	
	  Security Warning
	
	  Do you want to install and run "C:\Program Files\WindowsUpdate\ident.cab"?
	
	  The publisher cannot be determined due to the problems below:
	
	  The Trust Provider is unknown or not configured properly.
	
	If you click No, the download operation quits. If you click Yes, the installation
	proceeds normally.
	
	CAUSE
	=====
	
	This behavior occurs because the Imagehlp.dll file is damaged or missing.
	
	RESOLUTION
	==========
	
	To resolve this issue, replace the Imagehlp.dll file with a new version using
	the appropriate steps for your operating system.
	
	NOTE: You must put the Imagehlp.dll file in the C:\Windows\System folder for
	Microsoft Windows 95 or Microsoft Windows 98, or in the C:\Winnt\System32 folder
	for Microsoft Windows NT.
	
	Windows 95
	----------
	
	Copy the Imagehlp.dll file from another computer running Windows 95 computer with
	the same version of Microsoft Internet Explorer, or extract a new Imagehlp.dll
	file from the Internet Explorer download .cab files. For additional information
	about extracting original files, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	Windows 98
	----------
	
	Use the System File Checker to extract the Imagehlp.dll file from the original
	Windows 98 disks, or from the Internet Explorer installation files if a newer
	version is installed. For additional information about using the System File
	Checker tool, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	Windows NT
	----------
	
	Copy the Imagehlp.dll file from another computer running Windows NT with the same
	version of Internet Explorer, or extract a new file from the Internet Explorer
	download .cab files. For additional information about extracting original files,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	Additional query words: abort aborts certificates
	
	======================================================================
	Keywords          : kbenv win95 win98 win98se 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinMEsearch kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWinME kbWin98SE
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
