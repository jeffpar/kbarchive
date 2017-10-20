---
layout: page
title: "Q172219: Canon LBP-8 III+ Prints Symbol Font for Entire Document"
permalink: /kb/172/Q172219/
---

## Q172219: Canon LBP-8 III+ Prints Symbol Font for Entire Document

{% raw %}

	Article: Q172219
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print a document formatted with both the Symbol printer font and any
	other fixed width printer font, such as Courier, to a Canon LBP-8 III Plus
	printer, the printer does not reset correctly after the Symbol font is printed.
	For example, if the following is typed, line three will be printed in the Symbol
	font:
	
	  1. Text typed in Courier font
	  2. Text typed in Symbol font
	  3. Text typed in Courier font
	
	This symptom occurs when you use any of the Canon LBP-8 III printer drivers.
	
	RESOLUTION
	==========
	
	Format the text with a true type font. For example, use the Courier New True
	Type font.
	
	-or-
	
	Use the Canon LBP-8 II printer driver.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt LBP 8 LBP8 III+ ttf fixed fixedfont
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
