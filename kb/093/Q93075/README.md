---
layout: page
title: "Q93075: PC Win: Description of 3.0 Setup Process"
permalink: /kb/093/Q93075/
---

## Q93075: PC Win: Description of 3.0 Setup Process

	Article: Q93075
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the version 3.0 Microsoft Mail for Windows client
	installation process. It tells you which files are transferred, modified, or
	replaced when you install version 3.0 of Microsoft Mail for Windows, on a
	Microsoft Windows version 3.0a or 3.1 client workstation. Windows 3.0a
	differences, if any, are noted at the end of each section.
	
	The primary purpose of this article is to give Mail administrators a rough idea
	of what happens during the setup process. Use this document as a guide when
	doing a manual installation.
	
	Definitions
	-----------
	
	     Term                Description
	  ---------------------------------------------------------------------
	
	  WINDIR              Represents the previously installed Windows
	                      directory
	
	  MSMAIL              Represents the newly installed Microsoft Mail for
	                      Windows, version 3.0, directory created during
	                      setup
	
	  EXCELDIR\XLSTART    Represents a previously installed Microsoft Excel
	                      version 3.0 directory
	
	  WINWORDDIR          Represents a previously installed Microsoft Word
	                      for Windows directory
	
	Transferred Files, Their New Locations, and Descriptions
	--------------------------------------------------------
	
	C:\WINDIR\ 
	  MSMAIL.INI        Mail For Windows initialization file
	  MSMAILPV.INI      Mail for Windows providers initialization file
	
	C:\WINDIR\MSAPPS\PROOF\ 
	  MSSP_AM.LEX       Dictionary
	  MSSPELL.DLL       Spell checker
	
	C:\WINDIR\SYSTEM\ 
	  SENDFILE.DLL      Send File option for File Manager
	  AB.DLL            Address book
	  DEMILAYR.DLL      Memory
	  FRAMEWRK.DLL      User interface
	  MAILSPL.EXE       Spooler
	  MSSFS.DLL         PC Mail transport
	  PABNSP.DLL        Personal address book name service provider
	  MAPI.DLL          Mail application interface
	  STORE.DLL         Message store
	  SCHEDMSG.DLL      Schedule+ invite form
	  MAILMGR.DLL       Authorization
	  VFORMS.DLL        Standard forms
	
	C:\MSMAIL\ 
	  MSMAIL.EXE        Mail For Windows program file
	  MSMAIL.HLP        Mail For Windows help file
	  MSMAIL.LES        Computer-based training lessons
	  MSMAIL3.FON       Default proportional font
	  WINHELP.HLP       Windows 3.1 help file for Help
	  CBTLIB3.DLL       Computer-based training
	  CLKLIB.DEX        Demo files
	  CONVERT.EXE       Converts folders from Mail 2.1
	  FAXVIEW.EXE       FAX viewer
	  FAXVIEW.HLP       FAX viewer help file
	  PLAY.EXE          Runs the demo
	
	C:\MSMAIL\MSMAIL\ 
	  FILES.INI         Mail driver information
	
	C:\EXCELDIR\XLSTART\ 
	  SMI.XLA           Excel 3.0 macro to send mail
	
	C:\WINWORDDIR\ 
	  SMIINST.DOT       Word for Windows macro to send mail
	
	Windows Version 3.0a -- Additional Files Transferred
	----------------------------------------------------
	
	C:\WINDIR\SYSTEM\ 
	  COMMDLG.DLL       Common dialogs
	  OLECLI.DLL        OLE client
	  OLESVR.DLL        OLE server
	  SHELL.DLL         Drag & drop resources database
	
	Windows Version 3.0a -- Files Replaced
	--------------------------------------
	
	C:\WINDIR\ 
	  WINHELP.EXE       Windows 3.1 Help engine
	  WINHELP.HLP       Windows 3.1 Help file for help
	
	Modifications to WIN.INI
	------------------------
	
	Adds three lines to the existing [Extensions] section:
	
	  [Extensions]
	  dcx=\MSMAIL\FAXVIEW.EXE ^.dcx
	  scr=\MSMAIL\FAXVIEW.EXE ^.scr
	  mmf=\MSMAIL\MSMAIL.EXE
	
	Creates a new [Mail] section:
	
	  [Mail]
	  MAPI=1
	
	Creates new [MS Proofing Tools] section or modifies the [MS Proofing Tools]
	section if it already exists:
	
	  [MS Proofing Tools]
	  Spelling 1033,0=\WINDIR\MSAPPS\PROOF\MSSPELL.DLL,
	  \WINDIR\MSAPPS\PROOF\MSSP_AM.LEX
	  Custom Dict 1=\MSMAIL\CUSTOM.DIC
	
	Adds one line to the existing [Sounds] section:
	
	  [Sounds]
	  MailBeep=
	
	Modifications to WINFILE.INI
	----------------------------
	
	Creates new [AddOns] section or modifies existing [AddOns] section:
	
	  [AddOns]
	  Mail File Manager Extension=\WINDIR\SYSTEM\SENDFILE.DLL
	
	Changes to Program Manager
	--------------------------
	
	Creates new group file (MICROSOF.GRP) if one does not exist and adds the
	Microsoft Mail icon as a group item with these properties:
	
	  Description:        Microsoft Mail
	  Command Line:       \MSMAIL\msmail.exe
	  Working Directory:  \MSMAIL
	
	Changes to REG.DAT
	------------------
	
	Places a line in the registration database (REG.DAT) for Microsoft Mail using
	\MSMAIL\MSMAIL.EXE as the command line.
	
	Additional query words: 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
