---
layout: page
title: "Q85607: FAX: Errors Spooling to Printer"
permalink: /kb/085/Q85607/
---

## Q85607: FAX: Errors Spooling to Printer

{% raw %}

	Article: Q85607
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to Fax, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Before the Microsoft Mail Gateway to Fax can spool incoming fax items to the
	printer, the DISPLAY.EXE program must be run from the same directory from which
	the fax gateway will be run.
	
	Use DISPLAY.EXE to create a printer driver for the fax gateway. Until a printer
	driver is created, the fax gateway cannot spool items to the printer.
	
	If the DISPLAY.EXE program is run from another directory, copy the files
	DISPLAY.CFG and SNAPSHOT.DRV to the directory where the FAXGTW.EXE program will
	be run.
	
	REFERENCES
	==========
	
	"Microsoft Mail Gateway to Fax Administrator's Guide"
	
	
	Additional query words: 3.00 pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateFax300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
