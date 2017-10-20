---
layout: page
title: "Q184539: SMS: PGC Shows Long Delay Before Completing Normal Process Cycle"
permalink: /kb/184/Q184539/
---

## Q184539: SMS: PGC Shows Long Delay Before Completing Normal Process Cycle

{% raw %}

	Article: Q184539
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbPGC smspgckbbuglist
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience a long delay during the Checking Current Configuration phase
	of Program Group Control (PGC).
	
	CAUSE
	=====
	
	PGC is enumerating every domain controller listed in the [Servers] section of
	the Sms.ini file to obtain user group membership.
	
	WORKAROUND
	==========
	
	To work around this problem, contact Microsoft Technical Support to obtain the
	following fix, or wait for the next Systems Management Server service pack. The
	hotfix should have the following timestamp:
	
	     4/22/98   1:03pm        83,936 Nadapi16.dll (Intel)
	     4/22/98   1:03pm        71,760 Nadapi32.dll (Intel)
	     4/22/98   1:03pm        72,272 Nadapi95.dll (Intel)
	     4/22/98   9:19pm       163,088 Nadapi32.dll (Alpha)
	
	In addition to applying the hotfixed files mentioned above, you must add the
	following entry to the [Local] section of the Sms.ini file:
	
	     ServersToScanForPGCGroups=
	
	If you set the above entry equal to 1, only one server will be enumerated.
	Setting the value to 0 or leaving it blank causes PGC to enumerate all servers
	listed. If you set the value to a number greater than the total number of
	servers listed in the Sms.ini, all servers will be enumerated. PGC also
	enumerates all servers listed if you apply the hotfixed files above and do not
	add the ServersToScanForPGCGroups entry to the Sms.ini.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	
	A supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbPGC smspgc kbbuglist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
