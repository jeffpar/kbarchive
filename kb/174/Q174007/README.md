---
layout: page
title: "Q174007: Audio and Video Components Seem to Be Damaged"
permalink: /kb/174/Q174007/
---

## Q174007: Audio and Video Components Seem to Be Damaged

	Article: Q174007
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbdisplay kbsound kbmsn
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you download music or animation components on MSN, The Microsoft Network,
	audio and video may seem to be damaged. The musical note MSN Program Viewer may
	also be missing.
	
	CAUSE
	=====
	
	This behavior can occur if the Imthart.exe file is damaged or missing.
	
	RESOLUTION
	==========
	
	To resolve this problem, remove and reinstall the MSN Music and Animation
	components and the MSN interface controls. To do so, follow these steps:
	
	1. Insert the MSN CD-ROM into the CD-ROM drive. If the Welcome To MSN Setup
	  window appears, close it.
	
	2. Click Start, point to Settings, click Control Panel, and then double- click
	  Add/Remove Programs.
	
	3. For each of the following components on the Install/Uninstall tab, click the
	  component, and then click Add/Remove.
	
	  NOTE: You must remove the components in the order in which they are listed
	  here.
	   - Program Viewer Controls
	
	   - MSN Program Viewer
	
	   - MSN Optional Controls
	
	   - MSN Music & Animation Components
	
	4. Restart the computer.
	
	5. Right-click the My Computer icon on the desktop, and then click Explore.
	
	6. Right-click the CD-ROM drive, and then click Explore.
	
	7. Double-click the Msnsetup folder.
	
	8. Double-click the Compnts folder.
	
	9. Double-click each of the following files in the order in which they are
	  listed. When you are prompted to restart the computer, click Yes.
	   - Msn13.exe
	
	   - Coreui.exe
	
	   - Newcore.exe
	
	   - Controls.exe
	
	   - Imthart.exe
	
	10. Restart the computer.
	
	Additional query words: msnet msnetwork microsoft-net m.s.n.
	
	======================================================================
	Keywords          : kbdisplay kbsound kbmsn 
	Technology        : kbMSNSearch kbMSN200
	Version           : WINDOWS:2.0
	Issue type        : kbprb
	
	=============================================================================
	
