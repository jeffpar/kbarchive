---
layout: page
title: "Q170868: How to Create a Per User FTP Directory Structure"
permalink: /kb/170/Q170868/
---

## Q170868: How to Create a Per User FTP Directory Structure

	Article: Q170868
	Product(s): Internet Information Server
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can allow validated FTP users to logon to their own directories without
	having to change directories.
	
	MORE INFORMATION
	================
	
	When you use FTP under Microsoft Windows NT Server version 4.0 with Internet
	Information Server (IIS), and when you access the FTP site, you go to the
	default FTP directory.
	
	To go to a personal directory upon login without having to change directories, a
	virtual directory alias named with your FTP account name has to be established.
	
	1. Run Internet Service Manager.
	
	2. Select the FTP service.
	
	3. Select Properties from the menu bar. Then select Service Properties... to see
	  the FTP Service Properties for (selected computer) dialog box.
	
	  NOTE: On the Service tab, make sure the Allow Only Anonymous Connections check
	  box is clear (not selected).
	
	4. By default, the user account must have Log On Locally rights.
	
	5. You must have permission to see both the FTP root directory, and the
	  directory you want them to FTP to.
	
	6. Select the Directories tab. Click Add.
	
	7. Click Browse..., and select the directory on the hard drive you would like
	  the user to have access to.
	
	8. Select the Virtual Directory radial button.
	
	9. In the Alias: edit box, type the name of the user. This is the same name the
	  user will use to log onto the FTP server.
	
	  For example: Username: GEORGE Alias: GEORGE
	
	10. Check the appropriate access rights check boxes: "READ" "WRITE".
	
	  NOTE: To allow the user to upload files to this directory, the user must have
	  "WRITE" rights.
	
	11. Click OK.
	
	12. In the FTP Service Properties for (selected computer) dialog box, click
	  Apply. Click OK.
	
	  The user upon logging onto the FTP server with his or her account should now
	  be placed in the virtual directory you created.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q201771 How To Set Up an FTP Site So That Users Log Onto Their Folders
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : :2.0,3.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
