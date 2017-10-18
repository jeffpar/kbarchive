---
layout: page
title: "Q108650: Flight Simulator 5.0 Err Msg: EMM386.EXE Exception Error #12"
permalink: kb/108/Q108650/
---

## Q108650: Flight Simulator 5.0 Err Msg: EMM386.EXE Exception Error #12

	Article: Q108650
	Product(s): Microsoft Home Games
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for MS-DOS, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If POWER.EXE is installed, it may produce the error message:
	
	  EMM386.EXE exception error #12
	
	You may receive this error message or the system may stop responding (hang) when
	you change airports or situations in Flight Simulator 5.0.
	
	RESOLUTION
	==========
	
	"Exception error # 12" indicates a "Stack Overflow". Removing EMM386.EXE may
	reveal the true error message; however, Flight Simulator 5.0 does not run very
	well without it. Changing the Stacks= setting in the CONFIG.SYS to read
	
	  Stacks=18,256
	
	may correct this. The maximum size for the Stacks= setting is 64,512. The
	presence of POWER.EXE in the CONFIG.SYS may also cause an "Exception error # 12"
	error. Removing this line, and/or using a startup (boot) disk may also correct
	this problem.
	
	MORE INFORMATION
	================
	
	The Power program (POWER.EXE) monitors keyboard polling and the Application Idle
	interrupt to determine if a system is idle; it monitors use of the hard disk,
	video functions, and MS-DOS functions to determine if a system is busy.
	
	POWER.EXE may incorrectly determine that your machine is idle if you are using
	communication programs, computationally intensive programs, or other programs
	that infrequently access the hard disk. When POWER.EXE detects that the system
	is idle, it halts or slows down the CPU, which adversely affects application
	performance if your machine is not truly idle.
	
	Additional query words: 5.00 flightsim fltsim dos 12 crash hung freeze up lock lockup fs5
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim500DOS kbSimSearch
	Version           : MS-DOS:5.0
	Issue type        : kbprb
	
	=============================================================================
	
