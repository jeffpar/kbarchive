---
layout: page
title: "Q309132: Minimal installation fails for Swedish Retail version of Microso"
permalink: kb/309/Q309132/
---

## Q309132: Minimal installation fails for Swedish Retail version of Microso

	Article: Q309132
	Product(s): Microsoft Press
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft OfficeXP Professional Step By Step Interactive, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to launch the Swedish retail version of Microsoft (r) Office XP
	Professional Step by Step Interactive Training (CD 3 in Swedish Office XP retail
	box) and logging in after a MINIMAL installation was performed, the user is
	presented with a dialog box stating that the CD is not available.
	
	CAUSE
	=====
	
	The product is looking for an entry in the setup.ini file located on the CD.
	This entry is missing, causing the product to behave as if the CD is not
	present.
	
	WORKAROUND
	==========
	
	The workaround for this issue requires that the user modify the Affinity key in
	the lrun32.ini file which is found in the Windows folder (typically c:\windows
	or c:\winnt). To modify this key, do the following: 1. Open the lrun32.ini in a
	text editor (e.g. Notepad). 2. Find the section called o10r (sections are
	delimited by braces so the relevant section would look like this: [o10r]). 3.
	Underneath that section, find the Affinity key. It should have a value of 1
	(where Affinity=1). 4. Change the value of the Affinity key to 0 (zero) where
	Affinity=0. 5. Save the file. 6. Launch the training application from the
	desktop shortcut.
	The training should now open and read the data from the CD-ROM drive.
	
	STATUS
	======
	
	Known issue.
	
	Additional query words: SBS Interactive;interaktiv;Training; minimal installation; SBSI;setup;Swedish; Office XP;OfficeXP Training;MSPress
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch
	Version           : :3.0
	Issue type        : kbprb
	
	=============================================================================
	
