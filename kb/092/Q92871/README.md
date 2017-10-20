---
layout: page
title: "Q92871: File Manager: Can't Redirect Local Drives; Use Net Redirector"
permalink: /kb/092/Q92871/
---

## Q92871: File Manager: Can't Redirect Local Drives; Use Net Redirector

{% raw %}

	Article: Q92871
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	You cannot redirect or substitute a network drive for a local drive in
	File Manager. If you need this functionality, use the MS-DOS-based
	real-mode redirector, Net.
	
	In general, redirecting local drives is not recommended. However, in
	some cases, you may need to do this in order to work with a program
	that is hard-coded for a specific drive. For example, some
	installation programs allow you to install from the drive A only. You
	can redirect drive A to a network drive with Net and then use the
	installation program successfully.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
