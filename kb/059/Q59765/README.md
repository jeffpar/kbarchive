---
layout: page
title: "Q59765: ISAMCVT.EXE Fails to Convert db/LIB File, Try Packing First"
permalink: /kb/059/Q59765/
---

## Q59765: ISAMCVT.EXE Fails to Convert db/LIB File, Try Packing First

	Article: Q59765
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic for MS-DOS 1.0 
	- Microsoft Basic Professional Development System for MS-DOS, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A customer reported that when converting db/LIB (dBASE) files to Microsoft
	Visual Basic for MS-DOS, version 1.0 or Microsoft Basic Professional Development
	System (PDS) for MS-DOS, version 7.0 ISAM files with the ISAMCVT.EXE utility,
	the ISAM files are not created correctly if the db/LIB file contains logically
	deleted records. For the process to be successful, the logically deleted records
	must be physically removed from the file. According to the customer, db/LIB
	provides a packing feature to do this.
	
	MORE INFORMATION
	================
	
	The utility ISAMCVT.EXE is used to convert other types of indexed files to
	Basic's ISAM format. One of these types is db/LIB. A customer reported that if
	the db/LIB file to be converted has records in it that are marked for deletion,
	ISAMCVT.EXE either produces a corrupted ISAM file or does not produce one at
	all.
	
	Packing an indexed file is a method of physically removing records that are
	marked for deletion. The utility ISAMPACK.EXE is used to perform this function
	on Basic's ISAM files. According to the customer, using a similar utility on a
	db/LIB file that has records marked for deletion allows ISAMCVT.EXE to
	successfully convert the file to the ISAM format.
	
	Microsoft has not verified this information, but it is recommended to pack all
	data files before they are converted to Microsoft Visual Basic for MS-DOS or
	Microsoft Basic PDS ISAM with the ISAMCVT.EXE utility.
	
	Additional query words: VBmsdos BasicCom 1.00 7.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbBASICSearch kbZNotKeyword3 kbBASICPDS700DOS kbVB100DOS
	Version           : :1.0,7.0
	
	=============================================================================
	
