---
layout: page
title: "Q189505: FIX: Init Event Code to Multilselect List Box Items Fails"
permalink: /kb/189/Q189505/
---

## Q189505: FIX: Init Event Code to Multilselect List Box Items Fails

	Article: Q189505
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp500aBUG kbvfp500bug kbvfp600fix kbXBase kbGrpDSFox
	Last Modified: 15-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use code in the Init event of a form to multi-select items in a list
	box, the items are not correctly selected.
	
	This behavior does not occur in Visual FoxPro version 3.0x.
	
	CAUSE
	=====
	
	This is a timing problem in Visual FoxPro 5.x.
	
	RESOLUTION
	==========
	
	To obtain the proper behavior, you can use a Timer object to control the code
	that you multi-select.
	
	Steps to Use a Timer Object
	---------------------------
	
	1. Create a form with a list box object and name the list box List1.
	
	2. In the Init event of the form , add the following code:
	
	  THIS.Timer1.ENABLED = .T.
	
	3. Add a Timer control to the form and name it Timer1. Set the Interval property
	  to 50.
	
	4. Add the following code to the Timer event of Timer1:
	
	  THISFORM.List1.ADDITEM("Red")
	        THISFORM.List1.ADDITEM("Green")
	        THISFORM.List1.ADDITEM("Blue")
	        THISFORM.List1.MULTISELECT = .T.
	        THISFORM.List1.SELECTED(2) = .T.
	        THISFORM.List1.SELECTED( 3 ) = .T.
	        THIS.INTERVAL = 0
	        THIS.ENABLED = .F.
	
	5. Run the form and note that both the second and third items are properly
	  selected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form with a list box object and name the list box List1.
	
	2. In the Init event of the form add the following code:
	
	  THIS.list1.ADDITEM('red')
	        THIS.list1.ADDITEM('green')
	        THIS.list1.ADDITEM('blue')
	        THIS.list1.MULTISELECT=.T.
	        THIS.list1.SELECTED(2)=.T.
	        THIS.list1.SELECTED(3)=.T.
	
	3. Close and then run the form. Note that the third item has a dotted line
	  around it and the second item is not selected when both items should be
	  selected.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp500aBUG kbvfp500bug kbvfp600fix kbXBase kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
