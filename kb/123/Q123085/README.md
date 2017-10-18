---
layout: page
title: "Q123085: ADT2: Creating Custom Setup That Does Not Create Program Group"
permalink: kb/123/Q123085/
---

## Q123085: ADT2: Creating Custom Setup That Does Not Create Program Group

	Article: Q123085
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	This article describes how to create a custom Setup program with the Microsoft
	Access Developer's Toolkit (ADT) that will not create a program group for your
	custom application.
	
	NOTE: In Microsoft Access Developer's Toolkit for Windows 95, to create an
	application that will not create a program group for the custom application, do
	not create any short cuts.
	
	MORE INFORMATION
	================
	
	The following steps demonstrate how to create a custom Setup program that will
	not create a program group for your custom application.
	
	NOTE: These steps demonstrate making changes to the SETUP.STF file. Modifications
	to this file are not supported by Microsoft. Microsoft provides this information
	"as is" without warranty of any kind, either express or implied, including but
	not limited to the implied warranties of merchantability and/or fitness for a
	particular purpose.
	
	1. Run the Setup Wizard as usual to create Setup disks for your application.
	  Make sure to select the Show In Program Manager Group and Run With MSARN200
	  check boxes when you select your application.
	
	2. Once the Setup disks are created, make a backup copy of the SETUP.STF file on
	  Disk 1.
	
	3. Open the SETUP.STF file in a spreadsheet program such as Microsoft Excel.
	  SETUP.STF is a tab-delimited file.
	
	4. Search column C for the following entry:
	
	  ---- User Non File Work ----
	
	  This entry should be near the bottom of the column.
	
	5. Remove the first Object ID number in column F of the same row. That number
	  should correspond to the "---- User ProgMan Items ----" entry. Note that
	  there may be multiple Object ID numbers in the cell. Remove only the first
	  number.
	
	6. Save the file. Make sure to save it in tab-delimited format.
	
	7. Run the custom Setup program. Note that no program group is created.
	
	REFERENCES
	==========
	
	Microsoft Access Developer's Toolkit "Advanced Topics," version 2.0, Chapter 2,
	"Creating a Custom Setup Program," pages 19-37
	
	Additional query words: progman icon
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbAudDeveloper kbAccessSearch kbAccessDevTK200 kbZNotKeyword3
	Version           : WINDOWS:2.0
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
