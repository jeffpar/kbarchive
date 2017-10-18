---
layout: page
title: "Q133130: Multiple Master Fonts Not Printed Correctly"
permalink: kb/133/Q133130/
---

## Q133130: Multiple Master Fonts Not Printed Correctly

	Article: Q133130
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are printing to a PostScript printer using Adobe Type Manager fonts,
	some of the fonts may not be printed correctly. When this occurs, Windows 95
	prints an error page with the following suggestions:
	
	  Change to Optimize for Portability in the PostScript dialog box.
	  Make sure the Available Printer Memory in the Device Options dialog box is
	  correct.
	  Reduce the number of fonts in the document.
	  Print the document in parts.
	
	CAUSE
	=====
	
	This problem can occur if you are using a Multiple Master Type 1 font on a
	printer that uses page-level features.
	
	RESOLUTION
	==========
	
	Try each of the suggestions listed on the error page.
	
	MORE INFORMATION
	================
	
	Adobe introduced Multiple Master fonts in Adobe Type Master version 3.0. These
	fonts are designed to take advantage of the capabilities in the PostScript
	language. TektonMM and MinionMM are, for example, Multiple Master fonts.
	
	This technology is memory intensive. Although Windows 95 tries to clear virtual
	memory as it prints, there may not be enough memory to use these fonts if the
	printer has page-level features.
	
	Printers that use page-level features must download information once per page
	rather than once per document, resulting in a greatly reduced amount of virtual
	memory. There may not be enough memory to download the font.
	
	There is no way to determine if a printer uses page-level features.
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
