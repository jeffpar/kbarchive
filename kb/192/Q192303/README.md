---
layout: page
title: "Q192303: HOWTO: Convert Decimal Integers to Hexadecimal Strings"
permalink: /kb/192/Q192303/
---

## Q192303: HOWTO: Convert Decimal Integers to Hexadecimal Strings

	Article: Q192303
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following Microsoft Knowledge Base article describes how to convert decimal
	integers to a hexadecimal string:
	
	  Q95717 How to Convert Decimal Numbers to Hexadecimal Numbers
	
	However, the function in the article is limited in the size of the integer it can
	convert. In Visual FoxPro, the TRANSFORM() function can be used to convert
	decimal integers to hexadecimal strings. However, TRANSFORM() cannot handle
	negative decimal integers (for example, TRANSFORM(-2, "@0")).
	
	This article demonstrates how to use the DecToHex function to convert any decimal
	integer (up to DWORD in size) to a hexadecimal string, regardless of the sign of
	the integer.
	
	MORE INFORMATION
	================
	
	The following code demonstrates how to use the DecToHex() function to convert
	decimal integers to a string containing the equivalent hexadecimal number.
	
	Sample Code
	-----------
	
	     *-- Code begins here.
	     WAIT WINDOW "-" + STR(2146828218) + " = " + DecToHex(-2146828218)
	     WAIT WINDOW STR(-43690) + " = " + DecToHex(-43690)
	     WAIT WINDOW STR(43690) + " = " + DecToHex(43690)
	
	     *-----------------------------------------------------------------
	     *- Function:    DecToHex
	     *- Summary:     Converts decimal integers to hex strings, whether
	     *-              signed or unsigned.
	     *- Parameters:  liDecNumber - decimal number to convert.
	     *-----------------------------------------------------------------
	     FUNCTION DecToHex
	     PARAMETERS liDecNumber
	     lsHexNumber = ""
	     IF liDecNumber > 0 && It's not negative, so do a straight TRANSFORM.
	        lsHexNumber = TRANSFORM(liDecNumber, "@0")
	     ELSE
	
	        *-- The number is negative, so we'll have to do a little more work,
	        *-- since it's not as straight forward as converting and adding a
	        *-- minus sign.
	
	        *-- Find the length of the resulting hex string.
	        lsHexNumber = TRANSFORM(ABS(liDecNumber), "@0")
	        IF SUBSTR(lsHexNumber, 3, 1) = "0" && The number has filled the
	                                           && eight places of DWORD.
	           liLength = LEN(SUBSTR(lsHexNumber, NotAt("0", lsHexNumber, 2)))
	        ELSE
	           *-- Subtract to account for "0x".
	           liLength = LEN(TRANSFORM(ABS(liDecNumber), "@0")) - 2
	        ENDIF
	
	        lsTempHex = 0xFFFFFFFF
	        lsHexNumber = TRANSFORM(lsTempHex-ABS(liDecNumber) + 1, "@0")
	     ENDIF
	     RETURN lsHexNumber
	
	     *-----------------------------------------------------------------
	     *- Function:    NotAt
	     *- Summary:     From within a passed string, finds the first
	     *-              occurrence of a character that is not the character
	     *-              specified.  In other words, this function works
	     *-              opposite of the manner that AT() does.
	     *- Parameters:  lsNotString -    What we don't want.  The function
	     *-                               finds the first character that is
	     *-                               not lsNotString.
	     *-              lsSearchString - The string in which to search.
	     *-              liOccurence -    Indicates that NotAt should find
	     *-                               the liOccurence of a character
	     *-                               that is not lsNotString.
	     *-----------------------------------------------------------------
	     FUNCTION NotAt()
	     PARAMETERS lsNotString, lsSearchString, liOccurrence
	
	     llFound       = .F.  && Flag indicates if we've found a character that
	                          && is NOT lsNotString
	     llEndOfString = .F.  && Flag to indicate that we've reached the end
	                          && of the string.
	     lnCounter     = 0    && Tracks position during the search.
	     lnLength      = LEN(lsSearchString)
	     liOccurCount  = 0    && Tracks how many occurrences have been found.
	
	     *-- Loop until the desired character is found or the end of
	     *-- the string is reached.
	     DO WHILE NOT llFound AND NOT llEndofString
	        lnCounter = lnCounter + 1
	        lsCompare = SUBSTR(lsSearchString, lnCounter, 1)
	        IF lsCompare <> lsNotString
	           liOccurCount = liOccurCount + 1
	
	           *-- Have we found the occurrence we want?
	           IF liOccurCount = liOccurrence
	              llFound = .T.
	           ENDIF
	        ENDIF
	        IF lnCounter = lnLength
	           llEndOfString = .T.
	        ENDIF
	
	     ENDDO
	     RETURN lnCounter
	     *-- Code ends here.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q95717 How to Convert Decimal Numbers to Hexadecimal Numbers
	
	  Q155389 How To Convert Values to Hexadecimal Format with Xbase
	
	(c) Microsoft Corporation 1998. All Rights Reserved. Contributions by Mike A.
	Stewart, Microsoft Corporation.
	
	
	Additional query words: kbVFp500a kbVFp500 kbVFp600 kbXBase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
