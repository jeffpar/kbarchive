---
layout: page
title: "Q198608: How to Modify Host Code Page for Logical Not Character"
permalink: kb/198/Q198608/
---

## Q198608: How to Modify Host Code Page for Logical Not Character

	Article: Q198608
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some printers require a Logical Not character for print control. This character
	can be translated using a host code page file.
	
	MORE INFORMATION
	================
	
	A host code page is used to perform character translation between EBCDIC
	characters from a host and ASCII characters used for printing.
	
	The default code page within Microsoft SNA Server translates an EBCDIC "5F"
	(without the quotes), sent from the host, to ASCII AC. However, the Logical Not
	character is ASCII "5E" (without the quotes). The two steps below are necessary
	to translate 5F to 5E.
	
	First, a code page file must be modified. Code page files are included on the
	Microsoft SNA Server CD in the PRINTSERVERADDONS directory. Code page file
	E037ansi.cpg is appropriate for the English (United States) character set. Open
	the file with a hexadecimal editor, and change the AC character found in row 5,
	position F, to 5E. Save the modified file.
	
	Second, the print session in SNA Server Manager must be configured to use the
	modified file for character translation. This setting is found on the General
	tab of the print session Properties dialog box. Select Custom, and click the
	File button to select E037ansi.cpg. The file may be placed in any directory on
	the Microsoft SNA Server. After this change is made, save the configuration, and
	restart the SNA Print Service.
	
	REFERENCES
	==========
	
	More information on character translation and the host code page files is found
	in the "Microsoft SNA Print Service" white paper. It is found at http://ww
	w.microsoft.com/sna/guide/print.asp?A=2&B=6.
	
	The Microsoft SNA Server Reference contains information on character translation.
	Appendix E, "Host Print Service Character Translation Table Format," describes
	the table format and the character translation process. This information is
	available via on-line help in SNA Server Manager.
	
	Additional query words: Host Code Page
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1
	Issue type        : kbinfo
	
	=============================================================================
	
