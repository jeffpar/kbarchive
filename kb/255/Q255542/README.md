---
layout: page
title: "Q255542: WD97: Readability Statistics Incorrect or Missing"
permalink: /kb/255/Q255542/
---

## Q255542: WD97: Readability Statistics Incorrect or Missing

	Article: Q255542
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word8 word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The readability statistics displayed after Word has completed checking the
	grammar of your document may be incorrect, display zeros, or not display at all.
	
	CAUSE
	=====
	
	The following are possible reasons for the readability statistics being
	incorrect or not being displayed:
	
	- The text being checked is a one-line paragraph with no punctuation mark at
	  the end of the sentence.
	
	  Resolution: Add punctuation to the end of the sentence before checking the
	  spelling and grammar of your Word document.
	
	  -or-
	
	- You have formatted the text by selecting (no proofing) in the Language dialog
	  box. When Word checks text formatted with the (no proofing) option selected,
	  Word displays the following message:
	
	  The spelling and grammar check is complete.
	  Text set to (no proofing) was skipped. To find (no proofing) text, click
	  Edit/Replace, click More, click Format, click Language and choose (no
	  proofing).
	
	  Word does not include the text formatted with the (no proofing) option in the
	  readability statistics.
	
	  Resolution: Format the skipped text with the language of the text in the
	  remainder of your Word document.
	
	  -or-
	
	- If you've set up Microsoft Word to check the spelling and grammar of text in
	  other languages, and a document contains text in multiple languages, Word
	  displays readability statistics for the text formatted in the English (United
	  States) language only.
	
	  Resolution: There is no known resolution for this problem.
	
	  -or-
	
	- You have added a PAGE field to your Word document. This problem occurs
	  whether you add the PAGE field by using Page Numbers on the Insert menu, by
	  using Field on the Insert menu, or by typing the PAGE field manually (by
	  pressing CTRL+F9 and typing "PAGE" (without the quotation marks)).
	
	
	  Resolution: There is no known resolution for this problem.
	
	  -or-
	
	- You have added one or more comments to your Word document (on the Insert
	  menu, click Comment).
	
	
	  Resolution: There is no known resolution for this problem.
	
	MORE INFORMATION
	================
	
	When Microsoft Word finishes checking spelling and grammar, it can display
	information about the reading level of the document, including readability
	scores based on the average number of syllables per word, and words per
	sentence.
	
	To show the readability statistics after checking spelling and grammar, turn on
	the Show readability statistics option. To do this, follow these steps:
	
	1. On the Tools menu, click Options.
	
	2. On the Spelling & Grammar tab, click to select the "Show readability
	  statistics" check box.
	
	3. Click OK.
	
	For more information about readability statistics, click "Contents and Index" on
	the Help menu, click the Index tab in Word Help, type the following text
	
	  readability
	
	and then double-click the selected text to go to the "Display readability
	statistics" topic. If you are unable to find the information you need, ask the
	Office Assistant.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q167655 WD97: Frequently Asked Questions About the Grammar Checker
	
	  Q159950 WD97: General Information About International Functionality
	
	Additional query words: proofing all caps superscript punctuation nothing empty
	
	======================================================================
	Keywords          : word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
