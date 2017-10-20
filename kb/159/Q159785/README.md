---
layout: page
title: "Q159785: DOCERR: Copying Classes with the Class Browser"
permalink: /kb/159/Q159785/
---

## Q159785: DOCERR: Copying Classes with the Class Browser

{% raw %}

	Article: Q159785
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In steps 3 and 4 of the instructions on how "To copy a class from one class
	library to another," the "Managing Classes With The Class Browser" Help topic in
	the Visual FoxPro 5.0 Help file incorrectly states the following:
	
	  Step 3 "In the source class library, select the class you want to copy, and
	  then drag the class icon picture located above the class list to the class
	  icon picture in the destination library. The cursor appears with a plus sign
	  when you are over the destination class icon."
	
	  Step 4 "In the dialog box that opens, choose Yes to move the class, No to copy
	  the class, or Cancel to prevent changes to either library."
	
	MORE INFORMATION
	================
	
	To copy a class from one class library to another using the Class Browser, hold
	down the Control key while dragging the class from the source instance of the
	Class Browser to the other. A dialog box does not appear as indicated in step 4
	above. The Status Bar indicates that the class is being copied. If the Control
	key is not held down, the Status Bar indicates that the class is being moved.
	
	This also applies to the "To copy multiple classes from one class library file to
	another" Help topic.
	
	REFERENCES
	==========
	
	For additional information about the Class Browser in Visual FoxPro 5.0, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q156173 How To Use the New Class Browser in Visual FoxPro 5.0
	
	
	Additional query words: kbdsd vfoxwin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	
	=============================================================================
	

{% endraw %}
