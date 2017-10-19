---
layout: page
title: "Q107103: X400: Gateway Requires P2 Originator Info for Display"
permalink: /kb/107/Q107103/
---

## Q107103: X400: Gateway Requires P2 Originator Info for Display

	Article: Q107103
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For display purposes, Microsoft Mail Gateway to X.400 gets the message
	originator's name from the P2 of the X.400 message. If the originator field is
	not included in the P2 then the Gateway cannot display the message originator to
	you.
	
	The X.400 implementation functions this way for two reasons:
	
	- The NIST Stable Implementor Agreements require all NIST-compliant
	  implementations, supporting P2, to generate the P2 originator.
	
	- OSTC requires the same of OSTC-compliant implementations for Europe and
	  Australia.
	
	
	Additional query words: 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300 kbMailGatex400320
	Version           : MS-DOS:3.0,3.2
	
	=============================================================================
	
