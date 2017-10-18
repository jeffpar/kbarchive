---
layout: page
title: "Q182311: WD97: How to Change Delivery or Return Address Formatting"
permalink: kb/182/Q182311/
---

## Q182311: WD97: How to Change Delivery or Return Address Formatting

	Article: Q182311
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbenvelope word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Microsoft Word allows you to make formatting changes to your delivery address
	and return address through several methods. However, some changes you make may
	only affect the current envelope, while other changes may be permanent.
	
	This article describes how to change the delivery address and return address
	formatting for the current envelope and how to make your changes permanent.
	
	MORE INFORMATION
	================
	
	Use any of the following methods to change your delivery address or return
	address formatting.
	
	Changing the Formatting from the Envelopes Tab
	----------------------------------------------
	
	NOTE: To locate the Envelopes tab, click Envelopes and Labels on the Tools menu.
	
	To change the formatting from the Envelopes tab, follow these steps:
	
	1. Click Envelopes And Labels on the Tools menu, and then click the Envelopes
	  tab.
	
	2. In either the Delivery Address or Return Address box, type the address.
	
	3. Use the following steps:
	
	  NOTE: If you click Options and attempt to make changes to the delivery address
	  or to the return address the default, your formatting changes may not be
	  saved. For more information about this problem, please see the following
	  article in the Microsoft Knowledge Base:
	
	  Q157892 WD97: Change to Address Font Not Saved from Envelopes Tab
	
	  a. Select the address you typed in step 1.
	
	  b. Right-click your selected address and then click Font on the shortcut
	     menu.
	
	  c. On the Font tab, make any changes to the font, and then click OK.
	
	     NOTE: Do not use the Default button to make your changes permanent. If you
	     do, the following message is displayed:
	
	  Do you want to change the default font to <font name>, <point
	  size>?
	
	  This change will affect all new documents based on the NORMAL template.
	
	  If you click Yes, the default font for all new documents in Word is changed.
	
	  For additional information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q157888 WD97: Word Default Font Changed When Address Font Changed
	
	Changing the Formatting When Setting Up an Envelope Mail Merge
	--------------------------------------------------------------
	
	For additional information about creating an envelope mail merge, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q141991 WD: How to Create Envelopes Using Mail Merge
	
	To change the formatting when setting up an envelope mail merge, follow these
	steps:
	
	Method 1
	--------
	
	1. Set up your main document as an envelope mail merge.
	
	2. On the Envelope Options tab, click the Font button under either Delivery
	  Address or Return Address.
	
	3. On the Font tab, make any changes to the font, and then click OK.
	
	  NOTE: You cannot make permanent changes to the font as the default button is
	  unavailable. If you want to permanently change the font that all of your
	  envelope mail merges use, then use the procedure titled "Changing the
	  Envelope Address and Envelope Return Styles" in this article.
	
	4. On the Envelopes Options tab, click OK to continue your envelope mail merge.
	
	Method 2
	--------
	
	1. Set up your main document as an envelope mail merge.
	
	2. In the Envelope Address dialog box, use the Insert Merge Field button to
	  place your merge fields in the sample envelope address box.
	
	3. Select the merge fields for which you want to change the formatting.
	
	4. Right-click the selected merge fields, and then from the shortcut menu, click
	  either Font or Paragraph, make your formatting changes, and then click OK.
	  Changes you make in either Font or Paragraph will not be permanent and will
	  apply only to the current envelope mail merge main document.
	
	  NOTE: Do not use the Default button on the Font tab to make your changes
	  permanent. If you do, the following message will show:
	
	  Do you want to change the default font to <font name>, <point
	  size>?
	
	  This change will affect all new documents based on the NORMAL template.
	
	  If you click Yes, the default font in Word for all new documents is changed.
	
	  For additional information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q157888 WD97: Word Default Font Changed When Address Font Changed
	
	5. In the Envelope Address dialog box, click OK to continue the envelope mail
	  merge.
	
	Changing the Envelope Address and Envelope Return Styles
	--------------------------------------------------------
	
	NOTE: Changes you make to the Envelope Address and Envelope Return styles will be
	used by default when you create envelopes from either the Envelopes tab or from
	an Envelope mail merge. These style changes may be overwritten (not used) if you
	make changes to the formatting using any of the other procedures listed in this
	article.
	
	To change the Envelope Address and Envelope Return styles, follow these steps:
	
	1. On the Format menu, click Style.
	
	2. Change the List box to All Styles.
	
	3. In the Styles box, select either Envelope Address or Envelope Return.
	
	4. Click Modify.
	
	5. In the Modify Style dialog box, click Format to make changes to any of the
	  following attributes that contain an X for the style (the items that do not
	  contain an X cannot be changed):
	
	                    Envelope   Envelope
	                    Address    Return
	     Attribute      Style      Style
	     ----------------------------------
	
	     Font              X         X
	     Paragraph
	     Tabs              X
	     Border            X
	     Language          X         X
	     Frame
	     Numbering         X
	
	6. In the Modify Style dialog box, do one or more of the following:
	
	   - Click OK to keep the changes to your current envelope only.
	
	  -or-
	
	   - Click to select the Add To Template check box to keep your changes
	     permanent and then click OK. This will keep your changes for the current
	     envelope and all future envelopes.
	
	  -or-
	
	   - Click to select the Automatically Update check box to allow Word to
	     automatically redefine the style whenever you apply manual formatting to
	     any paragraph with this style. Word updates all paragraphs in the active
	     envelope that are formatted with the style.
	
	     NOTE: Selecting this check box allows Word to update the style in the
	     current envelope only and does not make permanent changes to future
	     envelopes.
	
	7. Click OK and then click Close to close the Style dialog box.
	
	  NOTE: When you click Close, if the style is applied to the current envelope,
	  Word automatically applies your changes.
	
	Additional query words: underline color effects strikethrough double superscript subscript shadow outline emboss engrave small all caps hidden scale spacing position kerning animation alignment indentation left right before after line
	
	======================================================================
	Keywords          : kbdta kbenvelope word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
