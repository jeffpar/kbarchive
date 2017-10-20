---
layout: page
title: "Q129606: Lightly Colored Helvetica Text Not Printed Correctly"
permalink: /kb/129/Q129606/
---

## Q129606: Lightly Colored Helvetica Text Not Printed Correctly

{% raw %}

	Article: Q129606
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print a document that contains lightly colored Helvetica text with a
	color background to a Hewlett-Packard PaintJet XL 300, the text is not printed
	correctly and is unreadable.
	
	CAUSE
	=====
	
	The Helvetica font files are not installed on your computer. When you print the
	document, Windows 95 is forced to substitute the Univers printer font for the
	Helvetica font. The Univers text is printed before the color background, causing
	the text to be unreadable if it is a lighter color than the background.
	
	RESOLUTION
	==========
	
	To work around this behavior, use either of the following methods:
	
	- Make sure that the Helvetica font files are installed.
	
	- Change the Helvetica text in the document to another font, such as Arial.
	
	STATUS
	======
	
	This situation is most likely caused by design changes in Windows 95. Microsoft
	has confirmed that it is not caused by a problem in Windows 95.
	
	
	Additional query words: xl300 unidrv hp
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
