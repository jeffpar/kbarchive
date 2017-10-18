---
layout: page
title: "Q132681: PC Adm: How to Reformat Full Name Field in PO Address List"
permalink: kb/132/Q132681/
---

## Q132681: PC Adm: How to Reformat Full Name Field in PO Address List

	Article: Q132681
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Occasionally, it may be necessary to change the formatting of the Full Name
	field for an entire postoffice. Although it is possible to do this by using the
	Mail Administrator program (ADMIN.EXE) and changing each name manually, it is
	more efficient to use the Import utility (IMPORT.EXE).
	
	MORE INFORMATION
	================
	
	To use the IMPORT.EXE utility to change the Full Name field for an entire
	postoffice, complete the following steps:
	
	1. At the MS-DOS command prompt, type the following:
	
	  " import -x -dm admin -p<password> -fd:\exp1.txt" (without the
	  quotation marks)
	
	  This will produce a file in the following format:
	
	     A g10to4                         PCM:NET1/PO1/g10to4
	     A g15to9                         PCM:NET1/PO1/g15to9
	     A Administrator                  PCM:NET1/PO1/Admin
	     A adminsch                       PCM:NET1/PO1/adminsch
	     A PO1 User One                   PCM:NET1/PO1/one1
	     A one2                           PCM:NET1/PO1/one2
	     A one3                           PCM:NET1/PO1/one3
	     A one4                           PCM:NET1/PO1/one4
	     A Administrator                  PCM:NET2/PO2/Admin
	     A adminsch                       PCM:NET2/PO2/adminsch
	     A g20to4                         PCM:NET2/PO2/g20to4
	     A g25to9                         PCM:NET2/PO2/g25to9
	     A two1                           PCM:NET2/PO2/two1
	     A two2                           PCM:NET2/PO2/two2
	
	  The goal is to change all of the NET1/PO1 users' Full Names to the same format
	  as that of PO1 User One.
	
	2. Reformat the file using Excel or a similar tool so that it looks similar to
	  the list below:
	
	     M one2                           PCM:NET1/PO1/one2
	       PO1 User 2                     PCM:NET1/PO1/one2
	     M one3                           PCM:NET1/PO1/one3
	       PO1 User 3                     PCM:NET1/PO1/one3
	     M one4                           PCM:NET1/PO1/one4
	       PO1 User 4                     PCM:NET1/PO1/one4
	
	3. At the MS-DOS command prompt, type:
	
	  " import -dm admin -p<password> -a -f:c\imp1.txt" (without the
	  quotation marks)
	
	4. To test the results, type:
	
	  " import -dm admin -x -fc:\exp2.txt" (without the quotation marks)
	
	Additional query words: full name field change po import
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a
	Version           : WINDOWS:3.2,3.2a
	
	=============================================================================
	
