---
layout: page
title: "Q255185: Cannot Access Internet E-Mail in Outlook 98 from Terminal Server"
permalink: kb/255/Q255185/
---

## Q255185: Cannot Access Internet E-Mail in Outlook 98 from Terminal Server

	Article: Q255185
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you use the Add/Remove Programs tool to install Microsoft Outlook 98 on a
	computer running Terminal Server, users who are not members of the Domain Admins
	group cannot access Internet e-mail from Outlook.
	
	RESOLUTION
	==========
	
	To resolve this behavior, modify users' permissions. Follow these steps:
	
	1. Install Outlook 98 while Terminal Server is in Installation mode.
	
	2. Run the Microsoft Office 97 Compatibility Script that comes with Terminal
	  Server.
	
	3. From Windows NT Explorer, assign the Everyone group Change permissions on the
	  %SystemRoot%\System32 folder. Do not apply the permissions to existing files
	  or subfolders.
	
	  WARNING: While this allows users to create the temporary files that Outlook 98
	  needs for Internet e-mail, it may allow a user to modify an existing file in
	  the %SystemRoot%\System32 folder and compromise the security of the Terminal
	  Server computer.
	
	4. Assign the Everyone group Read access to the Gapi32.dll file in the
	  %SystemRoot%\System32 folder.
	
	MORE INFORMATION
	================
	
	To install a program or device in Installation mode, at a command prompt, type
	the following command and press ENTER:
	
	  change user /install
	
	Install the program or device, and then return to the command prompt, type the
	following command, and press ENTER:
	
	  change user /execute
	
	If the program or device installation requires you to restart the server,
	restarting now returns the server to Execution mode.
	
	Execution mode is the standard Terminal Server mode; the server starts in this
	mode when you start the system. In this mode, the system does not operate
	globally. It keeps many concurrent user sessions completely separate from each
	other, including the user at the system console, and every user has a Windows
	and Windows\System folder that no one else uses. If a program requests the
	location of the system root, the system points the program to the user's Windows
	folder rather than to the actual Terminal Server system root.
	
	This is appropriate for program use but not for installation. A program or device
	that you install with Terminal Server in Execution mode works for you but not
	for anyone else. In Installation mode, the system installs a program or device
	for global access, so it works for all users.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
