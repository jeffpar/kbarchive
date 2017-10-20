---
layout: page
title: "Q139627: How to Manually Remove Systems Management Server"
permalink: /kb/139/Q139627/
---

## Q139627: How to Manually Remove Systems Management Server

{% raw %}

	Article: Q139627
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you lose the Systems Management Server database or remove it using SQL
	Administrator, you will not be able to deinstall Systems Management Server or
	install another version of Systems Management Server using the SMS Setup
	Utility. You must manually remove the previous version before you can proceed.
	
	MORE INFORMATION
	================
	
	To remove the previous installation of Systems Management Server:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Make sure all of the SMS services have been stopped. To do this, go to
	  Control Panel Services and stop the following:
	
	  SMS_EXECUTIVE
	  SMS_HIERARCHY_MANAGER
	  SMS_INVENTORY_AGENT_NT
	  SMS_PACKAGE_COMMAND_MANAGER_NT
	  SMS_SITE_CONFIG_MANAGER
	
	2. Run the Registry Editor (REGEDT32.EXE).
	
	3. From the HKEY_LOCAL_MACHINE subtree go to the following keys:
	
	  \SYSTEM\CurrentControlSet\Services\SMS_EXECUTIVE
	  \SYSTEM\CurrentControlSet\Services\SMS_HIERARCHY_MANAGER
	  \SYSTEM\CurrentControlSet\Services\SMS_INVENTORY_AGENT_NT
	  \SYSTEM\CurrentControlSet\Services\SMS_PACKAGE_COMMAND_MANAGER_NT
	  \SYSTEM\CurrentControlSet\Services\SMS_SITE_CONFIG_MANAGER
	  \SOFTWARE\Microsoft\SMS
	  \SYSTEM\CurrentControlSet\Services\WUSER32
	
	  a. Select a key.
	
	  b. From the Edit menu, choose Delete.
	
	  c. Choose Yes to confirm the deletion of the key.
	
	  d. Repeat steps a through c for each of the keys above.
	
	4. Delete the SMS directory tree from the drive where SMS is installed.
	
	5. Delete all SCMAN.* files in the root directory of the drive where SMS is
	  installed.
	
	6. Delete all SMS*.* files from the root of the boot drive (Drive C).
	
	7. Reinstall Systems Management Server.
	
	NOTE: Steps 5 and 6 are not necessary to allow you to reinstall Systems
	Management Server. However, these steps ensures that all traces of SMS have been
	removed.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
