---
layout: page
title: "Q94372: Golf Err Msg: Machine Is Too Slow to Play Sounds"
permalink: /kb/094/Q94372/
---

## Q94372: Golf Err Msg: Machine Is Too Slow to Play Sounds

	Article: Q94372
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-1999
	
	kbusage kberrmsg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Golf for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Golf for Windows issues the error statement "Machine is too slow to
	play sounds" in the Current Sound Driver portion of the System Info dialog box
	if the machine fails Golf's internal timing test. Golf performs this test as
	Golf is launched, so you may not always receive this message every time Golf is
	started.
	
	MORE INFORMATION
	================
	
	This test is a series of instructions designed to benchmark the speed of the
	particular system. Among the instructions in the series are instructions
	representative of those necessary to play the sounds. Through testing, we have
	determined that any machine that is unable to perform this series of
	instructions less than 3200 times per second is also unable to play the sounds
	effectively. We found that machines that were unable to satisfy the 3200 loops
	per second requirement produced broken and garbled sound.
	
	Machines such as the 386DX, 486SX, and 486DX should have no problem playing the
	sounds. The dominant factors in this benchmark are the CPU speed, speed of
	memory chips, and the time spent servicing the resident interrupts, following
	the CLI (clear interrupt) instruction.
	
	Anything that reduces the amount of time spent accessing memory, servicing
	interrupts, or time in other applications will increase the likelihood of
	playing sounds. Other than obtaining a new computer or a sound card, things you
	can try to resolve the problem include the following:
	
	1. If the computer has a Turbo switch, make sure that it is on.
	
	2. Eliminate all unnecessary terminate-and-stay-resident (TSR) programs.
	
	3. Run Windows in standard mode.
	
	Additional query words: 1.00 3.00 3.10 Help
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbGamesSearch kbGolfSearch kbGolf100
	Version           : WINDOWS:1.0
	Issue type        : kbinfo
	
	=============================================================================
	
