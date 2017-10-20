---
layout: page
title: "Q122516: Purge Print Jobs Fails to Clear Printer Buffer"
permalink: /kb/122/Q122516/
---

## Q122516: Purge Print Jobs Fails to Clear Printer Buffer

{% raw %}

	Article: Q122516
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows 95 allows you to remove all print jobs from a printer by double-
	clicking your printer and then clicking the Purge Print Jobs command on the
	Printer menu. However, if a document containing graphics is currently printing
	when you click the Purge Print Jobs command, a portion of the purged document
	prints on the first page of the next print job. The second, and subsequent pages
	print correctly. On some printers, it is possible to clear the graphics by
	forcing a page feed. In most cases though, you must reprint the first page of
	the document to get the correct output.
	
	MORE INFORMATION
	================
	
	Some printers send raster data or graphic images using a command that indicates
	how many bytes of raster data will be sent followed by the actual image in
	bytes. For example, sending X bytes of raster data, followed by the X bytes.
	
	When a print job is purged, the spooler stops sending data and makes a request
	for the printer driver to send a reset command to the printer.
	
	If the data stream is in the middle of transferring raster data, the reset
	command can be interpreted as more raster data in which case the printer will
	continue printing the image. If the data stream is not in the middle of
	transferring raster data, the printer will stop printing where the reset command
	was issued.
	
	
	Additional query words: pscript
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
