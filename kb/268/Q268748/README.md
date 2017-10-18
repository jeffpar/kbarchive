---
layout: page
title: "Q268748: Error Message Appears and Action Menu Is Empty When You Run Outl"
permalink: kb/268/Q268748/
---

## Q268748: Error Message Appears and Action Menu Is Empty When You Run Outl

	Article: Q268748
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Microsoft Outlook 98 on a Terminal Server client, you may
	find that when you have mail in the Inbox, the Action menu is empty. When you
	attempt to open the Public Folders in the Preview pane, the following error
	message may appear:
	
	  The custom form could not be opened.
	
	However, the administrator's Inbox works correctly.
	
	RESOLUTION
	==========
	
	To resolve this behavior, install the programs for Terminal Server in a specific
	order, working from the command prompt.
	
	MORE INFORMATION
	================
	
	By default, Terminal Server runs in Execute mode. Execute mode enables the
	ability to map .ini files to a user's home directory. This allows multiple users
	to run programs independently from the Terminal Server.
	
	Use the change user /install command before you install an application to create
	.ini files for the application in the Terminal Server system directory. These
	files are used as master copies for the user-specific .ini files. After you
	install the application, use the change user /execute command to revert to
	normal .ini file mapping.
	
	Using these commands, do the following to resolve the issues with running Outlook
	98 on Terminal Server:
	
	1. Install Terminal Server 4.0 without Internet Explorer 4.0.
	
	2. At the command prompt, type:
	
	  "change user /install" (without the quotation marks)
	
	3. Install Office 97, run the Office 97 Compatibility Script, and then, at the
	  command prompt, type:
	
	  "change user /execute" (without the quotation marks)
	
	4. Restart the computer.
	
	5. At the command prompt, type:
	
	  "change user /install" (without the quotation marks)
	
	6. Install Internet Explorer 4.0 and then restart the computer.
	
	7. At the command prompt, type:
	
	  "change user /install" (without the quotation marks)
	
	8. Run the Microsoft Internet Explorer 4.0 Compatibility Script, and then, at
	  the command prompt, type:
	
	  "change user /execute" (without the quotation marks)
	
	9. Restart the computer.
	
	10. At the command prompt, type:
	
	  "change user /install" (without the quotation marks)
	
	11. Install the Outlook 98 Deployment Kit, and then run the Office 97
	  Compatibility Script.
	
	12. At the command prompt, type:
	
	  "change user /execute" (without the quotation marks)
	
	13. Restart the computer.
	
	14. Log on to Terminal Server as an administrator, create a new user, and then
	  log off.
	
	15. Log in as the user, and then open Outlook 98.
	
	For additional information on the change command in Terminal Server, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q186504 Terminal Server Commands: CHANGE
	
	For additional information on troubleshooting issues with Terminal Server, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q230654 Troubleshooting Outlook 98 on Windows Terminal Server 4.0
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
