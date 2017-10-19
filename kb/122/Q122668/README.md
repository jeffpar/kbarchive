---
layout: page
title: "Q122668: Writer/Artist: Patterned Objects Appear Blurry on Printouts"
permalink: /kb/122/Q122668/
---

## Q122668: Writer/Artist: Patterned Objects Appear Blurry on Printouts

	Article: Q122668
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0,1.1,1.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for Windows, versions 1.0, 1.1, 1.1a 
	- Microsoft Fine Artist for Windows, versions 1.0, 1.1, 1.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print patterned objects from Creative Writer to a printer with a
	resolution greater than 75 dots per inch (dpi), the printed object may appear
	blurry.
	
	NOTE: When you print an identical object from Fine Artist, it prints more
	clearly.
	
	CAUSE
	=====
	
	This problem occurs because Creative Writer attempts to print at the resolution
	(dpi) of the printer. (Fine Artist always prints at 75 dpi regardless of the dpi
	of the printer. Also, Fine Artist creates a bitmap of the page and Creative
	Writer does not.) As a result, there is a degradation of patterns on very high
	resolution printers when you print from Creative Writer.
	
	WORKAROUND
	==========
	
	- Copy and paste the object into Fine Artist and print it.
	
	  -or-
	
	- Copy and paste the object into Microsoft Windows Paintbrush and print it.
	
	Additional query words: 1.00 printing blurry jagged bit mapped mskids win 1.10 fuzzy spletter shape tool mczee output printout kids 1.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbZNotKeyword2 kbCreativeWriter100 kbCreativeWriter110 kbCreativeWriter110a kbFineArtist100 kbFineArtist110 kbFineArtist110a
	Version           : WINDOWS:1.0,1.1,1.1a
	
	=============================================================================
	
