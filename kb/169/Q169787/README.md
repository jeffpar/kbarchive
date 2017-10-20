---
layout: page
title: "Q169787: WD97: Some Colors Missing from DIB Images w/ HP LaserJet Driver"
permalink: /kb/169/Q169787/
---

## Q169787: WD97: Some Colors Missing from DIB Images w/ HP LaserJet Driver

{% raw %}

	Article: Q169787
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97; :
	Operating System(s): 
	Keyword(s): kbgraphic kbprint kbdta
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Paintbrush for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you print documents to some Hewlett-Packard (HP) Color LaserJet printers,
	some of the colors may be missing from device-independent bitmaps (DIBs).
	
	WORKAROUND
	==========
	
	To work around this problem, change the dithering option for the printer driver
	to Fine or Coarse instead of None.
	
	NOTE: The method for changing the dithering setting will vary with the operating
	system and the version of the printer driver that you are using.
	
	In Windows 95, change the dithering option using the following steps:
	
	1. On the Start menu, point to Settings, and then click Printers.
	
	2. Right-click the HP Color LaserJet printer icon, and then click Properties.
	
	3. Click the Graphics tab.
	
	4. Under Dithering, click Coarse or Fine. Click OK.
	
	When you attempt to print the device-independent bitmap, the printer driver will
	re-evaluate the graphic and print the graphic correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem when using the Microsoft products
	listed at the beginning of this article with the HP printer driver, version
	3.78, and the Universal Printer Driver, version 4.0, when all of the following
	printer driver settings are used:
	
	- Dithering= None
	
	- Resolution= 300 dpi
	
	- Print True Type as graphics is turned on
	
	
	Additional query words: Hewlett Packard 97 word8 word97 8.0
	
	======================================================================
	Keywords          : kbgraphic kbprint kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2 kbPaintbrushSearch
	Version           : WINDOWS:97; :
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
