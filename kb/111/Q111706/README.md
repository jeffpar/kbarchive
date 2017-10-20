---
layout: page
title: "Q111706: REPLACE Error Message: &quot;Path Not Found...&quot;"
permalink: /kb/111/Q111706/
---

## Q111706: REPLACE Error Message: &quot;Path Not Found...&quot;

{% raw %}

	Article: Q111706
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The REPLACE command displays a "Path not found" error and does not update the
	files in the destination directory.
	
	CAUSE
	=====
	
	This error can occur if the destination directory name has an extension and you
	use "." or ".." path notation in the REPLACE command line. For example, if the
	destination directory is C:\TEST.DIR and you type the following command from the
	C:\TEST.DIR> prompt
	
	  " replace c:\dos\*.com ..\test.dir" (without the quotation marks)
	
	the result is:
	
	  Path not found - C:\TESTIR\
	  No files replaced
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS versions 5.0, 5.0a, 6.0,
	6.2, and 6.21. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	WORKAROUND
	==========
	
	To work around this problem, specify the complete path on the REPLACE command
	line instead of using the "." or ".." notation. For example:
	
	  replace c:\dos\*.com c:\test.dir
	
	Additional query words: 6.22 6.20 errmsg err message pathname
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
