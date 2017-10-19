---
layout: page
title: "Q168566: SMS: Audit32 Causes Access Violation"
permalink: /kb/168/Q168566/
---

## Q168566: SMS: Audit32 Causes Access Violation

	Article: Q168566
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbAudit kbInventory smsinv smsaudit
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run the Audit package on a client computer running Windows
	NT, you receive the following Audit32.exe application error:
	
	  The instruction as "0x00000000" referenced memory at "0x00000000". The memory
	  could not be read.
	
	CAUSE
	=====
	
	Audit32.exe attempts to make a call to Ismif32.dll, located in the SystemRoot
	directory. Ismif32.dll is used to produce a status MIF for the Audit program. If
	Audit32 cannot find Ismif32.dll, this error message occurs.
	
	The Ismif32.dll file will not be present if:
	
	- The Package Command Manager (PCM) has been disabled. This option may have
	  been disabled by clicking Clients under Site Properties. This may be where
	  the PCM Service is in use on a Windows NT client and PCMWIN32 does not
	  require distribution by means of Systems Management Server client setup.
	  Ismif32.dll depends on Package Command Manager being enabled in the client
	  site properties.
	
	  -or-
	
	- A Windows NT Systems Management Server site server or logon server has not
	  previously run the Systems Management Server script files Smsls.bat or
	  Runsms.bat. If not, the Systems Management Server client components will not
	  have been installed.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Copy the Ismif32.dll and Ismif16.dll files into the <platform.bin>
	  directory (for example, X86.bin, Mips.bin, or Alpha.bin) of the Audit package
	  source, and resend the audit package to clients with the send option 'Even if
	  previously sent' and the distribute option 'Refresh existing distribution
	  servers' checked.
	
	- If the client's Site Property for PCM is disabled, enable the property by
	  checking the Package Command Manager option within the Clients window of the
	  Site Properties.
	
	- If a site or logon server has this problem, manually run Runsms.bat from the
	  server's own SMS_SHR.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Manager Server version
	1.2. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: status sms audit prodsms
	
	======================================================================
	Keywords          : kbnetwork kbAudit kbInventory smsinv smsaudit 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
