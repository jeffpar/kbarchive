---
layout: page
title: "Q299849: FIX: Failed TABLEUPDATE Misplaces Record Pointer"
permalink: /kb/299/Q299849/
---

## Q299849: FIX: Failed TABLEUPDATE Misplaces Record Pointer

{% raw %}

	Article: Q299849
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp kbvfp300 kbvfp300b kbvfp300bBUG kbvfp300BUG kbvfp500 kbvfp500a kbvfp50
	Last Modified: 29-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run multiple instances of Visual FoxPro (VFP) and a TABLEUPDATE fails,
	the record pointer is on a nonexistent record.
	
	STATUS
	======
	
	This problem was corrected in Visual FoxPro version 7.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Paste the following code in a new program in VFP version 3.0, 5.0, or 6.0.
	
	  *!* Q299849 FIX: Failed TABLEUPDATE Places Record Pointer On Nonexistent Record
	  CLEAR
	  SET EXCLUSIVE OFF
	  SET SAFETY OFF
	  SET MULTILOCKS ON
	  CREATE Table Demo74 ( cTest C(10))
	  INDEX ON cTest TAG cTest CANDIDATE
	  USE
	  =MESSAGEBOX('Start Part One')
	  USE Demo74
	  =CursorSetProp("Buffering", 5)
	  FOR lnI = 1 TO 10
	     APPEND BLANK
	     REPLACE cTest WITH Sys(2015)
	  ENDFOR
	  APPEND BLANK
	  REPLACE cTest WITH '12345'
	  =MESSAGEBOX('Start Part Two')
	  ? 'Reccount(), Recno() ', Reccount(), Recno()
	  ? 'GetFldState(-1) ', GetFldState(-1)
	  * Comment out the next line if running in VFP 3.
	  ? 'TableUpdate(1, .t.) ', TableUpdate(1, .t.)
	  *Uncomment the next line if running in VFP 3.
	  * ? 'TableUpdate(1, .t.) ', TableUpdate(.t., .t.)
	  ? 'Reccount(), Recno() ', Reccount(), Recno()
	  ? 'GetFldState(-1) ', GetFldState(-1)
	  ? 'Eof() ', Eof()
	  *Uncomment the next line if running in VFP 3.
	  * =TableRevert(.t.)
	  USE
	
	2. Save and run the code (the name is unimportant).
	
	3. Start another instance of VFP and run the same code.
	
	4. Switch to the first instance of VFP and click Start Part One.
	
	5. Switch to the second instance of VFP and click Start Part One.
	
	6. Switch to the first instance and click Start Part Two.
	
	7. Switch to the second instance and click Start Part Two.
	
	The record pointer in the second instance is on a record that does not exist in
	the table.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbvfp kbvfp300 kbvfp300b kbvfp300bBUG kbvfp300BUG kbvfp500 kbvfp500a kbvfp500aBUG kbvfp500bug kbvfp600 kbvfp600bug KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700fix kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
