---
layout: page
title: "Q301387: HOW TO: Use IIS Migration Wizard to Migrate From IIS 4.0 to 5.0"
permalink: kb/301/Q301387/
---

## Q301387: HOW TO: Use IIS Migration Wizard to Migrate From IIS 4.0 to 5.0

	Article: Q301387
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbHOWTOmaster
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	- Requirements
	
	   - Download and Extract IIS Migration Wizard Files
	- Install the Windows Source Component
	- Install the Windows Target Component
	- Run the IIS Migration Wizard
	- Complete the Migration of Content
	- Restore Migrated Settings and Content
	
	- Troubleshooting
	
	SUMMARY
	=======
	
	This step-by-step article describes how to use the IIS Migration Wizard to
	migrate from Internet Information Server version 4.0 to Internet Information
	Services (IIS) version 5.0.
	
	The IIS Migration Wizard migrates Web server configuration settings, Multipurpose
	Internet Mail Extensions (MIME) type information, and content to Microsoft
	Windows 2000 Server and IIS 5.0 from another Web server. It also provides the
	option to migrate users and groups.
	
	During a migration, the wizard performs the following basic tasks:
	
	- Creates a virtual Web site in the IIS 5.0 snap-in, with a configuration that
	  is matched as closely as possible to the original Web site.
	
	- Copies content, including application files, into an appropriate directory
	  structure that it creates in Windows Explorer.
	
	- Maps the virtual Web site to the content.
	
	- Configures Active Server Pages (ASP) applications, Internet Server
	  Application Programming Interface (ISAPI) extensions, and dynamic link
	  libraries (DLLs), and sets execute permissions on the Common Gateway
	  Interface (CGI) directory. You may have to take additional steps for your
	  applications to run on IIS 5.0.
	
	Requirements
	------------
	
	The following conditions must be met for the IIS Migration Wizard to run
	correctly:
	
	- The target computer must have Web access to the source computer.
	
	- The user who is running the wizard must have local computer administrator
	  rights on both the source and the target computers. This condition is
	  satisfied if the user is a domain administrator.
	
	- The target computer must be running Windows 2000 Server and IIS 5.0. It
	  should also have a default configuration. During a migration, the IIS 5.0
	  default Web site must be running on the target computer.
	
	- The IIS default Web site must be running on the source computer. If the
	  default Web site has been deleted or renamed, the first Web site that appears
	  under the administration Web site in the IIS snap-in must be running.
	
	- The total amount of content involved in a single migration cannot exceed 4
	  gigabytes (GB). If the content exceeds this limit, you can perform separate
	  migrations for virtual Web sites. If you have only one Web site, you can
	  decrease the content in a single migration by creating virtual Web sites that
	  each refer to a portion of the content. You can then conduct separate
	  migrations for the virtual Web sites.
	
	Important Security Information
	
	It is strongly recommended that you uninstall IIS Migration Wizard source and
	target components after you complete the migration process. Leaving these
	components installed may pose a security risk. On a Windows-based computer, you
	can uninstall the components by using the Add/Remove Programs utility in Control
	Panel.
	
	Download and Extract IIS Migration Wizard Files
	-----------------------------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  Iismigrationwizard_setup.exe
	  (http://download.microsoft.com/download/win2000platform/iismigwz/1.00.0.1/nt5/en-us/IISMIGrationWizard_Setup.exe)
	
	To download and extract IIS Migration Wizard files, follow these steps:
	
	1. Download the IIS Migration Wizard setup file from the Microsoft Download
	  Center.
	
	2. In the File Download dialog box, select Save this program to disk.
	
	3. Select a location on your computer and then click Save.
	
	4. In Windows Explorer, locate the Iismigrationwizard_setup.exe file that you
	  just downloaded, and then double-click the file to start the file extraction
	  process.
	
	NOTE: The Iismigrationwizard_setup.exe file is a self-extracting executable
	(.exe) file. By running the file, you place installation packages and
	documentation on your computer. Each of these packages requires additional
	installation, as described in the tool documentation.
	
	Install the Windows Source Component
	------------------------------------
	
	The IIS Migration Wizard consists of two components: the source component, which
	is run on the computer from which you are migrating, and the target component,
	which is run on the computer to which you are migrating.
	
	To install the source component, follow these steps:
	
	1. Log on to the source computer as an administrator.
	
	2. Browse to the location where you extracted the IIS Migration Wizard files and
	  double-click IISv5MigrationUtility_x86.exe. The default location of the IIS
	  Migration Wizard files is %SystemRoot%\Program Files\Resource Kit.
	
	3. Follow the instructions on the screen to install the component. When you are
	  prompted, select Install the source component. For additional instructions,
	  click Help at the bottom of the dialog box.
	
	Install the Windows Target Component
	------------------------------------
	
	1. Log on to the target computer as an administrator.
	
	2. Browse to the directory of the extracted IIS Migration Wizard files and
	  double-click Iisv5migrationutility-targetonly_x86.exe.
	
	3. Follow the instructions on the screen to install the component.
	
	Run the IIS Migration Wizard
	----------------------------
	
	After you have installed the IIS Migration Wizard source and target components,
	you are ready to run the wizard and conduct a migration. To run the IIS
	Migration Wizard, follow these steps:
	
	1. Log on to the target computer as an administrator.
	
	2. On the Start menu, point to Programs, and then click IIS Migration Wizard.
	
	3. When you are prompted, select the server content, settings, and MIME
	  information to migrate for each virtual server.
	
	  NOTE: By default, the IIS administration Web site is not migrated, but you can
	  select the option to migrate it. For help while you are using the wizard,
	  click Help at the bottom of the dialog box.
	
	4. Click Next to start the wizard. This starts the migration, which can take
	  from several minutes to over an hour.
	
	5. To save the activity log or the migration archive file, which contains
	  migrated content and settings, click the appropriate link at the bottom of
	  the wizard screen.
	
	6. To close the wizard, click Finish.
	
	Important: It is strongly recommended that you uninstall both the source and
	target components after you complete the migration process. Leaving these
	components installed may pose a security risk.
	
	Complete the Migration of Content
	---------------------------------
	
	The IIS Migration Wizard copies all source Web site content to the target
	computer. It also performs much of the necessary configuration for IIS 5.0 to
	serve the content. However, for certain types of content, you may need to take
	additional steps to complete the migration. This topic describes the directory
	structure that the wizard creates for content and the additional steps you may
	need to take to complete the migration.
	
	The IIS Migration Wizard places content in the
	Inetpub\<source>\<drive>\<directory structure> directory
	structure that it creates in Windows Explorer on the target computer, where
	<source> is the computer name or IP address of the source computer,
	<drive> is the drive on which the content was stored on the source
	computer, and <directory structure> is the directory structure as it
	exists on the source computer.
	
	The wizard configures IIS 5.0 properties for migrated content, with the following
	results:
	
	- Web pages are configured to be served correctly. You may need to change
	  UNIX-style file names to reflect Windows conventions.
	
	- CGI applications are placed in a directory with execute permissions enabled.
	  You may need to take additional steps in order for your CGI applications
	  (particularly UNIX CGI applications) to run on IIS 5.0. For more information,
	  see "Migrating a Web Server to IIS 5.0" in the Microsoft Windows 2000
	  Resource Kit Internet Information Services Resource Guide.
	
	- ASP applications with relative paths are configured to run correctly.
	  However, you may need to correct absolute paths in .asp files to reflect the
	  new directory hierarchy.
	
	- ISAPI extensions are configured to run correctly.
	
	- Netscape Application Programming Interface (NSAPI) extensions are migrated,
	  but are not converted to a format that runs on IIS 5.0.
	
	- DLLs that are stored in Web content directories on the source computer are
	  configured to run correctly. DLLs that are stored outside Web content
	  directories are not migrated.
	
	- COM objects that are stored in Web content directories on the source computer
	  are copied to the appropriate directory. However, to complete the migration
	  of COM objects, you must manually run Regsvr32.exe. COM objects that are
	  stored outside Web content directories are not migrated.
	
	- ODBC sources are not migrated. You must reconfigure them in a Windows 2000
	  environment.
	
	- Because security certificates are not migrated, you must remove any security
	  certificates that you are using on the IIS 4.0 computer before you migrate,
	  and then obtain new certificates for the migrated Web sites under IIS 5.0.
	
	Restore Migrated Settings and Content
	-------------------------------------
	
	For each migration, the IIS Migration Wizard provides the option to save a .cab
	file that archives migrated settings and content. If you want to undo changes
	that you have made to a migrated Web site, or if your data becomes corrupted,
	you can restore the original settings and content. To do this, run the wizard
	again and reference the .cab archive file rather than a source Web server. You
	can also use this method to replicate migrated settings and content to another
	computer that is running Windows 2000 Server and IIS 5.0.
	
	The wizard restores or replicates migrated settings and content as follows:
	
	- If, in the IIS 5.0 snap-in, the wizard encounters a Web site that has the
	  same name as the Web site for which the archive .cab file was created, it
	  restores the Web site settings to the state that is recorded in the .cab
	  file. The wizard also overwrites any content that is contained in
	  Inetpub\<Web site name>\ folder with corresponding content from the
	  archive .cab file. <Web site name> is a folder that has the same name
	  as the migrated Web site. If the wizard does not find a folder that has this
	  name, it creates a folder with this name and copies the content into it.
	
	- If, in the IIS 5.0 snap-in, the wizard does not encounter a Web site with a
	  name that corresponds to the name of the archived Web site, it creates and
	  new Web site that has this name. It also copies all of the archived content
	  to Inetpub\<Web site name>\, where <Web site name> is a folder
	  that the wizard creates that has the same name as the migrated Web site.
	
	To restore or replicate migrated settings and content, follow these steps:
	
	1. Log on to the target computer (the one onto which you want to replicate or
	  restore settings and content) as an administrator.
	
	2. If necessary, install the target component, as described in the "Install the
	  Windows Target Component" section.
	
	3. Click Start, click Programs, and then click IIS Migration Wizard to start the
	  wizard.
	
	4. On the Welcome page, click Next.
	
	5. In Step 2: connect to the source server, select the Archive file option, and
	  then type the path and file name of the archive .cab file in the text box.
	  Click Next.
	
	6. Click Next on each subsequent screen until the migration begins. After the
	  process has started, the process takes from a few minutes to over an hour,
	  depending on the amount of content that is restored or replicated. When the
	  migration is complete, the wizard displays a list of warnings, as well as
	  additional steps that are required.
	
	Troubleshooting
	---------------
	
	- "Page Cannot Be Displayed" Error Message When You Start the Wizard from a Web
	  Page
	
	When you attempt to start the wizard from a Web page by connecting to
	http://<source>/iismu/welcome.htm, you may receive an error message that
	states that the page cannot be displayed. If you do, the source Web server is
	not running.
	
	To correct the problem, stop the wizard, start the source Web server, and then
	start the wizard again. If the source Web server is IIS, you need to start the
	default Web site. If you have renamed or deleted the default Web site, start the
	Web site that appears first under the administration Web site in the IIS snap-in
	of the Microsoft Management Console (MMC).
	
	- "Page Cannot be Displayed" Error Message After Step 2
	
	After you complete the second step of the wizard (Step 2: connect to the source
	server), you may receive an error message that states that the page cannot be
	displayed. If you do, either the target component is not installed, or the
	target Web server is not running. If the target component has not been
	installed, go back to Step 1 of the wizard, install the target component, and
	then continue with the wizard. If the target component has been installed, the
	error indicates that the target Web server is not running. In this case, stop
	the wizard. In the IIS snap-in, start the default Web site, and then start the
	wizard again.
	
	If you continue to receive an error message that states that the page cannot be
	displayed, the most likely cause is that the target computer does not have a
	default installation of Windows 2000 and IIS 5.0. The IIS Migration Wizard does
	not support target platforms without a default installation. To correct the
	problem, verify that the IIS default Web site responds to requests that are made
	to the "localhost" address, which the wizard uses when it moves from step 2 to
	step 3. To do this, follow these steps:
	
	  1. In the IIS snap-in on the target computer, make sure that the IP address
	     of the default Web site is set to ALL UNASSIGNED.
	
	  2. On the target computer, make sure that the IIS default Web site is running
	     on port 80.
	
	  3. On the target computer, make sure that the IIS default Web site is the
	     only Web site that is running on port 80.
	
	- Response.isClientConnected Error Message
	
	When you run the wizard, you may receive the following error message:
	
	  Microsoft VBScript runtime error '800a01b6' Object doesn't support this
	  property or method: 'Response.isClientConnected'
	
	The cause of this error message may be an extra, outdated ASP DLL on your source
	computer. To see if this is the case, open the \WINNT\System32\Inetsrv folder on
	the source computer and look for a folder named ASP and a file named Asp.dll. If
	the Inetsrv folder contains an ASP folder and an Asp.dll file, follow these
	steps:
	
	  1. In the Services program in Control Panel, stop the IIS Admin Service. This
	     also stops the File Transfer Protocol (FTP), Hypertext Transfer Protocol
	     (HTTP), and Simple Mail Transfer Protocol (SMTP) services.
	
	  2. Back up the ASP folder and its contents to another location on your hard
	     drive. If the new Asp.dll does not work properly, you can then restore the
	     ASP folder to its original location.
	
	  3. In the Inetsrv folder, delete the ASP folder.
	
	  4. In the Services program in Control Panel, restart the IIS Admin Service.
	
	  5. Verify that script mappings are correct at each level on which you have
	     defined an application. To do this, in the IIS snap-in, open the property
	     sheets for each application root folder and click the Home Directory tab.
	     Under Application Settings, click Configuration, and verify that the
	     script mappings reference \inetsrv\asp.dll.
	
	  6. In the Services program in Control Panel, restart the FTP, HTTP, and SMTP
	     services.
	
	- Stalling on Netscape Source Servers
	
	The IIS Migration Wizard may stall while it creates the migration archive on
	Netscape source servers. This occurs when the connection timeout value on the
	Netscape source server is too short. To correct this problem, use the Netscape
	Server Administrator to increase the value of HTTP Persistent Connection Timeout
	under Server Preferences/Performance Tuning.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
