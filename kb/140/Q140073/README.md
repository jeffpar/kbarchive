---
layout: page
title: "Q140073: PC NTMMTA: Err Msg: Failure to Initialize Modem Session"
permalink: /kb/140/Q140073/
---

## Q140073: PC NTMMTA: Err Msg: Failure to Initialize Modem Session

{% raw %}

	Article: Q140073
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run an asynchronous instance of the Multitasking MTA for Windows NT (NT
	MMTA) with a U.S. Robotics modem, the following error may appear on the Monitor
	screen and in the log files:
	
	  Failure to initialize modem session.
	
	CAUSE
	=====
	
	This is caused by the modem not resetting properly after a remote user or
	another postoffice Mail External program (EXTERNAL.EXE) connects and disconnects
	properly when you use the USUSRHS script from a command line or as a Microsoft
	Windows NT service.
	
	NOTE: The USUSRHS script is not properly resetting the modem.
	
	RESOLUTION
	==========
	
	Get the USUSR5.EXE file from CompuServe in the Remote/Modems library of the
	Microsoft Workgroup Applications forum (GO MSWGA).
	
	USUSR5.EXE is a self-extracting archive containing the following files:
	
	- USUSRHS.SCR: The replacement file (version 1.4). This file will also work
	  with the Mail External program (EXTERNAL.EXE) and Microsoft Mail Remote for
	  Windows.
	
	- USUSRHS.MDM: The source file for USUSRHS.SCR. Use SCRCOMP.EXE to compile into
	  the .SCR or script file format.
	
	- README.TXT: The document containing instructions for performing the upgrade.
	
	NOTE: The DIP switches on the modem must be set to factory defaults. Auto-answer
	must be set off. For the Sportster 14.4 and 28.8, this means DIP# 3,5,8 are
	down, and all other switches are up. For External modems, in order for this
	script to work properly, the machine that the modem is running on MUST have a
	16550AF UART. The effective performance of this script may be affected by modem
	ROM and Flash ROM bios upgrades.
	
	MORE INFORMATION
	================
	
	In this situation, the first session appears to run properly. The remote user or
	postoffice connects, sends/receives mail, disconnects without error on their
	end. However, the U.S. Robotics modem on the NT MMTA side does not reset
	properly.
	
	If the -Q2 command line switch or DebugXCSI EXTERNAL.INI entry is used, question
	marks will appear next to the IN and OUT entries on the Monitor screen and in
	the SESSION.LOG while the NT MMTA is trying to reset the modem.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q132746 External Will Not Answer with USR Sportster Modem v.34
	
	  Q92438 External Mail Program's -Qx Option
	
	  Q139368 PC NTMMTA: SESSION.LOG Displays Pulse as Baud Rate
	
	
	Additional query words: 3.50 async usr courier dual standard
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	

{% endraw %}
