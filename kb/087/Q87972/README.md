---
layout: page
title: "Q87972: ADMIN.WRI from WinLogin 1.0 Part A"
permalink: /kb/087/Q87972/
---

## Q87972: ADMIN.WRI from WinLogin 1.0 Part A

	Article: Q87972
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft WinLogin, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the WinLogin 1.0 ADMIN.WRI file. It is
	part one of two parts. This article contains sections 1.0 through 3.7.
	
	This information applies to version 1.0 of Microsoft WinLogin. For information
	about ordering Microsoft WinLogin, call the Microsoft Sales Information Center
	(MSIC) at (800) 426-9400, or mail the form supplied with the Windows Resource
	Kit (WRK) for the Microsoft Windows operating system version 3.1.
	
	MORE INFORMATION
	================
	
	WinLogin Administrator's Reference
	----------------------------------
	
	This document contains detailed technical information about
	how WinLogin is designed. If you are looking for additional
	information about WinLogin see "Other Online Documents" at
	the end of this file for a description of the other WinLogin
	online documents.
	
	Contents
	--------
	
	This document contains additional information on the
	following topics:
	
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
	
	1.0  What Does WinLogin Do?
	
	The configuration of Windows 3.1 is controlled by a
	(sometimes large) set of files, which are lumped into a
	category called "configuration files". Within this category
	are several different types of files, such as .INI files and
	.PIF files. What Windows looks and acts like is controlled
	directly by these files, thus, managing the configuration of
	Windows means managing these files' contents.
	
	The first step in managing a configuration file is being
	able to edit the file's contents. Windows already provides
	PIFEDIT.EXE, which must be used to edit the contents of the
	binary .PIF files. For .INI files, WinLogin  includes an
	editor that offers a somewhat more structured and controlled
	view into the file than that provided by simple text
	editors.
	
	The second step in managing a configuration file involves
	making sure that the correct file is available to Windows as
	it boots, and that the contents of each file correctly
	represent the desired combination of administrative
	settings, hardware requirements and user preferences.
	Providing this functionality is the central aim of WinLogin.
	
	At this time, WinLogin combines administrative settings with
	hardware requirements and user preferences for Microsoft
	Standard .INI File format .INI files only. Innovative
	manipulation of .INI file values and the file copying which
	WinLogin can do for all other types of configuration files
	offers a great deal of power and flexibility.
	
	2.0  How does WinLogin work?
	
	Understanding WinLogin is aided greatly by understanding the
	following concepts.
	
	2.1  File Types
	
	Everything that WinLogin does to and/or with a configuration
	file is determined by the file type. WinLogin stores its
	knowledge about file types in the file type table in the
	database. Each entry in the table associates a file type
	name with an editor name, the arguments that editor expects
	to see when it is invoked and the name of the merge DLL that
	the client should use when handling that file type.
	
	When one of the administrative tools needs to edit a
	configuration file, it looks up the name of the editor for
	that file type and invokes it for use on the file. When the
	WinLogin client is preparing the configuration files for
	Windows to boot with, it looks up the proper merge DLL and
	invokes it to process the file.
	
	When either the administrative tools or the client search
	the table for a particular file type the search is performed
	most specific to least. For example, the default file type
	table contains an entry for ".INI". If you were to add an
	entry for "WINWORD.INI", then searching the table for
	WINWORD.INI would match the new entry exactly, while
	searching for any other file with the .INI extension would
	still match the original .INI entry in the table. This
	allows you to special case
	how WinLogin handles certain specific files (like
	WINWORD.INI) which cannot be treated like other files with
	the same extension.
	
	By default, WinLogin knows about three file types, .INI
	files, .PIF files and .BAT files. You can change the values
	for the default file type entries or add your own file type
	entries using the File Type editor as described in the
	printed documentation.
	
	2.2  Merge Rules
	
	When processing .INI files, WinLogin needs to know certain
	things about each entry in the file. This knowledge is
	stored in the form of Merge Rules. For each entry that is to
	be processed, a Merge Rule must exist to describe:
	
	-  The Default Source for the entry value
	-  The Type of the entry
	-  The User Preference rule for the entry
	
	The Default Source of an entry is the source of the default
	value for the entry -- either the administrative  value or
	the value required by the workstation from which the user
	logs on.
	
	The Type of an entry is one of "Simple", "Multi-Valued" or
	"Multi-Instanced". A Simple entry is one which has a single
	value, for instance BorderWidth= or KeyboardSpeed= in
	WIN.INI. A Multi-valued entry is one that has multiple
	values for the same entry, for instance the load= or run=
	lines in WIN.INI. A Multi-instance entry is one that appears
	in the same section multiple times with a different value
	each time, for instance the device= lines in SYSTEM.INI.
	
	The User Preference rule for an entry indicates how
	conflicts between the default value (either admin or
	workstation specified) and any user preferences found in the
	user data are to be resolved. If "Disallow" is chosen, the
	user preference is overridden with the default. If "Merge
	with Default" is selected, then the user preferences are
	merged with the default values. (This is not an option for
	"Simple" entries.)  Finally, if the rule is "Replace
	Default", the user preferences completely overrides the
	default value(s).
	
	While processing an .INI file, the WinLogin client uses
	these merge rules to construct, one entry at a time, the
	data that Windows needs, either to boot, or to display the
	environment the user is expecting to see.
	
	By default, WinLogin knows the merge rules for some of the
	entries in the standard Windows 3.1 .INI files. New merge
	rules may be added  or the existing values changed (see your
	Administrator's Reference for information on the Merge Rule
	Editor).
	
	2.3  Data Sources
	
	WinLogin is designed around the requirement that there be
	some amount of shared file system space between the
	administrator and all of the workstations participating in
	the system. This space can be shared by all workstations in
	the system, or can be configured on a group or
	domain basis across multiple servers in the installation. In
	this shared file space WinLogin stores:
	
	- The administrative default settings (global settings and/or on a
	    user group basis)
	- The user preferences (each set of preferences in a separate sub-
	    directory)
	- The workstation specific settings (if the administrator wants to
	    edit them remotely)
	- The Merge Rules
	- The File Type information
	- The complete configuration files of types other than .INI
	
	Optionally, WinLogin may also store in the shared file space:
	
	- The location of the administrative default configuration files
	    (settings)
	- A list of users known to the system and the location of each user's
	    configuration files
	- A list of user groups known to the system and the location of each
	    group's configuration files
	- A list of  workstations known to the system and the location of each
	    workstation's configuration files
	
	The Merge Rules, File Type information and all the optional
	data are stored in a shared database.
	
	The other data may be spread across multiple file servers,
	and the number of different ways that it is likely to be
	divided and organized is limited only by the number of ways
	different administrators in different environments want to
	manage their data. Given the nearly infinite number of
	possibilities, WinLogin is faced with the challenge of
	finding the sets of files that contain the administrator's
	desires for both global and group settings, the current
	workstation's requirements and the current user's preferences. The
	remainder of this section outlines how WinLogin performs the
	search for these four sets of data.
	
	When the WinLogin client first begins to build a Windows
	configuration, it knows three things:
	
	-  The location of the shared database
	-  The name of the current user
	-  The name of the current machine
	
	In addition, the administrator may specify (at installation
	time) full or partial paths, including references to
	environment variables that are to be resolved by WinLogin,
	to any of the four data sets (see section 6.0 on Environment
	Variable Support). For the paths that are fully qualified in
	this manner the search for the data set is complete. For the
	source paths that are not given in this manner, WinLogin
	turns to the database to locate the data set.
	
	An example:
	
	The WinLogin client is running on a workstation named
	CALVIN. The current user is HOBBES, and the shared database
	associated with this machine is stored on the server SUSIE.
	Further, when the administrator installed the WinLogin
	software on CALVIN, he specified that WinLogin
	should always look for the workstation configuration data on
	the local hard drive at C:\WKSTASRC, and that the search
	path for the administrative data should be modified based
	upon the environment variable %USERGRP%.
	
	WinLogin finds the four data sets to use as input as
	follows:
	
	Workstation Data Set - since the administrator specified a
	full path to this data set the search is over. It is always
	the administrator's responsibility to ensure that the
	correct data exists where ever WinLogin is told to look, and
	that WinLogin is able to access that data.
	
	Admin Data Set - since a full path to the admin data set was
	not given, the administrator must have filled in the
	location of the admin data set in the shared database on
	SUSIE. WinLogin queries the database to retrieve this value
	and uses it as the root of the path to look in. Since the
	administrator also specified that the search for the admin
	data be modified by the environment variable %USERGRP%,
	WinLogin searches the environment for the value and appends
	the result to the path that will be searched. It is up to
	the administrator to set valid environment variables before
	WinLogin is invoked.
	
	User Data Set - since a full path to the user data set was
	not given, the administrator must have created a record in
	the shared database on SUSIE for the user HOBBES, specifying
	at that time where HOBBES' configuration files are to be
	kept. WinLogin queries the database for this location and
	looks there for any user preference configuration data.
	
	Group Data Set - when creating the record for user HOBBES,
	the administrator may have assigned HOBBES to one user
	group. Since a full path to the group data set was not
	given, WinLogin checks to see if HOBBES is in a group (in
	this case the answer is yes, HOBBES is in
	the group TIGERS) and then queries the database for the
	location of the group TIGERS' configuration files. Any
	configuration data found in the group location is combined
	with the data in the admin location with the group value
	overriding the admin value. The result is treated as
	administrative defaults.
	
	2.4  Putting it all together...
	
	When building a configuration, WinLogin first figures out
	the set of files it needs to process. For each of those
	files it retrieves the correct merge DLL that should be
	invoked for the file and invokes it, passing the name of the
	file and the paths to the source data locations it has
	found. For .INI files, the Merge Rules dictate how the data
	at all or some of the source locations gets combined into
	the files that Windows will use when it boots.  For other
	file types, a file copy is performed from one of the data
	source locations to the local machine.
	
	2.5  Network Independence
	
	One of the design goals of WinLogin is to provide a network
	independent solution to the problems that are addressed. In
	order to achieve this, much of the work performed by
	WinLogin is done from a Windows application, allowing
	WinLogin to take advantage of the generic network interfaces
	offered by Windows and supported by many network vendors.
	This allows WinLogin to work with most networks that support
	Windows 3.1.
	
	3.0  Client Details
	
	The majority of the work performed by WinLogin is done in
	the client components. This section details how the client
	is laid out on disk and what each component does.
	
	3.1  Disk Layout
	
	The WinLogin client is made up of a DOS .COM program, a
	Windows application and a number of Windows DLLs.  Total
	disk space required for the client software is approximately
	400K bytes. All of the software is installed in the Windows
	directory on the machine. In addition, a sub-directory
	called "FALLBACK" is created under the Windows directory,
	and one of two "fallback configurations" stored there.
	Finally, WinLogin's own .INI file, WINLOGIN.INI, is stored
	in the Windows directory.
	
	3.2  Fallback Configurations
	
	A fallback configuration is a set of configuration files
	that is known to successfully boot Windows. WinLogin
	maintains two fallback configurations. The first, the
	"machine fallback" is stored the
	"FALLBACK" sub-directory under the Windows directory on the
	machine. This fallback configuration is made up of some of
	the critical .INI files that were on the machine at the time
	the WinLogin client software was installed, such as the
	SYSTEM.INI and WIN.INI. The other, the "user fallback", is
	the set of files for the last user for whom WinLogin
	successfully built a configuration on the machine. These
	files are stored in the Windows directory itself, with the
	suffix .LGN replacing the usual .INI.
	
	3.3  WLCOM.COM
	
	When installed, WLCOM.COM is called WIN.COM and WIN.COM has
	been renamed W31.COM. This is done so the user can type
	"win" as expected to invoke Windows, but also get the
	additional WinLogin functionality.  WLCOM.COM retrieves the
	fallback directory from WINLOGIN.INI, finds W31.COM, sets up
	the initial boot configuration from the machine fallback
	configuration and invokes Windows via W31.COM.  WINLOGIN.EXE
	(the Windows component described in the next section)
	communicates status back to WLCOM.COM through WINLOGIN.INI.
	If there were errors in the configuration merge or reboot
	process, WLCOM.COM tries to recover using one of the
	fallback configurations.
	
	WLCOM.COM also adds one new switch to the command line
	options of Windows. With WLCOM.COM installed as WIN.COM,
	typing win /U:<username>, where the user name is the name of
	the user logged on at the machine will cause Windows to boot
	with the last user's successful configuration, if the last
	user's name matches the user name given on the command line.
	Otherwise the files in the fallback directory are used as
	the initial boot configuration, which will likely result
	in a configuration merge and reboot as described in the
	section on WINLOGIN.EXE.
	
	3.4  WINLOGIN.EXE
	
	WINLOGIN.EXE is a Windows program that performs most of the
	work associated with the client side of WinLogin. It runs in
	one of two modes, either as the Windows shell, or as a
	regular application.
	
	As the Shell
	------------
	
	When WINLOGIN.EXE is run as the shell (only done during the
	intermediate steps of booting a WinLogin machine) it follows
	this decision table:
	
	Step  Condition             Value  Action
	
	1     Is someone logged on  NO     Prompt if user wants
	     at this machine?             to continue with
	                                  current
	                                  configuration or
	                                  return to DOS. If
	                                  continue, go to
	                                  step 3, else Exit
	                                  Windows.
	
	                           YES    Continue with merge.
	
	2     Check to see if we    NO     Go to step 3.
	     need to load a
	     new configuration.
	
	                           YES    Continue with merge.
	                                  Load the configuration
	                                  (merge)for the current
	                                  user and machine (described
	                                  in the section on
	                                  WLMERGE.DLL).
	
	3     Replace shell= with correct shell
	     (e.g. progman). Add WINLOGIN.EXE
	     to load=. Restart Windows with
	     configuration now in place.
	
	As a Program
	------------
	
	When WINLOGIN.EXE is run as a program (primarily intended to
	be done automatically from load= upon Windows restart) it
	offers the user two options and a help menu. The first
	choice is to save the current configuration. If the user
	chooses this then the current user preferences are saved in
	the user's configuration data files on the network. The
	second choice is to exit the application. If WINLOGIN.EXE
	has detected any .INI file changes the user is prompted to
	save them, but not forced to do so. The application then
	exits.
	
	In addition, WINLOGIN.EXE "wakes up" every few seconds to
	check for logon status changes and reacts according to this
	decision table:
	
	Condition                Action
	
	Someone was logged on    Offer choice of continue with
	and now no one is.       current config (disables saving) or
	                        Exit to DOS.
	
	Someone was logged on    Offer choice of continue with current
	and now someone else is  config (disables saving) or Restart
	                        Restart Windows with a new
	                        configuration built for the current
	                        user.
	
	No one was logged on     Offer choice of continue with currect
	and now someone is.      config (disables saving) or Restart
	                        Windows with a new configuration
	                        built for the current user.
	
	When the user attempts to Exit Windows, such as from Program
	Manager's File.Exit menu, WINLOGIN.EXE prompts the user to
	save their current configuration if they wish to do so. When
	this is completed Windows exits.
	
	If the user just shuts off the machine, no attempt is made
	to save their configuration changes (if they made any) back
	to the database.
	
	3.5  WLMERGE.DLL
	
	The real work of building a user's configuration is done in
	WLMERGE.DLL, that is called across a private interface by
	WINLOGIN.EXE. This DLL provides a set of data driven
	functions that build up the set of configuration files
	that is to be used in the restart of Windows. In addition,
	the DLL also provides functions that save user preferences
	back to the user's portion of the database and functions that
	determine if loading or saving the configuration need be done
	at all for a given user/machine/time combination.
	
	In building a configuration, WLMERGE.DLL first merges the
	file WLMERGE.INI. When built this file has the following
	format:
	
	[load]
	file=file1
	file=file2
	.....
	file=fileN
	
	[destinations]
	file1=<full path for file1's destination>
	file2=<full path for file2's destination>
	...
	fileN=<full path for fileN's destination>
	
	The [load] section is likely a combination of files that the
	admin has assigned globally, to the group the user is a
	member of or to the user specifically. Where those files
	need to be for Windows to find them during the boot process
	is generally machine dependent, and thus the [destinations]
	section is likely to come from the current workstation's data
	set. Thus the same set of files get built no matter which
	machine the user logs in from, but they can end up in the
	correct location on each different machine.
	
	WLMERGE.DLL then iterates through each of the files in the
	files section, invoking the proper merge DLL (based on data
	in the File Type table in the database) on that file,
	passing  the desired destination for the result. If a file
	is not found in the destinations section, then WLMERGE.DLL
	uses the current Windows directory as the desired
	destination.
	
	Any configuration file merge, whether an .INI file merge or
	a simple file copy, works off source data. The process
	WinLogin uses to find the data sources is outlined in
	section 2.3.
	
	Saving a configuration basically reverses the process,
	iterating through the list of files again, this time
	invoking the Save function of each merge DLL, passing the
	destination as the source for the save.
	
	Two merge DLLs are included in the WinLogin system:
	MSINIMRG.DLL and COPYMRG.DLL.
	
	3.6  MSINIMRG.DLL
	
	MSINIMRG.DLL implements the merge and diff (save) code for
	Microsoft Windows Standard .INI files.
	
	For the merge, it is important to note that MSINMRG.DLL
	drives off the Merge Rules stored in the shared database. If
	an entry is to be processed (and thus end up in the
	constructed file) it must have a Merge Rule in the database.
	
	For the diff (save), MSINIMRG.DLL drives off the sections
	and keys found in the file itself, not the merge rules in
	the database. The behavior of the system on "unknown" keys
	(those for which the database contains no merge rule) is
	controlled by a setting in WINLOGIN.INI.   The administrator
	may control if user installed applications that put entries
	in the standard .INI files follow the user as user
	preferences or if they are ignored when the user's
	preferences are stored back to the database.  If allowed,
	the system can be configured to track application .INI files
	other than the standard Windows .INI files by adding the
	file to the [files] section of WLMERGE.INI.
	
	The diff algorithm assumes that the default data set has not
	changed since the merge, which allows us to compare the
	value in the file with the default data, extracting the
	different part as the user preference. This assumption is
	checked on a file level, and if the default data set has
	changed since the merge time of the file to be processed,
	the file is not processed. This helps ensure data integrity
	in the data set, but may cause the occasional changed user
	preference to be lost. Whenever this case is encountered the
	user is notified of the situation via a popup.
	
	3.7  COPYMRG.DLL
	
	COPYMRG.DLL implements a very simple merge and diff
	algorithm that may be applied to virtually any kind of file.
	Given a file name and the desired destination path:
	
	if the file exists in the user directory
	    copy it from there to the destination path
	else if the file exists in the group directory
	    copy it from there to the destination path
	else if the file exists in the admin directory
	    copy it from there to the destination path
	else if the file exists in the wksta (platform) directory
	    copy it from there to the destination path
	
	"Diffing" the file:
	
	if the file exists in the user directory
	    copy it from destination path to there
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbWinLoginSearch kbZNotKeyword3 kbWin310 kbWin311 kbWinLogin100
	Version           : WINDOWS:3.1,3.11; :1.0
	
	=============================================================================
	
