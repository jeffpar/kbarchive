---
layout: page
title: "Q145718: PC Gen: Err Msg: Error Copying... when Running MMFCLEAN.EXE"
permalink: /kb/145/Q145718/
---

## Q145718: PC Gen: Err Msg: Error Copying... when Running MMFCLEAN.EXE

	Article: Q145718
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the MMFClean utility, MMFCLEAN.EXE, is used against a mail message file
	(.MMF) with a hexadecimal identifier (hex-id) of more than three significant
	digits, MMFCLEAN.EXE will not affect the file.
	
	You may also get an error message in the MMFCLEAN.LOG file:
	
	  Error copying <drive>:\MAILDATA\MMF\<hex-id>.MMF
	
	where "drive" is the drive the postoffice is mapped to, and the "hex-id" is for
	the .MMF file that could not be cleaned.
	
	CAUSE
	=====
	
	MMFCLEAN.EXE will only effectively operate on the three digits left of the
	decimal point. For example, the MMFCLEAN.LOG indicates the following error when
	executed against MMF filename 00001234.MMF:
	
	  User1 00000234
	  Error copying M:\MMF\00000234.MMF to M:\MMF\~~MMFCCN.TMP
	
	RESOLUTION
	==========
	
	This problem has been resolved in version 3.5.4096 of MMFCLEAN.EXE. Please
	contact Microsoft Product Support Services in order to obtain the latest
	revision of MMFCLEAN.EXE.
	
	Additional query words: 3.50 mmfclean 3
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN350
	Version           : WINDOWS:3.5
	
	=============================================================================
	
