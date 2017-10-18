---
layout: page
title: "Q183883: WD97: Updating Cross References Causes Object Duplication"
permalink: kb/183/Q183883/
---

## Q183883: WD97: Updating Cross References Causes Object Duplication

	Article: Q183883
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbfile kbgraphic
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you update cross references to captions of objects in frames, those objects
	are duplicated at every updated cross reference to that object.
	
	CAUSE
	=====
	
	The object is anchored to the same paragraph as the caption.
	
	WORKAROUND
	==========
	
	To prevent the duplication of the object, when you frame an object that is being
	captioned, make sure that the anchor of the frame is not tied to the same
	paragraph as the caption. To do this, follow these steps:
	
	1. View the nonprinting characters:
	
	  a. On the Tools menu, click Options.
	
	  b. Click the View tab.
	
	  c. Under Nonprinting Characters, select All.
	
	  d. Click OK.
	
	2. Select the frame of the table.
	
	  NOTE: You will see an anchor in the left margin.
	
	3. If the anchor for the frame is in the same paragraph as the caption to the
	  object, point to the anchor and drag it to another paragraph.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem has been corrected in Word 2000.
	
	MORE INFORMATION
	================
	
	For additional information about caption problems, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q161868 WD97: Captions in Text Boxes Not Updated Correctly
	
	  Q123430 WD: How to Insert a Caption Next to an Equation or Object
	
	  Q168913 WD97: Cannot Insert a Caption Inside a Table Cell
	
	  Q169929 WD97: Captions Update to Zero If Grouped with Objects
	
	  Q120280 WD: Cross Reference to Caption Includes Too Much Text
	
	
	Additional query words: word97 word8
	
	======================================================================
	Keywords          : kbfile kbgraphic 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
