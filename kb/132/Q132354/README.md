---
layout: page
title: "Q132354: PRB: Grid ActiveRow Mark Is Not Visible After Refreshing Grid"
permalink: /kb/132/Q132354/
---

## Q132354: PRB: Grid ActiveRow Mark Is Not Visible After Refreshing Grid

	Article: Q132354
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
	
	When changing the active record in a grid through an external mechanism such as
	a command button, the record marker for the active record is not displayed when
	the record changes.
	
	RESOLUTION
	==========
	
	See the example resolution given in the "More Information" section of this
	article.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Command window, run these commands:
	
	     USE SYS(2004)+"samples\data\customer"
	     CREATE FORM test
	
	2. Add a grid to the form.
	
	3. Add the VCR class from \VFP\Samples\Controls\BUTTONS.VCX.
	
	4. Save and run the form.
	
	5. Click the various VCR buttons.
	
	The record has changed but the marker for the new or active record does not
	display. If your status bar is on, you will see the record pointer moves but the
	record marker does not.
	
	Example Resolution
	------------------
	
	To correct this behavior, modify the VCR button code as follows:
	
	1. In the Command window, issue this command:
	
	     MODIFY FORM test
	
	2. Double-click the VCR buttons.
	
	3. Select the cmdTop.Click event, and type these commands:
	
	     =EVALUATE((this.parent.class)+".cmdTop::Click()")
	     THISFORM.GRID1.SetFocus
	
	4. Select the cmdPrior.Click event, and type these commands:
	
	     =EVALUATE((this.parent.class)+".cmdPrior::Click()")
	     THISFORM.GRID1.SetFocus
	
	5. Select the cmdNext.Click event, and type these commands:
	
	     =EVALUATE((this.parent.class)+".cmdNext::Click()")
	     THISFORM.GRID1.SetFocus
	
	6. Select the cmdBottom.Click event, and type these commands:
	
	     =EVALUATE((this.parent.class)+".cmdBottom::Click()")
	     THISFORM.GRID1.SetFocus
	
	7. Save and run the form.
	
	8. Click the various VCR buttons.
	
	Now the record marker is displayed for the active record as expected.
	
	Additional query words: VFoxWin refresh RecordMarker
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
