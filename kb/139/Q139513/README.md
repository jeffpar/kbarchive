---
layout: page
title: "Q139513: DOCERR: DocumentFile Property Returns &quot; &quot; For Embedded Objects"
permalink: /kb/139/Q139513/
---

## Q139513: DOCERR: DocumentFile Property Returns &quot; &quot; For Embedded Objects

	Article: Q139513
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Following is the description that the Visual FoxPro documentation gives for the
	DocumentFile Property:
	
	  Returns the name of the file from which an embedded or linked object was
	  created.
	
	This is incorrect. Only the linked objects return the name of an object; embedded
	objects return " ".
	
	MORE INFORMATION
	================
	
	Steps to Demonstrate Behavior
	-----------------------------
	
	1. Type the following line of code in the Command window:
	
	     MODIFY FORM test
	
	2. Place an OLE Container control on the form.
	
	3. On the Insert Object dialog box, click Create From File, and select
	  C:\Windows\Bubbles.bmp to create an embedded file. (You can use any .doc file
	  as well.)
	
	4. Place a second OLE Container control on the form, and insert a file as you
	  did in step 3. This time, create a linked Object using the same graphic file
	  (for example, C:\Windows\Bubbles.bmp) by selecting the Link check box in the
	  Insert Object dialog box. (You can use any .doc file as well.)
	
	5. Type the following lines of code in the Debug window:
	
	     test.olecontrol1.documentfile
	     test.olecontrol2.documentfile
	
	For the expression, "test.olecontrol1.documentfile" (the embedded file), you
	receive "". For the expression, "test.olecontrol2.documentfile" (the linked
	file), you receive C:\Windows\Bubbles.bmp.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
