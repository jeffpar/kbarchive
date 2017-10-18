---
layout: page
title: "Q103801: FFAPI: Err Msg: 190 Automatic File Transfer Not Supported"
permalink: kb/103/Q103801/
---

## Q103801: FFAPI: Err Msg: 190 Automatic File Transfer Not Supported

	Article: Q103801
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (FFAPI), version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use the automatic file transfer feature (the -W parameter on the
	command-line) with version 3.0 of the Microsoft Mail Software Development Kit
	(Remote FFAPI), this error message is displayed:
	
	  190 - 1 - 0 - Automatic File transfer not supported by this version of FFAPI.
	
	CAUSE
	=====
	
	In version 3.0 of Remote FFAPI, the automatic file transfer feature is not
	currently implemented, even though the "File Format API for Gateways and
	Applications" manual states that it is. The -W parameter invokes the above error
	message when you use the parameter with RMPGET.EXE and RMTPUT.EXE.
	
	Pages 46, 47, 93, 95,96, and 98 of the "File Format API for Gateways and
	Applications" manual incorrectly reference the automatic file transfer feature
	(-W) of the Remote API.
	
	RESOLUTION
	==========
	
	You can simulate the automatic file transfer feature in an application that can
	understand and create the format used by Microsoft Mail.
	
	MORE INFORMATION
	================
	
	You can also simulate the message that results from using the automatic file
	transfer feature by matching the format used by the -W parameter. You can create
	this kind of message by using APPGET.EXE or RMTGET.EXE on a mail message that
	used APPPUT.EXE and the -W parameter to send the message.
	
	The message should look similar to this example:
	
	  VERSION:3.00
	  TO:CSI:COMPANY/DEPT/jsmith
	  FROM:CSI:COMPANY/DEPT/sjones
	  DATE:1992-11-29
	  TIME:23:44
	  SUBJECT:Automatic File Transfer (1 files)
	  PRIORITY:F
	  ATTACHMENT:config.sys 291
	  TEXT:152
	
	Automatic File Transfer
	-----------------------
	
	  Use Attachments/Save or FFAPI AppGet -w to save.
	
	Attached files:
	---------------
	
	  config.sys
	  DEVICE=C:\WIN\HIMEM.SYS
	  DOS=HIGH,UMB
	  FILES=35
	  BUFFERS=20
	  LASTDRIVE=Z
	
	  DEVICE=C:\WIN\EMM386.EXE NoEMS x=d800-dfff
	  devicehigh=c:\dos\ansi.sys
	
	  STACKS=9,256
	  FCBS=20,0
	
	  device=C:\WIN\protman.dos /i:C:\WIN
	  device=C:\WIN\workgrp.sys
	  device=C:\WIN\ubnei.dos
	  device=C:\WIN\ubxps.dos
	
	
	Additional query words: 3.00 ErrMsg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailFFAPI300
	Version           : :3.0
	
	=============================================================================
	
