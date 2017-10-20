---
layout: page
title: "Q80325: Application Cannot Define Subset of the Gestures"
permalink: /kb/080/Q80325/
---

## Q80325: Application Cannot Define Subset of the Gestures

{% raw %}

	Article: Q80325
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Pen Computing, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If an application sets the ALC_GESTURE bit in the alc field of the RC data
	structure, the Microsoft Recognizer can return any one of the standard gestures
	defined by the system. There is no method to define a subset of the standard
	gesture set.
	
	MORE INFORMATION
	================
	
	In the Windows for Pen Computing environment, an application can use the alc
	field of the RC data structure to specify the set of characters to use during
	recognition. Using this field, an application can specify a predefined set of
	characters by using one of the predefined flags, or it can define its own set of
	characters by using the ALC_USEBITMAP option. The ALC_USEBITMAP option allows
	the application to specify any subset of the 256 characters in the ANSI
	character set. Unfortunately, there is no method for an application to define a
	subset of the gesture set.
	
	Some application developers have requested the ability to define subsets of the
	standard gesture set. This request is under consideration. Microsoft will post
	new information here as it becomes available.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinPenSearch kbZNotKeyword3 kbWinPen100
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
