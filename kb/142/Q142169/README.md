---
layout: page
title: "Q142169: FIX: TABLEREVERT() Does Not Release Header Lock"
permalink: /kb/142/Q142169/
---

## Q142169: FIX: TABLEREVERT() Does Not Release Header Lock

{% raw %}

	Article: Q142169
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Pessimistic locking is in use and an APPEND BLANK is canceled with a
	TABLEREVERT(), another user will not be able to add another record to the table.
	If an attempt is made either an "Attempting to Lock...Press ESC to Cancel"
	message is presented or a "File is in use by another" error is generated.
	
	CAUSE
	=====
	
	Visual FoxPro 3.0 TABLEREVERT() command is not releasing the header lock on the
	file.
	
	WORKAROUND
	==========
	
	The best workaround is to update to 3.0b. If this is not an option, follow the
	TABLEREVERT() command with an UNLOCK RECORD 0. This will force an unlock of the
	header.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft Visual
	FoxPro 3.0b.
	
	MORE INFORMATION
	================
	
	TABLEREVERT() does not release the header lock that has been applied by an
	APPEND BLANK under Pessimistic locking schemes.
	
	For example, Pessimistic Table Buffering is in effect for a form. User A on
	workstation 1 appends a blank record then cancels the change by issuing a
	TABLEREVERT(). User B on workstation 2 then attempts to append a blank record to
	the same table. However, the attempt fails with an "Attempting to Lock...Press
	ESC to Cancel" error.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open the \Samples\Data\Testdata.dbc
	
	2. Create a new form.
	
	3. Add the Customer table to the form's DataEnvironment, and set the cursor's
	  BufferModeOverride property to either 2 or 4. Drag a field from the customer
	  table to the form.
	
	4. Place a command button on the form, and change its caption to Add. Then place
	  the following code its Click event:
	
	     APPEND BLANK
	     THISFORM.REFRESH
	
	5. Add another command button to the form. Change its caption to Cancel, and
	  place the following code in its Click event:
	
	     =TABLEREVERT()
	     THISFORM.REFRESH
	
	6. Set the form's DataSession property to 2 - Private Data Session.
	
	7. Save and run the form twice.
	
	8. Click the Add button and then the Cancel button of one of the forms. Go to
	  the Second form, and click the Add button. A "File is in use by another"
	  error message is generated. of this form was run from two different
	  workstations, the second user would have received an "Attempting to
	  Lock...Press ESC to Cancel" message.
	
	Additional query words: VFoxWin buglist3.00 fixlist3.00b multiuser multi-user
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
