---
layout: page
title: "Q179245: WD97: Format Painter Does Not Work with Inline Objects"
permalink: kb/179/Q179245/
---

## Q179245: WD97: Format Painter Does Not Work with Inline Objects

	Article: Q179245
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbgraphic kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Format Painter to copy graphic attributes, such as fill color
	and line color, from one graphic to another, the graphic attributes are not
	copied.
	
	CAUSE
	=====
	
	The Float Over Text setting was turned off when the object was inserted into the
	document; thus, the picture was inserted as an inline graphic. The Format
	Painter cannot copy properties of inline graphics.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods.
	
	Method 1: Insert the Graphic as a Floating Graphic
	--------------------------------------------------
	
	To insert the graphic as a floating graphic, follow these steps:
	
	1. On the Insert menu, point to Picture, and then click From File.
	
	2. In the Insert Picture dialog box, click to select the Float Over Text check
	  box.
	
	3. Select the graphic file, and then click Insert.
	
	Method 2: Change the Inline Graphic to a Floating One
	-----------------------------------------------------
	
	To change the inline graphic to a floating one, follow these steps:
	
	1. Click the graphic to select it.
	
	2. Right-click the graphic and click Format Picture.
	
	3. Click the Position tab and click to select the Float Over Text check box.
	
	4. Click OK.
	
	Method 3: Add Formatting Directly to the Inline Graphic
	-------------------------------------------------------
	
	Depending on the effect you want, you can do one of several things to format the
	graphic.
	
	To use the Format Picture dialog box, follow these steps:
	
	1. Click the graphic to select it.
	
	2. Right-click the graphic and click Format Picture.
	
	3. Select the appropriate settings on the Colors And Lines, Size, and Position
	  tabs, and then click OK.
	
	To adjust borders and shading, follow these steps:
	
	1. Click the graphic to select it.
	
	2. On the Format menu, click Borders And Shading.
	
	3. Select the appropriate settings for your border and shading and then click
	  OK.
	
	MORE INFORMATION
	================
	
	Graphic objects have two sets of properties: one for inline objects and one for
	floating objects. The Format Painter will copy only graphic attributes from the
	drawing layer.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q167738 WD97: Can't See or Manipulate Objects (and Other Odd Behavior)
	
	  Q161692 WD97: Problems With Float Over Text Objects
	
	  Q157773 WD97: Macro to Disable Float Over Text Property
	
	  Q155822 WD97: "Float Over Text" Check Box Checked If Paste Link Selected
	
	  Q170564 WD97: Pictures and Objects Inserted as Inline by Default in SR-1
	
	Additional query words:
	
	======================================================================
	Keywords          : kbgraphic kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
