---
layout: page
title: "Q190260: BUG: View Window Responds Incorrectly to Double-Click"
permalink: /kb/190/Q190260/
---

## Q190260: BUG: View Window Responds Incorrectly to Double-Click

{% raw %}

	Article: Q190260
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Double-clicking a table in the Alias window of the Data session dialog box (or
	the View dialog box in Visual FoxPro 3.0x) does not always open a Browse window
	for that table.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This behavior occurs when displaying more than ten tables with this dialog. If
	the table appears in the middle of the list, double-clicking does not open the
	Browse window. However, if the table appears at the top or the bottom of the
	list, double-clicking does open a Browse window.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program that contains the following code and run the program:
	
	        CREATE TABLE test (one c(10))
	        INSERT INTO test VALUES ('hi there')
	
	        FOR ii=1 TO 25
	           COPY TO ('test'+ALLTRIM(STR(ii)))
	           USE ('test'+ALLTRIM(STR(ii))) IN 0
	        ENDFOR
	
	        SET
	
	2. Double-click Test4, which appears in the middle of the visible list of files.
	  Note that the list jumps and you end up selecting a different table. The
	  Browse window does not open. Similar behavior may happen when double-clicking
	  tables in the list.
	
	3. To delete all the tables created by the sample code, add the following code
	  to a separate program file and run the program:
	
	        CLOSE ALL
	        DELETE FILE test.DBF
	        FOR ii=1 TO 25
	           DELETE FILE  ('test'+ALLTRIM(STR(ii)))+".dbf"
	        ENDFOR
	
	Additional query words: kbVFp300bbug kbVFP500abug kbVFp600bug kbDatabase kbvfp600 kbXbase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
