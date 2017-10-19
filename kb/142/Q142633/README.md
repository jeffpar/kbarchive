---
layout: page
title: "Q142633: How to Run a Program Only Once During an Unattended Setup"
permalink: /kb/142/Q142633/
---

## Q142633: How to Run a Program Only Once During an Unattended Setup

	Article: Q142633
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Windows NT Workstation version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The unattended setup mode of Windows NT 3.51 does not offer a way to run a
	program once the setup is complete. Nevertheless, this could be very useful if
	you want to set up other components on your system after the completion of the
	unattended setup (in order to run a batch file or install some other products,
	for example).
	
	This article describes how to run any kind of program during an unattended setup.
	
	MORE INFORMATION
	================
	
	Running any kind of program during an unattended setup is not normally possible.
	The following steps explains how to run a program only once after an unattended
	setup.
	
	The system must be installed with AutoLogon enabled so that the first time the
	system is booted after setup, a session is automatically opened and a specific
	program can be launched.
	
	The following steps explain how to set up Windows NT and to run a program
	automatically after the setup:
	
	1. Save the USERDEF hive.
	
	  Prepare a standard setup of Windows NT (for example, not unattended) and save
	  the file %SystemRoot%\System32\Config\UserDef as x:\userdef.def (Drive X is a
	  network share from which the automated setup of Windows NT will be run).
	
	2. Copy the I386 directory from the Windows NT distribution compact disc to the
	  network drive X.
	
	3. Copy the resource kit utility Regini.exe to Drive X.
	
	4. Modify Initial.inf to enable AutoLogon:
	
	  a. Type the following commands:
	
	     Expand -r Initial.in_
	
	     Del Initial.in_
	
	  b. Change Initial.inf to read as follows:
	
	     [Install-Win-Ini-Alter-1]
	     ReplaceIniKeyValue "Win.ini", Winlogon, DefaultUserName,
	     administrator
	     ReplaceIniKeyValue "Win.ini", Winlogon, DefaultPassword, ""
	     ReplaceIniKeyValue "Win.ini", Winlogon, AutoAdminLogon,"1"
	
	     For more information, please see the following article in the Microsoft
	     Knowledge Base:
	
	  ARTICLE-ID: Q136327
	  TITLE : How to Enable AutoLogon During an Automated Setup
	
	5. Edit Registry.inf to modify the run registry entry:
	
	  a. Type the following commands:
	
	     expand -r x:\registry.in_
	
	     del x:\ registry.in_
	
	  b. Edit Registry.inf and search for the section [MakeStartupEntry]. Just
	     above the line 'set Status = STATUS_SUCCESSFUL', insert the following
	     lines:
	
	     >
	       set KeyPath   = { +
	                      {SOFTWARE,          $(NoTitle), $(MaskAllAccess)}, +
	                      {Microsoft,         $(NoTitle), $(MaskAllAccess)}, +
	                      {"Windows NT",      $(NoTitle), $(MaskAllAccess)}, +
	                      {CurrentVersion,    $(NoTitle), $(MaskAllAccess)}, +
	                      {"Windows",         $(NoTitle), $(MaskAllAccess)}, +
	                     }
	       set KeyValues = { +
	                      {run, $(NoTitle), $(!REG_SZ), "runonce.bat"} +
	                     }
	       shell "" CreateKey $(!REG_H_CUSER) $(KeyPath) $(KeyValues)
	       ifint $($ShellCode) != $(!SHELL_CODE_OK)
	         goto end_MakeStartupEntry
	       endif
	       ifstr(i) $($R0) != STATUS_SUCCESSFUL
	         goto end_MakeStartupEntry
	       else
	         CloseRegKey $($R1)
	       endif
	
	6. Write a regini script by writing the x:\autolog.ini file to read as follows:
	
	    \registry\machine
	         Software
	           Microsoft
	             Windows NT
	               CurrentVersion
	                 Winlogon
	                   AutoAdminLogon = REG_SZ 0
	
	    user:Software\Microsoft\Windows NT\CurrentVersion\Windows
	       run = REG_SZ
	
	  This will disable AutoLogon and remove the running of Runonce.bat when the
	  administrator logs on.
	
	7. Create a Runonce.bat batch file.
	
	  Write a batch file and save it as x:\runonce.bat. This batch file can include
	  any command and will be executed only once after the unattended setup.
	
	  The two last lines of the Runonce.bat batch file must be as follows:
	
	  "copy %SystemRoot%\System32\Userdef.def SystemRoot%\System32\config\userdef.
	  regini %SystemRoot%\System32\autolog.ini" (without the quotation marks)
	
	8. Modify Dosnet.inf.
	
	  During the first phase of unattended setup, all system files are temporarily
	  copied to C:\$Win_nt$.~ls and C:\$Win_nt$.~bt. Dosnet.inf lists the files
	  that have to be copied to the system.
	
	  Edit x:\Dosnet.inf and add the following lines to the end of the [Files]
	  section:
	
	  d1,RUNONCE.BAT d1,USERDEF.DEF d1,REGINI.EXE d1,AUTOLOG.INI
	
	9. Modify Txtsetup.sif.
	
	  Txtsetup.sif is used during the text-mode phase of the unattended setup. It
	  tells the setup process which files have to be copied to the hard disk.
	
	  Add the following lines to the end of the [Files] section:
	
	  runonce.bat = dx,d7,,2,0,0 userdef.def = dx,d7,,2,0,0 regini.exe =
	  dx,d7,,2,0,0 autolog.ini = dx,d7,,2,0,0
	
	  The files above are copied to the System32 directory.
	
	10. Run the following command:
	
	  x:\winnt32.exe /u:<path>\unattend.txt /s:x:\
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
