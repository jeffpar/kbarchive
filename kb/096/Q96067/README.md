---
layout: page
title: "Q96067: Print Shop Deluxe Banners Contain Gaps or Blank Pages"
permalink: /kb/096/Q96067/
---

## Q96067: Print Shop Deluxe Banners Contain Gaps or Blank Pages

{% raw %}

	Article: Q96067
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use Broderbund Software's Print Shop Deluxe for Windows to print banners
	on a continuous-feed printer, the printer may skip over the perforations that
	occur between pages. This leaves 1-inch to 2-inch gaps in your banner.
	
	WORKAROUND
	==========
	
	According to Broderbund technical support, this problem can be corrected by
	editing the Print Shop Deluxe PSDWIN.INI file in the following manner.
	
	Change
	
	  SHRINK MARGINS=4
	
	-to-
	
	  SHRINK MARGINS=0
	
	REFERENCES
	==========
	
	For additional information, contact Broderbund technical support.
	
	The Broderbund product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	Additional query words: 3.10 3.11 3rdparty printshop
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
