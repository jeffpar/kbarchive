---
layout: page
title: "Q34760: Missing &lt;CR&gt; after Batch Label Causes Repeat of Last Command"
permalink: /kb/034/Q34760/
---

## Q34760: Missing &lt;CR&gt; after Batch Label Causes Repeat of Last Command

	Article: Q34760
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.3,3.3a,4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.3, 3.3a, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the last line in a batch file is a label and there is no carriage return
	character after the label, the command immediately preceding the label will be
	executed twice.
	
	The workaround for this problem is to include a carriage return at the end of a
	label.
	
	Microsoft has confirmed this to be a problem in MS-DOS versions 3.3, 3.30a, 4.0,
	and 5.0. This problem was corrected in MS-DOS version 6.0.
	
	MORE INFORMATION
	================
	
	The following batch file
	
	echo hello <cr>
	:label <cr>
	<eof>
	
	will produce the following output:
	
	C>echo hello
	hello
	
	C>
	C>
	
	If the carriage return after the label is omitted, as follows
	
	echo hello <cr>
	:label <eof>
	
	the file will produce the following output:
	
	C>echo hello
	hello
	hello
	
	C>
	C>
	
	Additional query words: 3.30 3.30a 4.00 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS330a kbMSDOS500 kbMSDOS330
	Version           : MS-DOS:3.3,3.3a,4.0,5.0
	
	=============================================================================
	
