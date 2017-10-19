---
layout: page
title: "Q195711: WD97: How to Place Text over a Graphic in Word 97"
permalink: /kb/195/Q195711/
---

## Q195711: WD97: How to Place Text over a Graphic in Word 97

	Article: Q195711
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbdta winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to place text over a graphic in a Word 97 document.
	
	To understand this process, it is important to first understand "layering." Word
	documents are composed of six layers:
	
	- Main text front drawing layer
	
	- Main text layer
	
	- Main text back drawing layer
	
	- Header/footer front drawing layer
	
	- Header/footer text layer
	
	- Header/footer back drawing layer
	
	Cross Section of Word Document Layers
	-------------------------------------
	
	                                          ___________________
	                                         /                   /|
	                                        /   <SURFACE OF     / |
	                                       /       PAPER>      /  |
	                                      /                   /  /|
	                Front drawing layer  |-------------------|  / |
	                    MAIN TEXT LAYER  |===================| / /|
	                 Back drawing layer  |-------------------|/ / / 
	                                     |                   | / / 
	                Front drawing layer  |-------------------|/ / 
	  (Header/footer) BOTTOM TEXT LAYER  |===================| / 
	                 Back drawing layer  |-------------------|/ 
	
	MORE INFORMATION
	================
	
	You can import graphics, such as clip art or other pictures, by clicking Picture
	on the Insert menu, or by cutting or copying a graphic to the Clipboard and then
	pasting it into your document. By default, inserted graphics are embedded
	objects and reside in the drawing layer unless you clear the Float Over Text
	check box. If the Float Over Text check box is cleared, the inserted graphic
	goes into the main text layer, and the graphic behaves as a single character of
	text.
	
	To place text over a graphic, use either of the following methods.
	
	Method 1: Insert or Paste a New Graphic
	---------------------------------------
	
	1. Insert or Paste the graphic into the document.
	
	2. On the Format menu, click Picture.
	
	3. On the Wrapping tab, click None under Wrapping Style, and click OK.
	
	4. Click Draw on the Drawing toolbar, point to Order, and click Send Behind
	  Text.
	
	The graphic is now behind the main text layer.
	
	Method 2: Use a Text Box
	------------------------
	
	Place the text inside a text box that is positioned in front of the floating
	graphic. The text box is in the main text front drawing layer, positioned over
	the floating graphic. To do this, follow these steps:
	
	1. Insert or Paste the graphic into the document
	
	2. Click the Text Box button on the Drawing toolbar.
	
	  The insertion point appears as a plus sign (+) when moved over the document.
	
	3. Position the insertion point where you want the text to appear. Click and
	  drag the mouse to draw a box.
	
	  When you release the mouse button, your insertion point is inside the text
	  box.
	
	4. Type the text you want to appear on the graphic.
	
	  NOTE: The text box may have a solid background and border. To change these
	  settings, follow these steps:
	
	  a. On the Format menu, click Text Box, and select the Colors and Lines tab.
	
	  b. Under Fill, select Semitransparent, or set the Fill Color to No Fill.
	
	  c. Under Line, set the Color to No Line.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q106016 Drawing Object Sent to Back Overwrites Header/Footer Text
	
	  Q105698 Drawing Layer Shortcuts and Tips
	
	  Q95277 How to Create Watermarks in Word
	
	  Q110018 Moving Pictures into the Drawing Layer
	
	Additional query words: graphic behind box front clip art ole object embed embedded top over watermark floating 8.0 8.00
	
	======================================================================
	Keywords          : kbualink97 kbdta winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
