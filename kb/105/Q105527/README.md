---
layout: page
title: "Q105527: X400: Bodypart Types Supported by Mail for PC Networks"
permalink: kb/105/Q105527/
---

## Q105527: X400: Bodypart Types Supported by Mail for PC Networks

	Article: Q105527
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0,3.2; WINDOWS:2.1,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, versions 2.1, 3.0, 3.2 
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The BODYPART.CFG file of Microsoft Mail Gateway to X.400 can be used to control
	the encoding of attachments originated by a version 2.1, 3.0 or 3.2 Microsoft
	Mail for PC Networks user.
	
	Here are the bodyparts supported by the Mail for PC Networks product, and how
	they are tagged in the X.400 message.
	
	  Type       Tag
	  ----       ---
	
	  IA5        0
	  T61        5
	  ISO6937    13 (MS Mail to X.400 Gateway v3.2 only)
	  BIN        14
	
	REFERENCES
	==========
	
	Microsoft Mail to X.400 Gateway Administrator's Guide, v3.0, pps 59-60.
	
	Additional query words: 2.10 2.1 3.00 3.0 3.20 3.2
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN210 kbMailGatex400300 kbMailGatex400320 kbMailGatex400210
	Version           : MS-DOS:2.1,3.0,3.2; WINDOWS:2.1,3.0,3.2
	
	=============================================================================
	
