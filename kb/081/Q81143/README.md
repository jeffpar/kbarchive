---
layout: page
title: "Q81143: DOCERR: Get/SetCommEventMask Functions Documented Incorrectly"
permalink: /kb/081/Q81143/
---

## Q81143: DOCERR: Get/SetCommEventMask Functions Documented Incorrectly

{% raw %}

	Article: Q81143
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) for Windows versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The descriptions in the Microsoft Windows SDK "Reference Volume 1" of
	GetCommEventMask() and SetCommEventMask() fail to make clear the correct use of
	these routines and their usefulness. This article provides additional
	documentation for these important communications functions.
	
	MORE INFORMATION
	================
	
	Some background information is in order. In a communications context, the "event
	word" is a word of memory the bits of which specify the events that have
	occurred. An "event mask" is a word-sized parameter to a function. The bits of
	the event mask specify the bits in the event word that are affected by a given
	function call.
	
	WORD GetCommEventMask(nCid, nEvtMask)
	-------------------------------------
	
	The description for the GetCommEventMask() function, on page 4-162 of the SDK
	reference, reads as follows:
	
	  This function retrieves the value of the current event mask, and then clears
	  the mask.
	
	A more appropriate description might read similar to the following:
	
	  This function retrieves the value of the current event word, and then clears
	  those bits in the event word that are specified by the nEvtMask parameter.
	
	If this function was named GetCommEventWord, it might be easier to associate the
	name of the function with its purpose.
	
	Note: The GetCommEventMask() API will return the entire current event word
	regardless of the value of nEvtMask.
	
	WORD FAR * SetCommEventMask(nCid, nEvtMask)
	-------------------------------------------
	
	The description for the SetCommEventMask() API, on page 4-373 of the SDK
	reference, reads as follows:
	
	  This function enables and retrieves the event mask of the communications
	  device specified by the nCid parameter. The bits of the nEvtMask parameter
	  define which events are to be enabled. The return value points to the current
	  state of the event mask.
	
	A more appropriate description might read similar to the following:
	
	  This function enables the event mask of the communications device specified
	  by the nCid parameter. The bits of the nEvtMask parameter define which events
	  are to be enabled. The return value points to the current state of the event
	  word.
	
	SetCommEventMask returns a far pointer to the event word. The result pointer
	points to "live" data; this word changes as events occur. An application can use
	the pointer to check the event word to quickly determine which events have
	occurred. However, to clear bits in the event word, the application must call
	GetCommEventMask(). Do not write through the pointer returned by
	SetCommEventMask(). SetCommEventMask() does not alter the current event word.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	
	=============================================================================
	

{% endraw %}
