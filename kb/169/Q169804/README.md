---
layout: page
title: "Q169804: PPT7: Text Box Alignment Lost When Saved as PowerPoint 4.0 File"
permalink: /kb/169/Q169804/
---

## Q169804: PPT7: Text Box Alignment Lost When Saved as PowerPoint 4.0 File

{% raw %}

	Article: Q169804
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you create a text box in Microsoft PowerPoint and set different alignment
	attributes to the paragraphs in the text box, the text box may shift to a new
	position and the paragraph alignment may be incorrect after you save the file in
	PowerPoint 4.0 format.
	
	RESOLUTION
	==========
	
	Use a text placeholder instead of a text box. When you apply different alignment
	attributes in a text placeholder, the correct alignment is retained when you
	save your file in PowerPoint 4.0 format.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Following are two examples of how the text box and paragraph alignment change
	when you save a PowerPoint 7.0 file as a PowerPoint 4.0 file:
	
	Example 1
	
	If you have four paragraphs in a text box, where paragraphs one and three are
	centered and paragraphs two and four are left-aligned, the text box shifts to
	the right and all four paragraphs are formatted with left alignment.
	
	Example 2
	
	If you have four paragraphs in a text box, where paragraphs two and three are
	left-aligned, and paragraphs one and four are center-aligned, the text box does
	not shift, but all of the text is center-aligned.
	
	
	Additional query words: 95 7.0 shift move align alignment justify justification text
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
