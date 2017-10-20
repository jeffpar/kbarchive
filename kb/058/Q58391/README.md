---
layout: page
title: "Q58391: Cancel Button Must Be Chosen Three Times in Error Dialog"
permalink: /kb/058/Q58391/
---

## Q58391: Cancel Button Must Be Chosen Three Times in Error Dialog

{% raw %}

	Article: Q58391
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Windows 3.0, certain DOS-related system errors (such as attempts to
	write to a full disk, an unformatted floppy, or a write- protected disk) cause
	Windows to display an error similar to the following
	
	  System Error: Write protected disk
	
	You then have to choose Cancel three times to exit the error dialog box.
	
	CAUSE
	=====
	
	This is a feature of MS-DOS. Even though Windows recognizes the failure in one
	pass, MS-DOS insists on performing two more retries. The same behavior can be
	observed at the MS-DOS prompt outside of Windows.
	
	Additional query words: 3.00 win30 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
