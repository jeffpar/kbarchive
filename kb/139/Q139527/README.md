---
layout: page
title: "Q139527: How to Create a Table that Has Many Fields of Identical Size"
permalink: /kb/139/Q139527/
---

## Q139527: How to Create a Table that Has Many Fields of Identical Size

{% raw %}

	Article: Q139527
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Creating tables that contain many fields can be time consuming, especially if
	all the fields have the same type and size. With a few lines of code, the table
	can be created easily.
	
	MORE INFORMATION
	================
	
	The following program creates a table called newtable that has 200 fields, each
	defined as a character field of size 20:
	
	     lnTblstr="("
	     FOR lnI=1 to 200
	       lnTblstr=lnTblstr+"FLD"+ALLTRIM(STR(lnI))+" C(20),"
	     ENDFOR
	     lnTblstr=STUFF(lnTblstr,LEN(lnTblstr),1,")")
	     CREATE TABLE newtable FREE &lnTblstr
	
	Additional query words: VFoxWin kbhowto
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
