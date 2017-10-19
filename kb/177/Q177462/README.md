---
layout: page
title: "Q177462: INFO: Troubleshooting Cmdlines.txt During an Unattended Setup"
permalink: /kb/177/Q177462/
---

## Q177462: INFO: Troubleshooting Cmdlines.txt During an Unattended Setup

	Article: Q177462
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbtshoot kbOPK kbSBK
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article covers issues dealing with Cmdlines.txt and running programs within
	it. In general, any program that can be run at an MS-DOS command prompt while
	running Windows NT 4.0 can be run in the Cmdlines.txt. The Cmdlines.txt is run
	at the end of the graphical portion of setup, after the display settings have
	been set. Windows NT is running in kernel mode and networking has been started.
	
	MORE INFORMATION
	================
	
	The first thing that needs to be verified if a program does not run in the
	Cmdlines.txt file is to make sure that the file is being read at all. The entry
	OEMPREINSTALL = Yes needs to be entered into the Unattended.txt file in the
	[UNATTEND] section. The file Cmdlines.txt must be located directly under the
	$OEM$ directory on the distribution server. If either of these is not true or
	misspelled, then the Cmdlines.txt will not be read at all. The format of
	Cmdlines.txt is as follows:
	
	  [COMMANDS]
	  "./setup.exe /Q"
	
	Standard MS-DOS command conventions do apply, "./" means run the file from the
	current directory. All files, including Cmdlines.txt, in the $OEM$ directory are
	copied to the temporary directory location of C:\$WIN_NT$.~LS\$OEM$. When
	Cmdlines.txt is carried out, this temporary directory is the current directory.
	In the example above, Setup.exe needs to copied to the $OEM$ on the distribution
	server. For organizational purposes, it may be a good idea to place files in
	sub-directories under the $OEM$. An example would be as follows:
	
	- I386\$OEM$\Cmdlines.txt
	
	- I386\$OEM$\SP3\Update.exe and the rest of the Service Pack 3 files
	
	The entry in Cmdlines.txt would be "./sp3/update.exe -u -n -q". Using the $OEM$
	directory in this manner will keep the base $OEM$ directory from becoming
	cluttered.
	
	If the application being installed needs quotation marks, such as referencing
	long file names, the use of batch files is necessary. Windows NT command prompt
	conventions state that files or folder with long file names must be surrounded
	by quotation marks. The entry "./setup.exe "information file with a long file
	name.inf"" will not work in the Cmdlines.txt file because of the double
	quotation marks being used. To get around this, create a file named Batch.bat,
	place this file in the $OEM$ directory. The batch.bat file would contain the
	following line:
	
	     setup.exe "information file with a long file name.inf"
	
	A normal batch file does not need quotation marks around the entire command as it
	does in the Cmdlines.txt file. In the Cmdlines.txt file, put the entry
	"./batch.bat"
	
	If there are several entries in the Cmdlines.txt file and most of them work but
	one or two appear not to run, there are several different methods of determining
	where the problem lies. There is no built in method of stopping the Cmdlines.txt
	process, you can however, place the pause command within the Cmdlines.txt file.
	For example:
	
	     [COMMANDS]
	     "./setup.exe /Q"
	     "pause"
	
	After Setup.exe starts, a CMD prompt will be left open with a message that states
	"Press any key to continue". At this point, you may see an error message that
	Setup.exe is giving that may help the vendor of the application determine what
	the problem is. Pressing the Space Bar will continue to run the Cmdlines.txt
	file. You can place the pause command several times throughout the Cmdlines.txt
	file.
	
	Another way of halting the Cmdlines.txt process is by using the Windows
	Diagnostic Utility (winmsd). To do this, copy Winmsd.exe to the $OEM$ directory
	and then place the following line "./winmsd" as the only entry in the
	Cmdlines.txt file. When this entry is processed, the winmsd will start and the
	Cmdlines.txt file will stop and wait until winmsd is closed. After the winmsd
	program has started, from the File Menu, choose "Run a Program". From the Run
	line, type "cmd" which will open an ineligible command prompt in a window. Press
	ALT + Enter simultaneously; that will maximize the MS- DOS command prompt
	window. Type each of the lines that are in the Cmdlines.txt file to find out
	which entry is failing. Make modifications to each of the lines until the
	program you were trying to run starts.
	
	Many problems that deal with Cmdlines.txt are because of pathing problems where
	the executable file cannot be found. Using winmsd will allow modifications to be
	made without having to restart the entire setup process. When you go to an
	MS-DOS command prompt, the current path is C:\$WIN_NT$.~LS\$OEM$. Any files that
	you need access to need to be copied into the distribution server's $OEM$
	directory. After testing has been completed, type "exit" at the MS_DOS command
	prompt, and then close winmsd. The unattended setup will now continue.
	
	Some applications will not run properly from the Cmdlines.txt file, this is
	sometimes because of the shell, Windows NT Explorer, not being loaded. Windows
	NT Explorer is not running during the graphical portion of setup, some setup
	routines check for Windows NT Explorer and fail with error messages such as
	"Initialization Failed" or "Explorer did not start". These setup routines need
	to be run after Windows NT has been started and can be done by using the runonce
	registry key.
	
	Other problems that can occur are because of security issues, Windows NT setup is
	run as the local system account, not Administrator. Some applications that are
	security sensitive may have problems running in the Cmdlines.txt file. Error
	messages that may be displayed are "Access Denied" or "You do not have
	privileges to run this program". These setup routines need to be run with the
	Administrator account and after Windows NT has been fully loaded.
	
	For more information on unattended installations, download the Windows NT
	Deployment Guide at:
	
	http://www.microsoft.com/ntworkstation/info/Deployment-guide.htm
	
	REFERENCES
	==========
	
	Other articles dealing with the use of Cmdlines.txt:
	
	Q158447 How to Run a Program Only Once After Unattended Setup of WinNT
	
	Q165533 General Sysdiff Troubleshooting Tips
	
	Q167211 Cmdlines.txt Does Not Recognize Parameters Surrounded by Quotes
	
	Q168814 Installing WinNT 4.0 Service Packs During Unattended Install
	
	Additional query words: unattend Setup Insatll
	
	======================================================================
	Keywords          : kbsetup kbtshoot kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
