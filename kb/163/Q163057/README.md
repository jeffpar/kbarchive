---
layout: page
title: "Q163057: WD97: Cannot Change Default Language for New Documents"
permalink: /kb/163/Q163057/
---

## Q163057: WD97: Cannot Change Default Language for New Documents

	Article: Q163057
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbenv kbhw kbdta kbproof word97 kbHardwarekbfaq
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to change the default language by using the Set Language dialog
	box (on the Tools menu, point to Language, and click Set Language) or by
	changing the Normal style, the default language in Word is continuously reset to
	"no proofing." Changing the default language has no effect.
	
	CAUSE
	=====
	
	This problem occurs if you have an old style keyboard driver installed on your
	computer.
	
	Word bases the default language on the setting for the current keyboard driver.
	(You choose the current keyboard in the Windows Control Panel.) If the Normal
	style is defined with a language that is different from the language used for
	the keyboard setting, Word applies the language of the current keyboard to the
	Normal style as manual (or "direct") formatting.
	
	
	
	For example, if your Normal style is defined as English and you are using a
	German keyboard, the text in a new document is formatted for German. Word
	accomplishes this by applying manual formatting of German to the Normal style.
	
	RESOLUTION
	==========
	
	To correct this problem, install Microsoft Word 97 for Windows Service Release 1
	(SR- 1). Microsoft Word 97 for Windows Service Release 1 (SR-1) corrects this
	issue on systems that have a single keyboard driver installed. It does not
	correct this issue when Windows has multiple keyboard drivers installed.
	
	To work around this problem, manually set the language for text in a document. To
	do this, use one of the following methods.
	
	Method 1: Manually Format the Text with the Language You Want
	-------------------------------------------------------------
	
	Select the text you want to format with a language. To apply the language, point
	to Language on the Tools menu and click Set Language.
	
	You will have to make this change in each document. Clicking the Default button
	will not visibly affect new documents.
	
	Method 2: Install and Select the Desired Language Keyboard Driver
	-----------------------------------------------------------------
	
	Use the control panel to change the default language for new documents.
	
	For information on installing and selecting different language keyboard drivers,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q141306 How to Enable Support for Multiple Languages in Windows 95
	
	
	Method 3: Manually Format the Language in the Normal Template
	-------------------------------------------------------------
	
	Use manual formatting in the Normal template to format the text with a language:
	
	1. Open the Normal.dot template file.
	
	2. On the Edit menu, click Select All.
	
	3. On the Tools menu, point to Language, and click Set Language.
	
	4. Save and close the Normal.dot template file.
	
	When you create a new document from the Normal template, the language you
	selected in step 3 will be applied to the text as manual formatting.
	
	Method 4: Press CTRL+SPACEBAR (Reset Character Formatting)
	----------------------------------------------------------
	
	In the new document, select the text and press CTRL+SPACEBAR.
	
	This keystroke will strip from the selected text any manually applied character
	formatting, such as the language that's used by the keyboard. The selected
	text's character format, including language, will be changed to the text's style
	definition.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Word 97 SR-1.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	MORE INFORMATION
	================
	
	When text is formatted for "no proofing," the proofing tools will skip over that
	text and not check it. The net effect is that words that should be marked as
	misspelled are not.
	
	Word determines the default language based on the current keyboard driver that is
	in use. If the current keyboard driver is invalid or outdated, Word will set the
	default language for the documents as "no proofing."
	
	If you have an outdated keyboard driver installed, you may get the following
	message when you check the keyboard settings in the Windows Control Panel:
	
	  Old style keyboard driver detected, pane disabled.
	
	If you are using Windows 95 perform a quick test to see if the keyboard driver is
	the problem by starting Windows in Safe Mode.
	
	
	NOTE: Starting Windows NT in VGA mode will not bypass the keyboard driver.
	
	1. Restart the computer.
	
	2. When you see the "Starting Windows 95" message, press F8.
	
	3. Select the Safe Mode option, and then press Enter.
	
	  Windows starts and loads generic drivers.
	
	4. Start Word.
	
	5. On the Tools menu, click Language.
	
	  If a language other than No Proofing is selected, then the currently installed
	  keyboard driver is the problem and the user should contact their hardware
	  manufacturer for an updated driver.
	
	To determine what keyboard driver is loading, check the Keyboard setting using
	one of the following methods:
	
	Method 1: Check the Windows Control Panel
	-----------------------------------------
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double-click Keyboard.
	
	3. Click the General tab.
	
	  The name of the keyboard driver appears in the Keyboard Type box.
	
	Method 2: Check the System.ini
	------------------------------
	
	1. Click the Start button, click Run, and type 'sysedit' (without the quotation
	  marks).
	
	2. Click the system.ini window to bring it to the front.
	
	3. In the [boot] section will be a keyboard line that should say:
	
	  keyboard.drv = keyboard.drv
	
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q141306 How to Enable Support for Multiple Languages in Windows 95
	
	Additional query words: sr1 release1 8.0 8.00 cannot dictionary dictionaries spell spelling English (United States) (British) (Australian) speller red underline auto automatic checker checking spellcheck proof squiggly wavy wrong won't misspelling
	
	======================================================================
	Keywords          : kbenv kbhw kbdta kbproof word97 kbHardware kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
