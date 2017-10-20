---
layout: page
title: "Q173837: Building Applications With Outlook 97 Comments and Corrections"
permalink: /kb/173/Q173837/
---

## Q173837: Building Applications With Outlook 97 Comments and Corrections

{% raw %}

	Article: Q173837
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Building Applications with Microsoft Outlook 97 ISBN 1-57231-536-9 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains corrections, comments, and information on known errors
	relating to the Microsoft Press book "Building Applications with Microsoft
	Outlook 97," ISBN 1-57231-536-9.
	
	Contents:
	
	- Back Cover: Microsoft Exchange Server Required
	
	- Location of Practice Folders
	
	- Page 6: Typographical Error
	
	- Chapter 3 Even Page Heading Incorrect
	
	- Pages 90 & 92: Miscellaneous Corrections
	
	- Pages 113, 246, and 264: Misc. Errors
	
	- Page 289: Code Error
	
	- Page 309: Text Error
	
	- Page 328: Text Error
	
	- Pages 310, 327: Misc. Errors
	
	- Pages 365, 366, 460, 468: Misc. Errors
	
	- Page 404: Code Error
	
	MORE INFORMATION
	================
	
	Back Cover: Microsoft Exchange Server required
	----------------------------------------------
	
	The text and utilities of this book make frequent reference to Public Folders.
	Public Folders are a feature of Microsoft Exchange Server. To follow the
	instructions correctly, the reader must be using Microsoft Outlook on a
	Microsoft Exchange Server system.
	
	Microsoft Press is continuing to investigate this issue and will update this
	report when more information is available.
	
	
	Location of Practice Folders
	----------------------------
	
	Pages xi - xiv give a list of the folders included on the companion CD-ROM to
	"Building Applications with Microsoft Outlook 97." However, the list of
	directories on the companion CD-ROM does not appear to match the list of folders
	on pages xi - xiv.
	
	The folders listed on pages xi - xiv are meant to represent the folders included
	in the "Building Microsoft Outlook 97 Applications" hierarchy in your Outlook
	environment. They are not meant to represent directories on your CD-ROM.
	
	The following folders mentioned in pages xi - xiv have separate directories on
	the CD-ROM:
	
	- Outlook Visual Basic Help
	
	- Switch Forms
	
	- Web Site Shortcuts (referred to in the book as "Web Sites")
	
	The "Outlook Visual Basic Help" directory contains the Outlook Forms Help file
	and the Outlook Visual Basic Help file. "Switch Forms" contains the Switch Forms
	utility, mentioned as being part of the Miscellaneous folder. "Web Sites"
	contains the list of Web sites, mentioned as part of the Help and References
	folder.
	
	All of the other information necessary for the book is contained in the Building
	Microsoft Outlook 97 Applications .PST file. Once this file is installed, the
	folders will appear as listed in the book in your Microsoft Outlook
	environment.
	
	
	"Building Applications with Microsoft Outlook 97" assumes that the reader is
	using the Microsoft Exchange Server e-mail system as well as Microsoft Outlook.
	However, the requirement for Microsoft Exchange is not made clear on the back
	cover of the book.
	
	Page 6: Typographical Error
	---------------------------
	
	Correction:
	Page 6, paragraph 2, sentence 2:
	Change: "Form more information..."
	To: "For more information..."
	
	
	Chapter 3 Even Page Heading Incorrect
	-------------------------------------
	
	On all of the even numbered pages of chapter 3 change the heading. Change:
	
	  "Part 2 Quick Guide to Building Applications"
	
	To:
	
	  "Part II Quick Guide to Building Applications"
	
	
	Pages 90, 92: Miscellaneous Corrections
	---------------------------------------
	
	Correction:
	Page 90, header 2:
	Change: "Save the Potential Beta Participants View"
	To: "Save the Product Category View"
	
	Page 92, last line:
	Change: "...click Potential Beta Participants."
	To: "...click Product Ideas."
	
	
	Pages 113, 246, and 264: Miscellaneous Errors
	---------------------------------------------
	
	Page 113, figure 5.13 caption:
	Change: "...definition and VBScript.1"
	To: "...definition and VBScript."
	
	Page 246, paragraph 1, sentence 4:
	Change: "Descending order sorts items in alphabetical order..."
	To: "Descending order sorts items in reverse alphabetical order..."
	
	Page 264, paragraph 5, sentence 1:
	Change: "...based on the contents of the From, Sent, To, Subject..."
	To: "...based on the contents of the From, Sent To, Subject..."
	
	
	Page 289: Code Error
	--------------------
	
	Page 289, third CommandButton1_Click code sample:
	Change code to read as follows:
	
	  Sub CommandButton1_Click
	     Set MyFolder = Application.GetNameSpace("MAPI").GetDefaultFolder(6)
	     Set MyItems = MyFolder.Items
	     For i = 1 to 3
	        MsgBox MyItems(i).Subject
	     Next
	  End Sub
	
	Note the change in line 5 ("MsgBox MyItems(i).Subject").
	
	
	Page 309: Text Error
	--------------------
	
	Page 309, paragraph 4, sentence 2:
	Change: "...the CommandButton1 control moves to the left."
	To: "...the CommandButton1 control moves to the right."
	
	
	Pages 310, 327: Miscellaneous Errors
	------------------------------------
	
	Page 310, code sample 2:
	The example code does not use the For Each...Next construct that is discussed in
	the paragraph above. Instead, it uses a For...Next loop.
	
	Change the code to read as follows:
	
	    Sub CommandButton1_Click
	       Set Page = Item.GetInspector.ModifiedFormPages("Test")
	       Set MyControls = Page.Controls
	       For Each MyControl in MyControls
	             MsgBox MyControl.Name
	       Next
	    End Sub
	
	Page 327, code samples:
	The code in the text is correct, but the code on the CD-ROM is different and
	incorrect. Using the application on the CD-ROM, the user can change the value of
	the "Book Category" combo box but not the "Book Name" combo box.
	
	Correction: In the Library Materials form, change the Item_CustomPropertyChange
	subroutine and ChangeBookNameValues subroutine to match page 327.
	
	
	Page 328: Text Error
	--------------------
	
	Change: "In the right-hand box in the Forms Manager..."
	To: "In the left-hand box in the Forms Manager..."
	
	
	Pages 365, 366, 460, 468: Misc. Errors
	--------------------------------------
	
	Page 365, section "Add the BusinessCardRequestStatus Control":
	Add steps as follows:
	
	1. Drag a Label control from the Control Toolbox to the form.
	
	2. Click the Label control, and then type "Request Status:" (without the
	  quotation marks)
	
	3. Resize and position the Label control as needed.
	
	Page 366, step 6, column "Setting":
	Change: "BusinessCardDateProcessed1"
	To: "BusinessCardDateProcessed"
	
	Page 460, Figure 12.8:
	Change screenshot from Approval and Status tab to Virus Check/Posted tab.
	
	Page 468, code fragment, line 8:
	Move "Else" three characters left to align with the proper "If" clause.
	
	
	Page 393: Text Error
	--------------------
	
	Page 393, second step 1:
	Change:
	"In the Folder List, right-click the Help Desk Application folder, and then click
	Properties on the shortcut menu."
	To:
	"In the Folder List, right-click the Help Desk folder in the Help Desk
	Application folder, and then click Properties on the shortcut menu."
	
	
	Page 404: Code Error
	--------------------
	
	Page 404, code listing line 16:
	Change:
	
	  Set HelpDeskAppFolder = HelpDeskFolder.Parent
	
	To:
	
	  Set HelpDeskAppFolder = HelpDeskFolder
	
	This change must also be made in the corresponding code on the CD-ROM.
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: mspress ms_press press bookbug 1-57231-536-9
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch kbZNotKeyword2
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
