---
layout: page
title: "Q245653: Errors Opening Messages with Attachments on Terminal Server"
permalink: /kb/245/Q245653/
---

## Q245653: Errors Opening Messages with Attachments on Terminal Server

	Article: Q245653
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open a message with an attachment or you attempt to open an
	attachment, you may receive an error message similar to:
	
	  You do not have appropriate permissions to open.
	
	  Object not found.
	
	You can open messages without attachments with no problem.
	
	CAUSE
	=====
	
	Permissions are improperly set on the %SystemRoot%\Temp folder on the server
	running Terminal Server. Each user needs Read permission on the
	%SystemRoot%\Temp folder and Full Control permission on his or her individual
	Temp folder. The permissions for the individual Temp folders are created by the
	operating system; the folders are located in a subfolder in the
	%SystemRoot%\Temp folder.
	
	RESOLUTION
	==========
	
	To resolve this issue, make sure that the permissions on the %SystemRoot%\Temp
	folder are set to Read for the Everyone group and that the operating system is
	correctly setting Full Control permission for each individual Temp folder.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4,4.0 SP5
	Issue type        : kbprb
	
	=============================================================================
	
