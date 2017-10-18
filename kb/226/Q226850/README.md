---
layout: page
title: "Q226850: SMS: Software Metering Server Installation Generates Error 997"
permalink: kb/226/Q226850/
---

## Q226850: SMS: Software Metering Server Installation Generates Error 997

	Article: Q226850
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsmsMeter
	Last Modified: 16-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After enabling a site system as a software metering server under the following
	hierarchy
	
	  Systems Management Server
	    Site Database (site code - site name)
	       Site Hierarchy
	          site code - site name
	             Site Settings 
	                Site Systems 
	
	the Software Metering Server installation stops responding and generates the
	following status messages:
	
	  Message ID: 9399
	  Component:SMS_LICENSE_SERVER_MANAGER
	  Description:
	  The software metering server manager failed to install the service
	  "INSTALL_ODBC" on "SERVER1".
	
	  Message ID: 9405
	  Component:SMS_LICENSE_SERVER_MANAGER
	  Description:
	  The software metering server manager could not start the ODBC installation
	  service on "SERVER1".
	
	Further investigation of the licsvcfg.log reveals the following:
	
	  Attempting to install the service INSTALL_ODBC. 
	  (Binary=c:\swmtr\odbc\i386\InOdbcSv.Exe,    DisplayName=(null),Account=SWMAccount) 
	  Starting the service INSTALL_ODBC on SHINER-BOCK  
	  Error while starting the service INSTALL_ODBC. 
	  NT Service Exception: 997 The service INSTALL_ODBC could not be started. 
	  System message: OverlappedI/O operation is in progress. 
	
	CAUSE
	=====
	
	This behavior occurs because of an incorrect password set on the Service account
	when you create the Software Metering server.
	
	WORKAROUND
	==========
	
	To work around this issue, ensure that the correct Service account password is
	used.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsmsMeter 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	
	=============================================================================
	
