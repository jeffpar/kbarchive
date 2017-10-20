---
layout: page
title: "Q138839: PPT: Pictures Display as QuickTime Pict Placeholders"
permalink: /kb/138/Q138839/
---

## Q138839: PPT: Pictures Display as QuickTime Pict Placeholders

{% raw %}

	Article: Q138839
	Product(s): Microsoft PowerPoint for Windows
	Version(s): MACINTOSH:3.0,3.0b,4.0; WINDOWS:4.0,7.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbgraphic kbdta
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, version 4.0 
	- Microsoft PowerPoint for Macintosh, versions 3.0, 3.0b, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view a PowerPoint presentation, you may notice that one or more of your
	graphics are not displayed. Instead you may see a placeholder for the graphic
	that contains the following message:
	
	  QuickTime PICT
	
	CAUSE
	=====
	
	Most likely, the graphic is using a QuickTime compression scheme, such as JPEG.
	With PowerPoint for the Macintosh, you can import PICT graphics that use JPEG
	compression. Adobe PhotoShop and some other graphic programs can save PICT files
	with JPEG compression. If you move a presentation that contains one of these
	graphics to another computer or a different platform, you may encounter this
	problem. These PICT JPEG files require QuickTime to display or decompress the
	image. If QuickTime is not present, PowerPoint displays the "QuickTime PICT"
	message.
	
	NOTE: If you are using a Macintosh computer and see this message, you should
	check to see if QuickTime is present. QuickTime, if correctly installed, is
	located in the Extensions folder. If you are running System 7.5 or later, run
	Extension Manager, located in the Control Panels folder, and make sure that
	QuickTime is enabled.
	
	RESOLUTION
	==========
	
	Both of these methods are to be performed on the Macintosh computer system.
	
	Method 1: Save in Macintosh PICT format
	---------------------------------------
	
	Re-import the graphic without JPEG compression. To do this, follow these steps.
	NOTE: The following example uses Adobe PhotoShop version 3.0.
	
	1. Open the graphic in PhotoShop.
	
	2. On the File menu, click Save As.
	
	3. Select the PICT file format, name the graphic, and then click Save.
	
	4. In the PICT File Options dialog box, click None in the Compression section.
	
	5. Click OK to save the graphic.
	
	6. Switch to or start PowerPoint.
	
	7. On the Insert menu, click Picture.
	
	8. Select the graphic, and click Import.
	
	Method 2: Cut and Paste As Picture.
	-----------------------------------
	
	1. Select the image that does not display correctly.
	
	2. On the Edit menu, click Cut.
	
	3. On the Edit menu, click Paste Special.
	
	4. Click Picture from the Paste As list, then click OK.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 3.00b ppt7 ppt95 m_powerpt w_powerpt quicktime logo clipart powerpnt QT QTLOGO
	
	======================================================================
	Keywords          : kb3rdparty kbgraphic kbdta 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerptMacSearch kbPowerPt700Search kbPowerPt400 kbPowerPt300Mac kbPowerPt400Mac kbPowerPt300bMac
	Version           : MACINTOSH:3.0,3.0b,4.0; WINDOWS:4.0,7.0
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
