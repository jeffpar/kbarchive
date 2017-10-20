---
layout: page
title: "Q173642: SMSINST: Add Device To System.ini Command Causes GPF"
permalink: /kb/173/Q173642/
---

## Q173642: SMSINST: Add Device To System.ini Command Causes GPF

{% raw %}

	Article: Q173642
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbusage smsinst
	Last Modified: 10-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can add a device entry to the 386Enh section of the System.ini file with the
	Add Device to System.ini script item. When you run a script on Windows 95 with
	the Add Device to System.ini command in it, you receive the following error
	message:
	
	  This program has performed and illegal operation and will be shutdown
	
	The error details show SMSISTUB caused a general protection fault (GP fault) in
	module ~GLC0003.TMP at 0002:0000dd20.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Systems Management Server
	Installer 1.0. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 1.20 prodsms
	
	======================================================================
	Keywords          : kbusage smsinst 
	Technology        : kbSMSSearch kbSMSI100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
