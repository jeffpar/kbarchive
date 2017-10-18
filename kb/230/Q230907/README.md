---
layout: page
title: "Q230907: Encarta Research Organizer: Images in Project Are not Exported"
permalink: kb/230/Q230907/
---

## Q230907: Encarta Research Organizer: Images in Project Are not Exported

	Article: Q230907
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbdisplay kbtool kbui kbimu
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 98 Research Organizer, version 1.0 
	- Microsoft Encarta 99 Research Organizer 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you export a project from Microsoft Encarta Research Organizer to a Rich
	Text (.rtf) file, the file may not contain the images you selected.
	
	CAUSE
	=====
	
	This behavior can occur if the following conditions are true:
	
	- You are using Research Organizer on a Microsoft Windows 95 or Microsoft
	  Windows 98-based computer.
	
	- Your video adapter is configured to use a High Color (16-bit) color palette.
	
	RESOLUTION
	==========
	
	To work around this issue, change the Color Palette setting for your video
	adapter. To do this:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. Click the Settings tab.
	
	4. In the Colors or Color Palette box, click one of the following settings:
	
	   - 256 Colors
	
	   - True Color (24-bit)
	
	   - True Color (32-bit)
	
	5. Click OK.
	
	6. If you are prompted to restart your computer, do so.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was corrected in Encarta Research Organizer 2000.
	
	MORE INFORMATION
	================
	
	The following table lists the bits-per-pixel and number of colors for common
	color palettes in Windows.
	
	  
	  +--------------------------------------------------------+
	  | Color Palette Name | Bits-per-pixel | Number of colors | 
	  +--------------------------------------------------------+
	  | Standard VGA       | 4-bit          | 16               | 
	  +--------------------------------------------------------+
	  | 256-Colors         | 8-bit          | 256              | 
	  +--------------------------------------------------------+
	  | High Color         | 16-bit         | 65,536           | 
	  +--------------------------------------------------------+
	  | True Color         | 24-bit         | 16,777,216       | 
	  +--------------------------------------------------------+
	  | True Color         | 32-bit         | 16,777,216       | 
	  +--------------------------------------------------------+
	
	NOTE: The True Color (32-bit) color palette typically use only 24 bits for
	displaying color and the remaining 8 bits for control or transparency
	information.
	
	Additional query words: 1.00 multi multi-media media mm image pictures
	
	======================================================================
	Keywords          : kbdisplay kbtool kbui kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaResearchOrg98 kbEncartaResearchOrg99
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
