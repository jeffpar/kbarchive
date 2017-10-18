---
layout: page
title: "Q195608: WD97: How to Set Up Page with Set Number of Characters Per Line"
permalink: kb/195/Q195608/
---

## Q195608: WD97: How to Set Up Page with Set Number of Characters Per Line

	Article: Q195608
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you type a Word document, you may want to have a certain number of
	characters on each line of text. If the characters are formatted in a monospace
	font, it is possible to calculate the horizontal printable space between the
	margins of the document required to produce a desired number of characters per
	line in the document.
	
	MORE INFORMATION
	================
	
	The following formula can be used to calculate the necessary space between
	margins to produce a certain number of characters (also referred to as columns)
	per line.
	
	  Desired Characters Per Line (columns)
	  -------------------------------------         =  Required Print Area
	  Font Size (expressed in characters per inch)           in Inches
	
	Monospace fonts such as the TrueType Courier New are comprised of characters with
	equal widths. This attribute allows the creation of documents with specific
	numbers of characters per line. Proportional fonts contain characters of varying
	widths that do not facilitate the creation of certain numbers of characters per
	line.
	
	NOTE: Characters per line in documents is sometimes referred to as "Columns per
	line."
	
	The following table lists some commonly used font sizes.
	
	  Characters        Font
	  Per Inch          Size
	  ----------------------
	
	  5                 24
	  7.5               16
	  10                12
	  12                10
	
	An Example of How to Apply the Formula
	--------------------------------------
	
	If you need to create a document with 120 characters per line using a 12-
	character-per-inch font, use the following formula:
	
	         120 characters
	  --------------------------          = 10 inches
	   12 characters per inch (10 points)
	
	The printable area required for this example is 10 inches. To obtain a 10-inch
	printable area on a standard 8.5-by-11-inch page, use the following parameters.
	
	  Font:         Use a monospace font (such as Courier)
	  Orientation:  Landscape
	  Left margin:  .5 inch
	  Right margin: .5 inch
	
	Additional query words: cpi monspaced
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
