---
layout: page
title: "Q139108: FIX: Visual FoxPro Fails If Subclass Name Ends in a Number"
permalink: /kb/139/Q139108/
---

## Q139108: FIX: Visual FoxPro Fails If Subclass Name Ends in a Number

{% raw %}

	Article: Q139108
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you place a subclass of an existing class on a form, and the name of that
	subclass ends in a number, Visual FoxPro fails and returns this error message:
	
	  A member object with this name already exists.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a TextBox subclass called TxtBox1.
	
	2. Create a new form.
	
	3. Place a TxtBox1 instance on the form. The instance is assigned the name
	  TxtBox12.
	
	4. Close and save the form.
	
	5. Reopen the form.
	
	6. Try to place another instance of TxtBox1 on the form. Visual FoxPro fails and
	  gives the previously noted error message.
	
	Additional query words: class member object
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
