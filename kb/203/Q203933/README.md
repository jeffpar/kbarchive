---
layout: page
title: "Q203933: SMS: Installer Does Not Restart Automatically After Reboot"
permalink: /kb/203/Q203933/
---

## Q203933: SMS: Installer Does Not Restart Automatically After Reboot

{% raw %}

	Article: Q203933
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0,2.0; winnt:2.0
	Operating System(s): 
	Keyword(s): kbServer kbsms200 kbsms120 kbsmsInst
	Last Modified: 08-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	- Microsoft Systems Management Server Installer versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When doing a repackage in Systems Management Server Installer and a reboot is
	made during the repackage, Systems Management Server Installer does not
	automatically restart and continue with the repackage after the reboot is
	complete.
	
	MORE INFORMATION
	================
	
	Restart Systems Management Server Installer, and click Repackage. A pop-up
	window is displayed that reads:
	
	  A previous repackage is currently in progress. Do you want to complete that
	  repackage?
	
	Click Yes and the repackage will continue.
	
	This behavior is by design and allows for additional applications to be installed
	or additional changes to be made to the computer before SMS Installer completes
	the repackage.
	
	Additional query words: prodsms SMSInst
	
	======================================================================
	Keywords          : kbServer kbsms200 kbsms120 kbsmsInst 
	Technology        : kbSMSSearch kbSMS200 kbSMSI100 kbSMSI200
	Version           : WINDOWS:1.0,2.0; winnt:2.0
	Issue type        : kbinfo
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
