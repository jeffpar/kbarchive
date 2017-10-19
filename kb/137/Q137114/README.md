---
layout: page
title: "Q137114: Can't Access Compact Disc If Wrong Speed Set in Windows 95"
permalink: /kb/137/Q137114/
---

## Q137114: Can't Access Compact Disc If Wrong Speed Set in Windows 95

	Article: Q137114
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0 on CD-ROM,4.2-CD,4.3-CD,7.0; :2.0 on CD-ROM,2.0a on CD-ROM; Win95:7.0
	Operating System(s): 
	Keyword(s): kbenv kbhw kbtshoot kbHardware
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Publisher for Windows 95, version 3.0 on CD-ROM 
	- Microsoft Publisher for Windows, versions 2.0 on CD-ROM, 2.0a on CD-ROM 
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft Office for Windows 95, version 7.0 
	- Microsoft Office for Windows, versions 4.2-CD, 4.3-CD 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you install Publisher or Office from compact disc under Windows 95, you may
	receive one of several error messages similar to:
	
	  D:\ is not accessible.
	
	  The device is not ready.
	
	You can also receive these error messages accessing clip art on compact disc or
	playing Media Clips from compact disc.
	
	CAUSE
	=====
	
	These problems can occur if Windows 95 Setup did not correctly identify which
	CD-ROM drive you have. If Windows 95 can't identify your CD-ROM drive, it will
	optimize the access pattern for a quadruple-speed drive. If you do not have a
	quadruple-speed drive, you can get a variety of errors trying to install or run
	programs from a compact disc.
	
	RESOLUTION
	==========
	
	1. Using the right mouse button, click the My Computer icon and then click
	  Properties.
	
	2. Click the Performance tab and click File System.
	
	3. Click the CD-ROM tab.
	
	4. Choose the entry from the Optimize Access Pattern For list that most closely
	  matches your CD-ROM drive. The available choices are:
	
	  No read-ahead
	  Single-speed drives
	  Double-speed drives
	  Triple-speed drives
	  Quad-speed or higher
	
	5. Click OK.
	
	6. Restart Windows 95.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 3.00 2.00 powerpoint w_powerpt powerpt powerpnt w_office msoffice office mspub w_mspub hang lock freeze setup access retry cancel install installation 95
	
	======================================================================
	Keywords          : kbenv kbhw kbtshoot kbHardware 
	Technology        : kbOfficeSearch kbPowerPtSearch kbWin95search kbPublisherSearch kbPowerPt95 kbZNotKeyword2 kbOffice95Search kbOffice95 kbZNotKeyword3 kbPowerPt95Search kbOffice430 kbOffice420 kbPublisher200 kbPublisher95 kbPublisher200a kbWin95
	Version           : WINDOWS:3.0 on CD-ROM,4.2-CD,4.3-CD,7.0; :2.0 on CD-ROM,2.0a on CD-ROM; Win95:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
