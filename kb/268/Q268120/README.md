---
layout: page
title: "Q268120: Web Applications with Visual InterDev 6.0 Comments and Correctio"
permalink: kb/268/Q268120/
---

## Q268120: Web Applications with Visual InterDev 6.0 Comments and Correctio

	Article: Q268120
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 21-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Web Applications with Microsoft Visual InterDev 6.0, MCSD Training Kit ISBN 0-7356-0967-5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Web Applications with Microsoft Visual
	InterDev 6.0, MCSD Training Kit, ISBN 0-7356-0967-5.
	
	The following topics are covered:
	
	- Page 76: Step 2, Image Has Not Been Placed In Sidebar.htm
	
	- Pages 80 & 451: Correction To Question 2
	
	- Page 93: Incorrect Description Of cancelBubble Property
	
	- Page 150: ASP Buffering Is Disabled By Default
	
	- Page 172: Step 6 Is Incorrect
	
	- Page 175: In Code, Change "outdate" To "indate"
	
	- Page 177: In Code, Add Space Between "option" And "value"
	
	- Page 224: In Step 7 Click Next Not Save
	
	- Page 225: In Step 20 Click Open Not OK
	
	- Page 248: Change rsStudents.Open to rsEmployees.Open
	
	- Page 274-275: CDate Function Code Correction
	
	- Page 278: Code Correction
	
	- Page 467-468: Products.htm File Is Not Included On The CD-ROM
	
	- Lab 6, 7, 8 & 10: CDate Function Code Correction
	
	MORE INFORMATION
	================
	
	Page 76: Step 2, Image Has Not Been Placed In Sidebar.htm
	---------------------------------------------------------
	
	On page 76, in Step 2 of Exercise 2, the instruction asks you to place the
	insertion point below the Chateau St. Mark image at the top of the page. There
	is no image in the sidebar.htm file. You will need to insert the chateauLogo.gif
	image at the top of the page before proceeding.
	
	To place the chateauLogo.gif image at the top of the page:
	
	1. Place the insertion point at the top of the page.
	2. On the HTML menu, click Image. The Insert Image dialog box appears.
	3. For the picture source, enter or browse to the images/chateauLogo.gif file.
	4. Click OK to insert the image.
	
	You can then proceed with the remainder of the exercise as outlined in the book.
	
	
	Pages 80 & 451: Correction To Question 2
	----------------------------------------
	
	Question 2 on pages 80 and 451 is incorrect. Change:
	
	"List the Visual InterDev version-control tools"
	
	To:
	"List the Visual InterDev Toolbox tools"
	
	
	Page 93: Incorrect Description Of cancelBubble Property
	-------------------------------------------------------
	
	The description of the cancelBubble property on page 93 is incorrect. By setting
	the cancelBubble to True, you prevent the parent element from receiving the
	event. The note on page 96 contains the correct description.
	
	Change:
	"By setting cancelBubble to False, you prevent the parent element from receiving
	the event. "
	
	To:
	"By setting cancelBubble to True, you prevent the parent element from receiving
	the event."
	
	
	Page 150: ASP Buffering Is Disabled By Default
	----------------------------------------------
	
	On page 150, the first sentence in the second paragraph incorrectly states that
	buffering is enabled by default for ASP applications.
	
	Change:
	"Although buffering is enabled by default for ASP applications, you can use the
	IIS snap-in to disable buffering for an entire ASP application."
	
	To:
	"Although buffering is disabled by default for ASP applications, you can use the
	IIS snap-in to enable buffering for an entire ASP application."
	
	
	Page 172: Step 6 Is Incorrect
	-----------------------------
	
	On page 172, Step 6 indicates that you will be able to open the Reservation Form.
	However, you will not activate a link to this form until page 175, Step 5.
	
	Step 6 on page 172 should be omitted.
	
	Additional Note: the menus are on the left, not the right.
	
	
	Page 175: In Code, Change "outdate" To "indate"
	-----------------------------------------------
	
	On page 175, in the code sample at the top of the page, change "outdate" to
	"indate" in the fifth line.
	
	Change:
	Request.Form("outdate")
	
	To:
	Request.Form("indate")
	
	
	Page 177: In Code, Add Space Between "option" And "value"
	---------------------------------------------------------
	
	On page 177, in the sixth line of the code at the top of the page, there should
	be a space between "option" and "value".
	
	Change:
	optionvalue="
	
	To:
	option value="
	
	
	Page 224: In Step 7 Click Next Not Save
	---------------------------------------
	
	On page 224, in step 7, you will need to click Next to continue.
	
	Change:
	"Type Data as the name of the DSN, and then click Save."
	
	To:
	"Type Data as the name of the DSN, and then click Next."
	
	
	Page 225: In Step 20 Click Open Not OK
	--------------------------------------
	
	On page 225, in step 20, you will need to click Open to continue to the next
	step.
	
	Change:
	"Choose the Existing tab and browse for the Chateau.sql file in the
	Labs\Lab05\Partial folder, and then click OK."
	
	To:
	"Choose the Existing tab and browse for the Chateau.sql file in the
	Labs\Lab05\Partial folder, and then click Open."
	
	
	Page 248: Change rsStudents.Open to rsEmployees.Open
	----------------------------------------------------
	
	On page 248, in the sample code under "Using an Explicit Connection Object",
	rsStudents.Open should be rsEmployees.Open.
	
	Change:
	rsStudents.Open "Select * from Employees", cnData
	
	To:
	rsEmployees.Open "Select * from Employees", cnData
	
	
	Page 274-275: CDate Function Code Correction
	--------------------------------------------
	
	To avoid errors in Lab 6, add single quotes around the CDate function as shown
	below:
	
	On page 274, change:
	
	  SQL = "Insert Into Guests(FirstName, LastName, SmokingPref, " & _
	      "CreditType, CardNumber, ExpDate)" & _
	      "Values('" & Trim(Request.Form("FirstName")) & "', '" & _
	      Trim(Request.Form("LastName")) & "', " & SmokingPref & _
	      ", " & CInt(CreditType) & ", '" &
	      Trim(Request.Form("CardNumber")) & _
	      "', " & CDate(Request.Form("ExpDate")) & ")"
	
	To:
	
	  SQL = "Insert Into Guests(FirstName, LastName, SmokingPref, " & _
	      "CreditType, CardNumber, ExpDate)" & _
	      "Values('" & Trim(Request.Form("FirstName")) & "', '" & _
	      Trim(Request.Form("LastName")) & "', " & SmokingPref & _
	      ", " & CInt(CreditType) & ", '" &
	      Trim(Request.Form("CardNumber")) & _
	      "', '" & CDate(Request.Form("ExpDate")) & "')"
	
	On page 275, change:
	
	  SQL = "Update Guests Set FirstName = '" & _
	      Trim(Request.Form("FirstName")) & _
	      "', " & "SmokingPref = " & SmokingPref & ", " & _
	      "ExpDate = " & CDate(Request.Form("ExpDate")) & _
	      " Where GuestID = " & GuestID
	
	To:
	
	  SQL = "Update Guests Set FirstName = '" & _
	      Trim(Request.Form("FirstName")) & _
	      "', " & "SmokingPref = " & SmokingPref & ", " & _
	      "ExpDate = '" & CDate(Request.Form("ExpDate")) & "' " & _
	      "Where GuestID = " & GuestID
	
	
	Page 278: Code Correction
	-------------------------
	
	On page 278, in step 8, change the first line of code as follows.
	
	Change:
	
	  If cdGuests.Recordset.EOF And cdGuests.Recordset.EOF Then
	
	To:
	
	  If cdGuests.Recordset.BOF And cdGuests.Recordset.EOF Then
	
	
	Page 467-468: Products.htm File Is Not Included On The CD-ROM
	-------------------------------------------------------------
	
	Pages 467 and 468 in Appendix B mention the Products.htm files provided on the
	companion CD. These sample files were not included on the CD-ROM. However,
	Microsoft Press has created AppendB.exe, a self-extracting executable file that
	contains the missing files.
	
	The following file is available for download from the Microsoft Download Center:
	
	  AppendB.exe
	  (http://download.microsoft.com/download/vinterdev60pro/mspress/1.0/WIN98Me/EN-US/AppendB.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	More Information
	----------------
	
	On page 467, change the last sentence in the first paragraph under the section
	titled "Implementing the VBScript Language",
	
	From:
	"Use the page provided in the Practice\AppendB directory located on your hard
	drive or on the companion CD."
	
	To:
	"Use the page provided in the AppendB directory located on your hard drive or on
	the companion CD."
	
	On page 468, change Step 4
	
	From:
	"In the Open File dialog, click the Existing tab, browse to the Practice\Ch03
	folder, and select the Products.htm file."
	
	To:
	"In the Open File dialog, click the Existing tab, browse to the
	WebAppsMCSD\AppendB folder, and select the Products.htm file."
	
	
	Lab 6, 7, 8 & 10: CDate Function Code Correction
	------------------------------------------------
	
	To avoid errors in Lab 6, 7, 8 and 10, add single quotes around the CDate
	function in the following files:
	
	.\labs\lab06\solution\checkin.asp
	.\labs\lab07\partial\checkin.asp
	.\labs\lab07\solution\checkin.asp
	.\labs\lab08\partial\checkin.asp
	.\labs\lab08\solution\checkin.asp
	.\labs\lab10\partial\checkin.asp
	.\labs\solution\chateau_local\checkin.asp
	
	Change:
	
	  "', " & CDate(Request.Form("ExpDate")) & ")"
	
	To:
	
	  "', '" & CDate(Request.Form("ExpDate")) & "')"
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: TKBOOK DEVBOOK VSTUDIO INTERDEV 0-7356-0967-5
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
