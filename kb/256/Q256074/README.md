---
layout: page
title: "Q256074: Crystal Reports Selection Formula Reappears After Being Deleted"
permalink: kb/256/Q256074/
---

## Q256074: Crystal Reports Selection Formula Reappears After Being Deleted

	Article: Q256074
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 03-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you remove the selection formula for a report and reschedule it to run,
	the report may continue to run with the removed selection formula.
	
	CAUSE
	=====
	
	The selection formula is not removed from the report even though the Selection
	Formula box has been cleared. Replacing the formula with a new formula works.
	
	WORKAROUND
	==========
	
	Make a new report object and run the report with the new object:
	
	1. Right-click the report, point to All Tasks, and then click Schedule Report.
	
	2. Under Report Properties, you see Report File. Write down the file path in
	  this box.
	
	3. Click Cancel.
	
	4. Right-click the report folder in which you want to create the new report
	  object, point to New, and then click Report Object.
	
	5. Under Report Properties, add the path you wrote down in the Report File box.
	  Provide a title for the new object, and a description if appropriate.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
