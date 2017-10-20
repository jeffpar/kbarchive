---
layout: page
title: "Q155463: BUG: Report Preview with Form's Name Clears Object Reference"
permalink: /kb/155/Q155463/
---

## Q155463: BUG: Report Preview with Form's Name Clears Object Reference

{% raw %}

	Article: Q155463
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbdisplay kbother kbprogramming kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Issuing a REPORT FORM PREVIEW command on a report that has the same file name as
	a form that is running causes the form to lose its object reference. If you
	attempt to reference the form object in code, this error message appears:
	
	  Object not found
	
	WORKAROUND
	==========
	
	If you have a form called Customer and issue the following command, an object
	reference named Customer is created for the form:
	
	     DO FORM Customer
	
	Preview a report named Customer by issuing the following command:
	
	     REPORT FORM Customer PREVIEW
	
	The customer object now references the Report Preview window. When the Report
	Preview window is closed, the customer object is released. Work around this
	problem by giving your forms a different object reference than the reports with
	the same name. Do this by using the NAME clause in the DO FORM command. For
	example, to give the Customer Form an object reference of Custform, you would
	issue the following command:
	
	     DO FORM Customer NAME Custform
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a report using the Customer.dbf file in the Vfp\Samples\Data folder.
	
	2. Save the report as Customer.
	
	3. Create a new form.
	
	4. Add two command buttons to the form.
	
	5. In the Click event of the first command button, add the following code:
	
	        Customer.Caption = "Change Me"
	
	6. In the Click event of the second command button, add the following code:
	
	        REPORT FORM Customer PREVIEW
	
	7. Save the form as Customer.
	
	8. Run the Customer form and click the first command button, then click the
	  second command button.
	
	9. Close the Print Preview window and then click the first command button again.
	
	Additional query words: kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbvfp300bug kbvfp300bbug kbvfp500bug kbvfp500abug kbvfp600bug
	
	======================================================================
	Keywords          : kbdisplay kbother kbprogramming kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
