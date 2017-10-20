---
layout: page
title: "Q137060: FIX: FontSize=1 Causes Visual FoxPro to Terminate w/Windows 95"
permalink: /kb/137/Q137060/
---

## Q137060: FIX: FontSize=1 Causes Visual FoxPro to Terminate w/Windows 95

{% raw %}

	Article: Q137060
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual FoxPro verion 3.0 running in Windows 95 will terminate if the FontSize of
	an object is 1.
	
	
	WORKAROUND
	==========
	
	If the FontSize of an object can be set programmatically, remove "1" as a
	possible choice.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a form, and change the FontSize property to 1.
	
	2. Run the form, and verify that the form runs correctly.
	
	3. Modify the form, and set the FontSize property to the default (10).
	
	4. Place an EditBox and a Spinner object on the Form.
	
	5. In the EditBox Click event procedure, enter this line of code:
	
	     This.FontSize = ThisForm.Spinner1.Value
	
	6. Run the form, and enter a value greater 1 in the Spinner control and type
	  some information into the EditBox control. Verify that the FontSize is in
	  accordance with the Spinner control value.
	
	7. Change the Spinner control value to "1" and click the EditBox control. A
	  fault (either a Page Fault or a Divide By Zero fault) will occur and Visual
	  FoxPro will exit.
	
	
	Additional query words: VFoxWin fixlist3.00b buglist3.00
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
