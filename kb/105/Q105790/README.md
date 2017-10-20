---
layout: page
title: "Q105790: MS-DOS 6.2 Step-Up May Leave Temporary Files If Interrupted"
permalink: /kb/105/Q105790/
---

## Q105790: MS-DOS 6.2 Step-Up May Leave Temporary Files If Interrupted

{% raw %}

	Article: Q105790
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If MS-DOS 6.2 Step-Up is interrupted while it is patching files, it may leave
	zero-byte files in the root directory. Also, patch files (*.??#) may be left in
	the directory containing your MS-DOS 6.0 files.
	
	CAUSE
	=====
	
	The patch process used to update your existing MS-DOS files creates and uses
	temporary files. These files are created in the root directory and are deleted
	by Setup when it exits in a normal no-error condition. Whenever Setup is aborted
	abnormally (such as by a power failure), the temporary files are not deleted.
	
	RESOLUTION
	==========
	
	The zero-byte files left in your root directory (and the patch files in the
	directory containing your MS-DOS 6.0 files) can safely be deleted after you have
	successfully installed MS-DOS 6.2. The temporary files in the root directory
	typically have names including numbers such as 10 or 11.
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620
	Version           : MS-DOS:6.2
	
	=============================================================================
	

{% endraw %}
