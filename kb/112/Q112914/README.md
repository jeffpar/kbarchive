---
layout: page
title: "Q112914: VB 3: PC WFW: Prompt for Network and Postoffice Name"
permalink: kb/112/Q112914/
---

## Q112914: VB 3: PC WFW: Prompt for Network and Postoffice Name

	Article: Q112914
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail and Schedule+ Extensions for Microsoft Windows for Workgroups, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The "Upgrade Guide" for version 3.0 of Microsoft Mail and Schedule+ Extensions
	for Microsoft Windows for Workgroups, does not document the prompt that asks for
	the Network name and Postoffice name. This was added to the program after the
	guide went to print. The prompt is described in the README.TXT file that come
	with the product.
	
	MORE INFORMATION
	================
	
	The following is a exerpt from the README.TXT file:
	
	B.1. Running EXTEND.EXE
	-----------------------
	
	This program will now ask you for a postoffice and network name. For more
	information, see the Microsoft Mail Administrator's Guide.
	
	B.8. Changing Postoffice and Network Names
	------------------------------------------
	
	When you create a Workgroup Postoffice using Windows for Workgroups, it uses the
	values you assign to your Computer Name and Workgroup for your Postoffice name
	and Network name. These values are specified in the Network Control Panel. It is
	not recommended that you change these names as part of the upgrade procedure, as
	this will invalidate all mail addresses using the old names. However, you can
	make this change using the Password command in ADMIN.EXE.
	
	Some characters that are valid in the Computer Name and Workgroup boxes are not
	valid for the Postoffice and Network name fields. If you use an invalid
	character, you will be prompted to enter a new name for the corresponding field.
	Note that in this case, your mail addresses will be invalidated. This set of
	characters is:
	
	  ~ ` ! @ # $ % ^ & * ( ) _ - + = { [ } ] | \ : ; " ' < , > . ? /
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbScheduleSearch kbWFWSearch kbZNotKeyword3
	Version           : :3.0
	
	=============================================================================
	
