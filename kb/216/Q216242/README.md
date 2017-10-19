---
layout: page
title: "Q216242: SMS: View Troubleshooting Information in Administrator Console"
permalink: /kb/216/Q216242/
---

## Q216242: SMS: View Troubleshooting Information in Administrator Console

	Article: Q216242
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	All of the data displayed in the SMS Administrator console is provided by the
	Systems Management Server Site Provider through Windows Management
	Instrumentation (WMI). The SMS Administrator console can be started in Node
	Information mode, which displays the source of and all the values behind every
	property page available in the user interface.
	
	To operate the Administrator Console in Node Information mode, start the console
	with the following command line:
	
	  mmc.exe /sms:NodeInfo=1 D:\sms\bin\i386\sms.msc
	
	  where D is your Systems Management Server installation directory.
	
	This will add an extra property page (tab) called Node Information to every
	property sheet.
	
	MORE INFORMATION
	================
	
	The Node Information property page displays the underlying WMI (Web-Based
	Enterprise Management) class with all its properties and instance information,
	which is useful for debugging for two reasons:
	
	- When coding applications using the Systems Management Server Toolkit, it is
	  often helpful to use the SMS Administrator console as an example of how
	  information can be exposed and manipulated through the Site Provider.
	
	- One of the properties exposed in the Node Information will be the ID of the
	  property's instance. When troubleshooting problems related to collections,
	  packages, advertisements, job requests, and so forth, the ID of the instance
	  is noted in the log file and sometimes the status message. Since IDs are not
	  identified by default in the SMS Administrator console, the Node Information
	  property page is the only way to easily identify the the object ID. For
	  example, for collections, the it will be called CollectionId.
	
	For additional information on WMI, please refer to the WBEMSDK and the SMS
	ToolKit on-line documentation.
	
	
	When the Administrator Console Is Run from a Remote Workstation
	---------------------------------------------------------------
	
	  mmc.exe /sms:NodeInfo=1 <D>:\smsadmin\bin\i386\sms.msc
	
	where <D> is your Systems Management Server administrator console
	installation folder.
	
	Additional query words: prodsms wbem wmi tshoot smstshoot swdist ui node info nodeinfo
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
