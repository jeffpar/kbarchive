---
layout: page
title: "Q123479: Password Change to NT Server Returns &quot;Password...too short..&quot;"
permalink: /kb/123/Q123479/
---

## Q123479: Password Change to NT Server Returns &quot;Password...too short..&quot;

	Article: Q123479
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): win31 win95
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows for Workgroups 
	- Microsoft Windows 3.1 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to change your Windows NT domain password to a previously used
	password, while logging into a Windows for Workgroups workstation that logs onto
	a Windows NT domain, one of the following error messages appears:
	
	  The password you specified is too short. You must use a longer Password.
	
	-or-
	
	  Unable to change the password for Microsoft Networking because of the
	  following error: The password is shorter than required.
	
	NOTE: This problem can also occur when you connect to a Windows NT 3.5 domain
	controller from the following client computers:
	
	- Microsoft Windows version 3.1 with Microsoft LAN Manager version 2.2b
	
	- Microsoft Windows 95
	
	This problem may also occur when you connect to a Windows NT 3.51 or Windows NT
	4.0 domain controller from the following client computer:
	
	- Microsoft Windows 95
	
	CAUSE
	=====
	
	The Windows NT server, responding as the domain controller, indicates that the
	password is not unique. The Windows for Workgroups workstation does not properly
	interpret the response. This situation occurs when the new password you attempt
	to use duplicates one of your previous passwords.
	
	WORKAROUND
	==========
	
	When the error message noted above appears, use a unique password.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.11. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	If you attempt to change your password at a Windows NT workstation, and your new
	password does not meet the User Manager Account Policy Password Uniqueness
	setting, the following error message appears:
	
	  Your password must be at least <x> characters long. Your new password
	  cannot be the same as any of your previous <y> passwords. Type a
	  password which meets these requirements in both text boxes.
	
	where <x> is the minimum password length and <y> is the number of
	previous password entries checked for password uniqueness.
	
	Additional query words: 3.11 uniqueness prodnt
	
	======================================================================
	Keywords          : win31 win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWin3xSearch kbWin95search kbWFWSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:95; winnt:3.5,3.51,4.0
	
	=============================================================================
	
