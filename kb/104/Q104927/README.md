---
layout: page
title: "Q104927: Cardfile Printing on LaserJet 4 Prints Double Line"
permalink: /kb/104/Q104927/
---

## Q104927: Cardfile Printing on LaserJet 4 Prints Double Line

	Article: Q104927
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print from Cardfile using the Hewlett-Packard (HP) LaserJet 4 or HP
	LaserJet 4Si PCL drivers, a double line is printed between the index lines and
	the body of the card. The lower of the two lines is printed through any text on
	the first line of the body of the card.
	
	RESOLUTION
	==========
	
	The HP LaserJet 4 Si/Si MX PS, HP LaserJet II, and HP LaserJet III drivers do
	not exhibit this problem.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Install the HP LaserJet 4 or HP LaserJet 4Si PCL driver.
	
	2. Run Cardfile in Card view (default) and type some text on the index line and
	  also on the first line of the body.
	
	3. From the File menu, choose Print.
	
	The card will print correctly, with the exception of a double line instead of a
	single line between the index line and the card body.
	
	NOTE: There is a double line in the card on the screen, but only a single line
	should be printed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.1. This
	problem was corrected in Windows NT Workstation or Server version 3.5.
	
	Additional query words: prodnt Laser Jet
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
