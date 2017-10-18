---
layout: page
title: "Q96603: Balancing Power Conservation and Performance with POWER.EXE"
permalink: kb/096/Q96603/
---

## Q96603: Balancing Power Conservation and Performance with POWER.EXE

	Article: Q96603
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Power program (POWER.EXE) monitors keyboard polling and the Application Idle
	interrupt to determine if a system is idle; it monitors use of the hard disk,
	video functions, and MS-DOS functions to determine if a system is busy.
	
	POWER.EXE may incorrectly determine that your machine is idle if you are using
	communication programs, computation-intensive programs, or other programs that
	infrequently access the hard disk. When POWER.EXE detects that the system is
	idle, it halts or slows down the CPU, which adversely affects application
	performance if your machine is not truly idle.
	
	MORE INFORMATION
	================
	
	With the ADV[:MIN|REG|MAX] command line switch, you can indicate whether your
	higher priority is power savings or application performance. Specifically, the
	ADV parameter controls the keyboard polling detection. If application
	performance is suffering because of false idle detections, you can use the
	ADV:MIN option to trigger fewer false idle detections. However, this option
	provides minimal power savings when your machine is idle. The ADV:MAX option
	provides maximum power savings but increases the chances of false idle
	detections. The default setting is ADV:REG, which balances power conservation
	with performance.
	
	Type "power" (without the quotation marks and without any parameters) at the
	MS-DOS command prompt to determine the current settings.
	
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
