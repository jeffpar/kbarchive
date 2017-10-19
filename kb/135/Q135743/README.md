---
layout: page
title: "Q135743: PPT7: No Clip Art Available to Import to ClipArt Gallery"
permalink: /kb/135/Q135743/
---

## Q135743: PPT7: No Clip Art Available to Import to ClipArt Gallery

	Article: Q135743
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbsetup kbusage kbclip
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start ClipArt Gallery for the first time after installing PowerPoint
	for Windows 95, version 7.0, there may not be any clip art to import into the
	ClipArt Gallery.
	
	CAUSE
	=====
	
	The probable cause is that you chose to run a Custom installation of PowerPoint
	7.0 but did not select Clip Art as one of the components to install. Clip Art is
	not selected by default in the Custom installation.
	
	NOTE: This behavior is different in PowerPoint 97. In PowerPoint 97 Setup, Clip
	Art is selected by default when you choose a Custom installation.
	
	RESOLUTION
	==========
	
	To install clip art, run a maintenance mode installation of PowerPoint for
	Windows 95 and select Clip Art. To do this, follow these steps:
	
	1. Run the PowerPoint 7.0 Setup.
	
	2. Click Add/Remove.
	
	3. Highlight Shared Applications and click Change Option.
	
	4. Select the Clip Art check box.
	
	5. Click OK, click Continue, and allow Setup to run to completion.
	
	STATUS
	======
	
	This behavior is by design. The Custom installation option allows you to choose
	whether to install each component of the program. In the Typical installation
	mode, Clip Art is selected by default because it assumes most users want some
	clip art.
	
	Additional query words: ppt95 ppt7 gone disappeared not there
	
	======================================================================
	Keywords          : kbsetup kbusage kbclip 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	
	=============================================================================
	
