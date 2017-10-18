---
layout: page
title: "Q292261: Advertised Programs Do Not Generate Status .mif Files"
permalink: kb/292/Q292261/
---

## Q292261: Advertised Programs Do Not Generate Status .mif Files

	Article: Q292261
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbClient kbConfig kbMMC kbsms200 kbsms200bug kbAdvertisement kbAppMan kbCollections kbP
	Last Modified: 01-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you advertise programs to Microsoft Windows 95-based or Microsoft Windows
	98-based client computers that must be restarted, you may receive a "no success"
	or a "failure status" message in the Status Message Viewer. When you examine the
	Smsapm32.log file on the client, you may observe that the following log is
	displayed after the client has been restarted:
	
	  SCHED DATA : A program status .mif has not been found.
	  SCHED DATA : Changing job status to success but not reporting any program
	  status.
	  SCHED DATA : There will be no further program status .mif checking for this
	  job upon restart.
	
	CAUSE
	=====
	
	This problem can occur on Windows 95-based and Windows 98-based clients when the
	After Running option is set to Program restarts Computer in the Properties
	section of the advertised program, and if the program requests that the client
	must be restarted. This problem only occurs when the program does not report a
	status .mif file.
	
	WORKAROUND
	==========
	
	To work around this problem, rewrite or modify, if possible, the advertised
	program to report a status .mif file after the program has completed its tasks.
	If the custom-made program cannot be modified to accomplish this task, you can
	use the repackaging feature of the Microsoft Systems Management Server (SMS)
	Installer tool to repackage your custom-made program where support for .mif
	status reports can be added.
	
	For additional information about the repackaging process and status .mif
	reporting in the SMS Installer tool, refer to the SMS Installer Help file. If
	you choose to follow this workaround, you should be aware of the following
	problem documented in the related knowledgebase article:
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q292030 SMS: The Install Status May Be Missing for Advertised Programs That
	  Generate Status .mif Files
	
	Another workaround method is to rewrite or to modify the advertised program to
	suppress the restart process in the program's install process, and then to
	change the After Running option to SMS Restarts Computer in the Properties
	section of the advertised program .
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Microsoft is researching this problem and will post more information here in the
	Microsoft Knowledge Base when it becomes available.
	
	Additional query words: prodsms no 10008 only 10005 Windows 95 98
	
	======================================================================
	Keywords          : kbClient kbConfig kbMMC kbsms200 kbsms200bug kbAdvertisement kbAppMan kbCollections kbPackage kbsmsAdmin kbStatSum kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
