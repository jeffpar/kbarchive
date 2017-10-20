---
layout: page
title: "Q141723: FIX: Status Bar Message Does Not Refresh Properly"
permalink: /kb/141/Q141723/
---

## Q141723: FIX: Status Bar Message Does Not Refresh Properly

{% raw %}

	Article: Q141723
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While using Microsoft Visual FoxPro with the Status Bar set ON (default), you
	may notice that the Status Bar message fails to update correctly. It may display
	messages associated with the Standard Toolbar through the entire session
	
	WORKAROUND
	==========
	
	If this should occur, it is possible to force the message to refresh by typing
	the following command into the Command window:
	
	  " SET STATUS BAR ON " (without the quotation marks)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This is fixed in Visual FoxPro 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual FoxPro. If the Status Bar is not visible as the bottom border of
	  the main Visual FoxPro window, it must be set on by typing the following
	  command in the Command window:
	
	  " SET STATUS BAR ON " (without the quotation marks)
	
	2. If the Standard Toolbar (which contains the Run exclamation point tool) is
	  not visible, it must be set on. (On the View menu, click Toolbars, and select
	  Standard from the list of toolbars.
	
	3. On the File menu, click New, and specify Query as the file type. Then click
	  the New File button.
	
	4. When the Open Table dialog box appears, click Other, and locate the
	  Customer.dbf, which should be here:
	
	     C:\Vfp\Samples\Data
	
	5. Within the Query Designer, select all the fields by double-clicking the
	  asterisk (*) in the Customer.dbf.
	
	6. From the Standard Toolbar, select the Run tool to run the query. The Status
	  Bar will display a message associated with the number of records selected,
	  and then the message will change to "Runs the current form, program, report,
	  or query." No other message associated with the cursor is displayed.
	
	7. With the browse still open, use the Window menu to activate the Command
	  window and type:
	
	  " SET STATUS BAR ON " (without the quotation marks)
	
	  Note that the Status Bar message now refers to the Testdata!Query cursor.
	
	Additional query words: 5.00 VfoxWin kbvfp300 kbvfp300b kbvfp500
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
