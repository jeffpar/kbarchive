---
layout: page
title: "Q245607: Terminal Server Edition Issues in a Domain Environment"
permalink: /kb/245/Q245607/
---

## Q245607: Terminal Server Edition Issues in a Domain Environment

	Article: Q245607
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbtool kbui kburl _IK
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT Server 4.0 Terminal Server Edition provides increased functionality
	for Windows NT domain environments. Windows NT Server 4.0 Terminal Server
	Edition affects all aspects of the domain environment. This article describes
	the areas affected, and provides hyper-links to Microsoft Knowledge Base
	articles that contain specific troubleshooting steps for those areas.
	
	MORE INFORMATION
	================
	
	Note that the acronym "TSE" is used in this article to indicate a Windows NT
	Server 4.0 Terminal Server Edition-based server.
	
	Installation of Terminal Server as a Domain Controller (DC) or Member Server
	----------------------------------------------------------------------------
	
	Windows NT Server 4.0 Terminal Server Edition is a new operating system and
	provides a new kernel, and because of this it cannot be installed as a service
	in Windows NT 4.0. Windows NT Server 4.0 Terminal Server Edition cannot be
	installed after server installation.
	
	Domain Controller Installations:
	
	To log on to a TSE with a network client, the user must have the right to "Log on
	Locally." If a TSE is installed as a DC, and this right is granted to a group
	such as Everyone, then Everyone would be able to log on to every DC in the
	domain. This is because the Security Accounts Manager (SAM) database is a
	replica copy of the Primary Domain Controller (PDC) SAM database. Therefore, if
	"Log on Locally" is provided to the Everyone group on one DC, then "Log on
	Locally" is permitted on every DC. If the TSE is the only server in the
	environment, then configuring the TSE as a domain controller is appropriate. If
	the TSE is one of many servers in the domain, then the TSE should be configured
	as a Member Server.
	
	Member Server Installations:
	
	Installing Windows NT Server 4.0 Terminal Server Edition as a Member Server gives
	it a local SAM database that is not shared with any other computers. It is
	important to remember that users are logging on to the domain and not the TSE.
	Users log on through the TSE session to the DCs, PDC or Backup Domain Controller
	(BDC), so they are subject to domain security and administration.
	
	Home Directories
	----------------
	
	Home directories store information for the multiuser environment.
	
	  Q186521 Why Terminal Server Users Should Have New Home Directories
	
	Terminal Server Home Directory:
	
	  Q230165 Terminal Server User's Home Directory Is Not Set Correctly
	
	  Q195934 Incorrect Permissions Applied to Terminal Server Home Folders
	
	  Q192164 Home Directories Are Created with Incorrect Permissions
	
	Changes to User Manager for Domains
	-----------------------------------
	
	- Terminal Server Profile Path is only used when logging onto a TSE.
	
	- Terminal Server Home Directory is used to store multiuser environment
	  information.
	
	- User Configuration dialog box.
	
	Windows NT Server 4.0 Terminal Server Edition uses additional fields in the SAM
	database that standard Windows NT Server 4.0 does not utilize. The User
	Configuration dialog box used through a user's account properties provides
	access to the additional fields. User Manager for Domains on a standard Windows
	NT 4.0 DC cannot place data and path statements into these fields. Therefore, a
	Windows NT 4.0 DC does not display the contents of those fields.
	
	
	Terminal Server Profiles
	------------------------
	
	Local profiles are created under the Wtsrv\Profiles\<user name> folder of
	the TSE, where <user name> is a user name. This is not recommended for
	clustering Windows NT Server 4.0 Terminal Server Edition with the Citrix
	MetaFrame add-on, which is described later in this article. This is undesirable
	because there would be separate local profiles on each of the numerous TSEs with
	MetaFrame and clustering, and these various profiles would not match each
	other.
	
	The typical Windows NT Server 4.0 Terminal Server Edition installation has a
	small system partition as C:\, and a large data partition or RAID 5 striped set
	with parity as D:\. Using local profiles can fill up the small system partition
	on C:\, and does not utilize the large data partitions on drive D. Consequently,
	C:\ is filled with the local profiles for the TSE user sessions, while D:\ may
	have several Gigabytes of unused capacity that could store the profiles.
	
	
	Roaming Profiles:
	
	The Terminal Server Profile Path is used for roaming profiles only while a user
	is logged on to a Terminal Server session. This is good for Citrix MetaFrame
	clustered TSEs. Select a server to use roaming profiles that can be used by any
	TSE in the environment. For additional information about issues with using
	roaming profiles, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q187453 User?s SID Remains in Registry After Logoff
	
	
	User Profile Path Versus Terminal Server Profile Path
	-----------------------------------------------------
	
	- The User Profile Path is used for both Windows NT Server 4.0 Terminal Server
	  Edition and standard Windows NT Server. This is good for Windows NT
	  Workstation-based desktop computers that have the same desktop settings
	  whether using a Terminal Server session or a standard Windows NT Server-based
	  logon.
	
	- Terminal Server Profile Path is used for the roaming profile for Terminal
	  Server use only. This is desirable for Microsoft Windows 98/95 or other
	  desktop computers that need a roaming profile with their virtual Windows NT
	  Workstation user settings stored in it.
	
	System Policies
	---------------
	
	- Local Policies are applied when working on that TSE only. For additional
	  information about local policies, click the article number below to view the
	  article in the Microsoft Knowledge Base:
	
	  Q186529 Local Policy Does Not Permit You to Log On Interactively
	
	- Domain Policies are applied whenever the user logs on to the domain. These
	  policies are stored in the Netlogon share on Windows NT 4.0-based domain
	  controllers. For additional information about domain policies, click the
	  article number below to view the article in the Microsoft Knowledge Base:
	
	  Q192794 How to Apply System Policies to Terminal Server
	
	- Changes to System Policies. There are new settings that only apply to TSEs
	  sessions and not standard domain logons. For additional information about
	  using system policies for Terminal Server clients, click the article number
	  below to view the article in the Microsoft Knowledge Base:
	
	  Q186618 New System Policy Options in Terminal Server
	
	Permissions
	-----------
	
	Windows NT File System (NTFS) permissions are used to define the file system
	requirements for the multiuser environment. All Windows NT Server 4.0 Terminal
	Server Edition users need to have the "Change" permission for the %SystemRoot%
	folder. Terminal Server has Read permission set by default.
	
	
	For additional information about security in Terminal Server, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q186569 Security Configuration in Terminal Server
	
	  Q186616 Terminal Server Client Error 13D at Logon
	
	Terminal Server Connection Configuration
	----------------------------------------
	
	This is the system-wide Graphical User Interface (GUI) setting for Remote Desktop
	Protocol-Transport Control Protocol (RDP-TCP) and Citrix MetaFrame Independent
	Computing Architecture-Transport Control Protocol (ICA-TCP) security
	permissions. This can override what User Manager for Domains has in it for
	Connection Permissions. This is often missed because of the standard Windows NT
	Server troubleshooting techniques used in User Manager for Domains.
	
	Rights
	------
	
	- "Access Computer from Network" should be disabled for a TSE that is a Member
	  server in a domain, or Standalone server. This right should be enabled for a
	  TSE that is a DC. Because a combination DC/TSE affects every DC in the
	  domain, standard Windows NT-based servers need this right for users to be
	  able to have file and printer sharing functionality. This right is not
	  required from a Thin client. For additional information about the Access
	  Computer from Network right, click the article number below to view the
	  article in the Microsoft Knowledge Base:
	
	  Q186490 Terminal Server's Use of Access This Computer From Network
	
	- Log on Locally. Configure TSE as Member server or DC as described earlier in
	  this article. Every user must have the "Log on Locally" right to log on to
	  the TSE.
	
	- Account Management. For additional information about how to disable
	  connectivity to the Terminal Server for maintenance issues, click the article
	  number below to view the article in the Microsoft Knowledge Base:
	
	  Q186627 How to Temporarily Disable Terminal Server Client Logons
	
	Terminal Server Licensing
	-------------------------
	
	- License Manager tracks domain licenses as other Windows NT Server-based
	  servers.
	
	- Terminal Server License Manager: For additional information about License
	  Manager, click the article numbers below to view the articles in the
	  Microsoft Knowledge Base:
	
	  Q187629 Terminal Server Licensing
	
	  If no licenses are available, the user is able to log on to the domain but
	  Terminal Server Local Profiles will not load. Licensing errors: For
	  additional information about licensing errors, click the article numbers
	  below to view the articles in the Microsoft Knowledge Base:
	
	  Q190233 Terminal Licensing Failed with the Specific Error 322148762
	
	  This is replacing the Hydra.mdb file from the CD-ROM.
	
	  Q216843 Clients Receive Error 1000 No Licenses Are Available
	
	- Terminal Server Licensing Service Product Options:
	
	  1. Existing Windows NT Workstation Version 4.0 License
	
	     This is for those clients that are already using Windows NT Workstation 4.0
	     on their desktop computers.
	
	  2. Windows NT Workstation 4.0 Full License
	
	     This option is used for those clients that have any non-Windows NT
	     Workstation client platforms to license the virtual Windows NT Workstation
	     computer. This has been modified with the Terminal Server Client Access
	     License (CAL).
	
	  3. Windows NT Workstation 4.0 Version Upgrade
	
	     This option is for those clients that have Windows NT Workstation 3.5x as
	     their operating system and only need a version upgrade. Note that this is
	     less expensive that the full license option.
	
	  4. Temporary License for Windows NT Workstation 4.0 Full License
	
	     This option is for those clients that do not have a license. This option
	     grants unlicensed clients 90 days to work while licenses are being
	     purchased.
	
	Terminal Server Clients
	-----------------------
	
	Remote Desktop Protocol (RDP):
	
	RDP is the Microsoft client program that permits a user to connect to a TSE with
	or without Citrix MetaFrame on it. Supported clients:
	
	- Windows NT Workstation
	
	- Windows 98/95
	
	- Windows 3.x
	
	- Windows Thin client devices with RDP embedded
	
	Independent Computing Architecture (ICA):
	
	ICA is Citrix?s client program for Terminal Servers with Citrix MetaFrame.
	Supported clients:
	
	- Windows clients as RDP
	
	- Macintosh
	
	- Unix
	
	- Novell
	
	- OS/2
	
	- Windows CE
	
	- ICA Thin client devices
	
	Available Add Ons:
	
	- Support for several client platforms
	
	- Shadowing
	
	- Remote printer attachment
	
	- Sound through the channel
	
	- Remote hard disk drive attachment
	
	Service Pack (SP) 4 Updates
	---------------------------
	
	For additional information about Service Pack 4, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q222970 List of Bugs Fixed in Terminal Server Edition
	
	Post Service Pack (SP) 4 Hotfixes
	---------------------------------
	
	Dirty Shutdown Criteria Changed in SP4:
	
	Dirty shutdown used to only mean sudden power outages, but now it can mean
	scheduled shutdowns, session initiated reboots, software installed reboots, and
	AT command reboots. Anything other than pressing CTRL+ALT+DELETE at the server
	console causes the "orphaned" temp folders problem. For additional information
	about shut down issues, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q230449 Service Control Handler May Not Receive SERVICE_CONTROL_SHUTDOWN
	
	Temp Directory Hotfix:
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q234029 Err Msg: 'Temp Directory Not Accessible' After Applying TSE SP4
	
	The scope of this hotfix is when launching a new Terminal Server session, the
	hotfix checks the C:\TEMP folder for an existing subfolder with the same session
	ID. If a similar session ID exists, it is deleted and re-created by the system
	account. It does not remove all orphaned temp folders as may be expected.
	
	Profiles Stuck in the Registry:
	
	For additional information about user profiles, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q234606 Terminal Server User Profiles Do Not Unload
	
	The scope of this hotfix is to have Client Server Runtime System (CSRSS) send out
	a query for all processes that are running in the user's session, and then send
	out a request for all user processes to stop. Once the specified wait time
	expires, Winlogon starts the session shutdown. The shutdown should not work if
	there are session ID processes still running.
	
	RestrictAnonymous Does Not Work after Applying Service Pack 4:
	
	For additional information about this issue, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q236185 Terminal Server User Profiles and Home Folder Paths Are Ignored
	
	This is based on having the RestrictAnonymous setting in the registry from SP3.
	The RestrictAnonymous setting disrupts the logon based on having the paths for
	user profile, netlogon share, and so on, tried prior to logging the user on to
	the system so they were anonymous. Winlogon.exe had to be rewritten to process
	the user logon first, then validate the user's profiles and shares.
	
	Application Security:
	
	For additional information about application security, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q239873 Application Security May Not Work After Improper Shutdown
	
	Profile Damage and the Effects on New Sessions:
	
	For additional information about profile corruption, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q230279 Corrupted User Profiles Can Cause New Local Default to Be Lost
	
	Service Pack 5 Updates:
	
	The post Service Pack 4 hotfixes mentioned earlier in this article and the
	following hotfix are scheduled to be included in Service Pack 5. The release of
	Service Pack 5 supercedes the need for the hotfixes in Service Pack 4. For
	additional information about Service Pack 5, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q240331 List of Bugs Fixed in Terminal Server Edition, Service Pack 5
	
	Terminal Server and Y2K Compliance
	----------------------------------
	
	- For Terminal Server Y2K compliance information, view the following Microsoft
	  Web site:
	
	  http://www.microsoft.com/technet/year2k/product/user_view71011EN.htm
	  (http://www.microsoft.com/technet/year2k/product/user_view71011EN.htm)
	
	- Terminal Server Licensing service and Y2K compliance: For additional
	  information about Terminal Server licensing and Y2K issues, click the article
	  number below to view the article in the Microsoft Knowledge Base:
	
	  Q236405 Terminal Server License Service May Not Start on 2/29/2000
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbtool kbui kburl _IK 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4,4.0 SP5
	Issue type        : kbinfo
	
	=============================================================================
	
