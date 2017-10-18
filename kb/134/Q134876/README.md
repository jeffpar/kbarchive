---
layout: page
title: "Q134876: PPT7: PowerPoint Hangs After Canceling &quot;Print To File&quot;"
permalink: kb/134/Q134876/
---

## Q134876: PPT7: PowerPoint Hangs After Canceling &quot;Print To File&quot;

	Article: Q134876
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbenv kbprint kbPrintingkbbuglist
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are printing a PowerPoint for Windows 95 presentation to a printer whose
	port is set to FILE and you cancel the print job, PowerPoint hangs (stops
	responding), even after you try to cancel the File dialog box that asks you for
	a filename.
	
	CAUSE
	=====
	
	This problem occurs if background printing is turned on and you have not
	selected the Print To File check box in the Print dialog box.
	
	RESOLUTION
	==========
	
	You can prevent this problem by turning off background printing:
	
	1. In PowerPoint, click Options on the Tools menu.
	
	2. Click the General tab. Clear the Print In Background check box.
	
	If you don't want to disable background printing, be sure to select the Print To
	File check box in the Print dialog box, even if the printer driver is already
	set up to print to a port called FILE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in PowerPoint version 7.0 for
	Windows 95. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 7.00 ppt95 hang hung crash crashed locks locked frozen freezes crashing quit quits stopped crashes bomb stop responding hp postscript slides
	
	======================================================================
	Keywords          : kbenv kbprint kbPrinting kbbuglist
	Technology        : kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
