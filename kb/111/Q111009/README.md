---
layout: page
title: "Q111009: Accessing Keywords in a Viewer Title"
permalink: /kb/111/Q111009/
---

## Q111009: Accessing Keywords in a Viewer Title

	Article: Q111009
	Product(s): Miscellaneous Software Development Kits
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Viewer Publishing Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Multimedia Viewer version 2.0 provides only two commands to access
	the keywords defined for a title; they are the Viewer commands
	JumpKeyword(Title,Keyword) and KeyIndex(). JumpKeyword() is used to jump to the
	topic containing the specified keyword from the main keyword index. There is no
	command available for jumping to a topic by specifying a keyword from a
	secondary keyword index. KeyIndex() is used to display the Keyword Index dialog
	box.
	
	MORE INFORMATION
	================
	
	It is possible to get a list of the keywords defined in a title, but because the
	commands using keywords are so limited, there aren't many uses for the keyword
	list. Keywords are stored as word wheels in the Viewer title. Word wheels for
	keywords are named using the convention |C, where C is the identification
	character specified in the "key=" entry in the KEYINDEX section of the project
	file. The main (default) keyword index is named |0. The WordWheel APIs
	(application programming interfaces) in Viewer can be used to retrieve the
	contents of the keyword word wheel. Note that the WordWheelOpen() function
	always capitalizes the word wheel name, so it can be used only to open keyword
	word wheels whose identification character is a capital letter or a number. See
	pages 9-26 through 9-28 of the Microsoft Multimedia Viewer version 2.0
	"Technical Reference" for more information on the WordWheel APIs.
	
	Viewer does not provide a way to obtain a list of keywords defined for a topic.
	It also does not provide a way to obtain a list of what topics contain a given
	keyword.
	
	Because of this, it is not possible to write a full-featured custom Keyword Index
	dialog box. Neither is it possible to add keyword searches to a custom search
	dialog box.
	
	To provide a customized interface to the keywords in a title, aliases can be used
	to simulate keywords. Page 8-15 through 8-20 of the Microsoft Multimedia Viewer
	version 2.0 "Authoring Guide" has more information on using aliases. An alias is
	used to provide alternate text that does not appear in the topic text, but that
	can be used in searches. To use aliases to simulate keywords, you could define a
	unique search field number for keywords. Then use this search field number, and
	the search data type 0 (words) to define the "keyword" aliases. To do "keyword"
	searches, use the TopicListFromQuery Viewer function, and limit the searches to
	the search field defined to be "keywords" (see the documentation for the VFLD
	operator on page 9-18 of the Microsoft Multimedia Viewer version 2.0 "Technical
	Reference"). Chapter 9 of the "Technical Reference" documents the
	TopicListFromQuery() function, as well as the other search functions. Chapter 8
	describes how to write a custom search interface using the search functions, and
	the KATASRCH sample shipped with Viewer PTK has sample code for a custom search
	interface.
	
	Additional query words: 2.00 key word
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbMMViewer200
	Version           : :2.0
	
	=============================================================================
	
