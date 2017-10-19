---
layout: page
title: "Q62362: Printing from a Network Aware/Unaware MS-DOS Application"
permalink: /kb/062/Q62362/
---

## Q62362: Printing from a Network Aware/Unaware MS-DOS Application

	Article: Q62362
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	NETWORK AWARENESS
	
	Applications use different methods to print to a network printer, and some are
	more "network aware" than others. Many MS-DOS applications are "network
	unaware," in that they operate as if printing directly to the output port and,
	therefore, do not follow up the print job with an end-of-job marker. The network
	spooler, however, needs this end-of-job marker in order to determine when to
	quit receiving data for an incoming print job and send the spooled file to the
	print device.
	
	Therefore, if an MS-DOS application sends a data stream to the printer port
	(which is redirected to the network spooler) without an end-of-job marker, the
	data is held in the server print queue with the spooling status "unfinished job"
	and is never sent to the printer.
	
	METHODS OF MARKING END-OF-JOB
	
	A properly implemented network-aware application provides some way during
	software installation to designate a printer as a network printer (as opposed to
	a local printer) and to follow print data sent to it with an end-of-job marker.
	Many applications also allow you to specify whether to send a form feed after
	the print job (for laser printers and other "page printing" devices).
	
	WordPerfect is an example of a network aware application. When you are installing
	a printer, WordPerfect prompts you to identify it as a network printer. This
	prompt defaults to NO, but if you select YES WordPerfect allows you to suppress
	the linefeed after the job has finished printing. If the printer is installed
	properly in WordPerfect as a network printer, jobs should print correctly.
	
	Note: The "Job Size" value reported on the NET ADMIN NIF screen will show "0"
	(zero) until the end-of-job marker is received. It then changes to reflect the
	actual size of the job.
	
	For non-network aware applications, MS-DOS LAN Manager provides a 4K TSR
	(terminate-and-stay-resident) utility named PRTSC.EXE (in the \NETPROG
	subdirectory) that you can load in the AUTOEXEC.BAT file at boot time. When an
	application indicates that it has finished sending a job to the printer, you
	press CTRL+ALT+PRINT SCREEN, and PRTSC sends the end-of-job marker to the print
	spooler.
	
	Another solution is make a CHARTIME entry in the LANMAN.INI file. (This is
	available only with LAN Manager 2.1, 2.1a, and 2.2 Enhanced MS-DOS workstation).
	Adjust the CHARTIME value until the print job can be spooled and printed on the
	server correctly and you no longer need to enter the CTRL+ALT+PRINT SCREEN
	keystroke sequence every time you print from an application. Please check the
	LAN Manager "Administrator's Guide" for more information on this entry.
	
	Additional query words: 2.00 2.0 2.10 2.1 2.10a 2.1a 2.20 2.2 print
	
	======================================================================
	Keywords          : kbnetwork 
	
	=============================================================================
	
