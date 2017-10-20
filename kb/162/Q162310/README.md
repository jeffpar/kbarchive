---
layout: page
title: "Q162310: All Pages Printed in Grayscale to HP DeskJet 600"
permalink: /kb/162/Q162310/
---

## Q162310: All Pages Printed in Grayscale to HP DeskJet 600

{% raw %}

	Article: Q162310
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbprint win95
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print a document containing color text or images to a Hewlett- Packard
	(HP) DeskJet 600 printer using version 7.0 of the printer driver, the entire
	document may be printed in grayscale.
	
	The printer driver may display a message prompting you to install the black
	cartridge in the printer.
	
	CAUSE
	=====
	
	This behavior can occur if the first page of the document does not contain any
	color text or images.
	
	The ColorSmart feature of the printer driver analyzes only the first page of the
	document. If the first page contains no color, the driver assumes that the
	entire document should be printed in grayscale. Neither the manual nor automatic
	settings in the printer driver have any effect on this behavior.
	
	RESOLUTION
	==========
	
	Insert color text or a color image on the first page of the document, or print
	the document as two separate jobs, starting the second job on the first page
	with color.
	
	
	MORE INFORMATION
	================
	
	For additional information about problems printing to a HP DeskJet 600 printer,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q135366 Garbled Output from HP DeskJet Printer Connected to ECP Port
	
	Additional query words: dj600 dj600c 600c monochrome publisher works office
	
	======================================================================
	Keywords          : kbprint win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
