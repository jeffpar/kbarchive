---
layout: page
title: "Q167255: WD97: HTML Tags Nested Incorrectly After Saving Word 97 File"
permalink: kb/167/Q167255/
---

## Q167255: WD97: HTML Tags Nested Incorrectly After Saving Word 97 File

	Article: Q167255
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbhtml
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you look at your HTML document in a Web browser, the HTML document appears
	to be formatted incorrectly. For example, all of the text appears to be
	formatted with the same font formatting.
	
	NOTE: This problem may not be evident in all Web browsers.
	
	CAUSE
	=====
	
	When you save a Word 97 document in HTML format, Word may incorrectly nest the
	HTML markup if one paragraph ends with the same text formatting as the
	subsequent paragraph. Although some browsers ignore the nesting error, other
	browsers may not be able to interpret and display the HTML markup correctly.
	
	WORKAROUND
	==========
	
	To work around this problem, open the HTML document in a text editor, such as
	Notepad, and correct the nesting order of the HTML code.
	
	NOTE: If you modify the document using Word 97 and then save your changes, Word
	saves the HTML code incorrectly. To correct the problem you need to re-edit the
	document in a text editor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	This problem was corrected in Microsoft Word 2000.
	
	MORE INFORMATION
	================
	
	To correctly nest tags in HTML, the last tag that you open is the first tag that
	you close.
	
	The following is an example of how Word 97 incorrectly nests the HTML code.
	Notice that the bold
	
	<B>
	
	end tag appears in the second paragraph
	
	<P>
	
	element after the text "Verse 1":
	
	  <B><I><U><FONT FACE="Arial">
	
	  <P ALIGN="JUSTIFY">Test Pattern</P>
	
	  </I></U></FONT>
	
	  <FONT FACE="Arial" SIZE=2>
	
	  <P ALIGN="JUSTIFY"><A NAME="C"></A>Verse 1</B>: The quick brown
	
	  fox jumped over the lazy dog's back.
	
	  <B>Verse 2</B>: The quick brown fox jumped over the lazy 
	dog's back.</P></FONT>
	
	
	To correct this sample markup, move the bold
	
	<B>
	
	open tag in front of the text "Verse 1":
	
	  <I><U><FONT FACE="Arial">
	
	  <P ALIGN="JUSTIFY"><B>Test Pattern</B></P>
	
	  </FONT></U></I>
	
	  <FONT FACE="Arial" SIZE=2>
	
	  <P ALIGN="JUSTIFY"><A NAME="C"></A><B>Verse 1</B>: The quick brown
	
	  fox jumped over the lazy dog's back.
	
	  <B>Verse 2</B>: The quick brown fox jumped over the lazy dog's
	
	  back.</P></FONT>
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q157086 WD97: Limitations of Converting from Word Format to HTM
	
	Additional query words: 8.0 communicator navigator display wrong
	
	======================================================================
	Keywords          : kbhtml 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
