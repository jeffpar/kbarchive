---
layout: page
title: "Q111685: AWFAX: Invalid Directory Accepted in Share Fax Modem Dialog"
permalink: /kb/111/Q111685/
---

## Q111685: AWFAX: Invalid Directory Accepted in Share Fax Modem Dialog

	Article: Q111685
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are sharing a fax using Microsoft At Work PC Fax, the Share Local Fax
	Modem dialog box allows you to type an invalid directory name. When you choose
	OK, you receive the following error message:
	
	  The Share directory does not exist
	
	When a valid share directory is entered, At Work PC Fax accepts it, but the
	invalid share directory created previously remains on the hard disk. The
	directory cannot be deleted by using File Manager or by using the MS-DOS RMDIR
	command.
	
	RESOLUTION
	==========
	
	You can remove the directory with the MS-DOS 6 DELTREE command. For example, if
	the directory was created with spaces between each letter
	
	  C:\F A X
	
	then the following command (executed from the parent directory) removes the
	invalid directory:
	
	     DELTREE "F A X"
	
	NOTE: Use the SPACEBAR to add the spaces and make sure you include the quotation
	marks.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.11. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.11 dir shared atwork Create Directory button
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
