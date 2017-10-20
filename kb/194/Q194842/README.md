---
layout: page
title: "Q194842: BUG: Custom AppWizard Lacks Toolbar Templates for Standard Steps"
permalink: /kb/194/Q194842/
---

## Q194842: BUG: Custom AppWizard Lacks Toolbar Templates for Standard Steps

{% raw %}

	Article: Q194842
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbwizard kbVC600bug kbAppWizard kbCustomWizard kbGrpDSTools
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Custom AppWizard projects based on MFC Standard steps do not have all of the
	toolbar bitmaps copied to the Custom AppWizard's Template directory. Projects
	created from your Custom AppWizard load the missing toolbar bitmaps because they
	exist in the MFC extension DLL Mfcapwz.dll.
	
	RESOLUTION
	==========
	
	No action is required unless you want to customize the missing toolbar bitmaps.
	To customize the missing toolbar bitmaps, you must insert them into the Custom
	AppWizard project.
	
	Steps to Customize Missing Toolbar Bitmaps
	------------------------------------------
	
	1. Open the MFC AppWizard extension DLL by clicking Open on the File menu.
	  Navigate to the ..\MSDev98\bin\ide directory. Click Mfcapwz.dll and select
	  Resources in the OpenAs box. Click OK.
	
	2. Expand the Template directory, right-click on the desired template and select
	  Export. Save the selected file in your Custom AppWizard's Template directory.
	  Close Mfcapwz.dll.
	
	3. In FileView of your workspace window, right-click on the Template Files
	  folder and select Add Files to Folder. Select the file you exported from
	  Mfcapwz.dll and click OK.
	
	4. In ResourceView of your workspace window, right-click on the Template folder
	  and select Import. Select the file exported from Mfcapwz.dll, select Custom
	  in the OpenAs box and click Import. Specify the Resource type as TEMPLATE in
	  the dialog box and click OK.
	
	5. The new template is called IDR_TEMPLATE1. Rename the template by
	  right-clicking on the template and selecting Properties. Enter the name of
	  the file in the ID box.
	
	  NOTE: The name must be placed in quotes or you will receive an invalid
	  character error.
	
	  You may now customize the bitmap.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The following files are correctly copied into your Custom AppWizard's Template
	directory:
	
	  TBA__.BMP
	  TBA_I.BMP
	  TBAH_.BMP
	  TBAHI.BMP
	  TBD__.BMP
	  TBDH_.BMP
	  TBR__.BMP
	  TBR_I.BMP
	  TBRH_.BMP
	  TBRHI.BMP
	
	The Template directory should also contain the following files:
	
	  TBEA_.BMP
	  TBEAH.BMP
	  TBED_.BMP
	  TBEDH.BMP
	  TBEND.BMP
	  TBER_.BMP
	  TBERH.BMP
	  TBEX_.BMP
	  TBND_.BMP
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Custom AppWizard based on MFC Standard steps, with one custom
	  step.
	
	2. Verify the presence of the files listed above in the Custom AppWizard's
	  Template directory.
	
	REFERENCES
	==========
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q190977 BUG: Custom AppWizard Generates Incorrect Toolbars and Bitmaps
	
	  Q190518 BUG: MFC AppWizard Generates Incorrect Toolbars and Bitmaps
	
	Please see the following topics in the online documentation in Visual C++ 6.0:
	
	  MSDN Library 6.0: Visual C++ Documentation; Using Visual C++; Visual C++
	  Programmer's Guide; Beginning Your Program; Creating A Custom AppWizard;
	  Creating Custom AppWizards; Understanding Custom Resource Templates;
	  Understanding Custom Resource Templates
	
	  MSDN Library 6.0: Visual C++ Documentation; Using Visual C++; Visual C++
	  Programmer's Guide; Beginning Your Program; Creating A Custom AppWizard;
	  Creating Custom AppWizards; Understanding Custom AppWizards
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbVC600bug kbAppWizard kbCustomWizard kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
