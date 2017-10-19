---
layout: page
title: "Q245017: How to Redirect an MS-DOS-Based Print Job to a Network Printer."
permalink: /kb/245/Q245017/
---

## Q245017: How to Redirect an MS-DOS-Based Print Job to a Network Printer.

	Article: Q245017
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to print a document from an MS-DOS-based program to a
	printer connected to another workstation on the network. Because MS-DOS-based
	programs support ports LPT1 through LPT3, you can redirect print jobs on port
	LPT2 to the network printer.
	
	MORE INFORMATION
	================
	
	At the command prompt, type the following line
	
	  NET USE LPT2: \\computer name\share name of printer
	
	where computer name is the name of the print server, and share name of printer is
	the name of the printer share.
	
	When you print a document from an MS-DOS-based program to port LPT1, the document
	is printed to the local printer attached to the computer. If you type the
	command 'NET USE LPT2: \\SHOP2\EPSONLQ' and then print a document to port LPT2,
	the document is redirected over the network to the Epson printer attached to the
	SHOP2 server.
	
	NET USE redirections are stored in the registry by user, not by computer.
	Therefore, each user who wants to send documents to a printer attached to
	another workstation on the network needs to issue this command.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
