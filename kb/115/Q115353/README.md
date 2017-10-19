---
layout: page
title: "Q115353: X400: Setting Include Special Attachment Removes WINMAIL.DAT"
permalink: /kb/115/Q115353/
---

## Q115353: X400: Setting Include Special Attachment Removes WINMAIL.DAT

	Article: Q115353
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	If you check Include Special Attachment, WINMAIL.DAT is not sent; if you
	clear Include Special Attachment, WINMAIL.DAT is sent.
	
	This was due to a change in the field name. The confusion arose because
	the label is "Include Special Attachment," while the X400GATE.INI parameter
	is InternalAttachment, which if set means to remove WINMAIL.DAT.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	
