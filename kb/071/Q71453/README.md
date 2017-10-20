---
layout: page
title: "Q71453: Using a Wacom HD-648A Tablet with Pen Windows"
permalink: /kb/071/Q71453/
---

## Q71453: Using a Wacom HD-648A Tablet with Pen Windows

{% raw %}

	Article: Q71453
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
	
	To use a Wacom HD-648A tablet with Windows for Pen Computing, you must modify
	options on the hardware menu. The information below lists the settings necessary
	for the tablet to be compatible with Pen Windows.
	
	MORE INFORMATION
	================
	
	Perform the following six steps to set up the tablet:
	
	1. Activate the Wacom settings menu by gently resting the tip of the pen against
	  the screen and pressing the RESET button under the top of the tablet.
	
	  The Wacom menu will appear with three choices:
	
	  PEN ADJ -- Adjust the arrow cursor with the tip of the pen
	  FUNC SET -- Main settings menu
	  JAP/ENG -- Japanese or English menus
	
	2. Choose FUNC SET. Another menu appears:
	
	  TABLET | VIDEO | BACK LIGHT | MACRO | MAINTENANCE
	
	3. Choose the TABLET menu and modify each of the parameters as follows:
	
	  COMM = "WACOMHD" (without the quotation marks)
	  FORMAT = "BIN" (without the quotation marks)
	  MODE = "STREAM" (without the quotation marks)
	  COORD = "ABS" (without the quotation marks)
	  ALWAYS = "DSB" (without the quotation marks)
	  BAUDRATE = "19200" (without the quotation marks)
	  PARITY = "NONE" (without the quotation marks)
	  STOP BIT = "1" (without the quotation marks)
	  DATA BIT = "8" (without the quotation marks)
	  TRMNTR = "CRLF" (without the quotation marks)
	  REPORT RATE = "100" (without the quotation marks)
	  MM/INCH = "INCH" (without the quotation marks)
	  BUZZER = "OFF" (without the quotation marks)
	  ORIGIN = "UPPER LEFT" (without the quotation marks)
	  DSR = "DSB" (without the quotation marks)
	
	4. Choose the VIDEO menu and modify each of the parameters as follows:
	
	  RGB SIGNAL = "G (disregard R and B)" (without the quotation marks)
	  DISPLAY MODE = "POS" (without the quotation marks)
	  MODEL = "PS/2" (without the quotation marks)
	
	5. Choose the BACK LIGHT menu and modify each of the parameters as follows:
	
	  AUTO LIGHT OFF TIME = "5min" (without the quotation marks)
	  BRIGHT ON LIGHT OFF = "10%" (without the quotation marks)
	
	6. Choose the MAINTENANCE menu and modify each of the parameters as follows:
	
	  HORIZON = "45" (without the quotation marks)
	  VERTICAL = "33" (without the quotation marks)
	  PLL.CNT = "94" (without the quotation marks)
	  DOTDLCOK = "DOWN" (without the quotation marks)
	  ANALOG RGB LEVEL
	  R = "18" (without the quotation marks)
	  G = "18" (without the quotation marks)
	  B = "18" (without the quotation marks)
	
	After making these changes, if the video output is not satisfactory, modify the
	parameters on the VIDEO and MAINTENANCE menus to fine tune the output for your
	machine.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinPenSearch kbZNotKeyword3 kbWinPen100
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
