---
layout: page
title: "Q196758: WD97: Numbers Containing Hyphens Are Sorted Incorrectly"
permalink: /kb/196/Q196758/
---

## Q196758: WD97: Numbers Containing Hyphens Are Sorted Incorrectly

	Article: Q196758
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In some cases, Word may sort numbers incorrectly.
	
	Case 1
	------
	
	When you perform a numeric sort operation on numbers that contain hyphens, such
	as social security numbers, phone numbers, and nine-digit ZIP Codes (postal
	codes), Word may sort the numbers incorrectly.
	
	Case 2
	------
	
	Similarly, Word may sort your mail merge data incorrectly when you sort mail
	merge data records by using the Sort Records tab in the Query Options dialog
	box.
	
	CAUSE
	=====
	
	Case 1
	------
	
	If you select Number for the Sort By Type setting in the Table Sort Numbers
	dialog box, Word treats the hyphen as a minus sign. As a result, Word performs a
	subtraction operation and then sorts the difference. For example, if you sort
	the following list of nine-digit postal codes, Word performs a subtraction
	operation and then sorts the result.
	
	  Nine-Digit Postal Code            Result If Subtracted
	  ------------------------------------------------------
	
	  11111-1111                        10000
	  99999-9999                        90000
	  95000-0001                        94999
	  98000-9999                        88001
	
	  Result of Sorting as Number       Number Used for Sorting
	  ---------------------------------------------------------
	
	  11111-1111                        10000
	  98000-9999                        88001
	  99999-9999                        90000
	  95000-0001                        94999
	
	Case 2
	------
	
	Similarly, in a mail merge operation, if you perform a sorting operation based on
	a field that contains hyphenated numeric data, Word automatically treats your
	data as numeric and, therefore, uses the hyphen as a minus sign. (To sort from a
	mail merge operation, open the Mail Merge Helper and then click Query Options.)
	
	NOTE: Word treats the data in any mail merge field as numeric if the first
	character in the field is a number.
	
	WORKAROUND
	==========
	
	Method 1: Sort as Text
	----------------------
	
	To correctly sort numbers that contain hyphens, select Text as the Sort By Type
	setting in the Table Sort Numbers dialog box.
	
	Method 2: Sort Data File Before Merging
	---------------------------------------
	
	For a mail merge operation, if you want to sort based on a field that contains
	hyphenated numbers, sort the data source before you perform the mail merge
	operation instead of using the Mail Merge Helper.
	
	Method 3: Replace Hyphens Before You Sort the Data
	--------------------------------------------------
	
	If you want to sort hyphenated data and use the Number (Numeric) Type setting,
	follow these steps:
	
	1. Before you perform the sorting operation, replace the hyphens with periods
	  (.).
	
	2. Sort the data using the Mail Merge Helper or the Sort Text command on the
	  Table menu.
	
	3. Replace the periods with hyphens to restore your original numeric data.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: incorrect calculates hyphenated hyphenation mailmerge math mathematical merge numbers numeric print subtracts working wrong
	
	======================================================================
	Keywords          : kbdta word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
