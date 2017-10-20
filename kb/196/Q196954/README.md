---
layout: page
title: "Q196954: WD97: Cannot Merge a Barcode Field Based on a Condition"
permalink: /kb/196/Q196954/
---

## Q196954: WD97: Cannot Merge a Barcode Field Based on a Condition

{% raw %}

	Article: Q196954
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbfield word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A BARCODE field nested in an IF field produces no merge result even when the
	condition is true.
	
	CAUSE
	=====
	
	BARCODE fields are a special type of Word field called a "display" field.
	Display fields produce their own results and, unlike other Word fields, the
	result of a display field cannot exist independently of the field itself
	(display fields can't be unlinked). Consequently, the result of a display field
	cannot be fetched by the IF field for its result.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods.
	
	Method 1
	--------
	
	Use the Record Selection feature to merge only those records that have addresses
	in the U.S. After all these records have been merged, remove the BARCODE field
	and merge those records that are not in the U.S.
	
	Method 2
	--------
	
	Sort the data file by the country field so that all records for the U.S. are
	together. Using the mail merge helper, merge only the range of records that
	includes the country U.S. After all U.S. records have been merged, remove the
	BARCODE field and merge the range of records that includes countries other than
	the U.S.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: usa bar code
	
	======================================================================
	Keywords          : kbdta kbfield word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
