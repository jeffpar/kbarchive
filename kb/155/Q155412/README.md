---
layout: page
title: "Q155412: DBWEB: How to Install dbWeb 1.0 with Microsoft IIS"
permalink: kb/155/Q155412/
---

## Q155412: DBWEB: How to Install dbWeb 1.0 with Microsoft IIS

	Article: Q155412
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:1.0; winnt:1.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 24-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft dbWeb, version 1.0 
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to install Microsoft dbWeb version 1.0 if you use
	Microsoft Internet Information Server (IIS) as your web server software.
	
	The dbWeb version 1.0 Setup program does not provide for automatic installation
	with Microsoft IIS. A dialog box that appears during setup prompts you for the
	name of your web server software. The list of web servers does not include IIS.
	
	MORE INFORMATION
	================
	
	The following steps walk you through installing dbWeb version 1.0 using IIS as
	your web server. These steps assume that IIS is already installed on your
	server.
	
	Gathering Information About IIS
	-------------------------------
	
	1. Start IIS Internet Service Manager, and click the computer name that appears
	  on the same line as the WWW service.
	
	2. On the Properties menu, click Service Properties.
	
	3. Click the Directories tab. Note the CGI script and HTML document directories,
	  and the alias associated with each. You will need this information to install
	  dbWeb 1.0.
	
	  The default IIS CGI script directory is C:\Inetsrv\Scripts, and its alias is
	  /scripts. The default HTML document directory is C:\Inetsrv\wwwroot, and its
	  alias is <Home>. The alias represents the relative path you need to
	  type in a web browser to view documents in that directory. For example:
	
	   Directory                Alias          Browser URL
	   -----------------------------------------------------------------------
	   C:\Inetsrv\Scripts       /scripts       http://servername/scripts/ 
	   C:\Inetsrv\wwwroot       <Home>         http://servername/ 
	   C:\Inetsrv\Scripts\dbWeb /scripts/dbWeb http://servername/scripts/dbWeb
	   C:\Inetsrv\wwwroot\dbWeb /dbWeb/        http://servername/dbWeb/ 
	
	Installing dbWeb 1.0
	--------------------
	
	1. Insert Disk 1 of the dbWeb 1.0 disks into a floppy drive on your computer.
	
	2. In Windows NT 3.51, click Run on the File menu of Program Manager or File
	  Manager; in Windows NT 4.0, click the Start button, and then click Run.
	
	3. Type a command to run the dbWeb 1.0 Setup program, for example:
	
	  "a:\setup" (without the quotation marks)
	
	4. In the Welcome box, click Next.
	
	5. In the "Enter your product key" box, type your Product Key, and then click
	  Next. The Product Key is inside the cover of the Microsoft dbWeb 1.0 Getting
	  Started manual. You must type the Product Key in capital letters.
	
	6. In the "Choose Destination Location" box, type the directory where you want
	  to install dbWeb 1.0 main components, and then click Next. The default
	  directory is C:\dbWeb.
	
	7. In the "Select components to install" box, click each of the four components,
	  and then click Next.
	
	8. In the "Web Server Selection" box, click "Other web server," and then click
	  Next.
	
	9. In the "Select your web server directory" box, click the Browse button to
	  locate the IIS directory, and then click Next. The default directory for IIS
	  is C:\Inetsrv.
	
	10. In the "Select physical CGI path" box, click the Browse button to locate the
	  IIS CGI scripts directory, and then click Next. You identified the CGI
	  scripts directory in step 3 of "Gathering Information About IIS" earlier in
	  this article.
	
	11. In the "Enter relative CGI path" box, type the relative path for dbWeb CGI
	  scripts, and then click Next. For example, if /scripts is the relative path
	  (alias) for the IIS CGI script directory, type /scripts/dbWeb.
	
	12. In the "Select physical HTML path" box, click the Browse button to locate
	  the IIS HTML directory, and then click Next. You identified the HTML
	  directory in step 3 of "Gathering Information About IIS" earlier in this
	  article.
	
	13. In the "Enter relative HTML path" box, type the relative path for dbWeb
	  auxiliary files, and then click Next. For example, if <Home> is the
	  relative path (alias) for the IIS HTML directory, type /dbWeb/.
	
	14. The dbWeb 1.0 Setup program copies files to your computer.
	
	15. Choose a program group that you want to use for dbWeb 1.0 program icons, and
	  then click Next.
	
	16. When you see a message stating that installation is complete, click OK.
	
	17. Set up your ODBC Data Sources. There is an ODBC icon in the dbWeb 1.0
	  program group and in Control Panel.
	
	18. Start the dbWeb Service, using the Services icon in Control Panel.
	
	REFERENCES
	==========
	
	For more information about setting up ODBC Data Sources, search for "ODBC
	setup," and then "Installing and Configuring ODBC" using the Microsoft dbWeb 1.0
	Help menu.
	
	For more information about starting the dbWeb Service, search for "dbWeb
	service," and then "Installing and Starting the dbWeb Service" using the
	Microsoft dbWeb 1.0 Help menu.
	
	Additional query words: setup
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbiisSearch kbAudDeveloper kbiis100 kbdbWebSearch kbdbWeb100
	Version           : WINDOWS:1.0; winnt:1.0
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
