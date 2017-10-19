---
layout: page
title: "Q163798: BUG: Spell Checking on Memo Field Causes Error"
permalink: /kb/163/Q163798/
---

## Q163798: BUG: Spell Checking on Memo Field Causes Error

	Article: Q163798
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Invoking the Spell Checker on a Memo field in a multi-user situation will cause
	the following warning:
	
	  "Memo field could not be locked for Spell Checker"
	
	This warning occurs if the record is currently locked by another user.
	
	CAUSE
	=====
	
	The Spell Checker is ignoring the Optimistic Record Locking scheme of the Form.
	
	RESOLUTION
	==========
	
	Place the following code in the DoubleClick Method of Edit Region:
	
	        && Copy current record to a separate file to avoid locking problem
	        COPY NEXT 1 TO spellchk.dbf
	        USE spellchk IN 0
	        SELECT spellchk
	
	        && The following line may be added if the user wants changes
	        && made to the buffered data appearing in Spell Checker. The reason
	        && for this is the COPY TO command is reading directly from dbf file
	        && on disk rather than the buffered data appearing in Edit region.
	
	        REPLACE spellchk.notes WITH THIS.VALUE
	
	        && Run SpellChecker on the temporary table
	        MODIFY MEMO notes NOWAIT
	
	        DO (_SPELLCHK)
	        CLOSE MEMO notes
	
	        && Update Edit Region and original table with any changes made
	        && by user/SpellChecker
	        THIS.VALUE=spellchk.NOTES
	        USE  && Close the temporary table
	        SELECT employee
	
	        THIS.REFRESH() && Update the Edit Region
	
	        && Erase the temporary files created
	        ERASE spellchk.dbf
	        ERASE spellchk.fpt
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Issue the following commands in the command window:
	
	        OPEN DATABASE HOME()+"SAMPLES\DATA\TestData.DBC" SHARED
	        USE employee SHARED
	
	2. Create a new form.
	
	3. Right-click the form and select "Data Environment" from the shortcut menu.
	
	4. Add the TESTDATA!Employee table to the Data Environment (DE) of the form.
	
	5. Right-click the Employee table and select Properties from the shortcut menu.
	
	6. Set the Exclusive property of the Cursor to False (should be Default).
	
	7. Drag the Notes Field from the Cursor in the DE onto the Form to create an
	  edit region for the field.
	
	8. Go to the Properties window.
	
	9. Set the BufferMode property of the form to 2-Optimistic.
	
	10. Set the DataSession property of the form to 2-Private DataSession.
	
	11. Add the following code to the DoubleClick Method of the Edit Region:
	
	        MODIFY MEMO notes NOWAIT
	        * Opens a text editing window that displays the memo field
	        * assuming the memo field is called "notes".
	        * The "nowait" clause allows execution to continue
	        DO (_SPELLCHK)
	        * The _spellchk system variable references the spell checker that
	        * will be executed by FoxPro.
	        CLOSE MEMO NOTES
	        * This closes the text editing window after the user exits the
	        * spell checker
	
	12. In the Command Window issue the following:
	
	        SELECT employee
	        ? RLOCK() &&Locks the Record
	
	13. Save and run the Form.
	
	14. Double-click the Edit Region to invoke the Spell Checker.
	
	REFERENCES
	==========
	
	For more information about spell checking in FoxPro, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q117212 How to Use the FoxPro Spelling Checker (SPELLCHK.APP)
	
	  Q136641 PRB: Spell Checking Edit Box Contents Does Not Work
	
	
	Additional query words: kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
