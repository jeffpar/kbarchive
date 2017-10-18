---
layout: page
title: "Q148718: PC DirSync: Err Msg: NSDA-&lt;process&gt; Missed its Run Window"
permalink: kb/148/Q148718/
---

## Q148718: PC DirSync: Err Msg: NSDA-&lt;process&gt; Missed its Run Window

	Article: Q148718
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During Directory Synchronization (Dir-Sync), the Dispatch program (Dispatch.exe)
	may report the following messages on the screen or on the Dispatch.log:
	
	  NSDA-RT Missed its run Window
	
	  NSDA-S Missed its run Window
	
	  NSDA-RR Missed its run Window
	
	CAUSE
	=====
	
	These messages are reported when the Dispatch program was unable to run the task
	according to the scheduled Dir-Sync times T1, T2, or T3. The Dispatch program
	may not have been running or the postoffice may not have been included in the
	Dispatch program configuration when the required task was scheduled to run.
	
	RESOLUTION
	==========
	
	Ensure the T1, T2 and T3 times are scheduled accordingly. Ensure the Dispatch
	program and the computer running Dispatch is working and all postoffices are
	defined in the Dispatch configuration either via the Dispatch.ini or the command
	line. The postoffice will run in its next scheduled window.
	
	MORE INFORMATION
	================
	
	In versions 3.2, 3.2a, and 3.5 of Mail for PC Networks, the scheduled run window
	for each Dir-Sync time is 8 hours. If this 8 hour window is missed, these errors
	are reported to inform the administrators that the postoffice did not
	participate at the scheduled times.
	
	The processing times, as well as other information, is held in the Process.glb
	file. You can view the Process.glb file by running the Dssched.exe utility.
	
	The following is an example of a Dssched dump of a Process.glb file:
	
	Record number 1
	ID = 1
	Requestor sends updates (Dispatch runs NSDA -RT)
	Current time to run NSDA -RT: Fri Dec 22 16:30:00 1995
	Run window is 8 hours (28800 seconds)
	Time after which this process will not run: Sat Dec 23 00:30:00 1995
	If this time is exceeded, an error (missed run window) is recorded.
	Next scheduled time is used instead of this time.
	This instance next runs on Fri Dec 29 16:30:00 1995
	Process comment: <null>
	
	Additional query words: 3.20 windows nt
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN350
	Version           : WINDOWS:3.2,3.5
	
	=============================================================================
	
