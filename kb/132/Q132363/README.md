---
layout: page
title: "Q132363: Paste Results in a Black Box After You Save the Clipboard Image"
permalink: kb/132/Q132363/
---

## Q132363: Paste Results in a Black Box After You Save the Clipboard Image

	Article: Q132363
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you capture the screen contents, save the clipboard contents using ClipBook
	Viewer (CLIPBRD.EXE), and then paste the clipboard contents into an application,
	a black box appears instead on the screen capture.
	
	CAUSE
	=====
	
	Saving the clipboard image creates a device independent bitmap (DIB) of the
	clipboard contents. This new image becomes the clipboard default.
	
	WORKAROUND
	==========
	
	To workaround this problem:
	
	- From the Edit menu, choose Paste Special instead of Paste, and then choose
	  Bitmap.
	
	  NOTE: Note all applications contain Paste Special functionality.
	
	  -or-
	
	- If you pasted the clipboard image into a document before you saved the image,
	  copy the image from the application to the clipboard by pressing
	  ALT+PRINTSCREEN. This overrides the DIB image.
	
	  -or-
	
	- Capture the screen again.
	
	  -or-
	
	- Upgrade to Windows NT version 3.51.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT version 3.51.
	
	Additional query words: prodnt paste black bitmap
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
