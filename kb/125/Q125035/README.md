---
layout: page
title: "Q125035: Writer: Text Does Not Appear Until Middle of Page"
permalink: /kb/125/Q125035/
---

## Q125035: Writer: Text Does Not Appear Until Middle of Page

{% raw %}

	Article: Q125035
	Product(s): Microsoft Home Kids Products
	Version(s): MACINTOSH:1.0,1.1,1.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for the Macintosh, versions 1.0, 1.1, 1.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a new document in Creative Writer for the Macintosh and you begin
	to type, the insertion point may advance, but text does not appear right away.
	As you continue to type and the insertion point moves down the page, the text
	begins to appear. If you open an existing document, only the center part of the
	page is visible.
	
	CAUSE
	=====
	
	This behavior occurs under the following conditions:
	
	- You are using a Hewlett Packard (HP) DeskWriter printer
	
	  -and-
	
	- The Reduce/Enlarge option in page setup has been set for more than 100%
	
	  -and-
	
	- The Save As Default check box has been selected (it contains a check mark)
	
	This behavior occurs with the DeskWriter driver versions 3.1, 3.9, 5.0, and 6.0.
	The amount of visible area depends on the percentage selected for
	Reduce/Enlarge, the size of the text in the document, and the margin settings.
	
	RESOLUTION
	==========
	
	To correct this problem, follow the steps below:
	
	1. Press "COMMAND+SHIFT+A" (without the quotation marks) to go to the Control
	  Room. Click OK.
	
	2. From the File menu, choose Printing Options.
	
	3. Click the Set Local button.
	
	4. Change the Reduce/Enlarge percentage box to 100% and click Save As Default.
	  Click OK.
	
	5. In the Print window, click Preview.
	
	6. From the File menu, choose Return To Creative Writer.
	
	All the text and pictures in your documents should now be visible.
	
	
	Additional query words: mac kids deskwriter desk writer invisible 550c 500c mskids hpdw 560c 1.00 1.10 mczee 550 500 560 dw hp cursor i-beam pointer 1.10a right away
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch kbPTProdChange kbCreativeWriter110Mac kbCreativeWriter110aMac kbCreativeWriter100Mac
	Version           : MACINTOSH:1.0,1.1,1.1a
	
	=============================================================================
	

{% endraw %}
