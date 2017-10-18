---
layout: page
title: "Q149237: BUG: 4 Class Wizard Problems w/ International System Settings"
permalink: kb/149/Q149237/
---

## Q149237: BUG: 4 Class Wizard Problems w/ International System Settings

	Article: Q149237
	Product(s): Microsoft C Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbwizard kbMFC kbVC150bug kbVC151bug kbVC152bug kbVC200bug kbVC210bug kbVC220bug kbVC40
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Foundation Classes (MFC), version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Specifying an international setting for Windows that uses a comma (,) as the
	decimal separator in floating point numbers can cause the following four
	separate problems when you use the ClassWizard to generate DDV routines for
	dialog controls.
	
	NOTE: The four problems are labeled A, B, C, and D in this article. Problem A
	occurs at execution time. The other three (B, C, and D) occur during development
	time when using ClassWizard.
	
	a. The DDV routine will only accept input for floating point numbers that use
	  the period decimal point. Using the comma generates the standard dialog
	  message requesting that you enter a number.
	
	b. If you attempt to enter a validation range for a floating point number using
	  the period (.) decimal separator (the US standard), Class Wizard generates
	  the following error:
	
	  The argument specified for DDV is not valid.
	
	c. ClassWizard will accept the comma decimal separator at design time, but when
	  the code is compiled, you may get the following errors:
	
	  - error C2059: syntax error : 'bad suffix on number'
	
	  - error C2146: syntax error : missing ')' before identifier 'f'
	
	  - warning C4244: 'function' : conversion from 'const int' to
	  'float', possible loss of data
	
	  - error C2059: syntax error : ')'
	
	d. If you attempt to bring up Class Wizard on the dialog without modifying the
	  DDV code, you will see the error:
	
	  Parsing error: Expected ")".
	  Input line: DDV_MinMaxFloat(pDX, m_MyVar, -3,14000f, 3,14000f);
	
	  The ClassWizard will show no controls or variables for the dialog in its
	  listbox.
	
	CAUSE
	=====
	
	a. The DDX/DDV routines use a C-runtime locale by default. This assumes that the
	  decimal separator is always a period. This is by design.
	
	b. This behavior is by design. ClassWizard uses the international settings to
	  determine the valid decimal separator.
	
	c. This behavior is a bug in ClassWizard. Using the comma decimal separator,
	  ClassWizard generates DDV code similar to the following:
	
	        // DDV for a float variable between -3,14 and +3,14.
	        DDV_MinMaxFloat(pDX, m_MyVar, -3,14000f, 3,14000f);
	
	  The commas in -3,14000f and 3,14000f are interpreted as parameter separators
	  which makes this line invalid.
	
	d. This behavior is a side effect of problem B. It can be corrected by using the
	  workaround described in the resolution section.
	
	RESOLUTION
	==========
	
	a. DDX_Text(..., float&) uses the UNICODE version of strtod (tcstod) to
	  convert the number. This is a C run-time function, therefore the C run-time
	  locale is used. If the application calls the setlocale function (as shown
	  below), the local will be synchronized with the system locale, and the
	  DDX_Text call will work as expected. This call to setlocale() should be
	  performed immediately after the application starts, for example in the
	  InitInstance method of the CWinApp derived class.
	
	     #include <locale.h>
	
	     CMyApp::InitInstance()
	     {
	          setlocale( LC_ALL, "" );
	          ...
	     }
	
	b. This is by Design. Enter floats using the locale's decimal separator which in
	  this case is a comma.
	
	c. This problem can also be solved manually by replacing the commas in the DDV
	  function calls with periods as shown here:
	
	     // DDV for a float variable between -3,14 and +3,14.
	     DDV_MinMaxFloat(pDX, m_MyVar, -3.14000f, 3.14000f);
	
	d. After problem C is solved, the DDV macro should be moved out of the
	  ClassWizard brackets or ClassWizard will report an error when it tries to
	  parse the code. This is a related problem in ClassWizard.
	
	  If you do not move the DDV macro, you bring up the same dialog in ClassWizard
	  again, and you examine the validation range for your float variable, the
	  ranges will be shown with the period decimal separator. Choosing OK will once
	  again generate the error:
	
	  The argument specified for DDV is not valid.
	
	  If you need to change the validation ranges, you must manually edit the DDV
	  code again. If the validation ranges are acceptable as entered, choose Cancel
	  on the ClassWizard dialog when prompted with the error message.
	
	STATUS
	======
	
	Problems A and B are by design.
	
	Microsoft has confirmed that problems C and D are bugs in the Microsoft products
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The following regional settings taken from the Windows 95 Control Panel applet
	are affected by these bugs:
	
	- Basque, Catalan, Danish, Finnish, Icelandic, Indonesian, Swedish
	
	- Dutch (Belgian and standard)
	
	- French (Belgian, Canadian, Luxembourg and standard, but NOT Swiss)
	
	- German (Austrian, Luxembourg and standard, but NOT Liechtenstein or Swiss)
	
	- Italian (standard, but NOT Swiss)
	
	- Norwegian (Bokmal and Nynorsk)
	
	- Portuguese (Brazil and Portugal)
	
	- Spanish (Argentina, Chile, Modern Sort, Paraguay, Peru, Traditional Sort,
	  Uruguay and Venezuela, but not Colombia, Costa Rica, Dominican Republic,
	  Ecuador, Guatemala, Mexico or Panama)
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open the Windows Control Panel.
	
	  In Windows 3.X or Windows NT:
	
	  a. Run the International applet.
	
	  b. Change the country setting to Germany.
	
	  In Windows 95:
	
	  a. Run the Regional Settings applet
	
	  b. Change Regional Settings to German (standard)
	
	2. Create a default AppWizard application.
	
	3. Add a dialog that contains an edit control.
	
	4. Bring up Class Wizard and add a Member Variable for the edit control with a
	  Category of value and a type of float.
	
	5. Enter a validation range containing decimals.
	  a. Run the application, and try to enter a float with a decimal point to see
	     problem A.
	
	  b. Enter a validation range using a period decimal separator and try to exit
	     ClassWizard to see problem B.
	
	  c. Enter a validation range using a comma decimal separator and compile to
	     see problem C.
	
	  d. Exit ClassWizard and bring it back up on the same dialog after changing
	     the commas to periods as specified in the resolution of problem D.
	
	Additional query words: European Control Panel Localized
	
	======================================================================
	Keywords          : kbwizard kbMFC kbVC150bug kbVC151bug kbVC152bug kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410bug kbVC420bug kbGrpDSTools 
	Technology        : kbAudDeveloper _IKkbbogus kbMFC
	Version           : :1.0
	Issue type        : kbbug
	
	=============================================================================
	
