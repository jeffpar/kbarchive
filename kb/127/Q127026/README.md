---
layout: page
title: "Q127026: SMS Error 5000 on Macintosh Client"
permalink: kb/127/Q127026/
---

## Q127026: SMS Error 5000 on Macintosh Client

	Article: Q127026
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbConfig smsconfig
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure a Macintosh computer as a Microsoft Systems Management server
	version 1.x client, the following error message may appear:
	
	  Error 5000, in file shicsetting.cp line 150.
	  AFP Access denied.
	  AFP Access denied.
	  Reading INI file, new SMS.INI.
	
	RESOLUTION
	==========
	
	To correct this problem, perform the following steps:
	
	1. From File Manager (not Explorer) on the all the Systems Management Server
	  logon servers that are running Services for Macintosh, select the following
	  directories:
	
	     Sms\Logon.srv\Smsid
	     Sms\Logon.srv\Despoolr.box
	     Sms\Logon.srv\Inventry.box
	     Sms\Logon.srv\Isvmif.box
	     Sms\Logon.srv\Pcmpkg.src
	
	2. Select Permissions on the MacFile menu.
	
	3. Verify that the Make Changes option is selected for all user groups.
	
	Additional query words: prodsms mac sfm
	
	======================================================================
	Keywords          : kbnetwork kbConfig smsconfig 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbprb
	
	=============================================================================
	
