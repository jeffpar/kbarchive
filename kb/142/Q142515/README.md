---
layout: page
title: "Q142515: Magic School Bus: No Printout on Canon BubbleJet"
permalink: kb/142/Q142515/
---

## Q142515: Magic School Bus: No Printout on Canon BubbleJet

	Article: Q142515
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores Inside the Earth for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores the Human Body for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores the Ocean for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to print Fish Cards, the Divers License, and Certificates of
	Completion to a Canon Bubble Jet 660C or 610 printer from Magic School Bus
	Explores the Ocean (MSB Ocean), they never print.
	
	This behavior may also occur in MSB Explores the Human Body and MSB Explores
	Inside the Earth.
	
	CAUSE
	=====
	
	This problem occurs because the Canon driver consumes a large amount of memory.
	This contributes to an insufficiency of memory when you try to print the
	graphic.
	
	RESOLUTION
	==========
	
	Epson LQ printer drivers do not consume memory the way the Canon driver does. To
	resolve the printing problems, install the Epson LQ 860 or LQ 2550 driver to use
	with your Canon printer.
	
	To install the driver, use the instructions below for your version of Windows:
	
	Windows 95/98
	-------------
	
	1. Click Start, point to Settings, and then click Printers.
	
	2. With your right mouse button, click the Bubble Jet 660C, and then click
	  Properties.
	
	3. Click the Details tab.
	
	4. Click New Driver. A warning appears that says if you change the printer
	  driver, the changes are saved. Click Yes.
	
	5. In the list of Manufacturers click Epson. Then, from the list of Models,
	  click LQ 860 or LQ 2550.
	
	MSB Ocean should now print successfully. NOTE: This problem may also be corrected
	by disabling Print Spooling for the Canon BJC 600 or 610 printer driver. The
	print spooling option is found on the Details tab of the Printer Properties. For
	more information about print spooling, please see your printer documentation.
	
	Windows 3.x
	-----------
	
	1. In Program Manager, double click the Control Panel, usually located in the
	  Main program group.
	
	2. Double-click Printers.
	
	3. Click Add.
	
	4. Select the Epson LQ 860 or LQ 2550, and click Install.
	
	5. Insert the appropriate Windows setup disk when you are prompted, and press
	  ENTER.
	
	6. Make sure the port is set to the same port as the Canon Printer.
	
	7. Make sure the Epson driver is selected, and then click Set As Default.
	
	MSB Ocean should now print successfully.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 1.00 msbhb msbss frizz kbmm multimedia multi-media multi media printing prints slowly hangs freezes stops bj-610 bj-660c bj msbocean msboceans oceans winmsbhuman msbhuman homekids homekid cannon winmsbocean winmsbearth msbearth
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbHomeProdSearch kbZNotKeyword kbKidsSearch kbScholasticHuman kbScholasticOcean kbScholasticEarth kbMSBSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
