---
layout: page
title: "Q115484: Share-level Security Connection Behavior in Windows NT 3.5"
permalink: /kb/115/Q115484/
---

## Q115484: Share-level Security Connection Behavior in Windows NT 3.5

	Article: Q115484
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The network share connection behavior from Windows NT to a share-level security
	network share (typically a Windows for Workgroups computer) has changed from
	version 3.1 to version 3.5 of Windows NT. From a computer running Windows NT
	3.1, sometimes you cannot connect from File Manager with full access to a
	computer running Windows for Workgroups due to the manner in which Windows NT
	handles password verification. Under version 3.5, this behavior has changed so
	that you can always gain full access. You may notice this change because you are
	prompted for your network password more often in Windows NT File Manager.
	
	MORE INFORMATION
	================
	
	Network Connection Behavior Under Windows NT 3.1
	------------------------------------------------
	
	When you attempt to log onto a Windows for Workgroups computer from a Windows NT
	3.1 computer, Windows NT sends your Windows NT user account password by default
	to the Windows for Workgroups computer. If the Windows for Workgroups computer's
	share-level password matches your Windows NT account password, the connection is
	successful.
	
	However, if the network share on the Windows for Workgroups computer is
	configured with a full access password and no Read-Only password, then an
	attempt to connect to the share with any password that does not match the full
	access password succeeds with Read-Only access granted.
	
	If your Windows NT password does not match the share's full access password, you
	cannot connect with full access even if you know the required password. This is
	because File Manager always defaults to sending your Windows NT password when
	attempting to access a network share. If File Manager cannot connect to a share
	with your password it does prompt you for a connection password, but, since a
	Read-Only connection is established, File Manager does not prompt you to enter
	any password. Under this circumstance, the only way you can gain full access to
	this share is by using the NET USE command from Command Prompt.
	
	Network Connection Behavior Under Windows NT 3.5
	------------------------------------------------
	
	When you attempt to log onto a Windows for Workgroups computer from a Windows NT
	3.5 computer, Windows NT sends a special "no password" if it detects share-level
	security. If the share is password-protected, this causes the password
	validation to fail and you are prompted for a connection password. This enables
	you to gain full access to a network share from File Manager, no matter what
	your Windows NT password is or how the network share is configured.
	
	After you have upgraded to Windows NT 3.5, you may notice when connecting to some
	network shares that you used to be able to connect to without specifying a
	password, that you are now prompted for an additional password, even if the
	password you type is the same as your Windows NT password.
	
	Additional query words: wfw wfwg prodnt
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbAudDeveloper kbWinNT310Search kbWinNTW310Search kbWFWSearch kbWFW311
	Version           : 3.5
	
	=============================================================================
	
