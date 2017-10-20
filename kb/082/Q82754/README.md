---
layout: page
title: "Q82754: How Windows 3.1 Performs Font Mapping (True Type)"
permalink: /kb/082/Q82754/
---

## Q82754: How Windows 3.1 Performs Font Mapping (True Type)

{% raw %}

	Article: Q82754
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses how Windows version 3.1 deals with font mapping and how
	various penalties affect the actual font that is chosen for a particular
	request.
	
	This information is specific to Windows 3.1 with TrueType enabled.
	
	MORE INFORMATION
	================
	
	All font mapping takes place only if the font and size requested does not exist
	on the target device (screen or printer).
	
	If a TrueType font is requested, such as Times New Roman, then all point sizes
	are available. If a bitmap font is requested, such as MS Serif, then at the
	point sizes at which the bitmap exists the bitmap is used. At other point sizes,
	either the same bitmaps or "enlarged" versions of these bitmaps are used. If a
	font is requested that does not exist, such as Ribald, then the font mapper
	attempts to use a TrueType font so that the glyphs (characters) have a good
	appearance at all point sizes.
	
	When a Windows application requests a font from Windows, it asks for it by name
	and other attributes. These other attributes are used by the font mapper. For
	example, if a "serif" font is requested then the font mapper uses Times New
	Roman. If a "sans serif" font is requested, Arial is used. If a fixed-pitched
	font is requested, Courier New is used. If a "script" or "decorative" font is
	requested then the font mapper chooses among all fonts (TrueType, bitmap, and
	vector) to find a good fit.
	
	In special cases, the font mapper also uses the following fonts as a substitute
	for the corresponding TrueType font-pack equivalents. For example, if the font
	pack is installed and the user requests Avant Garde on a Hewlett-Packard (HP)
	LaserJet III, Windows automatically uses Century Gothic if Avant Garde is not
	available.
	
	SubIt ArialPS                   Arial
	SubIt Arial MT                  Arial
	SubIt TimesNewRomanPS           Times New Roman
	SubIt Helvetica                 Arial
	SubIt Times                     Times New Roman
	SubIt Times Roman               Times New Roman
	SubIt Bookman                   Bookman Old Style
	SubIt Palatino                  Book Antiqua
	SubIt AvantGarde                Century Gothic
	SubIt Avant Garde               Century Gothic
	SubIt New Century Schlbk        Century Schoolbook
	SubIt NewCenturySchlbk          Century Schoolbook
	SubIt N Helvetica Narrow        Arial Narrow
	SubIt Helvetica-Narrow          Arial Narrow
	SubIt Zapf Chancery             Monotype Corsiva
	SubIt ZapfChancery              Monotype Corsiva
	SubIt Zapf Dingbats             Monotype Sorts
	SubIt ZapfDingbats              Monotype Sorts
	
	If both a bitmap font and a TrueType font exist for the same name, such as
	Symbol, then the bitmap font is used at sizes where bitmaps exist, and TrueType
	is used at all other sizes. To obtain TrueType in all cases, add the following
	line in WIN.INI under the [TrueType] section:
	
	  TTifCollisions = 1
	
	Additional query words: 3.10 3.11 3.1 true type map winfont
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
