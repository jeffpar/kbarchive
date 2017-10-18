---
layout: page
title: "Q86553: MHS: How the Gateway Communicates with the MHS World"
permalink: kb/086/Q86553/
---

## Q86553: MHS: How the Gateway Communicates with the MHS World

	Article: Q86553
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to MHS, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail gateway operations for communication with the MHS world is
	carried out specifically by two files: INPOST.EXE and OUTPOST.EXE.
	
	INPOST.EXE transfers files from a Microsoft Mail format to an MHS message format
	for delivery through MHS.
	
	OUTPOST.EXE delivers MHS mail to Microsoft Mail. This version preserves the MHS
	header unless encapsulation is being used. It then discards the MHS header and
	delivers the message as if it had been sent locally.
	
	
	Additional query words: pcmail 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateMHS300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
