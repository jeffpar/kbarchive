---
layout: page
title: "Q225005: Streets and Trips 2000: Error When You Print to Canon Printer"
permalink: /kb/225/Q225005/
---

## Q225005: Streets and Trips 2000: Error When You Print to Canon Printer

{% raw %}

	Article: Q225005
	Product(s): Microsoft Automap
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbprint kbimu
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Expedia Streets and Trips 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to print from Microsoft Expedia Streets and Trips 2000 to a
	Canon BJC-240, BJC-610, BJC-620, BJC-2000, or BJC-4550 printer, you may receive
	the following error message:
	
	  Runtime Error: Abnormal Program Termination
	
	When you click Details, you receive the following error message:
	
	  Autmap71.exe caused an invalid page fault in module Mfc42.dll.
	
	CAUSE
	=====
	
	This behavior can occur if a Windows Printing System (WPS) compliant printer
	driver for the Canon BJC-240, BJC-610, BJC-620, BJC-2000, or BJC-4550 printer is
	installed on your computer.
	
	NOTE: This behavior has also been reported with the Canon C2500 Multipass printer
	driver.
	
	RESOLUTION
	==========
	
	To resolve this issue, configure your printer driver to use raster printing, or
	install a printer driver that supports raster printing.
	
	To do this, use the appropriate method for your printer.
	
	BJC-240 Printer
	---------------
	
	Contact Canon to obtain version 3.96 or later of the printer driver for your
	Canon BJC-240 printer. This version of the printer driver includes raster
	printing support.
	
	BJC-610 and BJC-620 Printers
	----------------------------
	
	Contact Canon to obtain the raster printer driver for the BJC-610 and BJC-620
	printers. Install this printer driver and use it when you print from Expedia
	Streets and Trips 2000.
	
	BJC-2000 Printer
	----------------
	
	Contact Canon to obtain version 6.31 or later of the printer driver for your
	Canon BJC-2000 printer. This version of the printer driver includes raster
	printing support.
	
	BJC-4550 Printer
	----------------
	
	Contact Canon to inquire if a raster printer driver is available for the BJC-4500
	series printers.
	
	If a raster printer driver is not available, install either the Epson LQ-2550 or
	the IBM Proprinter X24e printer driver and use this printer driver when you
	print from Expedia Streets and Trips 2000.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: multi multi-media media mm est2000 auto-map amap
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbprint kbimu 
	Technology        : kbHomeProdSearch kbExpediaSearch kbExpediaStreets2000
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
