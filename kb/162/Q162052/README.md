---
layout: page
title: "Q162052: Resume May Cause Power Off When in Standby Mode"
permalink: /kb/162/Q162052/
---

## Q162052: Resume May Cause Power Off When in Standby Mode

{% raw %}

	Article: Q162052
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): kbhw osr2 win95 kbHardwarekbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you suspend and then resume a laptop computer with the hardware
	Power/Resume button, the computer may power off instead.
	
	CAUSE
	=====
	
	The Windows 95 power management driver may not properly handle a suspend request
	and cause the computer to power off when the following conditions exist:
	
	- The computer is a laptop computer with a BIOS option to select the power-up
	  (or resume) mode. Such an option determines whether the power button actually
	  powers the computer on and off (for a full reboot), or simply suspends and
	  resumes the computer.
	
	- The power-up (or resume) mode option is set to resume mode.
	
	- The computer is placed in its docking station and powered on.
	
	- The power button is pressed to place the computer in a suspended state.
	
	- The power button is pressed again to resume the computer.
	
	- Instead of resuming, the computer peforms a full power-off after about 30
	  seconds.
	
	RESOLUTION
	==========
	
	To work around this issue, set the power-up (or resume) mode option to boot mode
	instead of resume mode. This causes the computer to completely power off when it
	is shut down and perform a full boot when restarted, instead of suspending when
	shut down and resuming when restarted.
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	Depending on the state of programs running when the computer is first suspended,
	current data that has not been saved to disk may be lost.
	
	This symptom has been reported to occur with the following models of laptop
	computers:
	
	- Toshiba Tecra 710/720/730
	
	- Toshiba Tecra 500 Series
	
	- Toshiba Portege 650
	
	Additional query words: 95
	
	======================================================================
	Keywords          : kbhw osr2 win95 kbHardware kbfixlist
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
