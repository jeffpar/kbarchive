---
layout: page
title: "Q182439: How to Disable Start&#92;Help"
permalink: kb/182/Q182439/
---

## Q182439: How to Disable Start&#92;Help

	Article: Q182439
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Through the use of policies, much of the desktop can be restricted. However,
	currently there is no way to disable the Start\Help setting through a system
	policy. This article will describe some methods to disable the Start\Help
	utility.
	
	MORE INFORMATION
	================
	
	The file opened by Winhlp32.exe when Start\Help is clicked is
	%SystemRoot%\System32\Windows.hlp. If you rename this file, a dialog box is
	displayed when the file cannot be found, a different dialog box will be
	displayed if you copy an invalid file to that location.
	
	Method 1
	--------
	
	A better resolution is to include a trivial help file. Such a help file is
	included in the Zero Administration Kit files. It is called Zak.hlp. If this
	file is renamed to Windows.hlp in the System32 directory, the following text
	will be displayed when Start\Help is clicked:
	
	  Help Topics: Zero Administration Kit Help
	
	The only topic on which you can get help is "ZAK Help." Double-clicking this
	topic results in the following message:
	
	  Zero Administration Kit Message
	
	  The standard Windows NT 4.0 online Help has been disabled by your
	  administrator.
	
	Method 2
	--------
	
	If the drive the help file is stored on is NTFS, you may also restrict access to
	the file using permissions.
	
	1. Select the file (Windows.hlp) in Explorer.
	
	2. Edit the properties of the file.
	
	3. Select the security tab.
	
	4. Select the permissions button.
	
	5. Set permissions to restrict the users who should not be able to run the help
	  file.
	
	Restricting the help file with permissions may cause user complaints, though.
	When the restricted file is clicked, nothing happens.
	
	REFERENCES
	==========
	
	More information, as well as the Zak.hlp file can be obtained from Microsoft's
	Web Site at the following address:
	
	  http://www.microsoft.com/windows/zak/default.htm
	
	Additional query words: remove start menu
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbhowto
	
	=============================================================================
	
