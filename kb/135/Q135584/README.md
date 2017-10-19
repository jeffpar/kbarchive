---
layout: page
title: "Q135584: Unattended Installation of Windows NT 3.51 Service Pack 1"
permalink: /kb/135/Q135584/
---

## Q135584: Unattended Installation of Windows NT 3.51 Service Pack 1

	Article: Q135584
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbsetup kbsmsUtil smsappscripts smsutil
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The installation of the Windows NT 3.51 Service Pack 1 requires manual input. To
	perform an unattended installation of the Service Pack, you modify the Service
	Pack information (.INF) file.
	
	NOTE: Do not perform the unattended installation of the Service Pack from the
	Package Command Manager Service (PCMSVC32) because the Service Pack Setup
	program fails to restart the computer. Use the desktop Package Command Manager
	(PCMWIN32) instead.
	
	
	MORE INFORMATION
	================
	
	To perform an unattended installation of the Windows NT 3.51 Service Pack 1,
	close all applications and do the following:
	
	
	NOTE: Specific line changes to the files below are valid only for Windows NT 3.51
	Service Pack 1. The changes described in this article are intended to be used as
	a starting point, and deal only with the initial and final dialog messages. If
	other errors are encountered during the update process, such as low disk space
	or incorrect Windows NT version, additional dialog messages may appear.
	
	1. Copy all Service Pack files to a working directory accessible by the site
	  server that will be used to send the package.
	
	2. In the working directory, copy UPDATE.INF to a new file. For example:
	
	  COPY UPDATE.INF SP1QUIET.INF.
	
	3. Using a text editor, edit the SP1QUIET.INF file. Comment out, by placing a
	  semi-colon (;) in front of, the six lines that start at line 305 (SHELL
	  through ENDIF). This suppresses the initial dialog box that normally displays
	  the following:
	
	  Setup is going to update your Windows NT system with the English version of
	  the update program. If you wish to cancel the update process, please press
	  Cancel or press OK to continue.
	
	4. Comment out, with a semi-colon, three lines starting at line 473 (UI START
	  through UI POP). This suppresses the dialog box that prompts users to allow
	  the system to be restarted. The system will reboot automatically.
	
	5. Create an intermediate script file. For example, create a file called SP1.BAT
	  with the following contents:
	
	        rem Supporting batch file to apply Windows NT 3.51 Service Pack 1
	
	        rem Create a safe place to store a local copy of the Service Pack
	        rem so we can give SETUP.EXE an absolute path to the source
	        rem directory.
	
	        md c:\nt351sp1
	
	        rem Copy the Service Pack files from the CDM set by PCM to the
	        rem safe directory. Administrators should remove this using another
	        rem (PCM) method later.
	
	        copy *.* c:\nt351sp1\*.*
	
	        rem Run Windows NT Setup
	
	        setup.exe /s c:\nt351sp1 /i c:\nt351sp1\sp1quiet.inf
	
	6. Create a .PDF file (for example, SP1QUIET.PDF) containing the following:
	
	  NOTE: If you want to configure additional inventory properties, place the in
	  the PDF as well. However this single property should be sufficient.
	
	        [PDF]
	        Version=1.0
	
	        [Unattended Setup]
	        CommandLine=sp1.bat
	        CommandName=Unattended NT 3.51 SP1 Installation
	        UserInputRequired=FALSE
	        SynchronousSystemExitRequired=TRUE
	        SupportedPlatforms=Windows NT 3.1 (x86), Windows NT 3.1 (MIPS),
	        Windows NT
	
	        3.1 (Alpha)
	
	        [Package Definition]
	        Product=Windows NT
	        Version=3.51
	        Comment=NT 3.51 Service Pack 1 English
	        SetupVariations=Unattended
	
	        [Setup Package for Inventory]
	        InventoryThisPackage=TRUE
	        Detection Rule Part 1=file 1
	
	        [file 1]
	        FILE=NTOSKRNL.EXE
	        COLLECT=FALSE
	        Checksum=
	        CRC=
	        DATE=7, 27, 95
	        SIZE=805264
	        TIME=
	        BYTE=
	        WORD=
	        LONG=
	        TOKEN 1=
	        TOKEN 2=
	        TOKEN 3=
	        TOKEN 4=
	
	7. Import the .PDF file and point it to the subdirectory containing all the
	  Service Pack 1 files (including the SP1QUIET.INF file). When you install this
	  package on unattended servers, remember to make the package mandatory (check
	  the mandatory time also), and send it only to systems running Windows NT
	  version 3.51. You must also check the System (Background) Task in the package
	  properties.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbsetup kbsmsUtil smsappscripts smsutil 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
