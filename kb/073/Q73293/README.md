---
layout: page
title: "Q73293: When MS-DOS Fails to Load in the HMA"
permalink: /kb/073/Q73293/
---

## Q73293: When MS-DOS Fails to Load in the HMA

{% raw %}

	Article: Q73293
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MS-DOS version 5.0 and 6.0 can save memory by loading itself into the first 64K
	of extended memory, the high memory area (HMA). To check whether MS-DOS has
	loaded itself in the HMA, issue the MEM command and look at the output. If the
	last line of output reads
	
	  MS-DOS is resident in High Memory Area
	
	then MS-DOS has loaded itself into the HMA. However, if MS-DOS has failed to load
	into the HMA, you will get one of two messages:
	
	  64Kb High Memory Area is Available
	
	  -or-
	
	  High Memory Area is in Use
	
	MORE INFORMATION
	================
	
	The first message, "64Kb High Memory Area is Available," is usually caused by
	not having the following line in the CONFIG.SYS file:
	
	  DOS=HIGH
	
	To correct this problem, add the "DOS=HIGH" (without the quotation marks) line to
	CONFIG.SYS.
	
	The second message, "High Memory Area is in Use," has two possible causes:
	
	- Something else is being loaded into the HMA, such as a network driver or some
	  other application. If you want to run MS-DOS in the HMA instead of the
	  program that is currently using it, you must disable the ability of the other
	  program to use the HMA. Consult that program's documentation for the disable
	  procedure. Then, you will need to add the line "DOS=HIGH" (without the
	  quotation marks) to your CONFIG.SYS file and ensure that you are loading
	  HIMEM.SYS.
	
	- HIMEM.SYS is using the incorrect A20 handler. Upon installation, HIMEM.SYS
	  usually selects one of 16 different A20 handlers, depending upon the hardware
	  it detects. HIMEM's automatic detection can be overridden by the /MACHINE: or
	  /M: switch. If HIMEM.SYS is installing the wrong A20 handler on its own, you
	  must force it to install the correct handler with the /MACHINE: switch.
	  However, if HIMEM.SYS is being forced to install an incorrect A20 handler by
	  the /MACHINE: switch, you may be able to solve the problem by removing the
	  /MACHINE: switch and allowing HIMEM to select which A20 it uses.
	
	  For more information on MS-DOS 5.0's HIMEM.SYS and the /MACHINE: switch, see
	  pages 610-613 of the version 5.0 "Microsoft MS-DOS User's Guide and
	  Reference," or query on the following words:
	
	  " HIMEM and /M and MS-DOS " (without the quotation marks)
	
	  If you are using MS-DOS 6.x, type "help himem.sys" (without the quotation
	  marks) at the MS-DOS command prompt, and then press ENTER.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
