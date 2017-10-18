---
layout: page
title: "Q131612: HyperTerminal Err Msg: The TAPI Configuration Has Changed..."
permalink: kb/131/Q131612/
---

## Q131612: HyperTerminal Err Msg: The TAPI Configuration Has Changed...

	Article: Q131612
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start a HyperTerminal connection, you receive the following error
	message:
	
	  The TAPI configuration has changed and the modem/port selected for this
	  session is no longer valid.
	
	CAUSE
	=====
	
	When you create a connectoid in HyperTerminal, it is associated with a
	particular modem on a particular port. If, after you create the connectoid, the
	modem is removed, you receive the error message stated above when you try to use
	the connection. This error message indicates that the modem associated with the
	connectoid has been removed, and that the system has identified a likely
	alternative.
	
	RESOLUTION
	==========
	
	Click OK to acknowledge the error message. There should be no effect on the
	connection if the connection is associated with a valid modem.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
