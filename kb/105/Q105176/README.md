---
layout: page
title: "Q105176: PC Win: Lotus 1-2-3 WYSIWYG Attachments"
permalink: /kb/105/Q105176/
---

## Q105176: PC Win: Lotus 1-2-3 WYSIWYG Attachments

	Article: Q105176
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you attach a Lotus 1-2-3 file to a mail message, the formatted WYSIWYG file
	is not automatically attached. If both files are attached to a version 3.0,
	3.0b, or 3.2 Microsoft Mail for Windows message and you start the Lotus 1-2-3
	file, the WYSIWYG file is not automatically invoked.
	
	MORE INFORMATION
	================
	
	Versions of Lotus 1-2-3 earlier than version 4.0 use either an add-in module
	(WYSIWYG) or Allways to generate the enhanced formatting of the spreadsheet
	file. These enhancements are stored in a separate file. Because Allways and
	WYSIWYG perform in the same manner, this article will refer to the WYSIWYG .FM3
	file extension. All references to Lotus 1-2-3 are for file formats earlier than
	version 4.0.
	
	When you start up a Lotus 1-2-3 file and WYSIWYG is invoked, the program searches
	for both a .WKx file and a .FM3 file in the same directory. If the program finds
	both, it opens the .WKx file and then starts WYSIWYG to bring up the enhanced
	formatting. There is no form of coupling between the files, and the spreadsheet
	file is completely unaware of the existence of the formatting file. To "see" the
	special formatting, the sender must attach both the spreadsheet file and the
	format file. The receiver must save both attachments to the same subdirectory,
	start Lotus 1-2-3, and then open the spreadsheet file in that subdirectory.
	
	With Lotus 1-2-3 version 4.0, a new file format (.WK4) has been introduced. Like
	Microsoft Excel, the graphics/formatting information is contained in the
	spreadsheet file. However, in an environment where there are several versions of
	Lotus 1-2-3, separate format and spreadsheet files are created for the older
	versions and, thus, the original problem occurs again.
	
	This behavior is independent of Microsoft Mail and has been confirmed with Lotus
	Technical Support. The same results can be achieved from the Windows Program
	Manager by placing the format file in a separate subdirectory from the
	spreadsheet file and then double-clicking the spreadsheet file.
	
	Lotus 1-2-3 and Allways are manufactured by Lotus Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
