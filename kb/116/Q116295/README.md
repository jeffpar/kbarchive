---
layout: page
title: "Q116295: Bookshelf: Pagebreak Inserted When QuickShelf Button Pressed"
permalink: /kb/116/Q116295/
---

## Q116295: Bookshelf: Pagebreak Inserted When QuickShelf Button Pressed

{% raw %}

	Article: Q116295
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1994 edition; WINDOWS:6.0,6.0a,6.0c
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf for Windows 1994 edition 
	- Microsoft Word for Windows, versions 6.0, 6.0a, 6.0c 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the WordPerfect Help option is turned on in Word for Windows, a page break
	may be inserted into your document when you choose a QuickShelf button. If you
	have a word selected in your document, the page break will replace the word.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	RESOLUTION
	==========
	
	To solve this problem, disable the Help for WordPerfect users, using the
	following steps:
	
	1. From the Tools menu in Word, choose Options.
	
	2. Choose General options.
	
	3. Clear the Help For WordPerfect Users check box.
	
	4. Choose OK.
	
	The following is another workaround:
	
	1. For Word 6.0, add the following line to the WINWORD6.INI file:
	
	  "wphelp=0" (without the quotation marks)
	
	  -or-
	
	2. For Word 2.0, add the following line to the WINWORD.INI:
	
	  "wphelp=0" (without the quotation marks)
	
	MORE INFORMATION
	================
	
	You should be able to highlight a word and, by pressing a QuickShelf button,
	start Bookshelf and perform a search on the word (for example, to find a
	definition of it).
	
	However, if the WordPerfect Help option is turned on, a page break appears,
	replacing the highlighted word. Bookshelf starts, but does not search on the
	word.
	
	Additional query words: msn_bookshelf 1994 multi media multimedia multi- deleted disappear gone replace break page launch run word6 wph 2.00 6.00a 94 winmm dictionary cdu homemm
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbHomeMMsearch kbZNotKeyword2 kbBookshelfSearch kbWord600 kbWord600a kbWord600c kbBookShelf1994
	Version           : :1994 edition; WINDOWS:6.0,6.0a,6.0c
	
	=============================================================================
	

{% endraw %}
