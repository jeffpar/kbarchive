---
layout: page
title: "Q158441: Cannot Connect to Dial-Up Networking Server with Local User List"
permalink: /kb/158/Q158441/
---

## Q158441: Cannot Connect to Dial-Up Networking Server with Local User List

	Article: Q158441
	Product(s): Internet Information Server
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): mspwsw95
	Last Modified: 15-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Personal Web Server versions 1.0, 1.0a for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure Personal Web Server to use a local user list for security,
	users may not be able to connect to the Dial-Up Networking server.
	
	CAUSE
	=====
	
	When a local user list is used for security with Personal Web Server, the
	Dial-Up Networking server may be disabled.
	
	RESOLUTION
	==========
	
	To use both Personal Web Server and the Dial-Up Networking server, configure
	Personal Web Server to use share-level or user-level security. To do this, use
	the appropriate method:
	
	Enable Share-Level Security
	---------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Network.
	
	3. On the Configuration tab, click File And Print Sharing.
	
	4. Click the "I want to be able to give others access to my files" check box to
	  select it.
	
	5. Click the "I want to be able to allow others to print to my printer(s)" check
	  box to select it.
	
	6. Click the Access Control tab, and then click the Share-Level Access Control
	  check box to select it.
	
	7. Click OK until all dialog boxes are closed, and then restart your computer.
	
	Enable User-Level Security
	--------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Network.
	
	3. On the Configuration tab, click File And Print Sharing.
	
	4. Click the "I want to be able to give others access to my files" check box to
	  select it.
	
	5. Click the "I want to be able to allow others to print to my printer(s)" check
	  box to select it.
	
	6. Click the Access Control tab, and then click the User-Level Access Control
	  check box to select it.
	
	  NOTE: If you use user-level access control you must also type the name of the
	  Windows NT domain, Windows NT-based computer, or Novell NetWare server used
	  to provide pass-through validation in the "Obtain list of users and groups
	  from" box.
	
	7. Click OK until all dialog boxes are closed, and then restart your computer.
	
	MORE INFORMATION
	================
	
	When the behavior described in this article occurs, you can choose from the list
	of users entered in the local user list in Dial-Up Networking. However, when a
	user dials into the Dial-Up Networking server, the server answers but does not
	establish a connection.
	
	Additional query words: 1.00 1.00a
	
	======================================================================
	Keywords          : mspwsw95 
	Technology        : kbPersWebServSearch kbZNotKeyword3 kbPersWebServ100Win95 kbPersWebServ100aWin95
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
