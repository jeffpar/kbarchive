---
layout: page
title: "Q175387: XFOR: LinkAge Directory Exchange Agent or Directory Exchange Man"
permalink: /kb/175/Q175387/
---

## Q175387: XFOR: LinkAge Directory Exchange Agent or Directory Exchange Man

{% raw %}

	Article: Q175387
	Product(s): Microsoft Exchange
	Version(s): 4.0 SP5,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0 SP5, 5.5 
	- Microsoft Exchange, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempts to propagate updates results in the Directory Exchange Agent (DXA) or
	Directory Exchange Manager (DXM) consistently timing out. This is indicated by
	the following error messages in the log: "Agent has timed out," "Permanent error
	has occurred," or "Agent or manager will disable sending or receiving now."
	Another symptom is, in Process Manager, the current activity of the DXM or the
	DXA process is "Processing updates" or "Generating updates for an abnormal
	amount of time.
	
	CAUSE
	=====
	
	The DXM or DXA cannot process the Message Information File (MIF) or update
	request. Causes are usually a malformed or corrupted .rdy file, MIF, or MIF
	Partition Block (.mpb) file (see the More Information section). If the files are
	indeed corrupted and the process can determine this, the file will be moved to
	the badmif queue. If the file cannot be processed and cannot be moved, it will
	become stuck in the queue. If the file becomes stuck in the queue, additional
	update requests can be initiated, however, they will not be processed because
	the agent or manager will continually try to process the first file.
	
	WORKAROUND
	==========
	
	Delete and/or rename the problem files. These files are resident in the
	file-based queues in the Linkage\Q\Dxanotes.in, Dxm.in, Router.in, or Dxamex.in
	queue.
	
	MORE INFORMATION
	================
	
	The following is excerpted from the LinkAge self-study guide.
	
	LinkAge Directory Exchange (LDE) Queues
	---------------------------------------
	
	Directory synchronization between Notes and Exchange uses four file-based queues,
	Router.in, DXM.in, DXANOTES.in and DXAMEX.in.
	
	All communications between the DXM and the DXAs are first placed in Router.in as
	.RDY files. Router.in places the .RDY file in the appropriate DXA queue (e.g.
	DXANOTES.in, DXAMEX.in, and DXM.in).
	
	For example, when the DXM requests an incremental update from the Notes DXA, the
	request is formulated by the DXM into .RDY file; a process then places this file
	into Router.in. The Router.in process is activated by work items (.RDY files) in
	its queue. These items are placed into the appropriate queue - in this case
	DXANOTES.in. Each DXA periodically monitors its queue and in the event that a
	work item arrives in the queue, the DXA processes the request (in this case, for
	an incremental update). Next, the DXA queries its native mail system, gathers
	any updates and/or deletions, creates another .RDY file, as well as a .MIF file,
	which contains the actual directory updates. The .RDY file is forwarded to
	Router.in; Router.in forwards it to DXM.in. The .MIF file is forwarded into the
	LinkAge\q\archive directory.
	
	The .RDY file that is sent back to the DXM is a work order file, which informs
	the DXM that DXANOTES has completed the request. The .RDY file also contains
	pointers to the actual information (directory updates) contained within .MIF
	files. Each .MIF file can hold up 9999 entries. Therefore, in a dirsync cycle
	with 25,000 updates, there will be 3 .MIF files. (The number of entries a .MIF
	can hold can be changed by updating a parameter in the LINKAGE.INI file. See the
	LINKAGE.INI file online help for more information.)
	
	Once processing of the transactions has begun, the .RDY file becomes a MIF
	Partition Block (.MPB) file. .MPB files are used to organize and track the .MIF
	files in a given set of directory updates while processing is taking place.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange500 kbExchange550 kbExchangeClientSearch kbZNotKeyword2 kbExchange400SP5
	Version           : :4.0 SP5,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
