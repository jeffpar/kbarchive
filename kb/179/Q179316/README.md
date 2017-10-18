---
layout: page
title: "Q179316: WD97: Envelope Address Style Not Applied to Envelope Address"
permalink: kb/179/Q179316/
---

## Q179316: WD97: Envelope Address Style Not Applied to Envelope Address

	Article: Q179316
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbenvelope word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add an envelope to your document or print that envelope using the
	Envelopes and Labels command on the Tools menu, the formatting of the delivery
	address is not what you defined in the Envelope Address Style definition and may
	not look like what you expect.
	
	CAUSE
	=====
	
	You may have applied direct formatting to the delivery address in either the
	letter or in the Envelopes tab (on the Tools menu, click Envelopes and Labels).
	Directly applied formatting will override the format defined in the Envelope
	Address Style.
	
	NOTE: This functionality is by design in Word 97 for Windows and is different
	than in earlier versions of Microsoft Word.
	
	WORKAROUND
	==========
	
	To work around this behavior, do one of the following.
	
	Method 1
	--------
	
	Remove the directly applied formatting before working with the envelope. To do
	so, follow these steps:
	
	1. Select the address in the body of the letter.
	
	2. Press CTRL+SPACEBAR to remove the directly applied character formatting.
	
	3. On the Tools menu, click Envelopes And Labels.
	
	4. Click Print or click Add To Document.
	
	Method 2
	--------
	
	Remove the directly applied formatting after working with the envelope. To do so,
	follow these steps:
	
	1. On the Tools menu, click Envelopes And Labels.
	
	2. On the Envelopes tab, select the Delivery Address, and then press
	  CTRL+SPACEBAR to remove the directly applied character formatting.
	
	3. Click Print or click Add To Document.
	
	Method 3
	--------
	
	Create a style for your document formatting.
	
	When you use the Envelopes And Labels command on the Tools menu, the character
	formatting will not be changed for the envelope if your address in the body of
	the letter has a style applied rather than directly applied formatting.
	
	For more information about creating a new style, click the Office Assistant, type
	"How do I create a new style," click Search, and then click to view "Create new
	styles."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	MORE INFORMATION
	================
	
	In Microsoft Word, you can apply formatting in two ways: you can use styles or
	you can apply paragraph and character formatting directly. To directly apply
	formatting, select the text and apply the format that you want by using menus,
	toolbars, shortcut keys, or by right-clicking and using one of the choices on
	the shortcut menu. Any formatting that you apply directly to the address in the
	document will override the Envelope Address Style definition for the delivery
	address.
	
	For example, if the Envelope Address Style defines a point size of 10, but you
	have directly applied a point size of 16 to the address in the document, the
	delivery address of the envelope will be 16 points.
	
	This does not occur if you have applied only a style.
	
	For more information about modifying a style, click the Office Assistant, type
	"How do you modify a style?", click Search, and then click to view the "Modify a
	style" topic.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Help is not installed on your computer, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q115260 Changing the Default Envelope Attributes in Word 6.0, 7.0
	
	Additional query words: unexpected wrong incorrect
	
	======================================================================
	Keywords          : kbdta kbenvelope word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
