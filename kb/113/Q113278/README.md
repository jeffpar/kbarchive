---
layout: page
title: "Q113278: How to Replace a String in a Text File"
permalink: /kb/113/Q113278/
---

## Q113278: How to Replace a String in a Text File

{% raw %}

	Article: Q113278
	Product(s): Microsoft FoxPro
	Version(s): 2.00 2.50 2.50a 2.50b 2.60 | 2.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	2.00 2.50 2.50a 2.50b 2.60 | 2.50 2.50a 2.50b 2.60 3.00 | 2.50b
	MS-DOS                     | WINDOWS                    | MACINTOSH
	kbprg
	
	--------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b, 2.6
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6
	- Microsoft FoxPro for Macintosh, version 2.5b
	--------------------------------------------------------------------
	
	SUMMARY
	=======
	
	FoxPro does not contain a function for replacing a character string in an
	ASCII text file. One way to do this is to use low-level file functions. A
	simpler way is to copy the text file to a memo field, make the change using
	STRTRAN(), and copy the memo field back to an ASCII file, as demonstrated
	below.
	
	MORE INFORMATION
	================
	
	The following steps demonstrate this procedure:
	
	1. Create an ASCII text file that contains the following sentence:
	
	     This sentence demonstrates how a character string can be changed.
	
	2. Create a database that contains only a memo field.
	
	3. Append a blank record to that database.
	
	4. Create a program that contains the following code:
	
	     USE <database>
	     APPEND MEMO <memofield> FROM <ASCII file><![CDATA[ OVERWRITE
	     Temp=STRTRAN(<memofield>,"demonstrates","shows")
	     REPLACE <memofield> WITH Temp
	     COPY MEMO <memofield> TO <ASCII file><![CDATA[
	
	5. Run the program.
	
	6. Open the ASCII file; the word "demonstrates" should now read "shows".
	
	If the same ASCII filename is used in the APPEND MEMO and the COPY MEMO
	commands, the file will be rewritten with the changes. The OVERWRITE
	parameter on the APPEND MEMO command is needed so that the current text
	file overwrites the existing contents of the memo field. This technique can
	also be used to remove escape codes and page formatting from files by
	placing the characters to remove in the STRTRAN() function.
	
	Additional reference words: VFoxWin 3.00  FoxMac FoxDos FoxWin 2.00 2.50
	2.50a 2.50b 2.60
	KBCategory: kbprg
	KBSubcategory: FxprgGeneral
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : 2.00 2.50 2.50a 2.50b 2.60 | 2.5
	
	=============================================================================
	

{% endraw %}
