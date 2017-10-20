---
layout: page
title: "Q65123: Font-File Format"
permalink: /kb/065/Q65123/
---

## Q65123: Font-File Format

{% raw %}

	Article: Q65123
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbGrpDSUser kbUser
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article is part of a set of seven articles, collectively called the
	"Windows Developer's Notes." More information about the contents of the other
	articles can be found in the Microsoft Knowledge Base article:
	
	  Q65260 The Windows Developer's Notes
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	FontFmt.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Formats for Microsoft Windows font files are defined for both raster and vector
	fonts. These formats can be used by smart text generators in some GDI support
	modules. The vector formats, in particular, are more frequently used by GDI
	itself than by support modules.
	
	Both raster and vector font files begin with information that is common to both,
	and then continue with information that differs for each type of file.
	
	For Windows 3.0, the font-file header includes six new fields: dFlags, dfAspace,
	dfBspace, dfCspace, dfColorPointer, and dfReserved1. These fields are not used
	in Windows 3.0. To ensure compatibility with future versions of Windows, these
	fields should be set to zero.
	
	All device drivers support the Windows 2.x fonts. However, not all device drivers
	support the Windows 3.0 version.
	
	Windows 3.0 font files include the glyph table in dfCharTable, which consists of
	structures that describe the bits for characters in the font file. This version
	enables fonts to exceed 64K in size, the size limit of Windows 2.x fonts. This
	is made possible by the use of 32-bit offsets to the character glyphs in
	dfCharTable.
	
	Because of the 32-bit offsets and their potentially large size, these fonts are
	designed for use on systems that are running Windows version 3.0 in protected
	(standard or 386 enhanced) mode with an 80386 (or higher) processor where the
	processor's 32-bit registers can access the character glyphs. Typically, device
	drivers use the Windows 3.0 version of a font only when both of these conditions
	are true.
	
	Font files are stored with an .FNT extension of the form NAME.FNT. The
	information at the beginning of both raster and vector versions of Windows 3.0
	font files is shown in the following list:
	
	Field          Description
	-----          -----------
	
	dfVersion      2 bytes specifying the version (0200H or 0300H) of
	              the file.
	
	dfSize         4 bytes specifying the total size of the file in
	              bytes.
	
	dfCopyright    60 bytes specifying copyright information.
	
	dfType         2 bytes specifying the type of font file.
	
	              The low-order byte is exclusively for GDI use. If the
	              low-order bit of the WORD is zero, it is a bitmap
	              (raster) font file. If the low-order bit is 1, it is a
	              vector font file. The second bit is reserved and must
	              be zero. If no bits follow in the file and the bits are
	              located in memory at a fixed address specified in
	              dfBitsOffset, the third bit is set to 1; otherwise, the
	              bit is set to 0 (zero). The high-order bit of the low
	              byte is set if the font was realized by a device. The
	              remaining bits in the low byte are reserved and set to
	              zero.
	
	              The high byte is reserved for device use and will
	              always be set to zero for GDI-realized standard fonts.
	              Physical fonts with the high-order bit of the low byte
	              set may use this byte to describe themselves. GDI will
	              never inspect the high byte.
	
	dfPoints       2 bytes specifying the nominal point size at which
	              this character set looks best.
	
	dfVertRes      2 bytes specifying the nominal vertical resolution
	              (dots-per-inch) at which this character set was
	              digitized.
	
	dfHorizRes     2 bytes specifying the nominal horizontal resolution
	              (dots-per-inch) at which this character set was
	              digitized.
	
	dfAscent       2 bytes specifying the distance from the top of a
	              character definition cell to the baseline of the
	              typographical font. It is useful for aligning the
	              baselines of fonts of different heights.
	
	dfInternalLeading
	              Specifies the amount of leading inside the bounds set
	              by dfPixHeight. Accent marks may occur in this area.
	              This may be zero at the designer's option.
	
	dfExternalLeading
	              Specifies the amount of extra leading that the designer
	              requests the application add between rows. Since this
	              area is outside of the font proper, it contains no
	              marks and will not be altered by text output calls in
	              either the OPAQUE or TRANSPARENT mode. This may be zero
	              at the designer's option.
	
	dfItalic       1 (one) byte specifying whether or not the character
	              definition data represent an italic font. The low-order
	              bit is 1 if the flag is set. All the other bits are
	              zero.
	
	dfUnderline    1 byte specifying whether or not the character
	              definition data represent an underlined font. The
	              low-order bit is 1 if the flag is set. All the other
	              bits are 0 (zero).
	
	dfStrikeOut    1 byte specifying whether or not the character
	              definition data represent a struckout font. The low-
	              order bit is 1 if the flag is set. All the other bits
	              are zero.
	
	dfWeight       2 bytes specifying the weight of the characters in the
	              character definition data, on a scale of 1 to 1000. A
	              dfWeight of 400 specifies a regular weight.
	
	dfCharSet      1 byte specifying the character set defined by this
	              font.
	
	dfPixWidth     2 bytes. For vector fonts, specifies the width of the
	              grid on which the font was digitized. For raster fonts,
	              if dfPixWidth is nonzero, it represents the width for
	              all the characters in the bitmap; if it is zero, the
	              font has variable width characters whose widths are
	              specified in the dfCharTable array.
	
	dfPixHeight    2 bytes specifying the height of the character bitmap
	              (raster fonts), or the height of the grid on which a
	              vector font was digitized.
	
	dfPitchAndFamily
	              Specifies the pitch and font family. The low bit is set
	              if the font is variable pitch. The high four bits give
	              the family name of the font. Font families describe in
	              a general way the look of a font. They are intended for
	              specifying fonts when the exact face name desired is
	              not available. The families are as follows:
	
	                 Family               Description
	                 ------               -----------
	                 FF_DONTCARE (0<<4)   Don't care or don't know.
	                 FF_ROMAN (1<<4)      Proportionally spaced fonts
	                                      with serifs.
	                 FF_SWISS (2<<4)      Proportionally spaced fonts
	                                      without serifs.
	                 FF_MODERN (3<<4)     Fixed-pitch fonts.
	                 FF_SCRIPT (4<<4)
	                 FF_DECORATIVE (5<<4)
	
	dfAvgWidth     2 bytes specifying the width of characters in the font.
	              For fixed-pitch fonts, this is the same as dfPixWidth.
	              For variable-pitch fonts, this is the width of the
	              character "X."
	
	dfMaxWidth     2 bytes specifying the maximum pixel width of any
	              character in the font. For fixed-pitch fonts, this is
	              simply dfPixWidth.
	
	dfFirstChar    1 byte specifying the first character code defined by
	              this font. Character definitions are stored only for
	              the characters actually present in a font. Therefore,
	              use this field when calculating indexes into either
	              dfBits or dfCharOffset.
	
	dfLastChar     1 byte specifying the last character code defined by
	              this font. Note that all the characters with codes
	              between dfFirstChar and dfLastChar must be present in
	              the font character definitions.
	
	dfDefaultChar  1 byte specifying the character to substitute
	              whenever a string contains a character out of the
	              range. The character is given relative to dfFirstChar
	              so that dfDefaultChar is the actual value of the
	              character, less dfFirstChar. The dfDefaultChar should
	              indicate a special character that is not a space.
	
	dfBreakChar    1 byte specifying the character that will define word
	              breaks. This character defines word breaks for word
	              wrapping and word spacing justification. The character
	              is given relative to dfFirstChar so that dfBreakChar is
	              the actual value of the character, less that of
	              dfFirstChar. The dfBreakChar is normally (32 -
	              dfFirstChar), which is an ASCII space.
	
	dfWidthBytes   2 bytes specifying the number of bytes in each row of
	              the bitmap. This is always even, so that the rows start
	              on WORD boundaries. For vector fonts, this field has no
	              meaning.
	
	dfDevice       4 bytes specifying the offset in the file to the string
	              giving the device name. For a generic font, this value
	              is zero.
	
	dfFace         4 bytes specifying the offset in the file to the
	              null-terminated string that names the face.
	
	dfBitsPointer  4 bytes specifying the absolute machine address of
	              the bitmap. This is set by GDI at load time. The
	              dfBitsPointer is guaranteed to be even.
	
	dfBitsOffset   4 bytes specifying the offset in the file to the
	              beginning of the bitmap information. If the 04H bit in
	              the dfType is set, then dfBitsOffset is an absolute
	              address of the bitmap (probably in ROM).
	
	              For raster fonts, dfBitsOffset points to a sequence of
	              bytes that make up the bitmap of the font, whose height
	              is the height of the font, and whose width is the sum
	              of the widths of the characters in the font rounded up
	              to the next WORD boundary.
	
	              For vector fonts, it points to a string of bytes or
	              words (depending on the size of the grid on which the
	              font was digitized) that specify the strokes for each
	              character of the font. The dfBitsOffset field must be
	              even.
	
	dfReserved     1 byte, not used.
	
	dfFlags        4 bytes specifying the bits flags, which are additional
	              flags that define the format of the Glyph bitmap, as
	              follows:
	
	              DFF_FIXED            equ  0001h ; font is fixed pitch
	              DFF_PROPORTIONAL     equ  0002h ; font is proportional
	                                              ; pitch
	              DFF_ABCFIXED         equ  0004h ; font is an ABC fixed
	                                              ; font
	              DFF_ABCPROPORTIONAL  equ  0008h ; font is an ABC pro-
	                                              ; portional font
	              DFF_1COLOR           equ  0010h ; font is one color
	              DFF_16COLOR          equ  0020h ; font is 16 color
	              DFF_256COLOR         equ  0040h ; font is 256 color
	              DFF_RGBCOLOR         equ  0080h ; font is RGB color
	
	dfAspace       2 bytes specifying the global A space, if any. The
	              dfAspace is the distance from the current position to
	              the left edge of the bitmap.
	
	dfBspace       2 bytes specifying the global B space, if any. The
	              dfBspace is the width of the character.
	
	dfCspace       2 bytes specifying the global C space, if any. The
	              dfCspace is the distance from the right edge of the
	              bitmap to the new current position. The increment of a
	              character is the sum of the three spaces. These apply
	              to all glyphs and is the case for DFF_ABCFIXED.
	
	dfColorPointer
	              4 bytes specifying the offset to the color table for
	              color fonts, if any. The format of the bits is similar
	              to a DIB, but without the header. That is, the
	              characters are not split up into disjoint bytes.
	              Instead, they are left intact. If no color table is
	              needed, this entry is NULL.
	              [NOTE: This information is different from that in the
	              hard-copy Developer's Notes and reflects a correction.]
	
	dfReserved1    16 bytes, not used.
	              [NOTE: This information is different from that in the
	              hard-copy Developer's Notes and reflects a correction.]
	
	dfCharTable    For raster fonts, the CharTable is an array of entries
	              each consisting of two 2-byte WORDs for Windows 2.x and
	              three 2-byte WORDs for Windows 3.0. The first WORD of
	              each entry is the character width. The second WORD of
	              each entry is the byte offset from the beginning of the
	              FONTINFO structure to the character bitmap. For Windows
	              3.0, the second and third WORDs are used for the
	              offset.
	
	              There is one extra entry at the end of this table that
	              describes an absolute-space character. This entry
	              corresponds to a character that is guaranteed to be
	              blank; this character is not part of the normal
	              character set.
	
	              The number of entries in the table is calculated as
	              ((dfLastChar - dfFirstChar) + 2). This includes a
	              spare, the sentinel offset mentioned in the following
	              paragraph.
	
	              For fixed-pitch vector fonts, each 2-byte entry in this
	              array specifies the offset from the start of the bitmap
	              to the beginning of the string of stroke specification
	              units for the character. The number of bytes or WORDs
	              to be used for a particular character is calculated by
	              subtracting its entry from the next one, so that there
	              is a sentinel at the end of the array of values.
	
	              For proportionally spaced vector fonts, each 4-byte
	              entry is divided into two 2-byte fields. The first
	              field gives the starting offset from the start of the
	              bitmap of the character strokes. The second field gives
	              the pixel width of the character.
	
	<facename>     An ASCII character string specifying the name of the
	              font face. The size of this field is the length of the
	              string plus a NULL terminator.
	
	<devicename>   An ASCII character string specifying the name of the
	              device if this font file is for a specific device. The
	              size of this field is the length of the string plus a
	              NULL terminator.
	
	<bitmaps>      This field contains the character bitmap definitions.
	              Each character is stored as a contiguous set of bytes.
	              (In the old font format, this was not the case.)
	
	              The first byte contains the first 8 bits of the first
	              scanline (that is, the top line of the character). The
	              second byte contains the first 8 bits of the second
	              scanline. This continues until a first "column" is
	              completely defined.
	
	              The following byte contains the next 8 bits of the
	              first scanline, padded with zeros on the right if
	              necessary (and so on, down through the second
	              "column"). If the glyph is quite narrow, each scanline
	              is covered by 1 byte, with bits set to zero as
	              necessary for padding. If the glyph is very wide, a
	              third or even fourth set of bytes can be present.
	
	                 NOTE: The character bitmaps must be stored
	                 contiguously and arranged in ascending order.
	
	              The following is a single-character example, in which
	              are given the bytes for a 12 x 14 pixel character, as
	              shown here schematically.
	
	                 ............
	                 .....**.....
	                 ....*..*....
	                 ...*....*...
	                 ..*......*..
	                 ..*......*..
	                 ..*......*..
	                 ..********..
	                 ..*......*..
	                 ..*......*..
	                 ..*......*..
	                 ............
	                 ............
	                 ............
	
	              The bytes are given here in two sets, because the
	              character is less than 17 pixels wide.
	
	                 00 06 09 10 20 20 20 3F 20 20 20 00 00 00
	                 00 00 00 80 40 40 40 C0 40 40 40 00 00 00
	
	              Note that in the second set of bytes, the second digit
	              of each is always zero. It would correspond to the 13th
	              through 16th pixels on the right side of the character,
	              if they were present.
	
	The Windows 2.x version of dfCharTable has a GlyphEntry structure with the
	following format:
	
	GlyphEntry    struc
	geWidth       dw     ?    ; width of character bitmap in pixels
	geOffset      dw     ?    ; pointer to the bits
	GlyphEntry    ends
	
	The Windows 3.0 version of the dfCharTable is dependent on the format of the
	Glyph bitmap.
	
	NOTE: The only formats supported in Windows 3.0 will be DFF_FIXED and
	DFF_PROPORTIONAL.
	
	DFF_FIXED
	DFF_PROPORTIONAL
	
	GlyphEntry    struc
	geWidth       dw     ?    ; width of character bitmap in pixels
	geOffset      dd     ?    ; pointer to the bits
	GlyphEntry    ends
	
	DFF_ABCFIXED
	DFF_ABCPROPORTIONAL
	
	GlyphEntry    struc
	geWidth       dw     ?   ; width of character bitmap in pixels
	geOffset      dd     ?   ; pointer to the bits
	geAspace      dd     ?   ; A space in fractional pixels (16.16)
	geBspace      dd     ?   ; B space in fractional pixels (16.16)
	geCspace      dw     ?   ; C space in fractional pixels (16.16)
	GlyphEntry    ends
	
	The fractional pixels are expressed as a 32-bit signed number with an implicit
	binary point between bits 15 and 16. This is referred to as a 16.16 ("sixteen
	dot sixteen") fixed-point number.
	
	The ABC spacing here is the same as that defined above. However, here there are
	specific sets for each character.
	
	DFF_1COLOR
	DFF_16COLOR
	DFF_256COLOR
	DFF_RGBCOLOR
	
	GlyphEntry    struc
	geWidth       dw     ?   ; width of character bitmap in pixels
	geOffset      dd     ?   ; pointer to the bits
	geHeight      dw     ?   ; height of character bitmap in pixels
	geAspace      dd     ?   ; A space in fractional pixels (16.16)
	geBspace      dd     ?   ; B space in fractional pixels (16.16)
	geCspace      dd     ?   ; C space in fractional pixels (16.16)
	GlyphEntry    ends
	
	DFF_1COLOR means 8 pixels per byte
	DFF_16COLOR means 2 pixels per byte
	DFF_256COLOR means 1 pixel per byte
	DFF_RGBCOLOR means RGBquads
	
	Microsoft is a registered trademark and Windows is a trademark of Microsoft
	Corporation.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbGrpDSUser kbUser 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
