---
layout: page
title: "Q260168: SMS: Err Msg: Unable to Read Site Data from Caplist.ini File"
permalink: /kb/260/Q260168/
---

## Q260168: SMS: Err Msg: Unable to Read Site Data from Caplist.ini File

	Article: Q260168
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are performing a remote Microsoft Systems Management Server (SMS)
	client installation, you are unable to install the SMS client software on the
	remote Microsoft Windows NT computer. The Wnremote.log file from the client,
	logs the following error:
	
	  ERROR: Unable to read site data from CAP list file
	  "C:\WINNT\sms_temp\caplist.ini" (-2147467259) The operation completed
	  successfully.
	  Error locating CAP (-2147467259) C:\WINNT\sms_temp\CCMBtLdr.exe 4/18/2000
	  1:28:24 PM 235 (0xEB)
	  Could not spawn CCMBoot.exe -
	
	On the client computer, in the %windir%\sms_temp folder, the Caplist.ini file is
	not present.
	
	CAUSE
	=====
	
	This behavior occurs because the Caplist.ini file is not present in the
	SMS\Inboxes\Clidata.src folder. Therefore, it is not being copied to the client
	computer's %windir%\sms_temp folder. The client computer needs to check the
	Caplist.ini file in the %windir%\sms_temp folder in order to get the information
	it needs to communicate with the client access point (CAP) in order to continue
	the remote installation.
	
	WORKAROUND
	==========
	
	To work around this behavior, copy the Caplist.ini file from the
	CAP_<XYZ>\Clidata.box folder to the SMS\Inboxes\clidata.src folder of the
	CAP, where <XYZ> is the site code.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : :2.0,2.0 SP1
	Issue type        : kbprb
	
	=============================================================================
	
