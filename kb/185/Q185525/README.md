---
layout: page
title: "Q185525: WD97: Opening Text Only Files Changes Right and Left Margins"
permalink: /kb/185/Q185525/
---

## Q185525: WD97: Opening Text Only Files Changes Right and Left Margins

	Article: Q185525
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbconversion WordCon word97 kbconvert
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a file saved in text format (*.txt), the left and right margins
	are changed from a default of 1.25 inches to 0.92 inch.
	
	CAUSE
	=====
	
	This behavior is by design. When Microsoft Word opens a text file, the native
	(built-in) text converter for .txt files converts the left and right default
	margins to 0.92 inch.
	
	WORKAROUND
	==========
	
	To work around this behavior, use either of the following methods.
	
	Method 1: Adjust the Margins
	----------------------------
	
	To manually adjust the margins, follow these steps:
	
	1. On the File menu, click Page Setup, and then click the Margins tab.
	
	2. Modify the Left and Right margin settings to the size you want, and click OK.
	
	Method 2: Use the File Command on the Insert Menu
	-------------------------------------------------
	
	Insert the text file into a new, blank Word document. To do this, follow these
	steps:
	
	1. Create a new document.
	
	2. On the Insert menu, click File.
	
	3. Change the Files Of Type setting to Text Files (*.txt).
	
	4. Locate and select the file, and click OK.
	
	  NOTE: If you have the "Confirm conversion at Open" option on, click OK to
	  convert the file from Text Only.
	
	Method 3: Use the Text with Layout Converter to Open the File
	-------------------------------------------------------------
	
	To open a text file with default 1.25 inch left and right margins, follow these
	steps:
	
	1. On the Tools menu, click Options, and then click the General tab.
	
	2. Click to select the Confirm Conversion At Open check box, and then click OK.
	
	3. On the File menu, click Open, and then select the desired file. Click OK.
	
	4. In the Confirm Conversions dialog box, select the Text with Layout converter,
	  and then click OK.
	
	MORE INFORMATION
	================
	
	The Text Only import converter changes the margins to 0.92 inch to correctly
	preserve the line breaks in text documents. Unlike Microsoft Word, most other
	word processors use a default left and right margin of 1.00 inch (2.54 cm). When
	these programs convert their files to text only (.txt), some of them insert
	carriage returns prior to this 1.00 inch margin at the end of each line to
	preserve the layout.
	
	Thus, when Microsoft Word opens the document, the text import converter sets the
	right and left margin setting to 0.92 inch to accommodate this setting.
	
	Native (Built-in) Text Converters in Word
	-----------------------------------------
	
	Word 97 can directly import the following text formats:
	
	- MS-DOS Text
	
	- MS-DOS Text with Line Breaks
	
	- Text Only
	
	- Text with Line Breaks
	
	Additional query words: ANSI ASCII convert data format layout importpage section
	
	======================================================================
	Keywords          : kbdta kbconversion WordCon word97 kbconvert 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
