---
layout: page
title: "Q267971: SMS: The Library for Smsperf.dll Could Not Be Opened"
permalink: /kb/267/Q267971/
---

## Q267971: SMS: The Library for Smsperf.dll Could Not Be Opened

{% raw %}

	Article: Q267971
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbinterop kbConfig kbServer kbHelpDesk kbsmsUtil kbUpgrade
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After you install Microsoft Systems Management Server version 2.0 Service Pack 2
	(SP2), periodically in the Windows NT event log on Systems Management Server
	site systems, you may receive the following error messages (Event 1011):
	
	At the Site server:
	
	  The library file "<Drive>:\SMS\bin\i386\SMSPERF.dll" specified for the
	  "SMSPerfCountersFor<Drive>:_SMS_BIN_I386_SMSPERF.DLL" service could not
	  be opened. Performance data for this service will not be available. Status
	  code is data DWORD 0.
	
	At the Logon Point:
	
	  The library file "<Drive>:\SMSLOGON\I386\SMSPERF.dll" specified for the
	  "SMSPerfCountersFor<Drive>:_SMSLOGON_I386_SMSPERF.DLL" service could
	  not be opened. Performance data for this service will not be available.Status
	  code is data DWORD 0.
	
	CAUSE
	=====
	
	A performance-monitoring program is attempting to load Systems Management
	Server-related performance counter data by using invalid registry information.
	When you install SP2, existing SMSPerf registry keys are not removed from the
	registry, although they are no longer used.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Use Registry Editor on the server that is generating the error message to delete
	the subkeys that start with "SMSPerfCountersfor" from the following key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\
	
	MORE INFORMATION
	================
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0 Service Pack 2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbConfig kbServer kbHelpDesk kbsmsUtil kbUpgrade 
	Technology        : kbSMSSearch kbSMS200SP2 kbSMS200SP3
	Version           : :2.0 SP2,2.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
