---
layout: page
title: "Q84748: PRB: LIB with /NOI Preserves Case for Object Module Names"
permalink: /kb/084/Q84748/
---

## Q84748: PRB: LIB with /NOI Preserves Case for Object Module Names

{% raw %}

	Article: Q84748
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:3.1,3.11,3.17,3.18,3.2,3.20.010,3.31,3.4; OS/2:3.1,3.11,3.17,3.18
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LIB for MS-DOS, versions 3.1, 3.11, 3.17, 3.18, 3.2, 3.20.010, 3.31, 3.4 
	- Microsoft LIB for OS/2, versions 3.1, 3.11, 3.17, 3.18 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Microsoft Library Manager (LIB) to extract or delete an object
	module in a library, the following error is generated even though the object
	module is in the library:
	
	  LIB: U2155: 'module' : module not in library; ignored
	
	Similarly, when attempting to replace an object module in a library, the
	following warnings are generated even though the object module is in the
	library:
	
	  LIB: U4155: 'module' : module not in library
	  LIB: U4151: 'symbol' : symbol defined in module 'module' redefinition ignored
	
	When attempting to add an object module to a library that already contains it,
	the following warning is generated:
	
	  LIB: U4151: 'symbol' : symbol defined in module 'module' redefinition ignored
	
	This warning may be followed by:
	
	  LIB: U4150: 'module' : module redefinition ignored
	
	Instead, just the U4150 warning should be generated.
	
	CAUSE
	=====
	
	The library may have been created using the /NOI option on the LIB command line.
	This switch turns on case sensitivity when comparing symbols. However, this also
	causes LIB to preserve case when comparing module names. This can result in
	unexpected U2155, U4155, U4151, and U4150 messages.
	
	For example, suppose TESTLIB.LIB does not previously exist and is created as in
	the following example: lib testlib.lib /NOI TEST.OBJ;
	
	Executing the following command to extract TEST.OBJ
	
	  lib testlib.lib *test.obj;
	
	will result in an incorrect U2155 error because LIB will not match test.obj with
	TEST.OBJ, because TESTLIB.LIB was created using the /NOI option.
	
	Executing commands to remove TEST.OBJ from the library or to both extract and
	remove TEST.OBJ, as shown below
	
	  lib testlib.lib -test.obj;
	  lib testlib.lib -*test.obj;
	
	will generate the same incorrect U2155 error because test.obj will not be
	considered as matching TEST.OBJ.
	
	Similarly, the command to replace TEST.OBJ in the library
	
	  lib testlib.lib -+test.obj;
	
	generates warnings U4155 and U4151 because LIB does not consider test.obj to be
	the same as TEST.OBJ. Thus the same module is added to the library a second time
	causing symbol redefinitions.
	
	Also, the command to add test.obj to the library TESTLIB.LIB, which already
	contains it as TEST.OBJ
	
	  lib testlib.lib +test.obj;
	
	causes the U4151 warning to be generated, possibly followed by the U4150 warning.
	Again, this is because test.obj is not considered to be the same module name as
	TEST.OBJ.
	
	RESOLUTION
	==========
	
	The following are workarounds in this situation.
	
	- Do not use /NOI when first creating a library. This causes module names to be
	  handled correctly.
	
	-or-
	
	- If a library is created with /NOI, use it to create a new library without the
	  /NOI option. The module names in the new library will not be case sensitive.
	  For example, if TESTLIB.LIB was originally created with /NOI, then
	
	  lib /IGN newlib.lib +testlib.lib;
	
	  will create a new library, NEWLIB.LIB, that will be a copy of TESTLIB.LIB but
	  that will have module names that are not case sensitive. The /IGN (ignore
	  case) option is the default and is included here only for emphasis.
	
	STATUS
	======
	
	This feature is under review.
	
	Additional query words: 3.10 3.20 LibIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbLibSearch kbZNotKeyword3 kbLibMan318DOS kbLibMan310DOS kbLibMan311DOS kbLibMan317DOS kbLibMan320DOS kbLibMan320010DOS kbLibMan331DOS kbLibMan340DOS kbLibMan311OS2 kbLibMan317OS2
	Version           : MS-DOS:3.1,3.11,3.17,3.18,3.2,3.20.010,3.31,3.4; OS/2:3.1,3.11,3.17,3.18
	
	=============================================================================
	

{% endraw %}
