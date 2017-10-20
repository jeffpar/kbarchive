---
layout: page
title: "Q95664: PRB: APPEND FROM &lt;File&gt; w/FOR Cause Doesn't Behave As Expected"
permalink: /kb/095/Q95664/
---

## Q95664: PRB: APPEND FROM &lt;File&gt; w/FOR Cause Doesn't Behave As Expected

{% raw %}

	Article: Q95664
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c; MS-DOS:2.0,2.5,2.5a,2.5b,2.6; WINDOWS:2.5,2.5a,2.5b,2.6,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The APPEND FROM <file> command with a FOR clause appears to fail and
	behave incorrectly under the following conditions:
	
	- When SET DELETED is OFF, the APPEND FROM <file> FOR NOT DELETED()
	  command appends all records, including those that have been marked for
	  deletion.
	
	- If the field referenced in the FOR clause is not in the current database, the
	  APPEND FROM command appends no records, even if there are fields in the
	  original database that meet the FOR condition.
	
	CAUSE
	=====
	
	This behavior occurs because the APPEND FROM command evaluates the criteria
	after it has been copied from the database.
	
	- In the first instance, the deleted attribute is not valid in this state and
	  therefore all deleted records are copied. If SET DELETED is ON, the APPEND
	  FROM command automatically ignores all deleted records.
	
	- In the second case, the APPEND FROM command tries to copy all the fields and
	  then delete the fields that do not match the FOR clause. Since the field does
	  not exist in the current database, the condition cannot be met, and the
	  APPEND FROM command fails.
	
	WORKAROUND
	==========
	
	To work around this problem, use the COPY TO command as follows:
	
	  COPY TO <file> FOR NOT DELETED()
	
	  -or-
	
	  COPY TO <file> FOR <field> = <value>
	
	Additional query words: VFoxWin FoxMac FoxDos FoxWin fails unexpected results DBF database
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro250cMac kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : MACINTOSH:2.5b,2.5c; MS-DOS:2.0,2.5,2.5a,2.5b,2.6; WINDOWS:2.5,2.5a,2.5b,2.6,3.0
	
	=============================================================================
	

{% endraw %}
