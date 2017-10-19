---
layout: page
title: "Q254449: EST2001: Help Answer Wizard and Index Tabs Hang"
permalink: /kb/254/Q254449/
---

## Q254449: EST2001: Help Answer Wizard and Index Tabs Hang

	Article: Q254449
	Product(s): Microsoft Automap
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbtool kbui kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2002 
	- Microsoft MapPoint 2001 
	- Microsoft Streets & Trips 2002, version 1.0 
	- Microsoft Streets and Trips 2001, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you press the F1 key to start Microsoft Streets and Trips 2001 Help or
	Microsoft MapPoint 2001 Help, and then click either the Answer Wizard tab or the
	Index tab, both the Answer Wizard and the Index stop responding (hang).
	
	CAUSE
	=====
	
	This behavior can occur if the Aw.dll file is damaged or missing.
	
	RESOLUTION
	==========
	
	To resolve this issue, copy the Aw.dll file from the Streets and Trips 2001
	CD-ROM or the MapPoint 2001 CD-ROM:
	
	1. Quit Streets and Trips 2001 or MapPoint 2001.
	
	2. Click Start, point to Find, and then click "Files or Folders".
	
	3. In the Named box, type "aw.dll" (without the quotation marks).
	
	4. In the "Look in" box, click Local Hard Drives, and then click Find Now.
	
	5. In the list of found files, right-click the Aw.dll file, and then click
	  Rename.
	
	6. Type "Aw.old" (without the quotation marks), and then press ENTER.
	
	7. Close the Find: Files Named Aw.dll window.
	
	8. Copy the Aw.dll file in the following folder on either the Streets and Trips
	  2001 CD-ROM or the MapPoint 2001 CD-ROM
	
	  <drive>:\Msmaps\Pfiles\Msoffice\Office
	
	  where <drive> is the drive letter of the CD-ROM drive, and then paste
	  this file into the following folder on the hard disk
	
	  <drive>:\Program Files\Microsoft Office\Office
	
	  where <drive> is the drive letter of the hard disk.
	
	9. Start Streets and Trips 2001 Help or MapPoint 2001 Help.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words: est2001 amap auto-map mp2001
	
	======================================================================
	Keywords          : kbtool kbui kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbExpediaSearch kbMapptSearch kbMapPoint2001 kbExpediaStreets2001 kbExpediaStreets2002 kbMapPoint2002
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
