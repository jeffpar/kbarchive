---
layout: page
title: "Q67015: Fontware Installation Kit Typeface Information Missing"
permalink: /kb/067/Q67015/
---

## Q67015: Fontware Installation Kit Typeface Information Missing

{% raw %}

	Article: Q67015
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you get the following message when you make fonts
	
	  Some typeface information missing. Go to Add/Delete Bitstream Fontware
	  Typefaces
	
	you have chosen a typeface that the Bitstream Fontware Installation Kit (FIK)
	does not find on your system, even though the name is listed in the Make Fonts
	windows. This may happen if you have both a PostScript PDL and non-PostScript
	PDL printer and you added the typeface before setting up Fontware support for
	the PostScript PDL printer. Choose Add/Delete Bitstream Fontware Typefaces and
	add the typeface again. Then make your fonts.
	
	MORE INFORMATION
	================
	
	If you are using the starter kit that is available through the fulfillment
	coupon included with PowerPoint, and you attempt to make PostScript PDL fonts
	from your free Dutch and Swiss typefaces, you will get the same error message.
	Times Roman and Helvetica are resident on most PostScript PDL printers; the
	files needed for Dutch and Swiss PostScript PDL fonts are not shipped with the
	starter kit. Either purchase Bitstream Scalable Typeface Packages for Dutch and
	Swiss or select Times Roman and Helvetica in your Windows application.
	
	A Bitstream Fontware Installation Kit is available through a fulfillment coupon
	included with the retail version of Microsoft PowerPoint for Windows. This
	starter kit will install fonts for Windows applications only; however, the kit
	can be merged with other starter kits to provide support for multiple
	applications as described above.
	
	
	Additional query words: 3.00 win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
