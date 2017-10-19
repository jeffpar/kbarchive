---
layout: page
title: "Q109481: How to Strip Linefeeds from Exported (.TXT) Files"
permalink: /kb/109/Q109481/
---

## Q109481: How to Strip Linefeeds from Exported (.TXT) Files

	Article: Q109481
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you have exported information from a FoxPro for Macintosh database, there
	may be linefeeds in the file. To remove these linefeeds, use the FxStripLF()
	function found in FOXTOOLS.MLB.
	
	For example, the following code will remove the linefeeds from a dummy file
	called TEST.TXT located on the desktop:
	
	     SET LIBRARY TO FOXTOOLS
	     * Use the following line with Visual FoxPro for Macintosh
	     * SET LIBRARY TO FOXTOOLS.CFM
	     =FxStripLF( "Macintosh HD:Desktop Folder:Test.Txt" )
	
	REFERENCES
	==========
	
	FoxTools Readme file in FoxPro:Goodies:Misc folder
	
	Additional query words: vFoxMac FoxMac 2.50b lf line feeds
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbVFP300bMac
	Version           : MACINTOSH:2.5,3.0b
	
	=============================================================================
	
