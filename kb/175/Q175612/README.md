---
layout: page
title: "Q175612: BUG: Bitmap Appears Differently in General Field"
permalink: kb/175/Q175612/
---

## Q175612: BUG: Bitmap Appears Differently in General Field

	Article: Q175612
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp500a kbvfp600
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The general field image of a bitmap differs in appearance depending on the
	method used to place the bitmap in the field. Placing a bitmap into a general
	field using the APPEND GENERAL command or the Insert Object option of the Edit
	menu bar causes the visual size of the bitmap to increase and the picture
	quality to decrease when compared to viewing the same file in Microsoft Paint.
	However, opening the bitmap in Microsoft Paint, copying the image to the Windows
	clipboard, and pasting it into the general field produces an image that retains
	the characteristics of the image in Microsoft Paint.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	When a bitmap is stored into a general field, Visual FoxPro stores the object as
	native data and presentation data. The combination of native and presentation
	data represents the "Binary Large Object Bitmap." Opening the general field by
	double-clicking displays the presentation data. The native data appears in the
	default OLE server, in this case Microsoft Paint, after double-clicking on the
	presentation data. Apparently, Visual FoxPro displays the presentation data
	differently based on the method used to insert the image.
	
	In Visual FoxPro 3.0b, the presentation data may appear correctly depending on
	the video display settings. For instance, an 800x600 resolution setting displays
	the data correctly. However, other video display resolutions may cause a problem
	similar to that described in Visual FoxPro 5.0x.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a table that contains a general field, named gentest, and add three
	  records to the table.
	
	2. Browse the table, go to the first record, and double-click on the general
	  field.
	
	3. Start Microsoft Paint and open Setup.bmp in Windows 95 or Winnt.bmp in
	  Windows NT 4.0.
	
	4. Click the Edit menu and then click Select All and Copy. This copies the
	  bitmap to the Windows Clipboard.
	
	5. Switch back to Visual FoxPro and select Paste from the Edit menu. This copies
	  the bitmap into the general field. Close the general field and move to the
	  second record.
	
	6. Type the following command into the Command window:
	
	        APPEND GENERAL gentest from c:\winnt\winnt.bmp
	
	  -or-
	
	        APPEND GENERAL gentest FROM c:\win95\setup.bmp
	
	  NOTE: The actual names of the operating system folder may vary.
	
	7. Move to the last record and double-click on the general field.
	
	8. From the Edit menu, click Insert Object and Create From File.
	
	9. Locate either Setup.bmp or Winnt.bmp and highlight it. Then choose Open.
	  Finally, click OK and close the general field.
	
	10. Open the first general field and notice that the bitmap image is the same
	  size and it appeared in Microsoft Paint. Next, move to the second record and
	  open the general field. The image appears both larger than the same image
	  did in Microsoft Paint, and the picture quality is lower. The image added
	  with the Insert Object menu option in the third record has the same
	  appearance.
	
	REFERENCES
	==========
	
	Inside OLE Second Edition, Kraig Brockschmidt,833-834, Microsoft Press, 1995
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
