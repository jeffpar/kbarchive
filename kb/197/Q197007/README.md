---
layout: page
title: "Q197007: WD97: How to Import Font Substitution Functions in Word"
permalink: /kb/197/Q197007/
---

## Q197007: WD97: How to Import Font Substitution Functions in Word

	Article: Q197007
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 05-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes which font is displayed in Microsoft Word when you open a
	document from a nontextual foreign file format. Special exceptions to the
	general functionality are noted in the "More Information" section later in this
	article.
	
	MORE INFORMATION
	================
	
	How Fonts Are Mapped During Initial Import
	------------------------------------------
	
	1. If Word uses an external converter dynamic-link library (DLL) to interpret a
	  foreign document and that converter supports font mapping, the converter
	  first analyzes font metrics and determines whether any of the fonts in the
	  foreign file match the list of fonts in its font- mapping (substitution)
	  table.
	
	   - If a source font from the document matches an entry in the table, the
	     converter supplies the coinciding target Windows font from the table to
	     Word.
	
	   - If there is no match for the font, the converter supplies Word with the
	     nearest equivalent font family and font name, based on its analysis of the
	     font's metrics.
	
	     NOTE: Prior to supplying a font name to Word, the WordPerfect 5.x converter
	     also queries the system to identify the current printer driver and
	     availability of target printer font possibilities. This doesn't
	     necessarily occur when you open documents from other foreign formats.
	
	2. Word's internal Rich Text Format (RTF) reader then interprets the RTF code
	  provided by the converter. While interpreting the RTF, Word's internal RTF
	  reader may remap the font again if the font information supplied by the
	  converter does not match those fonts actually available under Windows.
	
	  Once you open a document in Word, in most cases, the font name from the
	  original application is displayed on the formatting toolbar, and the
	  substituted Windows font is applied for actual display and printing.
	
	  The original font is retained and displayed on the formatting toolbar to
	  enable round-trip conversion back to the original format.
	
	Selecting to Modify Substitutions Following Conversion
	------------------------------------------------------
	
	If a foreign document contains one or more fonts that do not exist under Windows,
	you can view the current substitutions for these fonts by selecting the Font
	Substitution button on the Compatibility tab (on the Tools menu, click
	Options).
	
	If all fonts used in the foreign document are available under Windows, you cannot
	open the Font Substitution dialog box, and you will receive the following
	message if you click Font Substitution:
	
	  No font substitution is necessary. All fonts used in this document are
	  available.
	
	If you are not allowed to open the font substitution dialog box, you can still
	substitute fonts by using Word's Replace command to replace the font name that
	appears on the formatting ruler with an available font of your choice.
	
	Modifying Substitutions in the Font Substitution Dialog Box
	-----------------------------------------------------------
	
	A font from a foreign document that is not available under is displayed as a
	"Missing Document Font." The "Substituted Font" is the font the converter and
	Word have chosen to replace the "missing" font for actual display and printing.
	
	If the substituted default is displayed as "Default," look at the bottom of the
	dialog box for a description of the actual Windows font to which "Default"
	refers.
	
	You can change the current font substitution if that font doesn't meet your
	needs. If you click OK, your change is reflected in the current document. If you
	select the Convert Permanently option, your change is written to the
	Msfntmap.ini file in your Windows folder, and the change remains in affect
	during all future document conversions.
	
	NOTE: If you don't want Word to display (on the formatting toolbar and in the
	Format Character dialog box) the original font name from the source program
	under which a document was created, use the Convert Permanently option to
	permanently change the source font name to the substituted name on the
	formatting toolbar.
	
	Additional Information
	----------------------
	
	- Not all import converters available for use with Word support font
	  conversion. Those that do support font-mapping include the WordPerfect, Word
	  for MS-DOS, Windows Write, and RFT-DCA converters.
	
	  Other import converters, such as the WordStar, MultiMate, Microsoft Excel, and
	  Lotus 1-2-3 converters map all fonts to Courier or Courier New.
	
	- If a PostScript printer driver is active, the WordPerfect 5.x converter
	  always maps a fixed-width font (such as Courier 10 cpi or Letter Gothic) to
	  the Courier printer font because this font is scaleable on a PostScript
	  printer. If a non-PostScript printer is active, the converter instead maps
	  fixed-width fonts to Courier New. You cannot access the font substitution
	  Word makes in either case.
	
	- When a converter passes RTF to Word, the original source font name is defined
	  in the RTF font table following the \fN control word (where N is the RTF font
	  number). The font that the converter believes should be substituted for the
	  original font for display and printing is defined following the \falt
	  (alternative font name) control. The \fN and \falt control and coinciding
	  font names appear contiguously in RTF.
	
	- Due to the large and ever-increasing number of fonts available for use with
	  Word and other applications, there is no way that a converter can anticipate
	  and know how to map all fonts. Word's converters that do support font-mapping
	  strive to intelligently map the most common PCL and PostScript fonts.
	
	- Some WordPerfect font names may also include font sizes. To retain overall
	  document layout, the WordPerfect converter may in some instances slightly
	  change the font size during conversion. Therefore, because Word displays the
	  font name from WordPerfect on the formatting toolbar, you may experience a
	  situation where the font size in the font name doesn't match the actual font
	  size applied in Word. For example, "Fontname 12cpi" may appear in the Font
	  box, whereas 9.5 might appear in the size box.
	
	
	
	Additional query words: fontmap font maps fonts map mapping conversion convert converts converted converting translation translate translates translated translating
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
