---
layout: page
title: "Q140712: How to Enable Promiscuous Mode for Madge Token Ring Adapter"
permalink: /kb/140/Q140712/
---

## Q140712: How to Enable Promiscuous Mode for Madge Token Ring Adapter

{% raw %}

	Article: Q140712
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Network Monitor on your computer that has a Madge Token Ring
	network interface card (NIC), Network Monitor fails to start and the following
	message appears:
	
	  The Mac driver does not support Promiscuous Mode
	
	RESOLUTION
	==========
	
	To enable a Madge card for Network Monitor go to Control Panel\Network,
	highlight the Madge card and click Configure. There will be an option in the
	Madge setup called Statistics Gathering that needs to be enabled. If this option
	is not available obtain an updated driver from the vendor or edit the system
	registry using the following procedures:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run the Registry Editor.
	
	2. From the HKEY_LOCAL_MACHINE subtree, find the key:
	
	  \SYSTEM\CurrentControlSet\Services\MdgMPort2\Parameters
	
	3. From the Edit menu, choose Add Value.
	
	4. Add the following:
	
	  Value Name: PromiscuousModeX
	  Data Type: REG_DWORD
	  Data: 1
	
	  Note: To disable promiscuous mode set the data to 0.
	
	5. Choose OK and quit Registry Editor.
	
	6. Shut down and restart Windows NT.
	
	NOTE: When capturing on Token Ring (TR), the NIC on the computer running Netmon
	needs to have its max frame size set to the largest tokenring frame possible
	(17K), otherwise there is a possibility of dropping frames. For example, if the
	NIC is configured for a maxframe size of 4500, it will drop any packet it
	receives that exceeds this size.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	
	=============================================================================
	

{% endraw %}
