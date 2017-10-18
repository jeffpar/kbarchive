---
layout: page
title: "Q80153: How to Change Windows System Font"
permalink: kb/080/Q80153/
---

## Q80153: How to Change Windows System Font

	Article: Q80153
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	You can change the font that Windows uses to display text in menus, title bars,
	and dialog boxes by using the the SystemFont= setting in the [Windows] section
	of the WIN.INI file.
	
	MORE INFORMATION
	================
	
	The system font that Windows uses to display text in menus, title bars, and
	dialog boxes is generally defined by the Fonts.Fon= statement in the [boot]
	section of SYSTEM.INI. However, if you add the line SystemFont=<fontname>
	to the [Windows] section of WIN.INI, Windows uses the font that you specify.
	
	NOTE: Some dialog boxes cannot be changed, for example, the Exit Windows and Task
	List dialog boxes.
	
	Valid font files are raster fonts with the extension .FON. For example, a valid
	WIN.INI entry on a VGA system would be:
	
	       SystemFont=coure.fon
	
	This would change the system font to Courier. The file COURE.FON must be present
	in the WINDOWS\SYSTEM directory in its expanded form.
	
	Choosing one of the Windows vector fonts (Modern, Roman, or Script) results in
	abnormally large screen text. Choosing the Symbol font results in unintelligible
	Windows system text.
	
	For more information about fonts, query on the following words in the Microsoft
	Knowledge Base:
	
	  " discussion and Windows and fonts " (without the quotation marks)
	
	REFERENCES
	==========
	
	"Inside Microsoft Windows," The Cobb Group, November 1991
	
	Additional query words: 3.0 3.0a 3.00 3.00a 3.1 3.10 default group win31 win30 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
