---
layout: page
title: "Q151841: PRB: FoxPro and Clipper Share the Same DBF Files on a Network"
permalink: /kb/151/Q151841/
---

## Q151841: PRB: FoxPro and Clipper Share the Same DBF Files on a Network

{% raw %}

	Article: Q151841
	Product(s): Microsoft FoxPro
	Version(s): 2.50 2.50a 2.50b 2.60 2.60a 3.00
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	RLOCK() will not function properly when a FoxPro Application and a Clipper
	Application access the same table simultaneously.
	
	CAUSE
	=====
	
	Both FoxPro and Clipper have their own Locking Mechanism. When applying a lock
	to a table file on the Network, the function FLOCK() can be recognized by both
	Foxpro and Clipper; it will return a TRUE (.T.) if the table is locked by any of
	the applications. The function RLOCK() returns a TRUE only if a particular
	record of a table is locked by the same application. In other words, if a record
	was locked by Foxpro, Clipper can still lock the particular record without an
	error, and it has the same behavior the other way around.
	
	RESOLUTION
	==========
	
	Use FLOCK() instead of RLOCK().
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following code in Clipper:
	
	     ** <Table_Field> is a numeric field in a Table
	
	     USE <Table_Name> SHARED
	     GOTO TOP
	     REPLACE <Table_Field> WITH 100   && Initial Value of <Table_Field>
	
	     DO WHILE RLOCK()                 && Record is Locked by Clipper
	        ? <Table_Field>
	        WAIT ?Hit a Key ...? TO M.temp
	     ENDDO
	
	and Run the following code in FoxPro:
	
	     USE <Table_Name> SHARED
	     GOTO TOP
	
	     DO WHILE RLOCK()                 && Record is Locked by Foxpro
	        REPLACE <Table_Field> WITH <Table_Field> + 1
	        WAIT ?Hit a Key ...? TO M.temp
	     ENDDO
	
	Expected Behavior
	-----------------
	
	When the above code is executed by Foxpro and Clipper at the same time, the
	expected behavior is:
	
	- Clipper locks the record and displays the value of the field, which is 100.
	
	- Foxpro cannot lock the same record, so it will keep on trying to lock the
	  record and will not be able to add 1 to the field.
	
	Actual Behavior
	---------------
	
	- Clipper locks the record and displays the value of the field, which is 100.
	
	- FoxPro locks the record successfully and adds 1 to the field.
	
	- Press a key on the Clipper machine, and it displays 101.
	
	- Press a key on the Foxpro machine, and it locks the record successfully again
	  and adds one more to the field.
	
	- Press a key on the Clipper machine, and it displays 102.
	
	Additional query words: FoxWin VFoxWin FoxDos
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbFoxPro260a kbVFP300 kbVFP300b
	Version           : 2.50 2.50a 2.50b 2.60 2.60a 3.00
	
	=============================================================================
	

{% endraw %}
