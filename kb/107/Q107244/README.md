---
layout: page
title: "Q107244: Microsoft Systems Management Server README.TXT (Part 1 of 2)"
permalink: /kb/107/Q107244/
---

## Q107244: Microsoft Systems Management Server README.TXT (Part 1 of 2)

	Article: Q107244
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains the text from the Microsoft Systems Management Server
	version 1.0 README.TXT file (part 1 of 2).
	
	MORE INFORMATION
	================
	
	     README.TXT
	     Microsoft(r) Systems Management Server (SMS)
	
	Release Notes Contents
	1. Patching Windows NT(TM) Server on the Site Server
	2. Site Upgrade
	3. SMS Service Account
	4. SMS Administrator
	5. SMS Database Manager
	6. SMSLS.INI
	7. IBM(r) LAN Server
	8. Novell(r) NetWare(r)
	9. Clients Running MS-DOS(r)
	10. Clients Running Windows for Workgroups
	11. Macintosh(r)
	12. OS/2(r)
	13. Troubleshooting Client Operations
	14. Services
	15. Inventory
	16. Audited Software
	17. Outboxes
	18. Creating and Distributing Packages
	19. Program Group Control
	20. Using Network Applications
	21. Troubleshooting Network Applications
	22. Installing Applications on Clients
	23. Notes on Installing Specific Applications
	24. Using SMS to Install Operating Systems on Clients
	25. Remote Troubleshooting Utilities
	26. Network Monitor
	27. Automatically Configure Workstation Logon Scripts
	28. Diskless Clients
	29. Backup and Restoration
	30. Miscellaneous Notes
	31. Additional Online Documentation
	32. SMS Administrator's Guide Errata
	33. Using SMS with Other Language Versions of Windows NT
	
	Microsoft(r) Systems Management Server (SMS)
	Release Notes
	
	1. Patching Windows NT(TM) Server on the Site Server Before running SMS,
	you should update Windows NT Server on your site servers with some new
	versions of Windows NT files supplied on the SMS CD-ROM. This is especially
	important for SMS site servers that run Network Monitor or that use Gateway
	Services for NetWare to communicate with NetWare computers.
	
	The files that are updated are NDIS.SYS, NWAPI32.DLL, and NWRDR.SYS. The
	update to NDIS.SYS fixes a problem with Network Monitor on ring networks.
	The other two files fix problems with enumerating NetWare user groups and
	getting the correct version number of NetWare servers.
	
	Although these updates are essential only for primary or secondary site
	servers that either run Network Monitor or that use Gateway Services for
	NetWare to communicate with NetWare computers, Microsoft recommends that
	you apply the update to all computers running Windows NT including
	clients.
	
	SMS provides two utility programs (for Windows NT and for Windows for
	Workgroups) and a PDF so that you can update Windows NT easily. The PDF is
	PATCHRDR.PDF. This PDF contains package commands for both Windows NT
	(Windows NT Patch of Redirector) and Windows for Workgroups (WFW Patch of
	Redirector).
	
	For the Windows NT update, the files and the utility program PATCH.EXE are
	located in the PATCHES\NT subdirectory of the SMS CD-ROM. For the Windows
	for Workgroups update, the files and the utility program PATCH.EXE are
	located inthe PATCHES\WFW subdirectory of the SMS CD-ROM.
	
	To use the PDF, perform the following steps:
	
	1) Set up the package source directory:
	  a. Create a package source directory.
	  b. Create an NT subdirectory and a WFW subdirectory beneath the package
	     source directory.
	  c. Copy all the files from the PATCHES\NT directory on the SMS CD-ROM to
	     the NT subdirectory of the package source directory.
	  d. Copy all the files from the PATCHES\WFW directory on the SMS CD-ROM
	     to the WFW subdirectory of the package source directory.
	
	2) Create a package. When you do so, import the PDF by choosing the Import
	  button in Package Properties, then choosing PATCHRDR.PDF from the list.
	
	3) Choose the Workstations button.
	
	4) In the source directory box, type the path to the package source
	  directory you created in step 1.
	
	5) Select Windows NT Patch of Redirector and choose the Properties button.
	
	6) In the Command Line Properties dialog box, select both the Automated
	  Command Line and System (Background) Task options.
	
	7) Choose OK to close all the open dialog boxes.
	
	8) Create Run Command On Workstation jobs to run the appropriate package
	  command on the appropriate computers.
	
	To run the patch program manually on a computer, change directories to the
	PATCHES\NT subdirectory of the SMS CD-ROM, and type patch. Then reboot the
	computer for the changes to take effect.
	
	This causes the appropriate files (listed in the PATCHLST.000 file) to be
	updated. The files are updated only if the versions of these files on the
	SMS CD-ROM are newer than the versions already on the computer. Note that
	the old versions of these files are retained, but their file extensions
	are changed to an unused 3 digit number.
	
	If you have a Windows NT version 3.5 system and OpenGL is not installed,
	the patch utility may not run because it believes that you are trying to
	patch a Windows NT 3.1 version system. If you know for certain that you are
	running version 3.5 of Windows NT Server or Windows NT Workstation on
	your computer, you may safely override this check by using the -f option
	(patch -f).
	
	2. Site Upgrade
	When you upgrade a site, the SMS Setup program does not install the SMS
	Setup program. You can manually copy the SMS Setup program (SETUP.EXE) from
	the SMSSETUP\platform.BIN of the SMS CD-ROM (where platform is the
	processor type of the site server) to the SITE.SRV\platform.BIN directory
	on the site server.
	
	When you upgrade a site, make sure that you close all SMS administration
	utilities on the site server (such as the SMS Administrator, SMS Security
	Manager, and so on) before you begin the upgrade. These utilities may lock
	SMS system files so that they cannot be replaced by Setup.
	
	Before you can upgrade a secondary site, all secondary sites must be
	active. Therefore, you must resolve any problems with secondary sites, or
	allow components to finish being added to a secondary site, before you can
	upgrade a secondary site. You can check on a site's status by looking at
	the icon representing the site in the Sites window of the SMS
	Administrator.
	
	3. SMS Service Account
	Within a site, if you set up any trust relationships between domains, you
	should have just one SMS Service Account in one master domain at the site.
	
	Within a site, if you set up your Windows NT(TM) domains using a trust
	model (such as the single master domain model), you should set up a single
	SMS Service Account in the master domain, and have other domains use this
	trusted account. Do not set up other SMS Service Accounts in the other
	domains. Note that all domains in the site must trust the master domain
	(which contains the SMS Service Account). In addition, the SMS Service
	Account in the master domain should be a member of the Administrators local
	group in all domains at the site, and have Log On As A Service rights in
	all domains at the site.
	
	If you set up your Windows NT domains without setting up a trust model, you
	should avoid setting up any trust relationships and you should use a local
	domain account for the SMS Service Account. In addition, you must create an
	SMS Service Account in each domain at the site. In each domain, the SMS
	Service Account must be a member of the Administrators local group and have
	Log On As A Service rights in all domains at the site.
	
	4. SMS Administrator
	On site servers, a user must log on to the site server computer with a user
	account that is a member of the Administrators local group in the site
	server domain. On site servers, the SMS Administrator (and other utilities
	such as SMS Service Manager, SMS Security Manager, and so on) can only be
	installed in the SITE.SRV directory. For security purposes, the Site
	Configuration Manager assigns permissions for the SITE.SRV directory to
	only the Administrators local group. No other group or user can run a
	program from the SITE.SRV directory. If you want to give other users the
	ability to run the SMS Administrator, you should install the SMS
	Administrator on a computer running Windows NT that is not the site server.
	
	When you use the Limit To Sites control in the Execute Query, Job Details,
	and other dialog boxes, the list displays only the yellow primary site
	icon. This icon is used to denote a site in general. It is not used to
	differentiate between a primary site and a secondary site.
	
	5. SMS Database Manager
	The SMS Database Manager is provided so that you remove the Audited
	Software group when you want to perform a software audit that contains only
	the latest audited software. If you do not use the SMS Database Manager to
	remove the Audited Software group, the SMS site database will store the
	cumulative inventory for the Audited Software group (that is, any updates
	will simply be added to the current record for the group). The SMS Database
	Manager (DBCLEAN.EXE) is installed in the SITE.SRV\platform.BIN directory
	(where platform is the processor type of the computer where it is
	installed) on any computer where the SMS Administrator is installed.
	
	Before you use the SMS Database Manager to change or remove items in a
	database, make sure that there are no administrators using the SMS
	Administrator to access that database.
	
	6. SMSLS.INI
	The default SMSLS.INI file is placed in the SITE.SRV\MAINCFG.BOX directory
	on the site server. If you want to use SMSLS.INI to map clients to domains,
	modify the version in this location. If you have enabled the Automatically
	Configure Workstation Logon Scripts option, the Site Configuration Manager
	copies the SMSLS.INI file from this location to the REPL$ share of SMS
	logon servers running LAN Manager and Windows NT Server. If you have not
	enabled the Automatically Configure Workstation Logon Scripts option, you
	must manually copy the SMSLS.INI file to the NETLOGON shares of the SMS
	logon servers.
	
	For computers running Windows NT that are part of a domain, SETLS uses the
	domain as the workgroup if a WORKGROUP=DOMAIN mapping is specified in the
	SMSLS.INI file. For example, if the computer is in the SMSDOM domain and
	the SMSLS.INI file has SMSDOM = CENTRAL mapping for WORKGROUP, the computer
	running Windows NT is added to the site in the CENTRAL domain. You can also
	use the [WIN.INI] section to map computers running Windows NT to domains.
	
	Also, for LAN Server clients, you may need to use SMSLS.INI to successfully
	report inventory to a LAN Server domain. If SMSLS.CMD and SETLSOS2 are
	unable to find the current logon server, you must define the LAN Server
	domain(s) in both the [Domain] and [Workgroup] sections of the SMSLS.INI
	file. For example, if the user is logged on to the IBMLSDOM domain the
	SMSLS.INI file should have IBMLSDOM = IBMLSDOM mapping in both the [Domain]
	and [Workgroup] sections.
	
	7. IBM(r) LAN Server
	You must restore package shares on LAN Server package servers after those
	servers have been restarted. LAN Server does not directly support
	persistent shares. When you restart the LAN Server package server, the
	shares on the computer are not restored, and you must restore them
	yourself. The shares to restore are SMS_PKGx and all the shares for shared
	packages and workstation packages. It is a good idea to note the names and
	paths of these shares while the server is running, so you can restore them
	after the server is restarted.
	
	Site Configuration Manager restores shares after a LAN Server logon server
	has been restarted. LAN Server does not directly support persistent shares.
	When you restart the LAN Server computer, the shares on the logon server
	are not restored. The Site Configuration Manager will restore these shares
	(SMS_SHR and SMS_SHRx) on the LAN Server computer during its watchdog
	cycle. If you don't want to wait for the watchdog cycle, you can restore
	these shares yourself at startup.
	
	SMSOS2AG.EXE (called the SMS_NET_MAPPER service in Beta versions of SMS) is
	run as an executable file instead of running as a service. On OS/2 2.1x
	clients, Client Setup configures SMSOS2AG.EXE to run as an executable
	program from STARTUP.CMD. Be sure that SMSOS2AG.EXE appears in STARTUP.CMD
	after the commands to start the network. SMSOS2AG.EXE provides network
	support for Package Command Manager in the Windows(TM) subsystem of OS/2.
	Note that SMSOS2AG.EXE does not have an 8 character limit for the package
	server or logon server for LAN Manager.
	
	If you have an IBM LAN Server domain in an SMS site, and you want to use
	the SMS ability to automatically configure logon scripts, you must do the
	following:
	
	a) Be sure you have selected the Use All Detected Servers option in the
	Domain Properties dialog box for the domain. To access this dialog box,
	select the site in the Sites window and choose Properties from the File
	menu. Then choose the Domains button, then choose the Properties button in
	the Domains dialog box.
	
	b) On the domain's primary domain controller, you must create the REPL$
	share by typing net share repl$=c:\ibmlan\repl\export. Note that the
	primary domain controller must be the export server for the logon scripts.
	
	c) On the primary domain controller, create a SCRIPTS subdirectory under
	the IBMLAN\REPL\EXPORT directory.
	
	d) If the primary domain controller does not already have a REPL.INI file
	in the EXPORT directory, create one with the following entries
	EXTENT = TREE
	INTEGRITY = FILE
	If a REPL.INI file already exists, you do not have to change its settings.
	
	e) In the [Replicator] section of the IBMLAN.INI file on the primary domain
	controller, add these two lines (if they do not already appear):
	REPLICATE = BOTH
	EXPORTPATH = C:\IBMLAN\REPL\EXPORT
	
	f) In the [Replicator] section of the IBMLAN.INI file on the backup domain
	controllers, make sure the settings configure the backup domain controllers
	to import replicated files from the primary domain controller (the default
	IBMLAN.INI settings allow this).
	
	g) Also in the IBMLAN.INI of the primary domain controller and backup
	domain controllers in the domain, add replicator to the Srvservices line in
	the [Server] section, so that the Replicator service starts automatically
	when the server starts.
	
	h) Restart the Replicator service on the primary domain controller and all
	backup domain controllers in the domain.
	
	You are now ready to automatically configure logon scripts within SMS. SMS
	will set SMSLS.CMD as the script for users who don't currently have
	scripts, and append SMSLS to the scripts of those users who do already have
	logon scripts.
	
	8. Novell(r) NetWare(r)
	For NetWare 4.x logon servers, you must make additional changes to the
	system login script when you use the Automatically Configure Workstation
	Logon Scripts option.
	
	NetWare 4.x login scripts require an explicit mapping when accessing a
	volume on the NetWare server. This means that you need to add some lines to
	the SMS commands that were added to the system login script by the Site
	Configuration Manager.
	
	After the Site Configuration Manager has configured the system login script
	on NetWare 4.x logon servers, you must add lines to the SMS commands to map
	a drive to the volume containing the SMS logon server (LOGON.SRV) directory
	on the logon server.
	
	On NetWare servers, the Site Configuration Manager adds the following lines
	to the system login script (these lines work correctly on NetWare 3.x
	servers):
	
	REM Microsoft Systems Management Server (start)
	
	REM SMS 1.0
	set SMS_LOGON="SMSVOL:smsroot\logon.srv"
	INCLUDE %<SMS_LOGON>\SMSLS.SCR
	set SMS_LOGON=
	
	REM Microsoft Systems Management Server (end)
	
	Where SMSVOL:smsroot is the volume and directory name for where SMS is
	installed on the logon server. For NetWare 4.x, the SMS lines in the login
	script must have the following form:
	
	REM Microsoft Systems Management Server (start)
	
	REM SMS 1.0
	map root X:= SMSVOL:smsroot\logon.srv
	set SMS_LOGON="X:"
	INCLUDE %<SMS_LOGON>\SMSLS.SCR
	map rem X:
	set SMS_LOGON=
	
	REM Microsoft Systems Management Server (end)
	
	Where SMSVOL:smsroot is the volume and directory name for where SMS is
	installed on the logon server.
	
	9. Clients Running MS-DOS
	SMS supports MS-DOS version 5.0 and later. On pages xxx-xxxi of the SMS
	Administrator's Guide, the text states that SMS provides support for MS-DOS
	version 3.3 or later. The text should state the MS-DOS version 5.0 or later
	is supported.
	
	SMS provides only MS-DOS support for clients running Microsoft Network
	Client for MS-DOS version 3.0. (Microsoft Network Client for MS-DOS version
	3.0 is provided on the Windows NT Server CD-ROM.) SMS does not support SMS
	components within the Windows 3.1 environment on clients that run Microsoft
	Network Client for MS-DOS version 3.0. For full SMS support on clients
	running Windows 3.1, the client should use LAN Manager version 2.1 or later
	Enhanced Workstation or Windows for Workgroups.
	
	In addition, the Microsoft Network Client for MS-DOS version 3.0 has the
	following limitations:
	
	a. You cannot use the remote troubleshooting utilities on these clients
	using NWLINK. You can use
	remote troubleshooting utilities on these clients over NetBEUI or TCP/IP.
	
	b. SMS will not be able to read the network card ID of these computers, so
	this information will
	not be shown in the inventory for these computers.
	
	10. Clients Running Windows for Workgroups
	SMS clients that run Windows for Workgroups must have the latest version of
	the VREDIR.386 file. This file is dated 9-04-94 at 8:07 A.M. You can get
	this file from the PATCHES\WFW directory on the SMS CD-ROM. This version of
	this file is also shipped on the Windows NT Server CD-ROM. If you already
	updated this file from that CD, you do not need to update it again from the
	SMS CD-ROM.
	
	For SMS, the latest version of this file is required to correct a problem
	where Windows for Workgroups clients lose connections when running the
	SMSLS script at logon time. A PDF to automatically update Windows for
	Workgroups computers is also provided.
	
	To use the PDF, perform the following steps:
	1) Set up the package source directory:
	
	a. Create a package source directory.
	
	b. Create an NT subdirectory and a WFW subdirectory beneath the package
	source directory.
	
	c. If you are also using the PDF for updating Windows NT, copy all the
	files from the PATCHES\NT
	directory on the SMS CD-ROM to the NT subdirectory of the package source
	directory.
	
	d. Copy all the files from the PATCHES\WFW directory on the SMS CD-ROM to
	the WFW subdirectory of
	the package source directory.
	
	2) Create a package. When you do so, import the PDF by choosing the Import
	button in Package Properties, then choosing PATCHRDR.PDF from the list.
	
	3) Choose the Workstations button.
	
	4) In the source directory box, type the path to the package source
	directory you created in step 1.
	
	5) If you are using the package for updating Windows NT, select Windows NT
	Patch of Redirector and choose the Properties button. In the Command Line
	Properties dialog box, select both the Automated Command Line and System
	(Background) Task options.
	
	6) Choose OK until you have exited all dialog boxes.
	
	7) Create Run Command On Workstation jobs to run the appropriate package
	command on the
	appropriate computers.
	
	11. Macintosh(r)
	The Apple Installer is required to install the appropriate SMS files to a
	Macintosh client. The Apple Installer is not supplied with this copy of
	SMS. After SMS Setup has completed on a primary site server, follow the
	directions below to add this file to the server. You must complete the
	steps below before adding any Macintosh clients to SMS, and before adding
	any secondary sites that have Macintosh clients.
	
	You must use version 3.4 or later of the Apple Installer. A valid version
	of the Apple Installer can be found on any set of System 7.1 or System 7.5
	Macintosh operating system disks.
	
	To copy the file to your site server, from a computer running Windows NT
	Server Services for Macintosh (SFM), create a Macintosh share using MacFile
	in the File Manager on an NTFS partition. (Warning: a FAT partition does
	not store Macintosh files correctly and will fail.) From a Macintosh
	computer, insert the install disk that contains the Apple Installer. Mount
	the Macintosh share volume from the computer running Windows NT Server.
	Copy the Apple Installer file from the disk to the share volume. Then use
	the File Manager to copy the file to the
	SITE.SRV\MAINCFG.BOX\CLIENT.SRC\MAC.BIN directory.
	
	If this is a primary site with no secondary sites, the Installer file will
	automatically be copied to the MAC.BIN directory in the logon share. If
	there are secondary sites connected, then the Installer may not be
	automatically copied to all sites. If this is the case, a change to the
	date of the SYSTEM.MAP file in the SMS directory will cause all files to be
	updated, including secondary sites. After copying the Installer to the
	correct path, you can modify the SYSTEM.MAP file date by using a text
	editor to open the SYSTEM.MAP file and save the file with no changes made.
	
	For Run Command On Workstation jobs targeted for Macintosh clients, the
	Despooler gives the package volume (SMS_PKGx where x is the drive where the
	package is installed) all permissions (See Files, See Folders, and Make
	Changes) to Everyone. If you want to change permissions, you must manually
	set the permissions on the package volume and its subfolders. When a
	package directory is shared as a Macintosh volume, the permissions set in
	the Access dialog box of the Setup Package For Workstations dialog box for
	a package are ignored for the Macintosh volume. However, the Despooler
	always sets the permissions for the package's Windows NT share to the
	permissions specified in the Access dialog box.
	
	For Macintosh clients, the Client Software settings in the Clients dialog
	box are ignored. When the SMS client software is installed on a Macintosh
	client, the Installer always installs the Inventory Agent, Package Command
	Manager, and MIF Entry program (MIFMAC) on the computer's hard disk. The
	Installer also configures the computer to run the INVMAC program
	automatically during system startup. The INVMAC program automatically
	starts the Package Command Manager. The MIF Entry program must be started
	manually by the user.
	
	If you have two Macintosh computers with identical computer names in two
	different zones, and both of these computers have been added to the same
	SMS domain, then you should not use the Machine Path to specify a Run
	Command On Workstation job to go to just one of these computers. If you do
	use a Machine Path to specify the computer name for the job, the job will
	go to both of these computers, and you cannot control which one it will go
	to.
	
	You can use PDFs supplied with SMS to distribute packages to Macintosh
	clients. The applications for which PDFs are supplied, and the names of
	each file, are listed at the end of this section.
	
	When you set up the package source directory for one of these applications,
	press the command key while double-clicking the Setup icon. Continue
	pressing the command key until the first dialog box appears. For more
	information on setting up the package source directory for these
	applications, see the README file for each application for information on
	setting up the application on the network.
	
	Two options for installation on the client are offered. One option allows
	the user to install a complete version on their Macintosh. The other option
	allows the user to install a version that runs from a network share volume.
	For Macintosh applications shared this way, all users will run the
	application directly from the server with the package source directory
	(unlike PC applications, which can be distributed to several servers for
	load balancing).
	
	The following table lists each application for which PDFs are supplied, and
	the PDF to use when installing the application. Use the same PDF for both
	installing the application on Macintosh clients, and for installing the
	application for shared use on a server.
	
	Application                             PDF File
	Microsoft(r) Office version 4.2           M_OFF42.PDF
	Microsoft(r) Word version 6.0             M_WRD60.PDF
	Microsoft(r) Word version 5.1a            M_WRD51a.PDF
	Microsoft(r) Excel version 5.0            M_EXC50.PDF
	Microsoft(r) Excel version 4.0            M_EXC40.PDF
	Microsoft(r) PowerPoint(r) version 4.0      M_PPT40.PDF
	Microsoft(r) PowerPoint(r) version 3.0      M_PPT30.PDF
	Microsoft(r) Project version 3.0          M_PRJ30.PDF
	Microsoft(r) Works version 4.0a           M_WRK40a.PDF
	
	12. OS/2(r)
	SMSOS2AG.EXE (called the SMS_NET_MAPPER service in Beta versions of SMS) is
	run as an executable file instead of running as a service. On OS/2 2.1x
	clients, Client Setup configures SMSOS2AG.EXE to run as an executable
	program from STARTUP.CMD. Be sure that SMSOS2AG.EXE appears in STARTUP.CMD
	after the commands to start the network. SMSOS2AG.EXE provides network
	support for Package Command Manager in the WindowsTM subsystem of OS/2.
	Note that SMSOS2AG.EXE does not have an 8 character limit for the package
	server or logon server for LAN Manager.
	
	SMSOS2AG.EXE provides network support for Package Command Manager in the
	WindowsTM subsystem of OS/2. Note that SMSOS2AG.EXE does not have an 8
	character limit for the package server or logon server for LAN Manager.
	
	On OS/2 computers, the Client Setup program requires that OS/2 be installed
	on drive C.
	
	13. Troubleshooting Client Operations
	If you are having trouble installing or running SMS client software, check
	for the following (also, refer to Appendix A in the Microsoft Systems
	Management Server Administrator's Guide):
	
	The appropriate Windows network drivers are installed. Examine the network
	= entry in the Windows SYSTEM.INI file. One of the following entries should
	be present: lanman21.drv, wfwnet.drv, msnet.drv, or netware.drv. If the
	appropriate driver is not loaded, Package Command Manager and Program Group
	Control will not start. Make sure that the login account on the client has
	read access to the SMS logon server's SMS_SHR. For problems with Run
	Command On Workstation packages: Make sure that packages are designated for
	the appropriate operating systems. For example, if a package is targeted
	for clients running MS-DOS, it will not appear on clients running Windows
	version 3.1.
	
	The date and time on the client must be consistent with the SMS server's
	date and time. If these values are not the same, a situation can occur
	where the package expiration time has already passed by the time the
	package arrives.
	
	Check the event log for failure explanations. Likely problems include
	insufficient disk space on a client or a network connection failure. In the
	latter case, try to make the network connection with the net use command.
	
	For shared packages (network applications), see "Troubleshooting Network
	Application" later in this document.
	
	14. Services
	Only use the Very Fast mode for the Response setting in the Services dialog
	box for test purposes or for very small sites. The Very Fast mode places a
	heavy load on the site server--especially if the site is large.
	
	15. Inventory
	On clients running MS-DOS, Windows version 3.1, and Windows for Workgroups,
	the Inventory Agent always reports the protocol that it used to connect to
	the SMS logon server where it is running from. If information about other
	protocols is available to the Inventory Agent, it will also report these
	protocols.
	
	On clients running Windows for Workgroups or LAN Manager, you must run the
	SMSLS batch file or Inventory Agent using the Full (or Enhanced)
	Redirector. If you use the Basic Redirector, the Inventory Agent will not
	be able to report inventory and will prompt you for an SMSID (press the
	Enter key) or terminate with an error that says your drive may be full. To
	solve this problem, start the network software using the Full or Enhanced
	Redirector.
	
	If you have clients that have both NetWare and LAN Manager networking
	capabilities, you should set up SMS to use only one of those network
	operating systems on those clients. Note that SMS supports only one network
	operating system at a time on a client.
	
	To deliberately have users not run logon scripts (especially with dual LAN
	Manager and NetWare stacks):
	
	Both: Create a user group and add the users who you don't want to run the
	script.
	
	NetWare: Modify the system logon script for each server so that members of
	the group skip the SMS script commands. Or you can modify SCRIPT.SCR so
	that members of the group skip the SMS script commands.
	
	LAN Manager: Through User Manager, modify the logon scripts for the entire
	group to point to a different logon script name that has no file extension.
	
	To handle computers with duplicate SMSIDs, remove and reinstall SMS on the
	computers where you want to create a new SMSID. If two or more clients have
	the same SMSID, you can generate a new SMSID for those computers by 1)
	removing SMS from the computers where you want to create a new SMSID and 2)
	readding the computer to the site. You can remove SMS from a client by
	using the Client Setup program with the /R switch. You can manually add a
	computer by running the SMSLS batch file from the SMS_SHR of an SMS logon
	server. For more information about removing SMS from a client, see
	"Removing SMS Components from Clients" in Chapter 3 of the SMS
	Administrator's Guide. For more information about manually adding clients
	to a site, see "Manually Adding Clients to a Site" in Chapter 3 of the SMS
	Administrator's Guide.
	
	The Inventory Strategy When Network Is Slow setting takes effect when the
	next Logon Script Configuration Interval elapses. By default, this interval
	is 24 hours. You can confirm that the Site Configuration Manager has
	updated this setting at the site by looking in the Site Configuration
	Manager's trace log (look for NETSPEED.COM and NETSPEED.DAT).
	
	If a computer running MS-DOS or Windows has an inventory report that has no
	changes from the previous inventory, the Inventory Processor does not
	create a Delta-MIF to report the time of the inventory scan. Instead, the
	Inventory Processor waits for the inventory heartbeat period to elapse
	(compares the last inventory report with the time of the current inventory
	report) before it sends a Delta-MIF reporting no change and the scan time.
	By default, the heartbeat period is 4 days. This means that the Last
	Hardware Scan and Last Software Scan dates displayed in the Workstation
	Status section of the Personal Computer Properties window could be
	different from the date of the actual most recent scan by as much as the
	heartbeat period. Note if a change occurs in a computer's inventory, the
	Inventory Processor creates a Delta-MIF reporting the change and the scan
	time.
	
	If the Inventory Data Loader sends a resync command to a client and there
	has been no change to the inventory, the client will not report a resync
	inventory until the inventory heartbeat period has elapsed (4 days, by
	default).
	
	16. Audited Software
	If you want to customize the AUDIT.RUL file, you should rename the rule
	file to a different filename. If you upgrade the site, SMS Setup will
	overwrite the AUDIT.RUL file with the version on the SMS CD-ROM.
	
	RUL2CFG.BAT requires only one parameter. On page 219 of the SMS
	Administrator's Guide, the text states that RUL2CFG.BAT requires 2
	parameters. RUL2CFG.BAT requires only the package rule filename. The CFG
	file is not requires because the AUDIT programs must always have a CFG file
	named AUDIT.CFG.
	
	If you do not use the SMS Database Manager to remove the Audited Software
	group, the SMS site database will store the cumulative inventory for the
	Audited Software group (that is, any updates will simply be added to the
	current record for the group). The SMS Database Manager (DBCLEAN.EXE)
	is provided so that you remove the Audited Software group when you want to
	perform a software audit that contains only the latest audited software.
	
	Before you create a job using the Audit 1.00 package, you must run
	RUL2CFG.EXE to create the AUDIT.CFG file used for the software auditing
	package. You must do this the first time you create a job with the package.
	If you make changes to the package rule file, you should also run
	RUL2CFG.EXE again to update the AUDIT.CFG file.
	
	The RUL2CFG.BAT file puts the AUDIT.CFG files it creates into the
	PRIMSITE.SRV\AUDIT\PACKAGE\ platform.BIN directories (where platform is the
	processor type). The AUDIT.CFG file is not placed in the
	PRIMSITE.SRV\AUDIT\PACKAGE directory as stated in the documentation. Also,
	package auditing using the RUL2CFG.BAT file in the default location
	(PRIMSITE.SRV\AUDIT) works only if the source directory for the package
	auditing is the PRIMSITE.SRV\AUDIT\PACKAGE directory.
	
	For package inventory rules or the package rule file, do not enclose a
	clause containing OR operators with parentheses. Parentheses (grouping)
	around clauses containing an OR operator in inventory rules or the package
	rule file cannot be compiled by RUL2CFG.EXE nor Maintenance Manager.
	
	The package rule file does not support an implicit AND clause before a set
	of OR clauses. The RUL2CFG.EXE compiler will not compile a package rule
	file containing an AND clause before a set of OR clauses. If you place the
	AND clause after the OR clauses, the RUL2CFG.EXE compiler will successfully
	compile the CFG file.
	
	The following rule will fail to compile:
	file "file1"
	(
	    file "file2"
	    or
	    file "file3"
	    or
	    file "file4"
	)
	
	However, the following rule will compile:
	(
	    file "file2"
	    or
	    file "file3"
	    or
	    file "file4"
	)
	file "file1"
	
	Package rule file (AUDIT.RUL) does not support an explicit AND operator.
	The RUL2CFG.EXE compiler will not compile a package rule file containing an
	explicit AND operator. If you use no operator between two files, this is
	treated as an implicit AND operator. To combine file rules with AND
	operators, simply list them one after the other without an operator.
	
	The following rule will fail to compile:
	file "file1"
	AND
	file "file2"
	
	However, the following rule will compile:
	file "file1"
	file "file2"
	
	17. Outboxes
	You cannot move Outboxes to another drive or server. Additionally, you
	cannot rename Outboxes.
	
	18. Creating and Distributing Packages
	When you create a package, in the Workstation Command Line box you can type
	a path relative to the package source directory. For example, if the
	package source directory is C:\APP, and the command line you want to run is
	C:\APP\SETUP\SETUP.EXE, you can type setup\setup.exe in the Workstation
	Command Line box.
	
	When you use either a Run Command On Workstation job or a Share Package On
	Server job for a package created using a PDF, clients that run the job may
	be rebooted when the job runs. Usually, a client reboots only the first
	time it receives a package created with a PDF. On some clients running
	Windows NT Workstation version 3.1, the reboot may damage data in files
	held open by other applications running at the same time. This happens only
	on clients running Windows NT Workstation version 3.1. When you create a
	job to install a Microsoft application that has a PDF, you must copy the
	application's SMSPROXY directory to the package source directory. Copy the
	PRIMSITE.SRC\IMPORT.SRC\appname\SMSPROXY directory (and its contents) to
	the package source directory you create for the application. You must
	perform this step when creating a package to either install the application
	on clients or to set the application up on a server as a shared
	application.
	
	When you send a Share Package On Server job to install a shared application
	for which SMS supplies a PDF and the target computers include at least one
	client running Windows NT version 3.1, the job status will appear as
	"Retry," even if all the target computers have run the command
	successfully. When you see a Share Package On Server job with "Retry"
	status, check the Job Status Details dialog box to get more accurate
	information about the overall job status. You can also contact the users of
	the clients running Windows NT version 3.1 to determine if the software was
	installed correctly.
	
	If you used a Beta version of SMS to create and distribute a package for an
	ACME application (an application for which a PDF is supplied), you should
	delete these packages before you use this version of SMS. You should create
	a remove package job for each of the old packages, wait until those jobs
	finish, then delete the packages in the SMS Administrator. Then you can
	reimport the new PDFs, rebuild the packages and program groups, and resend
	the packages.
	
	19. Program Group Control
	After you initially install SMS on the site server domain and add a client
	to the site server domain, you may see the following message when running
	Program Group Control:
	
	Program Group Control: Could not open the application database due to a SMS
	profile error.
	
	If you add a client to the site by running the SMSLS batch file (or Client
	Setup) from a logon server with no servers in the [Servers] section,
	Program Group Control will display this message.
	
	After you initially install SMS on the site server domain, you should
	ensure that all the logon servers are listed in the [Servers] section of
	the DOMAIN.INI file on the SMS_SHR share of each logon server in the site
	server domain. Normally, this can take up to 30 minutes (longer if there
	are a large number of servers in the site server domain).
	
	You can correct this error by running the SMSLS batch file or Client Setup
	again when there are one or more servers listed in the [Servers] section of
	DOMAIN.INI.
	
	When a user who uses network applications logs on, the user may see the
	following message:
	
	Failed to connect to SMS network server. Cannot determine which groups the
	users belong to. Please contact your administrator.
	
	This means the client cannot see any of the package servers that it is
	supposed to see. To correct this problem:
	  a) Examine the SMSERROR.TXT file in the Windows directory on the client.
	This file may contain more specific information regarding the failure.
	There may be sufficient information here for you to correct the problem.
	  b) Examine the [servers] section of the SMS.INI file on the client. Set
	up a network connection to the SMS_SHR share of one of the servers listed
	in this section. Within the SMS_SHR share, change to the
	APPCTL.BOX\DATABASE directory and look for files with the .HAF and .HGF
	extensions. If there are no files with these extensions, the site
	administrator may not have distributed a program group for the network
	applications to this site, or the client may not have the appropriate
	security credentials to see files in the share.
	
	For shared network applications, SMS does not install program items in
	program groups other than the program groups SMS creates. If an application
	normally installs an icon in another program group (such as Startup), you
	can copy the necessary program item from an SMS program group to the
	other program group. For applications with program items in non-SMS program
	groups, you should also make sure the Drive Mode setting for the package
	properties is either Runs With UNC Name or Requires Specific Drive Letter.
	
	After you upgrade the SMS software on an SMS logon server, all clients must
	run SMSLS.BAT (or the user must run their logon script, if that script runs
	SMSLS.BAT) before trying to run any shared applications made available by
	SMS.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	
