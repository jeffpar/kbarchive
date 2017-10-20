---
layout: page
title: "Q191589: BUG: Output Lines from TYPE Command Not Numbered"
permalink: /kb/191/Q191589/
---

## Q191589: BUG: Output Lines from TYPE Command Not Numbered

{% raw %}

	Article: Q191589
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The output from the TYPE command does not contain line numbers when using the
	NUMBER, AUTO, and WRAP options.
	
	CAUSE
	=====
	
	When combining the AUTO, WRAP, and NUMBER options the lines beginning with
	spaces are not parsed correctly. Therefore, some line numbers are omitted.
	
	RESOLUTION
	==========
	
	Remove the spaces from the beginning of any lines in the text file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a text file named Ztest.txt that contains the following data. When
	  adding the second line, press the space bar several times to add a few spaces
	  before typing the data.
	
	  Test line 1
	  Test Line 2
	  Test Line 3
	  Test Line 4
	
	2. Close the text file and type the following line in the Command window:
	
	  " TYPE Ztest.txt NUMBER AUTO WRAP" (without the quotation marks)
	
	  Notice that the second line does not have a line number preceding it.
	
	3. If you type the following, you get the proper line numbers:
	
	  " TYPE Ztest.txt NUMBER AUTO" (without the quotation marks)
	
	Additional query words: kbXBase kbVFp500abug kbVFp300bbug kbVFp600bug
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
