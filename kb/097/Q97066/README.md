---
layout: page
title: "Q97066: HOWTO: Index a Combined Date and Character Field"
permalink: /kb/097/Q97066/
---

## Q97066: HOWTO: Index a Combined Date and Character Field

{% raw %}

	Article: Q97066
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5; MS-DOS:2.0,2.5; WINDOWS:2.0,2.5,3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 03-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5 
	- Microsoft FoxPro for Windows, versions 2.0, 2.5 
	- Microsoft FoxPro for Macintosh, version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are several different techniques you can use to create an index on
	combined Date and Character fields. The first technique illustrated below gives
	you a bit more flexibility in sorting. The second two are equivalent, and it is
	generally best to use the last example.
	
	  INDEX ON STR(YEAR(dOrder)) + STR(MONTH(dOrder)) + STR(DAY(dOrder)) + cCustID ;
	        TAG dateCust
	
	-or-
	
	  INDEX ON DTOC(dOrder, 1) + cCustID TAG dateCust
	
	-or-
	
	  INDEX ON DTOS(dOrder) + cCustID TAG dateCust
	
	REFERENCES
	==========
	
	For more information about Date and DateTime functions, consult the Language
	Reference.
	
	Additional query words: index cross-platform
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250 kbVFP300 kbVFP500 kbVFP600
	Version           : MACINTOSH:2.5; MS-DOS:2.0,2.5; WINDOWS:2.0,2.5,3.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
