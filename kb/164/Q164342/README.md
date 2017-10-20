---
layout: page
title: "Q164342: WD97: Picture Hyperlink Lost When Saved as HTML"
permalink: /kb/164/Q164342/
---

## Q164342: WD97: Picture Hyperlink Lost When Saved as HTML

{% raw %}

	Article: Q164342
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbgraphic kbualink97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set a hyperlink to a picture in a Word 97 document and then choose to
	save the file in HTML format, the hyperlink is lost.
	
	CAUSE
	=====
	
	This problem occurs when the graphic is a free-floating graphic. When the
	graphic is converted to HTML, it is converted to an inline object and the
	hyperlink is lost.
	
	RESOLUTION
	==========
	
	Method 1: Convert the Graphic to an Inline Graphic
	--------------------------------------------------
	
	If the graphic exists in the original document prior to conversion to HTML, you
	can convert the graphic to an inline graphic.
	
	1. To convert the graphic, select it, and then click Picture (or Object) on the
	  Format menu.
	
	2. On the Position tab, clear the "Float over text" check box.
	
	3. Click OK.
	
	4. While the graphic is selected, create the Hyperlink.
	
	Method 2: Insert the Graphic as an Inline Graphic
	-------------------------------------------------
	
	When you insert the graphic into the original document, use the following steps
	to turn off the "Float Over Text" option:
	
	1. On the Insert menu, point to Picture, and click "From File."
	
	2. In the Insert Picture dialog box, clear the "Float over text" check box.
	
	3. Click OK.
	
	4. While the graphic is selected, create the hyperlink.
	
	Method 3: Re-Establish the Hyperlink
	------------------------------------
	
	In the converted HTML document, use the following steps to re-establish the
	hyperlink:
	
	1. Select the graphic and then click Hyperlink on the Insert menu.
	
	2. Enter the hyperlink and click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem has been corrected in Word 2000.
	
	Additional query words: vb vbe vba convert web page internet link
	
	======================================================================
	Keywords          : kbgraphic kbualink97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	

{% endraw %}
