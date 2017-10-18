---
layout: page
title: "Q123975: How to Read Fields in a Table from the LCK"
permalink: kb/123/Q123975/
---

## Q123975: How to Read Fields in a Table from the LCK

	Article: Q123975
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.6a,3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, version 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to read the contents of a field in a table using the
	Library Construction Kit (LCK).
	
	MORE INFORMATION
	================
	
	When you write a C program using the Library Construction Kit, you may sometimes
	need to know the value of a field in a table. To find that value, follow these
	steps:
	
	1. Call the _NameTableIndex() function. It returns a name table index that
	  corresponds to the field name.
	
	2. Call the _FindVar() function. It uses the name table index to fill a Locator
	  structure with information about the field.
	
	3. Call the _Load() function. It uses the information in the Locator structure
	  to place values for the field in a Value structure.
	
	4. Refer to the Value structure. It contains the contents of the field
	  initialized in Step 3. For more information on the nature of a Locator and
	  Value structure, please see the "Data Structures" section in the Microsoft
	  FoxPro Library Construction Kit documentation.
	
	Example
	-------
	
	The following code sample illustrates the concepts explained above. This code can
	be compiled into an FLL for use with FoxPro for Windows, a PLB for use with
	FoxPro for MS-DOS, or an MLB for use with FoxPro for Macintosh. This code
	creates a function called ReadDb.
	
	The syntax for the ReadDb() function is:
	
	  ReadDb(<expN>,<expC>)
	
	- expN is the work area in which the table is located. If a work area of 0 is
	  specified, ReadDb() will search all works areas to find the specified field.
	
	- expC is the field whose value this function should display.
	
	For example, if a table located in work area 1 has a character field named flda,
	you could use the following ReadDb function to find the value of the field:
	
	     = ReadDb(1,"flda")
	
	Code Sample
	-----------
	
	  #include <pro_ext.h>
	
	  void FAR ReadDb(ParamBlk FAR *parm)
	  {
	
	    char FAR * fldname ;    // name of field
	    char FAR * fldtxt ;     // contents of field
	    NTI nti;                // for _NameTableIndex
	    Locator loc;            // a locator structure
	    Value val ;             // a value structure
	
	    // Increase the size of the handle to the character string
	    // containing the field name so it can be null terminated.
	
	    if (!_SetHandSize(parm->p[1].val.ev_handle, parm->p[1].val.ev_length +
	  1))
	
	    {
	      _Error(182); // "Insufficient memory"
	    }
	
	    // Lock the handle to the character string containing
	    // the name of the field.
	
	    _HLock(parm->p[1].val.ev_handle) ;
	
	    // Establish a pointer to the character string containing
	    // the name of the field.
	
	    fldname = (char FAR *) _HandToPtr(parm->p[1].val.ev_handle) ;
	
	    // Null terminate the character string containing the
	    // name of the field.
	
	    fldname[parm->p[1].val.ev_length] = '\0' ;
	
	    // Get nti value for the field.
	
	    nti = _NameTableIndex(fldname) ;
	
	    // Unlock the handle to the character string containing
	    // the name of the field.
	
	    _HUnLock(parm->p[1].val.ev_handle) ;
	
	    if (nti == -1)
	    {
	      // This should not happen if a valid field name was passed.
	
	      _PutStr("\nNameTableIndex Failure") ;
	    }
	    else
	    {
	      // Fill locator structure with information about the field:
	
	      // Note that the second parameter to the _FindVar() function
	      // is the first parameter that was passed to this function.
	      // The first parameter to this function is a numeric value
	      // specified the work area in which the field is located.
	
	      if (! _FindVar(nti, (int) parm->p[0].val.ev_long, &loc))
	      {
	
	        // This should not happen if a valid field name was passed.
	
	        _PutStr("\nFindVar Failure") ;
	
	      }
	      else
	      {
	
	        // Fill a value structure with field values.
	
	        _Load(&loc,&val) ;
	
	        // This code is written to support fields that are of
	        // type character only.
	
	        if (val.ev_type == 'C')
	        {
	
	          // Create a null-terminated string which contains the
	          // text in the specified field.
	
	          if (!_SetHandSize(val.ev_handle, val.ev_length + 1))
	          {
	            _Error(182); // "Insufficient memory"
	          }
	
	          _HLock(val.ev_handle) ;
	          fldtxt = (char FAR *) _HandToPtr(val.ev_handle) ;
	          fldtxt[val.ev_length] = '\0' ;
	
	          // Display the values on the screen.
	
	          _PutStr("\n") ;
	          _PutStr(fldtxt) ;
	
	          // Unlock the handle to the text.
	
	          _HUnLock(val.ev_handle) ;
	        }
	        else
	        {
	          _PutStr("\nThe specified field is not of type Character.") ;
	
	        }
	      }
	    }
	  }
	
	  FoxInfo myFoxInfo[] =
	  {
	       {"READDB", (FPFI) ReadDb, 2, "I,C"},
	  };
	
	  FoxTable _FoxTable =
	  {
	       (FoxTable FAR *) 0, sizeof(myFoxInfo)/sizeof(FoxInfo), myFoxInfo
	  };
	
	Additional query words: VFoxWin 3.00 FoxWin 2.60a
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260a kbVFP300
	Version           : WINDOWS:2.6a,3.0
	
	=============================================================================
	
