---
layout: page
title: "Q128443: MHS: Mail Stops Moving Between Microsoft Mail and MHS"
permalink: kb/128/Q128443/
---

## Q128443: MHS: Mail Stops Moving Between Microsoft Mail and MHS

	Article: Q128443
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to MHS, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Lotus cc:Mail gateway, mail stops moving between Microsoft
	Mail and MHS.
	
	CAUSE
	=====
	
	The MHS Directory Manager cycles and checks the cc:Mail gateway first, and runs
	INPOST.EXE. Because INPOST.EXE is a Microsoft utility, it reads the waiting
	messages from the MHS gateway queue. These messages are queued in the
	MHS\MAIL\GATES\<cc:Mail>\IN directory. The cc:Mail gateway supports SMF
	64. INPOST.EXE puts messages into SMF 70. After running INPOST.EXE, the MHS
	Directory Manager can not read the messages because they are in the wrong place
	and in the wrong format for cc:Mail.
	
	RESOLUTION
	==========
	
	To correct this problem, copy INPOST.EXE and OUTPOST.EXE (included with the
	Microsoft Mail gateway) to the MHS\MAIL\GATES\<cc:Mail>\PUBLIC directory.
	
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateMHS300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
