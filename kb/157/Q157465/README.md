---
layout: page
title: "Q157465: WD97: Can't See Field Codes for Some Objects"
permalink: /kb/157/Q157465/
---

## Q157465: WD97: Can't See Field Codes for Some Objects

{% raw %}

	Article: Q157465
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Field codes are not displayed for some linked or embedded objects, such as
	equations, graphs, charts, and so on.
	
	CAUSE
	=====
	
	The object is a floating object, one that is placed on the drawing layer instead
	of inline. By default, objects and pictures are inserted into Word 97 as
	floating objects. This functionality is different from earlier versions of Word,
	in which all objects were inserted inline by default.
	
	WORKAROUND
	==========
	
	You cannot view field codes for floating objects; however, if you convert the
	floating object to an inline object, you can then view its field codes,
	
	NOTE: Using an inline object instead of a floating object may not give you the
	effect that you want in your document.
	
	Converting to an Inline Object
	------------------------------
	
	To convert a floating object or picture to an inline object, follow these steps:
	
	1. Using the right mouse button, right-click the object.
	
	2. On the shortcut menu, click Format Picture or Format Object.
	
	3. Click the Position tab.
	
	4. Click to clear the Float Over Text check box.
	
	5. Click OK.
	
	Viewing Field Codes
	-------------------
	
	You can now view the field codes for the object. To turn all the field codes in
	your document on and off, press ALT+F9, or follow these steps:
	
	1. On the Tools menu, click Options.
	
	2. Click the View tab.
	
	3. Under Show, click to select the Field Codes check box.
	
	4. Click OK.
	
	Inserting Graphic in a Text Box
	-------------------------------
	
	To insert a graphic image in a text box, do the following:
	
	1. On the Insert menu, click Text Box.
	
	2. Draw a text box.
	
	3. Insert the graphic image into the text box.
	
	With this workaround, you do not need to convert the object to an inline object.
	
	MORE INFORMATION
	================
	
	For additional information about floating objects versus inline objects, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q179073 WD: General Information About Viewing and Printing Objects
	
	
	Additional query words: 8.00 equation graph chart worksheet ole object
	
	======================================================================
	Keywords          : kbualink97 kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
