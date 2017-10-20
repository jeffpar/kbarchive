---
layout: page
title: "Q140300: FIX: SQL SELECT Returns Different Results Using the Same Data"
permalink: /kb/140/Q140300/
---

## Q140300: FIX: SQL SELECT Returns Different Results Using the Same Data

{% raw %}

	Article: Q140300
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The number of records returned from the same SQL SELECT statement on the same
	data is different.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	The following program displays the number of records returned from two
	consecutive SQL statements. Note that different numbers are returned.
	
	     SET SAFETY OFF
	     CLOSE ALL
	
	     CREATE TABLE main (num N(1), link C(50), crit C(50))
	     INSERT INTO main VALUES (1, "YES", "YES")
	     INSERT INTO main VALUES (2, "NO", "YES")
	     INSERT INTO main VALUES (3, "NO", "NO")
	     INSERT INTO main VALUES (4, "YES", "NO")
	
	     CREATE TABLE link (link C(50))
	     INSERT INTO link VALUES ("YES")
	
	     CLOSE ALL
	     CLEAR
	
	     FOR i = 1 TO 2
	
	        lcTmpFile = "tmp" + ALLTRIM(STR(i)) + ".dbf"
	        IF FILE(lcTmpFile)
	           ERASE (lcTmpFile)
	        ENDIF
	
	        SELECT num, link, crit FROM main ;
	           WHERE ((main.link IN (SELECT link.link FROM link)) OR ;
	              (crit = "YES")) INTO TABLE (lcTmpFile)
	
	        ? _TALLY
	
	     ENDFOR
	
	Additional query words: VFoxWin buglist3.00 fixlist3.00b
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
