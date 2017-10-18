---
layout: page
title: "Q155692: HOWTO: Calculate Payments in FoxPro"
permalink: kb/155/Q155692/
---

## Q155692: HOWTO: Calculate Payments in FoxPro

	Article: Q155692
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The PAYMENT() function in Visual FoxPro allows the user to calculate a payment
	amount per month based upon a fixed interest rate.
	
	MORE INFORMATION
	================
	
	The following program displays the monthly payment for a 15-year home mortgage
	based upon an 8-percent interest rate:
	
	     nTotal=100000  && total amount borrowed is $100000
	     nRate=.08/12   && payment is made at the end of each month with fixed
	                    && interest rate
	     nPayments=180  && 180 months in 15 year period
	
	     cDisplay=MESSAGEBOX("Your monthly payment is" ;
	        +" "+"$"+ALLTRIM(STR(PAYMENT(nTotal,nRate,nPayments))))
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
