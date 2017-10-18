---
layout: page
title: "Q152841: Windows NT 4.0 Service Pack 3 Readme.txt File (40-bit)"
permalink: kb/152/Q152841/
---

## Q152841: Windows NT 4.0 Service Pack 3 Readme.txt File (40-bit)

	Article: Q152841
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP3
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP3 
	- Microsoft Windows NT Server version 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a copy of the information in the Windows NT 4.0 Service
	Pack 3 Readme.txt file (40-bit).
	
	MORE INFORMATION
	================
	
	======================================================================
	                 Microsoft Windows NT 4.0 Workstation
	                      and Windows NT 4.0 Server
	                     Service Pack 3  Readme File
	======================================================================
	 (c) Copyright Microsoft Corporation, 1997
	
	This document provides information about Microsoft Windows NT 4.0
	Workstation and Windows NT 4.0 Server Service Pack 3, as well as
	answers to questions you might have.
	
	--------
	Contents
	--------
	
	1.0  INTRODUCTION
	1.1  What's New in Service Pack 3
	1.2  Support for PowerPC Platform
	1.3  Downloading and Extracting the Service Pack
	
	2.0  INSTALLATION INSTRUCTIONS FOR WINDOWS NT 4.0 SERVICE PACK 3
	2.1  Before You Install the Service Pack
	2.2  Installing the Service Pack
	2.3  Service Pack Uninstall
	
	3.0  USER NOTES
	3.1  Emergency Repair Disk
	3.2  Adding New Components to the System
	3.3  Installing Symbol Files from the Compact Disc
	3.4  Remote Access Service PPP CHAP MD5 Authenticator Support
	3.5  Microsoft DHCP Server
	3.6  Unencrypted Passwords No Longer Sent by Default
	3.7  Hardware Compatibility with Windows NT 4.0
	
	4.0  LIST OF BUGS FIXED IN WINDOWS NT 4.0 SERVICE PACK 3
	
	5.0  ADDITIONAL FIXES AND WORK-AROUNDS
	5.1  Tape Drive Not Recognized by Windows NT
	5.2  File Sharing Problems with Windows 95
	5.3  Reinstalling Hilgraeve HyperTerminal Private Edition
	5.4  Restoring Active Files and the Registry from Tape
	5.5  LPR Printing
	5.6  Updating Audio Drivers
	
	6.0  NOTES FOR USERS OF THE 128-BIT VERSION OF WINDOWS NT 4.0
	
	7.0  HOW TO OBTAIN THE NORTH AMERICAN (128-BIT) VERSION OF
	    SERVICE PACK 3
	
	1.0  INTRODUCTION
	-----------------
	Service Pack 3 for Microsoft Windows NT 4.0 is easy to install from
	within Windows NT and changes only those files that were originally
	set up on the Windows NT Workstation or Windows NT Server system.
	Service Pack releases are cumulative: they contain all previous fixes
	and any new fixes made to the system.
	
	1.1  What's New in Service Pack 3
	---------------------------------
	RPC Transport
	
	This service pack includes new versions of the remote procedure call
	(RPC) run-time dynamic-link library (DLL) and the RPC subsystem
	service (Rpcss.exe). These changes provide enhanced support for RPC
	message queuing, which is a feature of the upcoming Microsoft Message
	Queue Server (MSMQ). In order to use message queuing in an RPC
	client/server application on Windows NT 4.0, you must have Service
	Pack 3 installed on both the client machine and the server machine.
	You also need Beta 2 or later of MSMQ installed on both the client
	machine and the server machine.
	
	If you are developing RPC applications that support MSMQ, you need
	the new RPC run-time DLL, the new RPC subsystem service, and the new
	RPC header files and Microsoft Interface Definition Language (MIDL)
	compiler (available in the Win32 Software Development Kit). Also,
	RPC applications must support message queuing in order to use the
	following new features:
	
	The MIDL [message] attribute.
	
	The ncadg_mq protocol sequence.
	
	The RPC_C_MQ_* endpoint flags in the RPC_POLICY data structure.
	
	The RpcBindingInqOption and RpcBindingSetOption functions.
	
	For more information on using message queuing in your RPC
	applications, see RPC Message Queuing in the Service Pack 3 SDK
	Help file (see "Win32 APIs and SDK for Service Pack 3" later in
	this file), or refer to the documentation in the upcoming MSMQ SDK.
	
	CryptoAPI 2.0
	
	The Microsoft Cryptography application programming interface
	(CryptoAPI) provides developers with core cryptographic and
	certificate functions. CryptoAPI 1.0 supports public-key and
	symmetric-key operations, such as key generation, key management, key
	exchange, encryption, decryption, hashing, digital signatures, and
	verification of signatures. CryptoAPI 2.0 (the upgrade contained in
	this service pack) includes this core cryptographic functionality as
	well as certificate-based functionality. Developers can use
	certificates with these public-key operations and perform the
	necessary encapsulations and encoding to apply certificates within
	their applications.
	
	CryptoAPI 2.0 uses a service-provider model in which cryptography is
	provided by Cryptographic Service Providers (CSPs). This model allows
	developers to easily adapt their applications to evolving
	cryptographic technologies and government export policies. Service
	Pack 3 provides one CSP (the Microsoft RSA Base Provider), which
	gives users and developers access to exportable cryptography.
	
	CryptoAPI 2.0 supports existing standards, such as X.509 v.3
	certificate formats, ASN.1 encoding, and both PKCS #7 and #10 for
	encapsulation. This allows applications using CryptoAPI to
	operate with other certificate-based systems that adhere to these
	standards.
	
	The release version of CryptoAPI 2.0 contains several updates to the
	developer's release version of September 1996, including both
	parameter changes and naming changes. These changes are reflected
	in the Crypt32.dll and Wincrypt.h files. Please consult the
	CryptoAPI 2.0 documentation for details.
	
	DirectX 3.0
	
	Service Pack 3 contains a complete software implementation of
	DirectX 3.0 as well as ongoing hardware support for the DirectDraw
	component of DirectX 3.0. This translates into the following major
	feature changes since the release of DirectX 2.0 as supported in
	Windows NT 4.0:
	
	DirectDraw
	Access to all 256 entries in the palette when in exclusive mode.
	
	DirectSound
	Software-based 3-D localization of audio (Direct3DSound APIs.)
	
	DirectInput
	COM interface supporting mouse and keyboard data with documentation
	and sample programs.
	
	DirectPlay
	IDirectPlayLobby, an interface that allows an external application
	to launch a DirectPlay 3.0 application and provide it with all
	information necessary to connect to a session. Internet TCP/IP
	service provider for multi-player applications over the Internet.
	
	Direct3D
	Software emulation for the Direct3D 3.0 API. (In Windows NT 4.0, we
	provide a beta version of the software drivers for Direct3D 2.0.)
	
	ODBC 3.0
	
	Service Pack 3 includes the latest version of Microsoft Open
	Database Connectivity (ODBC) API. ODBC 3.0 provides an updated ODBC
	Control Panel and an ODBC Administrator interface that uses tabbed
	controls and provides more information about the ODBC components
	installed and in use on your system. This updated version of ODBC
	also introduces the concept of a file data source that can be shared
	or placed on a central server. With the appropriate drivers
	installed, ODBC 3.0 will let a user share a file data source or
	place a file data source on a central server.
	
	This new version of ODBC adheres to the standards of both the
	American National Standards Institute (ANSI) and the International
	Standards Organization (ISO). It is also backward compatible with
	previous versions of the ODBC API. For more information on ODBC
	3.0, refer to the documentation included with the ODBC 3.0 SDK.
	
	SMB Signing
	
	Service Pack 3 includes an updated version of the Server Message
	Block (SMB) authentication protocol, also known as the Common Internet
	File System (CIFS) file sharing protocol. The updated protocol has two
	main improvements: it supports mutual authentication, which closes a
	"man-in-the-middle" attack, and it supports message authentication,
	which prevents active message attacks. SMB signing provides this
	authentication by placing a digital security signature into each SMB,
	which is then verified by both the client and the server.
	
	In order to use SMB signing, you must either enable it or require it
	on both the client and the server. If SMB signing is enabled on a
	server, then clients that are also enabled for SMB signing will use
	the new protocol during all subsequent sessions and clients that are
	not enabled for SMB signing will use the older SMB protocol. If SMB
	signing is required on a server, then a client will not be able to
	establish a session unless it is enabled for SMB signing. SMB signing
	is disabled by default on a server system when you install the Service
	Pack; it is enabled by default on a workstation system when you apply
	the Service Pack. For information on how to configure SMB signing, go
	to the Microsoft Knowledge Base at http://www.microsoft.com/kb/ and
	search for the following article: Q161372 -- How to Enable SMB
	Signing in Service Pack 3.
	
	Note: SMB signing will not work with the direct host IPX protocol.
	This is because the direct host IPX protocol modifies SMBs in
	a way that is incompatible with signature-enabled SMBs. This
	incompatibility will be most obvious when you have direct host
	IPX clients and you require SMB signing on the server. Requiring
	SMB signatures on the server will cause the server to not bind
	to the direct host IPX interface, which will then force all
	connections to the server to be signed. If you disable the NWLink
	binding on the server then you will be able to use SMB signing.
	
	Also, SMB signing will impose a performance penalty on your
	system. Although it doesn't consume any more network bandwidth,
	it does use more CPU cycles on the client and server side.
	
	For more information on SMB signing, see the Microsoft FTP site at
	ftp://ftp.microsoft.com/developr/drg/CIFS/sec.htm. For general
	information on the CIFS protocol, see the Microsoft Web site at:
	
	  http://msdn.microsoft.com/workshop/networking/cifs/default.asp.
	
	Password Filtering
	
	This Service Pack includes a password filter (Passfilt.dll) that
	allows system administrators to increase password strength. This
	filter is copied to %system root%\SYSTEM32 when the Service Pack is
	installed on the system. The password filter should be copied to
	the primary domain controller for the domain, and to any backup
	domain controllers in the event the server role in the domain
	changes.
	
	To use the password filter, the following registry entry must exist.
	If it doesn't exist you must create it.
	
	WARNING: Using the registry editor incorrectly can cause serious,
	system-wide problems that may require you to reinstall Windows NT.
	Microsoft cannot guarantee that any problems resulting from the use
	of the registry editor can be solved. Use this tool at your own risk.
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Lsa
	
	Value: Notification Packages
	
	Type: REG_MULTI_SZ
	
	Data: Passfilt.dll
	
	Notification Packages contains a list of DLLs to be loaded and
	notified of password changes and password change requests. You can
	audit the loading of Notification Packages by setting the audit policy
	in User Manager. To do this, start User Manager and then click Audit
	on the Policies menu. In the Audit Policy dialog box click Audit
	These Events and then enable Restart, Shutdown, and System by
	selecting the Success and/or Failure check boxes.
	
	Passfilt.dll implements the following password policy:
	
	1. Passwords must be at least 6 characters long.
	
	2. Passwords must contain characters from at least 3 of the following
	  4 classes:
	
	   Class    Examples
	   -----    --------
	
	   English Upper Case Letters          A, B, C, ... Z
	   English Lower Case Letters          a, b, c, ... z
	   Westernized Arabic Numerals         0, 1, 2, ... 9
	   Non-alphanumeric characters  .,;:*&%!
	
	3. Passwords may not contain your user name or any part of your full
	  name.
	
	Custom password filter DLLs can be written to implement different
	password rules. For more information, see the Microsoft Knowledge Base
	article Q151082 Password Change Filtering & Notification in Windows
	NT. You can access the Knowledge Base at http://www.microsoft.com/kb/.
	
	Restricting Anonymous User Access
	
	Windows NT has a feature where anonymous logon users can list domain
	user names and enumerate share names. Some customers who want enhanced
	security have requested the ability to optionally restrict this
	functionality. Service Pack 3 provides a mechanism for administrators
	to restrict the ability for anonymous logon users (also known as NULL
	session connections) to list account names and enumerate share names.
	
	In addition, Service Pack 3 has a feature that restricts anonymous
	logon users from connecting to the registry remotely. After
	Service Pack 3 is installed, anonymous users cannot connect to the
	registry and cannot read or write any registry data. Also, a new
	built-in group known as Authenticated Users is created when you
	install Service Pack 3. The Authenticated Users group is
	similar to the Everyone group, except for one important difference:
	anonymous logon users (or NULL session connections) are never members
	of the Authenticated Users group.
	
	For more information on these new features, including information
	on configuring the registry to restrict anonymous user access to
	list domain user names and enumerate share names, go to the Microsoft
	Knowledge Base at http://www.microsoft.com/kb/ and search for the
	following article: Q143474.
	
	Using a System Key to Strongly Encrypt Password Information
	
	Service Pack 3 provides the capability to use strong encryption
	techniques to increase protection of account password information
	stored in the registry by the Security Account Manager (SAM).
	Windows NT stores user account information, including a derivative
	of the user account password, in a secure portion of the registry
	protected by access control and an obfuscation function. The
	account information in the registry is only accessible to members
	of the administrators group. Windows NT, like other operating
	systems, allows privileged users who are administrators access to
	all resources in the system. For users who require enhanced
	security, strong encryption of account password derivative
	information provides an additional level of security to prevent
	administrators from intentionally or unintentionally accessing
	password derivatives using registry programming interfaces.
	
	The strong encryption capability in Service Pack 3 is an optional
	feature. Strong encryption protects private account information by
	encrypting the password data using a 128-bit cryptographically
	random key, known as a password encryption key. Administrators may
	choose to implement strong encryption by defining a system key for
	Windows NT. To do this, administrators can run a utility called
	Syskey.exe. For more information on using Syskey.exe to configure
	a system key, go to the Microsoft Knowledge Base at
	http://www.microsoft.com/kb/ and search for the following article:
	Q143475.
	
	Win32 APIs and SDK for Service Pack 3
	
	Service Pack 3 includes several new APIs, including two Win32 APIs
	pertaining to spin counts on critical sections
	(InitializeCriticalSectionAndSpinCount() and
	SetCriticalSectionSpinCount()). To develop applications that take
	advantage of these new APIs, a Service Pack 3 SDK will be available
	on the Microsoft Web site at:
	
	http://msdn.microsoft.com/msdn/sdk
	
	1.2 Support for PowerPC Platform
	--------------------------------
	Microsoft is in the process of phasing out all Windows NT-related
	development for the PowerPC architecture. Because of this, there are
	no PowerPC files included in Service Pack 3 for Windows NT 4.0.
	Microsoft plans to continue providing technical support for customers
	who use Windows NT 4.0 on the PowerPC architecture.
	
	1.3 Downloading and Extracting the Service Pack
	-----------------------------------------------
	If you have downloaded this Service Pack from an FTP site or a Web
	site, you should read the release notes completely before you
	extract and install the Service Pack.
	
	After downloading the Service Pack, you will have a compressed
	executable file (for example, nt4sp3_i.exe) on your hard drive. To
	extract this file and begin the installation process, type
	nt4sp3_i.exe at the Command Prompt or double-click the file from
	NT Explorer. You can also extract the file into the current
	directory without launching the installation program by using
	the Command Prompt switch /x (for example, at the Command Prompt,
	type nt4sp3_i /x).
	
	2.0 INSTALLATION INSTRUCTIONS FOR WINDOWS NT 4.0 SERVICE PACK 3
	---------------------------------------------------------------
	
	2.1 Before You Install the Service Pack
	---------------------------------------
	Close all active debugging sessions before installing this
	Service Pack, otherwise the Update program will be unable to replace
	system files that are in use. If a file is in use when you install
	the Service Pack, a dialog box will appear in which you can choose to
	cancel the installation or skip the file copy. We recommend you choose
	to cancel the installation, and then run Update.exe again, being sure
	to select the uninstall option. Close all active sessions on the
	system, and then run Update.exe again to install the Service Pack.
	
	Also, to maximize the ability to recover the system in the event of
	installation failure, it is recommended that you do the following
	before installing the Service Pack:
	
	1. Update the system Emergency Repair disk using the Rdisk.exe
	  command with the /s option.
	2. Perform a full backup of the system, including the system registry
	  files.
	3. Disable any non-essential third-party drivers and/or services
	  (that is, drivers and services that are not required to boot
	  the system).
	4. Contact the original equipment manufacturer (OEM) that provided
	  the driver or service for the updated versions of the file(s).
	
	If you have installed a pre-release version of Microsoft
	Internet Explorer 4.0 prior to installing this Service Pack, you
	must remove the pre-release version of Internet Explorer 4.0 from
	your computer before you install the Service Pack. You may then
	reinstall Internet Explorer after successfully completing the
	Service Pack 3 installation. This will not be necessary with the
	retail release of Internet Explorer 4.0. Upon retail release,
	Microsoft Internet Explorer 4.0 will be made available to
	customers on the Microsoft Web site.
	
	Users of NEC Versa 6050 or 6200 Series notebook computers that
	shipped preinstalled with Windows NT version 4.0 should select
	"Yes" when Service Pack 3 update.exe prompts you to replace the
	hal.dll file.
	
	If you are running SystemSoft's CardWizard for Windows NT (support
	for PCMCIA) or PowerProfiler for Windows NT (support for Advanced
	Power Management), you must complete critical pre-installation
	procedures prior to installing this Service Pack.  Otherwise, your
	computer may no longer boot after installation of Service Pack 3.
	These procedures can be found in the product section at
	http://www.systemsoft.com.
	
	Advanced Power Management is not supported by Windows NT version 4.0.
	As a result, Microsoft recommends that you remove Advanced Power
	Management features before installing this Service Pack.
	
	2.2 Installing the Service Pack
	-------------------------------
	To install the Service Pack from the compact disc:
	
	1.  Insert the Service Pack compact disc into your CD-ROM drive.
	2.  If a Web page opens in your browser after you insert the
	   compact disc, click Windows NT Service Pack, and then
	   click Install Service Pack.
	3.  When you are asked whether you want to open the file
	   Spsetup.bat or save it to disk, click Open and then follow
	   the instructions that appear on the screen.
	
	   Note: To use the uninstall feature of this Service Pack,
	   you must create an Uninstall directory during the initial
	   installation. Also, if you are reapplying the Service
	   Pack after installing new software or hardware, you must
	   choose to create a new uninstall directory. To indicate
	   this, you must click "Yes, I want to create an Uninstall
	   directory" when you are prompted. For further information,
	   see Section 2.3 and 3.2.
	
	4.  If a Web page doesn't automatically open when you insert
	   the compact disc, open the Command Prompt window and change
	   the directory to the drive letter associated with the
	   CD-ROM drive.
	5.  Change the directory to \i386 or \ALPHA (depending
	   upon whether you have an Intel or ALPHA CPU), and type UPDATE.
	6.  Follow the instructions that appear on the screen.
	
	   Note: To use the uninstall feature of this Service Pack,
	   you must create an Uninstall directory during the initial
	   installation. Also, if you are reapplying the Service
	   Pack after installing new software or hardware, you must
	   choose to create a new uninstall directory. To indicate
	   this, you must click "Yes, I want to create an Uninstall
	   directory" when you are prompted. For further information,
	   see Section 2.3 and 3.2.
	
	To install the Service Pack from a network drive:
	
	1.  At the Command Prompt, type the command to connect
	   to the network drive which has the Service Pack
	   files.
	2.  Change the drive letter to that network drive.
	3.  Change directory to \i386 or \ALPHA (depending
	   upon whether you have an Intel or ALPHA CPU), and
	   then type UPDATE.
	4.  Follow the instructions that appear on the screen.
	
	   Note: We recommend that you choose to create an Uninstall
	   directory the first time you install the Service Pack. Also,
	   if you are reinstalling the Service Pack after installing new
	   software or hardware, you must choose to create a new
	   Uninstall directory. To indicate this, click "Yes, I want
	   to create an Uninstall directory" when you are prompted.
	   For further information, see Section 2.3 and 3.2.
	
	2.3  Service Pack Uninstall
	---------------------------
	This Service Pack contains an uninstall feature that you can use to
	restore your system to its previous bootable state.
	
	To enable the uninstall option, you must create an Uninstall
	directory the first time you run Update.exe. To do this, when
	prompted, click "Yes, I want to create an Uninstall directory." A
	subdirectory in your Windows NT directory will be created. This
	requires at least 60 MB of free space on the drive on which Windows
	NT is installed.
	
	To return your system to a previous bootable state, run Update.exe
	and click "Uninstall a previously installed Service Pack." After
	your system has restarted, the Update.exe program will replace the
	files updated by the Service Pack with the files from the previous
	installation and will return your registry settings to what they were
	before Service Pack 3 was installed.
	
	Note: If you install any applications that require Service Pack 3
	or have bug fixes contained in Service Pack 3, performing an uninstall
	could adversely affect those applications.
	
	Note: If you plan to install an older service pack after uninstalling
	Service Pack 3, take note of the following important precaution.
	Service Pack 3 modifies the Security Account Manager (SAM) database
	such that older versions of the SAMSRV.DLL and WINLOGON.EXE files no
	longer recognize the database structure.  Therefore, the uninstall
	process does not restore these files when uninstalling Service Pack 3.
	If you install a prior service pack (e.g., Service Pack 2) after
	uninstalling Service Pack 3, click "No" on the "Confirm File Replace"
	dialog boxes that ask if you wish to overwrite SAMSRV.DLL and
	WINLOGON.EXE.  If you overwrite the newer files with their older
	versions, you will be unable to logon to the system.
	
	3.0  USER NOTES
	---------------
	
	3.1 Emergency Repair Disk
	-------------------------
	If you use the Windows NT Emergency Repair Disk to repair your
	Windows NT system at some time after you install the
	Service Pack, you will need to reinstall the Service Pack after the
	repair is completed. This is because the Emergency Repair Disk
	repairs your system by restoring your original Windows NT 4.0 setup.
	After the repair has completed, simply follow the Installation
	Instructions (section 2.0) to reinstall the Service Pack. For more
	information on using the Windows NT Emergency Repair Disk utility,
	go to the Microsoft Knowledge Base at http://www.microsoft.com/kb/ 
	and search for the following article: Q146887.
	
	Note: To use the Emergency Repair Disk utility, you must have the
	updated version of Setupdd.sys. The updated version is contained in
	Service Pack 3. To update your version of Setupdd.sys, copy Setupdd.sys
	from the Service Pack to your setup boot disk #2. This will
	replace the older version of Setupdd.sys with the updated version.
	For more information, go to the Microsoft Knowledge Base at
	http://www.microsoft.com/kb/ and search for the following article:
	Q158423.
	
	3.2 Adding New Components to the System
	---------------------------------------
	If you change or add new software or hardware components to your
	system after you have installed the Service Pack, you need to install
	the Service Pack again. This is because the files taken from the
	original Windows NT 4.0 disk set may not be the same as the files on
	the Service Pack disk set. You cannot install new components directly
	from the Service Pack media (such as a new keyboard or printer
	driver). You must install new components from the original product
	media and then reinstall the Service Pack.
	
	For example, if you install the SNMP service after installing Service
	Pack 3, you will need to reinstall the Service Pack. If you fail to do
	so, you will receive the error "Entrypoint SnmpSvcGetEnterpriseOID
	could not be located in snmpapi.dll." This is because some of the
	files in the SNMP service have been updated in the Service Pack and
	you have a version mismatch. Reinstalling the Service Pack fixes the
	problem by copying the newer versions of the files to your system.
	
	Note: If you are reinstalling the Service Pack after
	installing new software or hardware, you must choose to create a
	new uninstall directory. To indicate this, click "Yes,
	I want to create an Uninstall directory" when you are prompted.
	
	3.3 Installing Symbol Files from the Compact Disc
	-------------------------------------------------
	Each program file in Windows NT has a corresponding symbol file that
	is used to find the cause of kernel STOP errors. To install the
	symbol files corresponding to the new binaries in Service Pack 3, do
	the following (assuming your CD-ROM drive is D:, your symbol files
	are located in the C:\WINNT\SYMBOLS directory, and you are installing
	the files for an x86 machine):
	
	XCOPY /S /U /D D:\SUPPORT\DEBUG\I386\SYMBOLS
	C:\WINNT\SYMBOLS
	
	This will copy the Service Pack 3 .dbg files over the existing
	versions of these files. The XCOPY command shown will copy only those
	.dbg files that are already installed (/U switch), and only those
	with a more recent time-date stamp (/D switch).
	
	For more information about debugging on Windows NT, see Chapter 39,
	"Windows NT Debugger," in the Microsoft Windows NT 4.0 Workstation
	Resource Kit.
	
	3.4 Remote Access Service PPP CHAP MD5 Authenticator Support
	------------------------------------------------------------
	Service Pack 3 provides limited PPP MD5-CHAP authenticator support to
	the Remote Access Server, which may be useful for small user-count
	environments using non-Microsoft PPP dial-in clients. The support is
	local to a given RAS server. The MD5 account information is stored in
	the RAS server registry and is not integrated or synchronized with
	the User Manager account database. Integrated support will appear in
	a later release, at which time this limited support may be removed.
	
	The local MD5-CHAP authenticator is enabled by creating the MD5 key
	below and adding "account" subkeys of the form [<domain>:]<user>,
	with subvalue "Pw" containing the account password. The ":" notation
	is used instead of "\" due to the syntax rules of registry keys. The
	'domain:' is optional and typically omitted. MD5-CHAP will not be
	negotiated (old behavior) when the MD5 key does not exist (default).
	
	HKLM\SYSTEM\CurrentControlSet\Services\RasMan\PPP\CHAP\MD5
	[<domain>:]<user>(REG_SZ)Pw
	
	3.5  Microsoft DHCP Server
	--------------------------
	This version of the Microsoft DHCP Server modifies the format of the
	DHCP database. You should back up the contents of your
	%windir%\system32\dhcp directory prior to upgrading.
	
	The address conflict detection feature can limit the throughput of
	Microsoft DHCP Server. For improved performance, reduce the number of
	ping retries in the Server Properties dialog box. This feature is
	disabled by default.
	
	Address conflicts are indicated by the replacement of the machine
	name with "BAD_ADDRESS."  If a Unique Identifier is specified for
	the address in the Client Properties dialog box, then the address was
	declined by the client. If the Unique Identifier is not specified,
	then the address conflict was detected by the DHCP Server.
	
	Microsoft DHCP Server can be configured to set a client's default
	gateway equal to its IP address. This causes the client to use the
	Address Resolution Protocol (ARP) for all IP addresses on the local
	subnet and is useful for routerless networks. To enable this feature
	for all clients in a scope, add the following value to the registry:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\DHCPServer
	\Subnets\a.b.c.d\SwitchedNetworkFlag=1 (REG_DWORD)
	
	This version of Microsoft DHCP Server supports BOOTP clients. BOOTP
	addresses currently must be reserved in advance by creating an IP
	address reservation. Future versions of Microsoft DHCP Server will
	be capable of leasing dynamic addresses to BOOTP clients.
	
	BOOTP clients that do not specify the parameter request list option
	( 55 ) can still retrieve the following options from this release of
	Microsoft DHCP Server:
	
	1 Subnet Mask
	3 Router
	5 Name Server
	12 Host Name
	15 Domain Name
	44 NetBIOS over TCP/IP Name Server
	45 NetBIOS over TCP/IP Datagram Distribution Server
	46 NetBIOS over TCP/IP Node Type
	47 NetBIOS over TCP/IP Scope
	48 X Window System Font Server
	49 X Window System Display Manager
	69 SMTP Server
	70 POP3 Server
	9 LPR Server
	17 Root Path
	42 NTP Servers
	4 Time Server
	
	In order to obtain other options, the client must specify option 55
	in the BOOTP request. DHCP Server will return the options in the
	order listed above. DHCP Server will return as many options as will
	fit in response packet.
	
	The activity log feature creates a text log file of all DHCP Server
	activity. The file is located at:
	
	%windir%\system32\dhcp\dhcpsrv.log
	
	When the activity log feature is enabled this file will be kept open
	by DHCP Server while the Server is running. To delete the activity
	log file you must first stop DHCP Server, using the command:
	
	NET STOP DHCPSERVER
	
	If available disk space becomes low, the activity log will pause
	until sufficient disk space becomes available.
	
	You must also stop and restart the DHCP Service after enabling or
	disabling Logging, Superscope, or DHCP Decline support.
	
	3.6 Unencrypted Passwords No Longer Sent by Default
	---------------------------------------------------
	Connecting to SMB servers (such as Samba and LAN Manager for UNIX)
	with an unencrypted (plain text) password fails after upgrading to
	Windows NT 4.0 Service Pack 3. This is because the SMB redirector
	in Service Pack 3 handles unencrypted passwords differently than
	previous versions of Windows NT. Beginning with Service Pack 3, the
	SMB redirector will not send an unencrypted password unless you add
	a registry entry to enable unencrypted passwords. For information
	on how to modify the registry, search the Microsoft Knowledge Base
	at http://www.microsoft.com/kb/ for the following article: Q166730.
	This article also contains information on how to change the
	Service Pack setup process so that unencrypted passwords are
	enabled after the Service Pack is installed.
	
	3.7 Hardware Compatibility with Windows NT 4.0
	----------------------------------------------
	For a current list of computers and other hardware peripherals
	supported by Windows NT 4.0, please see the Windows NT Hardware
	Compatibility List at http://www.microsoft.com/hwtest.
	
	4.0  LIST OF BUGS FIXED IN WINDOWS NT 4.0 SERVICE PACK 3
	--------------------------------------------------------
	All bug fixes contained in Service Pack 3 are listed below. You can
	query the Microsoft Knowledge Base to find an article about a
	specific bug by using the Qxxxxxx number that is assigned to the bug.
	The Microsoft Knowledge Base can be found on the Microsoft Web site
	at http://www.microsoft.com/kb/ 
	
	Service Pack 1
	--------------
	
	Q78303 Intermittent File Corruption Problem
	Q142653 STOP Message Occurs Calling GetThreadContext/SetThreadContext
	Q142654 Winsock Memory Access Violation in Ws2help.dll Or Msafd.dll
	Q142655 Stop Message Appears After Deleting ProductOption Registry Key
	Q142656 Internet Explorer 3.0 on RISC Computer Cannot Connect to Host
	Q142657 Data Corruption on Windows NT 4.0
	Q142658 Internet Information Server Runs Out of Memory
	Q149903 File Manager Performs a Move Instead of a Copy
	Q156832 STOP Message when IBM Warp Client Connects to Windows NT 4.0
	
	Service Pack 2
	--------------
	
	Q108261 Windows NT Hangs on Shutdown with Certain PCMCIA Devices
	Q140065 Multi-Processor Systems Randomly Restart or Stop Responding
	Q141375 Winstone 97 May Fail on Windows NT 4.0
	Q141708 RAS Client IP Addresses Not Returned to Static Address godot
	Q142634 Multiple Processes Are Able to Open the Same Winsock Port
	Q142641 Internet Server Unavailable Because of Malicious SYN Attacks
	Q142648 STOP 0x00000024 in Ntfs.sys
	Q142656 Internet Explorer 3.0 on RISC Computer Cannot Connect to Host
	Q142671 Backup Fails on Certain Directories Due to Lack of Permissions
	Q142675 CSNW Sends Packets Greater Than Negotiated Maximum Packet Size
	Q142686 First Line of Print Job Lost When Printing Using Lpdsvc
	Q142687 Windows NT 4.0 Not Able to Read Some Compact Discs
	Q142847 Bugcheck 0x1e Caused by Isotp.sys Driver
	
	
	Q142903 Windows NT Ndis.sys and Netflx3.sys Performance Improvement
	Q146336 Joystick in Windows NT 4.0 Does Not Work Properly
	Q147363 AlphaServer Hangs on Install of Windows NT Version 4.0
	Q147497 Matrox Video Driver May Fail on Alpha-based Computers
	Q147552 Backup Always Reports Time as PM
	Q148378 Setup of RAS with Multiple Modems Gives Slow Performance
	Q148525 Removable Media Does Not Eject if Formatted in NTFS
	Q148602 Running SNA Server 2.11 on the Windows NT 4.0
	Q150815 Windows NT May Fail to Boot on Toshiba Portable Computers
	Q153665 SPX Data Stream Type Header May Reset Unexpectedly
	Q154556 Delegation Requires a Stop and Restart of the DNS Server Service
	Q154620 Windows NT 4.0 DNS Server Loses the Forwarders Settings
	Q154784 Windows NT Operating System SNMP OID Incorrect
	Q155883 NT 4.0 Breaks SNA Server 2.x Server Communication Over IP
	Q156091 Access Violation with Long NDS Context in CSNW/GSNW
	Q156095 Replace Command with Space Character in the Path Does Not Work
	Q156276 Cmd.exe Does Not Support UNC Names as the Current Directory
	Q156324 Device Failure Message with Microchannel Network Adapter
	Q156520 Logon Validation Fails Using Domain Name Server (DNS)
	Q156578 Cannot Cancel Print Job on Windows NT 3.51 Shared Printer
	Q156735 WOW Applications Stack Fault When Launched by a Service
	Q156746 Print Jobs Are Deleted When Printer Is Resumed After Restart
	Q156750 AddGroupNameResponse Frame from WinNT May Cause WFWG to Hang
	Q156884 Problems Saving Event Viewer Log from Windows NT 4.0 to 3.51
	Q156958 Serial Service Won't Stop with Serial Printer Installed
	Q157279 Nwrdr.sys Fails Reading File with Execute Only Attribute
	Q157289 Memory Leak Using RegConnectRegistry API
	Q157494 PPC 4.0 Cirrus Driver Fails to Redraw & Fill Objects Correctly
	Q157621 Personal Groups Not Visible If %Systemroot% Is Read-Only
	Q157673 Policy Not Updated on Workstation
	Q158142 WM_DDE_EXECUTE API Causes a Memory Leak in the WOW Subsystem
	Q158387 RAS Server Cannot Use DHCP to Assign Addresses w/ PPTP Filtering
	Q158587 16-Bit Named Pipe File Open Leads to WOW Access Violation
	Q158682 Shortcuts Created Under NT 4.0 Resolve to UNC Paths
	Q158707 DDE Destroy Window Code May Stop 0x0000001e in Windows NT 4.0
	Q158796 Macintosh Clients Connected to WinNT Server Appear to Hang
	Q158981 IBM Thinkpads 760ED and 760ELD May Hang During Shutdown
	Q159053 NTFS Stream Limitation in Windows NT 4.0
	Q159066 A Client Crash May Prevent an NTFS Volume Dismount
	Q159071 NTFS Does Not Prevent a File Deletion During Rename
	Q159072 An Account That Still Has System Access May Be Deleted
	Q159073 Screen Corruption on Dell Laptops Using Cirrus Video
	Q159075 Compression Is Not Supported on Quantum 4000DLT
	Q159076 Windows NT 4.0 May Hang or Crash in Win32k.sys During Setup
	Q159085 Windows NT Kernel Crashes While Processing WM_NCCREATE
	Q159090 Delphi 2.00 and 2.01 Users Encounter Error 998
	Q159091 German Time Zone Results in Incorrect Log Times
	Q159092 Mouse Buttons Not Swapped on German Windows NT 4.0
	Q159093 Windows NT Muldiv() Function Returns Incorrect Value
	Q159095 STOP 0x0000001E in Win32k.sys When Exiting Applications
	Q159098 WinNT 4.0 Resource Kit Utility "Remote Console" Client Fails
	Q159105 Cannot Open Truncated File Names from Compact Discs
	Q159107 Access Violation in AddAtom Inside Kernel32.dll
	Q159108 SMP Full Duplex Adapter Configuration May Cause a Blue Screen
	Q159109 ExitWindowsEx Does Not Work With NEC Power Switch Service
	Q159110 CDFS Does Not Complete IRPs Correctly
	Q159111 Multiprocessor Computer Hangs Under Stress Using Halsp.dll
	Q159119 NTFS Generates Cross-Linked Files
	Q159127 Bugcheck in Windows NT While Running POSIX Applications
	Q159129 OpenGL Access Violation with Invalid OpenGL Context
	Q159137 Moving Files Can Corrupt NTFS Partition
	Q159141 CDFS Incorrectly Creates Short File Names for Some Files
	Q159144 Dongle May Not Function Under Windows NT 4.0
	Q159203 Unattended Install Prompts for New IP if Zero Is in Address
	Q159204 IoCompletionPort Causes Blue Screen Error
	Q159205 SFM File Type and Creator Properties Invalid
	Q159206 Reactivation of Paused Print Queues Deletes Print Jobs
	Q159309 Windows NT 4.0 RAS Not Releasing Static IP Addresses
	Q159352 RPC over NetBIOS Programs Can't Call from Server to RAS Client
	Q159447 Applications Testing for Directory Existence Fail
	Q159450 Second Recursive Query Sent from DNS Server Is Broken
	Q159594 Missing Eastern Europe FontSubstitutes in Registry
	Q159910 Memory Corruption on a Windows NT Alpha Platform
	Q159970 Slow List of Folders and Files with CSNW
	Q159971 SetTimer() API Causes Memory Leak in the WOW Subsystem
	Q159972 WinNT 4.0 May Not Return Valid Response for SMB Search Command
	Q160015 2D Vector Performance on WinNT 4.0 Slower Than on 3.51
	Q160055 Warning Event ID 4010 Generated on Windows NT LPD Server
	Q160189 CSNW Cannot See More Than 32 Volumes Per Server
	Q160190 RasSetEntryProperties Does Not Save a Full Path Script Name
	Q160354 Mouse and Keyboard Can Disappear when Replacing Drivers
	Q160370 Stop Screen 0x00000050 Caused by Fs_rec.sys
	Q160372 Intermittent File Corruption when Compiling on NTFS Partition
	Q160373 Adaptec Aic78xx Does Not Issue Multiple Tagged Commands
	Q160377 File Size Data Does Not Remain Consistent After Defrag on NTFS
	Q160392 Systems with 4 GB or More of RAM Cannot Boot Windows NT 4.0
	Q160398 Cannot Read Files Greater than 4 GB
	Q160404 Madge EISA Stops Responding on Alpha in Windows NT 4.0
	Q160405 Video Memory Not Correctly Detected on Dell Latitude Laptops
	Q160420 Changing Colors on Cirrus Logic Cards to 65k Can Cause Stop
	Q160459 DNS Delegations May Fail
	Q160470 Stop 0x0000000a IPX Sends Browser an Incomplete Datagram
	Q160493 NWLNKRIP Data Structures Corruption when Using a Demand Dial NIC
	Q160494 DNS Zone Transfer Fails After WINS Record Added
	Q160497 Cache File Entries Disappear
	Q160508 Unnecessary DNS Zone Transfers
	Q160518 Zone Files in Multiples of 4 KB May Cause Access Violation
	Q160583 Windows NT 4.0 with More Than 4 Processors May Stall & Reboot
	Q160601 Bad Parameters Sent to Win32k.sys May Cause Stop Message
	Q160603 No Output from DBMON Using OutputDebugString While Debugging
	Q160604 Access Violation in security!SspQueryContextAttributesW
	Q160606 Performance Enhancements for SQL Server Under Windows NT
	Q160610 READ_REGISTER_ULONG Doesn't Preserve ULONG Semantics on Alpha
	Q160649 STOP 0x0000000A in Ntoskrnl.exe at Logon to Windows NT 4.0
	Q160650 Blue Screen When Closing Kernel Mode Handles from User Mode
	Q160651 OpenGL May Cause an Exception 0xc0000090
	Q160653 NTFS Fails Assertion Under High Stress During Transfer
	Q160657 16-bit Version of Visual Basic 4 May Hang Windows NT 4.0
	Q160658 Stop C0000021A Using MoveFileEx MOVEFILE_DELAY_UNTIL_REBOOT
	Q160670 FPSCR is Not Being Saved Across Thread Context Switches
	Q160671 Stop 0x0000007F May Occur on Compaq SystemPro
	Q160678 Possible Access Violation in Win32k.sys Under High Stress
	Q160702 Event 2006 Errors in Xcopy from WinNT 4.0 to OS/2 3.0 Client
	Q160732 FIX: SQL Server 6.5 Service Pack 2 Fixlist (Part 2 of 2)
	Q160791 Excel Charts Lose Color When Pasted into Word
	Q160840 Sharing Violation When Accessing User Profiles
	Q160894 Incoming Fax Jobs Do Not Appear in Print Queue
	Q160964 0x0000001e When Printing Certain Documents from Windows NT 4.0
	Q161201 NTBackup.exe from WinNT 3.51 SP5 Causes Verify Errors
	Q161802 Stop 0x0000000A During Create File SMB
	Q162157 Cyberbit Unicode Font Does Not Return Correct Charset
	Q163055 DHCP Client May fail with NT 4.0 SP2 Multinetted DHCP Server
	Q163736 Access Violation in DNS Manager when deleting cached domain
	Q163772 Nested "for" Loops Using the '~' Operators Does not Work
	Q163773 Brief 3.0 in NTVDM Consumes 100% Processor
	Q163837 SNMP query to Windows NT returns same value for NTS and NTW
	
	Service Pack 3
	--------------
	
	Q135707 Programs Run at Priority Level 15 May Cause Computer to Hang
	Q139506 Connections to Share-Level Server May Fail
	Q140419 Name Release Notfications Not Sent to WINS on Shut Down
	Q140967 Changing Password in User Manager Does Not Permit Logon
	Q141189 BUG: Wrong Error Code on NetBIOS Call When Using NWNBLNK
	Q141381 Retail SP3 Clients Cannot Connect to SP3 Beta 1 Servers
	Q142047 Bad Network Packet May Cause Access Violation (AV) on DNS Server
	Q142609 Corruption Problem When Running DPMI Application
	Q143470 Run Logon Scripts Synchronously Not Applied to New Users
	Q143472 FPNW Blue Screens Accessing or Creating Folders with Long Paths
	Q143473 Unattended Setup Stops Unexpectedly
	Q147012 Activating /W Switch to Prevent Rebooting in WinNT
	Q149538 System Restarts Every 5 Hours if Workstation to Server Upgrade
	Q151926 Delayed WinLogon When Drive Mapped to Local Share
	Q153220 DHCP Manager Error "No More Data Is Available"
	Q154710 Cannot View Long File Names on Network in 16-Bit Programs
	Q154939 CreateQueueJobAndFile Fails w/ Queues Other Than Print Queue
	Q156410 STOP 0x1E or 0x50 Error on Multiprocessor DEC Alpha Computer
	Q157077 Netstat Slow to List Large Numbers of Connections
	Q157745 Command Extensions Cause Access Violation in Cmd.exe
	Q158433 Re-creating Admin Shares Causes Exception Error
	Q158548 Sysdiff Changes Dates on Files It Applies to WinNT
	Q159060 Mouse Cursor Freezes or Fails with Microsoft IntelliMouse
	Q159176 XADM: Store Stops Responding with High CPU Usage
	Q159330 Map.exe Does Not Set Environment Variables Correctly
	Q159998 Error Message: Error Access Is Denied
	Q160386 Incorrect MediaType Parameter on IBM PCMCIA Token Ring Card
	Q160405 Video Memory Not Correctly Detected on Dell Latitude Laptops
	Q160990 DHCP Server Offers Duplicate IP Addresses for Windows NT
	Q161038 Winsock Apps Fail on First Attempt at NetBIOS Name Resolution
	Q161368 Service Pack 2 May Cause Loss of Connectivity in Remote Access
	Q161432 WINS Static Entries Overwritten by Duplicate Group Names
	Q161644 STOP 0x0000000A Sfmsrv.sys When Copying File to Mac Volume
	Q161714 IPX Doesn't Function Correctly over Token Ring Source Routing
	Q161830 Message from Unix Using Smbclient w/ Long Username Crashes
	Q161838 Programs That Lock 0 Bytes at Byte 0 Lock Entire File
	Q162077 Stop: 0x0000000A when Selecting NDS Map Objects
	Q162096 SET: Drivers Fail to Load When I/O Address Is Above 0xFFF
	Q162189 Macintosh Clients May Hang Temporarily with Multiple Mac Volumes
	Q162396 Problem with DHCP Decline Feature in Service Pack 2
	Q162404 Service Pack 5 Breaks Microsoft Mail Shared Using FPNW
	Q162471 Windows NT 4.0 May Not Recognize SCSI Devices Using Nonzero LUNs
	Q162563 WINS Restore Fails on Windows NT Server 4.0
	Q162566 FPNW Causes Incomplete Display When Executed from Windows 95
	Q162567 Telnet to Port 135 Causes 100 Percent CPU Usage
	Q162616 Extra Form Feed with Passthrough Functions to Text Only Driver
	Q162657 Choosing Default Domain Name for RAS Client Authentication
	Q162774 Policy Editor Crashes When Using Large Custom ADM Files
	Q162775 Access Violation in SPOOLSS when Printing to a Serial Printer
	Q162778 WINS May Report Database Corruption w/ More Than 100 Owners
	Q162881 RIP Table Sent While Shutting Down When Silent RIP Set
	Q162926 STOP: 0x0x0000000A After Call to GlobalAddAtom()
	Q162927 Telnetting to Port 53 May Crash DNS Service
	Q163129 RAS Client Fails to Connect to Service Pack 2 Using NetBEUI
	Q163143 STOP: 0x0000001E with Status C000009A
	Q163196 New Windows NT PING.EXE Prevents Hanging Other TCP/IP Stacks
	Q163202 Limit of the Number of Simultaneously Open Root Storage Files
	Q163203 Remote Access Autodial Manager may fail for second user logon
	Q163213 WebSTONE Benchmark of IIS May Show Poor Results for MP Systems
	Q163214 RAS Script with Set IPADDR May Fail with 3Com Defender Add-on
	Q163261 DEC ALPHA WinNT 4.0 Servers w/ SP2 Fail to Lease DHCP Addresses
	Q163267 Delay While Establishing SPX II Connection
	Q163318 Helpfile Word Lists May Be Rebuilt After Daylight Savings Change
	Q163333 Autosynch Compatible COM Applications May Fail w/ FIFO Enabled
	Q163383 Failure to Obtain IP Address Via DHCP on Token Ring w/ SP2
	Q163431 16-Bit Application Stops Responding When Run on WinNT 4.0
	Q163508 STOP 0xA in Ntfs.sys During Reboot
	Q163512 Error: The Mapi Spooler has Shut Down Unexpectedly
	Q163525 Delay When Saving Word 7.0 File to Windows NT 4.0 Server
	Q163538 NTBackup Does Not Properly Eject Tapes on DLT Tape Devices
	Q163614 HP LaserJet Series II Prints Extra Small Stripes or Points
	Q163616 Cannot Unlock Workstation If Password Change Cancelled
	Q163620 STOP 0x50 in Rdr.sys If Pathname Too Long in SMB
	Q163672 Windows NT 4.0 Setup Fails on ThinkPad 535
	Q163687 Winsock Applications May Timeout or Fail with an Error
	Q163700 IIS Access Violation for Polygon with More Than 100 Vertices
	Q163714 ATDISK Finds the Same Disk Twice on SunDisk PCMCIA ATA Adapter
	Q163725 NDIS Driver Fails To Check Functional Address
	Q163790 RPC Service Stops Responding on UDP Port 135
	Q163872 Sysdiff Cannot Delete Files
	Q163873 Czech Keyboard Layout Has Wrong Mapping
	Q163874 Pressing CTRL+ALT+DEL When Logging On Can Cause Blue Screen
	Q163875 Group Policies Not Applied If DC Name Is More Than 13 Characters
	Q163876 CSNW Clients Cannot Delete Print Jobs on NetWare Print Queue
	Q163880 COPY Command Causes File Cache to Grow
	Q163881 Windows NT Does not Display Some Fonts
	Q163883 NetBT (tag=Nbt8) Corrupts Pool with WinNT 4.0 SP2 Installed
	Q163891 Microsoft Excel 97 Causes a Windows NT Access Violation
	Q163892 A Service May Not Set Hooks on 32-bit GUI Applications
	Q163936 CLOCK Hangs and Consumes 90% CPU When Set to Digital Display
	Q163969 Event 552: DNS Was Unable to Serve a Client Request
	Q164121 Corel Fonts Unavailable Outside of English Locale
	Q164133 Logon Allowed When Access Denied to Mandatory User Profile
	Q164138 Files in Macintosh Volume Disappear from Macintosh Clients
	Q164159 Verify Reports Errors When Restoring a Tape Backup
	Q164161 NTBACKUP Fails to Back up Microsoft Exchange Server Data
	Q164201 Access Violation Installing IIS
	Q164211 FPNW Doesn't Convert the Long File Names Correctly
	Q164260 Compressing and Uncompressing Files Cause File Cache to Grow
	Q164309 Windows NT Client: Primary/Secondary WINS Servers Switch
	Q164322 Memory Leak in NetQueryDisplayInformation API
	Q164350 NEC IDE CD-ROM Drive CDR-1400C Cannot Play Audio CDs
	Q164352 Stop 0x00000050 in Tcpip.sys Caused by Winsock Applications
	Q164391 WinNT 4.0 SP2 Atapi Claims IRQ for Unused IDE Channel
	Q164410 CHGPASS and SETPASS Do Not Prompt For Typing Correction
	Q164432 Accented Greek Characters Are Not Being Created
	Q164462 Conner 4 mm DAT Tape Devices Fail After About 30 Seconds
	Q164491 Stop: 0x0000000A in Rdr.sys When Mailslot Message > 512 Bytes
	Q164507 Any User Can Log on to FTP Server with Disabled Anonymous Logon
	Q164542 MGET to an IBM Host FTP Server Returns Garbage Characters
	Q164546 SCSI Driver Description Truncated in Control Panel
	Q164595 Duplicate Route Not Removed After Second Redirection
	Q164600 4 mm DAT Driver Reports DEC TZ9L Supports Setmarks
	Q164606 Deferred Reconnections to Password Shares May Not Work
	Q164630 RPC over NetBEUI Fails from WinNT 4.0 RAS to WinNT 4.0 RAS
	Q164631 Scavenging WINS Database Removes Static Entries
	Q164639 SNA Windows 95 Fails Logon If Password Change Required
	Q164702 WINDISK crashes during initialization when Compaq ATAPI PD/CD
	Q164758 Remote Procedure Call (RPC) Service Access Violation
	Q164806 CHKNTFS Does Not Exclude FAT Partitions from AUTOCHK on Boot
	Q164812 Computer Name Truncated When Name Resolution Attempted
	Q164821 DHCP Server Service May Stop Responding
	Q164826 Direct Draw Programs May Hang NT 4.0 with S3 968 Video Chipset
	Q164904 Stop 0x0000000A in NETBT.SYS After Applying Service Pack 2
	Q164928 Not All Objects Are Displayed When Browsing NDS Trees
	Q164938 Event Logging Frozen While Doing Heavy Logging; Services CPU Peg
	Q164982 Lack of Secondary Address May Cause DNS Service to Hang
	Q164987 Hard-coded Socket of 451 Causes LANtegrity Software to Fail
	Q165004 NTVDM Support for Compaq Financial Keyboard Scan Codes
	Q165245 DDE Client Experiences Intermittent DDE Disconnects
	Q165314 Grace Logon Remaining Is Not Decremented When Logging to BDC
	Q165388 Invalid Directory Returned When Attempting to Access FPNW
	Q165427 Convlog.exe May Cause Access Violation
	Q165443 NDS Login Script Fails When Checking "If Member Of"
	Q165456 STOP 0x0000000A in Ntoskrnl.exe
	Q165483 RasEnumEntries() API Leaks Memory
	Q165813 16-bit Applications Cause Access Violation in NTDLL.DLL
	Q165814 Stop: 0x0000001E When Opening My Computer
	
	Additional query words: prodnt servpack SP1 SP2 SP3 bug fix qfe Compact disc s e r v p a c k SBK OPK
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp3 kbWinNTSsearch kbWinNTS400sp3 kbWinNTS400search
	Version           : winnt:4.0 SP3
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	
