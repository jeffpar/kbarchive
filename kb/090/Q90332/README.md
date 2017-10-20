---
layout: page
title: "Q90332: Cannot Change Order of First Print Job in WFWG"
permalink: /kb/090/Q90332/
---

## Q90332: Cannot Change Order of First Print Job in WFWG

{% raw %}

	Article: Q90332
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you print from Windows for Workgroups, Print Manager does not allow you to
	reorder the first job in the print queue. When Print Manager receives a print
	job, it begins to process it immediately, even if the printer queue has been
	paused. This behavior is by design.
	
	MORE INFORMATION
	================
	
	To change the order of print jobs other than the first, use either of the
	procedures below:
	
	- In Print Manager, select the print job you want to reorder. Then, from the
	  Document menu, choose Move Document Up or Move Document Down.
	
	  -or-
	
	- Select the print job, then choose the Move Document Up or Move Document Down
	  button on the Print Manager toolbar.
	
	You can only move documents up and down on a printer that is connected to your
	computer. If the printer you are using is not connected to your machine, you can
	only move a print job down.
	
	NOTE: The "Changing Document Order" section of Program Manager Help describes how
	to use the keyboard to change document print order. Using the CTRL+UP ARROW and
	CTRL+DOWN ARROW key combinations does not allow you to change the order in which
	the documents print.
	
	Additional query words: 3.10 3.11 unable peer grey greyed
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
