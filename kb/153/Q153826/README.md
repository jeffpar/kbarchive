---
layout: page
title: "Q153826: Double Quotes in Software Inventory Package Causes Event ID 118"
permalink: /kb/153/Q153826/
---

## Q153826: Double Quotes in Software Inventory Package Causes Event ID 118

{% raw %}

	Article: Q153826
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you create a software inventory package and specify "Microsoft Excel.exe"
	(including the double quotation marks) as a filename, the following error
	message appears in the Systems Management Server Administrator User Interface:
	
	  Couldn't create a new package.
	
	In addition, the following event is logged in the Application Event log:
	
	  Event ID: 118
	  Non-fatal Error in module: SMS_MAINTENANCE_MANAGER
	  Operation:   Parse
	  Object:      File
	  Object name: Package Rule File
	  Error code:  1
	
	  Cannot compile the package rule file
	  <drive>:\SMS\site.srv\maincfg.box\pkgrule\package.rul for site UUU.
	  MachineName = GREEBO
	  SiteCode = UUU
	  Component = SMS_MAINTENANCE_MANAGER
	
	NOTE: The package does not appear in the Administrator User Interface. The
	package information is written to the Package.rul file in the
	\sms\site.srv\maincfg.box\pkgrule subdirectory.
	
	CAUSE
	=====
	
	Maintenance Manager cannot compile the PACKAGE.RUL with packages that contain
	filenames in double quotation marks. Therefore, when Maintenance Manager
	compiles, the PKG_16.CFG files it creates are 0 bytes in size and an event is
	written to the Application Event Log.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Manually remove the problem package(s) from the Package.rul file.
	
	2. Do not use double quotation marks (") in a package filename.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1 and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms event viewer log
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
