---
layout: page
title: "Q171150: Outlook 97 SBS: Steps Unclear for Non-Exchange Installation"
permalink: kb/171/Q171150/
---

## Q171150: Outlook 97 SBS: Steps Unclear for Non-Exchange Installation

	Article: Q171150
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kbother
	Last Modified: 16-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Outlook 97 Step by Step ISBN 1-57231-382-X 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are not connected to a Microsoft Exchange server, the steps on page xxvi
	of Microsoft Outlook 97 Step by Step for creating a practice profile, personal
	address book, and personal folder file are unclear.
	
	MORE INFORMATION
	================
	
	If you have already installed a practice profile for the fictitious "Shawn
	Davis," but have experienced difficulties using the profile, you should delete
	the practice profile and reinstall it according to the instructions in the
	"Resolution" section.
	
	RESOLUTION
	==========
	
	To delete the practice profile, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click the Mail icon.
	
	3. Make sure the Services tab is selected, and then click Show Profiles.
	
	4. Make sure the General tab is selected, and then click the Shawn Davis profile
	  (or any other profile you want to delete) in the Profiles box.
	
	5. Click Remove, and then click OK.
	
	To correctly install the practice profile if you are not using Microsoft Exchange
	Server, follow these steps. Make sure that you have already completed the steps
	in the "Modify Outlook startup settings" section on page xxv.
	
	NOTE: These steps are adapted from those listed on pages xxvi-xxvii under "Create
	a practice profile" and "Create a practice personal address box and personal
	folder file." These steps are designed for readers who are not using Microsoft
	Exchange Server.
	
	1. Double-click the Microsoft Outlook shortcut icon on the Desktop. Note that
	  the Choose Profile dialog box appears.
	
	2. Click New. The Inbox Setup Wizard starts.
	
	3. In the Inbox Setup Wizard dialog box, verify that the Use The Following
	  Information Services option button is selected, and then verify that only the
	  Microsoft Mail check box is selected. Make sure the Microsoft Exchange Server
	  check box is not checked. Click Next.
	
	4. In the Profile Name box, type Shawn Davis, and then click Next.
	
	5. In the Microsoft Mail dialog box that states that "You must provide a patch
	  to the location of the postoffice," click Browse. The Browse For Postoffice
	  dialog box appears.
	
	6. Double-click your hard disk, then double-click the Outlook SBS folder, and
	  then highlight the Wgpo0000 folder by clicking on it once only. Click OK, and
	  then click Next.
	
	7. Select the name Shawn Davis from the list of names, and then click Next.
	
	8. Type "password" (without the quotation marks) in the Password box, and then
	  click Next.
	
	9. In the path box, select the text "C:\Exchange\mailbox.pab", type "shawnd.paB"
	  (without the quotation marks), and then click Next.
	
	10. In the post office box, select the text "C:\Exchange\mailbox.pst", type
	  "shawnd.pst" (without the quotation marks), and then click Next.
	
	11. Verify that the Do Not Add Inbox to StartUp Group option button is selected,
	  and then click Next.
	
	12. Click Finish. Click Cancel to close the Choose Profile dialog box.
	
	The Shawn Davis profile will now be set up correctly. You can now continue
	following the original book beginning with Lesson 1.
	
	STATUS
	======
	
	Microsoft Press has confirmed this to be a problem in "Microsoft Outlook 97 Step
	by Step." This problem will be corrected in future reprints and editions of the
	book.
	
	Additional query words: mspress ms_press press bookbug Outlook sbs setup install kb3rdparty kbinterop
	
	======================================================================
	Keywords          : kb3rdparty kbother 
	Technology        : kbMSPressSearch
	Version           : :
	
	=============================================================================
	
