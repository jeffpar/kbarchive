---
layout: page
title: "Q112901: PC Adm: Moving a Postoffice to Another Server"
permalink: kb/112/Q112901/
---

## Q112901: PC Adm: Moving a Postoffice to Another Server

	Article: Q112901
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	To move a postoffice from one server to another, follow these steps:
	
	
	1. At any workstation, log onto the network as an administrator.
	
	2. Connect to the server and directory where the postoffice is located. NOTE:
	  Connect to the server using a drive letter.
	
	3. As in step 2, connect to the destination server and directory.
	
	4. From the current postoffice location, type the following command so you have
	  a hard copy of all the postoffice file attributes:
	
	  "attrib *.* /s > <filename>.txt" (without the quotation marks)
	
	5. If Schedule+ is installed, change to the CAL subdirectory and type the
	  following commands:
	
	  "attrib -h schedule.key
	  cd.." (without the quotation marks)
	
	6. From the current postoffice location, type
	
	  "xcopy *.* <drive>: /s /e" (without the quotation marks)
	
	  where <drive> is the destination drive you specified in step 3.
	
	7. Change drives to the new postoffice location. If Schedule+ is installed,
	  change to the CAL directory and type the following commands:
	
	  "attrib +h schedule.key
	  cd.." (without the quotation marks)
	
	8. Use the <FILENAME>.TXT file you created in step 4 to manually change
	  all previously read-only files back to read-only by typing
	
	  "attrib +r <filename2>" (without the quotation marks)
	
	  where <filename2> is the file you want to make read-only.
	
	  NOTE: Do not change these file attributes all at once (by using a wildcard).
	  Mail will not function properly if you do.
	
	Additional query words: 3.00 3.00b 3.20 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
