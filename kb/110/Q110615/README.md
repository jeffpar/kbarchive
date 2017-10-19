---
layout: page
title: "Q110615: PROFS: Bottleneck in MS-CSM Causes Multiple Requests"
permalink: /kb/110/Q110615/
---

## Q110615: PROFS: Bottleneck in MS-CSM Causes Multiple Requests

	Article: Q110615
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MS-CSM(Calendar Service Machine) goes into a looping, sends warning
	messages, and sends a re-send request to the LAN for each out-of-sequence
	free/busy distribution it receives from SCHDIST.EXE (from Microsoft Schedule+
	for Windows).
	
	The MS-CSM machine spends time and resources processing these requests, and this
	has been known to cause the MS-CSM machine to go into a loop, depleting about
	80% of the VM system resources.
	
	The expected behavior would be for the MS-CSM machine to generate only one
	re-send for the out of sequence distribution.
	
	CAUSE
	=====
	
	MS-CSM cannot wait while a free/busy distribution is being processed by the
	MS-CAL machine. Thus, if the next item in the MS-CSM machine's reader is a
	distribution update, a warning message is generated. The previous message is
	still being processed, which has delayed the MS-CSM machine from updating the
	SCHDPLUS CONTROL file with the CONFIRMED flag.
	
	RESOLUTION
	==========
	
	Halt the MS-CSM machine and purge all but one of the distributions, causing the
	MS-CSM machine to generate only one re-send request.
	
	
	Additional query words: 3.40
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS340
	Version           : :3.4
	
	=============================================================================
	
