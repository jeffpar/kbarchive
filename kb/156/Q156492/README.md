---
layout: page
title: "Q156492: GP Fault or Fatal Exception Error on Intel MMX CPU"
permalink: /kb/156/Q156492/
---

## Q156492: GP Fault or Fatal Exception Error on Intel MMX CPU

{% raw %}

	Article: Q156492
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbhw win95 kbHardwarekbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running a program or using a device driver that calls MMX- specific
	instructions in the retail release of Windows 95 on a system with an Intel
	processor supporting the MMX instruction set, the following symptoms may occur:
	
	- A general protection (GP) fault error message
	
	- A fatal exception error message on a blue screen
	
	This problem does not occur with Windows 95 OEM Service Release 2 or later.
	
	CAUSE
	=====
	
	The retail release of Windows 95 does not properly support some MMX instructions
	if they are called from a device driver or from program code running in
	protection level 0 (Ring 0, also known as privileged or Kernel mode). If these
	instructions are issued while the processor is operating in Ring 0, a GP fault
	or other serious error may occur.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	
	Additional query words: gpf
	
	======================================================================
	Keywords          : kbhw win95 kbHardware kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
