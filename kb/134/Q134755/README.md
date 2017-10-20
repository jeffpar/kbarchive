---
layout: page
title: "Q134755: PC Gen: PABUTILS.TXT: Mail 3.5 Utilities Disk"
permalink: /kb/134/Q134755/
---

## Q134755: PC Gen: PABUTILS.TXT: Mail 3.5 Utilities Disk

{% raw %}

	Article: Q134755
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.5 
	-------------------------------------------------------------------------------
	
	The following is the PABUTILS.TXT from the version 3.5 Microsoft Mail for
	PC Networks Mail Utilities Disk. The file is found in the \PABTOOLS\ENG
	directory on the disk.
	
	PABLIST
	
	PABLIST is an installable utility that enables users to copy the
	data from their Personal Address Books into a text file. This text
	file will be placed in the user's Windows directory.
	
	Mail administrators can make this utility available to PC Mail
	Windows Client users by adding the following line to the Custom
	Commands section of either the user's MSMAIL.INI, or the
	SHARED.INI file:
	
	PCL1=3.0;Mail;PAB &List;14;PABLIST.DLL;;;List contents of the Personal
	Address
	Book
	
	Users will need to restart Mail for this change to take effect.
	
	PABCHECK
	
	PABCHECK is an installable utility that enables users to check
	the contents of their Personal Address Books against the current
	version of the Global Address List. It will prepare a report of
	duplicate addresses, addresses that have been removed from the
	GAL since being placed in the PAB, and addresses that appear to
	have changed since they were placed in the PAB. This report will
	be placed in the user's Inbox as a mail message.
	
	Mail administrators can make this utility available to PC Mail
	Windows client users by adding the following to the Custom
	Commands section of either the user's MSMAIL.INI, or the
	SHARED.INI file:
	
	PCL2=3.0;Mail;&PAB Check;15;PABCHK.DLL;;;Check contents of the
	PersonalAddress Book
	
	Users will need to restart Mail for this change to take effect.
	
	Additional query words: 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN350
	Version           : WINDOWS:3.5
	
	=============================================================================
	

{% endraw %}
