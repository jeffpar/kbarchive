---
layout: page
title: "Q155888: PRB: Binary Files with Keyword Expansion Corrupted"
permalink: /kb/155/Q155888/
---

## Q155888: PRB: Binary Files with Keyword Expansion Corrupted

{% raw %}

	Article: Q155888
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0a 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0a 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If Keyword Expansion is enabled for binary files, and a binary file containing a
	SourceSafe Keyword is checked in, that file will be corrupted.
	
	RESOLUTION
	==========
	
	1. Use Keyword Expansion in Binary Files.
	
	Use two colons in the keyword, for example:
	
	$Revision:: $
	
	WARNING: This method works for all the available keywords, with the exception of
	the $History:: $ and $Log:: $ keywords. These two keywords cannot be used in
	binary files.
	
	Make sure you leave enough space between the second colon and the dollar sign for
	the revision number.
	
	When you use one colon, SourceSafe puts its information between the colon and the
	dollar sign. Depending on how long the information is, and how many spaces you
	had, this generally makes the whole string either shorter or longer than it was
	at first. In a text file, this is not a problem, but it does corrupt a binary
	file.
	
	When you use two colons, that tells SourceSafe to keep the string length the
	same. In other words, SourceSafe knows to keep the exact same number of
	characters between the second colon and the dollar sign. SourceSafe pads with
	extra spaces, or truncates the information, as necessary, in order to keep
	things the same, so the binary file is not corrupted.
	
	Available keywords for binary files are as follows:
	
	  $Archive:: $
	  $Author:: $
	  $Date:: $
	  $Header:: $
	  $Logfile:: $
	  $Modtime:: $
	  $Revision:: $
	  $Workfile:: $
	  $JustDate:: $
	  $NoKeywords:: $
	
	1. Disable keyword expansion in binary files using one of the following
	  methods:
	
	   - Add the case-sensitive keyword $NoKeywords: $ before adding any other
	     keywords. This prevents Visual SourceSafe from expanding subsequent
	     keywords.
	
	   - Remove *.xls from the "Expand keywords in files of type" textbox.
	
	   - Add !*.xls to the "Expand keywords in files of type" textbox.
	
	NOTE: The preceding bullets are equivalent to editing the Keyword_Masks variable
	manually in the SRCSAFE.INI file. Filetype *.xls is used in step 2 as an
	example.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In the Visual SourceSafe Administrator, go to the Tools menu and click
	  Options, and then click the General tab in the Options dialog box. Add *.xls
	  in the "Expand keywords in files of type" textbox. Click OK and close the
	  Visual SourceSafe Administrator.
	
	  NOTE: If the Visual SourceSafe client is open while changes are being made to
	  the Visual SourceSafe Administrator, the client must be restarted in order
	  for the changes to take effect.
	
	2. Open a new Workbook in Excel and enter "Hello World" in Cell A1. Save and
	  close the file.
	
	3. Add the file to a Visual SourceSafe project and then check out the file.
	
	4. Open the file in Excel. Enter "$History: $" in Cell A2.
	
	5. Save and close the file. Check it into Visual SourceSafe.
	
	RESULT: If the "Copy keyword-expanded files into working directory" check box is
	selected (it is located on the Local Files tab in the Options dialog box) in the
	Visual SourceSafe client, Excel hangs immediately when you view the file. If the
	check box is not selected, Excel will hang the next time that file is opened by
	checking it out and opening it, or by performing a Get on the file.
	
	REFERENCES
	==========
	
	For more information on Keyword Expansion, see Chapter 5 in the Visual
	SourceSafe User's Guide.
	
	Additional query words: DLL EXE .DOC
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
