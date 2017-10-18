---
layout: page
title: "Q164993: WD97: IncludePicture Inserts Blank Placeholder"
permalink: kb/164/Q164993/
---

## Q164993: WD97: IncludePicture Inserts Blank Placeholder

	Article: Q164993
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage kbfield winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the IncludePicture field, and you attempt to insert an invalid or
	missing picture, Word inserts a blank picture placeholder and does not display
	an error message.
	
	NOTE: In earlier versions of Microsoft Word, when an IncludePicture field
	includes a path to an invalid or missing picture file, Word displays the
	following error message:
	
	  Error! Not a valid filename
	
	WORKAROUND
	==========
	
	Use the following steps to locate and delete a blank picture placeholder:
	
	1. Open your document in Word.
	
	2. Press ALT+F9 to display the field codes in your document.
	
	  The IncludePicture field codes will resemble the following
	
	  {IncludePicture <picture.gif>}
	
	  -or-
	
	  {IncludePicture C:\<folder path>\<picture.gif>}
	
	  (where <folder path> is the full path to the picture, and picture.gif is
	  the name of the picture file).
	
	3. Locate and select an IncludePicture field, and then press ALT+F9 to toggle
	  the field codes off.
	
	  The picture will be selected after you toggle the field codes off.
	
	4. If the blank picture placeholder that is selected is blank, press DELETE to
	  remove it. (If you have a valid picture selected, leave it alone.)
	
	5. Repeat steps 2-4 until all the empty picture placeholders have been deleted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbfield winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
