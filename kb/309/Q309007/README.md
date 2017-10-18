---
layout: page
title: "Q309007: HOW TO: Create an FTP Site in Internet Information Manager"
permalink: kb/309/Q309007/
---

## Q309007: HOW TO: Create an FTP Site in Internet Information Manager

	Article: Q309007
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool kbAudITPro kbHOWTOmaster
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Create a FTP Site
	- Troubleshooting
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article describes the process of creating an FTP Site in the
	Internet Information Manager Snap-in that is running on a Windows 2000-based
	server. A member of the administrators group performs all of the procedures.
	
	Create an FTP Site
	------------------
	
	The following procedures start in the Internet Information Manager snap-in.
	
	NOTE: In order for these steps to work, FTP must be installed on your system.
	
	To start the snap-in and create ftp site:
	
	1. Click Start, point to Programs, point to Administrative Tools, and then click
	  Internet Information Manager.
	
	2. In the Internet Information Services snap-in, right click your server object,
	  point to New, and then click FTP Site.
	
	3. When the FTP Site Creation Wizard starts, click Next.
	
	4. On the FTP Site Description page, type your FTP site description in the
	  Description box, and then click Next.
	
	5. On the IP Address and Port Settings page, select the IP address that you are
	  using, type the TCP port you are using (if it is different than the default),
	  and then click Next.
	
	6. On the FTP Site Home Directory page, type the path to your home directory in
	  the Path box, and then click Next.
	
	7. On the FTP Site Access Permissions page, check the desired Read and/or Write
	  permissions, and then click Next.
	
	8. Click Finish, and then verify the creation of your FTP Site in the console
	  tree.
	
	Troubleshooting
	---------------
	
	- If the newly-created FTP Site does not appear in the console tree, click
	  Refresh on the Action menu.
	
	REFERENCES
	==========
	
	  Q308981 HOW TO: Administer IIS 5.0 by Using the Internet Information Manager
	  Snap-In
	
	  Q308995 HOW TO: Create a NNTP Virtual Server in the Internet Information
	  Services Snap-in
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbtool kbAudITPro kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	
