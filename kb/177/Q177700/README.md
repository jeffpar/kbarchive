---
layout: page
title: "Q177700: MS Access 97/Visual Basic Step by Step Comments and Corrections"
permalink: /kb/177/Q177700/
---

## Q177700: MS Access 97/Visual Basic Step by Step Comments and Corrections

{% raw %}

	Article: Q177700
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 09-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Access 97 Visual Basic Step by Step ISBN 1-57231-319-6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information on known errors, corrections, and comments
	relating to the Microsoft Press book "Microsoft Access 97/Visual Basic Step by
	Step," ISBN 1-57231-319-6.
	
	Contents:
	
	- Page xxx: Incorrect Web Address
	
	- Page 13: Text correction
	
	- Page 70: Typographical Error
	
	- Page 200: Subscription Database Out Of Date
	
	- Page 325: In Step 5, Minimize Word Rather Than Close It
	
	- Pages 358 - 359: Steps Result in Error
	
	- Page 366: Incorrect URL
	
	MORE INFORMATION
	================
	
	Page xxx: Incorrect Web Address
	-------------------------------
	
	On page xxx, the Web address given for "Building Applications with Microsoft
	Access 97" is incorrect.
	
	Page 30, last paragraph, last sentence:
	
	Change:
	
	  http://www.microsoft.com/accessdev/buildapp/
	
	To:
	
	  http://www.microsoft.com/AccessDev/Articles/BApp97/BApp97.htm
	
	
	Page 13: Text correction
	------------------------
	
	Page 13, under "Adding an Object to your Application", last sentence in the
	paragraph:
	
	Change:
	"You can create this form easily by using the Report Wizard."
	
	To:
	"You can create this report easily by using the Report Wizard."
	
	
	Page 70: Typographical Error
	----------------------------
	
	On page 70, toward the bottom of the page in Step 2, change "Records" to
	"Contacts".
	
	Change:
	"The form now displays only contacts in Seattle. But the option group still shows
	All Records - which is no longer true!"
	
	To:
	"The form now displays only contacts in Seattle. But the option group still shows
	All Contacts - which is no longer true!"
	
	
	Page 200: Subscription Database Out Of Date
	-------------------------------------------
	
	The code on page 200 compares the current date with a date listed in the
	PaidThrough column of the Subscription database. Because this book was published
	in 1997, these dates are now too old to be useful.
	
	You can correct the problem by using the following steps:
	
	1. In Microsoft Access 97, load 08Subscr.mdb.
	
	2. In the Database window, select the Tables tab.
	
	3. Double-click the Subscribers table.
	
	4. If necessary, use the scroll bar at the bottom right of the window to scroll
	  to the PaidThrough column.
	
	5. Subtract 1997 from the current year. For example, 2000 - 1997 = 3 years.
	
	6. Add the number of years since 1997 to each entry in the PaidThrough column.
	
	7. Save and close the database.
	
	8. Repeat steps 1-7 for 09Subscr.mdb, 10Subscr.mdb, and 11Subscr.mdb.
	
	Additional information on this issue is provided in the note on page 204.
	
	
	Page 325: In Step 5, Minimize Word Rather Than Close It
	-------------------------------------------------------
	
	On page 325, in step 5, you will need to minimize Word rather than close it,
	because Word needs to be open when you follow the instructions on page 332 to
	create a Word memo. If Word is not open when you perform step 3 on page 332, you
	will receive the error message "Run Time Error 429 ActiveX component can't
	create object."
	
	Change step 5 on page 325 from:
	"On the File menu, click Exit. Word closes, and Microsoft Access returns to the
	front."
	
	To:
	"Minimize Word so that Microsoft Access returns to the front."
	
	
	Pages 358 - 359: Steps Result in Error
	--------------------------------------
	
	Following the steps on pages 358-359 allows the code to compile but returns the
	following error message:
	
	  There is no object in this control.
	
	Microsoft Access 97 does not recognize the Navigate method. However, Microsoft
	Access 2000 does.
	
	
	Page 366: Incorrect URL
	-----------------------
	
	On page 366, the URL to view Building Applications with Microsoft Access 97 is
	incorrect.
	
	Change:
	http://www.microsoft.com/accessdev/docs/bapp97/bapp97.htm
	
	To:
	http://www.microsoft.com/accessdev/articles/bapp97/bapp97.htm
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: press ms_press
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
