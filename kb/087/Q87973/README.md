---
layout: page
title: "Q87973: ADMIN.WRI from WinLogin 1.0 Part B"
permalink: kb/087/Q87973/
---

## Q87973: ADMIN.WRI from WinLogin 1.0 Part B

	Article: Q87973
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1.0,3.1,3.11
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbreadm win95
	Last Modified: 10-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft WinLogin, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the WinLogin 1.0 ADMIN.WRI file. This
	article is part two of two. It contains sections 4.0 through 8.0.
	
	This information applies to version 1.0 of Microsoft WinLogin. For information
	about ordering Microsoft WinLogin, call the Microsoft Sales Information Center
	(MSIC) at (800) 426-9400, or mail the form supplied with the Windows Resource
	Kit (WRK) for the Microsoft Windows operating system version 3.1.
	
	MORE INFORMATION
	================
	
	Contents
	--------
	
	This document contains additional information on the following topics:
	
	1.0  What Does WinLogin Do?
	2.0  How Does WinLogin  Work?
	2.1  File Types
	2.2  Merge Rules
	2.3  Data Sources
	2.4  Putting it all together...
	2.5  Network Independence
	3.0  Client Details
	3.1  Disk Layout
	3.2  Fallback Configurations
	3.3  WLCOM.COM
	3.4  WINLOGIN.EXE
	3.5  WLMERGE.DLL
	3.6  MSINIMRG.DLL
	3.7  COPYMRG.DLL
	4.0  Configuration Data Layout
	4.1  Accessing Data Locations
	5.0  Security Issues
	6.0  Environment Variable Support
	7.0  Customizing Client Setup
	7.1  Machine Name
	7.2  Fallback Files
	7.3  Additional Files
	8.0  Other Online Documents
	
	4.0  Configuration Data Layout
	
	One of the key design points in WinLogin is flexibility in
	laying out the Configuration data sets. The following
	recommendations are offered:
	
	Each configuration data set (users, workstations, groups,
	admin) should be stored in a separate directory. This is
	simply due to the fact that any given file (WIN.INI for
	instance) may easily exist in more than one of the data sets
	and the names cannot conflict with each other.
	
	For users, this can be that user's home directory, but most
	importantly should be a spot in the shared file space that
	can be accessed by the user (or on behalf of the user) from
	all the machines at which the user will log on.
	
	For workstations, it is recommended that this directory also
	be in the shared file system space to allow administering
	the workstation settings remotely. The directory however may
	also be local to each machine and  should be identified
	using the wkstasourcemod= setting in WINLOGIN.INI.
	
	The shared database file itself must also be accessible to
	all users and from all workstations in the system. For this
	reason it is recommended that a WinLogin database be set up
	and associated with each security domain in an installation
	(i.e., LAN Manager Domain, NetWare Bindery, etc.).
	
	4.1  Accessing Data Locations
	
	Since the shared database and each of the possibly four
	separate data sets may be stored on different remote
	resources on the network, the task of managing the
	connections to those resources can become complicated.
	WinLogin does, however, offer some help.
	
	WinLogin will automatically connect and disconnect as needed
	from the remote resources that it knows about. These
	resources include:
	
	-  The location at which the shared database is stored, and
	-  All data set locations stored in the shared database.
	
	WinLogin creates and maintains the connections to the data
	set locations for the User, Admin and Group data. For
	administrator specified paths that resolve to a full path
	that contains a network drive, such as the workstation
	location in the example, it is the administrator's
	responsibility to ensure the connection is made and
	maintained.
	
	It is also the administrator's responsibility to ensure that
	the client network software is configured to allow a
	sufficient number of remote connections. If more than one
	data set is stored in paths based upon the same remote
	resource, WinLogin creates only one connection and shares
	it. Similarly, if a connection to the remote resource is
	already established, WinLogin uses that connection and does
	not create another.
	
	5.0  Security Issues
	
	Each user must have read and write access to the directory
	containing the shared database. Each user must have read and
	write access to their own directory, and read access to the
	directories containing the admin, group and workstation data
	sets.
	
	The contents of the shared database are somewhat protected
	by password protection enforced by the administrator's tools
	and by the fact that the API interface to the database is
	private. A WinLogin database can be configured so that
	anyone wanting to modify its contents using the
	administrator's tools must provide the password to that
	database. The database initially installed is not password
	protected.
	
	6.0  Environment Variable Support
	
	Some networked Windows installations have already solved
	some of the problems addressed by WinLogin by making heavy
	use of environment variables to aid in locating the correct
	source data sets. WinLogin incorporates support for such use
	of environment variables for two main reasons. First, it
	should aid these sites in transitioning to WinLogin. Second,
	in some very large environments maintaining the user, group
	and workstation lists (even on a domain or server basis) in
	the database is not desirable. This section details how the
	variables may be specified. For further information on using
	environment variables, refer to your WinLogin
	Administrator's Reference.
	
	WINLOGIN.INI may include the following entries in the
	[WinLogin] section:
	
	adminsourcemod=<path>
	usersourcemod=<path>
	wkstasourcemod=<path>
	groupsourcemod=<path>
	
	<path> can be a series of zero or more slash separated
	legal directory names, DOS environment variables, or the
	name of the current logged on user. Environment variables or
	other place holders such as the user name should resolve to
	valid legal directory names.
	
	If any of these variables are used, WLMERGE.DLL retrieves
	them from WINLOGIN.INI and resolves them to paths. The
	search behaviors described in section 2.3 are implemented
	based upon whether the resolved value is a full path or not.
	
	7.0  Customizing Client Setup
	
	7.1  Machine Name
	
	Normally, the WinLogin client installation will ask you for
	the machine name of the workstation you are installing the
	client onto. The machine name must be a name defined in the
	WinLogin database. If you set up workstation names that are
	common to a number of machines, e.g., VGA or EGA, you can
	simplify the Client Setup by adding a line for machine name
	to the WINLOGIN.INI file on the WinLogin client installation
	disk.
	
	To create a machine name specific setup:
	
	1. Before adding the machine name line, you need to make a copy of
	  the WinLogin client installation disk or network directory for
	  each workstation name. If you have only set up VGA and EGA as your
	  workstation names, you will create two diskettes or network
	  directories.
	
	2. Edit WINLOGIN.INI using a text editor, specifying the machine name
	  you wish to use for the client.
	
	3. Save the file.
	
	For example, if you were to add 'machine=VGA' to
	WINLOGIN.INI under '[last]', the modified WINLOGIN.INI file
	should look like this:
	
	[last]
	dbroot=\\Server\WinLogin Share
	dbpath=\WinLogin Directory\winlogin.wld
	machine=VGA
	
	[winlogin]
	SaveUnknownKeys=0
	fallbackfiles=system.ini,win.ini,progman.ini
	UserSourceMod=
	GroupSourceMod=
	AdminSourceMod=
	WkstaSourceMod=
	
	7.2  Fallback Files
	
	A FALLBACK subdirectory is created in the Windows directory
	on the workstation when WinLogin is installed. Critical .INI
	files that were on the workstation when WinLogin was set up
	are copied to the FALLBACK directory. By default, the
	WinLogin workstation setup will copy SYSTEM.INI, WIN.INI and
	PROGMAN.INI to this directory. If you want to manage
	additional .INI files with WinLogin, you will want to copy
	these additional files to the FALLBACK directory during
	client setup.
	
	If you wish to change the list of files that will be copied,
	there are three locations that must be changed on the
	WinLogin setup disk.
	
	First, you need to change the entry 'fallbackfiles=' under
	'[winlogin]' in WINLOGIN.INI on the workstation setup disk.
	For example, if you wish to ensure you always have a
	fallback configuration for Excel, add EXCEL.INI to the
	'fallbackfiles' entry in WINLOGIN.INI. Your file should look
	like this:
	
	[last]
	dbroot=\\Server\WinLogin Share
	dbpath=\WinLogin Directory\winlogin.wld
	
	[winlogin]
	SaveUnknownKeys=0
	fallbackfiles=system.ini, win.ini, progman.ini, excel.ini
	UserSourceMod=
	GroupSourceMod=
	AdminSourceMod=
	WkstaSourceMod=
	
	Next, you need to change the '[Fallback Files]' section in
	STFSETUP.IN_ on the workstation setup disk. Following our
	Excel example, add a line for EXCEL.INI to the 'Fallback
	Files' section in STFSETUP.IN_. Your file should look like this:
	
	[Fallback Files]
	;note disk id is not really used.
	2, win.ini
	2, system.ini
	2, progman.ini
	2, excel.ini
	
	Last, you need to change the '[LGN Files]' section in
	STFSETUP.IN_ on the workstation setup disk. Again, following
	our Excel example, add a line for EXCEL.INI to the 'LGN
	Files' section in STFSETUP.IN_. Your file should look like
	this:
	
	[LGN Files]
	;note disk id is not really used.
	2, win.ini, RENAME=win.lgn
	2, system.ini, RENAME=system.lgn
	2, progman.ini, RENAME=progman.lgn
	2, excel.ini, RENAME=excel.lgn
	
	7.3  Additional Files
	
	There are times when it might be useful to have the
	workstation setup install more files than it normally would.
	For example, if you create an in-house network support
	document or cardfile you would like placed on each WinLogin
	workstation, you can add that file to the list of files the
	workstation setup will install. This list of files is in the
	'[ClientFiles]' section in STFSETUP.IN_ on the workstation
	setup disk.
	
	Be careful to format your new entry correctly. The best way
	to do this is to copy an existing line in the section and
	make changes to it rather than entering a new line. When you
	have pasted an existing line on the end of the [ClientFiles]
	list, change the file name to the one you wish to install,
	e.g. SUPPORT.CRD. Change the 'SIZE=' argument to the number
	of bytes in the file e.g. 1250. Your file should look like
	this:
	
	[ClientFiles]
	1, winlogin.exe, DATE=$(DATESTR), SIZE=32000
	1, wlcom.com, RENAME=win.com,BACKUP=w31.com,DATE=$(DATESTR), SIZE=5000
	1, wlmerge.dll, DATE=$(DATESTR),  SIZE=22000
	1, msinimrg.dll, DATE=$(DATESTR), SIZE=22000
	1, copymrg.dll, DATE=$(DATESTR),  SIZE=8000
	1, errmsg.dll, DATE=$(DATESTR),   SIZE=6000
	1, wldapi.dll, DATE=$(DATESTR),   SIZE=56000
	1, wldnet.dll, DATE=$(DATESTR),   SIZE=9000
	1, wluserfn.dll, DATE=$(DATESTR), SIZE=6000
	1, wlplatfn.dll, DATE=$(DATESTR), SIZE=6000
	1, jet.dll, DATE=$(DATESTR),      SIZE=190000
	1, winlogin.ini, DATE=$(DATESTR), SIZE=300
	1, winlogin.hlp, DATE=$(DATESTR), SIZE=11000
	1, SUPPORT.CRD, DATE=$(DATESTR), SIZE=1250
	
	Note: Never delete any of the files already in the client
	installation list.  Doing so may cause the WinLogin client
	to be improperly installed.
	
	8.0  Other Online Documents
	
	The following table describes other online documents that
	contain important information about WinLogin that is not
	included in the Microsoft WinLogin User's Guide or in online
	Help:
	
	Document      Contains
	
	README.WRI    Information about using WinLogin with a specific version
	             of your network, and information updated after the
	             administrator's guide was printed.
	
	CLIENT.WRI    Information about using WinLogin, for end users. You can
	             modify this template document as appropriate for your
	             end users.
	
	For further information about WinLogin, query on the
	following word in the Microsoft Knowledge Base:
	
	    WinLogin
	
	KBCategory: kbreadme kbnetwork kb3rdparty
	KBSubcategory: win31
	
	Additional query words: 1.00 1.0 3.10 3.1 LAN Manager novell network winlog LANMan
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbreadm win95 
	Technology        : kbWin3xSearch kbWinLoginSearch kbZNotKeyword3 kbWin310 kbWin311 kbWinLogin100
	Version           : :1.0,3.1,3.11
	Issue type        : kbinfo
	
	=============================================================================
	
