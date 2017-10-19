---
layout: page
title: "Q64861: Using the QMS Jetscript with Windows 3.0"
permalink: /kb/064/Q64861/
---

## Q64861: Using the QMS Jetscript with Windows 3.0

	Article: Q64861
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The QMS Jetscript may not function correctly under Microsoft Windows version 3.0
	unless a file is created and copied to the printer. To create this file, do the
	following:
	
	1. Using a text editor such as Notepad, type the following text (all characters
	  must be lowercase):
	
	  " serverdict begin 0 exitserver
	  statusdict begin
	  0 setdefaultparallel
	  0 setparallel
	  start" (without the quotation marks)
	
	2. Save this file as R.ON for Reverse channel ON (the file must be saved as an
	  unformatted text file or ASCII file).
	
	3. Copy R.ON to the printer. You can do this by entering the following from a
	  DOS prompt
	
	  " COPY R.ON LPTx:" (without the quotation marks)
	
	  where x is a number between 1 and 3
	
	MORE INFORMATION
	================
	
	The information in this article was taken from the QMS technical notes. Any
	questions concerning this procedure should be directed to QMS.
	
	The QMS product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
