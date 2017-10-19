---
layout: page
title: "Q160152: PPT: PowerPoint Does Not Collate Using NT 3.51 Postscript Driver"
permalink: /kb/160/Q160152/
---

## Q160152: PPT: PowerPoint Does Not Collate Using NT 3.51 Postscript Driver

	Article: Q160152
	Product(s): Microsoft PowerPoint for Windows
	Version(s): MS-DOS:1.0; WINDOWS:7.0,7.0a,7.0b,97; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 12-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, versions 7.0, 7.0a, 7.0b 
	- Microsoft PowerPoint 97 for Windows 
	- the operating system: Microsoft Windows NT, versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When printing multiple copies of a presentation from Microsoft PowerPoint on a
	Windows NT system, the printout may not be collated even though the collate
	option is turned on. For example, when printing two slides of a presentation,
	slide 1 prints twice, slide 2 prints twice, and so on. This behavior only occurs
	when printing with a PostScript printer driver.
	
	The following table compares the versions of PowerPoint and Windows NT with
	regard to collating using a PostScript driver, where Yes means that the print
	job collated and No means the print job did not collate:
	
	                     PPT 4.0   PPT 95   PPT 97   PPT 97 SR-1
	                     -------   ------   ------   -----------
	  Windows NT 4.0       Yes       Yes      No        Yes
	  Windows NT 3.51      Yes       No       No        No
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods:
	
	Method 1
	--------
	
	If possible, use a non-PostScript printer driver when printing multiple copies.
	
	Method 2
	--------
	
	Print one copy at a time.
	
	Method 3
	--------
	
	If you are running Windows NT version 4.0, upgrade to PowerPoint 97 for Windows
	Service Release 1.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 and 4.0.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The problem affects all types of printouts: slides, notes, handouts, and
	outlines.
	
	This behavior does not occur in the other Office 95 applications, such as
	Microsoft Word or Microsoft Excel, running under Windows NT. Printing PostScript
	in PowerPoint running under Windows 95 also collates as expected.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbOSWinSearch kbPowerPtSearch kbOSWinNT350 kbOSWinNT400 kbOSWinNT351 kbPowerPt95 kbPowerPt97 kbZNotKeyword2 kbPowerPt97Search kbPowerPt95Search kbPowerPt95a kbPowerPt95b kbOSWinNTSearch
	Version           : MS-DOS:1.0; WINDOWS:7.0,7.0a,7.0b,97; winnt:3.5,3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
