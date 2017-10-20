---
layout: page
title: "Q192224: Windows NT Option Pack Update for IIS Available for Download"
permalink: /kb/192/Q192224/
---

## Q192224: Windows NT Option Pack Update for IIS Available for Download

{% raw %}

	Article: Q192224
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT version 4.0 Option Pack 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft has identified problems in the Windows NT Server Option Pack (NTOP)
	version 4.0. Specifically, they impact its built-in integrated Web server,
	Microsoft Internet Information Server (IIS) version 4.0.
	
	The following Internet Information Server version 4.0 Option Pack improvements
	include, but are not limited to:
	
	- The security enhancements discussed in the following articles in the
	  Microsoft Knowledge Base:
	
	  Q188806 : NTFS Alternate Data Stream Name of a File May Return Source
	
	  Q189262 : FTP Passive Mode May Terminate Session
	
	- Support for long file names for access restrictions on a file or a folder
	
	- IIS 4.0 performance on extension mapping
	
	- IIS 4.0 memory performance for mapping log files
	
	- IIS 4.0 performance in mapping unmapped data files if memory configuration is
	  low or stressed
	
	- The fix for the problem discussed in the following article in the Microsoft
	  Knowledge Base:
	
	  Q185349 : Problems Remotely Accessing W3 or FTP Perfmon Counters
	
	WARNING: The Windows NT Option Pack Update for IIS does not provide support for
	Visual InterDev 6.0 ASP server-side script debugging. If you install this
	update, you will not be able to debug ASP pages using the Visual InterDev
	debugger.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For your convenience, the English version of this post-SP3 hotfix has been posted
	to the following Internet location. However, Microsoft recommends that you
	install Windows NT 4.0 Service Pack 4 to correct this problem.
	
	  ftp://ftp.microsoft.com/bussys/IIS/iis-public/fixes/usa/IISUPD/x86/
	  ftp://ftp.microsoft.com/bussys/IIS/iis-public/fixes/usa/IISUPD/Alpha/
	
	The symbol files have been posted to the following Internet locations:
	
	  ftp://ftp.microsoft.com/bussys/IIS/iis-public/fixes/usa/IISUPD/Symbols/x86/
	
	  ftp://ftp.microsoft.com/bussys/IIS/iis-public/fixes/usa/IISUPD/Symbols/Alpha/
	
	NOTE: The above links are one path; they have been wrapped for readability.
	
	HOW TO UNINSTALL THIS FIX
	-------------------------
	
	To remove this package, perform the following steps:
	
	1. Use Windows NT Explorer to go to the folder where IIS is installed (this
	  folder is C:\Winnt\System32\Inetsrv by default).
	
	2. Double-click Rmiisupd.cmd and then follow the instructions on your screen.
	
	This command script restores your IIS files to the versions you had before
	installing the IIS Update. You may be required to reboot your computer when the
	removal is complete.
	
	Additional query words: iisqfeupdate qfeupd iisupd Iis_hotfix.htm
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbiisSearch kbiis400 kbWinNT400OptionPack
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
