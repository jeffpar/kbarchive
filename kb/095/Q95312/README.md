---
layout: page
title: "Q95312: Default Selection of Radio Button with @ ... GET Command"
permalink: /kb/095/Q95312/
---

## Q95312: Default Selection of Radio Button with @ ... GET Command

{% raw %}

	Article: Q95312
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MACINTOSH:2.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For a radio button, the GET clause designates a variable, <varN>, which
	must be declared prior to issuing the @ ... GET command. <varN> may be a
	numeric memory variable or a numeric field in a database. If the value of
	<varN> is outside the range of the buttons, the first radio button on the
	screen will be selected.
	
	MORE INFORMATION
	================
	
	The "Fox Report Forum" manual for version 2.01 incorrectly states under
	"Defining Radio Buttons" on page 5-28 that if the value of <varN> is given
	outside the range of the buttons (1 to n) then no buttons are selected until the
	user selects one. To achieve this effect, the command SET VER11 ON must precede
	the @ ... GET command for the radio button.
	
	The following example illustrates the displayed default button when the numeric
	value of <varN> is outside the range of the buttons. No radio button will
	be displayed as selected upon execution of the program.
	
	     ** <varN> is x in this example
	
	     STORE 5 TO x
	     SET VER11 ON
	     SCREEN 1 TOP
	     CLEAR
	     @ 4,5 GET x PICTURE "@*R First;Second;Third"
	     READ
	
	     SET VER11 OFF
	
	Additional query words: 2.01 foxbase+/mac buttons popup numeric gets
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASESearch
	Version           : MACINTOSH:2.01
	
	=============================================================================
	

{% endraw %}
