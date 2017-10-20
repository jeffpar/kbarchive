---
layout: page
title: "Q134536: APM 1.0 Systems May Not Save and Restore All Hardware States"
permalink: /kb/134/Q134536/
---

## Q134536: APM 1.0 Systems May Not Save and Restore All Hardware States

{% raw %}

	Article: Q134536
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some system functionality may be lost when you resume from Suspend mode if the
	following conditions exist:
	
	- You activated Suspend mode with a hardware switch (such as a Suspend button
	  on the body of the computer).
	
	- An MS-DOS session was active when you suspended the system.
	
	- The computer contains an Advanced Power Management (APM) 1.0 BIOS.
	
	For example, if you are playing an MS-DOS-based game with sound when you suspend
	the system, sound support may not function when the system resumes.
	
	CAUSE
	=====
	
	When you suspend the system using a hardware switch, an APM 1.0-compliant BIOS
	may process the suspend request too quickly for Windows 95 to save the current
	hardware settings. Without these settings, Windows 95 may not be able to
	reinitialize all the hardware devices properly when the system resumes.
	
	RESOLUTION
	==========
	
	Use the Suspend command on the Start menu to suspend the system, instead of
	using a hardware switch.
	
	MORE INFORMATION
	================
	
	When a system suspend is requested with a hardware switch, the APM 1.0 BIOS
	informs the operating system that it is about to suspend the system. APM 1.0
	systems do not wait for a response from the operating system but simply wait a
	predetermined amount of time before suspending the system.
	
	APM 1.1 systems do not have this problem because Windows 95 can request that they
	wait until the operating system is ready to be suspended.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
