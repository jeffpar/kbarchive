---
layout: page
title: "Q97145: PC WRmt: System Selector Does Not Validate Its Results"
permalink: /kb/097/Q97145/
---

## Q97145: PC WRmt: System Selector Does Not Validate Its Results

{% raw %}

	Article: Q97145
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Mail System Selector provided with Microsoft Mail Remote version
	3.2 for Windows does not delete extended command entries if you interrupt and
	restart the application.
	
	CAUSE
	=====
	
	The Selector can report an incorrect driver as the current driver. When Mail
	starts, various error messages appear that depend on the previous driver and on
	the new driver.
	
	RESOLUTION
	==========
	
	If you have difficulty starting Mail Remote for Windows immediately after you
	change Mail drivers, run the Selector program. Select the last driver you chose
	more than once. This procedure resolves the problem for some drivers.
	
	Running the Selector program a second time and choosing the driver multiple times
	appears to correct the problem, even though remote extended commands remain in
	the MSMAIL.INI file.
	
	Because Mail supports various drivers, no single method is available to resolve
	this problem. However, for certain drivers, using the Selector utility to choose
	the new driver repeatedly (without choosing an alternate driver between choices)
	can resolve some problems.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
