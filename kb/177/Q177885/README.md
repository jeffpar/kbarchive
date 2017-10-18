---
layout: page
title: "Q177885: XADM: ISINTEG -FIX With -PUB or -PRI No Longer Works in 5.5"
permalink: kb/177/Q177885/
---

## Q177885: XADM: ISINTEG -FIX With -PUB or -PRI No Longer Works in 5.5

	Article: Q177885
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run the Microsoft Exchange Server 5.5 ISINTEG -FIX with
	either the -PUB or -PRI option, the utility displays the command help syntax.
	
	CAUSE
	=====
	
	The version of ISINTEG that ships with Exchange Server 5.5 requires the user to
	define the specific test(s) that need to be run.
	
	WORKAROUND
	==========
	
	To execute an equivalent command to ISINTEG -FIX -PRI, enter the following
	syntax:
	
	ISINTEG -FIX -PRI -TEST ALLTESTS
	
	When you execute this command, ISINTEG will verify that this is the correct
	operation. Type 'y' and press Enter to continue.
	
	For more information on ISINTEG and the different tests available, please refer
	to the Isinteg.Rtf document located on the Microsoft Exchange Server 5.5 compact
	disc in the \\<CD Root>\Server\Support\Utils\ directory.
	
	Additional query words: Integrity tools
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	
