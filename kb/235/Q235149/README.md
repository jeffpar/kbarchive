---
layout: page
title: "Q235149: Simple Command Fails in Available Program Manager (APM)"
permalink: /kb/235/Q235149/
---

## Q235149: Simple Command Fails in Available Program Manager (APM)

{% raw %}

	Article: Q235149
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbClient kbConfig kbsms200 kbsms200bug kbAdvertisement kbPackage kbSoftwareDist
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a simple command such as net start >c:\test2.txt within an
	advertised program, the Available Programs Manager (APM) may return the
	following error message within the Smsapm32.log file:
	
	  Return code = 0x2; The system cannot find the file specified.~~; Program
	  D:\WINNT\System32\net.exe start >c:\test2.txt' terminated with exit code =
	  2
	
	WORKAROUND
	==========
	
	To work around this behavior, run the command from within a batch file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbConfig kbsms200 kbsms200bug kbAdvertisement kbPackage kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
