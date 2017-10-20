---
layout: page
title: "Q107245: Microsoft Systems Management Server README.TXT (Part 2 of 2)"
permalink: /kb/107/Q107245/
---

## Q107245: Microsoft Systems Management Server README.TXT (Part 2 of 2)

{% raw %}

	Article: Q107245
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
	version 1.0 README.TXT file (part 2 of 2).
	
	MORE INFORMATION
	================
	
	20. Using Network Applications
	If a user starts an application shared on an SMS server and then leaves it
	unattended, the application may fail if the server disconnects the client
	while the application is left running unused. To prevent this problem, you
	can turn off the autodisconnect feature on the distribution servers for
	shared applications.
	
	If a client is configured to use some server applications (that use the
	MSAPPS directory) made available by SMS, and the client also has
	applications installed directly on it (not using SMS) that also use MSAPPS,
	the locally installed applications will not function properly if a Remove
	Package From Server job is used to remove the MSAPPS directory from the
	server. In this case, the client's references to the MSAPPS directory will
	then point to the non-existent server version.
	
	Be careful if your clients in a child site receive packages for shared
	applications from both their site and that site's parent site. If a client
	receives a package that uses MSAPPS from the client's site (a child site),
	a Registry key is created on the client that refers to the MSAPPS
	distributed by the child site. Later, if packages using MSAPPS are
	distributed from the parent site to the client, the MSAPPS Registry key is
	not changed, and still refers to the version from the child site.
	
	If, after that, the administrator decides to make the original MSAPPS
	package (from the child site) unavailable, the privileges on the MSAPPS
	Registry entry are set to "Deny." Any packages already distributed from the
	parent site that refer to MSAPPS will no longer work correctly. Also, any
	new packages installed will generate an error saying "MSAPPS is not
	installed. Would you like to continue anyway?"
	
	To solve the problem, be sure to delete any old program groups that include
	MSAPPS after they are no longer being used.
	
	Shared applications made available by SMS cannot support shared documents.
	A user running an application shared by SMS cannot use documents shared by
	SMS with that shared application. For example, suppose you have installed
	Microsoft Word for network sharing. If you also make a package of Word
	documents for a Share Package on Server job, users of the shared Microsoft
	Word will not be able to use the shared documents.
	
	You can use the RSAPPCTL.EXE utility to fix any corruptions or out-of-date
	problems with the database of shared applications. You may be directed to
	use this utility by an error message.
	
	This utility is located in the PSSTOOLS\platform.BIN directories (such as
	X86.BIN) on the SMS CD-ROM.
	
	Usage:  RSAPPCTL {/SELF} {/ALL} {/SITE:sitecode} {/SITESERVER:servername}
	_/SELF                  __Resets database for this site (but not child
	sites).
	_/ALL                   __Resets NAD for all child sites (but not this
	site).
	_/SITE:sitecode         __Resets NAD for the specified child site.
	_/SITESERVER:server     __Specifies this site's site server. Needed only if
	RSAPPCTL is not being
	run on the site server.
	
	You can use both the /SELF and /ALL options to do a total reset of the
	local site and all child sites.
	
	For Share Package On Server jobs that have target distribution servers
	running LAN Manager or Windows NT Server, the Despooler will create two
	shares when a nested share name and path is specified for the Share Name in
	the package's Setup Package For Sharing dialog box. 1) The Despooler uses
	the name at the beginning of the path to share that directory (using the
	directory name as the share name). For example, if you specified
	APPS\WIN\EXCEL, the Despooler will share the APPS directory as the APPS
	share. 2) The Despooler then shares the last directory in the path as an
	administrative share. This share is used by Program Group Control to
	connect to the package server so that it can start a network application
	from that share. For example, if you specified APPS\WIN\EXCEL, the
	Despooler will share the EXCEL directory as the EXCEL$ share.
	
	The following section includes more details about troubleshooting if users
	have problems running shared applications made available by SMS.
	
	21. Troubleshooting Network Applications
	Log File First, examine the SMSLOG.TXT file in the Windows directory. When
	the SMSLOG.TXT file reaches 8 kilobytes, it is renamed to SMSLOG.BAK and a
	new SMSLOG.TXT is started. The format of a message is either:
	
	[mm/dd/yy hh:mm:ss] Program Group Control ==> message.
	or
	[mm/dd/yy hh:mm:ss] Program Group Control ==> An Application specific error
	occurred: Program
	Title: message.
	
	If a message includes "An Application specific error occurred: Program
	Title: message." and Program Title is the name of a proxy application:
	
	Message                                 Description
	SmsProxy is unable to
	start the SMS application APPSTART      APPSTART.EXE is missing from the
	                                       Windows directory or else it cannot
	                                       be started due to insufficient
	                                       resources.
	Proxy application has been moved
	from the SMSPROXY directory.            A proxy application must reside in
	                                       the MS\SMS\SMSPROXY\appname
	                                       directory.
	Missing or invalid registry key for
	shared application.                     The SMS registry key for the
	                                       application is missing or it
	                                       doesn't contain proper subkeys.
	No extension on filename.               A proxy application must have an
	                                       EXE file extension.
	Memory allocation failure.              The system is low on memory
	                                       resources.
	
	If a message includes "An Application specific error occurred: Program
	Title: message." and Program Title is SMS Application Deinstallation:
	
	Message                                 Description
	Invalid command line;
	Usage: DEINSTAL /switch                 DEINSTAL was invoked with an
	                                       invalid  command line argument.
	Memory allocation failure.              The system is low on memory
	                                       resources.
	Failed to read or write registry.       Missing registry key
	                                       SMS\Applications\appname
	                                         \DISABLE_ENABLE.
	Deinstall program must be run
	from SMSPROXY\regName directory.        A deinstall application must reside
	                                       in the MS\SMS\SMSPROXY\appname
	                                       directory.
	
	If a message includes "An Application specific error occurred: Program
	Title: message." and Program Title is SMSSETUP:
	
	Message                                 Description
	Cannot connect to an MSAPPS server.     One of the following occurred:
	
	                                       The MSAPPS package was not defined.
	                                       The MSAPPS package was not placed
	                                       in a program group.
	                                       The user doesn't belong to any user
	                                       group defined for the package.
	                                       The MSAPPS package was not sent as
	                                       a Share Package On Server job.
	                                       The MSAPPS package has not yet
	                                       completed. When it completes, the
	                                       user will have to rerun Program
	                                       Group Control.
	                                       Network failure while connecting
	                                       to the MSAPPS distribution server.
	
	MSAPPS server list is empty.
	SMS package has not been
	successfully distributed.               See preceding explanation.
	
	Cannot open the STF file.               The STF file specified on the
	                                       SMSSETUP command line cannot be
	                                       opened in the package distribution
	                                       directory.
	Cannot open the temporary STF file.     The ~SETUP~.STF file in the Windows
	                                       directory on the client cannot be
	                                       opened.
	Cannot open the INF file.               The SETUP.INF file in the package
	                                       distribution directory cannot
	                                       be opened.
	Cannot open the temporary INF file.     The ~SETUP~.INF file in the Windows
	                                       directory on the client cannot be
	                                       opened.
	ACME Setup did not complete.
	Likely cause is insufficient disk
	space on drive containing the
	Windows directory.                      The application's setup program did
	                                       not complete. No indication of what
	                                       caused this failure was reported by
	                                       the setup program. One likely cause
	                                       is insufficient space on the drive
	                                       containing the Windows directory.
	
	Cannot access SETUP.EXE on
	application server.                     The setup program on the package
	                                       distribution server cannot be
	                                       accessed. Check the directory
	                                       permissions.
	ACME Setup failed to start.             The setup program failed to start,
	                                       probably due to insufficient
	                                       memory.
	Cannot open local STF file.             After setup has succeeded, a
	                                       SETUP.STF file is installed in the
	                                       application's directory on the
	                                       client. SMSSETUP has detected that
	                                       this file is missing.
	Corrupted STF file.                     SMSSETUP found something corrupted
	                                       in the STF file.
	Failed to copy the SMSPROXY
	directory.                              An error occurred while copying the
	                                       SMSPROXY directory from the package
	                                       distribution directory to the
	                                       client's MS\SMSSMSPROXY directory.
	Package directory doesn't contain
	an SMSPROXY subdirectory.               The package distribution directory
	                                       must contain an SMSPROXY directory.
	User aborted installation because
	application is already installed locally.       SMSSETUP allows a user to
	                                       cancel setup if the application is
	                                       already installed locally.
	Failed to load SMS_ACME.DLL.            The SMSPROXY directory is missing
	                                       or the SMS_ACME.DLL file is missing
	                                       from the SMSPROXY directory, or
	                                       some other failure prevented it
	                                       from being successfully loaded.
	Check the directory permissions.
	Failed to find 'SmsAcmeRegProc'
	in SMS_ACME.DLL.                        The SMS_ACME.DLL must contain the
	                                       SmsAcmeRegProc function.
	SMSSETUP: invalid command line.         The SMSSETUP command line was
	                                       invalid.
	WNetGetConnection failed.               Unable to translate a drive
	                                       connection to a UNC connection.
	Deinstall program failed to save
	OLE registry entries.                   The deinstall program failed to
	                                       run. It is named in the registry
	                                       key HKEY_CLASSES_ROOT
	                                       \SMS\Applications
	                                         \appname\Info\Deinstall_App.
	
	22. Installing Applications on Clients
	
	When you use a PDF to create a job to install an application on
	workstations with a Run Command on Workstation job, you must copy the
	appropriate SMSPROXY directory to the package source directory before
	distributing the package to workstations. You can find the SMSPROXY
	directory in the PRIMSITE.SRC\IMPORT.SRC\appName directory. Copying the
	SMSPROXY directory to the package source directory is required for both
	Share Package on Server and Run Command on Workstation jobs.
	
	If a computer is running a shared copy of an application and you want to
	install a local copy of that application on that computer using a PDF, you
	must first remove the shared copy of the application. The deinstall program
	for a shared application is located in a subdirectory of the SMSPROXY
	directory. For example, the deinstallation program for Microsoft Word is
	MS\SMS\SMSPROXY\WINWORD\DEINSTAL.EXE.
	
	23. Notes on Installing Specific Applications
	Microsoft Office When you create the admin installation for Microsoft
	Office version 4.2c or 4.3c, you may see a message stating "Setup cannot
	update the Proofing Tools in the shared location because the lex formats
	are incompatible." If you see this message, you can ignore it and continue
	with the installation. All components of Microsoft Office will work
	correctly.
	
	Do not remove any program items from a Microsoft Office program group,
	either before or after the package has been distributed. For example, don't
	remove the PowerPoint program item from the Office program group.
	Otherwise, OLE functions and Registry entries will not work properly.
	
	If you set up Microsoft Office version 4.3 or Microsoft(r) Access(r) version
	2.0 as shared applications, the package source directory for the
	application allows users both Read and Write permissions. This allows users
	to have the necessary write access to the Microsoft Access file
	ACS200\WORKDIR\SYSTEM.MDA. These access permissions are set in the
	ACS200.PDF and OFP43_.PDF files. To protect other files in the package
	directory from being modified by clients, set the permissions to read-only
	on each distribution server after the package has been distributed. For
	further information, see the Microsoft Access README file.
	
	When you set up Microsoft Office as a shared application, clients
	configured to use the shared copy of Microsoft Office cannot be configured
	to use separate shared copies of any of the Office applications. Do not
	assign a group the rights to use both a shared version of Microsoft Office,
	and shared copies of any of the following individual applications:
	Microsoft Word, Microsoft Excel, Microsoft PowerPoint, and Microsoft
	Access.
	
	When you set up Microsoft Office as a shared application, you must set the
	program items for the MSAPPS applets within the Office package (such as
	Graph AutoConvert and Microsoft Query) to use the same Drive Mode as the
	MSAPPS package. For example, if the Microsoft Query program item in the
	MSAPPS package has Drive Mode: Runs With UNC Name, then the Microsoft Query
	program item in the Office package must also use the Drive Mode: Runs With
	UNC Name setting. Note that if you choose to use a specified drive, you can
	specify different drives for the corresponding program items in the Office
	package and the MSAPPS package.
	
	Microsoft Word
	When you set up Microsoft Word version 6.0 as a shared application, it may
	produce an error when users of clients running Windows NT version 3.1 exit
	the application. This does not happen on other types of clients.
	
	Microsoft Access
	If you set up Microsoft Office version 4.3 or Microsoft Access version 2.0
	as shared applications, the package source directory for the application
	allows users both Read and Write permissions. This allows users to have the
	necessary write access to the Microsoft Access file
	ACS200\WORKDIR\SYSTEM.MDA. These access permissions are set in the
	ACS200.PDF and OFP43_.PDF files. To protect other files in the package
	directory from being modified by clients, set the permissions to read-only
	on each distribution server after the package has been distributed. For
	further information, see the Microsoft Access README file.
	
	Microsoft Works
	When you use SMS to install Microsoft Works on a server as a shared
	application, users will not be able to access the Works tutorial.
	
	24. Using SMS to Install Operating Systems on Clients
	When using SMS to installing Windows NT on a client previously running MS-
	DOS, Windows, or Windows for Workgroups, you should take the following
	steps:
	  a) Copy the UNATTEND.SCR file from the LOGON.SRV\MSTEST directory to the
	package source directory.
	  b) Edit the UNATTEND.SCR file to make changes as needed for unattended
	installation of the operating system.
	  c) If the target clients run just MS-DOS, and not Windows or Windows for
	Workgroups, you must also copy the DOSNTUPG.EXE, NAMECHGR.EXE, and
	AIDDOSNT.BAT files from LOGON.SRV\MSTEST to the package source directory.
	
	Use the Windows NT Server Manager to add the computer name of the computer
	on which Windows NT is being installed to the domain.
	
	You can upgrade a group of computers from MS-DOS, Windows, or Windows for
	Workgroups to Windows NT with a single job. When you do so, all computers
	being upgraded will use a single UNATTEND.SCR file. UNATTEND.SCR includes
	data about the operating system and network card type and card parameters,
	so if you want the setup to be automated, then each job must target only
	computers with identical operating systems and network card setup data. You
	can query the SMS computer database to find computers with identical
	configurations. Computers targeted by a single upgrade job must also all
	join the same domain or workgroup, as this is specified in UNATTEND.SCR as
	well.
	
	The default UNATTEND.SCR file documents the settings you need to make in
	this file. Examine it if you want more information. It is in the
	LOGON.SRV\MSTEST directory.
	
	You cannot use an automated setup to upgrade a NetWare client to Windows
	for Workgroups. These upgrades must be done as manual setups.
	
	On TCP/IP networks, when performing an automated upgrade of a client to
	Windows NT version 3.5 from a previous version of Windows NT, you must
	specify an upgrade script. Do this by modifying the command line for the
	"Automated Upgrade for (all platforms) NT Client."  In this command line,
	specify the upgrade script by adding a colon and the name of the script to
	the /U option at the end of the command line. The following is an example
	of the command line after you make these changes:
	  NTENCAP /NTW WINNT32.EXE /U:NTUPGRAD.SCR
	
	The upgrade script you specify must include the !UpgradeEnableDhcp setting,
	with either yes or no as the value. This setting indicates whether this
	client will have its TCP/IP address dynamically allocated by DHCP. The
	NTUPGRAD.SCR file in the LOGON.SRV\MSTEST is an example script file you can
	use for this.
	
	25. Remote Troubleshooting Utilities
	The Remote Chat utility is not included in this version of SMS.
	
	For remote troubleshooting of NetWare clients using IPX/SPX and running
	Windows 3.x, the client
	must have the following files:
	NWNETAPI.DLL
	NWCALLS.DLL
	NWIPXSPX.DLL
	
	These files are normally provided with your NetWare client software. They
	are also available from Novell or public forums such as CompuServe.
	
	Without these files, NetWare clients running Windows 3.x will display the
	following message when the user starts Remote Control from the SMS Client
	program group:
	"Remote Control Agent cannot load idis_ipx.dll."
	
	If you see this message, you must ensure that the listed files are
	installed on the client. Note that NetWare clients running only MS-DOS do
	not require these three files.
	
	Note that NWCALLS.DLL and NWIPXSPX.DLL are normally installed on a NetWare
	client running Windows 3.x. Most likely, the NWNETAPI.DLL will be missing
	from the client.
	
	You can easily use SMS to install the NWNETAPI.DLL file on NetWare clients.
	Simply place the the file in the SITE.SRV\MAINCFG.BOX\CLIENT.SRC\X86.BIN
	directory on the site server. The Maintenance Manager will replicate the
	file to all NetWare logon servers. The file will be installed to the
	MS\SMS\BIN directory of all NetWare clients when users run the Client Setup
	program (either manually or through their login script).
	
	When mapping TCP/IP addresses in the LMHOSTS file so that you can use
	remote troubleshooting utilities on clients over TCP/IP WAN links, the
	following syntax is correct.
	
	On the server, each line should start with a client's IP address, followed
	by a space and a double-quotation mark. Immediately after the quotation
	mark should be the the client's computer name. The 16th character after the
	start of the client's computer name should be "C" to enable
	remote control, or "E" to enable File Transfer. Follow the C or E with
	another quotation mark. Following is an example to enable remote control of
	a client.
	
	11.103.38.100  "myclient       C"
	
	On the client, each line should start with a server's IP address, followed
	by a space and a double-quotation mark. Immediately after the quotation
	mark should be the the server's computer name. The 16th character after the
	start of the server's computer name should be "D" to enable
	remote control, or an "F" to enable File Transfer. Follow the D or F with
	another quotation mark.
	
	These instructions replace the instructions on page 393 of the Microsoft
	Systems Management Server
	Administrator's Guide.
	
	For remote troubleshooting of Windows for Workgroups clients using the
	TCP/IP protocol, the client must be running the Microsoft TCP/IP-32 version
	of TCP/IP. Previous versions of TCP/IP shipped with Windows for Workgroups
	are not supported by SMS for remote troubleshooting.
	
	For remote troubleshooting of clients running MS-DOS that use LAN Manager
	version 2.2c client software and the TCP/IP protocol, the client must be
	running the latest version of the TCP/IP protocol, provided with LAN
	Manager version 2.2c. Previous versions of TCP/IP shipped with
	previous versions of LAN Manager are not supported by SMS for remote
	troubleshooting.
	
	If you reconfigure a client, changing the Lana number of the protocol used
	for Remote Control and other remote troubleshooting utilities on the
	client, you must specify the new Lana number the
	next time the client runs WUSER. For example, if the client previously used
	Lana number 2 for Remote Control, and you reconfigure the client so that
	the protocol previously represented by Lana
	number 2 is Lana number 1, you should specify wuser /l1 the next time you
	start WUSER. Otherwise, you will see the error message "Unable to get
	workstation name. Used Lana:2"
	
	When you are using Remote Control on a client, while in the Quick Viewer
	window you may start seeing that the keys you press are preceded with a ^
	on screen. (For example, if you press the "k" key a "^K" appears in the
	Quick Viewer screen.) This also prevents the ENTER key from working in the
	Quick Viewer window. To correct this problem, press the CTRL key once. You
	can prevent this problem from happening by not using CTRL+ESC to use the
	Task List while you have a Quick Viewer window open.
	
	26. Network Monitor
	Network Monitor Hardware Compatibility
	
	The following network cards have been tested and have passed compatibility
	testing with Microsoft Network Monitor.
	
	We have not tested every computer and/or device in all possible
	configurations.
	
	X86     MIPS    Alpha   Network Adapter
	X       X       X       3Com(r) 3C503 EtherLink II(r) (coax and TP)
	X       X       X       3Com 3C503/16 EtherLink(r) 11/16 (coax and TP)
	X       X               3Com 3C507 EtherLink 16 (coax and TP)
	X       X       X       3Com 3C509 EtherLink III Parallel Tasking Adapter -
	                       - ISA (coax, TP and combo)
	X                       3Com 3C523 EtherLink/MC (coax and TP)
	X                       3Com 3C529 EtherLink III Parallel Tasking Adapter -
	                       - MCA (coax and TP)
	X       X       X       3Com 3C579 EtherLink Parallel Tasking Adapter --
	                       EISA (coax and TP)
	X                       3Com 3C770 FDDILink-F for Optical, UTP and STP
	X       X       X       COMPAQ(r) NetFlex-2 ENET -- TR Controller
	X       X       X       COMPAQ NetFlex-2 TR Controller
	X       X       X       COMPAQ NetFlex-2 DualPort ENET Controller
	X       X       X       DEC(TM) DE201 EtherWORKS Turbo/TP
	X                       Madge Smart 16/4 EISA Ringnode
	       X               National Semiconductor DP83932 (SONIC) Motherboard
	                       Ethernet Controller on MIPS(r) ARC/R4000 systems
	X       X       X       Novell/Eagle Technology NE2000
	X       X       X       Novell/Eagle Technology NE3200
	       X               Sonic Ethernet Card
	X                       Thomas-Conrad TC4046 MCA Token Ring Adapter
	X                       Ungermann-Bass(r) NIUps/EOTP
	X                       Xircom Corporate Series CreditCard Ethernet Adapter
	X                       Xircom Pocket Ethernet III Adapter
	
	Technical Notes
	The Windows NT Driver Library is provided on the Windows NT CD-ROM in the
	DRVLIB directory, as well as several locations for electronic transmission.
	
	Please see the section at the end of this document for instructions on
	downloading and accessing Windows NT Driver Library drivers.
	
	Network Monitor can be used on Windows NT Server or Windows NT Workstation
	version 3.1 (Service Pack 2 applied) to trace an established RAS
	conversation. Once the Microsoft Remote Access Service
	(RAS) is loaded on a computer running Windows NT Server version 3.1, typing
	net config rdr from the MS-DOS prompt will show RAS bindings, depending on
	what protocols are loaded.  For example, if NetBEUI is loaded and the RAS
	server is set for Dial in and Out, and there is only one computer
	running Windows NT version 3.1, the RAS binding could look like:
	
	nbf_RasHub04 (524153480001).
	
	Note what this "RasHub" binding is, because it will have to be added
	manually in the Windows NT Registry before you can use Network Monitor to
	capture over a RAS connection.
	
	The following example lists linkages to add for the above RasHub04 example
	to an 3Com Etherlink II network card.
	
	Under:
	HKEY_LOCAL_MACHINE
	
	Key Name:
	SYSTEM\CurrentControlSet\Services\BH\Linkages
	
	Double-click the existing lines, position the cursor after the existing
	path, and press ENTER so that you are positioned on the next line down (do
	not overwrite what is there already).
	
	Bind:
	\Device\ELNK31
	\Device\RasHub04
	
	Export:
	\Device\bh_ELNK31
	\Device\bh_RasHub04
	
	Route:
	"ELNK3" "ELNK31"
	"RasHub"  "RasHub04"
	
	When you restart Network Monitor, and then choose the Networks option from
	the Capture menu, an additional Local Network option appears in the Select
	Capture Network dialog box. The Current Address listing for this option
	matches the number that is displayed when you run the NET CONFIG RDR
	command from the MS-DOS prompt. This is the network to select to trace the
	established RAS connection.
	
	For Windows for Workgroups Clients
	In PROTOCOL.INI under the [NETMON] section, any current entry in the
	Bindings section should be replaced by the ASYMAC driver/label.
	
	For example, for a 3Com Etherlink II, to change the Network Monitor binding
	from Etherlink II to the RAS connection, the Bindings entry in PROTOCOL.INI
	should be modified as follows:
	
	Bindings=MS$ELNKII
	should be changed to:
	Bindings=ASYMAC
	
	The following is the contents of a sample PROTOCOL.INI file on a Windows
	for Workgroups client:
	
	[network.setup]
	version=0x3110
	netcard=ms$elnkii,1,MS$ELNKII,2
	netcard=asymac,1,ASYMAC,2
	transport=ms$netbeui,NETBEUI
	transport=tcpip-32k,MSTCP32
	lana0=ms$elnkii,1,ms$netbeui
	lana1=asymac,1,ms$netbeui
	lana2=ms$elnkii,1,tcpip-32k
	
	[MS$ELNKII]
	INTERRUPT=5
	IOADDRESS=0x300
	TRANSCEIVER=external
	
	[ELNKII]
	Adapters=MS$ELNKII
	
	[NETMON]
	BINDINGS=MS$ELNKII,ASYMAC
	DRIVERNAME=NM$
	FORWARDFRAME=Yes
	BUFFERS=4
	USERNAME="mohak"
	COMPUTERNAME="MOHAKSTA2"
	
	[NETBEUI]
	BINDINGS=MS$ELNKII,ASYMAC
	LANABASE=0
	NETBIOSTIMEOUT=9000
	SESSIONS=10
	NCBS=32
	
	[ASYMAC]
	Ports=1
	MaxFrameSize=1514
	CompressSend=1
	CompressRecv=1
	FramesPerPort=2
	XonXoff=0
	CompressBCast=0
	
	[RASMAC]
	Adapters=ASYMAC
	
	[MSTCP32]
	BINDINGS=MS$ELNKII
	LANABASE=2
	
	[PROTMAN]
	PRIORITY=NETMON,
	
	Running Network Monitor on Token Ring Networks
	When capturing on token ring networks, the network adapter card on the
	computer running Network Monitor may need to have a maximum frame size set
	to the largest possible token ring frame (17K). Otherwise, frames exceeding
	this maximum size will be rejected by the network adapter card because
	the frame will not fit into the card's receive buffers.
	
	For example, the NetFlexTM network adapter card has a default maximum frame
	size of 4500 bytes and will drop any frame that exceeds this size. To a
	void losing frames, if your network supports frames of up to 17K, the
	maximum frame size of your network adapter card should be increased to
	this size.
	
	If you install Network Monitor independent of SMS setup, and your are
	connected to a token ring network, you may need to copy a new NDIS.SYS
	file. This file can be found in the WFW\DISK1\DRVR.NT directory on the SMS
	CD-ROM. Using a new version of this file enables token ring network adapter
	cards to reset properly after experiencing a Ring Error while capturing.
	Failure to use the correct driver can cause the system to hang.
	
	Note that modifying the network adapter card's maximum frame size setting
	decreases the number of receive buffers available, and on a busy network,
	frames may be dropped due to a lack of receive buffers. If your network
	adapter card supports increasing the number of receive buffers, do this to
	minimize the number of frames that are dropped because of increased buffer
	size.
	
	The File Open and File Save dialog boxes allow you to associate comments
	with a capture file or to display such comments. If a UNC path (for example
	\\MYCOMP\MYFILE) is displayed in these dialog boxes, an installation of
	Network Monitor running on a Windows for Workgroups computer will not
	display comments associated with the displayed filename. If you display the
	drive letter associated with the UNC path, the comments are available. In
	addition, on computers running Windows NT, the comments are displayed.
	
	On some Windows for Workgroups systems, because of memory resources used by
	Network Monitor, you may encounter problems running Network Monitor and
	other Windows applications at the same time. Therefore, you should always
	close all other Windows applications before running Network Monitor on a
	client running Windows for Workgroups.
	
	In addition, after using Network Monitor to capture on a computer running
	Windows for Workgroups, you may be unable to open other Windows
	applications. To remedy this, save the current capture, and then exit
	Network Monitor.
	
	Running Network Monitor on Clients Running Windows for Workgroups The beta
	3 release of Network Monitor used 3-character names to identify TCP flags
	in the Summary pane. In the released product, these 3-character names have
	been replaced by the first character in the flag name. The following table
	shows how the three character names map to the one-character names used in
	the released product:
	
	Flag                    Which was               Is now
	Urgent                  URG                     U
	Acknowledgment  ACK                     A
	Push                    PSH                     P
	Reset                   RES                     R
	Synchronize             SYN                     S
	Final                   FIN                     F
	
	Make sure that all adapter memory is excluded when using EMM386 on a
	Windows for Workgroups system. Failure to exclude this memory or other
	misconfigurations may cause Windows for Workgroups to hang. See the MS-DOS
	documentation on how to configure your EMM386 correctly.
	
	While two network interface cards cannot be used for capturing in a Windows
	for Workgroups system, you can alter which card is used for capturing. To
	change which card will be used for capturing, alter the BINDINGS= line in
	the [NETMON] section of the PROTOCOL.INI file to reflect the card to which
	you want Network Monitor to bind.
	
	README.TXT, a version of Network Monitor Release Notes more current than
	those contained in this Help file can be found in the Windows for
	Workgroups subtree on the SMS CD-ROM.
	
	27. Automatically Configure Workstation Logon Scripts
	In Windows NT and LAN Manager domains, the Automatically Configure
	Workstation Logon Scripts option modifies only the logon scripts for user
	accounts that have no existing logon script or have a logon script with a
	file extension. For example, if a user has a logon script specified as
	USER.BAT, the Site Configuration Manager will modify the script to include
	the SMSLS batch file. If a user has logon script as USER (instead of
	USER.BAT), Site Configuration Manager will not modify the script. If you
	want to set up a user account so that the SMSLS batch file is not added to
	it, you can specify a logon script with no extension for that user.
	
	28. Diskless Clients
	SMS does not support diskless clients nor computers that do not have a C
	drive.
	
	29. Backup and Restoration
	On page 682 of the SMS Administrator's Guide, it says that you must back up
	the SMS directory on the site server--this should say that you must back up
	the SMS root directory and its entire contents (all subdirectories and
	files).
	
	30. Miscellaneous Notes
	SMS requires that site servers run the final release of version 3.5 of
	Microsoft Windows NT Server. Also, SMS databases must be on servers running
	Windows NT 3.5 and Microsoft SQL Server 4.21A.
	
	Do not put custom files in the SITE.SRV\platform.BIN directory (such as the
	SITE.SRV\X86.BIN directory). This directory is purged every time the SMS
	software is upgraded.
	
	Upgrades of the SMS software on client computers will fail if any SMS
	software is running at the time of upgrade. If you put any SMS icons (such
	as WUSER.EXE) in a client's Startup group, you must stop these programs
	before upgrading the client.
	
	For clients with dual-boot systems, you must choose one of the operating
	systems on which to run SMS. SMS does not support the installation of SMS
	on both operating systems so that the user can switch back and forth
	repeatedly. This is because SMS must know which operating system is run by
	each client computer, so that the correct jobs can be sent to each client.
	If you have SMS installed on a dual-boot computer and want to change which
	operating system is supported by SMS, run UPGRADE.BAT on the operating
	system you want to switch to.
	
	31. Additional Online Documentation
	You can install an online version of the Microsoft Systems Management
	Server Administrator's Guide using the SMS Setup program. You can install
	the online version when you first install SMS. Or you can run SMS Setup
	after SMS has been installed use the Add Components option.
	
	Microsoft Systems Management Server Help (SMS.HLP) provides documentation
	for additional topics that are not covered in the Microsoft Systems
	Management Server Administrator's Guide. SMS Help contains these additional
	topics:
	
	Error Message Help for Program Group Control This topic discusses the error
	messages generated by Program Group Control and possible causes and
	solutions for those errors.
	
	32. SMS Administrator's Guide Errata The Helpdesk user rights template
	listed in Table 4.2 on page 137 is not included in this version of SMS.
	
	On page 188, text states that you can move Outboxes to a different drive or
	server. You cannot move Outboxes to another drive or server and you cannot
	rename them.
	
	Page 218 incorrectly states the location of the FILETOKN.EXE utility. This
	file is actually located in the platform.BIN directory.
	
	Page 218 of the documentation incorrectly states where the RUL2CFG.BAT file
	puts the .CFG files it creates. It actually puts these files into the the
	platform.BIN directories (such as X86.BIN).
	
	Page 219 of the Administrator's Guide states incorrectly which directory
	should be the package source directory for Audit 1.00. This package source
	directory should actually be PRIMSITE.SRV\AUDIT\PACKAGE.
	
	The instructions for modifying the LMHOSTS file (page 393) to enable the
	use of remote troubleshooting utilities on clients over TCP/IP WAN links
	are incorrect. The correct instructions are as follows:
	
	On the server, each line should start with a client's IP address, followed
	by the client's computer name. The 16th character after the start of the
	client's computer name should be "C" to enable remote control, or E to
	enable File Transfer.
	
	On the client, each line should start with a server's IP address, followed
	by the server's computer name. The 16th character after the start of the
	server's computer name should be "D" to enable remote control, or F to
	enable File Transfer.
	
	Pages 415-423 mention a Remote Chat utility. This utility is not included
	in this release of SMS.
	
	On page 557, the text incorrectly states that Client Setup may modify the
	TimeCriticalSection setting in SYSTEM.INI. Actually, Client Setup never
	modifies this value.
	
	On page 580, the text states that "On NetWare servers, the package
	directory is a subdirectory of the LOGON.SRV\PCMPKG.SRC directory under the
	server's SMS_SHR share." The text should say "...the LOGON.SRV\PCMPKG.SRC
	directory on the volume containing the SMS logon server components."
	
	On page 605, in Table D.3, the list of command lines to use to upgrade to
	Windows NT Workstation or Windows NT Server is incorrect. The correct list
	is as follows:
	  Automated Upgrade of (x86) NT Client
	  Manual Upgrade of (x86) NT Client
	  Automated Upgrade of (Alpha) NT Client
	  Manual Upgrade of (Alpha) NT Client
	  Automated Upgrade of (MIPS) NT Client
	  Manual Upgrade of (MIPS) NT Client
	  Automated Upgrade of Win16 Client
	  Manual Upgrade of Win16 Client
	  Automated Upgrade of DOS Client
	  Manual Upgrade of DOS Client
	
	On page 606, steps 2c-2e state that they must be performed from a network
	client. Actually, these steps may also be performed from the server
	containing the package source directory itself.
	
	On page 682, the text states that you must back up the SMS directory on the
	site server. More specifically, you must back up the SMS root directory and
	its entire contents (all subdirectories and files).
	
	33. Using SMS with Other Language Versions of Windows NT
	If you have a site that contains a site server or logon servers that use a
	non-English language version of Windows NT Server, you must create the
	following user groups in the domains that contain those servers:
	1) Create an Administrators local group and add all members of the
	Administrators local group for the language for the non-English domain (for
	example, Administratoren for the German version of
	Windows NT Server) to the Administrators local group that you created.
	2) Create a Guests local group and add all members of the Guests local
	group for the language for the non-English domain (for example, Gaste for
	the German version of Windows NT Server) to the Guests local group that you
	created.
	3) Create a Users local group and add all members of the Users local group
	for the language for the non-English domain (for example, Benutzer for the
	German version of Windows NT Server) to the Users local group that you
	created.
	4) Create an Everyone local group, add all members of the Users local group
	for the language for the non-English domain (for example, Benutzer for the
	German version of Windows NT Server) to the Everyone local group that you
	created, and then add the Domain Guests for the language for the
	non-English domain (for example, Domanen Gaste for the German version of
	Windows NT Server).
	
	Note that the Site Configuration Manager uses the Administrators, Guests,
	Users, and Everyone groups to set permissions on the site server and logon
	servers. The Despooler also uses these groups to set permissions on the
	package shares for package distribution servers. Note that if the
	Despooler cannot set permissions for these groups, it will not install the
	files for the package.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	

{% endraw %}
