---
layout: page
title: "Q173126: PPT: Using LeftMargin or FirstMargin Yields Unexpected Results"
permalink: /kb/173/Q173126/
---

## Q173126: PPT: Using LeftMargin or FirstMargin Yields Unexpected Results

{% raw %}

	Article: Q173126
	Product(s): Microsoft PowerPoint for Windows
	Version(s): MACINTOSH:98; WINDOWS:97
	Operating System(s): 
	Keyword(s): kbprogramming kbdtacode KbVBA
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint 98 Macintosh Edition 
	- Microsoft PowerPoint 97 for Windows 
	- Microsoft Visual Basic for Applications 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a Microsoft Visual Basic for Applications macro or procedure to
	modify the LeftMargin and FirstMargin properties of the RulerLevel class, some
	values that are assigned to these properties produce unexpected results.
	
	CAUSE
	=====
	
	This problem occurs because the LeftMargin and FirstMargin properties allow you
	to assign invalid values to the properties.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	There are five RulerLevel classes, each of which corresponds to a possible
	indent level. The FirstMargin and LeftMargin values of RulerLevel 1 have a valid
	range of (-9.0 to 4,095.0). The valid range of values for the FirstMargin and
	LeftMargin properties for RulerLevel classes 2 through 4 are described as
	follows.
	
	For each RulerLevel L in the set {2, 3, 4, 5}, the following equations describe
	the minimum value for the FirstMargin and LeftMargin properties:
	
	     Min(RulerLevel(L).FirstMargin) = Max(RulerLevel(L-1).FirstMargin,
	   
	                                          RulerLevel(L-1).LeftMargin) + 9
	   
	     Min(RulerLevel(L).LeftMargin) = Max(RulerLevel(L-1).FirstMargin,
	   
	                                         RulerLevel(L-1).LeftMargin) + 9
	
	If you assign a value that is between 4,096 and 8,182 to the FirstMargin or
	LeftMargin property, a sign bit is switched. The resulting values range from
	-4,096 to -10; these values are invalid. Assigning values that range from 8,183
	to 8,191 results in values that range from -9 to -1; these values are valid.
	
	Additional query words: 8.00 ppt8 vba vbe macppt
	
	======================================================================
	Keywords          : kbprogramming kbdtacode KbVBA 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbZNotKeyword6 kbPowerPt97 kbPowerPt97Search kbPowerPt98Search kbPowerPt98 kbVBASearch kbZNotKeyword3
	Version           : MACINTOSH:98; WINDOWS:97
	Hardware          : MAC x86
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
