---
layout: page
title: "Q96748: Detailed Description of lstrcmp and Alphabetic Characters"
permalink: /kb/096/Q96748/
---

## Q96748: Detailed Description of lstrcmp and Alphabetic Characters

{% raw %}

	Article: Q96748
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Executing the following function in the English language returns -1, indicating
	that a lowercase 'e' is less than an uppercase 'Z':
	
	     lstrcmp("e","Z");
	
	This is contrary to the order of characters using ASCII sorting. However, it is
	correct behavior or lstrcmp().
	
	CAUSE
	=====
	
	lstrcmp() performs a comparison in the same manner as does a real dictionary.
	Characters are compared in a case-insensitive manner first, then specific
	details are compared (for example, lowercase versus uppercase).
	
	lstrcmp() performs its comparisons by first setting up a primary and secondary
	weight. The primary weight is the value of the character after converting to
	uppercase. The secondary weight describes whether the character was originally
	lowercase or uppercase.
	
	Using the standard ASCII table as a guide (0...9ABC...XYZabc...xyz), the
	following are examples of lstrcmp:
	
	  "A" < "a" < "B" < "b"
	  "Aaa" < "aaa" < "Aab"
	
	In the first example, "A" is less than "a" because:
	
	1. Both characters are converted to uppercase.
	
	2. The primary weights are compared and found equal.
	
	3. Because the primary weights are equal, the secondary weights are compared. It
	  is then determined that "A" is less than "a" because "a" is higher in the
	  ASCII chart.
	
	Also in the first example, "a" is less than "B" because:
	
	1. Both characters are converted to uppercase.
	
	2. The primary weights are compared and it is determined that "A" is less than
	  "B" on the ASCII chart. No secondary weight comparison is performed.
	
	In the second example, "Aaa" is less than "aaa" following the same logic shown in
	the comparison of "A" and "a".
	
	When two characters are compared and they are equal, this is called a
	"collision," and "delayed comparison" will be performed using the secondary
	weight.
	
	MORE EXAMPLES
	-------------
	
	  e,a  --> E,A --> E>A = 1
	  e,e  --> E,E --> E=E = 0  Because they are equal, the case is
	                            checked (secondary weight).
	  e,z  --> E,Z --> E<Z = -1
	
	  e,A  --> E,A --> E>A = 1
	  e,E  --> E,E --> E=E = 1  Because they are equal, the case is
	                            checked (secondary weight).
	  e,F  --> E,F --> E<F = -1
	
	RESOLUTION
	==========
	
	If you need to sort by ASCII values using case sensitivity, use the C run-time
	function strcmp() or _fstrcmp().
	
	Also, Far East Windows-based applications adopt this dictionary sorting technique
	in English and local languages.
	
	For detailed information about the sort order used with non-alphabetic
	characters, accented characters, and characters in international languages,
	query on the following words in this Knowledge Base:
	
	  " lstrcmpi and international and sort " (without the quotation marks)
	
	Additional query words: 3.00 3.10 lstrcmpi strcmpi
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
