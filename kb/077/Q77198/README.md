---
layout: page
title: "Q77198: Cardfile Err Msg: Insufficient Memory to Read Picture..."
permalink: /kb/077/Q77198/
---

## Q77198: Cardfile Err Msg: Insufficient Memory to Read Picture...

	Article: Q77198
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a particular Cardfile data file is consistently causing errors or other
	problems, the data file may be corrupted. One common error message caused by a
	corrupted data file is:
	
	  Insufficient memory to read picture. Close one or more Windows applications
	  to increase available memory.
	
	When accessing a corrupted data file, certain actions such as using the Find or
	Go To command may cause Unrecoverable Application Errors (UAEs) in Windows 3.0
	or general protection (GP) faults in Windows 3.1. If the file size of the data
	file appears to be quite large, there is a strong possibility that the data file
	is corrupted.
	
	In some cases, it may be possible to salvage all or at least most of the data
	file information, depending on the level of corruption.
	
	MORE INFORMATION
	================
	
	Corrupted data files can be caused by incompatible third-party utilities,
	terminate-and-stay-resident (TSR) programs, or by opening the same data file
	from two instances of Cardfile. It is not possible to do this in Windows 3.1,
	due to a change in design that allows Windows to better handle Cardfile data
	files.
	
	There are generally three ways to salvage a corrupted file:
	
	Using the Cardfile Merge Command
	--------------------------------
	
	The Merge command combines two Cardfile data files into one. In doing so, the
	"merging" Cardfile data file is "stripped" of all non-standard characters, thus
	creating a "clean" data file.
	
	1. Start a new file in Cardfile.
	
	2. From the File menu, choose Merge.
	
	3. When prompted for the Filename, select the corrupted data file.
	
	4. Save the new data file.
	
	Deleting the Damaged Card
	-------------------------
	
	1. If possible, scroll through the cards until you get the error message. Choose
	  the OK button to clear the error message. A blank card will be displayed.
	
	2. From the Card menu, choose Delete and choose the OK button.
	
	3. Continue scrolling through the cards to determine if other cards are damaged.
	  Repeat the process through the end of the data file.
	
	4. Print the data file contents to a file using the Generic/Text Only driver.
	
	  a. Install and configure the Generic/Text Only Printer driver to print to the
	     FILE port.
	
	  b. Load Cardfile and the damaged data file.
	
	  c. From the File menu, choose Print All.
	
	  d. When prompted for the filename, enter a filename with a TXT extension.
	
	  e. Load Notepad and the newly created file.
	
	  f. Load Cardfile and choose New from the File menu.
	
	  g. Cut and Paste each piece of data from the Notepad file to a respective
	     card in Cardfile. Repeat this process until all of the data is now back in
	     Cardfile.
	
	NOTE: Cardfile has a limitation of 1260 cards. If you are approaching this limit,
	you may want to consider merging or deleting cards.
	
	Additional query words: gpf damaged bad 3.0 3.00 3.0a 3.00a 3.1 3.10 3.11 win31
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
