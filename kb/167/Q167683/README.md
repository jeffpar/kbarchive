---
layout: page
title: "Q167683: SMS: Audit32 Causes an Access Violation"
permalink: /kb/167/Q167683/
---

## Q167683: SMS: Audit32 Causes an Access Violation

{% raw %}

	Article: Q167683
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbAudit smsaudit
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to run the Audit package on a Windows NT client, the following
	Audit32.exe application error is produced:
	
	  The instruction as "0x00000000" referenced memory at "0x00000000". The memory
	  could not be read.
	
	CAUSE
	=====
	
	During the execution of Audit32.exe, the program attempts to make a call to the
	Ismif32.dll file, which is located in the SystemRoot directory. This file is
	used to produce a status MIF for the Audit program. If the Ismif32.dll file
	cannot be found, an access violation (AV) is produced.
	
	There are two situations in which the Ismif32.dll file will not be present:
	
	- The Ismif32.dll file may not be present if the Package Command Manager (PCM)
	  has been disabled in the client's site properties. This may be where the PCM
	  service is in use on a Windows NT client, and PCMWIN32 does not require
	  distribution by means of Systems Management Server client setup. ISMIF32
	  requires Package Command Manager to be enabled in the client site properties.
	
	- The Ismif32.dll file may not be present if a Systems Management Server site
	  or logon server has not previously run the Systems Management Server script
	  file Smsls.bat or Runsms.bat. In such a case, the Systems Management Server
	  client components will not have been installed.
	
	WORKAROUND
	==========
	
	To work around this problem, do any one of the following:
	
	- Copy the Ismif32.dll and Ismif16.dll files into the <platform.bin>
	  directory (for example, either the x86.bin, mips.bin, or alpha.bin directory)
	  of the Audit package source, and resend the audit package to clients with the
	  send option 'Even if previously sent' and the distribute option 'Refresh
	  existing distribution servers' checked.
	
	  -or-
	
	- If the Clients Site Property for PCM is disabled, enable the property by
	  checking the Package Command Manager option in the Clients window of the Site
	  Properties.
	
	  -or-
	
	- If a site or logon server exhibits the failure, manually run Runsms.bat from
	  the server's own SMS_SHR.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Manager Server version
	1.2. This problem was corrected in the latest Microsoft Systems Management
	Server 1.2 U.S. Service Pack. For information on obtaining the service pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: status MIF sms audit prodsms
	
	======================================================================
	Keywords          : kbnetwork kbAudit smsaudit 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
