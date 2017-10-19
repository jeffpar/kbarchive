---
layout: page
title: "Q245235: XADM: Running Performance Optimizer Resets Registry Values"
permalink: /kb/245/Q245235/
---

## Q245235: XADM: Running Performance Optimizer Resets Registry Values

	Article: Q245235
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 26-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you run the Exchange Server Performance Optimizer, any customized or modified
	Exchange Server registry values may be overwritten and reset to the default
	values, based on the information that you enter when you run Performance
	Optimizer.
	
	MORE INFORMATION
	================
	
	This behavior is by design. When you run the Exchange Server Performance
	Optimizer, the graphical user interface (GUI) prompts you with a series of
	questions. These include questions about how many users reside on the server,
	what role the server has, and how many users are in the organization.
	
	The Performance Optimizer performs the following two important procedures:
	
	- It analyzes and recommends optimal hard disk drive placement for the Exchange
	  Server data directories.
	
	- It analyzes and implements memory and other system resource usage settings in
	  the registry.
	
	IMPORTANT: The Exchange Server Performance Optimizer evaluates the computer
	hardware and is intended to optimize the use of the hard disk and memory. It
	does not optimize, nor was it intended to improve, network performance. It does
	not fine tune registry keys that may offer enhanced network performance in a
	particular environment.
	
	It is important to keep a change log that records any registry changes that you
	make in your unique location. Microsoft also recommends that you save the
	registry keys and hives in a safe location, in case someone inadvertently makes
	changes that degrade performance.
	
	For more information about how to run the Exchange Server Performance Optimizer,
	please see the Understanding the MS Exchange Server Performance Optimizer
	document at the Microsoft TechNet Web site:
	
	  http://www.microsoft.com/technet/exchange/technote/perfopt.asp
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
