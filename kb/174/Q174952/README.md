---
layout: page
title: "Q174952: SMS: Client Setup Does Not Check for Smsrun16/32.exe"
permalink: /kb/174/Q174952/
---

## Q174952: SMS: Client Setup Does Not Check for Smsrun16/32.exe

{% raw %}

	Article: Q174952
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While logging on, you may receive the following error:
	
	  SMSRUN16\32 cannot find the file smsrun16.exe or smsrun32.exe or one of its
	  components. Make sure the path and filename are correct and that all required
	  libraries are available.
	
	CAUSE
	=====
	
	This error message appears in situations where you have multiple installations
	of an operating system on a computer, or when a computer is upgraded from one
	operating system to another and the new operating system is in a different
	directory than the old one.
	
	WORKAROUND
	==========
	
	To work around this problem, run the Upgrade.bat file to update the Systems
	Management Server client setup.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server 1.2 U.S. Service Pack. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	When Systems Management Server verifies client installation, it verifies that
	Smsrun16.exe or Smsrun32.exe is on the load= line of the Win.ini file. If
	Systems Management Server does not find one of these executable files on the
	load= line, it adds the appropriate entry. However, Systems Management Server
	does not check to see that one of these executable files is actually located in
	the current operating system directory specified by the LocalWindowsPath entry
	of the Sms.ini file.
	
	Additional query words: prodsms file name OS
	
	======================================================================
	Keywords          : kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
