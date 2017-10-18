---
layout: page
title: "Q167759: SMS: IE 3.01 Security Patch Causes SMSRUN16 to Stop Responding"
permalink: kb/167/Q167759/
---

## Q167759: SMS: IE 3.01 Security Patch Causes SMSRUN16 to Stop Responding

	Article: Q167759
	Product(s): Microsoft Systems Management Server
	Version(s): 1.1,1.2
	Operating System(s): 
	Keyword(s): kbenv kbinterop kbnetwork kbConfig smsconfig
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Installation of the Microsoft Internet Explorer 3.01 Security Patch requires a
	restart to finish processing. During the initial log on to some Windows 95
	Systems Management Server clients following this restart, Smsrun16.exe may
	either cause a general protection fault (GPF) or stop responding. Later logons
	are unaffected. A typical GPF looks like the following :
	
	  SMSRUN16 caused a general protection fault in module SMSRUN16.EXE at
	  0001:00001e07.
	  Registers:
	  EAX=00004d4c CS=2677 EIP=00001e07 EFLGS=00000212
	  EBX=00020000 SS=2667 ESP=00004a46 EBP=801d4d58
	  ECX=00010000 DS=2667 ESI=00025074 FS=013f
	  EDX=03e52667 ES=0000 EDI=000001e0 GS=0000
	  Bytes at CS:EIP:
	  26 83 7f 02 01 74 03 e9 ae 01 ff 36 8a 2f 8d 86
	  Stack dump:
	  507401e0 4a6f2667 2677a179 26674ab6 01a44109 00b301a4 4a7601d1 00010005
	  66000000 26676602 85e04a8d 4ab62677 1ad52667 00002667 26672c46 4a9a266f
	
	If Smsrun16.exe stops responding, Package Command Manager (PCM) and Program Group
	Control (PGC) may not be initialized correctly; however, examination of the
	client's Smsrun.log file located in the Ms\Sms\Logs directory outlines how far
	the execution of Smsrun16.exe progressed before it stopped responding.
	
	     [04/16/97 11:44:08] C:\MS\SMS\BIN\SMSRUN16.EXE ==>
	     Starting execution, command line =  <empty>
	
	     [04/16/97 11:44:08] C:\MS\SMS\BIN\SMSRUN16.EXE ==> Windows 95 network
	     driver detected.
	
	     [04/16/97 11:44:08] C:\MS\SMS\BIN\SMSRUN16.EXE ==> Logon root directory
	     set to \\COLINHUNT\SMS_SHR
	
	An unhindered logon's Smsrun.log looks similar to the following, successful
	completion being indicated by the final "End of main message loop" entry :
	
	     [04/15/97 14:32:28] C:\MS\SMS\BIN\SMSRUN16.EXE ==>
	     Starting execution, command line =  <empty>
	
	     [04/15/97 14:32:28] C:\MS\SMS\BIN\SMSRUN16.EXE ==> Win95 network driver
	     detected.
	
	     [04/15/97 14:32:28] C:\MS\SMS\BIN\SMSRUN16.EXE ==> Logon root dir set to
	     \\COLINHUNT\SMS_SHR
	
	     [04/15/97 14:32:29] C:\MS\SMS\BIN\SMSRUN16.EXE ==> Searching top level
	     windows for SMS Client
	
	     [04/15/97 14:32:30] C:\MS\SMS\BIN\SMSRUN16.EXE ==> Launching
	     C:\MS\SMS\BIN\appctl95.exe
	
	     [04/15/97 14:32:31] C:\MS\SMS\BIN\SMSRUN16.EXE ==> Launching
	     C:\MS\SMS\BIN\pcmwin16.exe /debug >pcmd.log
	
	     [04/15/97 14:32:31] C:\MS\SMS\BIN\SMSRUN16.EXE ==> Launching
	     C:\MS\SMS\BIN\mifwin.exe /SMSLS
	
	     [04/15/97 14:32:31] C:\MS\SMS\BIN\SMSRUN16.EXE ==> End of main message
	     loop.
	
	CAUSE
	-----
	
	The post-restart installation mechanism of the Security Patch causes Smsrun16.exe
	to be locked out.
	
	
	WORKAROUND
	----------
	
	To work around this problem, do either of the following:
	
	- Restart the affected client and log on again.
	
	  -or-
	
	- Install Internet Explorer 3.02, rather than the 3.01 Security Patch. Internet
	  Explorer 3.02 implements all the security fixes provided with version 3.01,
	  but does not exhibit this problem.
	
	STATUS
	------
	
	Microsoft has confirmed this to be a problem with Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms hang hung lock locked up freeze frozen IE
	
	======================================================================
	Keywords          : kbenv kbinterop kbnetwork kbConfig smsconfig 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : :1.1,1.2
	Issue type        : kbprb
	
	=============================================================================
	
