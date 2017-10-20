---
layout: page
title: "Q97644: HOWTO: Merge Text from a Memo Field"
permalink: /kb/097/Q97644/
---

## Q97644: HOWTO: Merge Text from a Memo Field

{% raw %}

	Article: Q97644
	Product(s): Microsoft FoxPro
	Version(s): 2.0,2.5,2.5a,3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 09-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Memo fields provide a powerful way to implement text merges in FoxPro. The
	information below provides the code to print the contents of memo fields
	containing the text for a text merge.
	
	MORE INFORMATION
	================
	
	In this example, the memo field contains the text to be merged with the text
	merge components. The page spacing (top, bottom, and side margins) is controlled
	within the memo field. A sample memo field will appear much like this:
	
	     <<DATE()>>
	
	     <<ALLTRIM(PROPER(CONTACT))>>
	     <<ALLTRIM(PROPER(COMPANY))>>
	     <<ALLTRIM(PROPER(ADDRESS))>>
	     <<ALLTRIM(PROPER(CITY))>>, <<ALLTRIM(STATE)>> <<ALLTRIM(ZIP)>>
	
	     Dear <<ALLTRIM(PROPER(CONTACT))>>:
	
	     This area includes the body of a letter to be sent to the contact.
	
	     Sincerely,
	
	     Author's name
	
	The following code prints the letter from the memo field shown above. The text
	merge components (the fields and such) are in the SAMPLE\DBFS subdirectory of
	FoxPro for MS-DOS and the SAMPLE\ORGANIZE\DBFS subdirectory of FoxPro for
	Windows.
	
	    CLEAR
	    SET PRINTER ON
	    SET TEXTMERGE ON                && enable evaluation of components
	    SET TALK OFF                    && prevents printing of commands
	    SET TEXTMERGE DELIMITERS TO     && set default delimiters
	    SET MEMOWIDTH TO 80             && sets memo width for 80 columns
	    USE Clients
	    SCAN                            && forces top-down processing
	     FOR J=1 TO MEMLINES(<memo>)    && processes each line in memo field
	        X="\"+MLINE(<name of memo field>,J)
	        &X                          && macro substitution
	     ENDFOR
	    ENDSCAN
	
	NOTE: If the print job doesn't print until you quit FoxPro, see the following
	article in the Microsoft Knowledge Base:
	
	  Q102203 BUG: Print Job Is Not Released to Printer
	
	Additional query words: VFoxWin FoxDos FoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300 kbVFP500 kbVFP600
	Version           : :2.0,2.5,2.5a,3.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
