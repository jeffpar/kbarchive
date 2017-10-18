---
layout: page
title: "Q135754: BUG: ListBox Does Not Refresh Properly with SET FILTER Command"
permalink: kb/135/Q135754/
---

## Q135754: BUG: ListBox Does Not Refresh Properly with SET FILTER Command

	Article: Q135754
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS: 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbtool kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A listbox displaying fields from a table is not refreshed correctly when the
	following commands are issued:
	
	     SET FILTER TO <myfilter>
	
	Then one of the following two commands:
	
	     ThisForm.Refresh
	
	     ThisForm.List<#>.Refresh
	
	WORKAROUND
	==========
	
	Immediately after issuing the SET FILTER command, issue a SETFOCUS command to
	the list box and back again to the object on the form where control should be.
	As in the "Steps to Reproduce Behavior" below, in the Click event of the command
	buttons, the following lines of code would be used:
	
	    ThisForm.List1.SetFocus       && sets the focus to the list box
	    ThisForm.Command<#>.SetFocus  && sets the focus back to the button
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new form.
	
	2. Add the Customer table to the data environment.
	
	3. Create a list box on the form.
	
	  a. Set the RowSource property to "customer.country"
	
	  b. Set the RowSourceType to "6 - Fields"
	
	4. Create a Command1 button, and enter the following code in its Click event
	  procedure:
	
	     SET FILTER TO maxordamt < 25000.0000  && sets the filter
	     x=FILTER()                && populating the variable with the filter
	     thisform.refresh          && refreshing the form
	
	5. Create a Command2 button, and enter the following code in its Click event
	  procedure:
	
	     SET FILTER TO maxordamt = 5000.0000 && sets the filter
	     x=FILTER()               && populating the variable with the filter
	     thisform.refresh         && refreshing the form
	
	6. Create a Command3 button, and enter the following code in its Click event
	  procedure:
	
	     SET FILTER TO country = "Germany" && sets the filter
	     x=FILTER()               && populating the variable with the filter
	     thisform.refresh         && refreshing the form
	
	7. Create a Command4 button, and enter the following code in its Click event
	  procedure:
	
	     SET FILTER TO            && clears the filter
	     x=FILTER()               && populating the variable with the filter
	     thisform.refresh         && refreshing the form
	
	8. Create a text box, and set its ControlSource property to x.
	
	9. Run the form, and click the Command1 button. Notice that the list box doesn't
	  refresh properly. Click the other buttons, and watch the behavior of the list
	  box. Click the list box, and watch the contents change according to which
	  filter is set. Watch the text box to see which filter is set.
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbtool kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS: 3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
