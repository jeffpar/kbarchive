---
layout: page
title: "Q161238: WD97: EPS Images Are Printed Full Size Rather Than Cropped"
permalink: /kb/161/Q161238/
---

## Q161238: WD97: EPS Images Are Printed Full Size Rather Than Cropped

{% raw %}

	Article: Q161238
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbgraphic kbprint word97
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you insert an Encapsulated PostScript (EPS) graphic into a Microsoft Word
	97 document and then crop it, it is printed as if it is not cropped; although it
	is displayed as cropped in page layout view and print preview.
	
	RESOLUTION
	==========
	
	To correct this problem, obtain Microsoft Word 97 Service Release 2 (SR-2).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Office 97 Service Release 2 (SR-2).
	
	For additional information about SR-2, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q151261 OFF97: How to Obtain and Install MS Office 97 SR-2
	
	
	MORE INFORMATION
	================
	
	The Encapsulated PostScript graphics (EPS) filter (Epsimp32.flt) supports the
	Adobe Systems Encapsulated PostScript Specification versions 3.0 and earlier.
	The filter supports EPS images from tagged image file format (TIFF) and Windows
	Metafile (WMF) embedded previews.
	
	If an Encapsulated PostScript graphics file contains an embedded TIFF or Windows
	Metafile preview, a representation of the image appears on the screen. The
	quality of the preview depends on the resolution of the TIFF or Windows Metafile
	image embedded in the Encapsulated PostScript file when it is created. Low,
	medium, and high resolutions are generally available for creating an EPS file.
	The higher the resolution of the preview image, the larger the EPS file size
	will be. Because such previews are intended primarily to be used to position
	images on the page, resolution is often low. A high-resolution preview is not
	necessary because it is discarded when the EPS file is printed to a PostScript
	printer.
	
	If an embedded TIFF or Windows Metafile preview is not included in the
	Encapsulated PostScript graphic you import, the graphic displays a message
	instead of a preview of the graphic in your document. However, the graphic is
	printed correctly to a PostScript printer. If you print an EPS graphic to a
	non-PostScript printer, the preview is printed as it appears on the screen.
	Encapsulated PostScript graphics are designed for printing to a PostScript
	printer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbgraphic kbprint word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
