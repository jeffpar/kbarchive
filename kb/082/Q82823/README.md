---
layout: page
title: "Q82823: How Does Cardfile Verify Writes?"
permalink: kb/082/Q82823/
---

## Q82823: How Does Cardfile Verify Writes?

	Article: Q82823
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Windows version 3.1, the Cardfile accessory application has a
	Validate Writes check box in the File Save dialog box. If this check box is
	selected, then Cardfile verifies the integrity of the changes it writes to the
	file.
	
	MORE INFORMATION
	================
	
	When Save or Save As is chosen from the File menu, Cardfile writes the changes
	to a temporary file. If Validate Writes is selected, Cardfile then reopens this
	temporary file and checks that it can read it.
	
	Cardfile does not compare the files card by card, but merely makes certain that
	the file opened is in a valid Cardfile format by checking the validity of the
	following:
	
	- The header for the whole file
	
	- The header for each card
	
	If one of the above checks fails, the temporary file is not considered valid.
	This means that if only one card is corrupted, the whole file will be marked as
	bad.
	
	If the temporary file is valid, the temporary file is renamed to the filename you
	specify. By performing the validation in this manner, the old file is not
	corrupted when you try to update it with more information.
	
	Cardfile for Windows 3.1 has a new format that allows it to support OLE and
	contain pictures. The new format entails a change in the header for the file. If
	the file contains a picture, Cardfile saves the file in this new format. If it
	does not contain a picture, Cardfile saves the file in the format used in
	Cardfile for Windows version 3.0, allowing both versions to read it. If someone
	takes a file containing a picture and tries to open it using the 3.0 version of
	Cardfile, the following message will appear:
	
	  Not A Valid Cardfile
	
	For more information on the Cardfile format, query on the following words in the
	Microsoft Knowledge Base:
	
	  appnote and cardfile and format
	  validateFileWrite=1
	
	Additional query words: appnote 3.1 3.10 3.00 3.0
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
