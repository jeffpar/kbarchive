---
layout: page
title: "Q149210: ACCESS FOR WINDOWS 95 STEP BY STEP Corrections and Comments"
permalink: kb/149/Q149210/
---

## Q149210: ACCESS FOR WINDOWS 95 STEP BY STEP Corrections and Comments

	Article: Q149210
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Access for Windows 95 Step by Step ISBN 1-55615-876-9 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information on known errors
	relating to the Microsoft Press book "Microsoft Access for Windows 95 Step by
	Step."
	
	The following topics are covered:
	
	- Page 93:
	
	  Error: not a file you can link
	
	
	MORE INFORMATION
	================
	
	In addition to a description of the book's problems, each entry in this document
	might also include sections labeled "Correction" and "Comments." Please note
	that the "Correction" section is worded for correcting the book and does not
	necessarily address the problem introduced by the book error. The "Comments"
	section contains specific information for working around the problem.
	
	Page 93: "Error: not a file you can link"
	-----------------------------------------
	
	When performing Step 3 on page 93, you might not have Paradox listed in the Files
	of Type drop-down box. Furthermore, if you manually enter the Shipping.db
	filename without selecting Paradox in the Files of Type field, you might receive
	the following error when trying to perform Step 4:
	
	  Error: not a file you can link.
	
	This could be caused by not having the proper Paradox data filter installed for
	Microsoft Access. To add or check the proper Access data filter, please use the
	following steps:
	
	1. Click the Start button, then click Settings, and then click Control Panel.
	
	2. Double-click the Add/Remove Programs icon in the Control panel.
	
	3. In the Install/Uninstall list, double-click Microsoft Access. If Microsoft
	  Access is not listed, double-click Microsoft Office Professional.
	
	4. When the setup program appears, click the Add/Remove button.
	
	5. In the Options list, click the Data Access option (on the wording, not on the
	  check box) and then click the Change Option button.
	
	6. Click the Database Drivers option, and then click the Change Option Button.
	
	7. Make sure a check is present for all filters related to Paradox database
	  files. If some Paradox filters are not selected, click on the empty check-box
	  to add these filters.
	
	8. Click OK for each screen to return to the main setup program. The final OK
	  should begin the setup of any new components that you added a check mark to.
	
	  Once the Paradox filter is properly installed, you will be able to select
	  Paradox in the Files of Type field as shown on page 93.
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: mspress ms_press press bookbug
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	
	=============================================================================
	
