---
layout: page
title: "Q238667: Long Computer Names Truncated in Server Manager"
permalink: /kb/238/Q238667/
---

## Q238667: Long Computer Names Truncated in Server Manager

	Article: Q238667
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you start Server Manager, you may notice that all 15 characters of a
	computer's name are not displayed and that the computer names are truncated.
	
	CAUSE
	=====
	
	This problem occurs because the default system font is proportionally spaced.
	When you use combinations of large individual characters for a computer name,
	some of the characters at the end of the name become truncated.
	
	RESOLUTION
	==========
	
	To resolve this problem, change the font to a non-proportionally spaced font.
	This change is made is on a per-user basis. Also, this font change only affects
	Server Manager.
	
	
	To change the font:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Go to the following location in the registry:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Windows NT\Current
	  version\Network\Server manager
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. Select the value = FontFaceName, and on the Edit menu, click String, and then
	  type fixedsys (or you can use any other non-proportionally spaced font).
	
	4. Quit Registry Editor.
	
	NOTE: Because this change is written into the user's profile, this change only
	affects the current user on the current system. If your network uses roaming
	profiles, this change is downloaded each time a user with administrator
	privileges logs on. To deploy this change to a group of users or a specific user
	when roaming profiles are being used, a .REG file can be created and deployed
	through a logon script. You can also create a custom ADM file for use with
	system policies or System Management Server.
	
	For additional information about creating custom ADM files, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q225087 Writing Custom ADM Files for System Policy Editor
	
	  Q185589 Guide to windows NT 4.0 Profiles and Policies (Part 4 of 6)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0
	
	MORE INFORMATION
	================
	
	Server Manager does not alow the resizing of columns to view the full computer
	name.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
