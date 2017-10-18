---
layout: page
title: "Q129745: MHS: Gateway Will Not Process"
permalink: kb/129/Q129745/
---

## Q129745: MHS: Gateway Will Not Process

	Article: Q129745
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to MHS, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MHS gateway does not process the [<intended host>] portion of an
	incoming MHS message. All address elements after the [<intended host>]
	field are ignored.
	
	CAUSE
	=====
	
	The Microsoft Mail Gateway to MHS was not designed to recognize the
	[<intended>] host field.
	
	RESOLUTION
	==========
	
	According to the Novell SMF "Programmer's Reference" pages 4-8:
	
	  NetWare MHS strips out the intended host address element before passing a
	  message to a gateway ... gateway developers do not need to handle this
	  address element.
	
	MORE INFORMATION
	================
	
	You should contact either Novell or the company that developed the application
	that is generating the intended host address element before passing the message
	to the MHS gateway. The MHS gateway does not include the intended host address
	element in outbound messages.
	
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateMHS300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
