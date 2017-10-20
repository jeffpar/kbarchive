---
layout: page
title: "Q110968: INFO: FoxPro Header Check to Determine if Table is Corrupt"
permalink: /kb/110/Q110968/
---

## Q110968: INFO: FoxPro Header Check to Determine if Table is Corrupt

{% raw %}

	Article: Q110968
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b; MS-DOS:2.5,2.5a,2.5b,2.6; WINDOWS:2.5,2.5a,2.5b,2.6,3.0
	Operating System(s): 
	Keyword(s): kbHWMAC kbvfp kbvfp300 kbDSupport
	Last Modified: 03-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for MS-DOS, versions 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When opening a database file (.DBF), FoxPro checks the header for the following
	five conditions that indicate corruption in a table:
	
	1. Is the record length invalid?
	
	   - Record length <= 1
	
	   - Record length > maximum record length
	
	2. Are there no fields?
	
	3. Are there more fields than permitted?
	
	4. Is the number of records < 0?
	
	5. Is the file size invalid?
	
	   - (Start-of-data + the # of records) * rec. length > file size
	
	NOTE: Start-of-data is where the first byte of the first record begins.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHWMAC kbvfp kbvfp300 kbDSupport 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : MACINTOSH:2.5b; MS-DOS:2.5,2.5a,2.5b,2.6; WINDOWS:2.5,2.5a,2.5b,2.6,3.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
