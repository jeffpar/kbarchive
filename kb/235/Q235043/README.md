---
layout: page
title: "Q235043: SMS: Smsls Hangs Client with Unsupported Network Redirector"
permalink: /kb/235/Q235043/
---

## Q235043: SMS: Smsls Hangs Client with Unsupported Network Redirector

	Article: Q235043
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 18-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a client is running an unsupported network redirector, such as a third-party
	TCP/IP stack, running Smsls.bat may cause the computer to stop responding
	(hang). Also, running the Systems Management Installation Wizard (Smsman.exe)
	with an unsupported redirector may cause the installation to hang without any
	error message.
	
	MORE INFORMATION
	================
	
	This problem has been observed on a Microsoft Windows 95-based client running an
	unsupported version of the Novell InterNetWare client.
	
	Enabling NAL logging on the client and running Smsman.exe may show the following
	information in the Wn_manual.log file:
	
	  NAL [2] - Warning: this version of the redirector is not supported.
	
	To enable NAL logging, run the Turn_on_nal_logging.reg file from the
	Support\Reskit\I386\Diagnose folder on the SMS 2.0 CD-ROM.
	
	For information about client requirements, see Appendix A of the Systems
	Management Server Administrator's Guide. Also, supported Novell redirectors are
	documented in the "Integrating Microsoft Systems Management Server 2.0 with
	Novell NetWare" white paper that is included on the Microsoft Back Office
	Resource Kit 4.5 CD-ROM (as a file named Dplyntwr.doc). The latest version of
	this white paper is also available from the following Microsoft Web site:
	
	  http://www.microsoft.com/smsmgmt/deployment/SMSwithNovell.asp
	
	
	
	Additional query words: prodsms 3rd party hung lock freeze
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
