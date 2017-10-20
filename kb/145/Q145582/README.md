---
layout: page
title: "Q145582: SMS Only Reports 16mb RAM On MS-DOS and Windows Systems"
permalink: /kb/145/Q145582/
---

## Q145582: SMS Only Reports 16mb RAM On MS-DOS and Windows Systems

{% raw %}

	Article: Q145582
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbother kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On many Intel x86-based computers, Systems Management Server (SMS) reports an
	MS-DOS, Windows or Windows 95 system that contains more than 16mb of RAM as only
	having 16mb total.
	
	The MS-DOS MEM.COM and MSD.EXE commands also report only 16mb even though a PC
	hardware memory test counts the correct amount of memory.
	
	CAUSE
	=====
	
	This is due to how the hardware reports its memory configuration to MS-DOS. SMS
	queries MS-DOS with the same mechanism as MSD and the MS-DOS MEM command to
	determine the amount of memory reported. If MS-DOS has the incorrect value, it
	reports this incorrect amount to all 3 programs.
	
	This is also the case with Windows 95 systems, as INVDOS for SMS 1.1 is used for
	all MS-DOS and Non-NT Windows clients.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. We are researching this problem and will post new information in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbother kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	

{% endraw %}
