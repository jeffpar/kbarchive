---
layout: page
title: "Q142397: BUG: REPLACE with UDF May Cause &quot;Record Is Not Locked&quot; Error"
permalink: /kb/142/Q142397/
---

## Q142397: BUG: REPLACE with UDF May Cause &quot;Record Is Not Locked&quot; Error

{% raw %}

	Article: Q142397
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using a user-defined function (UDF) that moves the record pointer in the
	currently selected table with a REPLACE command causes a "Record is not locked"
	error message. This error occurs if the buffering property is set to
	2-Pessimistic record, 3-Optimistic record, or 5-Optimistic table.
	
	WORKAROUND
	==========
	
	Set the buffering property to 4-Pessimistic table. This locks the record and
	updates it after issuing the TABLEUPDATE() function.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a program called Test.prg containing the following code:
	
	     SET MULTILOCKS ON
	     SET EXCLUSIVE OFF
	     SET DEFAULT TO SYS(2004)+"Samples\Data"
	     OPEN DATABASE Testdata
	     USE Customer
	     =CURSORSETPROP("Buffering",2)
	     GO 5
	     REPLACE maxordamt WITH mfunc()
	     REPLACE maxordamt WITH mfunc()
	     =TABLEUPDATE()
	     =CURSORSETPROP("Buffering",1)
	
	     FUNCTION mfunc
	     ** Moves record from original position
	     oldrec=IIF(EOF(),0,RECNO())
	     GO 1
	     tmp=maxordamt
	     IF oldrec>0
	        GO oldrec
	     ENDIF
	     RETURN tmp
	
	2. Run the program. The error "Record is not locked" appears after encountering
	  the second REPLACE command.
	
	REFERENCES
	==========
	
	For more information about the affect of SET EXCLUSIVE, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q125732 Cursor Created by User or ODBC Has EXCLUSIVE Status
	
	For more information about the affect of READ NOLOCK, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q131031 READ NOLOCK Behavior in Visual FoxPro
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
