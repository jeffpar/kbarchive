---
layout: page
title: "Q157859: WD97: Changes to Inline Pictures Are Not Saved"
permalink: /kb/157/Q157859/
---

## Q157859: WD97: Changes to Inline Pictures Are Not Saved

{% raw %}

	Article: Q157859
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Changes to Inline pictures are not saved when Fast Saves is enabled.
	
	WORKAROUND
	==========
	
	Changes to Inline pictures can be saved if the picture is converted to "Float
	Over Text" or if "Fast Saves" is disabled. Use one of the following methods to
	allow Word 97 to correctly save changes to Inline pictures.
	
	Method 1: Convert the Inline Picture to Float Over Text
	-------------------------------------------------------
	
	To convert the Inline Picture to Float Over Text, follow these steps:
	
	1. Right-click the picture.
	
	2. From the shortcut menu, point to Picture Object, and then click Convert.
	
	3. In the Convert dialog box, under Object Type, select Microsoft Word Picture.
	  Then, select the "Float over text" check box and click OK.
	
	Method 2: Turn Off Fast Saves
	-----------------------------
	
	To turn off Fast Saves, follow these steps:
	
	1. On the Tools menu, click Options.
	
	2. Select the Save tab.
	
	3. Under Save options, clear the "Allow Fast Saves" check box, and then click
	  OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article.
	
	
	This problem was corrected in Microsoft Word 2000.
	
	MORE INFORMATION
	================
	
	Microsoft Word 97 for Windows allows the insertion of Pictures as either
	"Inline" or "Floating." Inline pictures are positioned directly in the text at
	the insertion point. Floating pictures are inserted in the drawing layer so you
	can position them precisely on the page or in front of or behind text or other
	objects.
	
	Word 97 also provides more control of picture attributes. Examples are Image
	Control, Contrast, Brightness, Fill Color, Scaling, and Cropping.
	
	Certain attributes are not saved to Inline pictures if Fast Saves is enabled. If
	Fast Saves is disabled, then Word 97 correctly saves changes to Inline
	pictures.
	
	Word 97 correctly saves all changes to floating pictures.
	
	What doesn't get fast saved:
	
	- Image Control (GreyScale, Black & White and WaterMark)
	
	- More Contrast
	
	- Less Contrast
	
	- More Brightness
	
	- Less Brightness
	
	- Fill Color
	
	What does get fast saved:
	
	- Scaling
	
	- Cropping
	
	- Changes made to the picture when it's loaded into Word's drawing layer
	
	Additional query words: 8.0 word8 word97 lost not saved
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
