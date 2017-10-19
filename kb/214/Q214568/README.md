---
layout: page
title: "Q214568: Suppressing the &quot;Domain Controller Cannot Be Reached&quot; Message"
permalink: /kb/214/Q214568/
---

## Q214568: Suppressing the &quot;Domain Controller Cannot Be Reached&quot; Message

	Article: Q214568
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	You may want to suppress the following message:
	
	  A domain controller for your domain could not be contacted. You have been
	  logged on using cached account information. Changes made to your profile
	  since you last logged on may not be available.
	
	MORE INFORMATION
	================
	
	On the client computer, enter the registry value ReportDC to suppress this
	message from users. The Winlogon subkey stores configuration data for the
	Winlogon service that applies to all users of the computer.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Registry path:
	
	  HKEY_CURRENT_USER\Software\Microsoft\WindowsNT\CurrentVersion\Winlogon
	
	  ReportDC   REG_DWORD
	
	  Value      Meaning
	  -----      -------
	  0 -	      The domain controller message is suppressed.
	  1 -	      The domain controller message is not suppressed.
	
	Note that Microsoft Windows 2000 suppresses this dialog box by default (the
	setting is zero).
	
	REFERENCES
	==========
	
	A list of registry value entries and subkeys can be referenced in the Microsoft
	Windows NT Server resource kit under the Regentry.hlp help file.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
