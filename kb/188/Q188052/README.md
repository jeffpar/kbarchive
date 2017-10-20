---
layout: page
title: "Q188052: SMS: Applications Manager Error: Package Disappeared from Source"
permalink: /kb/188/Q188052/
---

## Q188052: SMS: Applications Manager Error: Package Disappeared from Source

{% raw %}

	Article: Q188052
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): smsappman kbSMSAppMan
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	IMPORTANT: This article contains information about editing the registry. Before
	you edit the registry, make sure you understand how to restore it if a problem
	occurs. For information about how to do this, view the "Restoring the Registry"
	Help topic in Regedit.exe or the "Restoring a Registry Key" Help topic in
	Regedt32.exe.
	
	The following error appears in the Appman.log file:
	
	  XXX ##> Package <package_ID> disappeared from source
	
	CAUSE
	=====
	
	A package has been deleted without using the Remove Package From Server job.
	When this happens, only the package itself is removed. The registry entry
	remains on the server. Applications Manager reads the package ID from the
	registry, fails to find to the actual package, and records the error.
	
	WORKAROUND
	==========
	
	Although this error does not cause any loss of functionality, the registry
	entries should be removed to prevent the error from being written to the
	Appman.log file. To remove the extraneous registry entries, perform the steps
	below.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	1. Start Regedt32 and navigate to the following key:
	
	     HKEY_LOCAL_MACHINE/Software/Microsoft/SMS/Components/ 
	     Sms_applications_manager/Package Keys.
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	2. Get the package ID from the Appman.log error and delete the corresponding
	  package ID from the registry.
	
	Additional query words: prodsms Appman
	
	======================================================================
	Keywords          : smsappman kbSMSAppMan 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
