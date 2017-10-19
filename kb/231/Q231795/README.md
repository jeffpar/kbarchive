---
layout: page
title: "Q231795: How to Automatically Close a NetBIOS Session"
permalink: /kb/231/Q231795/
---

## Q231795: How to Automatically Close a NetBIOS Session

	Article: Q231795
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, unused NetBIOS sessions are disconnected after a 15-minute period of
	inactivity. If you need to disconnect a NetBIOS session (such as a drive mapping
	to a network resource) as soon as the program using it quits, you can do so by
	using the method described below. This may be necessary with some programs
	because they measure licensing by counting the connections to the server.
	
	MORE INFORMATION
	================
	
	There is no built-in method in Windows NT to disconnect a drive mapping after a
	program quits. As a workaround, you can start the program from a batch file. The
	batch file maps the appropriate drive letter to the required share. Next, the
	batch file runs the program that uses the shared resource. Finally, the batch
	file disconnects the mapped drive.
	
	For example:
	
	  net use <drive>: \\<computername>\<sharename>
	  <drive>:\<application>.exe
	  net use <drive>: /delete
	
	You may need to use a freeware, shareware, or third-party utility to introduce a
	wait period after the "z:\<application>.exe" line so that the batch file
	continues to run for a few seconds after the program quits. This allows enough
	time for the program to finish closing its connections before the following
	command to disconnect the connection runs.
	
	NOTE: Although the client deletes the drive mapping, the NetBIOS session is not
	ended on the server for an additional 255 seconds.
	
	REFERENCES
	==========
	
	For additional information about NetBIOS session behavior, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q115499 NBT SessionAlive and TCP/IP Session Termination
	
	  Q138365 How the Autodisconnect Works in Windows NT
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
