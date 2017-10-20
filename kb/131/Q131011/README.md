---
layout: page
title: "Q131011: SMS: Netspeed.com Internals"
permalink: /kb/131/Q131011/
---

## Q131011: SMS: Netspeed.com Internals

{% raw %}

	Article: Q131011
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory kbMaintMan smsinv smsmaintman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run Smsls.bat/CMD from a logon script, the Netspeed program is used to
	determine if the link is above a predefined threshold of speed in bits per
	second (bps). The results of this comparison are returned to Smsls.bat/CMD for
	evaluation, using MS-DOS errorlevels.
	
	Depending upon the threshold speed set in the registry and the policy set in the
	Administrator tool, Smsls.bat/CMD will prompt the user to see if he or she wants
	inventory performed when a slow link is detected.
	
	MORE INFORMATION
	================
	
	The following are possible errorlevel values:
	
	  0 - Network is fast.
	  1 - Network is slow, avoid further operation.
	  2 - Network is slow, prompt the user.
	
	The speed threshold is defined in the HKEY_LOCAL_MACHINE\ subtree under the
	following key:
	
	  SOFTWARE\Microsoft\SMS\Components\SMS_MAINTENANCE_MANAGER
	
	The DWORD setting is Slow Net Threshold Speed. The default is 0x352 (850
	decimal).
	
	You cannot use the Administrator tool to change this setting; you must change it
	manually if you do not want to use the default value. If you do change it,
	Maintenance Manager updates Netspeed.com in SMS_SHR during the next polling
	interval. If Systems Management Server is not configured to automatically update
	user logon scripts, you must manually copy the updated Netspeed.com to the
	location where Smsls.bat is being run from.
	
	A total of 3,400 bytes are read from Netspeed.dat on the logon server. The speed
	is measured in the number of milliseconds to read the total bytes. The default
	of 3,400 bytes within 850 milliseconds indicates a fast link. If it takes 850
	milliseconds or longer, it is considered a slow link.
	
	You can display the errorlevel value with the command NETSPEED /V at a command
	prompt.
	
	You can use the same method to approximate appropriate modem speed: multiply
	3,400 bytes by 8 bits per byte. These 27,200 bits read within 850 milliseconds
	will be a fast link (this is roughly 31,280 bits per second), making most 28.8
	modems the minimum fast network scenario.
	
	The documentation incorrectly states a default value of 500 milliseconds; the
	correct default value is 850 milliseconds.
	
	Additional query words: prodsms ras client execute executed
	
	======================================================================
	Keywords          : kbnetwork kbInventory kbMaintMan smsinv smsmaintman 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
