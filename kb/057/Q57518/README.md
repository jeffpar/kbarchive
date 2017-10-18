---
layout: page
title: "Q57518: Flight Simulator: Blank Screen on NEC ProSpeed 386"
permalink: kb/057/Q57518/
---

## Q57518: Flight Simulator: Blank Screen on NEC ProSpeed 386

	Article: Q57518
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The NEC ProSpeed comes with a TSR (terminate and stay resident) program that
	turns off the backlit LCD monitor after a definable amount of time. When the TSR
	turns off the display, the sound effects of Flight Simulator can still be heard
	and pressing any key turns the monitor back on.
	
	The commands for controlling this TSR are as follows:
	
	  Command   Function
	  -------   --------
	
	  BL/O      Sets the monitor to always on. (The last character
	            is a capital letter "O".)
	
	  BL/n      Turns the monitor off after n number of minutes.
	            The value of n must be between 1 and 20.
	
	Example
	-------
	
	BL/O sets the monitor to always on. Use this command with Flight Simulator.
	
	BL/5 turns off the screen after 5 minutes of keyboard inactivity.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
