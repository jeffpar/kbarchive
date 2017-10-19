---
layout: page
title: "Q93173: PC Win: Description of 3.0b Setup Process"
permalink: /kb/093/Q93173/
---

## Q93173: PC Win: Description of 3.0b Setup Process

	Article: Q93173
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the client installation process for Microsoft Mail for
	Windows, version 3.0b. It tells you which files are transferred, modified, or
	replaced when you install Mail for Windows on a Microsoft Windows version 3.1
	client workstation.
	
	The primary purpose of this article is to give Mail administrators a rough idea
	of what happens during the setup process. Use this document as a guide when
	doing a manual installation.
	
	Definitions
	-----------
	
	  Term              Description
	  ---------------------------------------------------------------------
	
	  \WINDIR\          Represents the previously installed Windows
	                    directory
	
	  \MSMAIL\          Represents the newly installed Microsoft Mail for
	                    Windows 3.0b directory created during setup
	
	  C:                Represents the drive letter
	
	Files and Directories Added by the Setup Process
	------------------------------------------------
	
	C:\WINDIR\ 
	  MSMAIL.INI        Mail for Windows initialization file
	  MSMAILPV.INI      Mail for Windows providers initialization file
	  SCHDPLUS.INI      Schedule+ for Windows initialization file
	  MSSFS.DLL         Microsoft Shared File System (PC Mail) transport
	
	C:\WINDIR\MSAPPS\PROOF\ 
	  MSSP_AM.LEX       Dictionary
	  MSSPELL.DLL       Spell checker
	
	C:\WINDIR\MSMAIL\MSMAIL\ 
	  TRNSCHED.DLL      Schedule+ transactions
	  FILES.INI         Mail driver information
	  MSMAIL.INI        Mail for Windows initialization file
	  SCHDPLUS.INI      Schedule+ for Windows initialization file
	
	C:\MSMAIL\ 
	  MSMAIL.EXE        Mail For Windows program file
	  CONVERT.EXE       Converts folders from Mail 2.1
	  FAXVIEW.EXE       FAX viewer
	  IMPEXP.DLL        Import/Export of folders
	  SCHEDMSG.DLL      Schedule+ invite form
	  VFORMS.DLL        Standard forms
	  AB.DLL            Address book
	  DEMILAYR.DLL      Memory
	  FRAMEWRK.DLL      User interface
	  MAILMGR.DLL       Authorization
	  MAILSPL.EXE       Spooler
	  MAPI.DLL          Mail application interface
	  MSMAIL3.FON       Default proportional font
	  PABNSP.DLL        Personal address book name service provider
	  STORE.DLL         Message store
	  SENDFILE.DLL      Send File option for File Manager
	  FAXVIEW.HLP       FAX Viewer help file
	  MSMAIL.HLP        Mail for Windows help file
	  WINHELP.HLP       Windows 3.1 help file for Help
	  CBTLIB3.DLL       Computer-based training
	  CLKLIB.DEX        Demo files
	  MSMAIL.LES        Computer-based training lessons
	  PLAY.EXE          Runs the demo
	
	Modifications to WIN.INI
	------------------------
	
	Adds three key lines to the existing [Extensions] section:
	
	  [Extensions] dcx=C:\MSMAIL\FAXVIEW.EXE ^.dcx
	  scr=C:\MSMAIL\FAXVIEW.EXE ^.scr
	  mmf=C:\MSMAIL\MSMAIL.EXE /F ^.mmf
	
	Creates a new [Mail] section and adds a single key line:
	
	  [Mail]
	  MAPI=1
	
	Creates a new [MS Proofing Tools] section or modifies the [MS Proofing Tools]
	section if it already exists and adds two key lines for Spelling and Customer
	Dict:
	
	  [MS Proofing Tools]
	  Spelling 1033,0=C:\WINDIR\MSAPPS\PROOF\MSSPELL.DLL,
	
	  C:\WINDIR\MSAPPS\PROOF\MSSP_AM.LEX
	
	  Custom Dict 1=C:\MSMAIL\CUSTOM.DIC
	
	Adds one key line to the existing [Sounds] section:
	
	  [Sounds]
	  MailBeep=
	
	Files and Directories Changed by the Setup Process
	--------------------------------------------------
	
	C:\WINDIR\ 
	
	  PROGMAN.INI       Program Manager initialization file
	  REG.DAT           Registration database for Microsoft Mail
	  WIN.INI           Windows initialization file
	  WINFILE.INI       File Manager initialization file
	
	Changes to PROGMAN.INI
	----------------------
	
	Creates new group file (Microsof.grp) if one does not exist and adds the
	Microsoft Mail icon as a group item with these properties:
	
	  Description:        Microsoft Mail
	  Command Line:       \MSMAIL\msmail.exe
	  Working Directory:  \MSMAIL
	
	Changes to REG.DAT
	------------------
	
	Places a line in the registration database (REG.DAT) for Microsoft Mail using
	\MSMAIL\MSMAIL.EXE as the command line.
	
	Changes to WINFILE.INI
	----------------------
	
	Creates new [AddOns] section or modifies existing [AddOns] section:
	
	  [AddOns]
	  Mail File Manager Extension=\WINDIR\SYSTEM\SENDFILE.DLL
	
	Additional query words: 3.00 3.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300b
	Version           : WINDOWS:3.0b
	
	=============================================================================
	
