---
layout: page
title: "Q103959: PC Forms: Reply from PROFS Loses Form Data"
permalink: /kb/103/Q103959/
---

## Q103959: PC Forms: Reply from PROFS Loses Form Data

	Article: Q103959
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a message created using version 1.0 of Microsoft Electronic Forms Designer is
	sent through the PROFS gateway, replies to the message may not perform as
	expected. A custom message replied through a gateway may lose the original form
	data.
	
	CAUSE
	=====
	
	If a PROFS user replies to a message that was sent using a custom form, the
	recipient will not receive any of the form information. This is because the
	PROFS reply to a custom message does not preserve the message class, but uses a
	standard mail note.
	
	RESOLUTION
	==========
	
	Forwarding a message from PROFS preserves the message class and the recipient
	will receive a text version of the original form. Therefore, to preserve
	information sent using a custom form via PROFS, it is necessary to forward the
	form back to the user rather than replying.
	
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.2
	
	=============================================================================
	
