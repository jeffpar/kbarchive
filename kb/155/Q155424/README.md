---
layout: page
title: "Q155424: Windows NT Domain Does Not Accept New Domain Password"
permalink: /kb/155/Q155424/
---

## Q155424: Windows NT Domain Does Not Accept New Domain Password

	Article: Q155424
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to log on to a Windows NT domain with an account whose password
	has expired from a Windows 95-based computer with password synchronization
	enabled, a dialog box appears prompting you to change your password. When you
	enter the old password and then the new password, you receive a message stating
	the password has been changed successfully, and then the following error message
	appears:
	
	  The Domain password you supplied is incorrect, or access to your logon server
	  has been denied.
	
	You must then click OK and enter the new domain password again.
	
	CAUSE
	=====
	
	Once the initial logon request has been serviced by the Windows NT domain
	controller and the password change has taken place, the Windows 95 network
	provider (Msnp32.dll) performs another logon request using the original
	password, not the new one. This can result in accounts being locked out if the
	account lockout policy is enabled.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork win95 kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
