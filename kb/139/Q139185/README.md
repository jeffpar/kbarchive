---
layout: page
title: "Q139185: DOCERR: Incorrect Syntax in SET KEY Command Example in Help"
permalink: /kb/139/Q139185/
---

## Q139185: DOCERR: Incorrect Syntax in SET KEY Command Example in Help

	Article: Q139185
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Help file for Visual FoxPro has an incorrect code example for the SET KEY
	command. The RANGE clause is omitted, and the SET ORDER TO command refers to a
	field that does not exist in the Customer table in the Testdata database.
	
	MORE INFORMATION
	================
	
	Following is the incorrect code example for the SET KEY command:
	
	     CLOSE DATABASES
	     USE customer
	     SET ORDER TO zip
	     SET KEY TO '43000', '43999'
	
	This code example returns an error because there is no Zip field in the Customer
	table. If the Zip field did exist, the only records visible would be those with
	a value of 43000 in the Zip field. This is because there is no RANGE clause in
	the SET KEY command.
	
	Following is the corrected code example:
	
	     CLOSE DATABASES
	     USE C:\VFP\SAMPLES\DATA\Testdata!Customer
	     INDEX ON postalcode TAG postalcode
	     SET ORDER TO postalcode
	     SET KEY TO RANGE '40000', '43999'
	     BROWSE
	
	Using this code, you will see records that have values between 40000 and 43999 in
	the Postalcode field.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
