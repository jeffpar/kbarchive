---
layout: page
title: "Q128039: DOS Inventory Agent Hangs on HP Vectra"
permalink: /kb/128/Q128039/
---

## Q128039: DOS Inventory Agent Hangs on HP Vectra

{% raw %}

	Article: Q128039
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbdisplay kbsetup kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run SMSLS.BAT for the first time in Microsoft Systems Management Server
	on a Hewlett Packard (HP) Vectra computer, the DOS Inventory agent (INVDOS.EXE)
	may stop responding (hang) during the video detection process.
	
	CAUSE
	=====
	
	This problem occurs if you are using an onboard video card (Cirrus CL- GD542x
	chipset) on an HP Vectra computer.
	
	WORKAROUND
	==========
	
	To work around this problem in Systems Management Server 1.0, run the SMSLS.BAT
	file again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. This problem was corrected in Systems Management Server
	version 1.2.
	
	
	MORE INFORMATION
	================
	
	After the first failure of INVDOS, SMS places a file (SMSSAFE.TMP) at the root
	directory of the client computer's system drive (Drive C). This file indicates
	that a video detection failure occurred during the previous execution of the
	SMSLS.BAT file. The next time you run SMSLS.BAT, SMS.INI is updated to indicate
	that the video detection should be skipped when you run SMSLS.BAT. The
	SMSSAFE.TMP file is then deleted by SMS.
	
	
	For additional information on INVDOS and SMSSAFE.TMP in Systems Management Server
	1.1, please see the following article in the Microsoft Knowledge Base:
	
	  Q128451 INVDOS: SMSSAFE.TMP is Deleted upon Creation
	
	Additional query words: prodsms sms ms-dos msdos
	
	======================================================================
	Keywords          : kbdisplay kbsetup kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
