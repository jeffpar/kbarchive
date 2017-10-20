---
layout: page
title: "Q192503: Running Office 97, Page xxxvi: Incorrect Setup Path for E-Book"
permalink: /kb/192/Q192503/
---

## Q192503: Running Office 97, Page xxxvi: Incorrect Setup Path for E-Book

{% raw %}

	Article: Q192503
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Running Microsoft Office 97, Updated Edition ISBN 1-57231-889-9 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Page xxxvi states that you can install the electronic books (e-books) by typing
	d:\ebooks\setup at the Run option in the Start menu. However, if you perform
	this operation, you will see the following message:
	
	  Cannot find the file 'd:\ebooks\setup' or one of its components.
	
	CAUSE
	=====
	
	The path is printed incorrectly in the book.
	
	RESOLUTION
	==========
	
	There are two electronic books available on the CD-ROM. One contains the book
	"Running Microsoft Office 97 Updated Edition," and the other contains the book
	"Running Microsoft Word 97."
	
	To install "Running Microsoft Office 97 Updated Edition," click Start, clcik Run,
	and type the following command:
	
	  " d:\ebook\runoff97\setup" (without the quotation marks)
	
	To install "Running Microsoft Word 97," click Start, click Run, and type the
	following command:
	
	  " d:\ebook\runwrd97\setup" (without the quotation marks)
	
	In both cases, change d: to the drive letter of your CD-ROM drive if necessary.
	
	STATUS
	======
	
	Microsoft Press has confirmed this to be an issue in "Running Microsoft Office
	97 Updated Edition."
	
	
	Additional query words: ms_press 1-57231-889-9
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
