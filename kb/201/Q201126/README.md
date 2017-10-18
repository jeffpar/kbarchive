---
layout: page
title: "Q201126: SMS: Troubleshooting Connectivity to the SMS Site Database"
permalink: kb/201/Q201126/
---

## Q201126: SMS: Troubleshooting Connectivity to the SMS Site Database

	Article: Q201126
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200kbfaq
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides information on troubleshooting connectivity to a Microsoft
	Systems Management Server 2.0 site database using the Systems Management Server
	Administrator console.
	
	Systems Management Server 2.0 uses a combination of the following security
	mechanisms to enforce security for a Systems Management Server site database:
	
	- File System
	
	- Windows Management Instrumentation (WMI), Microsoft's implementation of
	  Web-Based Enterprise Management (WBEM)
	
	- Systems Management Server Provider
	
	All security options must be properly configured to enable access to the Systems
	Management Server site database.
	
	MORE INFORMATION
	================
	
	The Systems Management Server Administrator console is hosted by the Microsoft
	Management Console snap-in, a framework for hosting management tools. A console
	file (that has an extension of .msc) is used to define the contents of the
	Microsoft Management Console snap-in, and can be customized for particular
	tasks.
	
	To verify access to the Systems Management Server site database using the Systems
	Management Server Administrator Console, check the following:
	
	- If a Windows NT computer in a remote domain tries to connect to a Microsoft
	  Systems Management Server 2.0 site in a different untrusted Windows NT domain
	  with the Systems Management Server Administrator console, the connection
	  attempt may be unsuccessful and the following error message may be displayed
	  in the Systems Management Server Administrator console: "Failed to connect."
	
	  To have the ability to administer an Systems Management Server site in a
	  remote domain one of the following conditions must be true:
	
	  1. A trust between the domains must be established (the remote domain must
	     trust the domain in which the workstation resides).
	
	  - or -
	
	  2. A user account with the same name and password must be created in the site
	     server domain.
	
	- The user attempting to start the Systems Management Server Administrator
	  console must have Read access permissions to the default Sms.msc and
	  Explore.msc files provided in the following directory on the Systems
	  Management Server 2.0 site server or the local workstation on which the
	  Systems Management Server Administrator console or the Microsoft Management
	  Console is installed:
	
	  <Drive>\Sms\Bin\<Platform>
	
	  where <Drive> is the drive letter to which Systems Management Server is
	  installed and <Platform> is the platform on which you are attempting to
	  start the Systems Management Server Administrator console.
	
	  If the user receives the following message when starting the Systems
	  Management Server Administrator Console:
	
	  The selected file is not a Microsoft Management Console document.
	
	  Use File Manager or Windows Explorer to verify file permissions for these
	  files.
	
	- The user attempting to connect to a Systems Management Server 2.0 site
	  database must also have appropriate WBEM rights to the server where the
	  Systems Management Server Provider is located.
	
	  A symptom of not having the required WBEM rights includes receiving the
	  message "Connection Failed" in the Systems Management Server Administrator
	  console when attempting to connect to the site database.
	
	  By default, Systems Management Server Setup creates a Windows NT local group
	  named Systems Management Server Admins and adds it with the appropriate
	  attributes to WBEM User Manager. Initially, the only user that belongs to
	  this group is the user who installed the Systems Management Server 2.0 site
	  server.
	
	  If this group is intact, use Windows NT User Manager to add the desired
	  Windows NT user(s) or global group(s) to this Systems Management Server
	  Admins local group.
	
	  If the user has been added to the Systems Management Server Admins group and
	  still receives the error "Connection Failed" in the Systems Management Server
	  Administrator console, verify that the Systems Management Server Admins group
	  has been granted the appropriate WBEM rights on the Systems Management Server
	  Site and Systems Management Server Provider servers.
	
	  Perform the steps below on the server where the Systems Management Server
	  Provider is located.
	
	  NOTE: If you are unsure of the location of the Systems Management Server
	  Provider for your site, check the Smssetup.log file on your site server and
	  search for "Provider Location".
	
	  1. On the Start menu, click Run, type "wbemperm" (without the quotation
	     marks), and then press ENTER to start WBEM Permission Editor.
	
	  2. In WBEM Permission Editor, in the User Groups window pane, check for the
	     Systems Management Server Admins group. Verify that the Group Name is
	     spelled correctly.
	
	  3. On the User menu, click Edit Group Properties, and then select the entry.
	     Verify that the following options are selected under the Attributes
	     section:
	
	      - Enabled (checked)
	
	      - Execute Methods (checked)
	
	      - Schema Access Level: Write Instance
	
	  4. If the Systems Management Server Provider is on a separate server from the
	     Systems Management Server site server (such as the SQL Server), you must
	     also verify that the Systems Management Server Admins group has at
	     appropriate WBEM permissions to the local site server. This is because
	     Systems Management Server first must connect to the site server to
	     determine the location of the Systems Management Server Provider. Verify
	     this by performing the steps above on the Systems Management Server site
	     server, but ensuring in the Attributes section of the user group
	     properties that the following options are selected:
	
	      - Enabled (checked)
	
	      - Schema Access Level: Read Only.
	
	  If the user or group entries are incorrect or misspelled, they cannot be
	  modified. You must create a new user or group by selecting Add New User or
	  Add New Group from the User menu in WBEM User Manager. After you have added
	  the correct user or group entry, you can delete the incorrect entry by
	  selecting it and clicking Delete on the User menu.
	
	  After verifying file permissions and WBEM security attributes, the user should
	  be able to connect to the Systems Management Server site database.
	
	- The user connecting to the site database must have appropriate access to
	  class and instance level objects in the Systems Management Server
	  Administrator console. Symptoms of insufficient rights include the inability
	  to see any objects in the console window.
	
	  The following Systems Management Server object types can have security access
	  granted or denied:
	
	   - Collections
	
	   - Packages
	
	   - Advertisements
	
	   - Status Messages
	
	   - Sites
	
	   - Queries
	
	  The steps below walk through granting Class (All Instances) Security Rights
	  for a user or group to the Site object:
	
	  1. Log on as the user who initially installed the Systems Management Server
	     site and connect to the site database. This user by default has full
	     rights to all Systems Management Server objects.
	
	  2. Under the Site Database, navigate to and select the Security Rights node.
	
	  3. Right-click Security Rights, point to New, and then click Class Security
	     Right.
	
	  4. In the Security Right Properties dialog box, specify the following:
	
	      - User name: User or group name, using DOMAIN\USER or DOMAIN\GROUP name
	        syntax.
	
	        NOTE: A method of simplifying administration would be to specify a
	        global user group here, then populate that group with users you want to
	        have this specific set of rights.
	
	      - Object Type: Site
	
	      - Permissions: Administer, Create, Delete, Modify, Read. (These are all
	        available rights for this object type.)
	
	  5. Click OK, and then close the Systems Management Server Administrator
	     console.
	
	  6. Log off and log back on as the user you just added the Security Right for.
	
	  7. Open the Systems Management Server Administrator console. You should be
	     able to view and modify all objects under the Site Hierarchy node.
	
	For additional information, click the article numberabout assigning Systems
	Management Server Security rights below to view the articleabout assigning
	Systems Management Server Security rights in the Microsoft Knowledge Base:
	
	  Q199869 SMS: Assigning Class and Instance Security Rights with the SMS User
	  Wizard
	
	Also, refer to the Systems Management Server 2.0 Administrators Guide or the
	Systems Management Server Administrator Help, available through the Systems
	Management Server Administrator console by clicking Help on the Action menu.
	
	WMI 1.5-Enabled Computers
	-------------------------
	
	Computers that have been upgraded to Windows Management Instrumentation (WMI) 1.5
	or Microsoft Windows 2000-based computers do not have the WMI 1.1 tool
	(Wbemperm.exe).
	
	NOTE: Windows NT 4.0 users which have WMI 1.5 installed, also need to install the
	Microsoft Security Configuration Editor (SCE), included on the Windows NT 4.0
	Service Pack 4 (SP4) (and later) CD-ROM. On Windows NT-based computers, the tool
	is Wbemcntl.exe. The Microsoft SCE is required to edit the Access Control Lists
	(ACLs) on the Windows Installer (WI) namespaces.
	
	
	Additional query words: prodsms smssql wbem
	
	======================================================================
	Keywords          : kbsms200 kbfaq
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
