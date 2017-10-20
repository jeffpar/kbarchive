---
layout: page
title: "Q100444: How To Programmatically Embed and Link Part of a File"
permalink: /kb/100/Q100444/
---

## Q100444: How To Programmatically Embed and Link Part of a File

{% raw %}

	Article: Q100444
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5x,2.6x,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The APPEND GENERAL command embeds or links an entire source file. To embed or
	link part of a file, select the part of the source file you want to embed or
	link, copy the text to the Windows Clipboard, and in FoxPro choose Paste or
	Paste Special from the Edit menu.
	
	MORE INFORMATION
	================
	
	The following steps can be used to perform this operation programmatically:
	
	1. Open the server application for the file you want to link or embed in a
	  FoxPro general field.
	
	2. In the server application, open the file you want to link or embed.
	
	3. Select the information that you want to link or embed.
	
	4. Copy the selection to the Windows Clipboard.
	
	5. In FoxPro for Windows, run the following code:
	
	        USE C:\FOXPROW\SAMPLE\OLE\OLETABLE
	        APPEND BLANK
	        MODIFY GENERAL object NOWAIT
	
	        KEYBOARD "{ALT+E}"
	
	        x = 1           && Begin delay loop.
	        DO WHILE x < 10
	          x = x + 1
	        ENDDO           && End delay loop.
	
	        KEYBOARD "{S} {L}"
	
	  To embed data, the command listed above should be KEYBOARD "{S} {P}".
	
	6. In Visual FoxPro for Windows, use one of the following methods:
	
	   - To embed data, run the following code:
	
	           CREATE TABLE lnktest (OBJECT G)
	           USE lnktest
	           APPEND BLANK
	           MODIFY GENERAL object NOWAIT
	           KEYBOARD "{ALT+E}"
	           x = 1           && Begin delay loop.
	           DO WHILE x < 10
	             x = x + 1
	           ENDDO           && End delay loop.
	           KEYBOARD "{S} {Alt+P} {Enter}"
	
	   - To link data, run the following code:
	
	           CREATE TABLE lnktest (OBJECT G)
	           USE lnktest
	           APPEND BLANK
	           MODIFY GENERAL OBJECT NOWAIT
	           KEYB '{ALT+E}{S}{TAB}{TAB}{TAB}{TAB}{TAB}{DNARROW}{ENTER}'
	
	NOTE: Be sure that the "object" specified in "MODIFY GENERAL object NOWAIT" is
	the field name from the table.
	
	The above code links the contents of the Windows Clipboard to a new record. To
	embed the contents of the Clipboard, change the last KEYBOARD command to
	KEYBOARD "{S} {P}".
	
	The delay loop is needed to ensure that FoxPro interprets the keystrokes
	properly. Depending on your CPU's processor speed and the amount of memory
	available to FoxPro, you many need to make the delay loop longer.
	
	Additional query words: VFoxWin FoxWin 2.50 2.50a 2.50b 2.60 2.60a
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbVFP300
	Version           : WINDOWS:2.5x,2.6x,3.0
	
	=============================================================================
	

{% endraw %}
