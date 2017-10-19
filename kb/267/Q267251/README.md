---
layout: page
title: "Q267251: COMTI Test Console Fails When You Use an Array of UDTs"
permalink: /kb/267/Q267251/
---

## Q267251: COMTI Test Console Fails When You Use an Array of UDTs

	Article: Q267251
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2,4.0 SP3; :
	Operating System(s): 
	Keyword(s): kbsna400sp2 kbsna400sp3
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0 SP2, 4.0 SP3 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SNA Server and Host Integration Server 2000 both support using a Diagnostic
	Capture Remote Environment with the COM Transaction Integrator (COMTI) Test
	Console to allow a user to interactively test a COMTI component. When the COMTI
	component calls into the Remote Environment, the Test Console is started and a
	user can dynamically update data values, and then return those values back to
	the calling component.
	
	When a COMTI component that contains an array of user-defined types (UDTs) is
	used in this situation, the Test Console properly recognizes the array of UDTs
	and allows the user to update the data values contained in the array. However,
	the following error message occurs when you attempt to return the data values
	from the Test Console to the calling component:
	
	  0x800706BE
	  Automation Error - The remote procedure call failed.
	
	This error message occurs when you click OK on the Terminate menu in the Test
	Console.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	SP2 and SP3, and Microsoft Host Integration Server 2000.
	
	Additional query words: 0x800706BE
	
	======================================================================
	Keywords          : kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:4.0 SP2,4.0 SP3; :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
