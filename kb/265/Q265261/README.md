---
layout: page
title: "Q265261: HOWTO: Improve Speed of Word Automation"
permalink: /kb/265/Q265261/
---

## Q265261: HOWTO: Improve Speed of Word Automation

{% raw %}

	Article: Q265261
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2000,6.0,97
	Operating System(s): 
	Keyword(s): kbole word97 kbAutomation kbvfp600 wd2000 kbGrpDSFox kbDSupport kbword2000 kbCodeSnippe
	Last Modified: 06-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0, used with:
	   - Microsoft Word 2000 
	   - Microsoft Word for Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The bottleneck in automation is frequently the cross-process calls from Visual
	FoxPro to Word. The trick to speeding up automation is to reduce the number of
	cross-process calls. There are two techniques that you can use to do this:
	first, send as much of your text over in large chunks as you can, and second,
	find ways to do your formatting for you with one call, instead of several.
	
	MORE INFORMATION
	================
	
	Compare the difference in speed between the two techniques in the following code
	sample:
	
	  LOCAL loWord, loDoc, loRange, lnSeconds, lcStr, i
	
	  loWord = CREATEOBJECT("Word.Application")
	  loWord.Visible = .T.
	  loDoc = loWord.Documents.Add()
	  loRange = loDoc.Range()
	
	  WITH loRange
	     lnSeconds = SECONDS()
	     
	     *!* Insert "Text n" using 1000 cross-process calls.
	     FOR i = 1 TO 1000
	        .InsertAfter("Text " + STR(i))
	     ENDfor
	     
	     ? "Time for 1000 insertions = " + ;
	        STR(SECONDS() - lnSeconds, 10, 4) + " seconds"
	     
	     lnSeconds = SECONDS()
	     
	     *!* Build a string with 1000 occurrences of "Text n",
	     *!* but only go cross-process once.
	     lcStr = ""
	     FOR i = 1 TO 1000
	        lcStr = lcStr + "Text " + STR(i)
	     ENDfor
	     .InsertAfter(lcStr)
	
	     ? "Time for single insertion of 1000 items = " + ;
	        STR(SECONDS() - lnSeconds, 10, 4) + " seconds"
	  ENDwith
	
	  loWord.Quit(0)
	
	As you can see, the version that only calls across the boundary once is much
	faster.
	
	Another way to speed things up is the ConvertToTable Method.
	
	  #DEFINE vfpCR CHR(13) 
	  #DEFINE vfpTAB CHR(9)
	  #DEFINE wdSeparateByTabs 1
	  #DEFINE wdTableFormatColorful2 9
	
	  LOCAL loWord, loDoc, loRange, lcTable, lcField, i
	
	  CLEAR
	
	  loWord = CREATEOBJECT("Word.Application")
	  loWord.Visible = .T.
	
	  loDoc = loWord.Documents.Add()
	  loRange = loDoc.Range()
	
	  USE ? ALIAS SelTable
	
	  *!* Build a string consisting of all the fields in the table,
	  *!* separated by tabs with the records separated by carriage
	  *!* returns. The first line is the field names.
	  lcTable = ""
	  FOR i = 1 TO FCOUNT()
	  	lcTable = lcTable + FIELD(i) + vfpTab
	  ENDfor
	  lcTable = lcTable + vfpCR
	
	  SCAN
	     FOR i = 1 TO FCOUNT()
	        lcField = "SelTable." + FIELD(i)
	        lcTable = lcTable + TRANSFORM(&lcField) + vfpTAB
	     ENDfor
	     
	     lcTable = lcTable + vfpCR
	  ENDscan
	
	  *!* Then send the entire table to Word in one call and convert
	  *!* it there.
	  loRange.InsertAfter(lcTable)
	
	  loRange.ConvertToTable(wdSeparateByTabs, , , , wdTableFormatColorful2) 
	
	There are several techniques that can reduce the cross-process calls for
	formatting. One way is to create macros that will do it for you. This article,
	however, demonstrates a slightly simpler case: applying pre-defined style sheets
	to the text.
	
	1. Open a new document in Word.
	
	2. Go to the Format menu, and choose "Style...".
	
	3. Click New, and name the style KBTitle.
	
	4. Click the format command button and change the font size to 18pt, the
	  paragraph alignment to centered, and the border to shadowed. Click OK.
	
	5. Click New, and name the style KBHeader.
	
	6. Change the font to bold, and the paragraph left indent to -0.5. Click OK.
	
	7. There is no need to create a normal style here, since we already have one,
	  but if you like, either create a KBNormal style (and change the code below)
	  or edit the Normal style (which will affect the styles defined above, since
	  they are based on it).
	
	8. Click Close.
	
	9. Go to File:Save As... and save this document as KBSamp.dot. You will need to
	  change the "Save as type" to "Document Template".
	
	10. Run the following code, making changes as needed to the path of the Word
	  document if necessary.
	
	  #DEFINE wdParagraph 4
	  #DEFINE wdCollapseEnd 0
	  #DEFINE vfpCR CHR(13) 
	
	  LOCAL loWord, loDoc, loRange
	
	  loWord = CREATEOBJECT("Word.Application")
	  loWord.Visible = .T.
	
	  *!* Create the Word document based on the template we 
	  *!* created above.
	  loDoc = loWord.Documents.Add("KBSamp.dot")  && Specify path if needed.
	
	  loRange = loDoc.Range()
	  WITH loRange
	     *!* These styles are all paragraph-based, so we need
	     *!* to make sure we're on a new paragraph before changing
	     *!* them.
	     .Style = loDoc.Styles("KBTitle")
	     .InsertAfter("Title" + vfpCR)
	     .Collapse(wdCollapseEnd)
	
	     .Style = loDoc.Styles("Normal")
	     .InsertParagraphAfter()
	     .Collapse(wdCollapseEnd)
	        
	     .Style = loDoc.Styles("KBHeader")
	     .InsertAfter("Header 1" + vfpCR + vfpCR)
	     .Collapse(wdCollapseEnd)
	
	     .Style = loDoc.Styles("Normal")  && Or "KBNormal", if defined above
	     .InsertAfter(REPLICATE("You mean he's like that all the time? ", 60))
	     .Collapse(wdCollapseEnd)
	  ENDwith 
	
	REFERENCES
	==========
	
	For additional information about Office Automation, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q222101 HOWTO: Find and Use Office Object Model Documentation
	
	Another reference is Microsoft Office Automation with Visual FoxPro, by Granor
	and Martin, published by Hentzenwerke Publishing.
	
	Additional query words: optimize optimization office excel outlook powerpoint
	
	======================================================================
	Keywords          : kbole word97 kbAutomation kbvfp600 wd2000 kbGrpDSFox kbDSupport kbword2000 kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : WINDOWS:2000,6.0,97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
