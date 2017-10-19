---
layout: page
title: "Q140189: PC Win: Err Msg: STOP: Some Names Could Not Be Matched..."
permalink: /kb/140/Q140189/
---

## Q140189: PC Win: Err Msg: STOP: Some Names Could Not Be Matched...

	Article: Q140189
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0b,3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0b, 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to check a message recipient's name in the Global Address List
	(GAL), by either clicking the Check Names button or using the ALT+K keystroke,
	the following error may be displayed:
	
	  STOP: Some names could not be matched to names in the address list because
	  they were too ambiguous. Try making the names more specific or choose Address
	  to select names from the address list. Successfully matched names are
	  underlined.
	
	CAUSE
	=====
	
	The error occurs when the GAL contains more than 500 names matching the query.
	
	RESOLUTION
	==========
	
	CheckName has a limit of 500 names. The search criteria should be made more
	specific so the search returns fewer than 500 names.
	
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q113168 Err Msg: The Partial Name Is Not Specific Enough...
	
	Additional query words: 3.20 error match
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail350 kbMail320 kbMail300b kbMail320a
	Version           : WINDOWS:3.0b,3.2,3.2a,3.5
	
	=============================================================================
	
