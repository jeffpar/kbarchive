---
layout: page
title: "Q313954: Streets &amp; Trips 2001: Pushpin Is Not Displayed After Placement"
permalink: /kb/313/Q313954/
---

## Q313954: Streets &amp; Trips 2001: Pushpin Is Not Displayed After Placement

	Article: Q313954
	Product(s): Microsoft Automap
	Version(s): 
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 29-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Streets and Trips 2001 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Streets and Trips 2001, when you attempt to manually place a
	pushpin, the pushpin is not displayed.
	
	CAUSE
	=====
	
	This behavior can occur if the MDAC_typ.exe file is corrupted.
	
	RESOLUTION
	==========
	
	To resolve this issue, restart your computer by performing a clean boot, and
	then reinstall MDAC_typ.exe from your Streets and Trips CD-ROM. To do this,
	follow these steps:
	
	1. Restart your computer by performing a clean boot:
	
	  a. Click Start, and then click Run.
	
	  b. In the Open box, type "msconfig" (without the quotation marks), and then
	     click OK.
	
	  c. In the System Configuration Utility dialog box, click "Selective startup".
	
	  d. Click to clear each check box under "Selective startup", click Apply, and
	     then click OK.
	
	  e. When prompted, restart your computer.
	
	2. Reinstall MDAC_typ.exe from your Streets and Trips CD-ROM:
	
	  a. Insert the Streets and Trips Setup CD-ROM into your computer's CD-ROM or
	     DVD-ROM drive.
	
	  b. Double-click E:\MSMap\Redist\MDAC\mdac_typ.exe.
	
	  c. When the License Agreement dialog box appears, read the given information,
	     and then click Yes.
	
	     NOTE: If you do not accept this license agreement, you will be unable to
	     complete the installation.
	
	  d. Follow the instructions to complete the installation process.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch kbExpediaSearch kbExpediaStreets2001
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
