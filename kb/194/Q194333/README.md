---
layout: page
title: "Q194333: Event ID 2510: Unable to Map Error Code 1909"
permalink: kb/194/Q194333/
---

## Q194333: Event ID 2510: Unable to Map Error Code 1909

	Article: Q194333
	Product(s): Microsoft Windows NT
	Version(s): Windows:95,98;WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following message may appear in the Event Viewer:
	
	  Event ID: 2510, Source: Server, Type: Error
	  Description: The server service was unable to map error code 1909.
	
	CAUSE
	=====
	
	This problem occurs when the following conditions exist:
	
	- Account lockout policies are in effect.
	
	- A user logging on to a computer running either Windows 95 or Windows 98
	  attempts to change his or her domain password but is unsuccessful because he
	  or she typed the "old password" incorrectly at the Change Password dialog
	  screen.
	
	- The user locks the account by entering a wrong "old password" and clicking OK
	  more times than the number of allotted "bad logon attempts" in the Windows NT
	  domain's account policy.
	
	If all of these items are satisfied, the 2510 error code will appear in the
	System Event Log of the Windows NT domain's primary domain controller.
	
	RESOLUTION
	==========
	
	Enter a correct "old password" when attempting to change passwords from Windows
	95 or Windows 98.
	
	Additional query words: 2510 1909
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : Windows:95,98;WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
