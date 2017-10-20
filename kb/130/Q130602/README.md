---
layout: page
title: "Q130602: FIX: Can't Enter Picture Property for List Box or Combo Box"
permalink: /kb/130/Q130602/
---

## Q130602: FIX: Can't Enter Picture Property for List Box or Combo Box

{% raw %}

	Article: Q130602
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
	
	The Picture property is listed under both list box and combo box controls in the
	Form Designer. However, no value can be entered interactively for the property.
	
	CAUSE
	=====
	
	The Picture property can be assigned programatically for list boxes and for
	combo boxes. The picture specified in the Picture property is duplicated at the
	left side of each row in the list box or combo box.
	
	However, the fact that the Picture property cannot be assigned interactively
	through the Form Designer for list boxes or combo boxes is a bug.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Small bitmap files or even icon files, such as those found in the
	\Samples\Graphics folder installed with Visual FoxPro, are recommended for use
	with the Picture property of list boxes and combo boxes.
	
	There have been reports of the pictures not displaying for all items in a list
	box if the list is long. Somewhere around 60 list items is where this has been
	reported. If this behavior is observed, it may be video driver related. As a
	test one of the sample .bmp files from the \Samples\Graphics\bmps folder should
	also be tried to make sure the problem is not related to the bitmap file.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form and place a list box on it.
	
	2. Set the RowSourceType to 5 - Array and the RowSource to "thisform.laMyArray".
	  Try to set the Picture property through the properties sheet. The Picture
	  property should be disabled.
	
	3. Set the RowSource property to "Thisform.laMyarray" (without the quotation
	  marks).
	
	4. Set the NumberOfElements property "=ALEN(thisform.laMyarray)" (without the
	  quotation marks).
	
	5. From the system menu select Form and enter "laMyarray[5]" (without the
	  quotation marks) in the New Property dialog.
	
	6. In the Load event of the form, type:
	
	  " Thisform.laMyArray = "ABCDEFG" " (without the quotation marks)
	
	7. Add a command button to the form. In the Click Event method of the command
	  button, add the following code, changing the path to the path of your Windows
	  directory:
	
	        ThisForm.List1.Picture = HOME()+"Samples\Graphics\bmps\fox\cut.bmp"
	        ThisForm.Refresh
	
	8. Run the form. Click the button. The list box should be updated so that the
	  bitmap is displayed for every line in the list.
	
	There is currently no way to assign a different picture to each item in the list.
	
	Additional query words: listbox
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
