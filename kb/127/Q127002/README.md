---
layout: page
title: "Q127002: PC Ext: Err Msg: A Critical Error Has Occurred..."
permalink: /kb/127/Q127002/
---

## Q127002: PC Ext: Err Msg: A Critical Error Has Occurred...

{% raw %}

	Article: Q127002
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0a,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0a, 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run EXTERNAL.EXE, the following error may be displayed and placed in
	the SESSION.LOG (if logging is enabled):
	
	  12-30-94 09:47 A Critical error has occurred M:KEY\xxxxxxxx.KEY
	
	where M: can be any drive letter that a PO is mapped to, and xxxxxxxx.KEY can be
	any address for an external postoffice.
	
	CAUSE
	=====
	
	NOTE: Critical errors may also be due to hardware or network problems. For
	further information, query on "error code =" and "device =".
	
	Hidden, locked, or corrupt .KEY files may cause the above error. Check the screen
	or the SESSION.LOG for lines matching the above description. It may be necessary
	to activate the /LogVerbose (-v) and /LogSession (-l) options to accomplish
	this.
	
	
	RESOLUTION
	==========
	
	Make sure the specified files are not locked, hidden, or corrupt. If the file is
	corrupt, either restore the file from backup or reset the <hex- id>.KEY
	and <hex-id>.MBG files. This can be done with one of the following
	procedures:
	
	Procedure 1
	-----------
	
	  To RESET the <hex-id>.KEY to 560 bytes, type:
	  " DEBUG <hex-id>.KEY" (without the quotation marks) <Enter>
	  At the "-" type "F100,32F,0" (without the quotation marks) <Enter>
	  At the "-" type "RCX" (without the quotation marks) <Enter>
	  The following will then be displayed:
	
	  CX 1230
	  :
	
	  At the ":" type "230" (without the quotation marks) <Enter> (this resets
	  the file to 560 bytes)
	  At the "-" type "W" (without the quotation marks) <Enter> (you should
	  see the message "Writing 00230 bytes")
	  At the "-" type "Q" (without the quotation marks) <Enter> (to quit
	  DEBUG)
	
	The filesize should be 560 bytes.
	
	To RESET the <hex-id>.MBG to 0 bytes, type:
	" TYPE NUL > <hex-id>.MBG" (without the quotation marks)
	
	The correct filesize should be 0 bytes.
	
	Procedure 2
	-----------
	
	1. Run Admin, Local-Admin, Create to create a test user.
	
	2. Run LISTUSER.EXE with the -f option against the PO to determine the hex-id of
	  the test user.
	
	3. Copy the test user's <hex-id>.KEY and <hex-id>.MBG to the corrupt
	  <hex-id>.KEY and <hex-id>.MBG.
	
	4. Run Admin, Local-Admin, Delete to delete the test user.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q117427 MS-DOS External 3.2 and RebootOnCE
	
	  Q116434 EXTERNAL.INI Equivalents to -Qx Command-Line Options
	
	Additional query words: 3.00a 3.20 3.20a external critical error key
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300a
	Version           : WINDOWS:3.0a,3.2,3.2a
	
	=============================================================================
	

{% endraw %}
