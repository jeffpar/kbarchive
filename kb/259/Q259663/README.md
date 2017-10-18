---
layout: page
title: "Q259663: HOWTO: Convert Currency or Numbers into English Words"
permalink: kb/259/Q259663/
---

## Q259663: HOWTO: Convert Currency or Numbers into English Words

	Article: Q259663
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbXBase kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows you how to create a sample, user-defined function named
	ConvertCurrencyToEnglish() to convert a numeric value to an English word
	representation. For example, the function returns the following words for the
	number 1234.56:
	
	  One Thousand Two Hundred Thirty Four Dollars And Fifty Six Cents
	
	MORE INFORMATION
	================
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	To create the ConvertCurrencyToEnglish() function, follow these steps:
	
	1. Create a new program and save it as ConvertCurrencyToEnglish:
	
	2. Copy and past the following code to the new program:
	
	  *FUNCTION ConvertCurrencyToEnglish
	  LPARAMETERS tNumToConvert
	
	  LOCAL Temp
	  LOCAL NumToConvert
	  LOCAL cDollars, cCents
	  LOCAL nDecimalPlace, nCount
	  LOCAL ARRAY aPlace[9]
	
	  DO CASE
	  CASE EMPTY(tNumToConvert)
	  	NumToConvert = "0"
	  CASE TYPE("tNumToConvert") = "N"  && Convert to positive character string
	  	*!*	Check to see if the number is too big for VFP.  If the number is too large, exit
	  	IF tNumToConvert > 9999999999999.99
	  		RETURN "**,***,***,***,***.**"
	  	ENDIF
	  	* Convert tnNumToConvert to a positive string, trimming extra spaces.
	  	NumToConvert = ALLTRIM(STR(ABS(tNumToConvert), 16, 2))
	  OTHERWISE  && Parameter is character based, make sure it is not negative.
	  	* Convert the number to a positive number.
	  	NumToConvert = IIF(LEFT(ALLTRIM(tNumToConvert), 1) = "-", SUBSTR(ALLTRIM(tNumToConvert), 2), ALLTRIM(tNumToConvert))
	  ENDCASE
	
	  * Find decimal place.
	  nDecimalPlace = AT(".", NumToConvert)
	
	  STORE "" TO cDollars, cCents, Result
	
	  aPlace = ""
	  aPlace[2] = " Thousand "
	  aPlace[3] = " Million "
	  aPlace[4] = " Billion "
	  aPlace[5] = " Trillion "
	  aPlace[6] = " Quadrillion "
	  aPlace[7] = " Quintillion "
	  aPlace[8] = " Sextillion "
	  aPlace[9] = " Septillion "
	
	  * If you find decimal place...
	  IF nDecimalPlace > 0
	  	* Convert cents
	  	Temp = LEFT(SUBSTR(NumToConvert, nDecimalPlace + 1) + "00", 2)
	  	cCents = ConvertTens(Temp)
	
	  	* Strip off cents from remainder to convert.
	  	NumToConvert = ALLTRIM(LEFT(NumToConvert, nDecimalPlace - 1))
	  ENDIF
	
	  nCount = 1
	  DO WHILE NOT NumToConvert == ""
	  	* Convert last 3 digits of NumToConvert to English dollars.
	  	Temp = ConvertHundreds(RIGHT(NumToConvert, 3))
	  	IF NOT Temp == ""
	  		cDollars = Temp + aPlace[nCount] + cDollars
	  	ENDIF
	  	IF LEN(NumToConvert) > 3 Then
	  		* Remove last 3 converted digits from NumToConvert.
	  		NumToConvert = LEFT(NumToConvert, LEN(NumToConvert) - 3)
	  	ELSE
	  		NumToConvert = ""
	  	ENDIF
	  	nCount = nCount + 1
	  ENDDO
	
	  * Clean up dollars.
	  DO CASE
	  CASE cDollars == ""
	  	cDollars = "No Dollars"
	  CASE cDollars == "One"
	  	cDollars = "One Dollar"
	  OTHERWISE
	  	cDollars = cDollars + " Dollars"
	  ENDCASE
	
	  * Clean up cents.
	  DO CASE
	  CASE cCents == ""
	  	cCents = " And No Cents"
	  CASE cCents == "One"
	  	cCents = " And One Cent"
	  OTHERWISE
	  	cCents = " And " + cCents + " Cents"
	  ENDCASE
	
	  ConvertCurrencyToEnglish = cDollars + cCents
	  RETURN ConvertCurrencyToEnglish
	  ENDFUNC
	
	  FUNCTION ConvertHundreds
	  	LPARAMETERS NumToConvert
	  	LOCAL Result
	  	Result = ""
	
	  	* Exit if there is nothing to convert.
	  	IF VAL(NumToConvert) = 0
	  		RETURN Result
	  	ENDIF
	
	  	* Append leading zeros to number.
	  	NumToConvert = RIGHT("000" + NumToConvert, 3)
	
	  	* Do you have a hundreds place digit to convert?'
	  	IF LEFT(NumToConvert, 1) <> "0" Then
	  		Result = ConvertDigit(LEFT(NumToConvert, 1)) + " Hundred "
	  	ENDIF
	
	  	* Do you have a tens place digit to convert?'
	  	IF SUBSTR(NumToConvert, 2, 1) <> "0" Then
	  		Result = Result + ConvertTens(SUBSTR(NumToConvert, 2))
	  	ELSE
	  		* If not, then convert the ones place digit.
	  		Result = Result + ConvertDigit(SUBSTR(NumToConvert, 3))
	  	ENDIF
	
	  	ConvertHundreds = ALLTRIM(Result)
	  	RETURN ConvertHundreds
	  ENDFUNC
	
	  FUNCTION ConvertTens
	  	LPARAMETERS MyTens
	  	LOCAL Result
	  	Result = ""
	
	  	* Is value between 10 and 19?'
	  	IF VAL(LEFT(MyTens, 1)) = 1
	  		DO CASE
	  		CASE VAL(MyTens) = 10
	  			Result = "Ten"
	  		CASE VAL(MyTens) = 11
	  			Result = "Eleven"
	  		CASE VAL(MyTens) = 12
	  			Result = "Twelve"
	  		CASE VAL(MyTens) = 13
	  			Result = "Thirteen"
	  		CASE VAL(MyTens) = 14
	  			Result = "Fourteen"
	  		CASE VAL(MyTens) = 15
	  			Result = "Fifteen"
	  		CASE VAL(MyTens) = 16
	  			Result = "Sixteen"
	  		CASE VAL(MyTens) = 17
	  			Result = "Seventeen"
	  		CASE VAL(MyTens) = 18
	  			Result = "Eighteen"
	  		CASE VAL(MyTens) = 19
	  			Result = "Nineteen"
	  		OTHERWISE
	  		ENDCASE
	  	ELSE
	  		* .. otherwise it's BETWEEN 20 AND 99.
	  		DO CASE
	  		CASE VAL(LEFT(MyTens, 1)) = 2
	  			Result = "Twenty "
	  		CASE VAL(LEFT(MyTens, 1)) = 3
	  			Result = "Thirty "
	  		CASE VAL(LEFT(MyTens, 1)) = 4
	  			Result = "Forty "
	  		CASE VAL(LEFT(MyTens, 1)) = 5
	  			Result = "Fifty "
	  		CASE VAL(LEFT(MyTens, 1)) = 6
	  			Result = "Sixty "
	  		CASE VAL(LEFT(MyTens, 1)) = 7
	  			Result = "Seventy "
	  		CASE VAL(LEFT(MyTens, 1)) = 8
	  			Result = "Eighty "
	  		CASE VAL(LEFT(MyTens, 1)) = 9
	  			Result = "Ninety "
	  		OTHERWISE
	  		ENDCASE
	
	  		* Convert ones place digit.
	  		Result = Result + ConvertDigit(RIGHT(MyTens, 1))
	  	ENDIF
	  	ConvertTens = Result
	  	RETURN ConvertTens
	  ENDFUNC
	
	  FUNCTION ConvertDigit
	  	LPARAMETERS MyDigit
	  	DO CASE
	  	CASE VAL(MyDigit) = 1
	  		ConvertDigit = "One"
	  	CASE VAL(MyDigit) = 2
	  		ConvertDigit = "Two"
	  	CASE VAL(MyDigit) = 3
	  		ConvertDigit = "Three"
	  	CASE VAL(MyDigit) = 4
	  		ConvertDigit = "Four"
	  	CASE VAL(MyDigit) = 5
	  		ConvertDigit = "Five"
	  	CASE VAL(MyDigit) = 6
	  		ConvertDigit = "Six"
	  	CASE VAL(MyDigit) = 7
	  		ConvertDigit = "Seven"
	  	CASE VAL(MyDigit) = 8
	  		ConvertDigit = "Eight"
	  	CASE VAL(MyDigit) = 9
	  		ConvertDigit = "Nine"
	  	OTHERWISE
	  		ConvertDigit = ""
	  	ENDCASE
	  	RETURN ConvertDigit
	  ENDFUNC
	
	3. Save the program as convertcurrencytoenglish.prg
	
	4. To test this program, type the following line in the Command window, and then
	  press ENTER:
	
	"? ConvertCurrencyToEnglish(1234.56)" (without the quotation marks)
	NOTE: The largest number that this program accomodates is 9,999,999,999,999.99
	due to product limitations.
	
	REFERENCES
	==========
	
	  Q210586 How to Convert Currency or Numbers into English Words
	
	Additional query words: writing report printing
	
	======================================================================
	Keywords          : kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbXBase kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
