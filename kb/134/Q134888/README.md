---
layout: page
title: "Q134888: BUG: GDI Memory Not Released in Windows 95 After Memory Error"
permalink: /kb/134/Q134888/
---

## Q134888: BUG: GDI Memory Not Released in Windows 95 After Memory Error

{% raw %}

	Article: Q134888
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS: 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbenv kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 03-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running a program that uses up all GDI memory in Windows 95 causes this error:
	
	  Not enough memory to complete this operation
	
	After the error message is closed, GDI memory is still not released. Running the
	program a second time causes Visual FoxPro to quit.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Run the following program. You will get the error "Not enough memory to
	  complete this operation." All GDI has been used and will not be released.
	
	     *Attempt to create and release 2500 windows
	
	     PRIVATE ALL EXCEPT g_*
	
	     cOldPrint = SET('PRINT',1)
	     SET PRINT OFF
	     SET PRINT TO
	
	     nMaxRows = 25
	     nMaxCols = 100
	
	     nBeforeHandles = SYS(1011)
	
	     WAIT WINDOW 'Patience ... may look dead, check system clock' NOWAIT
	
	     FOR i = -1 TO nMaxRows
	        FOR j = -1 to nMaxCols
	           cWindowName = 'Win'+ALLTRIM(STR(ABS(i)))+'_'+ALLTRIM(STR(ABS(j)))
	           DEFINE WINDOW (cWindowName);
	              FROM i,j TO i+10,j+10 ;
	              TITLE (cWindowName)
	           ACTIVATE WINDOW (cWindowName)
	        ENDFOR
	     ENDFOR
	     FOR i = -1 TO nMaxRows
	        FOR j = -1 to nMaxCols
	           RELEASE WINDOW
	        ENDFOR
	     ENDFOR
	
	     SET PRINT TO &cOldPrint
	     SET PRINT ON
	
	     nAfterHandles = SYS(1011)
	     nDiff = VAL(nAfterHandles) - VAL(nBeforeHandles)
	     ?IIF(nDiff > 50,'FAIL','PASS')
	
	     * Clean up and exit
	
	     WAIT CLEAR
	
	     RELEASE ALL EXCEPT g_*
	     RETURN
	
	2. Run the program again and Visual FoxPro will quit. Then GDI is released.
	
	Additional query words: hang stop dump crash kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbenv kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS: 3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
