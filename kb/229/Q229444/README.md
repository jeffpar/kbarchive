---
layout: page
title: "Q229444: WD97: Word 2000 HTML File Opens as Text Only in Word 97"
permalink: /kb/229/Q229444/
---

## Q229444: WD97: Word 2000 HTML File Opens as Text Only in Word 97

{% raw %}

	Article: Q229444
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbconversion
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Word 97 to open a Hypertext Markup Language (HTML) file
	that was created in Microsoft Word 2000, Word 97 opens the file as text only or
	displays a dialog box prompting you to open the file as text only.
	
	CAUSE
	=====
	
	If the "Confirm conversion at Open" check box is not selected (click Options on
	the Tools menu, and then click the General tab), Word 97 opens the file as text
	only. If this option is selected, Word 97 displays the Convert File dialog box,
	prompting you to select the file format.
	
	The converter that Word 97 uses to open HTML files interprets the file as text
	only. Because the converter was developed before Word 2000 shipped, the
	converter does not recognize some of the information in the HTML file that Word
	2000 creates. The converter does not interpret the file as an HTML file and
	opens the file as text only by default.
	
	RESOLUTION
	==========
	
	To open the file as HTML, select the "Confirm conversion at Open" check box.
	Then you are prompted to select the file format. To do this, follow these
	steps:
	
	1. Start Word 97. Make sure you have at least one document open.
	
	2. On the Tools menu, click Options.
	
	3. Click the General tab.
	
	4. Click to select the "Confirm conversion at Open" check box. Click OK.
	
	When you attempt to open the HTML file, the Convert File dialog box appears. In
	the list of file formats, select HTML Document and click OK.
	
	MORE INFORMATION
	================
	
	
	Additional query words: OFF2000 conversion translation translate translating translated converted convert incorrect wrong hyper text
	
	======================================================================
	Keywords          : kbdta kbconversion 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
