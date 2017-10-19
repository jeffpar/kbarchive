---
layout: page
title: "Q169192: BUG: Cannot Add Pictures into ComboBox in Init Event"
permalink: /kb/169/Q169192/
---

## Q169192: BUG: Cannot Add Pictures into ComboBox in Init Event

	Article: Q169192
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp500a
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 5.0 or 5.0a, setting the Picture property of a ComboBox object
	in the Init event of the object does not display pictures or icons within the
	ComboBox. However, the pictures do appear in ComboBox objects running under
	Visual FoxPro 3.0 and 3.0b.
	
	RESOLUTION
	==========
	
	Several workarounds exist for this behavior. First, you can place the following
	code in the GotFocus event of the ComboBox object:
	
	     This.Picture(1)=Home()+"samples\graphics\bmps\assorted\balloon.bmp"
	     This.Picture(2)=Home()+"samples\graphics\bmps\assorted\cup.bmp"
	
	You can also place the following code in the Refresh event of the ComboBox
	object:
	
	     IF EMPTY(THIS.PICTURE(1))
	       THIS.PICTURE(1)=Home()+"samples\graphics\bmps\assorted\balloon.bmp"
	       THIS.PICTURE(2)=Home()+"samples\graphics\bmps\assorted\cup.bmp"
	     ENDIF
	
	Finally, if you need to leave the original code in the Init of the ComboBox, then
	place this code in the Activate event of the form:
	
	     IF EMPTY(THIS.combo1.PICTURE(1))
	        THIS.combo1.Init()
	     ENDIF
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form with a ComboBox control.
	
	2. Set the RowSource to "B,Balloon,C,Cup" (without the quotation marks).
	
	3. Set the RowSourceType to 1-Value.
	
	4. In the Init event of the ComboBox, place the following code:
	
	        This.Picture(1)=Home()+"samples\graphics\bmps\assorted\balloon.bmp"
	        This.Picture(2)=Home()+"samples\graphics\bmps\assorted\cup.bmp"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp500a 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbprb
	
	=============================================================================
	
