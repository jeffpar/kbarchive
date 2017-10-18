---
layout: page
title: "Q134312: PRB: TabIndex Setting Does Not Activate Selected Form First"
permalink: kb/134/Q134312/
---

## Q134312: PRB: TabIndex Setting Does Not Activate Selected Form First

	Article: Q134312
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting the TabIndex property of a form within a formset changes the activation
	order of the forms. However, the first form added to the formset will always be
	activated first although its TabIndex property is set to a value other than
	one.
	
	The TabIndex property of a form within a formset can be used to determine the
	activation order of forms within a formset. By default, the first form added in
	a formset is activated first, the second form added is activated second, and so
	on. By changing around the TabIndex properties for all the forms within a
	formset, the activation order is changed and the form which has a TabIndex
	property of 1, is expected to be activated first.
	
	RESOLUTION
	==========
	
	By incorporating a few changes in the formset, it is possible to have the
	correct form be activated as the first form within a formset. Using the formset
	configuration as described below in the "More Information" section, the
	following changes correct the behavior.
	
	Steps to Follow to Correct Behavior
	-----------------------------------
	
	1. Create a new property for the formset called FirstTime.
	
	2. In the Init method of the formset, add the following line of code:
	
	     FirstTime=.T.
	
	3. In the Activate method of Form1 of the formset (Form1 is the first form added
	  to the formset), add the following lines of code:
	
	     IF thisformset.firsttime=.T.
	        NODEFAULT
	        ThisFormSet.FirstTime=.F.
	        ThisFormSet.Form4.Command1.SetFocus
	     ENDIF
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following formset configuration illustrates resetting the TabIndex property
	does not result in the desired form being activated first.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. On the File menu, click New. Then click Form and New File.
	
	2. On the Form menu, click Create Form Set.
	
	3. On the Form menu, click Add New Form three times. Form4 is the last form
	  added to the formset.
	
	4. Change the TabIndex property of each form as follows:
	
	     Form1 (TabIndex Property set to 2)
	     Form2 (TabIndex Property set to 4)
	     Form3 (TabIndex Property remains at 3)
	     Form4 (TabIndex Property set to 1)
	
	5. Add a command button to each form.
	
	6. In the click method of Form1, add the following line of code:
	
	     ThisFormset.Release
	
	7. Run the formset, and note that Form4 is not the first form activated as
	  expected. However, the forms do cycle in their TabIndex order from that point
	  on.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
