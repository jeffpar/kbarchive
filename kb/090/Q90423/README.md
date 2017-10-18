---
layout: page
title: "Q90423: Print Manager Continuously Ejects Separator Pages"
permalink: kb/090/Q90423/
---

## Q90423: Print Manager Continuously Ejects Separator Pages

	Article: Q90423
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On certain printer models when printing with Separator Pages enabled, the
	Windows for Workgroups Print Manager may continuously print separator page(s)
	after the first print job, then fail to print subsequent print jobs. The
	printers known to be affected are:
	
	  Canon LBP-4
	  Canon LBP-8 II
	  Canon LBP-8 III
	  IBM Laser Printer 4019
	  Okidata Docit 4000
	  Olivetti DM 109
	  Olivetti DM 309
	
	CAUSE
	=====
	
	Printing separator pages on the above printers is currently unsupported with
	Windows for Workgroups.
	
	The Microsoft Windows for Workgroups Print Manager has the ability to print a
	separator page between print jobs to allow you to easily identify your print
	jobs in the printer's output bin (or equivalent). When sending multiple print
	jobs to one of the above printers, the first print job may print, but then be
	followed by the repeated printing of separator pages, without printing any
	additional print jobs.
	
	WORKAROUND
	==========
	
	The only known workaround at this time is use the above printers with no
	separator page between print jobs.
	
	To disable separator pages:
	
	1. Start Print Manager.
	
	2. From the Options menu, choose Separator Pages.
	
	3. Select No Separator Page, then choose the OK button.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups versions
	3.1 and 3.11. We are researching this problem and will post new information here
	as it becomes available.
	
	KBCategory: kbprint kbbuglist
	KBSubcategory: wfw wfwg
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch
	Version           : WINDOWS:
	
	=============================================================================
	
