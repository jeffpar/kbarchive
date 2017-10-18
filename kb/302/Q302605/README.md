---
layout: page
title: "Q302605: Flight Simulator 2000: IPF When You Load a Saved Flight"
permalink: kb/302/Q302605/
---

## Q302605: Flight Simulator 2000: IPF When You Load a Saved Flight

	Article: Q302605
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to load a saved flight in Microsoft Flight Simulator 2000, you
	may receive an error message similar to one of the following:
	
	  FS2000 caused an invalid page fault in module KERNEL32.DLL
	
	  -or-
	
	  FS2000 caused an error in g3d.dll
	
	  -or-
	
	  FS2000 caused an invalid page fault in sound.dll
	
	CAUSE
	=====
	
	This behavior can occur if the saved flight includes a direct navigation point
	in the Global Positioning System (GPS) navigation system.
	
	NOTE: If a GPS flight is set as the default flight, you will receive the above
	errors during launch.
	
	RESOLUTION
	==========
	
	To work around this issue, follow these steps:
	
	1. Double-click My Computer.
	
	2. Open the Pilots folder, found at the following location:
	
	  <drive>:\Program Files\Microsoft Games\FS2000
	
	3. Double-click your saved flight (the file has an extension of .flt).
	
	4. In the "Choose the program you want to use" box, click Notepad.
	
	5. Click to clear the "Always use this program to open this file" check box, and
	  the click OK.
	
	6. On the Search menu, click Find.
	
	7. Type [GPS_Engine], and then click Find Next.
	
	8. Click Cancel.
	
	9. Change the following line
	
	  DirectTo=True
	
	  to the following:
	
	  DirectTo=False
	
	10. On the File menu, click Exit. When you are prompted to save the changes,
	  click Yes.
	
	Additional query words: msgame fltsim fs2k
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim2000 kbSimSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
