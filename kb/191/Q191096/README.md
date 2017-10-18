---
layout: page
title: "Q191096: PRB: Multiple &quot;System Files Are Out of Date&quot; Errors"
permalink: kb/191/Q191096/
---

## Q191096: PRB: Multiple &quot;System Files Are Out of Date&quot; Errors

	Article: Q191096
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbwizard kbAppSetup kbVBp kbVBp500 kbVBp600 kbOSWin95 kbOSWin98 kbGrpDSVB kbGr
	Last Modified: 11-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install a Microsoft Visual Basic application, you may receive the
	following message:
	
	  Setup cannot continue because some system files are out of date on your
	  system. Click OK if you would like setup to update these files for you now.
	  You will need to restart Windows before you can run setup again. Click cancel
	  to exit setup without updating system files.
	
	After Windows restarts and you begin the installation again, the error message
	appears again.
	
	NOTE: This occurs with either the Microsoft Visual Basic 5.0 Application Setup
	Wizard (ASW) or the Microsoft Visual Basic 6.0 Package and Deployment Wizard
	(PDW).
	
	CAUSE
	=====
	
	Both installation programs (ASW and PDW) use the same method to delay the
	replacement of in-use system files until reboot. For any system files that are
	in use, the new files are saved as temporary files in the Temp folder. In order
	to replace the existing files with the .tmp files, the system will use the
	Wininit.ini file on WIN 9x systems. On Windows NT and Windows 2000, the system
	will call the MoveFileEx function with the MOVEFILE_REPLACE_EXISTING flag. This
	function places the file replacement instructions in the following registry
	key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session
	  Manager\PendingFileRenameOperations
	
	If something interferes with this replace and rename operation, these files are
	not updated. Therefore, once the computer reboots and restarts the installation
	program, the same error message appears.
	
	There are a number of reasons why this can happen, but the two most common are as
	follows:
	
	- The .tmp files are being deleted.
	
	- The Temp folder is on a different drive or partition from the operating
	  system. By default, the operating system is installed to either the Windows
	  or Winnt folder.
	
	RESOLUTION
	==========
	
	The following are resolutions to this problem:
	
	1. Copy the TEMP and TMP environment variables to a folder that is in the same
	  drive partition as the Windows system files. To do this, open a command
	  prompt window and type the following at the prompt:
	
	  " Set TMP=C:\TEMP
	  Set TEMP=C:\TEMP " (without the quotation marks)
	
	  This will save the TEMP and TMP environment variables to a folder named "Temp"
	  that resides on the C: drive.
	
	  NOTE: The folder must exist prior to carrying out these steps.
	
	  Once these environment variables are set, the application should then install
	  and continue past the message on reboot.
	
	2. If your Autoexec.bat file contains the following line (or similar):
	
	  If exists c:\temp\*.tmp del c:\temp\*.tmp
	
	  comment it out by placing "REM" in front of it.
	
	3. Disable any Anti-virus software (or other memory resident programs) and try
	  running Setup again. Often the best way to accomplish this is to run setup in
	  Safe Mode. It may also be necessary to copy all of the setup files to a
	  temporary folder on the hard drive disk and run Setup.exe from there.
	
	4. Leftover files from a failed Setup attempt can also cause this problem. If
	  found, delete the msftqws.pdw subfolder and its contents from the Temp
	  folder. Also look in the Windows or Winnt folder for Setup1.exe and any *.CAB
	  files from previous installs, and delete them. This should be done after each
	  failed install.
	
	5. Some logon scripts can cause this problem, so try to run Setup before logging
	  on to the network.
	
	6. Make sure you are deploying the same file versions that you are using on your
	  development machine. The wizards have a special folder where they look first
	  for files to package. If found, a file is used from this source instead of
	  the file your system is running.
	
	  For Visual Basic 6.0, it is especially important to make sure that you are
	  deploying the proper version of Mdac_Typ.exe. The version of this file should
	  match the Reference to "Microsoft ActiveX Data Objects 2.x Library" in your
	  project. The default locations for this folder are as follows:
	
	  For Visual Basic 5.0:
	
	  C:\Program Files\DevStudio\VB\setupkit\kitfil32\sys32
	
	  For Visual Basic 6.0:
	
	  C:\Program Files\Microsoft Visual Studio\VB98\Wizards\PDWizard\Redist
	
	7. The system files that may need to be updated are listed in the Bootstrap or
	  Bootstrap Files section of the Setup.lst file created with your package.
	  These files can also be installed separately from self-extracting files found
	  on Microsoft's support web site. Please see the References section for
	  information about obtaining these files.
	
	8. You can also edit the Setup.lst file. Look in the Setup1 Files or Files
	  section for files to be copied to either $(WinSysPath) or
	  $(WinSysPathSysFile). For example, Msvcrt.dll and Mfc42.dll. You can copy
	  these lines to the end of the Bootstrap or Bootstrap Files section. You must
	  renumber these lines so that the File numbers are sequential, for example
	  "File1=...", File2=..." and so on. If these lines are removed from their
	  original section, the remaining lines must be renumbered to maintain a
	  sequential list.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q140570 HOWTO: Move Files That Are Currently in Use
	
	
	  Q174135 PRB: Setup Cannot Continue...System Files Are Out of Date
	
	  Q189743 INFO: Description of Setup.lst Sections
	
	  Q180071 FILE: Msvbvm50.exe Installs Visual Basic 5.0 Run-Time Files
	
	  Q192461 FILE: Visual Basic 6.0 Sample Installs Run-Time Files
	
	  Q290887 FILE: VBRun60sp5.exe Installs Visual Basic 6.0 SP5 Run-Time Files
	
	  Q279764 PRB: Multiple "System Files Are Out of Date" Errors When Visual Basic
	  6.0 Application Installed on Windows 2000 Computer
	
	Visual Basic 5.0 Programmer's Guide, Chapter 17 "Distributing Your Applications"
	
	Online Help for Microsoft Visual Basic, version 6.0
	
	Additional query words: directory machine
	
	======================================================================
	Keywords          : kberrmsg kbwizard kbAppSetup kbVBp kbVBp500 kbVBp600 kbOSWin95 kbOSWin98 kbGrpDSVB kbGrpDSVBDB kbDSupport kbOSWinME 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
