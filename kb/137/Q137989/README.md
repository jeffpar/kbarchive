---
layout: page
title: "Q137989: Error Opening File on SMS Client During Inventory"
permalink: /kb/137/Q137989/
---

## Q137989: Error Opening File on SMS Client During Inventory

{% raw %}

	Article: Q137989
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbother kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run RUNSMS.BAT on the Systems Management Server from a client computer
	to execute the inventory agent, the following error message appears in the
	MS-DOS Command Prompt window and returns a DOS prompt:
	
	  Error Opening File
	
	On the site server, a .TMP extension file is created in the following directory:
	
	  SMS\LOGON.SRV\INVENTRY.BOX
	
	CAUSE
	=====
	
	This is caused by collecting more than two files.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Continue the inventory process, rename the .TMP extension file on the Systems
	  Management Server with the .RAW extension.
	
	  -or-
	
	- Disable the collected files portion of the inventory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.0 and 1.1. This problem has been corrected in Systems Management
	Server version 1.2.
	
	Additional query words: prodsms sms writing
	
	======================================================================
	Keywords          : kbother kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
