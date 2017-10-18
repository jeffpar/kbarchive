---
layout: page
title: "Q86921: Tap and Tap-and-Hold Pointer Events"
permalink: kb/086/Q86921/
---

## Q86921: Tap and Tap-and-Hold Pointer Events

	Article: Q86921
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Pen Computing, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Windows for Pen Computing environment, the pen can exhibit
	either mouse or pen functionality. Generally, the pen acts similar to a mouse
	until the Recognize function determines that the user started a recognition
	session. To enable the pen to function even better as a mouse in applications
	developed for standard (non-pen) Microsoft Windows, the Recognize() function may
	abort the recognition session with a pointer event return value to indicate that
	the user intends to perform a standard mouse operation instead of starting a
	recognition session. The ProcessWriting() function also exhibits this behavior.
	
	A pen-centric application can take advantage of this functionality by clearing
	the RCO_NOPOINTEREVENT flag in the lRcOptions field of the recognition context
	(RC) data structure. The text below describes pointer events and provides some
	pseudocode to demonstrate how an application might process the REC_POINTEREVENT
	return value.
	
	MORE INFORMATION
	================
	
	Windows for Pen Computing defines two types of pointer events: "tap" (Tap) and
	"tap and hold" (TapNHold). A Tap is analogous to clicking the left mouse button.
	The user produces a Tap by clicking the tip of the pen on the tablet and
	removing it quickly, without otherwise moving the pen. The user produces a
	TapNHold by clicking the tip of the pen on the tablet and holding it there
	without movement for a specified amount of time.
	
	An application can be notified of these events early in the recognition process
	if it calls the Recognize function with a valid RC data structure. If the
	RCO_NOPOINTEREVENT flag is not set in the RC structure (the default), the
	Recognize function looks for pointer events and returns. The following
	pseudocode demonstrates how an application can process both types of pointer
	events:
	
	     case WM_LBUTTONDOWN:
	        if (IsPenEvent(message, GetMessageExtraInfo()))
	        {
	           // Process pen event
	           InitRC(hwnd, &rc);  // May have been done previously...
	           if (Recognize(&rc) == REC_POINTEREVENT)
	           {
	              // Process pointer event
	              if (GetAsyncKeyState(VK_LBUTTON) & 0x8000)
	                 // Pen is still down: TapNHold functionality
	              else
	                 // Pen up: Tap functionality
	           }
	        }
	        else
	           // Process mouse event
	        break;
	
	Note that if the Recognize function aborts with a REC_POINTEREVENT return value,
	no further recognition takes place. The system recognizer will not have been
	called. Therefore, the application will not receive a WM_RCRESULT message.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinPenSearch kbZNotKeyword3 kbWinPen100
	Version           : :1.0
	
	=============================================================================
	
