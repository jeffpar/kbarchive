---
layout: page
title: "Q194631: WD97: How to Convert WordPerfect Supplemental Dictionaries"
permalink: /kb/194/Q194631/
---

## Q194631: WD97: How to Convert WordPerfect Supplemental Dictionaries

	Article: Q194631
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbproof word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to convert WordPerfect 5.x and 6.x for MS-DOS and
	Windows supplemental dictionaries for use within Microsoft Word.
	
	MORE INFORMATION
	================
	
	By default, when you make additions to a supplemental dictionary in WordPerfect,
	your additions are written to one of the following version-specific files:
	
	- Wp{wp}us.sup in WordPerfect 5.x for MS-DOS and Windows
	
	- Wpspelus.sup in WordPerfect 6.0 for MS-DOS and Windows
	
	- Wtspelus.sup in WordPerfect 6.1 for Windows
	
	The Wp{wp}us.sup supplemental dictionary is a normal WordPerfect document. You
	can modify this file for use within Word. For details on how to use this file,
	see the section titled "Porting a Supplemental Dictionary for Use in Word" later
	in this article.
	
	WordPerfect 5.x also provides the Spell.exe utility, which allows your
	supplemental dictionary to be compressed. To port a compressed file for use
	within Word, you need to use the Spell.Exe utility to decompress the dictionary.
	You must use the Spell.exe utility before you convert the WordPerfect 6.x
	dictionaries listed above. For details on using this utility, see the section
	titled "To Decompress a Compressed Supplemental Dictionary" at the end of this
	article.
	
	Porting a Supplemental Dictionary for Use in Word
	-------------------------------------------------
	
	WordPerfect supplemental dictionaries and Word's equivalent custom dictionaries
	both contain words in a simple single-column paragraph format where each word is
	separated by a paragraph mark, for example:
	
	  Wonderland
	  Workaround
	  Workstation
	
	To convert the WordPerfect supplemental dictionary into Microsoft Word, follow
	these steps:
	
	1. Open the dictionary in Word as a WordPerfect document.
	
	2. On the File menu, click Save As.
	
	3. In the Save As dialog box, select Text Only With Line Breaks, change the file
	  extension to .dic, and change the location of the file to the
	  C:\<Windows>\Msapps\Proof subfolder.
	
	4. On the File menu, click Close.
	
	5. On the Tools menu, click Options.
	
	6. Click the Spelling And Grammar tab.
	
	7. Click Dictionaries, and then select the file you created in step 3.
	
	To Decompress a Compressed Supplemental Dictionary
	--------------------------------------------------
	
	You can compress supplemental dictionaries created in WordPerfect 5.x using the
	WordPerfect Spell.exe utility. This utility is also shipped with WordPerfect 6.0
	and you can use it to convert WordPerfect 6.0 dictionaries into Word. The two
	utilities have the same name; however, they differ slightly. Use the appropriate
	set of instructions to decompress and convert the supplemental dictionaries.
	
	NOTE: To identify whether a supplemental dictionary has been compressed, open it
	in Word. If it appears as an empty document or with garbage text, it is probably
	compressed.
	
	WordPerfect 5.x
	---------------
	
	1. Locate and run Spell.exe (usually found in the Wp51 folder).
	
	2. Click Option 1 (Change/Create Dictionary).
	
	3. Click Option 2 (Change/Create Supplemental Dictionary).
	
	4. Specify the path and name of the dictionary you want to decompress.
	
	5. Click Option B (Compress/Expand Supplemental Dictionary).
	
	6. Click Option 2 (Expand Supplemental Dictionary).
	
	7. Click Option 0 (Exit).
	
	The dictionary is now expanded into a normal WordPerfect document. To convert
	this dictionary for use within Word, see the "Porting a Supplemental Dictionary
	for Use in Word" section earlier in this article.
	
	WordPerfect 6.x
	---------------
	
	1. Locate and run Spell.exe (usually in the Wpc20 for WordPerfect 6.0
	  subfolder).
	
	2. Click Option S (Convert Supplemental Dictionary).
	
	3. Specify the path and name of the dictionary that you want to convert.
	
	4. Specify the path and new name of the converted dictionary.
	
	5. Click OK.
	
	6. Click Option 0 (Exit).
	
	The dictionary is now converted into a normal WordPerfect document. To convert
	this dictionary for use within Word, see the "Porting a Supplemental Dictionary
	for Use in Word" earlier in this article.
	
	WordPerfect 3.x
	---------------
	
	The supplemental dictionary "User Dictionary (US)," in WordPerfect 3.x for the
	Macintosh can also be used in Word for the Macintosh; however, you must open the
	file in Word as Text Only. When you open the file, you will see a list of words
	that are separated by three spaces instead of by paragraph marks. In addition,
	each word has a space between each letter. Therefore, you need to edit the file
	to place each word on a separate line and to delete the spaces between each
	letter in each word.
	
	The WordPerfect products mentioned here are manufactured by Corel Corporation, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	Additional query words: convert converted converts conversion translate translated translates translation transfer transferred transfers transferring open opening saving as save supp dictionary sup proofing tools spell spelling tool
	
	======================================================================
	Keywords          : kbdta kbproof word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
