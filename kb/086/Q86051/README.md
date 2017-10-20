---
layout: page
title: "Q86051: DOC: WM_HOOKRCRESULT Message Missing from Pen Documentation"
permalink: /kb/086/Q86051/
---

## Q86051: DOC: WM_HOOKRCRESULT Message Missing from Pen Documentation

{% raw %}

	Article: Q86051
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
	
	Documentation for the WM_HOOKRCRESULT message was omitted from the "Microsoft
	Windows Software Development Kit: Microsoft Windows for Pen Computing:
	Programmer's Reference" manual and from the associated online help files. The
	text below provides a complete description of the message.
	
	MORE INFORMATION
	================
	
	Windows for Pen Computing sends a WM_HOOKRCRESULT message to any window that
	sets a recognition hook with the SetRecogHook() function. A recognition hook
	provides a method for an application to extract information from its own
	recognition process or from some other application's recognition process.
	Windows for Pen Computing sends the WM_HOOKRCRESULT message before it sends the
	standard WM_RCRESULT.
	
	The values of wParam and lParam are the same as those for the WM_RCRESULT
	message. The wParam parameter specifies the reason the recognition terminated
	(one of the REC_* codes). If wParam contains REC_OK, more results are available;
	otherwise, it contains the value returned by Recognize or RecognizeData. The
	lParam parameter contains a far pointer to an RCRESULT data structure.
	
	For more information, see the documentation for the SetRecogHook() function on
	pages 197-198 of the "Microsoft Windows SDK: Microsoft Windows for Pen
	Computing: Programmer's Reference" manual.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinPenSearch kbZNotKeyword3 kbWinPen100
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
