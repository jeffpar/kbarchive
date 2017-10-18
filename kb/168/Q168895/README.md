---
layout: page
title: "Q168895: HOWTO: Convert Numeric Dollar Amount to Character Form"
permalink: kb/168/Q168895/
---

## Q168895: HOWTO: Convert Numeric Dollar Amount to Character Form

	Article: Q168895
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbcode kbnokeyword kbvfp300 kbvfp500 kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article illustrates how you can convert a numeric dollar amount to
	character form.
	
	MORE INFORMATION
	================
	
	The following function spells out the numeric dollar amount.
	
	NOTE: The function below only converts numeric values from .01 to 999,999,999.99
	to character form.
	
	     *******************
	     * NumToWord Function
	     *******************
	     PARAMETER numAmt
	
	     PRIVATE numAmt, chrAmt, cDNums, wordAmt, cDvar
	
	     *numAmt = Value to spell out
	     *chrAmt = numAmt converted to char
	     *wordAmt = spelled out version of numAmt
	
	     *Covert amount to string, add leading zeros
	
	     chrAmt=RIGHT('000000000'+LTRIM(STR(numAmt,12,2)),12)
	
	     *Initialize literal string
	
	     Dol1 = 'ONE'
	     Dol2 = 'TWO'
	     Dol3 = 'THREE'
	     Dol4 = 'FOUR'
	     Dol5 = 'FIVE'
	     Dol6 = 'SIX'
	     Dol7 = 'SEVEN'
	     Dol8 = 'EIGHT'
	     Dol9 = 'NINE'
	     Dol10 = 'TEN'
	     Dol11 = 'ELEVEN'
	     Dol12 = 'TWELVE'
	     Dol13 = 'THIRTEEN'
	     Dol14 = 'FOURTEEN'
	     Dol15 = 'FIFTEEN'
	     Dol16 = 'SIXTEEN'
	     Dol17 = 'SEVENTEEN'
	     Dol18 = 'EIGHTEEN'
	     Dol19 = 'NINETEEN'
	     Dol20 = 'TWENTY'
	     Dol30 = 'THIRTY'
	     Dol40 = 'FORTY'
	     Dol50 = 'FIFTY'
	     Dol60 = 'SIXTY'
	     Dol70 = 'SEVENTY'
	     Dol80 = 'EIGHTY'
	     Dol90 = 'NINETY'
	
	     wordAmt=''
	     IsHundred = .F.
	     checkMillion =.T.
	
	     FOR Counter = 1 TO 3
	
	     * First time through the For loop to check for millions
	     * Second time through the FOR loop to check for thousands
	     * Third time through the FOR loop to check for hundreds, tens and ones
	
	        DO CASE
	          CASE Counter = 1
	             cDNums = SUBSTR(chrAmt,1,3)
	          CASE Counter = 2
	             cDNums = SUBSTR(chrAmt,4,3)
	          CASE Counter = 3
	             cDnums = SUBSTR(chrAmt,7,3)
	        ENDCASE
	
	     * Check hundreds
	
	        IF LEFT(cDNums, 1) > '0'
	           cDvar = 'Dol'+LEFT(cDNums,1)
	           wordAmt = wordAmt + EVAL(cDvar)+SPACE(1)+'HUNDRED'+SPACE(1)
	           IsHundred = .T.
	           IF Counter = 2
	              CheckMillion = .T.
	           ENDIF
	        ENDIF
	
	     * Check tens and ones
	
	        Dtens = VAL(SUBSTR(cDNums,2,2))
	        IF Dtens > 0
	           IF Dtens > 20
	              cDvar = 'Dol'+SUBSTR(cDNums,2,1)+'0'
	              wordAmt = wordAmt + EVAL(cDvar)
	              IF SUBSTR(cDNums,3,1) > '0'
	                 cDvar = 'Dol'+SUBSTR(cDNums,3,1)
	                 wordAmt = wordAmt + '-'+ EVAL(cDvar) + SPACE(1)
	              ELSE
	                 wordAmt = wordAmt + SPACE(1)
	              ENDIF
	           ELSE
	              cDvar = 'Dol'+LTRIM(STR(Dtens))
	              wordAmt = wordAmt + EVAL(cDvar) + SPACE(1)
	           ENDIF
	           IsHundred = .F.
	           IF Counter = 2
	              CheckMillion = .T.
	           ENDIF
	        ENDIF
	
	     * Add in Million, if needed
	        IF numAmt > 999999.99 .AND. Counter = 1
	           wordAmt = wordAmt + SPACE(1)+'MILLION'+SPACE(1)
	           CheckMillion = .F.
	        ENDIF
	
	     * Add in Thousand, if needed
	        IF CheckMillion
	           IF numAmt > 999.99 .AND. Counter = 2
	              IF Dtens > 0
	                 wordAmt = wordAmt + SPACE(1)+'THOUSAND'+SPACE(1)
	              ENDIF
	              IF IsHundred
	                 wordAmt = wordAmt + SPACE(1)+'THOUSAND'+SPACE(1)
	              ENDIF
	           ENDIF
	        ENDIF
	
	     ENDFOR
	
	     * Construct the complete dollar amount in words
	
	     wordAmt = IIF(numAmt<1, 'ONLY'+SPACE(1), wordAmt + 'AND'+SPACE(1)) + ;
	     RIGHT(chrAmt,2)+'/100 ' + 'DOLLAR' + IIF(numAmt>1,'S','')
	
	     RETURN wordAmt
	
	SAMPLE
	------
	
	Here is a small sample that uses the above function.
	
	1. Create a form in Visual FoxPro.
	
	2. Add a custom method to the form, named it as NumToWord. Go to the NumToWord
	  method, and paste the above function into it.
	
	3. Add a TextBox control to the form, and set the following properties:
	
	       Value=0
	       InputMask = 999,999,999.99
	
	4. In the Valid event of the TextBox control, put in the following code:
	
	       Thisform.label1.Caption = Thisform.NumToWord(Thisform.Text1.Value)
	
	5. Add a Label to the form, and set the following properties:
	
	       WordWrap = .T.
	       Width   = 200
	       Height   = 35
	
	6. Save and run the form.
	
	RESULT: Type 1000.00 into the text box. "ONE THOUSAND AND 00/100 DOLLARS" appears
	in the form.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbnokeyword kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
