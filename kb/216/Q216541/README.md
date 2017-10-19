---
layout: page
title: "Q216541: XFOR: Modifying QROOT Parameter Requires UNC Path"
permalink: /kb/216/Q216541/
---

## Q216541: XFOR: Modifying QROOT Parameter Requires UNC Path

	Article: Q216541
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Depending on special circumstances, you may need to modify the default location
	of the qroot parameter in the Linkage\Exchconn.ini file. If you use a drive
	mapping (for example, QROOT=Z:\Exchconn), and then proceed to log off, the
	following error messages will occur in the event logs.
	
	  1997/09/20 05:14:10- LME-PROFS-DIAMEX(00df) 1 04067:{The filename was
	  invalid}: Unable to open QCR file z:\exchconn\q\vm2mex.in\00000000.qcr in
	  queue vm2mex.in
	
	  >> qm(7883)
	  1997/09/20 05:14:10- LME-PROFS-DIAMEX(00df) 1 04076:{The filename was
	  invalid}: Unable to query current state of queue vm2mex.in
	
	  >> qm(8707)
	  1997/09/20 05:14:10- LME-PROFS-DIAMEX(00df) 1 04028:{The filename was
	  invalid}: Unable to get next queue item from queue vm2mex.in - could not
	  access QCR
	
	  >> qm(3193)
	  1997/09/20 05:14:10- LME-PROFS-DIAMEX(00df) 1 56106:{I/O error has occurred}:
	  Could not read next queue item from vm2mex.in
	
	  >> dia2mex(1573)
	
	CAUSE
	=====
	
	The Microsoft Exchange Connectivity services are incorrectly using localized
	information.
	
	WORKAROUND
	==========
	
	Rather than using a drive mapping, specify a full Uniform Naming Convention
	(UNC) path to the actual location of the Qroot directory (for example,
	QROOT=\\<server_name>\Exchconn).
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
