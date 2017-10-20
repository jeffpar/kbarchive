---
layout: page
title: "Q97417: CHKDSK Err Msg Without Option to Correct: X Lost Cluster(s)"
permalink: /kb/097/Q97417/
---

## Q97417: CHKDSK Err Msg Without Option to Correct: X Lost Cluster(s)

{% raw %}

	Article: Q97417
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message if you run CHKDSK /F or DBLSPACE
	/CHKDSK /F on a DoubleSpace drive:
	
	  0 crosslinked
	  1 lost cluster
	
	However, CHKDSK does not prompt you with the Yes or No options to allow you to
	convert the lost cluster to a file.
	
	WORKAROUND
	==========
	
	To work around this problem, resize the DoubleSpace drive. To resize the
	DoubleSpace drive, run DoubleSpace and choose Change Size from the Drive menu.
	
	
	Additional query words: 6.00 double space compressed volume file CVF dblspace.exe err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	

{% endraw %}
