---
layout: page
title: "Q164367: BUG: Report Writer Selects Objects After Printing in Designer"
permalink: /kb/164/Q164367/
---

## Q164367: BUG: Report Writer Selects Objects After Printing in Designer

{% raw %}

	Article: Q164367
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When printing a report from the Report Writer Designer, the report is sent to
	the printer as expected. All of the objects in the report, however, are selected
	in the Report Writer Designer.
	
	RESOLUTION
	==========
	
	Any actions to refresh the Report Writer Designer such as minimizing the report,
	minimizing Visual FoxPro, or bringing up another window in another application
	restore the report objects' correct, visual state.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The visual state of the objects "selected" status is now reversed; those objects
	that appear to be "selected" are not. If you "deselect" an object, you are
	actually "selecting" it in a functional way, although you are not getting the
	correct visual cue.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a quick report using the Employee table in the \Vfp\Samples\Data
	  folder.
	
	2. Click Print on the Report Writer Designer toolbar.
	
	NOTE: The report is sent to the printer. All of the objects in the Report Writer
	Designer, however, will be "selected."
	
	Additional query words: kbvfp500 kbvfp500a kbvfp600
	
	======================================================================
	Keywords          : kbvfp kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
