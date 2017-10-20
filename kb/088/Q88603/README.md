---
layout: page
title: "Q88603: BUG: Calculated Currency Field Ignores Formatting"
permalink: /kb/088/Q88603/
---

## Q88603: BUG: Calculated Currency Field Ignores Formatting

{% raw %}

	Article: Q88603
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5x,2.6,2.6a; WINDOWS:2.5x,2.6,2.6a,3.0,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp500aBUG kbvfp260bug kbvfp250bug KBQkbbuglist
	Last Modified: 02-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 5.0a, 6.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5x, 2.6, 2.6a 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Picture clause on an @...SAY command specifies a format for a currency
	field, this formatting may be ignored when the output is calculated. For
	example, if the Picture clause is $999.99 and the calculated output is
	$123.2342, all decimal places are displayed.
	
	CAUSE
	=====
	
	This problem occurs if the @ sign is used in the Picture clause.
	
	RESOLUTION
	==========
	
	Remove the @ sign from the Picture clause.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Run the following code:
	
	     x = 123.1111
	     @2,2 SAY x PICTURE "@$999.99"
	
	Note that the result is $123.1111 instead of $123.11.
	
	Additional query words: picture say kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp500aBUG kbvfp260bug kbvfp250bug KBQ kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260 kbFoxPro260a kbVFP300 kbVFP500 kbVFP600 kbVFP500a
	Version           : MS-DOS:2.0,2.5x,2.6,2.6a; WINDOWS:2.5x,2.6,2.6a,3.0,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
