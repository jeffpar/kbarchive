---
layout: page
title: "Q203492: HOWTO: Remove Games from Windows Setup, Add Remove Program"
permalink: kb/203/Q203492/
---

## Q203492: HOWTO: Remove Games from Windows Setup, Add Remove Program

	Article: Q203492
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95,98,98 Second Edition
	Operating System(s): 
	Keyword(s): kbOSWin95 kbOSWin98 kbWSH
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to prevent GAMES from appearing under Accessories in
	the Control Panel's Add/Remove Programs. Accessories is on the Windows Setup tab
	in Add/Remove Programs.
	
	MORE INFORMATION
	================
	
	To remove the option for GAMES under Add/Remove Programs, rename the section
	[GAMES] to [NOGAMES]:
	
	- For Windows 95 the file to modify is Windows\Inf\Applets.inf
	
	- For Windows 98 the file to modify is WINDOWS\Inf\Appletpp.inf
	
	Administrators can automate the process by adding a line similar to the following
	in the login script:
	
	  Cscript \\<server>\<share>\NOGAMES.VBS //T:5 //B
	
	Where <server> is the name of the server and <share> is the name of
	the share. //T:5 Terminates the script after five seconds if it is still
	running. //B Tells the script to run in non-interactive mode.
	
	Sample Code
	-----------
	
	The NoGames.vbs sample below automatically renames the section to NOGAMES.
	
	NOTE: Windows Script Host (WSH) must be installed on a Windows 95 machine to run
	VBScript. For more information on WSH and how to install it please visit the
	Scripting Web site on the MSDN Scripting site
	(http://msdn.microsoft.com/scripting). Using a text editor, create a VBScript
	file called NoGames.vbs with the following lines:
	
	  ' NOGAMES.VBS removes games from Add/Remove under Windows setup
	  ' Windows 95 requires Windows Script Host to run the script.
	  ' Windows Script Host is built into Windows 98
	
	  Const ForReading = 1, ForWriting = 2, ForAppending = 8
	
	  '*** The following 3 lines get the path of the INF folder
	  Set WSHShell = WScript.CreateObject("WScript.Shell")
	  Set WshSysEnv = WshShell.Environment("PROCESS")
	  INFfolder = WshSysEnv("WINDIR") & "\INF"  
	
	  '*** The applet function returns the name of the INF
	  '*** that has the game section based on Windows version.
	  Function Applet()
	    WinVerPath = _
	    "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\VersionNumber"
	    On Error Resume Next
	    WinVer = WSHShell.RegRead(WinVerPath)
	    If WinVer = "4.00.950" then
	      Applet = INFfolder & "\APPLETS"  'Win95 or Win95a
	    ElseIf WinVer = "4.00.1111" then
	      Applet = INFfolder & "\APPLETS"  'Win95b or Win95c
	    ElseIf WinVer = "4.10.1998" then
	      Applet = INFfolder & "\APPLETPP" 'Win98
	    ElseIf WinVer = "4.10.2222" then   
	      Applet = INFfolder & "\APPLETPP" 'Win98 Second Edition
	    Else
	      WScript.Quit        'Unknown version exit script
	    End If
	  End Function
	
	  '*** The following section copies the file to be modified
	  '*** to *.bak then recreates the original file with [nogames]
	  Set fs = CreateObject("Scripting.FileSystemObject")
	  File1 = Applet() & ".INF"   'path and file with [games]
	  File2 = Applet() & ".BAK"   'name of backup file.
	  fs.copyfile file1, file2    'copy file1 to file2
	  Set A = fs.OpenTextFile(File2, ForReading, False)
	  Set b = fs.CreateTextFile(File1, True)
	  Do While a.AtEndOfStream <> True    
	    textline = a.ReadLine    
	    if StrComp(trim(textline), "[GAMES]", vbTextCompare)=0 then
	      textline ="[NOGAMES]"
	    end if
	    b.WriteLine textline
	  Loop
	  a.Close
	  b.Close
	
	For additional information about how to determine which folder Windows is
	installed in, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q305792 How to Determine Which Folder Windows Is Installed In
	
	REFERENCES
	==========
	
	For additional information on scripting, and the Windows Script Host, see the
	MSDN Scripting site (http://msdn.microsoft.com/scripting).
	
	Additional query words: Freecell hearts minesweeper solitaire games
	
	======================================================================
	Keywords          : kbOSWin95 kbOSWin98 kbWSH 
	Technology        : kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : WINDOWS:95,98,98 Second Edition
	Issue type        : kbhowto
	
	=============================================================================
	
