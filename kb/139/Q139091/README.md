---
layout: page
title: "Q139091: FIX: &quot;INDEX Internal Consistency Error&quot; Occurs with SET KEY"
permalink: /kb/139/Q139091/
---

## Q139091: FIX: &quot;INDEX Internal Consistency Error&quot; Occurs with SET KEY

{% raw %}

	Article: Q139091
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
	
	An "INDEX Internal Consistency Error" (ICE) occurs when you browse a cursor with
	optimistic or pessimistic table buffering set and a SET KEY command active.
	Running a form containing a grid with its RecordSource property set to a table
	that has buffering and SET KEY active causes the same error.
	
	WORKAROUND
	==========
	
	Include the records you want by using a method other than the SET KEY command.
	For example, use the SET FILTER command or create an index tag that includes
	only those records that you want.
	
	-or-
	
	Use row buffering rather than table buffering.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Running the following example code will cause Visual FoxPro 3.0 to quit. Please
	close any important files in Visual FoxPro before running either of these tests.
	These examples use the Customer table from Testdata.dbc in the \Vfp\Samples\Data
	directory.
	
	To reproduce the problem in a BROWSE, run the following code in a program (.prg
	file) or in the Command window:
	
	     SET MULTILOCKS ON
	     USE customer ORDER cust_id
	     =CURSORSETPROP('buffering',4)
	     SET KEY TO RANGE "T","V"
	     BROWSE
	
	When the BROWSE window appears, the "INDEX Internal Consistency Error" error will
	also appear. When you press a key, Visual FoxPro quits.
	
	To reproduce the problem in a grid control on a form:
	
	1. Create a new form, and place the following code in the form's Load event:
	
	     SET MULTILOCKS ON
	     SET ORDER TO cust_id
	     =CURSORSETPROP('buffering',4)
	     SET KEY TO RANGE "T","V"
	
	2. Add the Customer table to the Data Environment of the form.
	
	3. Create a grid from Customer by dragging the Customer table by its title bar
	  from the Data Environment to the form.
	
	4. Run the form, and click one of the scroll bars of the grid, or press the up
	  arrow to move the record pointer. At this point, the "INDEX Internal
	  Consistency Error" appears. Pressing a key will close Visual FoxPro.
	
	In other circumstances, other errors may occur. The error "Table has no index
	order set" appears if the commands SKIP and then SKIP -1 are issued in the
	Command window after running the previously described form.
	
	Additional Notes
	----------------
	
	- The error occurs with the Buffering property of the cursor set to 4
	  (Pessimistic Table Buffering) or 5 (Optimistic Table Buffering).
	
	- Buffering settings of 1 (None), 2 (Pessimistic Row), or 3 (Optimistic Row)
	  work correctly.
	
	- If a SET FILTER command is used in place of the SET KEY command, no error
	  occurs. For example, instead of using this command:
	
	        SET KEY TO RANGE "T","V"
	
	  Use the following command to produce the same result:
	
	        SET FILTER TO LEFT(cust_id,1)>="T" AND LEFT(cust_id,1)<="V"
	
	Additional query words: VFoxWin fixlist3.00b buglist3.00
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
