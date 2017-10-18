---
layout: page
title: "Q149486: How to Run Multiple Instances of SMS Administrator"
permalink: kb/149/Q149486/
---

## Q149486: How to Run Multiple Instances of SMS Administrator

	Article: Q149486
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbenv kbsmsAdmin smsadmin smshowto
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is on the Readme.wri file and the release notes for
	SMS 1.1:
	
	By default, the SMS Administrator still prevents multiple instances of the user
	interface (UI). However, the SMS Administrator now checks a new key in the
	registry that, when set, allows you to run multiple instances of itself. The
	registry key is \HKEY_CURRENT_USER\Software\Microsoft\SMS\Main\AppSettings. The
	SMS Administrator checks for the REG_SZ value MultipleInstancesAllowed. If this
	value is 1, multiple instances of the UI can be run. If this value is 0 or
	nonexistent, multiple copies of the UI are prohibited.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbsmsAdmin smsadmin smshowto 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	
	=============================================================================
	
