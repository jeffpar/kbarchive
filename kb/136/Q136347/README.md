---
layout: page
title: "Q136347: PPT7: &quot;Not Enough Printer Memory...&quot; Error Trying to Print File"
permalink: /kb/136/Q136347/
---

## Q136347: PPT7: &quot;Not Enough Printer Memory...&quot; Error Trying to Print File

{% raw %}

	Article: Q136347
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbprint kbdta kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	For a Microsoft PowerPoint 2002 version of this article, see Q291899.
	
	For a Microsoft PowerPoint 2000 version of this article, see Q212393.
	
	For a Microsoft PowerPoint 97 version of this article, see Q189640.
	
	SYMPTOMS
	========
	
	In PowerPoint for Windows 95, version 7.0, when you print a presentation, you
	may receive the following error message:
	
	  Not enough printer memory available to print page.
	
	You may encounter this error message when you print from either the stand-alone
	version of PowerPoint 97 or from Office Binder.
	
	CAUSE
	=====
	
	This problem can occur because the memory setting on the Windows 95 printer
	driver is too low. The default memory setting for some printer drivers is the
	lowest possible setting; this setting may be insufficient for your print job.
	
	RESOLUTION
	==========
	
	To fix this problem, reset the memory setting on the printer driver to reflect
	the exact amount of memory installed on the printer in question.
	
	To change the printer driver memory setting, follow these steps:
	
	1. Click Start, point to Settings, and then click Printers.
	
	2. Right-click the appropriate printer icon and then click Properties on the
	  menu that appears.
	
	3. Click the Device Options tab.
	
	4. In the Printer Memory list, click the correct setting and then click OK.
	
	REFERENCES
	==========
	
	For information about how to verify the amount of memory installed on your
	printer, see your printer manufacturer's user guide. For information about
	memory in HP LaserJet printers, see the following article in the Microsoft
	Knowledge Base:
	
	  Q130662 PUB: Determining Memory in HP LaserJet Series Printers
	
	For additional information about troubleshooting printing problems in Windows,
	click Help on the Windows Start menu, click the Index tab, type the following
	text
	
	  "print troubleshooting" (without the quotation marks)
	
	and then double-click the selected text to go to the "Print Troubleshooter"
	topic.
	
	Additional query words: 7.00 97 8.00 ppt97 print
	
	======================================================================
	Keywords          : kbenv kberrmsg kbprint kbdta kbPrinting 
	Technology        : kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
