---
layout: page
title: "Q122940: System Stops Responding During Shutdown and Restart Process"
permalink: /kb/122/Q122940/
---

## Q122940: System Stops Responding During Shutdown and Restart Process

{% raw %}

	Article: Q122940
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT version 3.5, your system may stop responding (hang)
	when you select the Shut Down And Restart option. This behavior does not occur
	if you select Shut Down. However, when you select Restart in the Shutdown
	Computer dialog box, the same problem occurs.
	
	
	CAUSE
	=====
	
	This problem occurs when the Windows NT version 3.5 Setup program calls the
	computer BIOS to obtain computer configuration information. On several
	computers, the BIOS returns invalid information for the number of processors
	installed on the computer. For example, a multi-processor Hardware Abstraction
	Layer (HAL) is installed instead of required uni- processor HAL.
	
	
	WORKAROUND
	==========
	
	A possible workaround for this problem is to reinstall Windows NT version 3.5
	and run Custom Setup. Configure the Computer type for Standard PC instead of the
	one selected by default. This forces the Setup program to install the
	uni-processor HAL. Reinstalling Windows NT version 3.5 to the same location of
	the previously installed one will update the HAL without losing any user
	accounts and important Registry information.
	
	NOTE: If you choose to upgrade to Windows NT version 3.5 instead of performing a
	complete installation of Windows NT version 3.5, you will not be offered the
	option of changing the HAL.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	

{% endraw %}
