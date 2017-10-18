---
layout: page
title: "Q216055: HOWTO: Pass an Array by Reference to LCK and Return Changes"
permalink: kb/216/Q216055/
---

## Q216055: HOWTO: Pass an Array by Reference to LCK and Return Changes

	Article: Q216055
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbVC kbvfp300b kbvfp500a kbvfp600 kbXBase
	Last Modified: 17-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to pass an array of real numbers to a FoxPro
	Library Construction Kit (LCK) routine in Visual C, manipulate the array in the
	LCK routine, and return the changed array to Visual FoxPro.
	
	MORE INFORMATION
	================
	
	Create a Visual FoxPro FLL in Visual C++ using the following C code:
	
	  #include <windows.h>
	  #include <pro_ext.h>
	
	  void FAR ByRef_array(ParamBlk FAR *parm)
	  {
	     int     start;         /* Starting value of Loop. */ 
	     Value   val;           /* Create Value structure. */ 
	     Locator loc;           /* Create Locator structure. */ 
	
	     start=0;
	     loc = parm->p[0].loc;  /* Store the contents of the FoxPro array
	                                    in the Locator structure. */ 
	
	     /* Get the number of elements from the FoxPro array. */ 
	
	     loc.l_subs = (int)_ALen(parm->p[0].loc.l_NTI, AL_ELEMENTS);
	
	     /* FOR loop to get the array elements. */ 
	
	     for(start=0;start != loc.l_subs ; start ++){
	        loc.l_sub1=(start+1);
	
	        /* Store the contents of the FoxPro array in a Value Structure.*/ 
	        _Load(&loc,&val);
	
	        /* Copy the contents of the FoxPro array to the function array.*/ 
	  		
	        /* Test array contents and manipulate accordingly */ 
	        if (val.ev_type == 'N') 
	           {
	           if (val.ev_real < 10) 
	              val.ev_real = val.ev_real * 1;
	           else 
	              if (val.ev_real < 20) 
	                 val.ev_real = val.ev_real * 2;
	              else 
	                 if (val.ev_real < 30)
	                    val.ev_real = val.ev_real * 3;
	                 else val.ev_real = val.ev_real * 4;	
	        }
	        else
	           MessageBox(NULL,"Wrong Data type","Should be a number.",MB_OK);
	  		
	        /* Copy the contents of Locator Structure into Value Structure.*/ 
	        _Store(&loc, &val); 	 
	  		   
	     }		
	  }
	
	     FoxInfo myFoxInfo[]={
	        {"ByRef_ARRAY",(FPFI)ByRef_array,1,"R"},
	     };
	
	     FoxTable _FoxTable={
	        (FoxTable FAR*)0, sizeof(myFoxInfo) / sizeof(FoxInfo), myFoxInfo
	     };
	
	To test that the array has changed, create a program and enter the following
	FoxPro code:
	
	  CLEAR
	  cfixed=SET('FIXED')
	  SET FIXED ON
	
	  cdecimal=SET('DECIMALS')
	  SET DECIMAL TO 4
	
	  * Point to the DLL built in Visual C 
	  SET LIBRARY TO "D:\visual c 6\MyProjects\by_ref\Debug\by_ref.dll"
	
	  * Populate array with random values then print to see original values
	  PUBLIC by_reftest(10)
	
	  ?"Array before LCK routine..."
	  FOR i = 1 TO ALEN(by_reftest)
	  	by_reftest(i)= 60 * RAND()
	  	?by_reftest(i)
	  ENDFOR
	
	  * Call the LCK function and pass the array by reference
	  =ByRef_array(@by_reftest)
	
	  ?"Array after LCK routine..."
	  FOR i = 1 TO ALEN(by_reftest)
	     ?by_reftest(i)
	  ENDFOR
	
	  SET FIXED &cfixed
	  SET DECIMALS TO &cdecimals
	  SET LIBRARY TO
	
	REFERENCES
	==========
	
	For additional information about the FoxPro Library Construction Kit (LCK),
	please see the following articles in the Microsoft Knowledge Base:
	
	Q122591 PRB: How to Change Variable Value Passed by Reference in LCK
	
	Q119636 How to Pass an Array to a Routine in an LCK Library
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Dean
	Christopher, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVC kbvfp300b kbvfp500a kbvfp600 kbXBase 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0b,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
