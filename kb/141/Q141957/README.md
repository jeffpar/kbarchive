---
layout: page
title: "Q141957: BUG: Float Fields Show Asterisks in Wizard-Generated Screen"
permalink: /kb/141/Q141957/
---

## Q141957: BUG: Float Fields Show Asterisks in Wizard-Generated Screen

	Article: Q141957
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Wizard-generated screen displays numeric float data with asterisks instead
	of actual numbers.
	
	CAUSE
	=====
	
	The default InputMask clause for the text box object that is used to display the
	Float field is not defined to handle any numbers greater than 99,999.99.
	
	WORKAROUND
	==========
	
	Modify the form in the Form Designer, and change the InputMask to 9,999,999.99
	or whatever setting is appropriate.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Run the following code to create a sample table for use with the Form
	  Wizard:
	
	     SET SAFETY OFF
	     CLOSE ALL
	     CLEAR ALL
	     CLEAR
	     CREATE TABLE mytable (Project C(5), Company C(40), DolrAmt F(14,8))
	     INSERT INTO mytable VALUES ("00001","Acme Inc.",1234567.23)
	     INSERT INTO mytable VALUES ("00002","Weatherford Inc.",75232.33243)
	     INSERT INTO mytable VALUES ("00003","Wonkaland",9123.22)
	
	2. Run the Form Wizard on the new table, choosing all the fields listed in Step
	  1. Click Finish, and then select Preview on the last dialog screen. As you go
	  from record to record, the amount shown for Acme, Inc. will be displayed as
	  asterisks.
	
	Additional query words: VFoxWin buglist3.00b inputmask kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0b,5.0,6.0
	
	=============================================================================
	
