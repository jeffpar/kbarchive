---
layout: page
title: "Q102895: How Increase &amp; Decrease Size of Compound Structural Index"
permalink: /kb/102/Q102895/
---

## Q102895: How Increase &amp; Decrease Size of Compound Structural Index

{% raw %}

	Article: Q102895
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To increase the size of a compound structural index file, repeat the INDEX ON
	command. To reduce the size of the .CDX file, issue the REINDEX command, or
	delete the tag and issue the INDEX ON command.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In the Command window, issue the following commands:
	
	        USE D:\FOXPROW\TUTORIAL\CUSTOMER EXCLUSIVE
	        **The command above assumes FoxPro version 2.5 for Windows
	        COPY TO TEST
	        USE TEST EXCLUSIVE
	        INDEX ON CNO TAG CNO
	        CLOSE ALL
	        FILER
	
	2. Find TEST.CDX in Filer and note its size. Close Filer.
	
	3. In the Command window, issue the following commands:
	
	        USE TEST EXCLUSIVE
	        INDEX ON CNO TAG CNO
	         **A warning may appear about overwriting tag cno. It will be
	         **necessary to overwrite the tag.
	        CLOSE ALL
	        FILER
	
	4. Find TEST.CDX in Filer and note the increase in size. Close Filer.
	
	5. In the Command window, issue the following commands:
	
	        USE TEST EXCLUSIVE
	        REINDEX
	        CLOSE ALL
	        FILER
	
	6. Find TEST.CDX in Filer and note that its size has been reduced.
	
	Additional query words: VFoxWin FoxDos FoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	

{% endraw %}
