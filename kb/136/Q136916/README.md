---
layout: page
title: "Q136916: FIX: Saving Report May Not Allow User to Reselect Object"
permalink: /kb/136/Q136916/
---

## Q136916: FIX: Saving Report May Not Allow User to Reselect Object

{% raw %}

	Article: Q136916
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
	
	When you save a report while some of the report's objects are selected, the
	following unexpected behavior occurs:
	
	- To clear the selection of the objects that were selected before the report
	  was saved, you need to click them directly. After clearing the selection, you
	  can't select these objects if click them directly, but they are selected if
	  you click any other object in the report.
	
	- If you click Select All on the Edit menu, all the objects will be selected
	  except the objects that were selected before the report was saved.
	
	- If you click a blank area of the report to clear a selection of Report
	  objects that were selected by clicking Select All, then the objects that were
	  selected before the report was saved are erroneously selected.
	
	WORKAROUND
	==========
	
	You can use one of the following methods to correct this problem:
	
	- Double-click the bar of any of the report bands.
	
	-or-
	
	- Increase or decrease the height of any of the report bands by clicking a
	  band's bar and then dragging it up or down.
	
	-or-
	
	- Close the report, and then reopen it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Modify any Report.
	
	2. Select any object in the report, and move it slightly.
	
	3. On the File menu, click Save to save the report.
	
	4. Select any other object in the report. You will see that the object selected
	  in step 2 stays selected along with the new object that you just selected.
	
	5. On the Edit menu, click Select All. Note that all the report objects are
	  selected except for the one selected in step 2.
	
	6. Click a blank area of the report. This should clear all selections, but it
	  does not. The objects selected in step 2 are erroneously selected.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
