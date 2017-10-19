---
layout: page
title: "Q137676: PC Ext: Inbox Header Displays Incorrect Date"
permalink: /kb/137/Q137676/
---

## Q137676: PC Ext: Inbox Header Displays Incorrect Date

	Article: Q137676
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0,3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you receive a message from a user on another Microsoft Mail postoffice, you
	might notice the date and/or time stamp on the Inbox header is incorrect.
	
	CAUSE
	=====
	
	The date and/or time of the machine running EXTERNAL.EXE that last handled the
	message is not current.
	
	RESOLUTION
	==========
	
	Make sure the system date and time is current on all machines running the
	External mail processes. Set the time and date either using the MS-DOS TIME and
	DATE commands, or change it in the CMOS of the machine.
	
	NOTE: The MS-DOS TIME and DATE commands may not change the CMOS setting
	information on some systems. For these machines, the system date and time may
	revert to the previous setting on restart.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q100826 How External Sends Mail Between Postoffices
	
	  Q119089 How the Inbox Received Time Stamp Is Set
	
	  Q112281 /ClockRollOver May Be Needed When BIOS Not Detected
	
	Additional query words: 2.10 3.00 3.20 3.20a 3.50 date header
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300 kbMailPCN350 kbMailPCN210
	Version           : WINDOWS:2.1,3.0,3.2,3.2a,3.5
	
	=============================================================================
	
