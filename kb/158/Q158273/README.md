---
layout: page
title: "Q158273: WinNT Err: No Drives to Disconnect After RCMD Session"
permalink: /kb/158/Q158273/
---

## Q158273: WinNT Err: No Drives to Disconnect After RCMD Session

	Article: Q158273
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user runs a batch file or is performing a NET USE command with the Remote
	Command Client application (RCMD) to a server running the Remote Command
	service. NET USE initiates a remote connection to a file service on a third
	system.
	
	If the batch command or user does not disconnect the drive created with NET USE
	before RCMD terminates, the connection remains as a resource connection, but is
	not reported in the NET USE command on the RCMD client or the Remote Command
	server. The drive letter is committed and cannot be released or reused.
	
	If a user then uses File Manager (in Windows NT 3.51 and 4.0), Explorer (in
	Windows NT 4.0), or My Computer (in Windows NT 4.0) on the computer running the
	Remote Command Service, they see the drive letter but when they try to delete or
	open it the following messages appear:
	
	In Windows NT 3.51 File Manager:
	
	  No drives to disconnect
	
	In Windows NT 4.0 with X: being the drive letter that was created during NET USE
	from the Remote client in Explorer, File Manager, and My Compute:.
	
	  X:\ is not accessible.
	  Logon failure: unknown user name or bad password.
	
	NOTE: A drive letter will appear on a Windows NT 4.0 computer running the Remote
	Command service, but will not be accessible to the user of that system. If a
	user tries to access it or remove it they will get the error indicated above.
	
	Also, when the connection is made, the drive letter will dynamically appear in
	both Explorer and My Computer. If the connection is deleted, it will dynamically
	disappear from each of these applications. File Manager in Windows NT 4.0 will
	not dynamically add or remove the drive letter. File Manager must be closed and
	restarted for any changes to appear.
	
	CAUSE
	=====
	
	The REMOTE command is carried out in a different user context than that of the
	NET USE command on the computer running the Remote Command service. After the
	REMOTE command session is terminated, the drive designator created by NET USE is
	orphaned with no further relationship to any user or system context.
	
	This is similar to use of the AT scheduling command. Unless the command is
	configured properly, the AT service does not have access to resources because
	the resources were available under another user context.
	
	RESOLUTION
	==========
	
	There are three possible resolutions:
	
	- During the REMOTE command session, make sure to remove (delete) all file
	  resource connections before terminating the session.
	
	  -or-
	
	- Restart the remote client application again, connect to the remote command
	  server, and delete the resource connection. Then close the remote client
	  application.
	
	  -or-
	
	- If the remote command session has already been terminated (and can't be
	  restarted), restart the computer running the Remote Command service and all
	  orphaned connections will be cleared.
	
	MORE INFORMATION
	================
	
	RCMD and the Remote Command service are included with the Microsoft Windows NT
	Resource Kit version 3.5x and Microsoft Windows NT Server Resource Kit version
	4.0.
	
	On Connections To Printer Resources
	-----------------------------------
	
	NET USE commands to print resources do not appear in Print Manager or the
	Printers application (selected by clicking the Start button, pointing to
	Settings, clicking Control Panel, and then clicking Printers) or from a command
	line NET VIEW command on the Windows NT computer running the Remote Command
	service.
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
