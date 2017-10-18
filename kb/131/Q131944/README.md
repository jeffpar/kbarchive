---
layout: page
title: "Q131944: Windows 95/98: How to Delete Temporary Files"
permalink: kb/131/Q131944/
---

## Q131944: Windows 95/98: How to Delete Temporary Files

	Article: Q131944
	Product(s): Microsoft Home Miscellaneous Products
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kbimu
	Last Modified: 01-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to delete temporary (.Tmp) files in Windows 95/98.
	
	MORE INFORMATION
	================
	
	To remove temporary files, do the following:
	
	1. Click the Start button and then click Shut Down. Click "Restart the Computer
	  in MS-DOS Mode?" Click Yes.
	
	2. At the MS-DOS command prompt, type the following and press ENTER:
	
	  " set " (without the quotation marks)
	
	  Locate the Temp= line and note the location of the TEMP variable.
	
	3. Change to the directory noted in step 2. For example, if TEMP is set to
	  C:\Windows\Temp, type the following at the MS-DOS command prompt and press
	  ENTER:
	
	  " cd\windows\temp " (without the quotation marks)
	
	4. Delete any temporary files in this directory. Temporary files typically have
	  a .Tmp extension. To delete these files, type the following, then press
	  ENTER:
	
	  " del *.tmp " (without the quotation marks)
	
	5. Type "exit" (without the quotation marks) and press ENTER to restart Windows
	  95/98.
	
	NOTE: You should never delete .Tmp files from within the Windows 95 graphical
	user interface because Windows 95 or a Windows-based application may be using
	one of these files.
	
	Additional query words: kbhowto Win95 1995 temp temporary delete
	
	======================================================================
	Keywords          : kbenv kbimu 
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95
	Issue type        : kbhowto
	
	=============================================================================
	
