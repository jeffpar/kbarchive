---
layout: page
title: "Q99930: PC WRmt: Viewing and Usage of the ACCESS4.GLB File"
permalink: /kb/099/Q99930/
---

## Q99930: PC WRmt: Viewing and Usage of the ACCESS4.GLB File

{% raw %}

	Article: Q99930
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.2 of Microsoft Mail Remote for Windows introduces a new .GLB file,
	ACCESS4.GLB. This file is found in the WINDOWS\MSMAIL\MSRMT\GLB directory of
	your local hard drive.
	
	ACCESS4.GLB contains only one record (the same information contained in
	ACCESS3.GLB), with the exception that this information is for the current user
	ID only, not for other users on your postoffice. ACCESS4.GLB is required to sign
	in to Mail Remote for Windows.
	
	
	MORE INFORMATION
	================
	
	If ACCESS4.GLB is missing, you will receive the following error message during
	sign in:
	
	  STOP: Mail could not connect to your Mail server.
	
	To build a new ACCESS4.GLB file, copy the contents of the user data disk in the
	WINDOWS\MSMAIL\MSRMT\USERINFO directory before starting Mail Remote for Windows.
	ACCESS4.GLB will be built automatically during sign in.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
