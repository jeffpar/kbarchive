---
layout: page
title: "Q143060: PC Gen: How to Install Mail Server 3.5 from the BackOffice CD"
permalink: kb/143/Q143060/
---

## Q143060: PC Gen: How to Install Mail Server 3.5 from the BackOffice CD

	Article: Q143060
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:3.5; winnt:1.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 1.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	NOTE: Version 3.5 of Microsoft Mail for PC Networks Server is included with the
	BackOffice CD version 1.5.
	
	This article outlines the proper steps to install Microsoft Mail Server version
	3.5 from the compact disc. The installation documentation that ships with the
	BackOffice CD is the same documentation for the retail Mail product. This
	documentation assumes that you are installing from floppy disk.
	
	References in this article are made to the appropriate pages of the documentation
	included with BackOffice version 1.5, if necessary.
	
	MORE INFORMATION
	================
	
	How to Install Mail Server 3.5 from the BackOffice 1.5 CD
	---------------------------------------------------------
	
	1. Insert BackOffice CD 1 in the CD-ROM drive. From File Manager on the
	  Microsoft Windows NT Server version 3.51, double-click SETUP.EXE, which is
	  located at the root directory of the BackOffice CD 1.
	
	  Notes:
	
	   - If Windows NT Server version 3.51 software has not been installed, refer
	     to page 4 of the Windows NT Server "Installation Guide" included with
	     BackOffice version 1.5.
	
	   - Windows NT Server version 3.51 must be installed before Mail Server can be
	     setup from the BackOffice CD version 1.5.
	
	2. At the Microsoft BackOffice 1.5 Installer dialog box, click Continue.
	
	3. At the PreInstallation Information dialog box, click OK to continue.
	
	4. At the Name and Organization Information dialog box, enter the following:
	
	  " Name:
	  Company:
	  Product ID:" (without the quotation marks)
	
	  NOTE: The required product ID is located on the back of the BackOffice CD
	  case.
	
	5. At the Microsoft BackOffice 1.5 Installer dialog box, click the check box to
	  select Mail Server 3.5, then click OK to continue.
	
	  NOTE: For the check box to be available, the Windows NT machine that is
	  installing Mail Server 3.5 must have Windows NT Server version 3.51
	  installed. If this is not the case, the check box will not be available and
	  the product, Mail Server, will be grayed out. This is also true for the other
	  products on the BackOffice CD version 1.5.
	
	6. At the Mail Server Dictionary Choices dialog box, select either the U.S.
	  English or International English radio button, then click OK to continue.
	
	7. At the Mail Installation dialog box, when you get the following prompt,
	
	  Do you have an existing Microsoft Mail Postoffice?
	
	  select the appropriate answer. If Yes is selected, then go to Step 8. If No is
	  selected, then skip to Step 11.
	
	8. At the Mail Installation dialog box, click the appropriate selection, either
	  Server or Workgroup.
	
	9. At the Microsoft BackOffice 1.5 Installer dialog box, remove CD 1 from the
	  CD-ROM drive; then insert BackOffice CD 2, and click OK.
	
	10. A command prompt will appear with the standard MS-DOS-based Mail setup
	  (SETUP.EXE) procedures. Refer to Chapter 1 "Updating a Microsoft Mail Post
	  Office" on page 11 of the Microsoft Mail for PC Networks "Administrator's
	  Guide."
	
	  If you upgraded a Workgroup PO, it will require you to serialize the
	  postoffice. Go to step 13.
	
	  If you are updating a existing Mail Server, go to step 14.
	
	11. At the Microsoft BackOffice 1.5 Installer dialog box, remove the BackOffice
	  disc 1 from the CD-ROM drive, then insert BackOffice CD 2, and click OK.
	
	12. A command prompt will appear with the standard MS-DOS based-Mail setup
	  (SETUP.EXE) procedures. In the Mail for PC Network "Administrator's Guide"
	  refer to Chapter 1 "Setup and Update Procedures" on page 8, starting with
	  step 3 to complete the Mail Setup.
	
	  Once the normal MS-DOS based setup is complete a Mail Server Installation
	  dialog box will appear.
	
	13. At the Mail Server Installation dialog box, enter the path of the newly
	  installed Mail Server. This path must contain a drive letter. For example,
	  C:\MAILDATA. It is at this point that the postoffice is serialized. Click OK
	  to continue.
	
	  NOTE: If this step is not completed, the postoffice will maintain an invalid
	  serial number of 799-99992. YOU MUST COMPLETE THIS STEP TO SERIALIZE THE
	  POSTOFFICE.
	
	
	14. At the Microsoft Mail 3.5 Multitasking MTA Setup dialog box, Setup will
	  prompt you to install the Multitasking MTA for Windows NT Server (NT MMTA).
	  If you would like to install this program, click Continue, and refer to
	  Chapter 1 of the Multitasking MTA for Windows NT Server "Administrator's
	  Guide." You will be prompted on screen for the appropriate information.
	
	  If you do not want to install the NT MMTA, click Exit.
	
	15. At the Microsoft Mail 3.5 Multitasking MTA Setup dialog box, click Exit one
	  more time to return to the Microsoft BackOffice 1.5 Installer dialog box.
	
	16. At the Microsoft BackOffice 1.5 Installer dialog box, click OK to complete
	  the setup. Then click Close, and Yes to exit the Installer dialog box.
	
	Additional query words: 1.50 3.50 installation kbhowto
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ150
	Version           : WINDOWS:3.5; winnt:1.5
	
	=============================================================================
	
