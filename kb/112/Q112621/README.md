---
layout: page
title: "Q112621: How to Use Workgroup Add-On and WFWG 3.11 on Same Computer"
permalink: kb/112/Q112621/
---

## Q112621: How to Use Workgroup Add-On and WFWG 3.11 on Same Computer

	Article: Q112621
	Product(s): Microsoft Access Distribution Kit
	Version(s): MS-DOS:3.11; WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Workgroup Add-On for MS-DOS, version 3.11 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows for Workgroups 3.11 and Workgroup Add-On for MS-DOS on the
	same machine, a black screen appears when you start Windows for Workgroups, or
	the following error messages are displayed:
	
	  Invalid VxD dynamic link call to device number 0028, service 8031.
	
	  Invalid VxD dynamic link call to device number 0028, service 800A.
	
	CAUSE
	=====
	
	With Workgroup Add-On for MS-DOS, if a NET SHARE command is issued to give the
	workstation server capabilities, the Workgroup Add-On network services must be
	stopped from its own directory in order for Windows for Workgroups to initialize
	properly. For example, the following command must be issued to stop the
	Workgroup Add-On network:
	
	  C:\NET\NET STOP
	
	The NET STOP command must be issued from the Workgroup Add-On directory (in this
	example, C:\NET) or Windows for Workgroups cannot run.
	
	RESOLUTION
	==========
	
	Workgroup Add-On for MS-DOS and Windows for Workgroups 3.11 can be run
	successfully on the same machine if certain conditions are met. Entries in the
	CONFIG.SYS and AUTOEXEC.BAT files need to be initialized from the Windows for
	Workgroups directory to generate full functionality of both products. If
	Workgroup Add-On for MS-DOS was installed after Windows for Workgroups 3.11, the
	following changes need to be made:
	
	1. Edit the CONFIG.SYS file as follows
	
	  Change
	
	     DEVICE=C:\NET\IFSHLP.SYS
	
	  to:
	
	     DEVICE=C:\WINDOWS\IFSHLP.SYS
	
	2. Edit the AUTOEXEC.BAT file as follows
	
	  Change
	
	     C:\NET\NET START
	
	  to:
	
	     C:\WINDOWS\NET START
	
	To start the network services for Workgroup Add-On for MS-DOS, change to the
	Workgroup Add-On directory and type the appropriate NET START command. To avoid
	problems, ensure that a NET STOP command is issued from within the Workgroup
	Add-On directory before you start Windows for Workgroups.
	
	MORE INFORMATION
	================
	
	You can simplify the logon and logoff procedures for Workgroup Add-On for MS-DOS
	by using batch files. To log on, create a one-line batch file that reads
	"C:\NET\NET START" and name it START.BAT. To log off, create a one-line batch
	file that reads "@ECHO Y | C:\NET STOP" and name it STOP.BAT. To log on, type
	"start" (without the quotation marks); to log off, type "stop" (without the
	quotation marks).
	
	NOTE: You can also add "win" (without the quotation marks) as the last line in
	the STOP.BAT file to log off and start Windows automatically.
	
	Additional query words: 3.11 3.11a black screen hang addon
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311 kbWFW311DOS
	Version           : MS-DOS:3.11; WINDOWS:3.11
	
	=============================================================================
	
