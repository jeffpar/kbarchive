---
layout: page
title: "Q101009: How to Perform a DDEPOKE from FoxPro to Word for Windows"
permalink: /kb/101/Q101009/
---

## Q101009: How to Perform a DDEPOKE from FoxPro to Word for Windows

{% raw %}

	Article: Q101009
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	You can use the DDEPOKE() function to insert information from FoxPro for
	Windows into a document created in Microsoft Word versions 2.0c and 6.0 for
	Windows.
	
	In order to use the DDEPOKE() function, you must declare in the Word
	document a specific location to poke the information into. To declare the
	location, create a bookmark within the Word document. For example, the
	following code will poke information into a Word document that has a
	bookmark called "test":
	
	     run /n i:\winword\winword.exe i:\winword\letter.doc
	     mchannel=DDEinitiate("WinWord","i:\winword\letter.doc")
	     =DDESETOPTION('SAFETY',.F.)
	     =DDEPOKE(mchannel,"test","Hello World!")
	     =DDETERMINATE(mchannel)
	
	
	NOTE: =DDESETOPTION('SAFETY',.F.) is an option to set safety off so the
	program doesn't ask if you want to start the other program if it's not
	already started.
	
	The topic name for the DDEINITIATE() function must be the document name; in
	this example, the document name is "c:\winword\letter.doc". The string
	"Hello World!" will be inserted in the document at the "test" bookmark.
	
	Additional query words: VFoxWin FoxWin 2.50 2.00c 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	

{% endraw %}
