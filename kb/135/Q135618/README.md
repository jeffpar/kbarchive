---
layout: page
title: "Q135618: BUG: View Designer Doesn't Properly Display Crosstab"
permalink: /kb/135/Q135618/
---

## Q135618: BUG: View Designer Doesn't Properly Display Crosstab

{% raw %}

	Article: Q135618
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbtool kbvfp kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a view created in the following manner, you do not see a crosstab
	view. This occurs when you create a local view through the View Designer, select
	three columns to include in the view (a descriptive field, date field, and
	amount field), and select the Crosstab option.
	
	When you run the view, either from the Designer or the Project Manager, you don't
	see a crosstab view of the cursor. Instead, you see a standard browse of the
	cursor. The View Designer does not process the crosstab correctly. In addition,
	the crosstab check box is no longer selected when you modify the view.
	
	WORKAROUND
	==========
	
	The SQL code created by the View Designer is reliable and functions as expected
	if it is run from a program or a procedure. Therefore, you can construct the
	crosstab through the View Designer; then save the SQL code in a procedure or
	program, and run that procedure or program to see the results of the crosstab.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbtool kbvfp kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
