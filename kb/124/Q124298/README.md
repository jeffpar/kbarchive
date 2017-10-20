---
layout: page
title: "Q124298: Changing the Drive Letter of the System or Boot Partition"
permalink: /kb/124/Q124298/
---

## Q124298: Changing the Drive Letter of the System or Boot Partition

{% raw %}

	Article: Q124298
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use Disk Administrator to change the drive letter of your system or
	boot partition, important references to the drive (such as drive paths, system
	environment variables and system-controlled references for the system or boot
	partition) are reset. You need to reset the following user- controlled
	references manually (either before or after changing the drive letter):
	
	- Paging File drive designation
	
	- User environment variables
	
	- User set program items
	
	MORE INFORMATION
	================
	
	If you do not move the paging file before you change the drive letter of the
	partition that the paging file resides on, the following error message appears
	when you restart the system:
	
	  Limited Virtual Memory Your system is running without a properly sized paging
	  file. Please use the virtual memory option of the System applet in the
	  Control Panel to create a paging file, or to increase the initial size of
	  your paging file.
	
	To correct this situation, re-create the paging file under the new drive letter
	designation.
	
	You do not receive any errors or experience problems running applications that
	access the user environment variables until you attempt to access those
	resources. You can change the user environment variables by running Control
	Panel and choosing System. Each program item affected by the drive letter change
	must be modified individually.
	
	Additional query words: prodnt windisk admin page file pagefile
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}
