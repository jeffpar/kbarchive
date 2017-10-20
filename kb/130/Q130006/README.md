---
layout: page
title: "Q130006: PRB: Creator Type Not TEXT with FCREATE If Extension Not .TXT"
permalink: /kb/130/Q130006/
---

## Q130006: PRB: Creator Type Not TEXT with FCREATE If Extension Not .TXT

{% raw %}

	Article: Q130006
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The FCREATE() low level file function is used to create a text file that doesn't
	have a file extension of .TXT. The Icon for the text file is just a document,
	not a document with a FoxPro head on it. Get Info on the file shows that it is a
	FoxPro file however. If the file is opened in a resource editor, such as
	ResEdit, the Creator is FOXX but the Type is ????.
	
	If the text file is created with a file extension of .TXT, it will have an icon
	of a document with a FoxPro head on it. A resource editor will show the Type as
	TEXT.
	
	Customers have reported that not having a Type of TEXT has been known to cause
	problems with certain software packages that use the text file.
	
	CAUSE
	=====
	
	FoxPro for Macintosh looks at file extensions when assigning Creator Types to
	files. The .TXT extension along with the .FPM extension on the CONFIG.FPM file
	are the only file extensions that get assigned a Creator Type of TEXT. See page
	402 of the Microsoft FoxPro for Macintosh "Developer's Guide" for a listing of
	File Types and Extensions. If you have Visual FoxPro for Macintosh version 3.0,
	search for File Extensions in the on-line Help.
	
	WORKAROUND
	==========
	
	Create the text file with a .TXT file extension, and then use the RENAME command
	to change the extension. See the sample code in the "Steps to Reproduce
	Behavior" section of this article.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Put the following code in a new program file and run it.
	
	     x=FCREATE("test.xxx")
	     =FPUTS(x,"Hello")
	     =FPUTS(x,"Goodbye")
	     =FCLOSE(x)
	
	2. Go to Finder and look at the icon of test.xxx. It should just be a document.
	  If a resource editor is available, use it to check the Creator and Type of
	  the file. The Type should show up as ????.
	
	3. Put the following code in a new program file and run it.
	
	     x=FCREATE("test.txt")
	     =FPUTS(x,"Hello")
	     =FPUTS(x,"Goodbye")
	     =FCLOSE(x)
	     RENAME "test.txt" TO "test.xxx"
	
	4. Go to Finder and look at the icon of test.xxx. It should now be a document
	  with a FoxPro head on it. If a resource editor is available, use it to check
	  the Creator and Type of the file. The Type should show up as TEXT.
	
	Note that the FxSetType() function in the FOXTOOLS.MLB (FOXTOOLS.CFM or
	FOXTOOLS.SLM with Visual FoxPro for Macintosh) library will not change the
	creator type to TEXT.
	
	Rebuilding the desktop on the Macintosh should not undo the Type after the file
	extension is changed with the RENAME command. However, it may be a good idea to
	avoid doing this until the text file has been used for its purpose.
	
	Additional query words: vFoxMac FoxMac 3.00b 2.60a
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.6a,3.0b
	
	=============================================================================
	

{% endraw %}
