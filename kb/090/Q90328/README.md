---
layout: page
title: "Q90328: Conventional Memory Change with WFWG and DYNAMIC=YES Setting"
permalink: /kb/090/Q90328/
---

## Q90328: Conventional Memory Change with WFWG and DYNAMIC=YES Setting

{% raw %}

	Article: Q90328
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you install Windows for Workgroups on a computer running Microsoft LAN
	Manager version 2.1, you may notice a change in available conventional memory.
	
	MORE INFORMATION
	================
	
	This may be caused by having DYNAMIC=YES in the [PROTMAN] section of the
	PROTOCOL.INI file. The DYNAMIC=YES command causes PROTMAN.DOS to allocate memory
	to facilitate demand protocol architecture (DPA). Because Windows for Workgroups
	does not provide DPA functionality, this memory is wasted.
	
	To recover the memory used for DPA, change DYNAMIC=NO, or remove the line all
	together.
	
	DPA was first implemented with LAN Manager 2.1, and PROTMAN 2.0. DPA allows for
	the dynamic loading/binding and unloading/unbinding of protocols under MS-DOS.
	
	KBCategory: kbnetwork
	KBSubcategory: wfw winmem wfwg
	
	Additional query words: 3.10 3.11 PROTMAN PROTMAN.DOS SPARTA lanman
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
