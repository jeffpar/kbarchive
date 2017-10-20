---
layout: page
title: "Q95250: How to Recycle Deleted Records in a Multiuser Environment"
permalink: /kb/095/Q95250/
---

## Q95250: How to Recycle Deleted Records in a Multiuser Environment

{% raw %}

	Article: Q95250
	Product(s): Microsoft FoxPro
	Version(s): 1.02 2.00 2.10 2.50 2.50a | 2.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 1.02, 2.0, 2.5, 2.5a 
	- Microsoft FoxBASE+ for MS-DOS, version 2.1 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	- Microsoft FoxBASE+ for Macintosh, version 2.1 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The DELETE command does not physically remove a record from the database file.
	Instead, it places a flag on the record indicating that the record has been
	deleted. The record can be retrieved by issuing the RECALL command.
	
	The PACK command physically removes deleted records from the file. After the PACK
	command has been issued, deleted records cannot be recalled. Using PACK requires
	exclusive use of the file.
	
	In a multiuser environment, it may be difficult to obtain exclusive use of the
	file for packing. If the file isn't packed, the amount of disk space required to
	store deleted records will continue to grow. To work around this problem, you
	can recycle deleted records by using the technique illustrated below.
	
	MORE INFORMATION
	================
	
	The following code snippets blank out all fields in the record when a record is
	deleted from the file. When an attempt is made to append a new record to the
	database, the program first checks to see if any blank deleted records are
	available. If a deleted record is available, the program uses the record to
	store the new data. If a deleted record is not available, the program appends a
	blank record.
	
	This code snippet deletes a record in FoxBASE+:
	
	     DELETE
	     *   Insert code here to replace each field with a blank character,
	     *   date or numeric value.
	
	This code snippet deletes a record in FoxPro:
	
	     IF LOCK()
	        SCATTER MEMVAR MEMO BLANK   *  See note below on memo fields.
	        GATHER MEMVAR MEMO          *  MEMO keyword available only
	        DELETE                      *  in FoxPro 2.0.
	     ENDIF
	
	The following line must be added to a FoxBASE+ or FoxPro 1.02 program for
	databases that contain memo fields:
	
	     REPLACE memofield WITH ""  && memofield is the memo field name
	
	This code snippet either recycles a deleted record or appends a new blank record
	in FoxBASE+ and FoxPro:
	
	     LOCATE FOR DELETED()
	     IF EOF()
	        APPEND BLANK
	     ELSE
	        RECALL
	     ENDIF
	
	Unused space in memo files will not be recycled. To recover unused space in memo
	files, you must issue a PACK (FoxBASE+) or PACK MEMO (FoxPro) command.
	
	REFERENCES
	==========
	
	Microsoft FoxPro "Commands & Functions," pages 134, 315, and 580
	
	Additional query words: VFoxWin FoxMac FoxDos FoxWin 2.x multiuser
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbFoxBASE210Mac kbFoxBASE210DOS kbFoxBASESearch kbVFP300
	Version           : 1.02 2.00 2.10 2.50 2.50a | 2.50
	
	=============================================================================
	

{% endraw %}
