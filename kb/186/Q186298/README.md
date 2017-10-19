---
layout: page
title: "Q186298: HOWTO: Get the HRESULT From a COM Object"
permalink: /kb/186/Q186298/
---

## Q186298: HOWTO: Get the HRESULT From a COM Object

	Article: Q186298
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you make calls to a function of a COM interface, the function returns an
	integer return code, or HRESULT. This value consists of a severity code, context
	information, a facility code, and a status code that describes the result. In
	Visual FoxPro, it may be useful to obtain the HRESULT for debugging purposes or
	error handling.
	
	MORE INFORMATION
	================
	
	In Visual FoxPro, it is not possible to obtain the HRESULT directly. However,
	when an OLE error occurs (error number 1426), the HRESULT is in the text of the
	error message in the form 0x800nnnnn. The sample code below demonstrates how to
	extract the HRESULT from the error message text and display it in both base 10
	and hexadecimal format.
	
	Sample Code
	-----------
	
	Create a program file named Hresult.prg, with the following code:
	
	     *-- Code begins here.
	     ON ERROR DO getresult IN hresult WITH ;
	        ERROR(), MESSAGE()
	
	     *-- Create an instance of Microsoft Word.
	     oWord = CREATEOBJECT("Word.Application")
	
	     *-- Call an invalid function to test our error handling.
	     oWord.RaiseError
	
	     PROCEDURE getresult
	        PARAMETER liError, lsMessage
	
	     IF liError <> 1426  && Not an OLE error code
	
	        *-- Since this error handler now handles all errors, it
	        *-- would be best to include some more robust error
	        *-- handling here to handle errors other than #1426.
	        RETURN
	     ENDIF
	
	     *-- Take the message string and parse the hexadecimal HRESULT.
	     *-- The VAL() function will do the conversion to a base 10 integer.
	     liHresult = VAL(SUBSTR(lsMessage, AT("0x", lsMessage), 10))
	
	     *-- Display the result in decimal and hexadecimal format.
	     *-- This section would be used to process the HRESULT as needed,
	     *-- either by parsing the returned code or otherwise overriding the
	     *-- default Visual FoxPro behavior.
	     MESSAGEBOX("OLE function returned HRESULT: " +;
	       CHR(10) + CHR(13) + ;
	       STR(liHresult) + " (decimal) " +;
	       CHR(10) + CHR(13) + ;
	       TRANSFORM(liHresult, "@0") + " (hexadecimal)", 0, "OLE Error")
	     RETURN
	     *-- Code ends here.
	
	REFERENCES
	==========
	
	MSDN Library
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Mike
	Stewart, Microsoft Corporation
	
	
	Additional query words: kbDSupport kbDSE beta99 FxinteropOcx FxinteropOle FxprgGeneral vfoxwin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbhowto
	
	=============================================================================
	
