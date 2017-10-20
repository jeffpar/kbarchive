---
layout: page
title: "Q86762: HP IIIsi with Script Server Won't Print in PostScript Mode"
permalink: /kb/086/Q86762/
---

## Q86762: HP IIIsi with Script Server Won't Print in PostScript Mode

{% raw %}

	Article: Q86762
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a document is printed from Microsoft Windows 3.1 using the Hewlett- Packard
	(HP) LaserJet IIIsi printer driver in PostScript mode on a network system with
	Gray Matter Software's Script Server software, the printer prints PostScript
	code instead of text or graphics.
	
	CAUSE
	=====
	
	Script Server is network printer-queuing software that supports all PostScript 1
	and PostScript 2 printers and languages. When a file is sent to the printer
	through the network, Script Server intercepts the file and determines whether it
	is a PostScript file based on its header line. If Script Server identifies the
	file as a PostScript file, Script Server queues it and sends it to the printer.
	If Script Server identifies the file as a non-PostScript file, Script Server
	wraps the file in PostScript code and then queues it.
	
	The Windows 3.1 HP LaserJet IIIsi driver has two driver modes, PostScript and
	native (PCL). When a user selects the PostScript driver mode, the HP LaserJet
	IIIsi driver adds a header line to the file that tells the printer which mode to
	print the file in. In this case, since the PostScript identifier is no longer in
	the (first) header line, Script Server does not recognize the file as a
	PostScript file, and wraps it in PostScript code before sending it to the
	printer. The result is a printout of PostScript code.
	
	WORKAROUND
	==========
	
	Select the HP LaserJet IIID driver instead of the HP LaserJet IIIsi. The HP
	LaserJet IIID driver does not insert an additional header line; therefore,
	Script Server can correctly identify PostScript files. The HP LaserJet IIID does
	not provide output bin selection, as the HP LaserJet IIIsi does, but other than
	that, the drivers are functionally identical.
	
	
	Additional query words: w4wprint post script output HPIIIsi HPIIID Hewlett packard hewlett-packard graymatter HP 3.11 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
