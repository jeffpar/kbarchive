---
layout: page
title: "Q224084: How to Remove the Internet Explorer Icon from the Desktop"
permalink: /kb/224/Q224084/
---

## Q224084: How to Remove the Internet Explorer Icon from the Desktop

	Article: Q224084
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbtool kbui
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to remove the Microsoft Internet Explorer icon from
	the desktop of your Windows NT Server 4.0, Terminal Server Edition-based
	computer.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To remove the Internet Explorer icon from the desktop of your Terminal
	Server-based computer, in the Terminal Server console, start Registry Editor,
	delete the following registry key, log off, and then restart your computer:
	
	  HKLM\Software\Microsoft\Windows\CurrentVersion\Explorer\Desktop\Namespace\FBF23B42-E3F0-101B-8488-00AA003E56F8
	
	NOTE: This is the object ID for Internet Explorer, and it should have a default
	value of "The Internet".
	
	You can reverse this procedure by manually adding the key with the default values
	listed back to the original registry location. Also, the object ID remains the
	same.
	
	Note that this is also the only method to remove the icon from any Windows
	NT-based system when the Windows Desktop Update is not installed.
	
	The usual "NoInternetIcon" registry option set either manually or by an Internet
	Explorer Administration Kit (IEAK) 4 or 5 custom corporate installation that can
	remove the icon from the desktop has no effect without the updated shell
	components that are included as part of the Windows Desktop Update. This applies
	to Internet Explorer 4.x, 5, and 5.01.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbtool kbui 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
