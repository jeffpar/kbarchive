---
layout: page
title: "Q140245: PC Ext: Running Externals with the -bt Option in a Batch File"
permalink: kb/140/Q140245/
---

## Q140245: PC Ext: Running Externals with the -bt Option in a Batch File

	Article: Q140245
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you want to suspend external mailers running with the -bt option within a
	batch file, you can not expect the mailer to restart and run twice on the same
	day. External mailers that can use the -bt option include:
	
	  EXTERNAL.EXE
	  SMTPGATE.EXE
	  X400GATE.EXE
	  FAXGATE.EXE
	  VMGATE.EXE
	  ATTGATE.EXE
	
	MORE INFORMATION
	================
	
	When the external mailer is restarted a second time on the same day, it will
	exit immediately because the absolute break time has already passed. When you
	want to stop the external mailers to run other processes, you will need to know
	how much time the other processes will need and adjust the time assigned to the
	-bt option so that the external mailer restarts on the following day.
	
	For example, the following batch file will run EXTERNAL.EXE, close it, remove the
	previous days sent and receive log files, copy the current log files to .OLD,
	clear the current log files, and restart the external process:
	
	  loop
	  external -ms -mr -bt:23:59
	  del m:\maildata\log\sent.old
	  del m:\maildata\log\recv.old
	  copy m:\maildata\log\sent.log m:\maildata\log\sent.old
	  copy m:\maildata\log\recv.log m:\maildata\log\recv.old
	  type nul > m:\maildata\log\sent.log
	  type nul > m:\maildata\log\recv.log
	  goto loop
	
	It should not take long to process the .LOG files. Therefore, the absolute break
	time value should be pushed as close as possible to midnight. If the processes
	require more time, you need to set the absolute time value to an earlier time.
	
	
	Additional query words: 3.x -bt switch batch
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300 kbMailPCN350
	Version           : WINDOWS:3.0,3.2,3.2a,3.5
	
	=============================================================================
	
