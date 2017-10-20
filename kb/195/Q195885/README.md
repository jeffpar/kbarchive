---
layout: page
title: "Q195885: Installing Seagate Backup Exec 7.x on Terminal Server"
permalink: /kb/195/Q195885/
---

## Q195885: Installing Seagate Backup Exec 7.x on Terminal Server

{% raw %}

	Article: Q195885
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The installation of Seagate Backup Exec 7.x updates the JET and DAO files that
	are installed with Terminal Server. Because these files are in use by the
	Terminal Server Licensing Service (Lserver.exe), the service must be stopped to
	allow the update to take place. If the Terminal Server Licensing Service is not
	stopped, the following error occurs during the Backup Exec 7.x installation:
	
	  DAO and Jet Files in Use. The following applications or services are
	  currently using DAO and Jet Files: Lserver.exe. Please close these
	  applications before continuing the installation.
	
	MORE INFORMATION
	================
	
	To disable the Terminal Server Licensing Service, perform the following steps:
	
	1. In Control Panel, double-click Services.
	
	2. Select Terminal Server Licensing, and click stop.
	
	3. Install Seagate Backup Exec.
	
	4. Restart the Terminal Server Licensing service.
	
	Additional query words: licensing
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
