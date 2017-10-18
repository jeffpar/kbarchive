---
layout: page
title: "Q194108: Research Organizer 99: Program Hangs When You Paste Text"
permalink: kb/194/Q194108/
---

## Q194108: Research Organizer 99: Program Hangs When You Paste Text

	Article: Q194108
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0,95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbinterop kbimu
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Encyclopedia 99 
	- Microsoft Encarta Reference Suite 99 
	- Microsoft Encarta Virtual Globe 99, version 1.0 
	- Microsoft Encarta 99 Research Organizer, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The second time you paste text from a word processing program into a notecard in
	Microsoft Encarta 99 Research Organizer, you may receive the following message:
	
	  Each notecard should contain information from only one source, and this card
	  already contains pasted information. Do you want to create a new card?
	
	If you click OK, Encarta 99 Research Organizer stops responding (hangs).
	
	When you quit the word processing program from which you copied the text, you
	receive an error message similar to the following:
	
	- Winword caused an invalid page fault in module Mfcan32.dll.
	
	- Wordpad caused an invalid page fault in module Mfcan32.dll.
	
	NOTE: These symptoms do not occur the first time you paste text into a notecard
	in Encarta 99 Research Organizer.
	
	CAUSE
	=====
	
	This behavior can occur if outdated OLE drivers are installed on your computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, install the updated OLE drivers included with Encarta
	Encyclopedia 99, Encarta Reference Suite 99, or Encarta Virtual Globe 99. To do
	this, follow these steps:
	
	1. Insert the CD-ROM you used to install the program into your CD-ROM drive.
	  Press and hold down the SHIFT key when you insert the CD-ROM to prevent the
	  program from starting automatically.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type the following line, and then click OK
	
	     <drive>:\Support
	
	  where <drive> is the letter of the CD-ROM drive.
	
	4. Double-click Dcom95.exe.
	
	MORE INFORMATION
	================
	
	This problem does not occur on Microsoft Windows 98-based computers.
	
	Additional query words: multi multi-media media mm ro world atlas evg
	
	======================================================================
	Keywords          : kbenv kberrmsg kbinterop kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1999 kbEncartaResearchOrg99 kbEncartaReference99 kbEncartaVirtGlobe99
	Version           : WINDOWS:1.0,95
	Issue type        : kbprb
	
	=============================================================================
	
