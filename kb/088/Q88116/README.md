---
layout: page
title: "Q88116: Difference Between Bitmap and Picture When Using Paste Special"
permalink: kb/088/Q88116/
---

## Q88116: Difference Between Bitmap and Picture When Using Paste Special

	Article: Q88116
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you paste a bitmap using the Paste Special command, you have several
	options for how you paste the object from the Paste Special dialog box. If you
	select Bitmap or Picture (metafile), the presentation of the object is drawn by
	the client application, not the OLE libraries. The object is no longer an OLE
	object, it's a static object. A static object merely contains the bitmap or
	metafile format; all links to the object have been removed.
	
	If you select Bitmap from the Paste Special dialog box, the object is painted
	faster, but takes more disk space when the file is saved.
	
	If you choose Picture from the Paste Special dialog box, the object paints more
	slowly, but will take less disk space when the file is saved.
	
	The choices you see in the Paste Special dialog box will depend on the format of
	the object in the Clipboard.
	
	MORE INFORMATION
	================
	
	Bitmap Definition
	-----------------
	
	A bitmap is a block of data that describes a rectangular region on a pixel by
	pixel basis. In the simplest case, the size of a bitmap is dependent on the
	number of colors it contains (Monochrome, 16 color, 256 color, 24 bit), and its
	physical dimensions. Typically, the actual image that the bitmap represents has
	very little to do with the size and/or complexity of a bitmap data structure. A
	disadvantage of purely bitmap images are that they cannot be scaled or resized
	without losing some of the quality of the image (dithering, jaggedness, and
	other distortion).
	
	Pictures (Metafiles)
	--------------------
	
	Pictures (metafiles) typically consist of many different data structures. These
	structures can include bitmaps and other types of objects. If the types of
	objects are described by the commands necessary to render them (that is, GDI
	function calls), very little memory will be used to represent a very complex
	image. Another advantage of Pictures is that they can generally be resized and
	printed to a variety of devices at the highest resolution supported by those
	output devices.
	
	Because a picture can contain a combination of data types, if one of the data
	types included is a bitmap, then scaling/resizing of the picture will result in
	the same kinds of distortion (of only the bitmap element) that you would expect
	if you were to simply scale/resize the bitmap by itself. For example, if the
	object was copied from Paintbrush to the Clipboard, then there is not much
	difference between the Picture format and the Bitmap format listed in the Paste
	Special dialog box. However, if the object was copied from an application that
	typically deals with metafiles such as Microsoft Excel for Windows, the
	difference between pasting a Picture and a Bitmap from that application could be
	quite significant.
	
	File Size Difference Between Bitmaps and Pictures
	-------------------------------------------------
	
	Follow this procedure to see the file size difference between a bitmap and a
	picture (metafile):
	
	1. Load version 3.0 or 4.0 of Microsoft Excel for Windows.
	
	2. Load a spreadsheet in Excel.
	
	3. Copy the spreadsheet to the Clipboard.
	
	4. Run Microsoft Write.
	
	5. From the Edit menu, choose Paste Special.
	
	6. From the Paste Special dialog box, select Bitmap.
	
	7. Choose the Paste button.
	
	8. Save the Write file as BITMAP.WRI.
	
	9. From the File menu, choose New.
	
	10. From the Edit menu, choose Paste Special.
	
	11. From the Paste Special dialog box, select Picture.
	
	12. Choose the Paste button.
	
	13. Save the Write file as META.WRI.
	
	Compare the file sizes of META.WRI and BITMAP.WRI in File Manager; BITMAP.WRI
	should be larger than META.WRI.
	
	KBCategory: kbusage kbgraphic
	KBSubcategory: win31
	
	Additional query words: 3.10 3.11 ole object linking embedding
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
