---
layout: page
title: "Q142907: IBM Auto 16/4 Token Ring Adapter Drivers Does Not Load"
permalink: /kb/142/Q142907/
---

## Q142907: IBM Auto 16/4 Token Ring Adapter Drivers Does Not Load

{% raw %}

	Article: Q142907
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have multiple IBM Auto 16/4 token ring adapters installed on the computer
	and the Auto Sense option is enabled on one or all of them, the IBM Auto 16/4
	Token Ring driver in Windows NT does not load.
	
	RESOLUTION
	==========
	
	To correct this problem, disable the Auto Sense option on the token ring
	adapter. To perform this:
	
	1. Insert the IBM Auto 16/4 token ring adapter on one of the available slots
	  inside the computer.
	
	2. Boot to MS-DOS.
	
	3. Insert the IBM Auto 16/4 Token-Ring Adapter Disk 1 (LANAID disk).
	
	4. Run LANAID.EXE.
	
	5. Select Configuration.
	
	6. Press TAB to Auto Sense. Select Disabled using the arrow keys and press the
	  spacebar.
	
	7. Press ALT+S to store the configuration. Make sure you note the configuration.
	
	8. Press ALT+O to exit Configuration and quit Lanaid.
	
	9. Shut down the computer and remove the token ring adapter from the slot inside
	  the computer.
	
	10. Repeat steps 1 to 9 for the other IBM Auto 16/4 Token Ring adapters.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
