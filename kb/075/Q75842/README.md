---
layout: page
title: "Q75842: RCRESULT rectBoundInk Field Is in Client Coordinates"
permalink: /kb/075/Q75842/
---

## Q75842: RCRESULT rectBoundInk Field Is in Client Coordinates

{% raw %}

	Article: Q75842
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
	
	When an application receives the WM_RCRESULT message, the rectBoundInk field of
	the RCRESULT structure reports the bounds on the input ink in client
	coordinates, not in tablet coordinates.
	
	When the Microsoft Recognizer receives the RCRESULT structure returned from the
	RecognizeInternal function, the Recognizer builds the rectBoundInk rectangle, as
	well as performing other tasks. The rectBoundInk rectangle is built if the
	following four conditions are met:
	
	- The RCO_COLDRECOG flag is not set
	
	- The ink width is greater than 0 (zero)
	
	- hpendata is valid (the GetPenDataInfo function returns success)
	
	- The bounding rectangle in the PENDATAHEADER structure is not empty
	
	If any one of these four conditions is not met, the rectBoundInk field will be
	set to zero.
	
	Also note that the rectBoundInk variable may contain area outside the area
	specified in the rectBound variable in the RC structure. In other words, while
	the ink drawn is constrained by rc.rectBound, rcresult.rectBoundInk is based on
	the data collected from the pen.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinPenSearch kbZNotKeyword3 kbWinPen100
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
