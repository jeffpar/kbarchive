---
layout: page
title: "Q154809: Error Changing Password with Multiple Network User Names"
permalink: kb/154/Q154809/
---

## Q154809: Error Changing Password with Multiple Network User Names

	Article: Q154809
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to change a network password using the Passwords tool in Control
	Panel, you may receive an error message similar to one of the following
	messages:
	
	- Unable to change the password for Microsoft Networking because of the
	  following error: The username cannot be found
	
	- Unable to change the password for Microsoft Networking because of the
	  following error: Incorrect password
	
	CAUSE
	=====
	
	This error can occur if you have multiple network clients installed and you are
	logged on using a different user name for each client. For example, this error
	occurs if you use one user name for the Client for Microsoft Networks and
	another user name for the Client for NetWare networks.
	
	RESOLUTION
	==========
	
	To work around this behavior, use either of the following methods:
	
	- Use the same user name for all network clients.
	
	- Use the appropriate command-line tool to change your password. For a
	  Microsoft Network password, use the NET PASSWORD command. For a Novell
	  NetWare Network password, use the SETPASS command.
	
	  The NET PASSWORD command works in MS-DOS mode. To make the NET PASSWORD
	  command work in an MS-DOS session within Windows 95, follow these steps:
	
	  1. Use the right mouse button to click the MS-DOS Prompt icon, and then click
	     Properties.
	
	  2. Click the Program tab, and then click Advanced.
	
	  3. Click the "Prevent MS-DOS-based programs from detecting Windows" check box
	     to select it.
	
	  4. Click OK.
	
	  5. Restart the computer.
	
	     If you do not follow these steps and you try to use the NET PASSWORD
	     command in an MS-DOS session within Windows 95, you receive the following
	     error message:
	
	  Error 3547: You cannot do this from within an MS-DOS window
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Windows 95 does not provide for changing passwords using the Passwords tool in
	Control Panel when multiple user names are used.
	
	For additional information about issues with multiple network user names, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q130797 Cannot Specify Different Default Logon Name for Second Client
	
	======================================================================
	Keywords          : kberrmsg kbnetwork win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
