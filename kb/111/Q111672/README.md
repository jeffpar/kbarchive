---
layout: page
title: "Q111672: How to Use a Portion of a Memo Field in a List Box"
permalink: kb/111/Q111672/
---

## Q111672: How to Use a Portion of a Memo Field in a List Box

	Article: Q111672
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b; MS-DOS:2.0,2.5,2.5a,2.5b; WINDOWS:2.5,2.5a,2.5b,3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to effectively use a portion of a memo field in a
	list box object that is part of a user-defined screen.
	
	MORE INFORMATION
	================
	
	To illustrate how to use a portion of a memo field in a list box object, suppose
	that the first 40 characters of the memo field are needed for the list box.
	
	If a list box object is created using the Screen Builder and the List Items From
	Field option is selected, then a reasonable expression to enter in the field
	expression dialog window is:
	
	  LEFT(<memo field name>,40)
	
	This expression will work well as long as all the first lines of all the memo
	fields in each record are at least 40 characters. If this is not the case, for
	example, if some of the memo fields have first lines that are less than 40
	characters, the above statement will return the carriage return (CR) and
	linefeed (LF) characters and display them in the list box. Since this is not a
	desirable side-effect, the following two expressions will correct this
	situation.
	
	NOTE: Although the first expression works well, the second expression provides a
	more concise solution.
	
	  LEFT(<memo field name>,IIF(AT(CHR(13), <memo field name>);
	  <40,AT(CHR(13),<memo field name>)-1,40))
	
	  -or-
	
	  LEFT(MLINE(<memo field name>,1),40)
	
	The second expression works because the MLINE() function is going to return the
	characters for the first line of the memo field, up to but not including the
	CR/LF characters.
	
	The only thing to watch out for concerning the second expression is the current
	SET MEMOWIDTH value (the default line length is 50 characters). If the MEMOWIDTH
	is less than 40, no error will result, but only the number of characters
	corresponding to the MEMOWIDTH value will be returned. For example, if the
	MEMOWIDTH value is 35, only 35 characters will be returned from the second
	expression.
	
	Additional query words: VFoxWin FoxMac FoxDos FoxWin listbox
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : MACINTOSH:2.5b; MS-DOS:2.0,2.5,2.5a,2.5b; WINDOWS:2.5,2.5a,2.5b,3.0
	
	=============================================================================
	
