---
layout: page
title: "Q145740: How to Start Dial-Up Networking Connection Using Command Line"
permalink: /kb/145/Q145740/
---

## Q145740: How to Start Dial-Up Networking Connection Using Command Line

	Article: Q145740
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): dun win95 kbDialUp
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to start a Dial-Up Networking connection using a
	command line in Windows 95.
	
	MORE INFORMATION
	================
	
	To start a Dial-Up Networking connection using a command line, use the following
	syntax
	
	  rundll rnaui.dll,RnaDial <connectoid>
	
	where <connectoid> is the name of the connection you want to start.
	
	For example, to start a connection named "My Connection," use the following
	command line:
	
	  rundll rnaui.dll,RnaDial My Connection
	
	You can use this command line in an MS-DOS session, or by clicking the Start
	button, clicking Run, and then typing the line in the Open box.
	
	Notes
	-----
	
	- The RnaDial and <connectoid> components of the command line are case
	  sensitive, and the location of spaces and commas is critical.
	
	- Although you can start a Dial-Up Networking connection using a command line,
	  you cannot start the Dial-Up Networking Server using a command line.
	
	======================================================================
	Keywords          : dun win95 kbDialUp 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
