---
layout: page
title: "Q105963: PC Forms: Unable to Set Message Priority in E-Forms"
permalink: /kb/105/Q105963/
---

## Q105963: PC Forms: Unable to Set Message Priority in E-Forms

	Article: Q105963
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a custom form created with version 1.0 of Microsoft Electronic
	Forms Designer, you cannot set the priority of a message.
	
	CAUSE
	=====
	
	This problem occurs because of a limitation of Simple Messaging Application
	Program Interface (MAPI), which is included with versions 3.0 and 3.2 of
	Microsoft Mail for PC Networks.
	
	RESOLUTION
	==========
	
	When you send a standard Microsoft Mail message (Send Note), you can select the
	Options button to set the priority of the message. Because this feature has not
	been implemented in Simple MAPI, it is not accessible from a custom E-form. This
	issue will be addressed in Extended MAPI.
	
	The only message option currently supported by Simple MAPI is Return Receipt. To
	add this option, set the "flags" parameter of the MAPIMessage type equal to
	MAPI_RECEIPT_REQUESTED.
	
	Additional query words: 1.00 Urgent High Normal Low
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.2
	
	=============================================================================
	
