---
layout: page
title: "Q186499: Terminal Server Registry Settings for Applications"
permalink: kb/186/Q186499/
---

## Q186499: Terminal Server Registry Settings for Applications

	Article: Q186499
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	Registry" Help topic in Regedit.exe or the "Restoring a Registry Key" Help
	topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	This article discusses the registry settings that can be used to modify
	application behavior on a Terminal Server computer.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	Controlling Application Execution in Execute Mode
	-------------------------------------------------
	
	Several compatibility bits can be set for an application, registry path, or .ini
	file to change how a Terminal Server computer handles the merging of application
	initialization data when a session is in execute mode. These compatibility bits
	are set in the registry under the following subkey:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion
	  \Terminal Server\Compatibility
	
	  NOTE: The above registry key is all one path; it has been wrapped for
	  readability.
	
	There are three separate keys for applications, .ini files, and registry entries
	under this registry path.
	
	The default settings work for most applications, but can be further tuned using
	the compatibility bits described below.
	
	WARNING: These compatibility bits should only be changed if an application is not
	working properly.
	
	The first set of compatibility bits indicates the version of the application that
	the settings are for. Not all combinations are useful; for example, an MS-DOS
	application will never make any registry calls. Because the path to the file is
	not specified, and multiple applications may use the same file name (for
	example, Setup.exe and Install.exe are now regularly used for installation
	programs), specifying the application type will help ensure the compatibility
	settings do not affect other applications with the same file name.
	
	Add together the values of the bits you want to set to determine the String
	value. For example, to return the user name instead of the computer name for
	both 16-bit and 32-bit versions of Myapp.exe, create a subkey in the registry by
	performing the following steps:
	
	1. Start Registry Editor (Regedt32.exe), and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE \Software\Microsoft\Windows NT\CurrentVersion
	  \Terminal Server\Compatibility\Applications\Myapp
	
	  NOTE: The above registry key is one path; it has been wrapped for
	  readability.
	
	2. On the Edit menu, click "Add Value" (without the quotation marks), and type
	  the following information:
	
	  "Value Name: Flags of Type: REG_DWORD" (without the quotation marks)
	
	  In the Data field, type the hex value of 11C (add 0x00000004 for 16-bit
	  Windows applications, 0x00000008 for 32-bit Windows applications, 0x00000010
	  to return user name instead of computer name, and 0x00000100 to disable
	  registry mapping).
	
	Applications
	------------
	
	The compatibility bits below affect the application when it is running and are
	located in the following registry subkey:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion
	  \Terminal Server\Compatibility\Applications\Appname
	
	  NOTE: The above registry key is one path; it has been wrapped for
	  readability.
	
	NOTE: Appname is the name of the application's executable file (for example, if
	the executable file name for an application is Prog1.exe, Appname would be
	PROG1).
	
	Compatibility Bits:
	
	- MS-DOS application: 0x00000001
	
	- OS/2 application: 0x00000002
	
	- Windows 16-bit application: 0x00000004
	
	- Windows 32-bit application: 0x00000008
	
	- Return user name instead of computer name: 0x00000010
	
	- Return Terminal Server build number: 0x00000020
	
	- Disable registry mapping for this application: 0x00000100
	
	- Do not substitute user Windows directory: 0x00000400
	
	- Limit the reported memory: 0x00000800
	
	Use the "Return user name instead of computer name" flag <or bit?> for
	applications that use the computer name as a unique identifier. This returns the
	user's name to the application, thereby giving each user of the application a
	unique identifier.
	
	Use the "Disable registry mapping for this application" <bit? Or flag?> to
	retain only one global copy of the registry variables used by the application.
	
	The "Do not substitute user Windows directory" bit, when set, retains the
	SystemRoot directory for GetWindowsDirectory API calls. The default action if
	this bit is not set is to replace all paths to the Windows directory with the
	path to the user's Windows directory.
	
	.INI Files
	----------
	
	The compatibility bits below control .ini file propagation and are located in the
	following registry subkey:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion
	  \Terminal Server\Compatibility\IniFiles\Inifile
	
	  NOTE: The above registry key is one path; it has been wrapped for
	  readability.
	
	NOTE: Inifile is the name of the .ini file (for example, if the .ini file name
	for an application is Prog1.ini, Inifile would be PROG1).
	
	Compatibility Bits:
	
	- Windows 16-bit application: 0x00000004
	
	- Windows 32-bit application: 0x00000008
	
	- Synchronize user .ini file to system version: 0x00000040
	
	- Do not substitute user Windows directory: 0x00000080
	
	The "Synchronize user .ini file to system version" bit<or flag?>, when set,
	adds new entries from the system master .ini file when the application is
	started, but does not delete any existing data in the user's .ini file. The
	default action, if this bit is not set, is to overwrite the user's .ini file if
	it is older than the system master .ini file.
	
	The "Do not substitute user Windows directory" bit, when set, retains the
	SystemRoot directory for file paths in the .ini file when the system master
	version of the .ini file is copied to the user's Windows directory. The default
	action, if this bit is not set, is to replace all paths to the Windows directory
	with the path to the user's Windows directory.
	
	Registry Paths
	--------------
	
	The compatibility bits below control registry propagation and are located in the
	following registry subkey:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion
	  \Terminal Server\Compatibility\RegistryEntries\PathName
	
	  NOTE: The above registry key is one path; it has been wrapped for
	  readability.
	
	NOTE: Pathname is the registry path under the key HKEY_CURRENT_USER\Software (for
	example, if the registry variable path for an application is HKEY_CURRENT_USER
	\Software\BrandX\Prog1, Pathname would be Brandx\Prog1).
	
	Compatibility Bits:
	
	- Windows 32-bit application: 0x00000008
	
	- Disable registry mapping for application: 0x00000100
	
	The "Disable registry mapping for application" bit<Or flag?>, when set,
	adds new entries from the system master registry image when the application is
	started, but does not delete any existing data in the user's registry. The
	default action, if this bit is not set, is to delete and overwrite the user's
	registry data if it is older than the system master registry data.
	
	For more information, please see the following Microsoft Knowledge Base article:
	
	  Q186514 Terminal Server Does Not Support Sentinel Devices
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
