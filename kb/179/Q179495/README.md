---
layout: page
title: "Q179495: WD97: Different Date Formats Listed on Insert Date and Time List"
permalink: /kb/179/Q179495/
---

## Q179495: WD97: Different Date Formats Listed on Insert Date and Time List

{% raw %}

	Article: Q179495
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click Date And Time on the Insert menu, you may see different date
	formats under Available Formats within the same or different Word documents.
	
	For example, if you place your insertion point at a place in the document, and
	then click Date And Time on the Insert menu, you may see the following list:
	
	  1/5/98
	  Monday, January 05, 1998
	  January 5, 1998
	  1/5/1998
	  1998-01-05
	  5-Jan-98
	  1.5.98
	  Jan. 5, 98
	  5 January, 1998
	  January, 98
	  Jan-98
	
	NOTE: The month appears BEFORE the day in most of the dates in this list (like
	United States dates).
	
	If you place your insertion point at another place in your document, click Date
	And Time on the Insert menu, you may see the following list:
	
	  05/01/98
	  Monday, 05 January 1998
	  05 January 1998
	  05/01/1998
	  1998-01-05
	  5-Jan-98
	  05.01.98
	  05 Jan. 98
	  5 January, 1998
	  January 98
	  Jan-98
	
	NOTE: The day appears BEFORE the month in most of the dates in this list (like
	European dates).
	
	CAUSE
	=====
	
	You will see different date and time formats in the Date And Time dialog box on
	the Insert menu if the text has been formatted with different Language character
	settings.
	
	WORKAROUND
	==========
	
	To work around this behavior, change the Language character setting to the same
	language in the entire document. To do so, follow these steps:
	
	1. On the Edit menu, click Select All.
	
	2. On the Tools menu, point to Language, and click Set Language.
	
	3. Select a Language, like English (United States), and then click OK.
	
	MORE INFORMATION
	================
	
	The first list in the "Symptoms" section was formatted with the Language setting
	of English (United States); the second list in the "Symptoms" section was
	formatted with the Language setting of English (United Kingdom).
	
	For additional information about date and time formats, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q134910 WD: How to Set a Default DATE Field Format in Word
	
	Additional query words: change changes wrong format
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
