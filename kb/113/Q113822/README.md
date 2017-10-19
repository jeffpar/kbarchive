---
layout: page
title: "Q113822: WD97: How to Embed TrueType Fonts in a Document"
permalink: /kb/113/Q113822/
---

## Q113822: WD97: How to Embed TrueType Fonts in a Document

	Article: Q113822
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Microsoft Word allows you to embed TrueType fonts in a Word document so that you
	can view and edit the fonts (if licensing rights allow), even if you open the
	document on a computer that does not have the font installed.
	
	To embed TrueType fonts in a saved document, follow these steps:
	
	1. On the Tools menu, click Options.
	
	2. Click the Save tab.
	
	3. Select the Embed TrueType Fonts check box.
	
	Not all fonts are licensed so that they can be embedded. If a font can be
	embedded, it increases the file size of your document by approximately the size
	of the TrueType font (.ttf) file.
	
	NOTE: Some fonts treat normal, bold, italic, and bold-italic as separate font
	.ttf files. In this case, the file size of your document is larger when you use
	bold and italic formatting than it is if you do not.
	
	If a font does not have a bold, italic, or bold-italic version, Windows generates
	bold or italic from the core font. In this case, the file size increases when
	you use bold or italic formatting.
	
	MORE INFORMATION
	================
	
	Font embedding licensing rights determine how the font may be embedded in the
	document.
	
	To determine the licensing rights of a particular font, Microsoft provides a Font
	Properties Extension tool that can be downloaded from the following Web site:
	
	  http://www.microsoft.com/OpenType/property/property.htm
	
	  Font licensed as   Result
	  ---------------------------------------------------------------
	
	  Protected          The font may not be embedded, copied, or
	                     modified. If you use a protected font in a
	                     document and this document is opened on a computer
	                     that does not have the font installed on it, a
	                     font substitution occurs. Word substitutes the
	                     closest font available on the computer for the
	                     missing protected font.
	
	  Print/Preview      The font is embedded and temporarily loaded on
	                     the target computer. Documents that contain
	                     print/preview fonts must be opened read-only, and
	                     no edits are stored in the document. Embedding
	                     a font of this nature has the least impact on
	                     file size increase.
	
	  Editable           The font behaves just like the print/preview
	                     fonts, except that you may also apply the font to
	                     other text in the same document.
	
	  Installable        The font is installed on the target computer
	                     permanently when you open the document. This
	                     allows you to use the new fonts as if you
	                     installed the fonts directly into Windows
	                     yourself. This type of embedded font has the
	                     greatest impact on file size because the entire
	                     font or fonts are included with the document. The
	                     size of the font file can vary greatly. To
	                     estimate the font file size, follow the appropriate
	                     procedure for your version of Windows.
	
	NOTE: Because there are several versions of Windows, the following steps may be
	different on your computer. If they are, please consult your product
	documentation to complete these steps.
	
	Windows 95:
	
	1. On the Start menu, click Settings and then click Control Panel.
	
	2. Double-click the Fonts icon.
	
	3. Right-click the font you want, and click Properties on the shortcut menu. The
	  size of the font on disk is listed for "Size:".
	
	
	Additional query words: 8.0 true type
	
	======================================================================
	Keywords          : kbualink97 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	
