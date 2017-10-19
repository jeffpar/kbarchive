---
layout: page
title: "Q108633: BUG: &quot;Invalid File Descriptor&quot; When Saving Read-Only Query"
permalink: /kb/108/Q108633/
---

## Q108633: BUG: &quot;Invalid File Descriptor&quot; When Saving Read-Only Query

	Article: Q108633
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.5a,2.5b,2.6,3.0,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500aBUG kbvfp250bug kbvfp250aBUG
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 5.0a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Saving a query that was given the Read-Only attribute with the MS-DOS ATTRIB
	command causes the errors "File Access Denied" and "Invalid File Descriptor." In
	versions before 5.0a, the machine is then in an unrecoverable loop.
	
	RESOLUTION
	==========
	
	Save the modified query to something other than the original name, or to another
	read-only .QPR file on the hard disk. You will then have two copies of the
	query, but will not receive the above errors.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	WARNING: Close all running applications and save your data before following this
	procedure. To close all open applications, press the CTRL+ESC keys to open the
	Windows Task List, and then close all the other applications you have running.
	Note that following the steps below may produce lost allocation units, lost
	clusters, or cross-linked files.
	
	1. Create a new query.
	
	2. Save the query and close it.
	
	3. At the MS-DOS prompt, type the following to make the query read-only: attrib
	  query.qpr +r
	
	4. Reopen the query and modify it.
	
	5. Try to save the query.
	
	Unless you are working in Visual FoxPro 5.0a for Windows, the machine will hang
	in an endless loop. To break the loop, press CTRL+ALT+DEL twice or turn your
	machine off and on.
	
	Additional query words: lock up hang halt kbvfp300 kbvfp500 kbvfp500a kbvfp250 kbvfp250a kbvfp250b kbvfp260
	
	======================================================================
	Keywords          : kbvfp kbvfp500aBUG kbvfp250bug kbvfp250aBUG 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300 kbVFP500 kbVFP500a
	Version           : WINDOWS:2.5,2.5a,2.5b,2.6,3.0,5.0,5.0a
	Issue type        : kbbug
	
	=============================================================================
	
