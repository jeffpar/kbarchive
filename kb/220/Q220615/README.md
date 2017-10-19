---
layout: page
title: "Q220615: Encarta Err Msg: Cannot Import Uninstal.reg: Error Opening..."
permalink: /kb/220/Q220615/
---

## Q220615: Encarta Err Msg: Cannot Import Uninstal.reg: Error Opening...

	Article: Q220615
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0; :
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup kbimu
	Last Modified: 19-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Encyclopedia 99 
	- Microsoft Encarta Encyclopedia 2000 
	- Microsoft Encarta Encyclopedia Deluxe 2001 for Windows 
	- Microsoft Encarta Encyclopedia Standard 2001 for Windows 
	- Microsoft Encarta Reference Suite 99 
	- Microsoft Encarta Reference Suite 2000 
	- Microsoft Encarta Reference Suite 2001 
	- Microsoft Encarta Virtual Globe 99, version 1.0 
	- Microsoft Encarta Interactive World Atlas 2000 
	- Microsoft Encarta Interactive World Atlas 2001 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install any of the products listed at the beginning of this article,
	your computer may stop responding (hang) while Setup is updating your computer.
	
	You may also receive one of the following error messages:
	
	   - Cannot import Uninstal.reg: Error opening the file. There may be a disk or
	  file system error.
	
	   - Setup encountered an unknown error. Please try running Setup again.
	
	   - Cannot find one or more of the fonts Encarta uses. To correct the problem,
	  run setup again from the setup disc.
	
	CAUSE
	=====
	
	This behavior can occur if any of the following conditions are true:
	
	- A font on your computer is missing or damaged.
	
	- Too many fonts are installed on your computer.
	
	- Your CD-ROM drive cannot read the files in the Aref folder on the Encarta
	  Installation and Resources CD-ROM.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods. After you complete each
	method, test to see if the issue is resolved. If the issue still occurs,
	continue to the next method.
	
	Delete the Fonts Encarta Installed
	----------------------------------
	
	Delete the fonts Encarta installed. To do this, follow these steps:
	
	1. Click Start, click Shut Down, click Restart In MS-DOS Mode, and then click
	  OK.
	
	2. At the command prompt, type the following line, and then press ENTER:
	
	  cd windows\fonts
	
	3. If you installed Encarta Standard or Encarta Deluxe, then type the following
	  lines, pressing ENTER after you type each line:
	
	  attrib *.ttf -r -s -h
	  del tahoma*.ttf
	  del grgaref.ttf
	  del msref*.ttf
	  del phonetic.fon
	  del verdref.ttf
	
	  If you installed Encarta Reference Suite or Virtual Globe, or World Atlas, you
	  also need to type the following lines, pressing ENTER after you type each
	  line:
	
	  del arial.ttf
	  del arialbd.ttf
	  del ariali.ttf
	  del arialn.ttf
	  del arialnb.ttf
	  del arialni.ttf
	  del msgeo*.ttf
	  del refspec.ttf
	  del times.ttf
	  del timesbd.ttf
	  del timesbi.ttf
	  del timesi.ttf
	  del verdref.ttf
	
	4. Press CTRL+ALT+DELETE to restart your computer.
	
	5. Reinstall Encarta.
	
	Check the TrueType Font Limits in Microsoft Windows 95/98
	---------------------------------------------------------
	
	For information about TrueType font limits in Windows, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q131943 TrueType Font Limits in Windows 95/98
	
	Troubleshoot CD-ROM Read Errors
	-------------------------------
	
	For information about how to troubleshoot CD-ROM read errors, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q218617 How to Troubleshoot CD-ROM Read Issues
	
	Additional query words: multi multi-media media mm enc99 evg99 ee2k
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc2000 kbEncartaEnCyc1999 kbEncartaReference99 kbEncartaReference2000 kbEncartaReference2001 kbEncartaVirtGlobe99 kbEncartaWorldAtlas2001 kbEncartaWorldAtlas2000
	Version           : WINDOWS:1.0; :
	Issue type        : kbprb
	
	=============================================================================
	
