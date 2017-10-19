---
layout: page
title: "Q149556: Mifwin.exe Produces GPF with Large Number in Number Field"
permalink: /kb/149/Q149556/
---

## Q149556: Mifwin.exe Produces GPF with Large Number in Number Field

	Article: Q149556
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbusage kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you fill out a MIF form with the MIF Entry program, and you enter a number
	greater than 32767 or smaller than -32767 in a number field, the following
	General Protection Fault will occur when the file is saved or reopened:
	
	  MIFWIN caused a General Protection Fault in module MIFWIN.EXE at 000x:xxxx.
	
	
	The MIF entry data will not be processed into the Systems Management Server
	database.
	
	This problem affects Windows 3.1, WFW 3.11, Windows 95, and Windows NT clients.
	
	CAUSE
	=====
	
	This is a limitation of the MIF Entry program, Mifwin.exe.
	
	RESOLUTION
	==========
	
	In order to keep the client from getting the error each time Mifwin.exe is
	started, delete the matching .sev and .mif files that correspond to the custom
	.xnf file that was distributed to the clients. The .sev and .mif files are
	located in the \MS\SMS\NOIDMIFS directory, while the .xnf file is located in the
	\MS\SMS\BIN directory.
	
	To avoid this problem, there's a step you can take when creating the MIF form
	(.xnf file): use a text field for data that could possibly exceed the 32767 to
	-32767 range.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in System Management Server
	versions 1.1 and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms mifwin gpf error
	
	======================================================================
	Keywords          : kbusage kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	Issue type        : kbbug
	
	=============================================================================
	
