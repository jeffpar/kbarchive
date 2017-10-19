---
layout: page
title: "Q151712: Remotely Synchronizing the Time Between Two Computers"
permalink: /kb/151/Q151712/
---

## Q151712: Remotely Synchronizing the Time Between Two Computers

	Article: Q151712
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	From time to time, you may need to synchronize a computer's time with that of
	another computer while lacking physical access to one or both computers. Using
	the AT Command Scheduler, you can issue a NET TIME command to the remote
	computer(s).
	
	The following example shows how to synchronize the time for ComputerA with
	ComputerB in a situation where the user only has physical access to ComputerC.
	
	1. From ComputerC, open a command prompt.
	
	2. Type the following command:
	
	  "AT \\ComputerA <HH:MM:SS> /INTERACTIVE "NET TIME \\ComputerB /SET /Y""
	  (without the quotation marks)
	
	  This schedules the NET TIME command to run the next time ComputerA gets to
	  <HH:MM:SS>.
	
	You can check the time on ComputerA by typing NET TIME \\COMPUTERA. This will
	display the time on the remote machine (though it may be inaccurate, based on
	ComputerA's time zone).
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	Q139453NET TIME Does Not Report Correct Remote Time in Windows NT
	
	The above example requires that the user have administrative rights on all three
	computers. In addition, the Scheduler service must be running on ComputerA and
	ComputerC.
	
	Additional query words: schedule remote time set date command
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
