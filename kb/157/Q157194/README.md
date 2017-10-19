---
layout: page
title: "Q157194: PRB: TYPE Function Does Not Indicate Character(Binary)"
permalink: /kb/157/Q157194/
---

## Q157194: PRB: TYPE Function Does Not Indicate Character(Binary)

	Article: Q157194
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The TYPE() function does not differentiate between Character and
	Character(binary) or Memo and Memo(binary) field types. The Type() function
	simply returns a "C" or an "M," respectively.
	
	WORKAROUND
	==========
	
	Use the AFIELDS() function to create an array that contains information on each
	field in the table. The procedure listed below, bin_fld, contains code that
	determines whether a character or memo field is binary. Before executing this
	code, issue the CREATE TABLE syntax provided in step 1 of the "Steps To
	Reproduce Behavior" section below.
	
	1. Create a program called Test that contains the following code:
	
	     **** Begin Program Example ****
	     PROC bin_fld
	     PARAMETER a
	     IF TYPE(a)= "C" OR TYPE(a) ="M"
	           =AFIELDS(test)
	           IF ASCAN(test,UPPER(a)) > 0
	              fldtype=ASCAN(test,UPPER(a))+1
	                 IF test(ASCAN(test,UPPER(a))+5)=.T.
	                    retvalu= "Field Type: "+ test[fldtype]+ " Binary"
	                 ELSE
	                    retvalu= "Field Type: "+ test[fldtype]+ ' Not Binary'
	                 ENDIF
	           ENDIF
	     ELSE
	           retvalu= TYPE(a)
	     ENDIF
	     RETURN retvalu
	     **** End program example ****
	
	2. Type "SET PROCEDURE TO Test" (without the quotation marks) in the Command
	  window.
	
	3. Type ? Bin_fld("memo1") (without outermost quotes in the Command window.
	
	The values returned from the bin_fld procedure for character and memo fields
	indicate not only the field's type but also whether the field is binary.
	
	The AFIELDS() function creates an array with specific information on each field
	in a chosen table. For example, the sixth element of the array created by the
	AFIELDS() function shows whether code page translation is allowed. This field
	contain a true (.T.) or false (.F.) value. If this element contains a true value
	in a Character or Memo field type, the field is binary. The TYPE() command
	handles any other field types. Entry of a nonexistent field name produces a "U,"
	indicating undefined.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Character(Binary) or Memo (Binary) are not separate data types, as are Date,
	Currency, or Numeric types. The Binary versions of these fields prevent the
	field from conversion into another code page.
	
	The NOCPTRANS clause on the CREATE TABLE or ALTER TABLE commands creates a binary
	Character or Memo field. This clause prevents a Character or Memo field from
	being translated into another code page. Since the NOCPTRANS clause works only
	on character or memo fields, these are the only field types in Visual FoxPro
	that can be either binary or non-binary. Some fields, however, are binary by
	design, such as Integer and General types. Therefore, the TYPE() function
	provides adequate information.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Command window, type the following command as one line:
	
	        CREATE TABLE Test (char1 C(10), char2 C(10) NOCPTRANS, memo1 M(4),
	        memo2 M(4) NOCPTRANS)
	
	2. Type the following four lines in the Command window:
	
	        ? TYPE("char1")
	        ? TYPE("char2")
	        ? TYPE("memo1")
	        ? TYPE("memo2")
	
	The commands all return either "C" or "M" depending on the field type without
	indicating whether or not it is binary.
	
	Additional query words: kbdsd VFoxWin
	
	======================================================================
	Keywords          : kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	
	=============================================================================
	
