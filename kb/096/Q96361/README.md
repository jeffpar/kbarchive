---
layout: page
title: "Q96361: PRB: @ ... SAY MEMO Prints Word &quot;Memo&quot;"
permalink: /kb/096/Q96361/
---

## Q96361: PRB: @ ... SAY MEMO Prints Word &quot;Memo&quot;

{% raw %}

	Article: Q96361
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MACINTOSH:2.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the @ ... SAY command for a nonempty memo field prints the word "memo"
	instead of the text within the memo field.
	
	RESOLUTION
	==========
	
	To display the text within the memo field, specify a SIZE clause with the @ ...
	SAY command.
	
	NOTE: The SIZE clause must be more than one row high for this resolution to work.
	
	MORE INFORMATION
	================
	
	For example, suppose you have a memo field named "memfield" that contains the
	following text:
	
	  I pledge allegiance to the flag of the United States of America, and to the
	  Republic for which it stands, one nation, under God, indivisible, with
	  liberty and justice for all.
	
	Issuing these commands        Produces this output
	--------------------------------------------------
	
	@ 1,1 SAY memfield && prints just the word memo
	
	@ 3,1 SAY memfield SIZE 5,25 && prints the Pledge of Allegiance in
	
	  && a 5-row-by-25-column space
	
	Additional query words: 2.01 FoxBASE+/Mac
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASESearch
	Version           : MACINTOSH:2.01
	
	=============================================================================
	

{% endraw %}
