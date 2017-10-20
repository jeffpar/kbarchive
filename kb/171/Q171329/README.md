---
layout: page
title: "Q171329: SMS: &lt;Unknown&gt; NetcardID When a Different OS Is Detected"
permalink: /kb/171/Q171329/
---

## Q171329: SMS: &lt;Unknown&gt; NetcardID When a Different OS Is Detected

{% raw %}

	Article: Q171329
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2 SP2
	Operating System(s): 
	Keyword(s): kbenv kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a computer is installed as a Windows 95 Systems Management Server client, the
	[SMS] section of the Sms.ini file will report OS=5. If the computer is then
	installed as a Windows NT client without having removed the Systems Management
	Server client, the following message will appear, and inventory should not be
	taken on the client:
	
	  A different OS was detected than that under which Systems Management Server
	  was installed. Operating System reported by SMS.INI does not match current
	  operating system.
	  Exiting
	  [SMS 100%]
	
	However, Systems Management Server continues and inventory is taken anyway. One
	result of this is that the NetcardID is not detected correctly. The NetcardID
	changes from the proper value (inventoried under Windows 95) to
	<unknown>.
	
	This problem only occurs if the computer's Sms.ini file was created when the
	computer is running Windows 95, and then the computer is started to Windows NT.
	A dual-boot computer installed as a Windows NT Systems Management Server client,
	then started to Windows 95 works as expected. Note that Systems Management
	Server does not support dual-boot computers at this time.
	
	WORKAROUND
	==========
	
	To work around this problem, run Upgrade.bat from the SMS_SHR share on the
	Systems Management Server logon server for those clients affected when started
	to Windows NT.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2 Service Pack 2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodsms machine deinstall deinstalled uninstall uninstalled booted sp sp2
	
	======================================================================
	Keywords          : kbenv kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS120SP2
	Version           : winnt:1.2 SP2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
