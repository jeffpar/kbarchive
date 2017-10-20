---
layout: page
title: "Q88868: Cannot Print Mixed Orientations on Same Page in Duplex Mode"
permalink: /kb/088/Q88868/
---

## Q88868: Cannot Print Mixed Orientations on Same Page in Duplex Mode

{% raw %}

	Article: Q88868
	Product(s): Microsoft Windows Printing Issues
	Version(s): WINDOWS:2.0,2.0a,2.0a-CD,2.0b,2.0c,3.1,3.11,6.0,6.0a,6.0c,7.0,7.0a,95,97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows 95 
	- Microsoft Word for Windows, versions 2.0, 2.0a, 2.0a-CD, 2.0b, 2.0c, 6.0, 6.0a, 6.0c 
	- Microsoft Word for Windows 95, versions 7.0, 7.0a 
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you print a page in duplex mode when one page is formatted for landscape and
	the other page is formatted for portrait orientation, both pages print in
	portrait orientation. This problem occurs when you use the HPPCL5A.DRV printer
	driver version 31.3.89 for Microsoft Windows version 3.1 to print on a
	Hewlett-Packard (HP) LaserJet Series IIIsi or IIId printer, or when you use the
	HP LaserJet 4Si printer driver in Windows 95.
	
	If you print a document in duplex mode and each pair of pages is formatted for
	the same orientation, the document prints correctly, even if the document
	contains both landscape and portrait formatting. The only situation in which
	duplex printing fails to print in the correct orientation is when a pair of
	pages is not formatted for the same orientation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with version 31.3.89 of the
	HPPCL5A.DRV for Windows version 3.1. We are researching this problem and will
	post new information here as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new Word for Windows document.
	
	2. From the File menu, choose Print Setup. Select the HP LaserJet IIIsi or IIId
	  and choose the Setup button.
	
	3. Choose the Options button. In the Duplex Printing box, select Long Edge or
	  Short Edge and choose the OK button three times.
	
	4. Type "Page One Portrait" (without the quotation marks).
	
	5. From the Format menu, choose Page Setup. Select Size and Orientation. Select
	  Portrait and choose the OK button.
	
	6. From the Insert menu, choose Break. Select Next Page and choose the OK
	  button.
	
	7. Type "Page Two Landscape" (without the quotation marks).
	
	8. From the Format menu, choose Page Setup. Select Size and Orientation. Select
	  Landscape in the Orientation box and select This Section in the Apply To box.
	  Choose the OK button.
	
	9. Print the document. Note that each page prints in portrait orientation.
	
	
	Additional query words: 3.103.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWin3xSearch kbWin95search kbWord97 kbWord97Search kbWord95Search kbZNotKeyword2 kbZNotKeyword3 kbWord600 kbWord600a kbWord600c kbWord200 kbWord200a kbWord200b kbWord200c kbWord95 kbWord95a kbWin310 kbWin311
	Version           : WINDOWS:2.0,2.0a,2.0a-CD,2.0b,2.0c,3.1,3.11,6.0,6.0a,6.0c,7.0,7.0a,95,97
	
	=============================================================================
	

{% endraw %}
