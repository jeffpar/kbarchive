---
layout: page
title: "Q139672: FIX: Initialization Var Shadow_SetTime Set to Invalid Value"
permalink: /kb/139/Q139672/
---

## Q139672: FIX: Initialization Var Shadow_SetTime Set to Invalid Value

{% raw %}

	Article: Q139672
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbSSafe400bug kbSSafe500fix
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The error "Initialization variable Shadow_SetTime set to invalid value" occurs
	when a user checks a file in to Visual SourceSafe or adds a file to Visual
	SourceSafe.
	
	CAUSE
	=====
	
	The Visual SourceSafe Administrator gives administrators the ability to shadow
	projects. The shadow option has several flags that tell SourceSafe how to
	operate on the files. One of the options is the date/time flag known as the
	Shadow_SetTime .ini file variable. The valid options in the Administrator are
	Current, Modification, or Update. The valid .ini file settings are Current, Mod,
	and Update respectively. The Visual SourceSafe Administrator improperly wrote
	the modification setting as:
	
	  Shadow_SetTime = Modification
	
	RESOLUTION
	==========
	
	The administrator should manually modify the Srcsafe.ini file. Modify the
	Shadow_SetTime setting as follows:
	
	  Shadow_SetTime = Mod
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem has been fixed in Visual SourceSafe 5.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400bug kbSSafe500fix 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe500
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
