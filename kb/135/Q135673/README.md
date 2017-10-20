---
layout: page
title: "Q135673: PRB: Need Clause on Double Field to Enter Scientific Notation"
permalink: /kb/135/Q135673/
---

## Q135673: PRB: Need Clause on Double Field to Enter Scientific Notation

{% raw %}

	Article: Q135673
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While Visual FoxPro supports the representation of very large or very small
	numbers through scientific notation, the letter E required by this format cannot
	be entered directly into a numeric field. The expected format consists of a
	decimal value resulting from exponential multiplication or division (the
	mantissa), the letter E, and the positive or negative value indicating the
	number of times to multiply the mantissa by ten (the ordinant).
	
	CAUSE
	=====
	
	Considering that the location of the E key is directly below the top row of
	numeric keys, the potential for entering an E accidentally is too great to
	permit entering the format into a numeric field by default. This is by design.
	
	WORKAROUND
	==========
	
	To allow entry of numeric data in scientific notation, the format property must
	be set to "^". When using a grid control set to populate automatically
	(ColumnCount set to -1), you must determine the appropriate column.
	
	For example, if a table field defined as double with three decimal places is the
	third field in the table, the following code in the Init event procedure of the
	form will display and accept scientific notation:
	
	     THISFORM.Grid1.Column3.Text1.Format="^"
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Although a mantissa value may be entered having both integer and decimal
	components, the result will be reduced to a decimal value only and the exponent
	portion recalculated. This conforms to IEEE specifications. The actual numeric
	value is unaffected, remaining the same regardless of the display format.
	
	Additional query words: VFoxWin overflow asterisk circumflex
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
