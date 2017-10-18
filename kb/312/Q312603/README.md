---
layout: page
title: "Q312603: FS2000: Err Msg During Installation Loading Language Resources"
permalink: kb/312/Q312603/
---

## Q312603: FS2000: Err Msg During Installation Loading Language Resources

	Article: Q312603
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 2000 Professional Edition 
	- Microsoft Flight Simulator 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Microsoft Flight Simulator 2000, you may receive an
	error message similar to the following:
	
	  FS5WTEST.exe couldn't load language resources dll error
	  C:\Program Files\Microsoft Games\fs2000\English.fll
	  Error Code 0x485 (1157)
	
	CAUSE
	=====
	
	This error can occur when there is a corrupted file in the Temporary folder.
	
	RESOLUTION
	==========
	
	To resolve this behavior, clean boot your computer, and then empty the Temporary
	folder. To do this, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "msconfig" (without the quotation marks), and then
	  click OK.
	
	3. On the General tab, click "Selective startup", and then click to clear each
	  check box.
	
	4. Click Apply, and then click OK.
	
	5. Restart your computer.
	
	6. Start Windows Explorer.
	
	7. Browse to C:\WINDOWS\Temp.
	
	8. On the Edit menu, click Select All, and then press DELETE.
	
	  When you receive the confirmation message, click Yes.
	
	9. Install Flight Simulator 2000.
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim2000
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
