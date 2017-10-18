---
layout: page
title: "Q253534: Gathering System Information Without GUI Interaction"
permalink: kb/253/Q253534/
---

## Q253534: Gathering System Information Without GUI Interaction

	Article: Q253534
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbtoolkbfaq
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to gather system information without Graphical User
	Interface (GUI) interaction, so that Microsoft Support Professionals can
	troubleshoot configuration problems on a computer that is running Windows NT 4.0
	or Windows 2000.
	
	MORE INFORMATION
	================
	
	The basic tool that is used to gather system information in Windows NT 4.0 is
	Winmsd.exe. This utility does not exist in Windows 2000; the Msinfo32.exe tool
	has replaced it. It is located in the <System_drive>:\Program Files\Common
	Files\Microsoft Shared\MSInfo folder. There is no path to this folder by
	default, so you must start Msinfo32.exe by using the full path. For additional
	information, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q229798 Msinfo32.exe Starts When You Try to Start Winmsd
	
	In addition to a more detailed graphical view of a local or remote computer's
	configuration, Msinfo32.exe supports additional command-line switches to
	generate text-based system information files about the software and hardware
	configuration from a local or remote computer. This is also true for Windows NT
	4.0-based computers, with minor restrictions.
	
	If you cannot use Winmsd.exe locally or do not have an appropriate tool to gather
	system information on a Windows NT 4.0-based computer, a remote output from
	Msinfo32.exe might be sufficient.
	
	If a remote Console service is installed on the Windows NT 4.0-based computer,
	you can use the following command to create a text-based system information
	file:
	
	  winmsd.exe /report path:\report.log
	
	Msinfo32.exe supports the following command-line switches to generate a local or
	remote system information file:
	
	+----------------------------------------------------------------------+
	| Switch       | Description                                           | 
	+----------------------------------------------------------------------+
	| /?           | Display this Help                                     | 
	+----------------------------------------------------------------------+
	| /msinfo_file | Open the specified .nfo or .cab file                  | 
	+----------------------------------------------------------------------+
	| /nfo or /s   | Outputs an .nfo file with the specified file name     | 
	+----------------------------------------------------------------------+
	| /report      | Outputs a text-format file to the specified file name | 
	+----------------------------------------------------------------------+
	| /computer    | Connects to the specified computer                    | 
	+----------------------------------------------------------------------+
	| /categories  | Displays or outputs the specified categories          | 
	+----------------------------------------------------------------------+
	| /category    | Set focus to a specific category at startup           | 
	+----------------------------------------------------------------------+
	
	Note that the generation of the text file can take some time, depending on the
	complexity of the system.
	
	Additional query words: winmsd reomte system configuration msinfo32
	
	======================================================================
	Keywords          : kbenv kbtool kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro
	Version           : WINDOWS:2000; winnt:4.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
