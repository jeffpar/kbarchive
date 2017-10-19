---
layout: page
title: "Q193077: FIX: Passing Array to Init with Addobject Passes First Element"
permalink: /kb/193/Q193077/
---

## Q193077: FIX: Passing Array to Init with Addobject Passes First Element

	Article: Q193077
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to add an object at run-time to a second object with the second
	object's AddObject method, the added object receives an array as a parameter to
	it's Init method. Then when you attempt to pass the array to the Init method by
	reference, it is not passed as an array, instead the first element is passed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.PRG) file:
	
	        LOCAL loCustObj, laTest[3]
	
	        Clear
	
	        * Populate array.
	        laTest[1] = 'One'
	        laTest[2] = 'Two'
	        laTest[3] = 'Three'
	
	        * Pass array to cst1 Init by reference in CREATEOBJECT()
	        loCustObj = CREATEOBJECT('cst1', @laTest)
	
	        * Pass array to cst1 Init by reference in AddObject()
	        loCustObj.AddObject('cst2','cst1', @laTest)
	
	        ?loCustObj.aprop[2]
	        ?loCustObj.cst2.aprop[2]
	
	        DEFINE CLASS cst1 AS custom
	
	           DIMENSION aprop[1]
	
	        PROC Init
	           LPARAMETER taArray
	           * Error "'TAARRAY' is not an array." occurs here from AddObject
	           =ACOPY(taArray, this.aprop)
	        ENDPROC
	
	        ENDDEFINE
	
	An error dialog displays with the following error:
	
	  'TAARRAY' is not an array.
	
	This occurs on the ACOPY() function, when the array is being passed from the
	AddObject() method. The array is passed correctly from the CREATEOBJECT()
	function. The array is passed correctly from the AddObject() method under Visual
	FoxPro 6.0.
	
	If you wish to pass an entire array instead of a particular element to a method
	or function in Visual FoxPro, you must pass it by reference. This is
	accomplished by preceding the arrayname with an @ sign, or using the SET UDFPARM
	command.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words: kbVFp600fix kbVFp500abug kbOOP
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
