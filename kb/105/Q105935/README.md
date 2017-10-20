---
layout: page
title: "Q105935: FIX: CommitQQ Does Not Flush Buffers"
permalink: /kb/105/Q105935/
---

## Q105935: FIX: CommitQQ Does Not Flush Buffers

{% raw %}

	Article: Q105935
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Calling CommitQQ after writing data will not force the data to be written to the
	physical device. Any data in the buffer that was not already written to the
	device will remain in the buffer.
	
	RESOLUTION
	==========
	
	The only way to flush the write buffer is to close the I/O unit and then re-open
	it. For sequential files the status should be "APPEND" when re-opening.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was fixed in Fortran PowerStation 32
	for Windows NT, version 1.0.
	
	MORE INFORMATION
	================
	
	The problem can be demonstrated as follows:
	
	1. Build the sample program TCOMMIT.FOR in the \F32\SAMPLES\RUNTIME directory,
	  and run the executable from Windows.
	
	2. Type in some text when asked. When the program displays "If you boot now,
	  your text will be saved," go to File Manager.
	
	3. In File Manager, display the directory \F32\SAMPLES\RUNTIME with full file
	  details.
	
	4. Press the <F5> key to refresh (ensuring that the latest information
	  about the files is being displayed).
	
	5. Check the size of 'COMMITQQ.TST.'
	
	6. The size of 'COMMITQQ.TST' will still be zero indicating that the write
	  buffers were not flushed despite calling the CommitQQ function. Go back to
	  the TCOMMIT program, and press the <Enter> key twice to exit.
	
	7. Repeat steps 3, 4, and 5. The size of 'COMMITQQ.TST' will no longer be zero.
	  This indicates that the write buffers were flushed only when the file unit
	  was closed on program termination.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
