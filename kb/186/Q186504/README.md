---
layout: page
title: "Q186504: Terminal Server Commands: CHANGE"
permalink: kb/186/Q186504/
---

## Q186504: Terminal Server Commands: CHANGE

	Article: Q186504
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The CHANGE command replaces CHGLOGON, CHGUSER, and CHGPORT from Citrix
	Winframe.
	
	The change utilities are used to change current settings. The change command can
	invoke any one of the change utilities.
	
	change [logon | port | user] [/?]
	
	/? (help): Displays the syntax for the command and information about the
	command's options.
	
	CHANGE LOGON
	------------
	
	Disables all logons for system maintenance.
	
	Syntax:
	
	change logon [/enable] [/disable] [/query] [/?]
	
	Parameters:
	
	none
	
	/enable
	
	  Enables logons from client sessions, but not from the console.
	
	/disable
	
	  Disables subsequent logons from client sessions, but not from the console.
	  Currently logged on users are not affected.
	
	/query
	
	  Displays the current logon status.
	
	/? (help)
	
	  Displays the syntax for the command and information about the command's
	  options.
	
	Security Restrictions:
	
	Only administrators can run CHANGE LOGON.
	
	CHANGE LOGON -- Additional Notes:
	
	The change logon command disables logons from client sessions other than the
	system console. Users that are currently logged on are not affected. Client
	sessions are always re-enabled when you restart the system. If you are connected
	to the Terminal Server from a remote location and disable client sessions, and
	if you log off before re-enabling client sessions, you will not be able to
	reconnect. You need to logon at the system console in order to re-enable
	sessions.
	
	CHANGE PORT
	-----------
	
	Changes the COM port mappings to be compatible with DOS applications.
	
	Syntax:
	
	change portchange port COMx=COMychange port /d COMxchange port [/?]
	
	Parameters:
	
	COMx=COMyMaps COM port x to port y.
	
	/d COMx
	
	  Deletes the mapping for COM port COMx.
	
	/? (help)
	
	  Displays the syntax for the command and information about the command's
	  options.
	
	CHANGE PORT -- Additional Notes:
	
	Most MS-DOS applications support only COM1 though COM4 serial ports. CHANGE PORT
	maps a serial port to a different port number, allowing applications that cannot
	access high-numbered COM ports to access the serial port. For example, to map
	COM12 to COM1 for use by a MS-DOS application, type change port com12=com1.
	Remapping works only for the current session and is not retained if you logoff
	and then log on again.
	
	Run CHANGE PORT without any parameters to display the available COM ports and the
	current COM port mappings.
	
	CHANGE USER
	-----------
	
	Changes the .ini file mapping setting.
	
	Syntax:
	
	change user [/install | /execute | /query] [/?]
	
	Parameters:
	
	none
	
	/install
	
	  Disables the ability to map the .ini files in the home directory. All .ini
	  files are read and written to the Terminal Server system directory. You must
	  disable .ini file mapping when installing applications on a Terminal Server.
	  See the Notes section below for details.
	
	/execute
	
	  Enables the ability to map.ini files to the home directory. This is the
	  default setting.
	
	/query
	
	  Displays the current .ini file mapping setting.
	
	/? (help)
	
	  Displays the syntax for the command and information about the command's
	  options.
	
	CHANGE USER -- Additional Notes:
	
	Use change user /install before installing an application to create .ini files
	for the application in the Terminal Server system directory. These files are
	used as master copies for the user-specific .ini files. After installing the
	application, use change user /execute to revert to normal .ini file mapping.
	
	The first time you run the application, the application looks in the home
	directory for its .ini files. If the .ini files are not found in the home
	directory, but are found in the Terminal Server system directory, the Terminal
	Server copies the .ini files to the home directory. This ensures that each user
	has a unique copy of the application's .ini files. Any new .ini files are
	created in the home directory. Each user should have a unique (user-specific)
	copy of the .ini files for an application to avoid instances where several users
	have incompatible application setups; for example, different default directories
	or screen resolutions.
	
	When the system is put into install mode (change user /install), several things
	happen. All Registry entries that are created are shadowed under
	HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Terminal
	Server\Install.
	
	Keys added to HKEY_CURRENT_USER are copied under the Software key and keys added
	to HKEY_LOCAL_MACHINE are copied under MACHINE. If the application queries the
	Windows directory (using system calls like GetWindowsDirectory), the Terminal
	Server returns the %systemroot% directory. If any .ini file entries are added
	(using system calls such as WritePrivateProfileString), they are added to the
	.ini files under the %systemroot% directory.
	
	When the system is put back in execution mode (change user /execute),and the
	application tries to read a Registry entry under HKEY_CURRENT_USER that doesn't
	exist, the Terminal Server checks to see if a copy of the key exists under the
	TerminalServer\Install section of the Registry. If it does, the keys are copied
	to the appropriate location under HKEY_CURRENT_USER. If the application tries to
	read from an .ini file that doesn't exist, the Terminal Server looks for that
	.ini file under the system root. If the .ini file is in the system root, it is
	copied to the home directory\Windows. If the application queries the Windows
	directory, the Terminal Server returns the home directory\Windows.
	
	When you log on, the Terminal Server checks to see if the system .ini files are
	newer than the .ini files on your computer. If the system version is newer, your
	.ini file is replaced with the newer version or the new entries in the system
	version are merged into your .ini file. This depends on whether or not the
	INISYNC bit, 0x40, is set for this .ini file. See the Advanced Installation
	Topics section of the on-line help for additional information. Your previous
	version of the .ini file is renamed to Inifile.ctx. If the system Registry
	values under Install\ are newer than your version under HKEY_CURRENT_USER, then
	your version of the keys is deleted and replaced with the new keys from under
	Install\.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
