---
layout: page
title: "Q152371: BUG: Small Left Grid Partition Leaves Scroll Bar Remnants"
permalink: /kb/152/Q152371/
---

## Q152371: BUG: Small Left Grid Partition Leaves Scroll Bar Remnants

{% raw %}

	Article: Q152371
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When partitioning a grid object, remnants of the vertical scroll bar appear
	outside of the grid on the left side. This may happen when the size of the left
	partition of a grid is changed manually or if the partition size is changed
	programmatically. In either case, this will happen if the left partition is
	small, about 1/8 of an inch.
	
	RESOLUTION
	==========
	
	The only known workaround is to hide the form and then unhide it. For instance,
	the following code could be placed in a Command button on the form that the grid
	is on:
	
	     ThisForm.Visible=.F.
	     ThisForm.Visible=.T.
	
	However, the form will have to redraw and this will be visible to the user.
	Changing the Visible property of the grid will not clear up the Scrollbar
	remnants.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The Partition property of a grid splits it into two panels if the property is
	set to a number greater than zero. The number specifies where the grid is split
	relative to the left edge of the grid.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Type the following commands in the Visual FoxPro Command window:
	
	     OPEN DATA HOME()+"Samples:Data:Testdata"
	     CREATE FORM
	
	2. Add the Customer table from the Testdata database to the data environment of
	  the form.
	
	3. With the form's data environment still open, grab the table's Titlebar and
	  drag it onto the new form to create a grid.
	
	4. Resize the form and grid as appropriate.
	
	5. Set the Partition property of the grid to 10.
	
	6. Save and run the form. Note the portion of the vertical Scrollbar outside of
	  the grid on the left side. Resize the partition so the left side is larger by
	  using the mouse and the thick black bar in the bottom left of the grid. Note
	  that the scroll bar remnants remain.
	
	7. Click the Visual FoxPro desktop to hide the form. Then reselect the form from
	  the bottom of the Window menu. Note that the scroll bar remnants are gone.
	
	Additional query words: VFoxMac
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	

{% endraw %}
