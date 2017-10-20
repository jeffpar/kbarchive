---
layout: page
title: "Q132554: Micro Channel Digiboard PC/XEM Fails Under Windows NT"
permalink: /kb/132/Q132554/
---

## Q132554: Micro Channel Digiboard PC/XEM Fails Under Windows NT

{% raw %}

	Article: Q132554
	Product(s): Microsoft Windows NT
	Version(s): 3.5 SP2,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5 SP2, 3.51 
	- Microsoft Windows NT Server versions 3.5 SP2, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT 3.5 Server Pack 2 or Windows NT 3.51, your
	asynchronous Digiboard PC/XEM micro channel adapter stops working. The following
	messages are written to the event log:
	
	  Source: SCM
	  Event ID: 7000
	  Description: Digi fep 5 driver service failed to start due to the following
	  error:
	
	  No mapping between account names and security id's was done.
	
	  Source: DIGIFEP5
	  Event ID: 5
	  Description: The description for event id %5% in source digifep5 could not be
	  located. It contains the following insertion string(s),NTXEM2.
	
	CAUSE
	=====
	
	Windows NT does not correctly save the slot number in the registry on MCA
	computers. The slot number is incorrectly saved as 0.
	
	Also, the Digiboard driver downloads its configuration information to the board
	during initialization. If the computer is not cold booted (turned off) between
	configuration changes, the driver will not reinitialize the board on the next
	boot.
	
	WORKAROUND
	==========
	
	To work around this problem, run Registry Editor (REGEDT32.EXE) and modify the
	following key in the HKEY_LOCAL_MACHINE hive to manually change the slot
	number:
	
	  \System\CurrentControlSet\Services\NTXEM2\Parameters\Slot Number
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. If you have already installed the Digiboard driver, unistall it and reboot
	  (cold boot) the computer.
	
	2. Use the Microchannel Reference floppy disk that was supplied with the
	  computer to confirm that the Digiboard has been configured properly and the
	  reboot (cold boot) the computer.
	
	3. Boot Windows NT and install the Digiboard driver. Do not reboot the computer.
	
	4. Run Registry Editor (REGEDT32.EXE).
	
	5. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	
	     SYSTEM\CurrentControlSet\Services\NTXALL[1-n]\Parameters
	
	
	6. Change the value for SlotNumber to the correct slot number.
	
	7. Run Control Panel, choose Network, and configure the Digiboard. The correct
	  slot number will appear and Setup will reconfigure the other values
	  correctly. Quit Control Panel, but choose not to reboot the computer.
	
	8. Shutdown the computer and then reboot (cold boot) it again:
	
	  a. From the Program Manager File menu choose Shutdown.
	
	  b. Choose Shutdown and then choose OK.
	
	  This allows any configuration currently saved in the Digiboard to be cleared,
	  allowing Windows NT to reinitialize it during the next boot process.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5 SP2 and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.50 3.51 prodnt ras zero micro channel
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbWinNTS350search kbWinNTW350SP2 kbWinNTS350SP2
	Version           : :3.5 SP2,3.51
	
	=============================================================================
	

{% endraw %}
