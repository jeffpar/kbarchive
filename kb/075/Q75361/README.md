---
layout: page
title: "Q75361: Using Search Master CD-ROM Software with MS DOS 5.0"
permalink: /kb/075/Q75361/
---

## Q75361: Using Search Master CD-ROM Software with MS DOS 5.0

{% raw %}

	Article: Q75361
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	According to Matthew Bender's technical support, several customers have reported
	the following error when using Matthew Bender's Search Master software with
	MS-DOS version 5.0:
	
	  CDR 103 Error: Not of High Sierra Format or ISO 9960 Format
	
	The error is caused by using outdated versions of the Microsoft CD-ROM
	extensions. Matthew Bender recommends using version 2.2, the most current
	version of the CD-ROM extensions, to eliminate the error.
	
	MORE INFORMATION
	================
	
	Based on licensing agreements with OEMs (original equipment manufacturers), the
	Microsoft CD-ROM extensions are not available directly from Microsoft. Instead,
	they are distributed to OEMs and bundled with their CD-ROM drive packages.
	Customers must contact their drive manufacturers to obtain the current
	MSCDEX.EXE.
	
	
	Version 2.03 is the most commonly found release, and version 2.10 is expected
	within the next couple months. Search Master provides the ability to search an
	entire compact disk for specific words. It is usually invoked via the file
	MBSEARCH.BAT, which in turn executes MB.EXE. Before Search Master can work
	correctly, both the CD-ROM driver and the extensions should be current and
	working correctly.
	
	For additional information, contact Matthew Bender Technical Support.
	
	The product discussed here in manufactured by Matthew Bender, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	
	Additional query words: dos 5.0 3rdparty cd rom ext cdrom
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

{% endraw %}
