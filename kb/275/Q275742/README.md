---
layout: page
title: "Q275742: SMS: How to Increase the Size of the SMS Provider Log File"
permalink: /kb/275/Q275742/
---

## Q275742: SMS: How to Increase the Size of the SMS Provider Log File

{% raw %}

	Article: Q275742
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 16-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Because of the large volume of information that is recorded in the Systems
	Management Server (SMS) Provider log file (Smsprov.log), it may be necessary at
	some point to increase the size of the log file for later viewing by using
	SMSTrace.
	
	Microsoft only recommends increasing the size of the log file when advanced
	troubleshooting is necessary.
	
	It is important to keep in mind the size of the log versus the performance. The
	log size is specified in hex. For example, a value of 10 would create a 16-MB
	log file.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To Increase the Size of the SMS Provider Log File
	-------------------------------------------------
	
	1. Open the Registry Editor (Regedt32.exe).
	
	2. Locate the value
	
	  Log Size Mb
	
	  under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Providers
	
	3. On the Edit menu, click DWORD, type "2" (without the quotation marks) (or the
	  desired size in megabytes in Hex), and then click OK.
	
	4. Close the Registry Editor.
	
	NOTE: You must stop and then restart the Windows Management Instrumentation
	service to make the changes effective.
	
	NOTE: A setting of "0" in the above-referenced registry location causes the
	default file size of the Smsprov.log file, which is 512 KB, to be used after
	stopping and restarting the SMS_EXECUTIVE service.
	
	Additional query words: prodsms smsprov logfile
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
