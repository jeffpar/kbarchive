---
layout: page
title: "Q107718: Net Print Disassociates Printer Driver from Queue"
permalink: kb/107/Q107718/
---

## Q107718: Net Print Disassociates Printer Driver from Queue

	Article: Q107718
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-FEB-2002
	
	SYMPTOMS
	========
	
	Issuing the NET PRINT xxxx /ROUTE:yyyy command disassociates the printer driver
	name from the queue. Later attempts to remote print to the queue return error
	71. Generally, printers become disassociated from the queue when manipulated
	with the NET PRINT command or from within NET ADMIN
	(View/SharedResources/Printers/Edit).
	
	
	CAUSE
	=====
	
	A LAN Manager design limitation causes this.
	
	WORKAROUND
	==========
	
	Use Print Manager. This sort of administrative tasks cannot be done over the
	network using command line interfaces and batch jobs.
	
	STEPS TO DUPLICATE CONDITION
	----------------------------
	
	1. Create a printer, NullPtr, using IBMNULL driver directed to COM1.
	
	2. Create a queue, NullQ, using NullPtr and the IBMNULL driver.
	
	3. Share NULLQ.
	
	  NET SHARE NULLQ /PRINT
	
	4. Use NULLQ.
	
	  NET USE LPT3 \\xxxx\NULLQ
	
	5. Change the routing. (Simply issue the command; no change is necessary.)
	
	  NET PRINT NULLQ /ROUTE:COM1 (same as before)
	
	6. Copy CONFIG.SYS to LPT3.
	
	  COPY CONFIG.SYS LPT3
	
	This results in a SYS00071 error.
	
	NOTE: This applies to all ports and drivers specified.
	
	Additional query words: 2.2, 2.1, 2.0c
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
