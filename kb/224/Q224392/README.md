---
layout: page
title: "Q224392: Error Message: The System Call Level Is Not Correct"
permalink: /kb/224/Q224392/
---

## Q224392: Error Message: The System Call Level Is Not Correct

	Article: Q224392
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95; winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to send a message using Server Manager to a user logged on to a
	computer running Windows 95 or Windows 98, you may receive the following error
	message:
	
	  The system call level is not correct.
	
	CAUSE
	=====
	
	This behavior occurs because Windows 95 and Windows 98 do not support this type
	of connection.
	
	RESOLUTION
	==========
	
	Use the NET SEND command to send messages from a Windows NT server to users
	logged on to computers running Windows 95 or Windows 98. To receive this type of
	message, the computer running Windows 95 or Windows 98 must be running the
	WinPopup tool. For a computer running Windows NT to receive messages, the
	Messenger service must be running. By default, the Messenger service is
	configured to start automatically.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When you send a message using Server Manager, the sending computer attempts to
	establish a secure connection using Server Side Named Pipes functionality. The
	receiving computer then sends a broadcast of the message to all connected users.
	Computers running Windows 95 and Windows 98 do not support Server Side Named
	Pipes functionality.
	
	The NET SEND command uses Client Side Named Pipes functionality, which is
	supported by Windows 95 and Windows 98.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q137143 WinPopup Utility Not Supported in Windows NT
	
	For information about configuring the WinPopup tool, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q132887 Err Msg: Unable to Start WinPopup Because No Compatible...
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95; winnt:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
