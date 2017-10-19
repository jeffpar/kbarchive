---
layout: page
title: "Q187627: Command Line Options for Internal App Compatibility Tools"
permalink: /kb/187/Q187627/
---

## Q187627: Command Line Options for Internal App Compatibility Tools

	Article: Q187627
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
	
	The ACREGL, ACSR, and ACINIUPD commands are included with Terminal Server. They
	work within the provided application compatibility scripts. This article
	includes information on the use and options of these tools.
	
	MORE INFORMATION
	================
	
	The ACREGL, ACSR, and ACINIUPD commands were written to fill the specific needs
	of the scripts that Microsoft ships with the product. They aren't necessarily
	flexible enough for any general application compatibility script.
	
	ACREGL
	------
	
	Acregl Filename EnvVarName Key Value Options
	
	This tool looks up the desired key and value in the registry. It writes the
	result as a SET statement to the indicated filename. Options allow some
	massaging of the value before it is written to the file.
	
	Key must start with HKLM or HKCU. Often the key will be in quotes, as it contains
	embedded spaces.
	
	Value may be blank ("") to look up the default value for a key. The ACREGL tool
	only supports values that return a string type. REG_SZ is ideal. REG_MULTI_SZ
	would only contain the first item in the list. REG_EXPAND_SZ should work but it
	won't explicitly get expanded.
	
	The options parameter can be blank ("") or it can be one of the two following
	choices:
	
	"STRIPCHARxn" searches from right to left. It strips the rightmost n instances of
	the character x. The count may be omitted for a single character, but it is
	still recommended. Otherwise you need to be careful; a backslash will be treated
	as an escape character for the following quote. For example:
	
	"STRIPCHAR\3" changes C:\WINNT40\Profiles\All Users\Start Menu to C:\WINNT40
	
	"STRIPPATH" removes the path from the value. Example:
	
	"STRIPPATH" changes C:\WINNT40\Profiles\All Users\Start Menu to Start Menu
	
	Full Example:
	
	ACREGL MyKey.Cmd INSTLOC "HKLM\Software\Microsoft\Office\8.0\Common\InstallRoot"
	"" ""
	
	This command creates the file MyKey.Cmd with the contents:
	
	SET INSTLOC=C:\Program Files\Microsoft Office
	
	An application compatibility script can then use "CALL MyKey.Cmd" to retrieve the
	value of the registry key.
	
	The acregl command returns an errorlevel of one indicating failure and a zero
	indicating success.
	
	ACSR
	----
	
	Acsr Search Replace InputFile OutputFile
	
	This command performs simple text replacement. It reads from the Input file and
	writes to the Output file. Each occurrence of the search string is changed to
	the replace string. Any of the parameters can contain environment variables if
	desired.
	
	An errorlevel of one indicates failure and a zero is returned indicating
	success.
	
	Example:
	
	ACSR "#ROOTDRIVE#" "%RootDrive%" Template\Office97.key Office97.key
	
	This example changes the text #ROOTDRIVE# to the value of the RootDrive
	environment variable. It reads the Office97.key from the template subdirectory
	and writes to an Office97.key file in the current directory.
	
	ACINIUPD
	--------
	
	Aciniupd [/e | /k] [/u] [/v] ini_file section key new_value
	
	The aciniupd tool is used to update .ini files. It has several modes and
	options.
	
	The /e option is used to update the value for a given key and section. For
	example, the following will update the value of the USER-DOT-PATH key in the
	Microsoft Word section of WinWord6.ini:
	
	Aciniupd /e "Winword6.ini" "Microsoft Word" USER-DOT-PATH
	"%RootDrive%\OFFICE43\WINWORD"
	
	The /k option updates a key name with the new key name in the specified section.
	In the following example, the key WZTABLE.MDA in the Libraries section of
	MsAcc20.Ini is changed.
	
	NOTE: This option changes the left side of the KEY=VALUE statement while the /e
	option changes the right side.
	
	Aciniupd /k "Msacc20.ini" Libraries "WZTABLE.MDA"
	"%RootDrive%\OFFICE43\ACCESS\WZTABLE.MDA"
	
	The /u option updates the .INI file in the user's windows directory instead of in
	the system directory. This is accomplished by changing the system mode to
	execute, if currently in install mode. The mode returns to its original state
	when the tool completes.
	
	Finally, the /v option is for verbose mode. In verbose mode, error and status
	messages are displayed as appropriate. The tool operates silently by default.
	
	As with the other two utilities, aciniupd returns an errorlevel of one for
	failure and zero for success.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
