---
layout: page
title: "Q198748: Tutor Err Msg: Out of Memory! Please Close Some Applications..."
permalink: /kb/198/Q198748/
---

## Q198748: Tutor Err Msg: Out of Memory! Please Close Some Applications...

	Article: Q198748
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool kbimu
	Last Modified: 09-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft My Personal Tutor: Sam's Hide and Seek Adventure, version 1.0 
	- Microsoft My Personal Tutor: Sky's Space Station Voyage, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to create a Progress Report in any of the Microsoft My Personal
	Tutor programs listed at the beginning of this article, you may receive the
	following error message:
	
	  Microsoft My Personal Tutor Progress Reports
	
	  Out of Memory! Please close some applications and try again.
	
	CAUSE
	=====
	
	This behavior can occur if the Default.ojd file is missing or damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove and then reinstall the My Personal Tutor program.
	To do this, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Click Microsoft Sam's Hide and Seek Adventures or Microsoft Sky's Space
	  Station Voyage, and then click Add/Remove.
	
	4. If you are prompted to confirm the program removal, click Yes.
	
	5. Insert the Sam's Hide and Seek Adventures or Sky's Space Station Voyage
	  CD-ROM into your CD-ROM drive and then follow the instructions on the screen
	  to reinstall the program.
	
	If the issue continues to occur, copy the Default.ojd file from the Sam's Hide
	and Seek Adventures or Sky's Space Station Voyage CD-ROM to your hard disk. To
	do this, follow these steps:
	
	1. Insert the Sam's Hide and Seek Adventures or Sky's Space Station Voyage
	  CD-ROM into your CD-ROM drive.
	
	2. Double-click My Computer.
	
	3. Right-click the CD-ROM drive icon, and then click Explore.
	
	4. Double-click the Tutor folder.
	
	5. Right-click the Default.ojd file, and then click Copy.
	
	6. Click Start, and then click Run.
	
	7. In the Open box, type the following line (including the quotation marks), and
	  then click OK:
	
	  "C:\Program Files\Microsoft My Personal Tutor\Data\Static"
	
	8. On the Edit menu, click Paste.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: 1.00 mskids mpt exit quit
	
	======================================================================
	Keywords          : kberrmsg kbtool kbimu 
	Technology        : kbHomeProdSearch kbKidsSearch kbMPTSam kbMPTSky
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
