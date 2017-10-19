---
layout: page
title: "Q175537: SAMPLE: LED.EXE: Light Emitting Diode Character Display Sample"
permalink: /kb/175/Q175537/
---

## Q175537: SAMPLE: LED.EXE: Light Emitting Diode Character Display Sample

	Article: Q175537
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbprogramming kbsample kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	LED.EXE is a Visual Basic control that emulates a light-emitting diode display,
	such as those found in digital clocks and meters. The user can either assign a
	Value to the LED, which will be displayed, or the user can actually assign a
	ValueMask to the LED, which allows for turning on individual segments of the
	LED. You can turn on any of the seven individual segments to allow you to
	display letters or numbers.
	
	The project for this control can be downloaded from the Visual Basic Owner's site
	at http://premium.microsoft.com/download/vbasic/led.exe. Only registered users
	of Visual Basic can access this site.
	
	
	MORE INFORMATION
	================
	
	The following is an excerpt from the readme.txt shipped with the sample that
	covers some of the technical details of this sample.
	
	Definitions
	-----------
	
	The following properties are available with the LED control:
	
	- LEDColorOn - Assigns the OLE_Color that will be used for the LED segments
	  that are on.
	
	- LEDColorOff - Assigns the OLE_Color that will be used for the LED segments
	  that are off.
	
	- ShowBorder - A Boolean that indicates whether or not to draw a border around
	  the control.
	
	- ShowDecimal - A Boolean that indicates whether or not the decimal indicator
	  is on or off.
	
	- ShowDigit - A Boolean that indicates whether the entire LED should be on or
	  off. Setting this to False will provide a "clear" LED, with all segments
	  being set to off.
	
	  NOTE: This does not effect the decimal; use the ShowDecimal to turn the
	  decimal off.
	
	- Value - An integer that holds the value of the LED. If ValueIsMask is set to
	  False, then the range of Value is 0 to 9. If ValueIsMask is set to True, then
	  the range of Value is 0 to 127.
	
	- ValueIsMask - A Boolean that indicates whether the Value property will be
	  used as a single-digit to display on the LED, or that Value is actually a
	  binary-mask, indicating which segments on the LED are to be "turned on".
	
	LED Display
	-----------
	
	This is a diagram of the "mask values" for the LED:
	
	         ---1---
	        |       |
	        |       |
	        8       16
	        |       |
	        |       |
	         ---2---
	        |       |
	        |       |
	        32      64
	        |       |
	        |       |
	         ---4---
	
	To create a "unique" display, just add up the numbers for the segments that you
	want turned on, set ValueIsMask to True, and assign the value to Value. A few
	examples would be:
	
	     A      123
	     C       45
	     E       47
	     F       43
	     H      122
	     -        2
	     _        4
	
	Additional query words: led
	
	======================================================================
	Keywords          : kbfile kbprogramming kbsample kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
