---
layout: page
title: "Q156964: Windows NT 4.0 Cannot Remove/Reinstall Internet Explorer 2.0"
permalink: /kb/156/Q156964/
---

## Q156964: Windows NT 4.0 Cannot Remove/Reinstall Internet Explorer 2.0

	Article: Q156964
	Product(s): Microsoft Windows NT
	Version(s): 2.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Internet Explorer version 2.0 for Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows NT version 4.0 does not allow for the removal or
	reinstallation of Microsoft Internet Explorer version 2.0.
	
	MORE INFORMATION
	================
	
	If the only problem you have is that you've deleted the Internet Explorer icon
	from the desktop, please see the following article in the Microsoft Knowledge
	Base.
	
	  ARTICLE-ID: Q151723
	  TITLE : How to Re-create Default Icons Deleted from Desktop
	
	If you need to reinstall the program, you can choose one of the following options
	to reinstall Internet Explorer 2.0:
	
	- Right-click the Iexplore.inf file located in the %SystemRoot%\Inf folder, and
	  then click Install.
	
	- Run Windows NT Setup and perform an Upgrade installation over the top of the
	  existing installation.
	
	- Run the Setup for Internet Explorer 2.0 for Windows NT 3.51. This will
	  install it on Windows NT 4.0. You can find a copy of this on the Microsoft
	  FTP server at: ftp://ftp.microsoft.com/msdownload/ie2/winnt/
	
	Replacing the Internet Explorer after it has been removed can also be done by
	going to %systemroot%\inf\iexplorer.inf, right click on the inf and select
	install. It will require the NT Disk but will reinstall just Internet Explorer
	2.0. This will work even if the system has been updated to a 3.x version of
	Internet Explorer and you need access to the World Wide Web to download another
	copy of Internet Explorer.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbIEsearch kbZNotKeyword2 kbIENT400Search kbZNotKeyword3 kbIE200WinNT400
	Version           : :2.0,4.0
	
	=============================================================================
	
