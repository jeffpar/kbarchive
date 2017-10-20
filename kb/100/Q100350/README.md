---
layout: page
title: "Q100350: Common Reasons Why Mac Print Service Won't Start"
permalink: /kb/100/Q100350/
---

## Q100350: Common Reasons Why Mac Print Service Won't Start

{% raw %}

	Article: Q100350
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	With LAN Manager Services for Macintosh, Macintosh and PC users can send print
	jobs to PostScript printers attached to a LAN Manager server, as well as to
	printers on the AppleTalk network.
	
	This provides LAN Manager printer queues that spool to Macintosh users with
	AppleTalk printers, but when trying to start the MacPrint service on LAN
	Manager, users might get:
	
	  NET3055 error: A problem exists with system configuration
	
	More Information
	
	In order to make Mac Print work properly, there are several things that you have
	to be careful about.
	
	1. You have to specify a queue in either the MacQueues section of the LANMAN.INI
	  or on the AppleTalkPrinters section of the same file.
	
	  The MacQueues section contains the list of LAN Manager PostScript queues that
	  you will like to make available to Macintosh users. The syntax of an entry in
	  this section will look like the following:
	
	  <queuename> = "Name that will appear on user's chooser" i.e. PSCRIPT1 =
	  "LaserWriter II NTX on LAN Manager server's COM1"
	
	  The AppleTalkPrinters section contains the list of printers on the AppleTalk
	  network which can be accessed using the LAN Manager server that is running
	  MacPrint. The syntax of an entry in this section will look like the
	  following:
	
	  <OS/2 Print Destination> = "Name of the printer as it appears on the
	  AppleTalk Network", [zone name], [Capture | NoCapture] i.e. PSCRIPT1 =
	  "LaserWriter II NTX"
	  ** A Print Destination is different from a Print Queue, however they will have
	  the SAME name, if the printers on the server were defined with the OS/2 Print
	  Manager.
	
	  *If there is no queue specified in either both sections, you will see "No
	  configuration found for MacQueues" on your error log.
	
	  *If there are two identical Print Destinations entries in the
	  AppleTalkPrinters section, you will see "Duplicate <printdestination>
	  entries in [AppleTalkPrinters] section of LANMAN.INI
	
	2. The printer driver of the specified queue has to be PostScript. MacPrint
	  services is designed to print only to PostScript printers.
	
	  Most of the models of the Apple LaserWriter are supported and have been tested
	  by Microsoft. The QMS PS-810 and NEC LC-890 have also been tested by
	  Microsoft. For more information on untested printers please refer to your LAN
	  Manager Services for Macintosh administrator's guide.
	
	  *If a driver for any printer specified in the MacQueues section is not a
	  PostScript driver, you will see "The printer driver for queue
	  <queuename> is not PostScript.
	
	3. The queue specified, has to be defined in OS/2 (It does not necessarily need
	  to be shared by LAN Manager!!!).
	
	  *If a queue is not defined in the OS/2 print manager, you will get either:
	  "Queue <queuename> does not exist" or "Print Destination
	  <printdestinationame> does not exist", depending if that entry is in
	  the MacQueues section or in the AppleTalkPrinters section.
	
	
	Additional query words: sfm
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
