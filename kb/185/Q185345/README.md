---
layout: page
title: "Q185345: SMS: &quot;SMS Logon Server Not Found&quot; Message Displayed at Logon"
permalink: /kb/185/Q185345/
---

## Q185345: SMS: &quot;SMS Logon Server Not Found&quot; Message Displayed at Logon

	Article: Q185345
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2 SP3
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 11-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing Systems Management Server 1.2 Service Pack 3, the following
	message will appear on Systems Management Server client computers that are not
	currently connected to the network (for example, an undocked laptop computer):
	
	  SMS Logon Server Not Found. This could be due to temporary network problems
	  or inactive servers, but is not critical. Continue looking for an SMS logon
	  server?
	
	CAUSE
	=====
	
	This message is a feature that was added in Service Pack 3 for Systems
	Management Server, version 1.2.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2 Service Pack 3. Enhanced functionality has been added in the latest
	U.S. service pack for Systems Management Server version 1.2 to allow user
	control of this message. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	By default, Systems Management Server 1.2 Service Pack 4 also displays the
	message. After applying Systems Management Server 1.2 Service Pack 4, if you
	want to suppress the message display, you must perform the following steps:
	
	1. Make sure the following files are located in the
	  <Smsroot>\Site.srv\Maincfg.box\Client.src\X86.bin and
	  <Smsroot>\Logon.srv\X86.bin directories:
	
	     File name      Date          Size
	     -----------------------------------------
	
	     Smsrun16.exe   08/13/1998   176,000 bytes
	     Smsrun32.exe   08/13/1998    94,176 bytes
	     Smssvr16.exe   08/15/1998    98,672 bytes
	     Smssvr32.exe   08/15/1998    89,656 bytes   
	
	2. Run the appropriate command for your client, as indicated below:
	
	     Client computer operating system      Command to run
	     ----------------------------------------------------
	
	     Windows 95                            cli_dos /u
	     Windows NT                            cli_nt /u
	
	3. Log off the client computer.
	
	4. Log back on to the client computer and allow it to upgrade.
	
	5. After the upgrade is complete, restart the client computer.
	
	  NOTE: The Ms\Sms\Bin directory should now contain either Smsrun16.exe or
	  Smsrun32.exe, depending on the operating system. The new files Smssvr16.exe
	  and Smssvr32.exe are not installed on the client computer.
	
	6. After the files are updated on the client, add the following lines to the
	  Sms.ini file:
	
	     [local]
	     DisableFailedServerDialog=TRUE
	
	7. After completing the above steps, the dialog box will no longer appear. To
	  turn it back on, change the line in the Sms.ini file to read:
	
	     [local]
	     DisableFailedServerDialog=FALSE
	
	NOTE: To turn on and off the dialog box, use:
	
	  DisableFailedServerDialog=TRUE/FALSE
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS120SP3
	Version           : :1.2 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
