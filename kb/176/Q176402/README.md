---
layout: page
title: "Q176402: Introducing Microsoft Windows 98 Comments and Corrections"
permalink: kb/176/Q176402/
---

## Q176402: Introducing Microsoft Windows 98 Comments and Corrections

	Article: Q176402
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 13-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Introducing Microsoft Windows 98, ISBN 1-57231-630-6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information on known errors, corrections, and comments
	relating to the Microsoft Press book "Introducing Microsoft Windows 98," ISBN
	1-57231-630-6.
	
	Contents:
	
	- ActiveMovie Now Called DirectShow
	
	- Page 73: Web Path Incorrect
	
	- Page 158: Outlook Express Will Not Support Faxes
	
	- Page 322: Win32 Driver Model Supports All Audio Types
	
	- Page 350: Incorrect Short Filename Representations
	
	MORE INFORMATION
	================
	
	ActiveMovie Now Called DirectShow
	---------------------------------
	
	Pages 20, 79, 81, and 441: All references to Microsoft ActiveMovie should be to
	Microsoft DirectShow.
	
	
	Page 73: Web Path Incorrect
	---------------------------
	
	Page 73, top of page:
	Change: "http://www.w3.orgPICS"
	To: "http://www.w3.org/PICS/"
	
	
	Page 158: Outlook Express Will Not Support Faxes
	------------------------------------------------
	
	Page 158 states that Outlook Express will send, receive, and organize e- mail,
	faxes, and other information. However, Outlook Express does not support faxes.
	
	Correction: Page 158, paragraph 7, sentence 1:
	Change: "...organize e-mail, faxes, and other information."
	To: "...organize e-mail and other information."
	
	Page 159, bullet 4:
	Delete bullet "The Microsoft Fax Driver" and adjoining paragraph.
	
	
	Page 322: Win32 Driver Model Supports All Audio Types
	-----------------------------------------------------
	
	The "WDM digital audio" section of page 322 states, in part: "If you aren't
	planning to use USB speakers, this section is probably of no use to you.... The
	features mentioned in the following paragraphs are of no relevance to systems
	with conventional audio systems installed."
	
	However, the Win32 Driver Model will support all types of audio systems,
	including USB, ISA, and PCI. Much of the information in this section is valid
	for non-USB systems as well.
	
	Page 322:
	
	- Delete paragraph 6 ("If you aren't planning to use USB speakers...")
	
	- Move the "USB support" section below the "WDM digital audio" section
	
	- Move USB-specific information from the "WDM digital audio" section to the
	  "USB support" section
	
	
	Page 350: Incorrect Short Filename Representations
	--------------------------------------------------
	
	The list of long filenames on page 350 contains incorrect short filename
	representations. All long filenames have a short filename representation ending
	with ~1 (or some other number). Below is the correct directory listing:
	
	Volume in drive C is MY HARDDISK
	Volume Serial Number is 1E30-830F
	Directory of C:\Long Filename Directory
	
	.        <DIR> 11-07-97  8:39a .
	..       <DIR> 11-07-97  8:39a ..
	4THQUA~1 XLS 147 11-07-97 8:40a 4th Quarter Analysis.xls
	BOSS'S~1 TXT 147 11-07-97 8:41a Boss's birthday card.txt
	1994FI~1 DOC 147 11-07-97 8:41a 1994 Financial Projections.doc
	COMPAN~1 BMP 147 11-07-97 8:41a Company Logo.bmp
	FISCAL~1 <DIR>   11-07-97 8:42a Fiscal Year Information
	SHORTC~1 PIF 147 11-07-97 8:42a Shortcut to MS-DOS Application.pif
	NEWWAV~1 WAV 147 11-07-97 8:43a New Wave Sound.wav
	NEWVID~1 AVI 147 11-07-97 8:44a New video.avi
	DIRECT~1 DOC 147 11-07-97 8:44a Directions to company picnic.doc
	        8 file(s)              0 bytes
	        3 dir(s)     861,011,968 bytes free
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of the book, it may already
	contain the above corrections.
	
	Additional query words: press ms_press win98
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	
