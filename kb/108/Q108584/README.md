---
layout: page
title: "Q108584: FIX: Handling of Invalid Values in Class Wizard for DDX/DDV"
permalink: /kb/108/Q108584/
---

## Q108584: FIX: Handling of Invalid Values in Class Wizard for DDX/DDV

{% raw %}

	Article: Q108584
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0
	Operating System(s): 
	Keyword(s): kbMFC kbVC kbVC100bug kbVC150bug kbVC200bug kbVC210fix kbClassWizard kbGrpDSMFCATLkbbug
	Last Modified: 08-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 1.5 
	- Microsoft Visual C++, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the Class Wizard included with Visual C++ to associate a member variable
	with a control on a dialog box causes the minimum and maximum values to be
	treated differently depending upon different variable types.
	
	RESOLUTION
	==========
	
	Currently, there is no workaround for the inconsistent auto-correction.
	Furthermore, once the auto-correction feature has changed a float or double to
	use scientific notation Class Wizard will fail when trying to modify the
	attributes of the control. The code with the scientific notation must be
	manually changed to a non-scientific floating point value to continue.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 2.1.
	
	MORE INFORMATION
	================
	
	When specifying that a variable will be of type int or uint, providing a value
	greater than its limit (see below) will cause an error to be displayed. However,
	setting a value that is over the limit for a long or DWORD is automatically
	corrected to the maximum value achievable in either direction.
	
	The following table details the behavior of these types for both the 16- and
	32-bit editions:
	
	  Min. Limit    Type    Max. Limit   Correction
	  ---------------------------------------------------------------------
	
	  -32768        int     32767        Warns user
	  0             uint    65535        Warns user
	  -2147483647   long    2147483647   Automatic
	  0             DWORD   4294967295   Automatic
	
	NOTE: For the 32-bit edition, the maximum negative value allowed for a long is
	-2147483648.
	
	There is an additional complication for variables of type float and double. Not
	only do they auto-correct, they also correct to a value given in scientific
	(exponential) format, which Class Wizard cannot parse. Class Wizard can save a
	value in that format but gives an error the next time the user tries to load
	Class Wizard for the same project. The Class Wizard will then appear but with no
	Class information. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q107465 FIX: Class Wizard Floating-Point Parsing Errors
	
	The following table details the limits of types float and double for the 16- and
	32-bit editions:
	
	  Min. Limit               Type     Max. Limit
	  ----------------------------------------------------------------------
	
	  -1.79769e+308            float    1.79769e+308
	  -1.79769313486232e+308   double   1.79769313486232e+308
	
	IMPORTANT NOTE: The 16-bit edition auto-corrects these values if the user-
	specified value exceeds them. However, the 32-bit edition sets the value to
	1.#INF if the user-specified value exceeds the above limits for variables of
	type float or double.
	
	Additional query words: 1.00 1.50 2.00 kbNoUpdate
	
	======================================================================
	Keywords          : kbMFC kbVC kbVC100bug kbVC150bug kbVC200bug kbVC210fix kbClassWizard kbGrpDSMFCATL kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbvc150 kbvc100 kbVC200
	Version           : :1.0,1.5,2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
