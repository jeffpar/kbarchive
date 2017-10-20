---
layout: page
title: "Q97600: Printed Colors Different than on Screen: Blue is Purple, etc."
permalink: /kb/097/Q97600/
---

## Q97600: Printed Colors Different than on Screen: Blue is Purple, etc.

{% raw %}

	Article: Q97600
	Product(s): Microsoft Windows Printing Issues
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may notice that the colors on your screen and the colors that you print look
	different; for example, blue becomes purple and red becomes orange. This is not
	a problem with your printer driver, with Microsoft Windows, or with your
	printer.
	
	MORE INFORMATION
	================
	
	Many Windows color printer drivers were designed using the cyan-magenta-
	yellow-black (CMYK) color model. (You can tell if your printer uses this model
	by looking at the ribbon. If it has four bands of blue, red, yellow and black,
	its associated Windows printer driver probably uses the CMYK model.)
	
	The CMYK model uses subtractive primary colors rather than additive primary
	colors. The most common additive model is red-green-blue (RGB). An additive
	model adds colors together to create the desired color. For example, to create
	white, RGB adds all the colors together. To create black, RGB adds no colors,
	leaving the screen (or whatever media) black.
	
	The CMYK model subtracts cyan, magenta, yellow, and black to create the desired
	color. So, to create black, CMYK uses all the colors. To create white, it uses
	no colors. This method is well-suited to printing on paper.
	
	Because your computer monitor is using RGB and your printer is using CMYK, the
	results will differ. To better print primary colors, like blue or red, choose
	cyan or magenta respectively. For other colors, some experimentation may be
	necessary.
	
	REFERENCES
	==========
	
	Microsoft Press Computer Dictionary
	
	
	Additional query words: wfw wfwg 3.00 3.00a 3.10 WPS 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
