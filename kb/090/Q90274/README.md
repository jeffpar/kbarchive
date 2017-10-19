---
layout: page
title: "Q90274: Managing Network Printers in Print Manager and Control Panel"
permalink: /kb/090/Q90274/
---

## Q90274: Managing Network Printers in Print Manager and Control Panel

	Article: Q90274
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can manipulate network printers from either Control Panel or Print Manager.
	However, the capabilities provided from these applications differ greatly. You
	can perform only some network printer operations from Control Panel, whereas you
	can perform all possible operations from Print Manager.
	
	MORE INFORMATION
	================
	
	In Control Panel, the network driver provides only the minimal support needed
	for making a new network connection when setting up a printer for the first
	time. This is for backward compatibility with Microsoft Windows version 3.1 and
	for use when running Windows for Workgroups Setup. (Note you might not make
	network connections during Windows for Workgroups Setup because the network
	driver is not loaded during installation.)
	
	Print Manager provides full functionality for printer configuration, including
	connecting to and disconnecting from network printers and managing documents in
	network print queues.
	
	Some rules apply to the managing of network print queues:
	
	- On a locally connected printer, regardless of the shared status, any print
	  job can be deleted. Print jobs sent across the network can only be paused.
	
	- On a locally connected printer, the topmost (currently printing) job cannot
	  be moved. All locally submitted print jobs must remain above all network jobs
	  in the queue. Therefore, the topmost network job cannot be moved up, and the
	  bottommost local job cannot be moved down. At least three local jobs or at
	  least two remote jobs must be in a queue before you can reposition any print
	  job. (Note: Queue management menu items and buttons are not always dimmed
	  when the options fail because of these rules.)
	
	- On a network (shared) printer, you can only pause and delete your own print
	  jobs, and then only before they start printing. You can only move your print
	  job down in the queue, and only before it starts printing.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	
	=============================================================================
	
