---
layout: page
title: "Q157888: WD97: Word Default Font Changed When Address Font Changed"
permalink: kb/157/Q157888/
---

## Q157888: WD97: Word Default Font Changed When Address Font Changed

	Article: Q157888
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you change the Delivery Address or the Return Address font from the
	Envelopes tab, Word may change the default font for new documents based on the
	Normal template.
	
	To locate the Envelopes tab, click Envelopes And Labels on the Tools menu.
	
	CAUSE
	=====
	
	This functionality occurs when you select the address in the Envelopes tab,
	right-click the selected address, and then click Font from the shortcut menu; or
	click the Options button in the Envelopes tab, then click either the Delivery
	Address or Return Address Font button. If you click the Default button on the
	Font tab, the following message is shown:
	
	  Do you want to change the default font to <font name>, <point
	  size>?
	
	  This change will affect all new documents based on the NORMAL template.
	
	When you click Yes, the default font in Word for all new documents is changed.
	
	RESOLUTION
	==========
	
	To permanently change the Delivery Address or Return Address formatting without
	affecting the default font for the Normal template, use either of the following
	methods.
	
	Method 1: Change the Envelope Address or Envelope Return Style
	--------------------------------------------------------------
	
	To change the Envelope Address or Envelope Return style, follow these steps:
	
	1. On the Format menu, click Style.
	
	2. In the Style dialog, under List, select All styles. Under Styles, select the
	  style Envelope Return or Envelope Address, and then click the Modify button.
	
	3. From the Modify Style dialog box, click to select the Add To Template check
	  box, click the Format button, and then click Font.
	
	4. In the Font dialog box, select the font and properties you want.
	
	5. Click the OK button twice to return to the Style dialog box.
	
	6. Click Close.
	
	Changes you made to either the Envelope Return or Envelope Address will be
	applied to the current envelope, as well as all future envelopes.
	
	Method 2: Use the Options Button
	--------------------------------
	
	1. On the Tools menu, click Envelopes And Labels.
	
	2. From the Envelopes tab, click Options. You do not need to select the address
	  you typed in the Delivery Address or Return Address box.
	
	3. On the Envelope Options tab, click the Font button for either Delivery
	  Address or Return Address.
	
	4. On the Font tab, make changes to the font as needed and then click OK.
	
	  NOTE: To make your changes permanent to the Normal template, click the Default
	  button. One of the following messages will be shown:
	
	  Do you want to change the default envelope address font to <font name>,
	  <point size>?
	
	  This change will affect all new documents based on the NORMAL template.
	
	  -or-
	
	  Do you want to change the default envelope return address font to
	  <fontname>, <pointsize>?
	
	  This change will affect all new documents based on the NORMAL template.
	
	Click Yes to save your changes. New documents you create will use the formatting
	changes you made to either the Delivery Address or Return Address.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbualink97 kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
