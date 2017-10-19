---
layout: page
title: "Q117581: CONN: Mail Messages Rejected for &gt; 63 Character Subject: Line"
permalink: /kb/117/Q117581/
---

## Q117581: CONN: Mail Messages Rejected for &gt; 63 Character Subject: Line

	Article: Q117581
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection for PC and AppleTalk Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Version 3.2 of the Microsoft Mail Connection for PC and AppleTalk Networks
	rejects all mail messages sent from the PC to the Macintosh with subject lines
	longer than 63 characters and places them in the Badmail directory. Messages
	with subject lines 63 characters or shorter are delivered.
	
	RESOLUTION
	==========
	
	To deliver this message to its intended recipient, the Mail Administrator must:
	
	1. Modify the message with a text file editor.
	
	2. Reduce the Subject: line to 63 characters or less.
	
	3. Save the edited message with a MMFF#.MSG filename.
	
	  NOTE: The actual filename can be (MMFF1.MSG, MMFF2.MSG,..., MMFFx.MSG) where x
	  is the blocking factor.
	
	  Also make sure that the chosen filename is unique, so that it does not write
	  over another MMFF#.MSG file.
	
	4. Place the message in the PCTOMAC directory.
	
	MORE INFORMATION
	================
	
	The following sample MMFF#.MSG file would be rejected and placed in the Badmail
	directory:
	
	VERSION:3.00
	TO:CSI:MACNET/MACPO/T60009HO
	FROM:CSI:NET1/PO1/Admin
	DATE:1994-04-04
	TIME:13:10
	SUBJECT:01234567890123456789012345678901234567890123456789012345678901234
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailConn320
	Version           : :3.2
	
	=============================================================================
	
