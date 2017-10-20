---
layout: page
title: "Q158721: How to Configure and Administer Personal Web Server"
permalink: /kb/158/Q158721/
---

## Q158721: How to Configure and Administer Personal Web Server

{% raw %}

	Article: Q158721
	Product(s): Internet Information Server
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): mspwsw95
	Last Modified: 05-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Personal Web Server versions 1.0, 1.0a for Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to configure and administer Microsoft Personal Web
	Server. The following topics are discussed:
	
	- Starting the HTTP and FTP services
	
	- Configuring the HTTP and FTP services
	
	- Sharing folders
	
	- Configuring security
	
	- Adding users and groups to the local user list
	
	- Administering Personal Web Server remotely
	
	- Monitoring HTTP and FTP activity
	
	MORE INFORMATION
	================
	
	Starting the HTTP and FTP Services
	----------------------------------
	
	Personal Web Server supports the following two types of services:
	
	- The HTTP (Hypertext Transport Protocol) service allows people to access Web
	  pages on your computer.
	
	- The FTP (File Transfer Protocol) service allows people to view files on your
	  computer and copy files to and from your computer using the FTP protocol.
	
	Personal Web Server can be configured so that one or both of the HTTP and FTP
	services start automatically when you start Windows 95. If the services are not
	configured to start automatically, you can start them manually at any time. The
	HTTP service is configured to start automatically by default, but the FTP
	service is not.
	
	To configure the HTTP or FTP service to start automatically when you start
	Windows 95, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. In Control Panel, double-click Personal Web Server.
	
	3. Click the Services tab, click the service that you want to start
	  automatically in the Services area, and then click Properties.
	
	4. In the Startup Options area, click Automatic.
	
	To manually start a service that is not configured to start automatically, follow
	these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. In Control Panel, double-click Personal Web Server.
	
	3. Click the Services tab, click the service that you want to start in the
	  Services area, and then click Start.
	
	Configuring the HTTP and FTP Services
	-------------------------------------
	
	Configuring the HTTP Service
	----------------------------
	
	After you start the HTTP service, people can access Web pages on your computer
	using the following Internet address
	
	  http://<computer>
	
	where <computer> is your computer name. To verify the Internet address that
	people should use to access Web pages on your computer, double-click Personal
	Web Server in Control Panel and then view the address at the top of the General
	tab. To change the address that people use to access your computer, you must
	change your computer name.
	
	To modify the Web page that appears by default when people use the above address
	to access your computer, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. In Control Panel, double-click Personal Web Server.
	
	3. Click the Services tab, click HTTP in the Services area, and then click
	  Properties.
	
	4. Click Change Home Page and then type the file name associated with the Web
	  page that you want to appear in the Default Document box. Note that the Web
	  page must be located in the home root folder for the HTTP service.
	
	Web pages other than the default Web page can be accessed using the following
	address syntax
	
	  http://<computer>/<folder>/<page>
	
	where <computer> is your computer name, <folder> is the alias for the
	folder in which the Web page is located, and <page> is file name
	associated with the Web page. To allow people to access Web pages on your
	computer, you must share the folder that contains the Web page in Personal Web
	Server and assign an alias to the folder. The alias for the folder must be used
	to access Web pages in the folder instead of the actual folder name. For
	additional information about sharing folders in Personal Web Server, see the
	"Sharing Folders" section in this article.
	
	If the Web page you want to access is located in the home root folder, you do not
	need to specify a folder alias in the address. Note that the alias for the home
	root folder should not be changed. Doing so can cause problems that may require
	you to reinstall Personal Web Server.
	
	Configuring the FTP Service
	---------------------------
	
	After you start the FTP service, people can view files on your computer and copy
	files to and from your computer using the following Internet address
	
	  ftp://<computer>
	
	where <computer> is your computer name. To verify the Internet address that
	people should use when using FTP to access files on your computer, double- click
	Personal Web Server in Control Panel, click the Services tab, click FTP in the
	Services area, click Properties, and then view the address in the FTP Home Root
	Settings area. To change the address that people use to access files on your
	computer, you must change your computer name.
	
	When people use the above address to access your computer, the contents of the
	home root folder for the FTP service are displayed. To change the folder whose
	contents are displayed when people use the above address to access your
	computer, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. In Control Panel, double-click Personal Web Server.
	
	3. Click the Administration tab, click Administration, and then click FTP
	  Administration.
	
	4. Click the Directories tab and then click Edit on line for the current home
	  root folder.
	
	5. Click Virtual Directory, and then click OK.
	
	6. Click Edit on the line for the folder that you want to be the home root
	  folder, click Home Directory, and then click OK.
	
	To modify other settings for the FTP service, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. In Control Panel, double-click Personal Web Server.
	
	3. Click the Administration tab, click Administration, and then click FTP
	  Administration.
	
	4. Modify one or more settings on the Services tab.
	
	  NOTE: Personal Web Server should not be configured so that the Allow Anonymous
	  Connections check box is cleared and the Allow Only Anonymous Connections
	  check box is selected. If Personal Web Server is configured in this manner,
	  no FTP connections are allowed.
	
	Sharing Folders
	---------------
	
	To share a folder on your computer so that people can access Web pages in the
	folder, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. In Control Panel, double-click Personal Web Server.
	
	3. Click the Administration tab, click Administration, and then click WWW
	  Administration.
	
	4. Click the Directories tab and then click Add.
	
	5. Type the full path to the folder in the Directory box, type an alias for the
	  folder in the Directory Alias box, click one or both of the Read and Execute
	  check boxes to select them, and then click OK. Note that you can click Browse
	  to locate the folder instead of typing the name of the folder manually.
	
	To stop sharing or modify the settings for a folder that was previously shared so
	that people could access Web pages in the folder, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. In Control Panel, double-click Personal Web Server.
	
	3. Click the Administration tab, click Administration, and then click WWW
	  Administration.
	
	4. Click the Directories tab.
	
	5. To stop sharing a folder, click Delete on the line for the folder. To modify
	  the settings for a folder, click Edit on the line for the folder and then
	  modify one or more settings.
	
	To share a folder on your computer so that people can access files in the folder
	using FTP, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. In Control Panel, double-click Personal Web Server.
	
	3. Click the Administration tab, click Administration, and then click FTP
	  Administration.
	
	4. Click the Directories tab and then click Add.
	
	5. Type the full path to the folder in the Directory box, type an alias for the
	  folder in the Directory Alias box, click one or both of the Read and Write
	  check boxes to select them, and then click OK. Note that you can click Browse
	  to locate the folder instead of typing the name of the folder manually.
	
	To stop sharing or modify the settings for a folder that was previously shared so
	that people could access files in the folder using FTP, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. In Control Panel, double-click Personal Web Server.
	
	3. Click the Administration tab, click Administration, and then click FTP
	  Administration.
	
	4. Click the Directories tab.
	
	5. To stop sharing a folder, click Delete on the line for the folder. To modify
	  the settings for a folder, click Edit on the line for the folder and then
	  modify one or more settings.
	
	Configuring Security
	--------------------
	
	Specifying an Access Control Type
	---------------------------------
	
	Personal Web Server uses the same type of access control as the computer on which
	it is running. If the "File and printer sharing for Microsoft Networks" network
	service is installed, the computer can use share-level security or user-level
	security with pass-through validation provided by a Windows NT domain or Windows
	NT-based computer. If the "File and printer sharing for NetWare Networks"
	network service is installed, the computer can use user-level security with
	pass-through validation provided by a Novell NetWare server. If neither network
	service is installed, Personal Web Server must use local security.
	
	To use share-level or user-level security in Personal Web Server, the appropriate
	network service must be installed and configured properly. To add a network
	service in Windows 95, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. In Control Panel, double-click Network.
	
	3. Click Add, click Network Service, and then click Add.
	
	4. In the Manufacturers box, click Microsoft. In the Network Services box, click
	  "File and printer sharing for Microsoft Networks" or "File and printer
	  sharing for NetWare Networks."
	
	5. Click OK.
	
	To configure Windows 95 to use a particular type of access control, double- click
	Network in Control Panel, click the Access Control tab, and then click
	Share-Level Access Control or User-Level Access Control. If you click User-Level
	Access Control, you must also type the name of the Windows NT domain, Windows
	NT-based computer, or Novell NetWare server used to provide pass-through
	validation in the "Obtain list of users and groups from" box.
	
	NOTE: After you change the type of access control a computer is using, any
	resources that were shared on that computer are no longer shared. You must share
	the resources again to allow other people to access them. In addition, note that
	remote administration of Personal Web Server is not supported when share-level
	security is used.
	
	To use local security in Personal Web Server, double-click Network in Control
	Panel, click File And Printer Sharing, and then click the "I want to be able to
	give others access to my files" and "I want to be able to allow others to print
	to my printer(s)" check boxes to clear them.
	
	NOTE: When Personal Web Server is configured for local security, Dial-Up
	Networking Server does not function properly.
	
	Specifying a Method of Password Authentication
	----------------------------------------------
	
	Personal Web Server can be configured to use basic password authentication or
	Windows NT Challenge/Response password authentication. In addition, it can be
	configured to allow anonymous connections.
	
	When basic password authentication is used, the user name and password that
	people enter when they access your computer are not encrypted before they are
	passed across the network. This method of password authentication makes it very
	easy for other people to decode the user name and password. When Windows NT
	Challenge/Response password authentication is used, the user name and password
	are encrypted before they are passed across the network. This method provides
	additional security by making it very difficult for other people to decode the
	user name and password.
	
	NOTE: To use Windows NT Challenge/Response password authentication in Personal
	Web Server, the computer on which Personal Web Server is running must be using
	user-level security with pass-through validation provided by a Windows NT
	domain.
	
	To configure Personal Web Server to use a particular method of password
	authentication, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. In Control Panel, double-click Personal Web Server.
	
	3. Click the Administration tab, click Administration, and then click WWW
	  Administration.
	
	4. Click the Basic or Windows NT Challenge/Response check box to select it.
	
	Adding Users and Groups to the Local User List
	----------------------------------------------
	
	If you configure Personal Web Server to use local security, you must add people
	to the local user list to allow them to access Web pages and files on your
	computer. You can also add groups to the local user list and add people to the
	groups.
	
	To add a person to the local user list, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. In Control Panel, double-click Personal Web Server.
	
	3. Click the Administration tab, click Administration, and then click Local User
	  Administration.
	
	4. On the Users tab, click New User, type a user name in the "User Name" box,
	  type a password in the "User Password" and "Confirm Password" boxes, and then
	  click Add.
	
	  NOTE: Each person in the local user list must have a password. Personal Web
	  Server does not support null passwords.
	
	To add a group to the local user list, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. In Control Panel, double-click Personal Web Server.
	
	3. Click the Administration tab, click Administration, and then click Local User
	  Administration.
	
	4. Click the Groups tab, click New Group, type a name for the group in the
	  "Group Name" box, and then click Add.
	
	To add a person to a particular group, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. In Control Panel, double-click Personal Web Server.
	
	3. Click the Administration tab, click Administration, and then click Local User
	  Administration.
	
	4. Click the User/Group tab, click the person that you want to add to a group in
	  the User List box, click the group to which you want to add the person in the
	  Group List box, and then click Add User To Group.
	
	Administering Personal Web Server Remotely
	------------------------------------------
	
	Personal Web Server can be configured so that you can administer it from another
	computer. To administer Personal Web Server from another computer, the computer
	on which Personal Web Server is installed and the computer from which you want
	to administer Personal Web Server must be on the same network, or the computer
	on which Personal Web Server is installed must be able to be accessed over the
	Internet.
	
	To configure Personal Web Server and Windows 95 so that Personal Web Server can
	be administered from another computer, follow these steps:
	
	1. If Personal Web Server is configured for local security, add any people that
	  you want to be able to administer Personal Web Server remotely to the local
	  user list. For information about how to do so, see the "Adding Users and
	  Groups to the Local User List" section in this article. If Personal Web
	  Server is not configured for local security, proceed to step 2.
	
	2. Click the Start button, point to Settings, and then click Control Panel.
	
	3. In Control Panel, double-click Passwords.
	
	4. Click the Remote Administration tab, click the Enable Remote Administration
	  Of This Server check box to select it, and then click Add.
	
	5. Click the person that you want to be able to administer Personal Web Server
	  remotely in the list of names and then click Add. Repeat this step for each
	  person that you want to be able to administer Personal Web Server remotely.
	
	To administer Personal Web Server from another computer, access the following Web
	page from the other computer
	
	  http://<computer>/htmla/htmla.htm
	
	where <computer> is the computer name of the computer on which Personal Web
	Server is installed. If you want to access the computer over the Internet
	instead of a network, you must establish a connection to the Internet before
	accessing the above address. For additional information about connecting to the
	Internet in Windows 95, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q138789 How to Connect to the Internet in Windows 95
	
	NOTE: When you administer Personal Web Server from another computer, you cannot
	administer a local user list.
	
	Monitoring HTTP and FTP Activity
	--------------------------------
	
	Personal Web Server includes features that allow you to monitor HTTP and FTP
	activity on your computer. One of these features allows you to record HTTP and
	FTP activity on the computer in a log file. When you enable this feature,
	Personal Web Server creates an entry in the log file each time someone accesses
	a Web page on your computer or accesses a file on your computer using FTP.
	
	To enable logging so that HTTP activity is monitored, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. In Control Panel, double-click Personal Web Server.
	
	3. Click the Administration tab, click Administration, and then click WWW
	  Administration.
	
	4. Click the Logging tab and then click the Enable Logging check box to select
	  it.
	
	To enable logging so that FTP activity is monitored, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. In Control Panel, double-click Personal Web Server.
	
	3. Click the Administration tab, click Administration, and then click FTP
	  Administration.
	
	4. Click the Logging tab and then click the Enable Logging check box to select
	  it.
	
	The log file that is created when you enable logging so that HTTP or FTP activity
	is monitored is named Inetserver_event.log. The file is created in the Windows
	folder by default.
	
	Personal Web Server also includes a feature that allows you to view the current
	FTP connections on your computer. To view the current FTP connections on your
	computer, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. In Control Panel, double-click Personal Web Server.
	
	3. Click the Administration tab, click Administration, and then click FTP
	  Administration.
	
	4. Click Show Current Sessions.
	
	To download the Personal Web Server Option Pack, see the following Microsoft Web
	site:
	
	  http://www.microsoft.com/ntserver/nts/downloads/recommended/NT4OptPk/default.asp
	  (http://www.microsoft.com/ntserver/nts/downloads/recommended/NT4OptPk/default.asp)
	
	Additional query words: 1.00 1.00a mspwsw95
	
	======================================================================
	Keywords          : mspwsw95 
	Technology        : kbPersWebServSearch kbZNotKeyword3 kbPersWebServ100Win95 kbPersWebServ100aWin95
	Version           : :1.0,1.0a
	
	=============================================================================
	

{% endraw %}
