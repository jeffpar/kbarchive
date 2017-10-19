---
layout: page
title: "Q162525: BUILDING MS EXCHANGE APPLICATIONS Corrections and Comments"
permalink: /kb/162/Q162525/
---

## Q162525: BUILDING MS EXCHANGE APPLICATIONS Corrections and Comments

	Article: Q162525
	Product(s): Microsoft Press
	Version(s): ; winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Building Microsoft Exchange Applications ISBN 1-57231-334-X 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book "Building Microsoft Exchange
	Applications."
	
	The following topics are covered:
	
	- Pre-addressed forms might not link properly
	
	- Page xxxiv: PJK.PST renamed to PJKAPPS.PST
	
	- Chapter 5: Excel container control-sizing
	
	- Chapter 5: The Excel OLE container control---odd characters
	
	- Chapter 6: The "To" button is cut off in the Response form
	
	- Chapter 9: Posting a Word document to Exchange
	
	- Chapter 12: Switch views in the Hotel/Restaurant folder
	
	MORE INFORMATION
	================
	
	In addition to a description of the book's problems, each entry in this document
	might also include sections labeled "Correction" and "Comments." Please note
	that the "Correction" section is meant to correct the book and does not
	necessarily address the problem introduced by the book error. The "Comments"
	section contains specific information for working around the problem.
	
	Pre-addressed forms might not link properly
	-------------------------------------------
	
	Many forms that are provided with this book utilize the Pre-Address feature of
	Microsoft Forms Designer. However, the preset address might not link to the
	appropriate folder under certain conditions, including:
	
	- The folder is not already present, or the form design is altered.
	
	- The folder design is significantly altered, or the Pre-Addressing is changed.
	
	- The public folder address was added to the Personal Address Book more than
	  once.
	
	One workaround is to have the system administrator make a public distribution
	list or e-mail alias, and then pre-address the form to this global name rather
	than a public folder contained in your personal address list.
	
	  ***************
	  * UNCONFIRMED *
	  ***************
	
	If you want to resolve the problem using your Personal Address List, the
	following steps outline the resolution most likely to fix this problem:
	
	1. Click the Tools menu, and then click Address Book.
	
	2. Select Personal Address Book from the Show Names drop-down box.
	
	3. Delete all instances of the target folder address from the list by
	  right-clicking the desired address and then clicking Delete.
	
	4. Close the Address Book.
	
	  In addition to deleting the address references, it might be necessary to
	  delete all other references to the folder address, including recreating the
	  folder itself.
	
	5. Open Forms Designer.
	
	6. Open the EFP file that is associated with the pre-addressed folder.
	
	7. Double-click the To field, and then select the Initial Value tab.
	
	8. Delete all items in the To list.
	
	9. Click Close.
	
	10. Save the form design.
	
	11. In Microsoft Exchange Client, save or move any messages or subfolders in the
	  target public folder.
	
	12. Delete the target folder by right-clicking it and then selecting Delete.
	
	  At this point, all references to the target folder have been completely
	  removed. Use the following steps to re-create the pre-address connection:
	
	13. In Microsoft Exchange Client, create the folder (using the same original
	  name if desired) and set the appropriate folder permissions and settings.
	
	14. In the Folder Properties, select the Administration tab and then click the
	  Personal Address Book button.
	
	15. In Microsoft Exchange Forms Designer, open the desired EFP file.
	
	16. Double-click the To field, and then select the Initial Value tab.
	
	17. Click the To button, and then select the target folder from the Personal
	  Address List.
	
	18. Click the Close button, and then save the EFP file.
	
	19. Reinstall the form following the procedures outlined in associated chapter.
	
	20. If any changes were made to the form using Visual Basic, reapply the changes
	  as outlined in the associated chapter.
	
	SYMPTOMS
	========
	
	Usually, any message sent with the incorrectly pre-addressed form will be
	returned as undeliverable. Other symptoms include having the message sent but
	never arrive at the target public folder.
	
	Chapter 5:  Excel container control-sizing
	------------------------------------------
	
	The Excel container control will resize itself to show a partial spreadsheet,
	leaving areas of the control as whitespace.
	
	Comments:
	
	Confirmed Workarounds:
	
	Resize the container control before sending the form. Double-click the container
	control and use the handles on the control to resize the spreadsheet. Note that
	the maximum size of the spreadsheet is dependent on the size of the container
	control.
	
	Chapter 5:  The Excel OLE container control---odd characters
	------------------------------------------------------------
	
	When the Excel OLE container control is activated in the Weekly Schedule
	application, it might respond by highlighting multiple cells as you attempt to
	edit the container control or it might add control characters instead of the
	character you typed.
	
	Comments:
	
	Confirmed WORKAROUND
	--------------------
	
	To work around this problem, click outside the container control to return to the
	form, then re-edit the container control. This usually clears up the problem.
	
	If the problem continues, close the form and then reopen it and edit the
	container control.
	
	Chapter 6:  The "To" button is cut off in the Response form
	-----------------------------------------------------------
	
	Symptom:
	
	The Forms Designer response form template (SNDR2WND.EFP) might contain a bug. The
	"To" button is cut off at run time. The button appears normal in the Forms
	Designer and in Visual Basic during design time. Modifying the layout in Visual
	Basic does not fix the problem.
	
	Comments:
	
	No known workarounds at this time. If the "To" button is necessary, try to use a
	different form.
	
	This problem is not known to occur in the rest of the templates.
	
	Chapter 9:  Posting a Word document to Exchange
	-----------------------------------------------
	
	Symptom:
	
	Microsoft Word documents do not post to the Exchange Client. This typically is
	caused by not saving the Word document.
	
	Comments:
	
	Please note that before posting a document to Exchange using Post To Exchange
	Folder in Word's File menu, you must first save the file. Otherwise, the Word
	document might not post to the Exchange client.
	
	Chapter 12:  Switch views in the Hotel/Restaurant folder
	--------------------------------------------------------
	
	General Note:
	
	Please note that the views in the Hotel/Restaurant folder are set up to show
	either all the Hotels or all the Restaurants, but not both. The initial view on
	the folder will be set to Normal in the Personal Views sub-menu. Once you follow
	the customizing instructions in the Chapter 12 Readme12.doc file and set the
	Initial View On Folder in the folder's Properties dialog box, that view will
	take effect and only the filtered items will be shown in Exchange Client's
	Viewer window.
	
	Example:
	
	To view Restaurants sorted by their cuisine rating, choose Folder Views from the
	View menu, and then choose By Cuisine.
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	CAUSE
	=====
	
	This issue is caused by having duplicate, missing, or corrupted folder address
	information in the Personal Address Book. This issue is not known to occur when
	pre-addressing forms to an alias or address located in the global address list.
	
	
	Page xxxiv: PJK.PST renamed to PJKAPPS.PST
	------------------------------------------
	
	The file PJK.PST has been renamed on the CD-ROM. The new name of this file is
	PJKAPPS.PST.
	
	This file is not copied over to the hard drive by the "Building Microsoft
	Exchange Applications" setup program. The file will need to be manually copied
	from the CD-ROM directory \PJKAPPS\PJKAPPS.PST to the hard drive. To add this
	file as a Personal Information Store, follow the steps on page xxxiv, replacing
	PJK.PST with PJKAPPS.PST where necessary.
	
	For further information, please read the README.DOC file included in the root
	directory of the "Building Microsoft Exchange Applications" CD-ROM.
	
	Correction:
	
	Page xxxiv, section "Adding the .PST File", paragraphs 1 & 2:
	Replace all instances of: "PJK.PST"
	With: "PJKAPPS.PST"
	
	Page xxxv, step 4:
	Replace "PJK.PST"
	With: "PJKAPPS.PST"
	
	Additional query words: mspress ms_press press bookbug
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbMSPressSearch
	Version           : :; winnt:3.51,4.0
	
	=============================================================================
	
