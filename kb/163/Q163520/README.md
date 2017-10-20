---
layout: page
title: "Q163520: Real-Mode Windows 95 Error Connecting to Windows NT"
permalink: /kb/163/Q163520/
---

## Q163520: Real-Mode Windows 95 Error Connecting to Windows NT

{% raw %}

	Article: Q163520
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the NET USE or NET VIEW commands to attempt to establish a session to
	a computer running Windows NT, you may receive the following error from a
	real-mode Windows 95 client:
	
	  Error 58: This operation cannot be performed by the specified server. Make
	  sure that you have specified the correct computer name and command. If the
	  problem persists, contact your network administrator.
	
	If you type NET HELPMSG 58 on a Windows NT computer, you receive the following
	message:
	
	  The specified server cannot perform the requested operation.
	
	CAUSE
	=====
	
	This problem is caused by an expired password on the computer running Windows
	NT. A network trace shows the following error returned by the server:
	
	  SMB: R session setup & X - Server Error, (2242) Password Expired
	     SMB: SMB Status = Server Error, (2242) Password Expired
	        SMB: Error class = Server Error
	        SMB: Server error code = Password Expired
	
	If you type NET HELPMSG 2242 on a Windows NT computer, you receive the following
	message:
	
	  The password of this user has expired.
	
	Therefore, the password has expired. You will not be able to perform any network
	tasks until you change the password.
	
	RESOLUTION
	==========
	
	To resolve this problem, use User Manager to change the password on the Windows
	NT computer.
	
	Additional query words: prodnt usrmgr
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : WINDOWS:3.5 3.51 4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
