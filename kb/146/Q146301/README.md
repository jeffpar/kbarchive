---
layout: page
title: "Q146301: XCLN: Exchange Form Label Minimum Value Is 300"
permalink: /kb/146/Q146301/
---

## Q146301: XCLN: Exchange Form Label Minimum Value Is 300

{% raw %}

	Article: Q146301
	Product(s): Microsoft Exchange
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Exchange Forms Designer, you cannot set the height property of
	a label field (using the Properties dialog box) to less than 300 twips. If you
	set this height property to a value below 300, the value will be changed to 300
	when you close the dialog box.
	
	MORE INFORMATION
	================
	
	This behavior is by product design.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Click on the label field on the canvas.
	
	2. Use the sizing handles to adjust the height of the box to approximately what
	  you want it to be.
	
	3. Verify the height of the label field by double-clicking it to activate the
	  Field Properties dialog box. The number in the height field can be less than
	  300 and this value will remain after the box is closed.
	
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : 4.00
	
	=============================================================================
	

{% endraw %}
