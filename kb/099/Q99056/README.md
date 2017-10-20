---
layout: page
title: "Q99056: PC Forms: Electronic Forms Designer Cache"
permalink: /kb/099/Q99056/
---

## Q99056: PC Forms: Electronic Forms Designer Cache

{% raw %}

	Article: Q99056
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 1.0 of Microsoft Electronic Forms Designer includes an E-form
	performance cache. The Electronic Forms Designer Setup program disables the
	E-form performance cache by setting the "Maximum" entry to zero in the
	MSMAIL.INI file in your Windows directory as shown below:
	
	  [E-Form Cache]
	  Maximum=0
	
	This entry prevents E-forms from being cached as you are developing and testing
	them, ensuring that you are running the current version of the E-form you're
	working on, rather than a cached instance of a previous version. After finishing
	development of an E-form, you can test the performance that users will
	experience by turning E-form caching back on. Refer to the "Developer's Guide"
	for information on configuring the E-form performance cache.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.2
	
	=============================================================================
	

{% endraw %}
