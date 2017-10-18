---
layout: page
title: "Q136300: Event ID 12053 or 12054 Caused by Macintosh Client Disconnect"
permalink: kb/136/Q136300/
---

## Q136300: Event ID 12053 or 12054 Caused by Macintosh Client Disconnect

	Article: Q136300
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error may appear in Event Viewer when you use Services for
	Macintosh (SFM) on a Windows NT Server:
	
	  Event ID: 12053 or 12054 or 12061 Session from user "USERNAME" was timed out
	  and disconnected by the server. The AppleTalk address of the Macintosh
	  workstation is in the data.
	
	CAUSE
	=====
	
	The server generates the error when it has lost the connection with the
	Macintosh client. The error may occur for any of the following reasons:
	
	- The Macintosh client has a file open on the computer running Windows NT
	  Server and the server is restarted, or the Macintosh client is restarted,
	  while the file is open.
	
	- The Macintosh client has a connection to the computer running Windows NT
	  Server (no files open) and the server is restarted, or the Macintosh client
	  is restarted.
	
	- When the network connection between the Macintosh client and the computer
	  running Windows NT Server is broken because of possible network problems.
	
	- The Macintosh client receives a system error, such as a Type 1 or Type 11
	  error, which forces the client to restart.
	
	
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a text file on a Windows NT Server and place it in a directory shared
	  as a Macintosh volume.
	
	2. Open the file from a Macintosh client in Word for Macintosh.
	
	3. Reset the Macintosh client while the file is open in Word.
	
	4. Open Event Viewer on the Windows NT Server. It will have generated an Event
	  ID 12053 or 12054.
	
	WORKAROUND
	==========
	
	To avoid this problem, make sure you close all files and connections to the
	computer running Windows NT Server before you shutdown your Macintosh client.
	
	Additional query words: sfm mac apple macsrv
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
