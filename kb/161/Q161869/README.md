---
layout: page
title: "Q161869: XCLN: Exchange 16-Bit Forms Performance"
permalink: /kb/161/Q161869/
---

## Q161869: XCLN: Exchange 16-Bit Forms Performance

{% raw %}

	Article: Q161869
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The performance problems of Microsoft Exchange 16-bit forms are not due to
	client/server performance. They are due to loading large Visual Basic runtime
	files off a disk, large forms executable files (200+ KB), and working set issues
	for computers with less memory. This article gives some suggestions on how you
	can increase form performance.
	
	MORE INFORMATION
	================
	
	Forms must be downloaded locally from their respective source before they can be
	run at all. This takes some time that you can note from the progress bar
	indicating the forms installation. However, once the form is installed and
	resides locally, the length of time for subsequent loadings of the form may be
	increased.
	
	On Windows NT Workstation 3.51, use the System Control Panel to set foreground
	tasks=background tasks. For Windows NT Workstation 4.0, use the Application
	Performance box on the Performance tab. If 16-bit applications are not generally
	run, adding the Windows subsystem (Wowexec.exe) to the Startup group may offer
	some performance benefits when loading the first form after starting the
	computer.
	
	For all platforms, you can increase the 2 MB default size of the Forms cache.
	Depending on the size of the most recently used forms, doubling or tripling the
	size of the cache generally gives improved form load performance for the five
	most-used forms. You can do this from the Microsoft Exchange client by clicking
	Options on the Tools menu, clicking the Exchange Server tab, and changing the
	Maximum Space on Hard Disk option.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	

{% endraw %}
