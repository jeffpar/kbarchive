---
layout: page
title: "Q198097: WD97: Errors, Problem Inserting CMYK JPEG Image"
permalink: /kb/198/Q198097/
---

## Q198097: WD97: Errors, Problem Inserting CMYK JPEG Image

{% raw %}

	Article: Q198097
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you insert a CMYK (cyan-magenta-yellow-black) or a Joint Photographic
	Experts Group (JPEG) formatted graphic into a Word document, the graphic may be
	displayed as a box with an X inside it, or one of the following error messages
	may appear:
	
	- Cannot open file.
	
	  - or -
	
	- This graphics file may be damaged and cannot be converted <filename>.
	
	CAUSE
	=====
	
	Microsoft Word 97 cannot convert CMYK JPEG graphics.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods:
	
	Method 1:
	
	Use a different JPEG format, such as gray scale or RGB (red-green-blue).
	
	Method 2:
	
	Use another graphics format that Word supports, such as Tagged Image File Format
	(TIFF), Encapsulated PostScript (EPS), Computer Graphics Metafile (CGM), bit map
	(BMP), or Windows Metafile Format (WMF).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	The JPEG graphics filter (Jpegim32.flt) supports Version 6.0 of the JPEG File
	Interchange Format (JFIF). You must have the JPEG filter to insert a JPEG file
	into a Word document as a Microsoft Clip Gallery object or a Photo Editor
	object. However you don't need the JPEG filter to insert a JPEG file directly
	into a Word document.
	
	The JPEG filter has the following limitations:
	
	- The filter does not support JPEG Tagged Interchange Format (JTIF) files.
	
	- The filter does not support cyan-magenta-yellow-black (CMYK) JPEG files.
	
	For more information about other graphic filters that Word can use, click the
	Office Assistant, type "graphic filters," click Search, and then click the
	"Graphic file types Word can use" topic.
	
	Additional query words: 8.0 cyan yellow magenta black import importing convert converting windows metafile tagged image file format encapsulated postscript post script bitmap computer graphics jpg joint photographic experts group red-green-blue
	
	======================================================================
	Keywords          : kbualink97 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
