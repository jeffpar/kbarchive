---
layout: page
title: "Q160000: SMS: Dos4gw.exe Causes Memory Inventory Inaccuracy"
permalink: kb/160/Q160000/
---

## Q160000: SMS: Dos4gw.exe Causes Memory Inventory Inaccuracy

	Article: Q160000
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kbinterop kbusage smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	MS-DOS clients that run the DOS extender Dos4gw.exe before Systems Management
	Server hardware inventory is collected may result in unlikely extended memory
	values in client inventory. For example, an MS-DOS client with 32 MB of memory
	that runs Dos4gw.exe in the Autoexec.bat (before hardware inventory is
	collected) may report 64 MB of extended memory in client inventory.
	
	CAUSE
	=====
	
	Memory inventory is incorrect because Dos4gw.exe is not closing high memory area
	(HMA) handles it uses to access XMS memory. Dos4gw.exe opens HMA handles to
	access XMS memory managed by the resident A20 handler (such as Himem.sys).
	
	Systems Management Server memory inventory is collected by summing the total
	amount of memory in use by the available HMA memory handles. In this case,
	Dos4gw.exe is not closing some HMA handles when it quits, leaving two handles
	still allocated. In the 32 MB client example Dos4gw.exe opens a handle for 516K,
	and another for 30,440K. When Dos4gw.exe exits, it does not close its HMA
	handles; when Systems Management Server inventory sums them with the default
	handles in use (totaling 31,680K), the extended memory value is reported
	incorrectly as 62,636K.
	
	WORKAROUND
	==========
	
	To work around this problem, run Dos4gw.exe after the Systems Management Server
	hardware inventory has been collected.
	
	STATUS
	======
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	
	MORE INFORMATION
	================
	
	The following table is the combined results of a test application, showing
	Dos4gw.exe failing to close HMA handles 11 and 12 after closing:
	
	Before Dos4gw     After Dos4gw
	Handle  0 = 344   Handle 0 = 344
	Handle  1 = 1     Handle 1 = 1
	Handle  2 = 8     Handle 2 = 8
	Handle  3 = 7     Handle 3 = 7
	Handle  4 = 10    Handle 4 = 10
	Handle  5 = 5     Handle 5 = 5
	Handle  6 = 6     Handle 6 = 6
	Handle  7 = 12    Handle 7 = 12
	Handle  8 = 6     Handle 8 = 6
	Handle  9 = 65    Handle 9 = 65
	Handle 10 = 31216 Handle 10 = 31216
	Handle 11 = 0     Handle 11 = 516
	Handle 12 = 0     Handle 12 = 30440
	Handle 13 = 0     Handle 13 = 0
	Handle 14 = 0     Handle 14 = 0
	Handle 15 = 0     Handle 15 = 0
	Handle 16 = 0     Handle 16 = 0
	Handle 17 = 0     Handle 17 = 0
	Handle 18 = 0     Handle 18 = 0
	Handle 19 = 0     Handle 19 = 0
	Handle 20 = 0     Handle 20 = 0
	Handle 21 = 0     Handle 21 = 0
	Handle 22 = 0     Handle 22 = 0
	Handle 23 = 0     Handle 23 = 0
	Handle 24 = 0     Handle 24 = 0
	Handle 25 = 0     Handle 25 = 0
	Handle 26 = 0     Handle 26 = 0
	Handle 27 = 0     Handle 27 = 0
	Handle 28 = 0     Handle 28 = 0
	Handle 29 = 0     Handle 29 = 0
	Handle 30 = 0     Handle 30 = 0
	Handle 31 = 0     Handle 31 = 0
	Total     = 31680 Total     = 62636
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbenv kbinterop kbusage smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
