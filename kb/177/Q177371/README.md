---
layout: page
title: "Q177371: WD97: Picture/Object Does Not Show on Envelopes/Labels Tab"
permalink: kb/177/Q177371/
---

## Q177371: WD97: Picture/Object Does Not Show on Envelopes/Labels Tab

	Article: Q177371
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbenvelope
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you click Envelopes And Labels on the Tools menu, the picture, WordArt
	object, or AutoShape in your Return Address/Delivery Address may not show on
	either the Envelopes or Labels tab.
	
	CAUSE
	=====
	
	The picture, WordArt object, or AutoShape is a Float Over Text object. Float
	Over Text objects will not show on either the Envelopes or Labels tab in either
	the Return Address or the Delivery Address boxes.
	
	NOTE: On the Labels tab, the Float Over Text object will not show in the Address
	box. When you select or clear the Use Return Address check box on the Labels
	tab, you can toggle between using the Return or Delivery Address.
	
	WORKAROUND
	==========
	
	Use one of the following methods to change the Float Over Text picture, WordArt
	object, or AutoShape to an inline picture or object:
	
	Method 1: For a Float Over Text Picture or WordArt Object
	---------------------------------------------------------
	
	1. Click to select the picture or WordArt object.
	
	2. On the Format menu, click Picture or Object.
	
	3. On the Position tab, click to clear the Float Over Text check box, and then
	  click OK.
	
	Method 2: For a Float Over Text AutoShape
	-----------------------------------------
	
	1. Click to select the Float Over Text object.
	
	2. On the Edit menu, click Cut.
	
	3. With the insertion point where you want the object to appear, click Paste
	  Special on the Edit menu.
	
	4. In the As box, click to select Picture.
	
	5. Click to clear the Float Over Text check box (if it is selected), and then
	  click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information about problems with the Return Address and Delivery
	Address when the envelope is added to a document, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q177369 WD97: Return Address Does Not Print or Show on Envelopes Tab
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenvelope 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
