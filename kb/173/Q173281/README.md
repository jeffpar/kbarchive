---
layout: page
title: "Q173281: How to Reset Permissions for FrontPage 97"
permalink: /kb/173/Q173281/
---

## Q173281: How to Reset Permissions for FrontPage 97

{% raw %}

	Article: Q173281
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to reset permissions and remove the FrontPage 97
	Server Extensions on a Windows NT server.
	
	MORE INFORMATION
	================
	
	To reset the permissions and remove the FrontPage 97 Server Extensions on a
	Windows NT server, follow these steps:
	
	1. Change NTFS Permissions
	
	  a. Run the FrontPage Server Administrator and uninstall the FrontPage Server
	     Extensions.
	
	     1. On the Windows Start menu, click Run.
	
	     2. In the Open box, type "C:\Program Files\Microsoft
	        FrontPage\bin\fpsrvwin" (with the quotation marks) and click OK.
	
	        NOTE: If you installed FrontPage to a folder other than the default,
	        change the path to reflect the correct folder.
	
	     3. In the Select Port Number box, click the port whose extensions you want
	        to uninstall. Click Uninstall.
	
	     4. Repeat step 3 for each port whose extensions you want to uninstall.
	
	     5. Click Close.
	
	  b. Use the Microsoft Internet Service Manager (ISM) to delete folders that
	     contain _vti_* in the path. To do this, follow these steps:
	
	     1. On the Windows Start menu, point to Programs, point to "Microsoft
	        Internet Server (Common)," and then click Internet Service Manager.
	
	        You will see the following information:
	
	  Computer     Service     State     Comments
	  -------------------------------------------
	  User1        WWW         Running
	  User1        Gopher      Stopped
	  User1        FTP         Running
	       
	
	     2. Double-click the server whose Service is WWW.
	
	     3. Click the Directories tab.
	
	     4. Select the first directory that contains "_vti_" and click Remove.
	
	     5. Repeat step 4 for each directory that contains "_vti_."
	
	     6. Click Apply.
	
	  c. As the Administrator, take ownership of all files and folders in the
	     content directory.
	
	     1. Determine the document root. In the following table, the entry whose
	        alias is <Home> is the document root.
	
	  Directory              Alias     Address     Error
	  --------------------------------------------------
	  c:\inetsrv\wwwroot     <Home>
	  c:\inetsrv\scripts     /Scripts
	      
	
	     2. Click Close.
	
	2. Take ownership of the files and folders in the document root.
	
	  a. On the Windows Start menu, point to Programs, and then click Windows NT
	     Explorer.
	
	  b. Right-click the folder and then click Properties on the menu that appears.
	
	  c. Click the Security tab.
	
	  d. Click Take Ownership.
	
	  e. Click to select the "Replace Permissions on Subdirectories" and "Replace
	     Permissions on Existing Files" check boxes.
	
	  f. Click OK.
	
	3. Remove existing permissions for the content directory and files and then
	  apply the appropriate permissions, using these steps:
	
	  a. Right-click the <foldername> folder and then click Properties.
	
	  b. Click the Security tab.
	
	  c. Click Permissions.
	
	  d. Click the first entry and then click Remove.
	
	  e. Repeat step 4 for each additional <entry> you want to remove.
	
	  f. Click Add.
	
	  g. Select the first user for whom you want to set permissions. Click Add.
	
	  h. In the Type of Access list, click the permission access you want to grant.
	     For example, in the User list, click Administrator. In the Type of Access
	     list, click Full Control (All).
	
	     Set the following permissions for the content directory and files
	
	  User             Permission
	  ---------------------------
	  Administrators   Full Control (All)
	  System           Full Control (All)
	     
	
	  i. Click to select the "Replace Permissions on Subdirectories" and "Replace
	     Permissions on Existing Files" check boxes.
	
	  j. Click OK.
	
	4. Stop and restart the WWW services in ISM.
	
	  a. On the Windows Start menu, point to Programs, point to Microsoft Internet
	     Server (Common), and then click Internet Service Manager.
	
	  b. Select the service you want to stop.
	
	  c. On the Properties menu, click Stop Service.
	
	  d. Repeat steps b and c for each service (http, ftp and gopher) you want to
	     stop.
	
	  e. Restart each service by clicking the service and then clicking Start
	     Service on the Properties menu.
	
	5. Run the FrontPage Server Administrator and install the FrontPage Server
	  Extensions.
	
	  a. On the Windows Start menu, click Run.
	
	  b. In the Open box, type "C:\Program Files\Microsoft FrontPage\bin\fpsrvwin"
	     (with the quotation marks) and click OK.
	
	     NOTE: If you installed FrontPage to a folder other than the default, change
	     the path to reflect the correct folder.
	
	  c. The Select Port box is blank.
	
	  d. Click Install.
	
	  e. Click Microsoft Internet Information Server.
	
	  f. In the Select Port box, enter the port number you want to use. In the
	     Multi-hosting box, enter the IP address for the server. Click OK.
	
	  g. In the Confirmation Dialog dialog box, confirm that your settings are
	     correct and then click OK.
	
	  h. Click Close.
	
	6. Changing Root Web Permissions in FrontPage 97
	
	  After you have completed the above steps, open the root web for each virtual
	  server and set the Permissions for users and groups that need access to the
	  web.
	
	  NOTES:
	
	   - Typically, the users you want to develop content in your web will be
	     listed on the Users tab in the Permissions dialog box.
	
	   - You may need to remove groups, such as Interactive, System, and Everyone
	     if they are listed on the Groups tab in the Permissions dialog box.
	
	  To set permissions for the Root Web, follow these steps:
	
	  a. Start FrontPage Explorer.
	
	  b. In the Getting Started with Microsoft FrontPage dialog box, click "Open
	     existing FrontPage web."
	
	  c. Click OK.
	
	  d. In the Web Server or File Location box, type or select the web server you
	     want to access.
	
	  e. Click List Webs.
	
	  f. In the FrontPage Webs box, click <Root Web> and then click OK.
	
	  g. If you are prompted to enter your name and password, enter the name and
	     password you used in step x above.
	
	  h. On the Tools menu, click Permissions and then click the Users tab.
	
	  i. Click the Add or Remove button to add or remove a user.
	
	  j. Click the Groups tab.
	
	  k. Click the Add or Remove button to add or remove a user.
	
	  l. Click Apply.
	
	  m. Click OK.
	
	  n. Repeat steps a through m for each virtual server if you are multi- hosting
	     servers.
	
	Additional query words: 97
	
	======================================================================
	Keywords          :  
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search
	Version           : :
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
