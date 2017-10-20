---
layout: page
title: "Q63353: 256-Color Driver Not Showing 256 Colors in Windows 3.0"
permalink: /kb/063/Q63353/
---

## Q63353: 256-Color Driver Not Showing 256 Colors in Windows 3.0

{% raw %}

	Article: Q63353
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some Microsoft Windows 3.0 display drivers provide a palette of 256 simultaneous
	colors. The Video Seven VGA and IBM 8514/A drivers included in the Windows 3.0
	package have this capability (with an appropriate amount of RAM on the display
	card).
	
	However, such a driver does not automatically allow a given Windows application
	to use 256 simultaneous colors. In a 256-color Windows 3.0 display driver, there
	are two sets of colors available: 16 system colors and 240 palette colors.
	
	To use more than the 16 system colors, an application must be specifically
	written to use the Windows 3.0 palette-management capability. If the application
	is not written to use palette management, it shows only 16 colors. This is not a
	problem with the display driver.
	
	MORE INFORMATION
	================
	
	Microsoft PowerPoint for Windows is an example of an application that uses
	Windows 3.00 palette management to provide you with 256-simultaneous- color
	capability. The Windows 3.0 Control Panel uses system colors only, so it does
	not show additional colors with a 256-color display driver. This is because
	there is no need to consume valuable palette color indexes simply to provide an
	additional color for menu bars, for example.
	
	
	KBCategory: kbother kbdisplay
	KBSubcategory: win30
	
	Additional query words: 3.00 3.00a 3.0 3.0a Video-7 windrvr Video-Seven
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
