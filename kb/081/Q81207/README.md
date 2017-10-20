---
layout: page
title: "Q81207: WD97: Printing a Range of Pages in a Multiple-Section Document"
permalink: /kb/081/Q81207/
---

## Q81207: WD97: Printing a Range of Pages in a Multiple-Section Document

{% raw %}

	Article: Q81207
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 winword word97 kblayout
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In Word, you can create a multiple-section document with different page
	numbering in each section. To specify a page or a range of pages to print, you
	must supply both the page and section number of the range you want to print. In
	a multiple-section document that contains more than a single page 1, Word cannot
	determine which "page 1" to print unless you also supply a section number.
	
	To print a range of pages within a nonadjacent section or across sections, use
	the following syntax in the Pages box:
	
	  p<page number>s<section number>-p<page number>s<section
	  number>
	
	For example, to print page 5 of section 3 through page 2 of section 4, type
	"p5s3-p2s4" (without the quotation marks).
	
	To print nonadjacent pages or nonadjacent sections, type the page and section
	numbers, separated by commas (,). For example, to print sections 3 and 5 (not
	section 4), type "s3,s5" (without the quotation marks). To print pages 2 through
	5 of section 3 and pages 1 through 4 of section 5, type "p2s3-p5s3,p1s5-p4s5"
	(without the quotation marks).
	
	For more information, choose the Help button in the Print dialog box and then
	select the "Setting Printing Options" topic.
	
	MORE INFORMATION
	================
	
	The steps to print a page or range of pages in Word are detailed below.
	
	1. Scroll to the page where you want to start printing, and click anywhere
	  within the margins.
	
	2. Note the page and section number as shown on the status bar as in the
	  following example:
	
	  Page 2 Sec 4
	
	3. Scroll to the last page you want to include in the print selection, and click
	  anywhere within the margins.
	
	4. Note the page and section number displaying on the status bar as in the
	  following example:
	
	  Page 1 Sec 5
	
	5. On the File menu, click Print.
	
	6. Under Page Range, select the Pages Option and then type the following in the
	  box:
	
	  2S4-1S5
	
	7. Click OK.
	
	Additional query words: wrong skipped skips left out incorrect contiguous discontiguous non-contiguous
	
	======================================================================
	Keywords          : kbualink97 winword word97 kblayout 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
