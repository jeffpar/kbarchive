---
layout: page
title: "Q191307: SMS: Despooler Can't Create Temp Storage While Decompressing Pkg"
permalink: /kb/191/Q191307/
---

## Q191307: SMS: Despooler Can't Create Temp Storage While Decompressing Pkg

{% raw %}

	Article: Q191307
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbDespooler smsdespooler
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The despooler cannot decompress the package when a drive letter is specified in
	the registry under the following key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\Components\SMS_Despooler
	  \Preferred Drive For Temp Directory
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	If a drive letter is specified in that registry location, entries similar to the
	following will appear in the Despoolr.log file:
	
	     use drive $ for all temp files
	     $ drive has the most free space, we'll use it for temp storage
	     ...
	     Cannot create temp storage $:\ while decompressing package.
	     Win32 error = 3
	
	  The Win32 error = 3 is 'The system cannot find the path specified'.
	
	WORKAROUND
	==========
	
	To work around this problem, leave the registry key mentioned above blank (this
	is the default setting).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms SP SP4
	
	======================================================================
	Keywords          : kbDespooler smsdespooler 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
