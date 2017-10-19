---
layout: page
title: "Q172138: HOW TO: Create a Virtual Directory in IIS"
permalink: /kb/172/Q172138/
---

## Q172138: HOW TO: Create a Virtual Directory in IIS

	Article: Q172138
	Product(s): Internet Information Server
	Version(s): 3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage kbAudITPro kbHOWTOmaster
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0 
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Services version 5.1 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Introduction
	- Create Virtual Directories in IIS 3.0
	- Create Virtual Directories in IIS 4.0
	- Create Virtual Directories in IIS 5.0
	- Create Virtual Directories in IIS 5.1
	- Additional Considerations
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article describes how to create a virtual directory in
	Internet Information Server (IIS) versions 3.0 and 4.0 and in Internet
	Information Services (IIS) 5.0 and 5.1.
	
	Introduction
	------------
	
	Each of the Internet services can publish from multiple directories. Each
	directory can be located on a local drive or across the network by specifying
	the directory with a Universal Naming Convention (UNC) name and a user name and
	password to use for access permission. A virtual server can have one home
	directory and any number of other publishing directories. These other publishing
	directories are referred to as virtual directories.
	
	To simplify client URL addresses, the services present the whole set of
	publishing directories to clients as a single directory tree. The home directory
	is the root of this virtual directory tree, and each virtual directory is
	addressed as if it was a subdirectory of the home directory. Actual
	subdirectories of the virtual directories are available to clients also. The
	World Wide Web (WWW) service alone supports virtual servers; therefore, the FTP
	and gopher services can have only one home directory.
	
	When a virtual directory is defined in Internet Service Manager, an alias is
	associated with the virtual directory. The alias is the name that will be used
	by clients to access information in the virtual directory. If alias names for
	virtual directories are not specified by the administrator, an alias name is
	generated automatically by Internet Service Manager.
	
	For example, an administrator may define two virtual directories for the WWW
	service as follows:
	
	  C:\WWWRoot
	
	  D:\Webdata      Alias = data
	
	If the site is named MyWeb, clients access these virtual directories as follows:
	
	  http://MyWeb/WWWRoot
	
	  http://MyWeb/data
	
	Create Virtual Directories in IIS 3.0
	-------------------------------------
	
	1. In Internet Service Manager, double-click the service for which you want to
	  add a virtual directory to display its property sheets.
	
	2. Click the Directories tab.
	
	3. Click Add.
	
	4. Click Browse to select a directory in the Directory box.
	
	5. Click Virtual Directory, then type the name of the virtual directory in the
	  Alias box.
	
	6. Set the access permissions.
	
	7. Click OK.
	
	8. Click Apply, and then click OK.
	
	For more information, see the Internet Information Server online documentation
	and the Microsoft Windows NT Server Resource Kit.
	
	Create Virtual Directories in IIS 4.0
	-------------------------------------
	
	1. Click Start, point to Programs, click to select Windows NT 4.0 Option Pack,
	  point to Microsoft Internet Information Server, and then click Internet
	  Service Manager.
	
	  NOTE: For these steps, do not click Internet Service Manager (HTML).
	
	2. Expand Internet Information Server.
	
	3. Expand the server name.
	
	4. In the left pane, right-click Default Web Site, point to New, and then click
	  Virtual Directory.
	
	5. In the first screen of the New Virtual Directory Wizard, type an alias, or
	  name, for the virtual directory (such as MyWebData), and then click Next.
	
	6. In the second screen, click Browse. Locate the content folder that you
	  created to hold the Web content. Click Next.
	
	7. In the third screen, click to select Read and Run scripts (such as ASP). Make
	  sure that the other check boxes are cleared. Click Finish to complete the
	  wizard.
	
	8. For ASP content, you may want to confirm that an application was created. To
	  do this, right-click the new virtual directory, and then click Properties.
	
	9. Click Virtual Directory and make sure that the virtual directory name is
	  listed in the Application Name box under Application Settings. If it is not,
	  click Create.
	
	10. Close the Properties dialog box, and then close IIS.
	
	Create Virtual Directories in IIS 5.0
	-------------------------------------
	
	1. Click Start, point to Programs, click to select Administrative Tools, and
	  then click Internet Services Manager.
	
	2. Expand the server name.
	
	3. In the left pane, right-click Default Web Site, point to New, and then click
	  Virtual Directory.
	
	4. In the first screen of the Virtual Directory Creation Wizard, type an alias,
	  or name, for the virtual directory (such as MyWebData), and then click Next.
	
	5. In the second screen, click Browse. Locate the content folder that you
	  created to hold the content. Click Next.
	
	6. In the third screen, click to select Read and Run scripts (such as ASP). Make
	  sure that the other check boxes are cleared. Click Finish to complete the
	  wizard.
	
	7. For ASP content, you may want to confirm that an application was created. To
	  do this, right-click the new virtual directory, and then click Properties.
	
	8. On the Virtual Directory tab, make sure that the virtual directory name is
	  listed in the Application Name box under Application Settings. If it is not,
	  click Create. Note that the application name does not have to match the
	  virtual directory alias.
	
	9. Close the Properties dialog box.
	
	Create Virtual Directories in IIS 5.1
	-------------------------------------
	
	1. Click Start, point to Programs, click to select Administrative Tools, and
	  then click Internet Services Manager.
	
	2. Expand the server name.
	
	3. In the left pane, right-click Default Web Site, point to New, and then click
	  Virtual Directory.
	
	4. In the first screen of the Virtual Directory Creation Wizard, type an alias,
	  or name, for the virtual directory (such as MyWebData), and then click Next.
	
	5. In the second screen, click Browse. Locate the content folder that you
	  created to hold the content. Click Next.
	
	6. In the third screen, select Read and Run scripts (such as ASP). Make sure
	  that the other check boxes are cleared. Click Finish to complete the wizard.
	
	7. For ASP content, you may want to confirm that an application was created. To
	  do this, right-click the new virtual directory, and then click Properties.
	
	8. On the Virtual Directory tab, make sure that the virtual directory name is
	  listed in the Application Name box under Application Settings. If it is not,
	  click Create. Note that the application name does not have to match the
	  virtual directory alias.
	
	9. Close the Properties dialog box.
	
	Additional Considerations
	-------------------------
	
	- You can create an almost unlimited number of virtual directories for your
	  service, although performance may suffer if you create too many of them.
	
	- To locate virtual directories, the URL for the virtual directory must be
	  specified. You can do this by either clicking a hypertext link that contains
	  the URL or by typing the URL in the browser. For the gopher service, you can
	  create explicit links in tag files so that users can access virtual
	  directories. For the FTP service, you can list virtual directories by using
	  directory annotations or by creating a subfolder with the same name as the
	  virtual directory.
	
	For additional information about using FTP directory annotations, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q141705 How to Set Up Directory Annotation for Internet Server FTP
	
	- If you are using the NTFS file system, you can also create a virtual
	  directory as follows:
	
	  1. Right-click a directory in Windows Explorer.
	
	  2. Click Sharing.
	
	  3. Click to select the Web Sharing property sheet.
	
	- In IIS 3.0, any virtual directory that is not associated with a specific IP
	  address is accessible from all Web sites that are hosted on the server. In
	  IIS 4.0 and later, this behavior is changed to make a virtual directory
	  accessible from multiple Web sites that use multiple IP addresses. To make a
	  virtual directory accessible from multiple Web sites that use multiple IP
	  addresses, you must now add the virtual directory to each site.
	
	- Deleting a virtual directory does not delete the corresponding physical
	  directory or files.
	
	REFERENCES
	==========
	
	For additional information about creating and deleting virtual directories
	programmatically, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q188954 Create and Delete Virtual Directories in IIS 4.0 (Programmatically)
	
	For more information about creating virtual directories in IIS versions 4.0, 5.0,
	and 5.1, see the IIS Help topics. If these are installed, you can access them by
	typing "http://<servername>/iisHelp/" (without the quotation marks) in the
	Web server (where <servername> is the name of the server that is running
	IIS). The documentation files are located at %SystemRoot%\Help.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbAudITPro kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300 kbiis510
	Version           : :3.0,4.0,5.0
	Hardware          : ALPHA x86
	Issue type        : kbhowto
	
	=============================================================================
	
