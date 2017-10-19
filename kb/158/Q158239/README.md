---
layout: page
title: "Q158239: BUG: VCX Corrupted by Saving Two Classes with the Same Name"
permalink: /kb/158/Q158239/
---

## Q158239: BUG: VCX Corrupted by Saving Two Classes with the Same Name

	Article: Q158239
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS: 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbtool kbvfp kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Saving a class with the same name as another class in a .vcx file corrupts the
	.vcx file. Trying to run or open a form containing this class causes Visual
	FoxPro to hang for a while, then the following message appears:
	
	  This program has performed an illegal operation and will be shut down.
	
	In Visual FoxPro 6.0, trying to run or modify the form produces the following
	error message:
	
	  Error loading file-record number x. Mybutton1 < or one of its
	  members>.parent: There is not enough memory to complete this operation.
	
	Another error may also appear that shows this error:
	
	  There is not enough memory to complete this operation.
	
	WORKAROUND
	==========
	
	If you do not type the name of the library in directly, but choose the Browse
	button to select the library, you get the following message that informs you
	that you have already used that name.
	
	  Cannot Modify a class that is in use.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a command button on a form. On the File menu, click Save As Class.
	  Name the button "Mybutton" and the library "Corrupt."
	
	2. Open a new form and add corrupt in the View Classes button.
	
	3. Place Mybutton on the form.
	
	4. Make some changes to the button.
	
	5. Click Save As Class again on the file menu.
	
	6. Name the class Mybutton again.
	
	7. Type Corrupt under Library.
	
	8. Save the form, and close Visual FoxPro.
	
	9. Start Visual FoxPro, and run the form.
	
	The following operations that may also cause a hang followed by the illegal
	operation message:
	
	- Opening a new form placing Mybutton from the .vcx file on the form.
	
	- Trying to modify the form with Mybutton on it.
	
	Opening the .vcx with Mybutton highlighted returns the following message:
	
	  Class mybutton is in use by MODIFY CLASS
	
	Additional query words: kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbtool kbvfp kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS: 5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
