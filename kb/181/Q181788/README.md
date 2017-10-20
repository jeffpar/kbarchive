---
layout: page
title: "Q181788: WD97: Using the Open Statement in Word VBA"
permalink: /kb/181/Q181788/
---

## Q181788: WD97: Using the Open Statement in Word VBA

{% raw %}

	Article: Q181788
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbmacroexample word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The Open statement is part of the Microsoft Visual Basic for Applications
	language. This command allows you to open a data file for reading, modifying, or
	adding to the file.
	
	NOTE: The Open statement does not open the file into the workspace, it merely
	opens the file for manipulation by your macro.
	
	NOTE: The Open statement should not be used to open a program's own file types.
	For example, do not use Open to open a Word document, a Microsoft Excel
	spreadsheet, or a Microsoft Access database. Doing so will cause loss of file
	integrity and file corruption.
	
	MORE INFORMATION
	================
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The correct syntax for the Open statement is:
	
	     Open pathname For mode [access] [lock] As [#]filenumber [Len=reclength]
	
	The Open statement syntax has the following parts.
	
	Part            Description
	---------------------------
	
	pathname        Required. String expression that specifies a file name may
	               include directory or folder, and drive.
	
	   mode        Required. Keyword specifying the file mode: Append, Binary,
	               Input, Output, or Random. If unspecified, the file is
	               opened for Random access.
	
	 access        Optional. Keyword specifying the operations permitted on
	               the open file: Read, Write, or Read Write.
	
	   lock        Optional. Keyword specifying the operations permitted on
	               the open file by other processes: Shared, Lock Read, Lock
	               Write, and Lock Read Write.
	
	filenumber      Required. A valid file number in the range 1 to 511,
	               inclusive. Use the FreeFile function to obtain the next
	               available file number.
	
	reclength       Optional. Number less than or equal to 32,767 (bytes). For
	               files opened for random access, this value is the record
	               length. For sequential files, this value is the number of
	               characters buffered.
	
	Statement Example
	-----------------
	
	     Sub OpenExample()
	
	        Dim sFirst, sLast, sAddress, sCity, sState, sZip As String
	
	        ' CREATE DATA FILE
	        ' Open file for input.
	        Open "Datafile.txt" For Output As #1
	
	        ' Write data to file.
	        Write #1, "John", "Doe", "An Address", "A City", "A State", "A Zip"
	
	        ' Close File.
	        Close #1
	
	        ' RETRIEVE DATA FROM FILE
	        ' Open file for input.
	        Open "Datafile.txt" For Input As #1
	
	        ' Loop until the end of file is reached.
	        Do While Not EOF(1)
	
	           ' Read data into variables.
	           Input #1, sFirst,sLast,sAddress,sCity,sState,sZip
	
	           ' Print data to Debug window.
	           Debug.Print sFirst,sLast,sAddress,sCity,sState,sZip
	
	        Loop
	
	        ' Close file.
	        Close #1
	
	     End Sub
	
	This macro creates or opens a file called Datafile.txt and puts the comma and
	quotation mark delimited data into the file. The data can then later be
	retrieved using the Input # Statement.
	
	REFERENCES
	==========
	
	For more information about writing data to files, click the Office Assistant
	while in the Visual Basic Editor, type "Writing Data to Files" (without the
	quotation marks), click Search, and then click to view "Writing Data to Files."
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon
	
	======================================================================
	Keywords          : kbdta kbdtacode kbmacroexample word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
