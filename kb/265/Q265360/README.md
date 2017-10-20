---
layout: page
title: "Q265360: Using the Command Line to Edit Multiple Subdirectory Permissions"
permalink: /kb/265/Q265360/
---

## Q265360: Using the Command Line to Edit Multiple Subdirectory Permissions

{% raw %}

	Article: Q265360
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to use the command line utilities Subinacl.exe and
	Xcacls.exe to edit the directory permissions without replacing the existing
	permissions. The utilities Subinacl.exe and Xcacls.exe are included in the
	Windows NT Server 4.0 Resource Kit Supplement Three.
	
	MORE INFORMATION
	================
	
	To change the permissions of multiple subdirectories from the command line or
	from a batch file, use the Subinacl.exe utility to change ownership of the
	subdirectories and then use the Xcacls.exe utility to change the directory
	permissions.
	
	To change ownership of a directory, you can use the Subinacl.exe utility with the
	following syntax:
	
	"subinacl /object_type object_name /action=parameter" (without the quotation
	marks)
	
	The following example illustrates how to use the Subinacl.exe utility to change
	ownership of a subdirectory:
	
	"subinacl /subdirectories c:\winnt\profiles\*.* /setowner=administrator" (without
	the quotation marks)
	
	In this example, the parameters object_type object_name are specified by
	/subdirectories (the object type) and c:\winnt\profiles\*.* (the object name).
	Note that the command can modify multiple subdirectories (in this example, all
	subdirectories in the path c:\winnt\profiles). The action
	/setowner=administrator changes ownership of the specified subdirectories to the
	user account "administrator".
	
	After you have used the Subinacl.exe utility to change ownership of the
	subdirectories, you can use the Xcacls.exe utility to change permissions, using
	the following syntax:
	
	" xcacls filename /G user: permissions /E" (without the quotation marks)
	
	The following example illustrates how to use the Xcacls.exe utility to change
	permissions:
	
	"xcacls c:\winnt\profiles\*.* /G administrator:F /E" (without the quotation
	marks)
	
	In this example, the target subdirectories where permissions are modified are
	"c:\winnt\profiles\*.*". The "/G: administrator:F" option is being used to grant
	the user account "administrator" full control permissions to the target
	subdirectories. The "/E" option is used to edit the existing access control list
	instead of replacing the existing permissions.
	
	For additional information about the syntax and usage of the Subinacl.exe
	utility, type "subinacl /help" (without the quotation marks) at the command
	line.
	
	For additional information about the syntax and usage of the Xcacls.exe utility,
	refer to the Xcacls.doc file included in the Windows NT Server 4.0 Resource Kit
	Supplement Three.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
