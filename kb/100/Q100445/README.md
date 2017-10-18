---
layout: page
title: "Q100445: BUG: Character Field Appears as Date in Microsoft Graph"
permalink: kb/100/Q100445/
---

## Q100445: BUG: Character Field Appears as Date in Microsoft Graph

	Article: Q100445
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.5a,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbinterop kbList kbvfp300bBUG kbvfp500aBUG kbvfp250bug kbvfp250aBUG
	Last Modified: 28-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When FoxPro is outputting a character field to Microsoft Graph that contains
	values that look like dates, the graph will display these numbers in the dd-mmm
	(day-month) format. For example, a character field containing "1-10" or "1/10"
	will display as "10-Jan" on the graph. Anything larger than "12-31" or "12/31"
	displays correctly since there are no months that would correspond with these
	numbers.
	
	RESOLUTION
	==========
	
	To work around this problem and display the character fields correctly, place a
	blank space at the beginning of the character expression. To do this without
	making any modifications to the actual database file, do the following:
	
	1. FoxPro 2.X: In the RQBE window, select the Fields check box. Visual FoxPro:
	  In the Query Designer window, select the Fields tab.
	
	2. Remove the character field from the Selected Output list.
	
	3. In the Functions/Expressions box, type the following:
	
	  " "+<char>
	
	  where <char> is the name of the character field.
	
	4. Choose Move to move the expression to the Selected Output list.
	
	5. Output the query to a graph.
	
	The character field now displays correctly.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words: msgraph kbFP250 kbFP260 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbinterop kbList kbvfp300bBUG kbvfp500aBUG kbvfp250bug kbvfp250aBUG 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250 kbFoxPro250a kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.5,2.5a,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
