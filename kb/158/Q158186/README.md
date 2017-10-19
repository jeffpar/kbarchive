---
layout: page
title: "Q158186: Personal Web Server Does Not Allow FTP Connections"
permalink: /kb/158/Q158186/
---

## Q158186: Personal Web Server Does Not Allow FTP Connections

	Article: Q158186
	Product(s): Internet Information Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): mspwsw95
	Last Modified: 05-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Personal Web Server version 1.0 for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to establish a File Transfer Protocol (FTP) connection to a
	Windows 95-based computer running Microsoft Personal Web Server version 1.0 for
	Windows 95, you may be unable to do so. If you attempt to establish the
	connection using Microsoft Internet Explorer version 3.01 for Windows 95, the
	following error message is displayed:
	
	  Internet Explorer cannot open the Internet site ftp://<site>/.
	
	  The login request was denied.
	
	If you attempt to establish the connection using the FTP tool (Ftp.exe) included
	with Windows 95, the following error message is displayed:
	
	  530 User <username> cannot log in.
	  Login failed.
	
	If you attempt to establish the connection with another Internet browser or FTP
	tool, a similar error message is displayed. Note that this problem occurs even
	though Personal Web Server is configured so that the FTP service is running on
	the computer you are attempting to connect to.
	
	CAUSE
	=====
	
	This problem can occur when the FTP service is configured so that no connections
	are allowed. If the Allow Anonymous Connections check box is cleared and the
	Allow Only Anonymous Connections check box is selected, no connections are
	allowed.
	
	RESOLUTION
	==========
	
	To resolve this issue, configure the FTP service so the appropriate type of
	connection is allowed. To do so, follow the steps in the appropriate section
	below:
	
	To Allow Only Anonymous Connections
	-----------------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Personal Web Server.
	
	3. Click the Administration tab, click Administration, and then click FTP
	  Administration.
	
	4. Click the Allow Anonymous Connections check box to select it and then verify
	  that the Allow Only Anonymous Connections check box is also selected.
	
	To Allow Only Non-Anonymous Connections
	---------------------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Personal Web Server.
	
	3. Click the Administration tab, click Administration, and then click FTP
	  Administration.
	
	4. Verify that the Allow Anonymous Connections check box is cleared and then
	  click the Allow Only Anonymous Connections check box to clear it also.
	
	To Allow Both Anonymous and Non-Anonymous Connections
	-----------------------------------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Personal Web Server.
	
	3. Click the Administration tab, click Administration, and then click FTP
	  Administration.
	
	4. Click the Allow Anonymous Connections check box to select it and then click
	  the Allow Only Anonymous Connections check box to clear it.
	
	MORE INFORMATION
	================
	
	When the Allow Anonymous Connections check box is cleared, Personal Web Server
	does not allow anonymous connections to the FTP server. When the Allow Only
	Anonymous Connections check box is selected, Personal Web Server does not allow
	non-anonymous connections to the FTP server. Therefore, when the Allow Anonymous
	Connections check box is cleared and the Allow Only Anonymous Connections check
	box is selected, Personal Web Server does not allow any connections to the FTP
	server.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          : mspwsw95 
	Technology        : kbPersWebServSearch kbZNotKeyword3 kbPersWebServ100Win95
	Version           : WINDOWS:1.0
	
	=============================================================================
	
