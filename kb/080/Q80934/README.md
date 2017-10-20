---
layout: page
title: "Q80934: Common Dialog Custom Control: FilterIndex Can Be Negative"
permalink: /kb/080/Q80934/
---

## Q80934: Common Dialog Custom Control: FilterIndex Can Be Negative

{% raw %}

	Article: Q80934
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 2.0, 3.0 
	- Microsoft Professional Toolkit for Microsoft Visual Basic programming system for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The FilterIndex property of the Common Dialog custom control (COMMDLG.DLL) can
	be any long integer value, including negative numbers and 0 (zero).
	
	MORE INFORMATION
	================
	
	Normally, the smallest value to which you would set the FilterIndex property is
	1, because the first filter is defined as 1. If you use a number less than 1,
	such as 0 or any negative number (within the range of a long integer), you will
	get the same result as if you set it equal to 1.
	
	Likewise, if you use a number greater that the total number of filters, the
	FilterIndex property will function as if you set it to the last of the filters.
	
	For example, if you have three filters and you set FilterIndex to -2, it will
	function as if you set FilterIndex to 1. If you set FilterIndex to 23, it will
	function as if you set FilterIndex to 3.
	
	Additional query words: 1.00 2.00 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300 kbVB200
	Version           : :2.0,3.0
	
	=============================================================================
	

{% endraw %}
