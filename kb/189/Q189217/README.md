---
layout: page
title: "Q189217: Running Office 97 Updated Ed. Intl. Version: Incorrect Setup"
permalink: /kb/189/Q189217/
---

## Q189217: Running Office 97 Updated Ed. Intl. Version: Incorrect Setup

	Article: Q189217
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Running Microsoft Office 97, Updated Edition (Int'l Version) ISBN 1-57231-926-7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Page xxxvi of "Running Microsoft Office 97, Updated Edition (Int'l Version)"
	states that you can install the electronic books (e-books) by typing
	
	  " d:\ebooks\setup " (without the quotation marks)
	
	at the Run command on the Start menu. However, if you perform this operation, you
	will see the following message:
	
	  Cannot find the file 'd:\ebooks\setup' or one of its components.
	
	CAUSE
	=====
	
	The path is printed incorrectly in the book.
	
	RESOLUTION
	==========
	
	There are two electronic books available on the CD-ROM. One contains the book
	"Running Microsoft Office 97 Updated Edition," and the other contains the book
	"Running Microsoft Word 97."
	
	To install "Running Microsoft Office 97 Updated Edition," click Start, click Run,
	and type:
	
	  " d:\ebook\runoff97\setup " (without the quotation marks)
	
	To install "Running Microsoft Word 97," click Start, click Run, and type:
	
	  " d:\ebook\runwrd97\setup " (without the quotation marks)
	
	In both cases, change d: to the drive letter of your CD-ROM drive if necessary.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in "Running Microsoft Office 97,
	Updated Edition (Int'l Version)."
	
	
	Additional query words: ms_press 1-57231-926-7
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
