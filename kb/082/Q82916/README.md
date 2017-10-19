---
layout: page
title: "Q82916: PC Win: Not Sorting Correctly Based on Subject Field"
permalink: /kb/082/Q82916/
---

## Q82916: PC Win: Not Sorting Correctly Based on Subject Field

	Article: Q82916
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Messages sorted based on the subject field do not sort correctly.
	
	CAUSE
	=====
	
	This problem may be caused by multiple subject lines having the same first 128
	characters.
	
	Mail for Windows only caches the first 128 characters of the subject field.
	Messages that have subject lines that are identical through the first 128
	characters are then sorted based on date.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
