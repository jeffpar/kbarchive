---
layout: page
title: "Q138044: How to Add an Existing Form to a FormSet"
permalink: /kb/138/Q138044/
---

## Q138044: How to Add an Existing Form to a FormSet

	Article: Q138044
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you create a FormSet, there is no obvious way to add an existing form to
	the FormSet. This article shows you how to do it.
	
	MORE INFORMATION
	================
	
	To add MyForm to the FormSet, follow these steps:
	
	1. Open MyForm.
	
	2. On the File menu, click Save As Class, and click Save Form.
	
	3. Give the new class a name and a file to be stored in.
	
	4. Close MyForm.
	
	5. With the FormSet active, click View Classes on the Form Designer toolbar, and
	  then click Add.
	
	6. Select the .VCX file you saved the MyForm class in, and click Open.
	
	7. Select the toolbar representation of MyForm, and drop the form onto the
	  FormSet.
	
	This adds a class instance of MyForm to the FormSet.
	
	REFERENCES
	==========
	
	Developer's Guide pages 260 and 271.
	
	Additional query words: VFoxWin akz
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
