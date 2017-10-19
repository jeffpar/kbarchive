---
layout: page
title: "Q124782: NBA Basketball Hangs After Running Maintenance Mode Setup"
permalink: /kb/124/Q124782/
---

## Q124782: NBA Basketball Hangs After Running Maintenance Mode Setup

	Article: Q124782
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1994-1995 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Complete NBA Basketball for Windows 1994-1995 edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start Microsoft Complete NBA Basketball after re-running Setup,
	your system may stop responding (hang), or you may receive a general protection
	(GP) fault.
	
	CAUSE
	=====
	
	This problem occurs if the following conditions are true:
	
	- You installed Basketball using either Fast Execution or Medium Execution
	
	  -and-
	
	- NBA Basketball is running when you run Setup in maintenance mode, and you
	  choose the Remove All option.
	
	RESOLUTION
	==========
	
	If you run Setup in maintenance mode when NBA Basketball is running, you will
	receive the following error message:
	
	  Setup has detected that the following application(s) are running:
	
	  A multimedia application
	
	  We recommend that you close these application(s) before continuing.
	
	When you receive this error message, choose the Exit Setup option, then exit
	Complete Basketball before you attempt Setup again.
	
	STATUS
	======
	
	This behavior is by design of NBA Basketball.
	
	MORE INFORMATION
	================
	
	If NBA Basketball is closed before running the Maintenance Mode Setup, the icons
	are removed from Program Manager and you will not be able to restart the
	program.
	
	NOTE: If Basketball was installed using the Slow Execution option, running Setup
	in maintenance mode will remove the icons from Program Manager and you will not
	be able to restart the program even though you can continue to use the program.
	Once the program has been exited there will be no way to run the program unless
	you reinstall the program.
	
	
	Additional query words: 1995 multi media multimedia multi-media mmtitles hung freeze err msg general protection fault flt gp segment load failure errors stop halt set up set-up resetup re-setup GPF 1994hangs hanging hanged crashed crash crashes frozen locked locked-up lock hang bombed bomb down
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbGamesSearch kbCompleteBasketballSearch kbCompleteNBABasketball kbCompleteNBABasketball1994
	Version           : :1994-1995 edition
	
	=============================================================================
	
