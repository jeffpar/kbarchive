---
layout: page
title: "Q119578: PPT: Error 340 Printing CorelDRAW! 4.0 Objects to Genigraphics"
permalink: /kb/119/Q119578/
---

## Q119578: PPT: Error 340 Printing CorelDRAW! 4.0 Objects to Genigraphics

{% raw %}

	Article: Q119578
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbgraphic kbprint kbdta kbconversion kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows, versions 4.0, 4.0a, 4.0c 
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you try to print a PowerPoint 4.0 presentation that contains embedded objects
	created in CorelDRAW! versions 4.0 or 5.0 to the Genigraphics driver, you may
	receive the following message:
	
	  Sorry, there was an error (340) accessing the file.
	
	This error will occur if you do not have CorelDRAW! installed on your computer.
	
	This error will not occur if you print the presentation to an actual printer
	(such as a LaserJet or dot-matrix printer.)
	
	WORKAROUND
	==========
	
	You can get your presentation to print correctly by performing the following
	steps:
	
	1. Open the presentation in PowerPoint.
	
	2. For each embedded CorelDRAW! object, do the following:
	  a. Click the object once to select it.
	
	  b. From the Draw menu, choose Ungroup. You will see the following warning:
	
	  This is an imported object, not a group. Converting it to PowerPoint objects
	  will permanently discard any embedded data or linking information it may
	  contain. Convert to PowerPoint objects?
	
	  c. Choose the OK button.
	
	MORE INFORMATION
	================
	
	When you print a presentation to the Genigraphics driver, you create a
	compressed copy of that presentation. The compression process saves information
	about the embedded objects in the presentation. If there is no information about
	CorelDRAW! in your computer's registration database (REG.DAT), the Genigraphics
	driver will not know how to compress CorelDRAW! objects.
	
	Many OLE source applications include additional information in their objects.
	This information may allow the Genigraphics driver to correctly compress those
	objects even if the application that created them is not registered in REG.DAT.
	CorelDRAW! objects lack this additional information.
	
	Additional query words: Photo-paint corell coral coreldraw corel draw 7.00 ppt95 winppt 4.00c
	
	======================================================================
	Keywords          : kb3rdparty kbgraphic kbprint kbdta kbconversion kbPrinting 
	Technology        : kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search kbPowerPt400 kbPowerPt400c kbPowerPt400a
	Version           : WINDOWS:4.0,4.0a,4.0c,7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
