---
layout: page
title: "Q158758: FIX: Form Wizard EditBox ForeColor Property Not Recognized"
permalink: /kb/158/Q158758/
---

## Q158758: FIX: Form Wizard EditBox ForeColor Property Not Recognized

{% raw %}

	Article: Q158758
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b; MACINTOSH:3.0b; WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbdisplay kbprogramming kbtool kbui kbvfp500aBUGkbbuglist
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, Professional Edition, versions 3.0, 3.0b 
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you modify the ForeColor property of an EditBox control (memo field) in a
	Wizard-created form, the ForeColor change does not appear when you run the form.
	
	CAUSE
	=====
	
	The HasMemo property of the Wizard BUTTONSET1 control is incorrectly set to .T.
	(true).
	
	WORKAROUND
	==========
	
	1. Edit the Wizard-created form.
	
	2. Select the BUTTONSET1 object HasMemo property.
	
	3. Notice that the value is .T., secondary-mouse click on the HasMemo property,
	  and select "Reset to Default." Ensure that the value is set to .F.
	
	4. Save and run form.
	
	5. Click Edit. Notice that the EditBox ForeColor is red.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Click New on the File menu, click Form, and then choose Wizard.
	
	2. Select Samples\Data\Employee.dbf, or any table containing a memo field.
	
	3. Select the Emp_id, Last_name, and Notes (memo) fields. Choose Finish.
	
	4. Save the form, modify it in the Form Designer, and click Finish.
	
	5. Change the Last_name TextBox ForeColor property to red.
	
	6. Change the Notes EditBox ForeColor property to red.
	
	7. Run the form.
	
	8. Click Edit.
	
	Notice that the Last_name TextBox ForeColor changes to red but the EditBox
	ForeColor does not.
	
	REFERENCES
	==========
	
	Visual Class Library (Wizstyle.vcx), Visual FoxPro, 5.0, \Vfp\Wizards folder
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Perry Newton, Microsoft Corporation
	
	
	Additional query words: kbvfp600fix
	
	======================================================================
	Keywords          : kbdisplay kbprogramming kbtool kbui kbvfp500aBUG kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : :3.0,3.0b; MACINTOSH:3.0b; WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
