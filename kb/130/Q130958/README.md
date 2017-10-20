---
layout: page
title: "Q130958: BUG: Five Label Layouts Have Incorrect Format"
permalink: /kb/130/Q130958/
---

## Q130958: BUG: Five Label Layouts Have Incorrect Format

{% raw %}

	Article: Q130958
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Five out of the eighty-six label layouts provided with ADDLABEL.APP display
	incorrect information when the label is created with the CREATE LABEL command.
	The five that don't work correctly are: 5199-S, 5896, Tab1 107.49, Tab2 107.23,
	and Tab2 107.36.
	
	Here are the details:
	
	- The 5199-S layout specifies that the label should be 5 3/16" wide. However,
	  when a label is created based on this layout, it is 5.75" wide.
	
	- The 5896 layout specifies that the label be 2 3/4" long, but when a label is
	  created, it is 3" long. NOTE: The 5896 layout appears correctly in Visual
	  FoxPro 5.0a.
	
	- The Tab1 107.49 layout specifies 48.8 mm x 107 mm, but when a label is
	  created, it is over 50 mm in length.
	
	- The Tab2 107.23 and Tab2 107.36 layouts specify that two columns should be
	  created, but only one column is created when these label layouts are used.
	  NOTE: Two columns will appear if no changes are made in page layout. However,
	  the left side of the label will be cut off.
	
	CAUSE
	=====
	
	When the CREATE LABEL command is issued, label layouts are derived from
	definitions stored in the LABELS.DBF table. The records for these five layouts
	store incorrect information.
	
	RESOLUTION
	==========
	
	If you need to use these formats, you can use the ADDLABEL.APP application to
	create customized label formats and store them in the resource file (FOXUSER).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Issue a CREATE LABEL command.
	
	2. Choose either 5199-S or 5896 from the new label dialog.
	
	3. Check the size of the labels.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
