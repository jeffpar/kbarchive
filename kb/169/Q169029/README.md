---
layout: page
title: "Q169029: FIX: Cannot Change Logical Field in Browse in DBCS VFP"
permalink: /kb/169/Q169029/
---

## Q169029: FIX: Cannot Change Logical Field in Browse in DBCS VFP

	Article: Q169029
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500aFIX kbvfp500bug
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Logical field does not keep changes made in the Browse window when it is the
	last field in the table. This behavior applies only to DBCS (Double- Byte
	Character Set) platforms.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Microsoft Visual
	FoxPro version 5.0a for Windows.
	
	MORE INFORMATION
	================
	
	When a logical field is the last field in a table running on a DBCS platform,
	changing the value of that field in the last record of a Browse retains the
	original value. This happens in both edit mode and in append mode. The value
	appears to change, but once the user moves off the record, the original value is
	retained. Different buffering modes have no effect.
	
	Additionally, if a logical value is changed in a Browse window, it automatically
	changes to False (.F.). This happens regardless of whether the logical field is
	the last field in the table.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a table using the following code:
	
	        CREATE TABLE Test (fld1 c(10), fld2 l)
	
	2. Add several records then return to Command window.
	
	3. Type "BROWSE LAST" (without the quotation marks) in the Command window (or
	  from View menu, select Browse).
	
	4. Go to last record and change logical field value.
	
	5. Move off the record.
	
	Notice the value of the logical field in the last record retained its original
	value.
	
	Additional query words: Localize
	
	======================================================================
	Keywords          : kbvfp kbvfp500aFIX kbvfp500bug 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
