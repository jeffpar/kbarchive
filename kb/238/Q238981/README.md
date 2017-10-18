---
layout: page
title: "Q238981: HOWTO: Passing Optional Parameters When Calling a Function"
permalink: kb/238/Q238981/
---

## Q238981: HOWTO: Passing Optional Parameters When Calling a Function

	Article: Q238981
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:97; Win95:7.0; winnt:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbVCkbfaq
	Last Modified: 21-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you call a method that has optional parameters from Visual C++, you cannot
	omit the optional parameters. You need to pass a special VARIANT instead.
	
	MORE INFORMATION
	================
	
	Some methods have "optional" parameters. In Visual Basic, you can omit them when
	calling the method. However, when calling with Visual C++, you have to pass a
	special VARIANT whose .vt field has the value VT_ERROR, and .scode field has the
	value DISP_E_PARAMNOTFOUND. That is:
	
	        // VARIANT used in place of optional-parameters.
	        VARIANT varOpt;
	        varOpt.vt = VT_ERROR;
	        varOpt.scode = DISP_E_PARAMNOTFOUND; 
	
	This is what Visual Basic is doing behind-the-scenes.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVC kbfaq
	Technology        : kbVCsearch kbVC400 kbOutlookSearch kbOfficeSearch kbAudDeveloper kbOffice97Search kbOutlook98Search kbOffice95Search kbOffice95 kbOffice97 kbZNotKeyword3 kbVC32bitSearch kbVCPE500 kbVCPE600 kbVCEE500 kbVCEE600 kbVCLE600
	Version           : WINDOWS:97; Win95:7.0; winnt:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
