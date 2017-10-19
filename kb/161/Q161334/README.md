---
layout: page
title: "Q161334: Guide To Windows NT 4.0 Profiles and Policies (Part 1 of 6)"
permalink: /kb/161/Q161334/
---

## Q161334: Guide To Windows NT 4.0 Profiles and Policies (Part 1 of 6)

	Article: Q161334
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbinterop
	Last Modified: 27-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article is the first in a series of articles that provides information and
	procedures for implementing Microsoft Windows NT 4.0 Profiles and Policies on
	client workstations and servers.
	
	A whitepaper is available that contains all of this information and additional
	flowcharts, diagrams and examples and can be downloaded from the following web
	page:
	
	  http://www.microsoft.com/ntserver/techresources/management/prof_policies.asp
	
	  prof_policies.asp
	
	NOTE: The above link is one path; it has been wrapped for readability.
	
	For the other sections of this guide, please see the following article(s) in the
	Microsoft Knowledge Base:
	
	  Q185587 Guide to Windows NT 4.0 Profiles & Policies Part 2 of 6
	
	  Q185588 Guide to Windows NT 4.0 Profiles & Policies Part 3 of 6
	
	  Q185589 Guide to Windows NT 4.0 Profiles & Policies Part 4 of 6
	
	  Q185590 Guide to Windows NT 4.0 Profiles & Policies Part 5 of 6
	
	  Q185591 Guide to Windows NT 4.0 Profiles & Policies Part 6 of 6
	
	MORE INFORMATION
	================
	
	                  Windows NT Server Operating System
	                            White Paper
	        Guide to Microsoft Windows NT 4.0 Profiles and Policies
	
	Copyright 1997 Microsoft Corporation. All rights reserved.
	
	The information contained in this document represents the current view of
	Microsoft Corporation on the issues discussed as of the date of
	publication. Because Microsoft must respond to changing market conditions,
	it should not be interpreted to be a commitment on the part of Microsoft,
	and Microsoft cannot guarantee the accuracy of any information presented
	after the date of publication.
	
	This White Paper is for informational purposes only. MICROSOFT MAKES NO
	WARRANTIES, EXPRESS OR IMPLIED, IN THIS DOCUMENT.
	
	Microsoft, the BackOffice logo, MS-DOS, Windows, and Windows NT are
	registered trademarks of Microsoft Corporation.
	
	Other product or company names mentioned herein may be the trademarks of
	their respective owners.
	
	Microsoft Corporation
	One Microsoft Way
	Redmond, WA 98052-6399
	USA
	0997
	
	Abstract
	========
	
	This guide provides information and procedures for implementing Microsoft
	Windows NT 4.0 Profiles and Policies on client workstations and servers. A
	Microsoft Windows NT 4.0 User Profile describes the Windows NT
	configuration for a specific user, including the user's environment and
	preference settings. A System Policy is a set of registry settings that
	together define the computer resources available to a group of users or an
	individual. With the addition of System Policies and the new User Profile
	structure to Windows NT 4.0, network administrators have a greater ability
	to control the user environment than they have ever had before.
	This document provides the details that administrators need to know to
	implement a rollout of User Profiles and System Policies under Windows NT
	4.0. Although the primary emphasis is Windows NT, this paper also
	discusses how User Profiles are handled with Windows 95 clients and how
	the two platforms differ. You should use this guide in conjunction with
	your Windows NT 4.0 documentation and Resource Kits.
	
	CONTENTS
	========
	
	Introduction
	TCO and the User
	Profiles, Policies, and the Zero Administration Kit
	What are User Profiles and System Policies?
	Before You Begin
	Key Terminology
	Technical Notes
	Establishing User Profiles - An Overview
	Creating and Administering User Profiles
	User Profile Structure
	Configuration Preferences Stored in the Registry Hive
	Configuration Preferences Stored in Profile Directories
	Windows NT 4.0 and Windows 95  User Profile Differences
	How User Profiles Are Handled in Windows 95
	User Profile Planning and Implementation
	Setting Permissions for User Profiles
	Encoding Permissions in the User Profile
	Selecting a Location to Save User Profiles
	Setting Persistent Connections
	Working Around Slow Network Links
	Creating and Maintaining User Profiles
	Creating a New Roaming User Profile for Windows NT 4.0
	Creating a New Mandatory User Profile for Windows NT 4.0
	Making a Roaming Profile Mandatory in Windows NT 4.0
	Changing the User's Ability to Modify a Profile
	Enforcing the Use of the Server-based Profile
	Creating a New Roaming User Profile for a Windows 95 User
	Creating a New Mandatory User Profile for Windows 95
	Maintaining User Profiles with Control Panel System Properties
	Deleting Profiles
	Changing the Profile Type from Roaming to Local
	Determining Which Profile Is Displayed
	Copying Profiles
	Viewing the Contents of the Profiles Directory on a Local Computer
	Log Files Used by Profiles
	The All Users Shared Profile
	Default User Template Profiles
	Profile Names and Storage in the Registry
	Manually Administering a User Profile through the Registry
	Modifying the Default User Profile
	Upgrading Windows NT 3.5x Server-based Profiles to Windows NT 4.0 Roaming
	Profiles
	Upgrading Windows NT 3.5x Mandatory Profiles to  Windows NT 4.0 Mandatory
	Profiles
	Extracting a User Profile for Use on Another  Domain or Machine
	Creating Profiles Without User-Specific Connections
	Troubleshooting User Profiles with the UserEnv.log File
	System Policy - An Introduction
	System Policy Files
	Policy Replication
	How Policies Are Applied
	Additional Implementation Considerations
	The System Policy Editor
	Installing the System Policy Editor on a Windows NT Workstation
	Installing the System Policy Editor on a Windows 95 Computer
	Updating the Registry with the System Policy Editor
	System Policy Editor Template (.Adm) Files
	Configuring Policy Settings
	Setting Folder Paths Back to Defaults
	Creating a System Policy
	Creating Alternate Folder Paths
	Setting Up Shortcuts for Server-based Profiles
	Deploying Policies for Windows NT 4.0 Machines
	Deploying Policies for Windows 95 Machines
	Modifying Policy Settings on Stand-Alone Workstations
	Creating a Custom .Adm File
	Configuring System Policies Based on Geographic Location
	Clearing the Documents Available List
	Building Fault Tolerance for Custom Shared Folders
	Registry Keys Modified by the System Policy Editor Default Templates
	Default User Settings
	Control Panel Display Application
	Wallpaper
	Color Scheme
	Start Menu Run Command
	Settings Folders
	Settings Taskbar
	Start Menu Find Command
	My Computer Drive Icons
	Network Neighborhood Icon
	Network Neighborhood Display
	Network Neighborhood Workgroup Contents
	Desktop Display
	Start Menu Shut Down Command
	Saved Settings
	Registry Editing Tools
	Windows Applications Restrictions
	Custom Programs
	Custom Desktop Icons
	Start Menu Subfolders
	Custom Startup Folder
	Custom Network Neighborhood
	Custom Start Menu
	Shell Extensions
	Explorer File Menu
	Start Menu Common Program Groups
	Taskbar Context Menus
	Explorer Context Menu
	Network Connections
	Explorer Context Menu
	Autoexec.bat
	Logon Scripts
	Task Manager
	Welcome Tips
	Default Computer Settings
	Remote Update
	Communities
	Permitted Managers
	Public Community Traps
	Run Command
	Drive Shares - Workstation
	Drive Shares - Server
	Printer Browse Thread
	Server Scheduler
	Error Beep
	Authentication Retries
	Authentication Time Limit
	RAS Call-back Interval
	RAS Auto-disconnect
	Shared Programs Folder Path
	Shared Desktop Icons Path
	Shared Start Menu Path
	Shared Startup Folder Path
	Logon Banner
	Logon Dialog Shut Down Button
	Logon Name Display
	Logon Scripts
	Long File Names
	Extended Characters in 8.3 File Names
	Read Only Files - Last Access Time
	Cached Roaming Profiles
	Slow Network Detection
	Slow Network Timeout
	Dialog Box Timeout
	Registry Entries Not Included in the System Policy Editor
	Autorun
	Start Banner
	Appendix B - Implementing User Profiles
	Existing Windows NT 3.5x Roaming Profile
	Existing Windows NT 3.5x Roaming Profile
	Migrating Windows NT 3.5x Roaming Profile to Windows NT 4.0 Roaming
	Profile
	Migrating Windows NT 3.5x Mandatory Profile to Windows NT 4.0 Mandatory
	Profile
	Migrating Windows NT 3.5x Mandatory Profile to Windows NT 4.0 Roaming
	Profile
	Creating a New Windows NT 4.0 Roaming Profile
	Creating a New Windows NT 4.0 Mandatory Profile
	Updating and Changing a Roaming Profile to a Mandatory Profile
	Changing a Roaming Profile to a Mandatory Profile
	Appendix C -  Usage Notes
	Important Information for Administrators Regarding User Logons and User
	Logoffs
	Recent Updates to Profiles Since Retail Release
	Recent Updates to Policies Since Retail Release
	APPENDIX D - Related Knowledge Base Articles
	Profiles
	Policies
	
	INTRODUCTION
	============
	
	Not too many years ago, information technology professionals faced a
	serious challenge in controlling the mounting costs of mainframe use. It
	seemed that everyone-clerks, writers, developers, and systems
	administrators-all had terminals and were using the system for everything
	from numbers crunching to typing letters. Networks became bogged down, and
	IT professionals were given the task of getting "nonessential operations"
	off the mainframe. Their decision was to deploy personal computers in the
	enterprise-with emulation software for mainframe access and local software
	for tasks where central processing or data sharing were not required.
	Gradually, as PCs became more powerful, more and more operations moved to
	the desktop. And as PC networking matured, many businesses found that a PC-
	based network built on commodity hardware and off-the-shelf software
	was their best business solution.
	
	Lately, however, we've come full circle on this. It seems that the total
	cost of ownership (or TCO)-the real cost of maintaining a distributed
	personal computer network-is far from trivial. TCO includes the initial
	capital cost of hardware and software, deployment and configuration
	expense, costs associated with deploying hardware and software updates,
	training and retraining, day-to-day maintenance and administration, and
	telephone and on-site technical support. With these escalating costs in
	mind, Microsoft and others are working together on several initiatives to
	lower the total cost of ownership of personal computers.
	
	TCO AND THE USER
	================
	
	One of the major costs highlighted in recent reports on Total Cost of
	Ownership (TCO), is lost productivity at the desktop caused by user error,
	such as changing the system configuration and rendering the computer
	unworkable, or system distractions and complexities, for example too many
	features or nonessential applications installed on the desktop. To solve
	these problems, system administrators need a means to control a user's
	access to key configuration files and to features and applications that
	are not required to do that user's particular job. To be successful, this
	means of control must be flexible and customizable-the system
	administrator must be able to control the computer configurations of
	individuals and groups of users based on user job responsibilities and
	computer literacy.
	
	PROFILES, POLICIES, AND THE ZERO ADMINISTRATION KIT
	===================================================
	
	The Zero Administration Kit (ZAK) for the Microsoft Windows NT version 4.0
	operating system is designed to help the corporate administrator address
	some of the issues arising from user operations. ZAK is a set of
	methodologies for deploying Microsoft Windows NT 4.0 that greatly reduces
	the burden of individual desktop management for task-based workers. With
	ZAK, system administrators can establish user profiles, system policies,
	and security to reduce some of the administrative costs associated with
	managing end-users in an enterprise network.
	
	ZAK's methodologies are based on the underlying technologies and
	capabilities of Windows NT 4.0, and as such these techniques can readily
	be adapted to accommodate a corporation's specific computing requirements.
	In the near future, you will see additional TCO-reducing features appear
	in Microsoft Windows 98, Windows NT 5.0, and Microsoft Systems Management
	Server. Central to these features is the idea of centralized desktop
	control. This is accomplished through User Profiles and System Policies-
	the subject of this paper.
	
	WHAT ARE USER PROFILES AND SYSTEM POLICIES?
	===========================================
	
	A Microsoft Windows NT 4.0 User Profile describes the Windows NT
	configuration for a specific user, including the user's environment and
	preference settings. For example, those settings and configuration options
	specific to the user-such as installed applications, desktop icons, color
	options, and so forth-are contained in a User Profile. This profile is
	built in part from System Policy information (for example, those things
	that a user has access to and those things that the user can and cannot
	change) and in part from permitted, saved changes that a user makes to
	customize his or her desktop.
	
	A System Policy is a set of registry settings that together define the
	computer resources available to a group of users or an individual.
	Policies define the various facets of the desktop environment that a
	system administrator needs to control, such as which applications are
	available, which applications appear on the user's desktop, which
	applications and options appear in the Start menu, who can change
	attributes of their desktops and who cannot, and so forth.
	With the addition of System Policies and the new User Profile structure to
	Windows NT 4.0, network administrators have a greater ability to control
	the user environment than they ever have had before. Many of the requests
	that customers submitted, including providing more options in controlling
	the user's desktop, accessibility to applications and system tools,
	minimizing administrative overhead, and scalability enhancements, have
	been added. And, as with every release, Microsoft encourages customer
	feedback on enhancements to the Windows NT operating system.
	
	This document provides the details that administrators need to implement a
	rollout of User Profiles and System Policies under Windows NT 4.0.
	Although the primary emphasis is Windows NT, this paper also discusses how
	User Profiles are handled with Windows 95 clients and how the two
	platforms differ.
	
	BEFORE YOU BEGIN
	================
	
	Before proceeding with this document, we recommend that you read Chapters
	3 and 4 of the Windows NT 4.0 Concepts and Planning Guide. In addition,
	you should be familiar with the following terms and concepts.
	
	KEY TERMINOLOGY
	===============
	
	Directory Replication
	The copying of a master set of directories from a server (called the
	export server) to specified servers or workstations (called import
	computers) in the same or other domains. Replication simplifies the task
	of maintaining identical sets of directories and files on multiple
	computers, because only a single master copy of the data is maintained.
	Files are replicated when they are added to an export directory and each
	time a change is saved to one of the exported files.
	
	Domain Structure
	In Windows NT, a domain is a collection of computers defined by the
	administrator of a Windows NT Server network that share a common directory
	database. A domain provides access to the centralized user accounts and
	group accounts maintained by the domain administrator. Each domain has a
	unique name.
	
	Home Directory
	A home directory is a directory that is accessible to the user and
	contains files and programs for that user. A home directory can be
	assigned to a single user or to a group of users.
	
	Local Profile
	A local profile is specific to a computer. A user who has a local profile
	on a particular computer can gain access to that profile only while logged
	on to that computer.
	
	Mandatory Profile
	A mandatory profile is a preconfigured roaming profile that the user
	cannot change. In most cases, these are assigned to a person or a group of
	people for whom a common interface and standard configuration is required.
	
	NetLogon Service
	For Windows NT Server, the NetLogon service authenticates domain logons
	and keeps the domain's directory database synchronized between the primary
	domain controller (PDC) and the backup domain controllers (BDCs).
	
	Regedt32.exe
	The 32-bit version of the Registry Editor.
	
	Registry
	The registry is a database where Windows NT internal configuration
	information and machine- and user-specific settings are stored.
	
	Registry Hive
	A hive is a section of the registry that is saved as a file. The registry
	subtree is divided into hives (named for their resemblance to the cellular
	structure of a beehive). A hive is a discrete body of keys, subkeys, and
	values.
	
	Roaming Profile
	A roaming profile is stored on a network share and can be accessed from
	any computer. A user who has a roaming profile can log on to any computer
	for which that profile is valid and access the profile. (Note that a
	profile is only valid on the platform for which it was created-for
	example, a Windows NT 4.0 profile cannot be used on a Windows 95
	computer.)
	
	Roaming User
	A roaming user is a user who logs on to the network from different
	computers at different times. This type of user may use a kiosk or may
	share a bank of computers with other users. A roaming user stores his or
	her user profile on a network share, and can log on to any networked
	computer and access that profile.
	
	System Policy
	A System Policy is a set of registry settings that together define the
	computer resources available to a group of users or an individual. You
	create system policies with the System Policy Editor. System policies
	allow
	an administrator to control user work environments and actions, and to
	enforce system configurations.
	
	%systemroot%
	An environment variable that expands to become the root directory
	containing Windows NT files. The directory name is specified when Windows
	NT is installed (normally, this directory name is c:\winnt).
	
	%systemroot%\profiles
	A folder in the root directory that contains the user profiles for each
	user of the computer.
	
	%username%
	An environment variable that expands to become the user account ID for the
	current logged on user. This identifies the user account to Windows NT.
	
	TECHNICAL NOTES
	===============
	
	Several portions of this guide refer to registry locations that allow you
	to change certain behaviors of Windows NT and modify settings. For this
	reason, we include the following warning.
	
	Caution:
	Using Registry Editor incorrectly can cause system-wide problems that may
	require you to reinstall Windows NT to correct them. Microsoft cannot
	guarantee that any problems resulting from the use of Registry Editor can
	be resolved. In addition, portions of this guide refer to a registry hive
	called NTuser.xxx. In instances where this is used, .xxx can be replaced
	with either .dat or .man.
	
	ESTABLISHING USER PROFILES - AN OVERVIEW
	========================================
	
	A Microsoft Windows NT 4.0 User Profile describes the Windows NT
	configuration for a specific user, including the user's environment and
	preference settings. A User Profile can be local, roaming, or mandatory. A
	local profile is specific to a given computer. A user who creates a local
	profile on a particular computer can gain access to that profile only
	while logged on to that computer. Conversely, a roaming profile is stored
	on a network share and can be accessed from any networked computer. A user
	who has a roaming profile can log on to any networked computer for which
	that profile is valid and access the profile. A mandatory profile is a
	preconfigured roaming profile that the user cannot change. As a system
	administrator, you may want to use mandatory profiles for a group of
	people who require a common interface and standard configuration.
	
	One of the primary goals of User Profiles is to allow a user's system and
	desktop customizations to travel with the user from computer to computer,
	without requiring the user to reconfigure any settings. When a user logs
	on to any computer that supports his or her roaming profile, the desktop
	appears-just as the user left it the last time he or she logged off. With
	roaming user support, users can share computers, but each user has his or
	her personal desktop on any computer in the network (both roaming and
	mandatory profiles support this functionality).
	
	CREATING AND ADMINISTERING USER PROFILES
	========================================
	
	User Profiles can be created and administered in several different ways as
	will be described next. Note that as a system administrator, you determine
	whether users can modify their profiles.
	
	- You create a User Profile that is not modifiable for a particular user
	  or group (this is a mandatory profile).
	
	- You establish a network Default User Profile that applies to all new
	  users on Windows NT 4.0 computers. After downloading this default
	  profile and logging on, the user can customize the profile (provided
	  that it is not mandatory).
	
	- You allow a new user to use the local Default User Profile on the
	  Windows NT 4.0 computer where the user logs on. After logging on, the
	  user can customize the profile (provided that it is not mandatory).
	
	- You copy a template User Profile, and assign the copy to a user. The
	  user can then customize the profile (provided that it is not a
	  mandatory profile).
	
	Profiles can be stored on a network server or cached on the local machine.
	(Cached profiles are located in the \%systemroot%\Profiles directory.)
	Caching a profile reduces the total time to log on and load the profile;
	however, in a roaming user or kiosk environment, this approach may not be
	optimal. This option is controlled by the administrator.
	
	USER PROFILE STRUCTURE
	======================
	
	A User Profile is comprised of a Windows NT registry hive and a set of
	profile directories. The registry is a database used to store machine- and
	user-specific settings, and portions of the registry can be saved as
	files, called hives. These hives can then be reloaded for use as
	necessary. User Profiles take advantage of the hive feature to provide
	roaming profile functionality.
	
	The User Profile registry hive is the NTuser.dat in file form, and is
	mapped to the HKEY_CURRENT_USER portion of the registry when the user logs
	on. The NTuser.dat hive maintains the user's environment preferences when
	the user is logged on. It stores those settings that maintain network
	connections, Control Panel configurations unique to the user (such as the
	desktop color and mouse), and application-specific settings. The series of
	profile directories store shortcut links, desktop icons, startup
	applications, and so forth. Together, these two components record all user-
	configurable settings that can migrate from computer to computer.
	Details are provided below.
	
	CONFIGURATION PREFERENCES STORED IN THE REGISTRY HIVE
	=====================================================
	
	The Ntuser.dat file contains the following configuration settings.
	
	- Windows NT Explorer settings. All user-definable settings for Windows
	  NT Explorer, as well as persistent network connections.
	
	- Taskbar. All personal program groups and their properties, all program
	  items and their properties, and all taskbar settings.
	
	- Printer settings. All network printer connections.
	
	- Control Panel. All user-defined settings made in the Control Panel.
	
	- Accessories. All user-specific application settings affecting the
	  Windows NT environment, including: Calculator, Clock, Notepad, Paint,
	  and HyperTerminal, among others.
	
	- Help bookmarks. Any bookmarks placed in the Windows NT Help system.
	  Configuration Preferences Stored in Profile Directories
	  The profile directories are designed to contain the following
	  configuration settings.
	
	- Application data. Application-specific data, such as a custom
	  dictionary for a word processing program. Application vendors decide
	  what data to store in this directory.
	
	- Desktop. Desktop items, including files and shortcuts.
	
	- Favorites. Shortcuts to program items and favorite locations.
	
	- NetHood.* Shortcuts to Network Neighborhood items.
	
	- Personal. Shortcuts to program items. Also a central store for any
	  documents that the user creates. Applications should be written to save
	  files here by default.
	
	- PrintHood.* Shortcuts to printer folder items.
	
	- Recent. Shortcuts to the most recently used items.
	
	- SendTo. Shortcuts to document storage locations and applications.
	
	- Start Menu. Shortcuts to program items.
	
	- Templates.* Shortcuts to template items.
	
	  * These directories are hidden by default. To see these directories,
	  change the View Options.
	
	WINDOWS NT 4.0 AND WINDOWS 95 - USER PROFILE DIFFERENCES
	========================================================
	
	Windows 95 Profiles are very similar in behavior to Windows NT 4.0
	Profiles, but there are some differences.
	
	Unlike Windows NT 4.0, Windows 95 downloads and writes User Profiles to
	the user's home directory. When the Windows 95 user first logs on, the UNC
	path specified in the user account's home directory path is checked for
	the Windows 95 User Profile. You can modify this behavior, however. See
	the Windows 95 Resource Kit for more information. Windows 95 and Windows
	NT 4.0 User Profiles have the following additional functional differences:
	
	- Windows 95 does not support common groups.
	
	- Windows 95 can be configured to copy only the shortcut (.lnk) and
	  Program Information Files (.pif) when the User Profile is downloaded,
	  whereas Windows NT downloads all file, shortcut, and directory objects.
	
	- Windows 95 User Profiles do not support a centrally stored Default User
	  Profile.
	
	- Windows 95 uses different files for the registry portion of User
	  Profiles. (Refer to the following table.) Windows 95 and Windows NT 4.0
	  profiles are not interchangeable, primarily because the registry hive,
	  which is a key component of the User Profile, is incompatible between
	  operating system versions.
	
	  Windows NT 4.0 file   Equivalent Windows 95 file
	  ------------------------------------------------
	  Ntuser.dat            User.dat
	  Ntuser.dat.log        User.da0
	  Ntuser.man            User.man
	
	NOTE: The Windows 95 User.da0 and Windows NT 4.0 Ntuser.dat.log, while
	equivalent, provide slightly different functionality. Windows 95 writes a
	copy of User.dat to User.da0 each time the user logs off. Windows NT uses
	the Ntuser.dat.log file as a transaction log file. This allows for fault
	tolerance in the event that a User Profile must be recovered.
	
	Windows 95 and Windows NT 4.0 file structures are identical with the
	exception of the Application Data directory. Windows 95 does not support
	this directory.
	
	Windows 95 User Profiles can be stored on NetWare servers. For more
	information on configuring a client with a Primary Network Logon of Client
	for NetWare Networks, see the chapter "Windows 95 on NetWare Networks" in
	the Windows 95 Resource Kit. For more information on configuring a client
	that uses Microsoft Service for NetWare Directory Services, see the online
	Help that accompanies the service.
	
	Additional query words: wpaper
	
	======================================================================
	Keywords          : kbenv kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
