---
layout: page
title: "Q160777: PRB: Displaying Bitmap Has Limitation in Browse Window"
permalink: /kb/160/Q160777/
---

## Q160777: PRB: Displaying Bitmap Has Limitation in Browse Window

{% raw %}

	Article: Q160777
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c,2.6a; WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,3.0,3.0b,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c, 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With an embedded bitmap stored in a general field of a table, you cannot see the
	entire image when you double-click the General field in Browse window.
	
	CAUSE
	=====
	
	The General field has a pre-defined viewable height and width range, so no
	matter how big you try to make the General field window you can see only that
	predefined viewable range. The range varies depending on your screen resolution;
	650x400 pixels are viewable in 1024x768 screen resolution and only 500x290
	pixels can be seen if the screen is setup to 800x600 resolution.
	
	RESOLUTION
	==========
	
	In order to see the complete picture from the general field, issue a command
	like "@.. SAY <General Filed> BMP," or display the bitmap on a form or
	screen.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a table with a General field.
	
	2. Append a blank record.
	
	3. Issue the following command in the Command window:
	
	  " APPEND GENERAL <general Field name> from <bitmap file> "
	  (without the quotation marks)
	
	4. Browse the table.
	
	5. Double-click the General field.
	
	NOTE: The entire image is not displayed.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbFoxPro260aMac kbFoxPro250cMac kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbFoxPro260a kbVFP300 kbVFP300b kbVFP500
	Version           : MACINTOSH:2.5b,2.5c,2.6a; WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,3.0,3.0b,5.0
	
	=============================================================================
	

{% endraw %}
