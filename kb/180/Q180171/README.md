---
layout: page
title: "Q180171: PRB: FoxPro/Mac Table Operations Do Not Release Memory"
permalink: /kb/180/Q180171/
---

## Q180171: PRB: FoxPro/Mac Table Operations Do Not Release Memory

{% raw %}

	Article: Q180171
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a,3.0b
	Operating System(s): 
	Keyword(s): kbHWMAC kbvfp
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	User object memory in FoxPro increases greatly and does not decrease when you
	issue any of the following commands on a large table:
	
	     DELETE ALL
	     RECALL ALL
	     INDEX ON
	     SCAN...ENDSCAN
	
	RESOLUTION
	==========
	
	Closing and reopening the table reduces memory usage back to its approximate
	original value.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	User object memory is defined as memory used by objects that the user or
	programmer defines. User-defined objects include user-defined windows, menu
	bars, menus, variables, arrays, open tables, files opened with low-level file
	functions, and so on. User object memory can be checked with the SYS(1016)
	function.
	
	Applications on the Macintosh obtain memory from the operating system in a
	different way than Windows applications. On the Macintosh, the amount of memory
	to be allocated to a program is specified in the Get Info window under the Mac's
	File menu. The minimum amount of memory to be used for an application and the
	preferred amount can be set. However, the application must be closed to change
	these settings. If there is enough memory for the preferred amount to be used,
	the application takes this much memory from the operating system upon startup
	although the application may not be using all that memory. The memory is just
	reserved for the application.
	
	In addition to using the SYS(1016) function, the amount of memory allocated to
	FoxPro that is in use can be viewed from the About This Computer (or About This
	Macintosh, depending on the System software version) command on the Apple menu
	in Finder. This dialog box displays the System software version, the amount of
	total memory, the amount of virtual memory and the memory allocated to all
	running applications, including Finder itself. If Balloon Help is turned on and
	the mouse pointer is placed over the memory bar for an application, the balloon
	displays the amount of memory in use by the application. For instance, with
	Visual FoxPro, the balloon may display "This program is currently using 2.8 MB
	out of the 5.9 MB reserved for it."
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Obtain or create a large table. The program below can be used to create a
	  large table with 90,000 records. This may take considerable time to run
	  depending on the speed of the Macintosh.
	
	        CREATE TABLE BigTable (CharVal C(12), NumVal N(8.0))
	        USE BigTable.DBF
	        FOR x = 1 TO 90000
	        INSERT INTO bigtable (CharVal, NumVal) ;
	           VALUES (SYS(2015), RECCOUNT()+1)
	        NEXT
	        USE
	
	2. Check user object memory with the SYS(1016) function. From the Command window
	  type in the code below and then press ENTER:
	
	        ? SYS(1016)
	
	  A number should appear on the FoxPro screen.
	
	  Here is an example:
	
	  2516480
	
	3. In the Command window type:
	
	        USE Big_Table
	        ? SYS(1016)
	
	  The User object memory should increase slightly.
	
	4. Issue a DELETE ALL command in the Command window and check SYS(1016) again.
	
	5. Now issue a RECALL ALL in the Command window and check SYS(1016).
	
	6. Close the table by issuing just the USE command in the Command window and
	  check SYS(1016).
	
	7. Similar results can be seen using the INDEX ON command and a SCAN...ENDSCAN
	  loop. The INDEX ON <fieldname> TO <filename.idx> command uses
	  more memory than the DELETE ALL or RECALL ALL commands.
	
	REFERENCES
	==========
	
	For more information on creating large tables for testing purposes, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170128 HOWTO: Programmatically Create Large Tables for Testing Purposes
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHWMAC kbvfp 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.6a,3.0b
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
