---
layout: page
title: "Q119736: How to Implement the BackColor Property in VBX Custom Control"
permalink: /kb/119/Q119736/
---

## Q119736: How to Implement the BackColor Property in VBX Custom Control

	Article: Q119736
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 3.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Control Development Kit (CDK) provides a set of standard properties that you
	can use in your custom control. Most of these standard properties do not need
	any additional code. All you need to do is include these properties in your
	property list. A few of the standard properties, however, do require some
	additional work on the part of the developer. For example, to implement the
	BackColor property, you need to write some additional code. This article shows
	by example how to do it.
	
	MORE INFORMATION
	================
	
	The CDK documentation states that to support the BackColor property, you must
	send a WM_CTLCOLOR message to get a brush that contains the background color.
	(See page 39 of the CDK documentation for more information.) However, the CDK
	documentation does not specifically describe where you need to put this code or
	how it should be structured. The Circ3 example implements a functional BackColor
	property, but the code is not very generic.
	
	Example
	-------
	
	The following sample code demonstrates how to add a generic BackColor property to
	your custom control. Essentially, you add code to your Control Procedure to
	monitor the following messages:
	
	  VBM_SETPROPERTY - so you can determine when the backcolor changes.
	  WM_ERASEBKGND - so you can repaint the background.
	  WM_PAINT - BeginPaint sends the WM_ERASEBKGND message.
	
	Process VBM_SETPROPERTY so that you can determine when the BackColor property is
	set. When the property is set, invalidate the window. You can do this by calling
	InvalidateRect. Be sure to specify TRUE as the third argument so that the
	background will be repainted.
	
	When a section of the window is invalidated, a WM_PAINT message is posted to the
	window. In your handling of the WM_PAINT message, you will usually call
	BeginPaint. BeginPaint will send a WM_ERASEBKGND message to your application if
	the InvalidateRect call specified that the background needed to be erased.
	
	Handle the painting of the background in your WM_ERASEBKGND handler. Send a
	WM_CTLCOLOR message to the parent window. The parent window will return a handle
	to a brush of the correct color. Then you can use that brush to paint your
	window.
	
	NOTE: Do not delete the brush.
	
	Sample Code - Example Implementation of BackColor Property
	----------------------------------------------------------
	
	Below is a code snippet taken from a control procedure that implements the
	BackColor property:
	
	     // Check to see whether BackColor has been set.
	     case VBM_SETPROPERTY:
	         if( wp == IPROP_BACKCOLOR )
	             InvalidateRect(hwnd, NULL, TRUE);  // Force a repaint.
	
	         break;
	
	     // Paint the background.
	     case WM_ERASEBKGND:
	     {
	         HBRUSH hbr, hbrOld=NULL;
	         RECT rect;
	
	         // Get window coordinates, and normalize.
	         GetWindowRect(hwnd, &rect);
	         rect.right = rect.right - rect.left;  // Get width.
	         rect.bottom = rect.bottom - rect.top; // Get height.
	         rect.left = rect.top = 0;
	
	         // Get a brush with the background color.
	         hbr = (HBRUSH)SendMessage(GetParent(hwnd), WM_CTLCOLOR, (HDC)wp,
	                                   MAKELONG(hwnd, 0));
	
	         // If we got a brush, select it into our DC.
	         if( hbr )
	             hbrOld = SelectObject((HDC)wp, hbr);
	
	         // Paint the background.
	         FillRect((HDC)wp, &rect, hbr);
	
	         // If we selected an object, restore old object.
	         if( hbrOld )
	             SelectObject((HDC)wp, hbrOld);
	
	         // Return a non-zero, indicating we processed a message.
	         return 1;
	     }
	
	     // Paint the control (assumes we have a PaintRoutine).
	     case WM_PAINT:
	         if( wp ) PaintRoutine(hwnd, (HDC) wp);  // Paint to given HDC.
	         else                                    // Paint to window's HDC.
	         {
	             PAINTSTRUCT ps;
	
	             BeginPaint(hwnd, &ps);
	             PaintRoutine(hwnd, ps.hdc);
	             EndPaint(hwnd, &ps);
	         }
	         break;
	
	Sample Code - Example PaintRoutine
	----------------------------------
	
	Here is some code for an example PaintRoutine:
	
	     void PaintRoutine(HWND hwnd, HDC hdc)
	     {
	         RECT rect;
	         char msg[] = "Painting the control";
	
	         // TextOut will work with any DC.
	         TextOut(hdc, 0, 0, msg, sizeof(msg) - 1);
	     }
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300
	Version           : :3.0
	
	=============================================================================
	
