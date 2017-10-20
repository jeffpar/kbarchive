---
layout: page
title: "Q120719: WordPad Cannot Use Courier Printer Font on the IBM 4019PS17"
permalink: /kb/120/Q120719/
---

## Q120719: WordPad Cannot Use Courier Printer Font on the IBM 4019PS17

{% raw %}

	Article: Q120719
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
	
	When you print from WordPad on an IBM 4019PS17, the underscore character (_) in
	the PostScript printer font Courier does not print.
	
	CAUSE
	=====
	
	The PostScript font used by the IBM 4019PS17 has a lower underline position than
	the Courier font of most printers. The printer font metrics (PFM) file used for
	generic Courier causes a clipping rectangle, which is too small for the font, to
	be created. The underscore is then clipped.
	
	WORKAROUND
	==========
	
	To work around this problem, print the document using the Windows 95 Courier New
	TrueType font. To do this, you must first set up the printer to download Courier
	New as an Outline font in the font substitution table.
	
	To set up the IBM 4019PS17 printer to download Courier New as an Outline font, do
	the following:
	
	1. Click the Start button, point to Settings, and then click Printers.
	
	2. Use the right (secondary) mouse button to click the IBM 4019PS17 printer
	  icon, and then choose Properties.
	
	3. Click the Fonts tab. Click the Send Font As button and verify that the Send
	  TrueType As field is set to Outline.
	
	4. Click OK to return to the Fonts menu.
	
	5. Verify that the "Send TrueType fonts to printer according to the Font
	  Substitution Table" option is selected.
	
	6. Click the Edit The Table button.
	
	7. Choose Courier New in the For This TrueType Font column and verify that
	  Courier is currently set in the Use Printer Font column.
	
	8. In the Printer Font For box, scroll to the top of the list and choose Send As
	  Outlines.
	
	9. Click OK to accept the new settings.
	
	MORE INFORMATION
	================
	
	The IBM 4019PS17 is manufactured by IBM, a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
