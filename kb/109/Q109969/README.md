---
layout: page
title: "Q109969: WD97: Text or Graphic in Wrong Position with AutoText"
permalink: /kb/109/Q109969/
---

## Q109969: WD97: Text or Graphic in Wrong Position with AutoText

{% raw %}

	Article: Q109969
	Product(s): Word 97 for Windows
	Version(s): 97
	Operating System(s): 
	Keyword(s): kbinterop kbole kbprint word97 kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the AutoText entries EnvelopeExtra1 or EnvelopeExtra2, one or both
	of the following may occur:
	
	- Text appears to the right of the recipient's address.
	
	  -or-
	
	- The graphic or object is in the wrong position when used with no address.
	
	WORKAROUND
	==========
	
	The Text Appears to the Right of the Recipient's Address
	--------------------------------------------------------
	
	Clear any text in the Envelopes and Labels dialog box, or remove text from the
	user's mailing address by doing one of the following:
	
	1. On the Tools menu, click "Envelopes and Labels", and then select the
	  Envelopes tab.
	
	2. Click to select the Omit check box for the Return Address.
	
	  -or-
	
	3. On the Tools menu, click Options, and then select the User Information tab.
	
	4. Delete the text in the Mailing Address text box, press the SPACEBAR once, and
	  then click OK.
	
	The Graphic or Object Is in the Wrong Position When Used with No Address
	------------------------------------------------------------------------
	
	If you use EnvelopeExtra1 or EnvelopeExtra2 with Envelopes and Labels (on the
	Tools menu), and you omit an address, the graphic or object adopts the style of
	EnvelopeAddress rather than EnvelopeExtra1 or EnvelopeExtra2, and the graphic or
	object is positioned incorrectly.
	
	If you do not want a return address, type a space in the Return Address area, and
	the correct formatting will be applied to the envelope.
	
	MORE INFORMATION
	================
	
	In Word, you can use two AutoText entries (EnvelopeExtra1 and EnvelopeExtra2) to
	add additional information to an envelope. The AutoText entries can be helpful
	for automatically including a company logo or other object or text to the return
	address on each envelope.
	
	The AutoText entries for EnvelopeExtra1 and EnvelopeExtra2 are always placed in
	the envelope at the position left of or above the return address. EnvelopeExtra2
	precedes EnvelopeExtra1 on the envelope, if both are used.
	
	AutoText entries that you add to the Normal template are available to all
	documents.
	
	To prevent Word from using the AutoText entries EnvelopeExtra1 and
	EnvelopeExtra2, rename them before you print the envelope by doing the
	following:
	
	1. On the Format menu, click Style.
	
	2. Click the Organizer button, and then click the AutoText tab.
	
	3. Click the AutoText entry EnvelopeExtra1 or EnvelopeExtra2, and then click
	  Rename.
	
	4. Delete the number (1 or 2), and then click OK.
	
	5. Click Close in the Organizer dialog box.
	
	Additional query words: graphic envelopes glossary glossaries logos icons pictures
	
	======================================================================
	Keywords          : kbinterop kbole kbprint word97 kbPrinting 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
