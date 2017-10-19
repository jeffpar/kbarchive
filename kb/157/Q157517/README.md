---
layout: page
title: "Q157517: BUG: Uninstalling DAO 3.0 SDK Prevents Help Files from Working"
permalink: /kb/157/Q157517/
---

## Q157517: BUG: Uninstalling DAO 3.0 SDK Prevents Help Files from Working

	Article: Q157517
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2; WINDOWS:4.2
	Operating System(s): 
	Keyword(s): kbDAOsearch
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1, 4.2 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Uninstalling the DAO SDK that ships with Visual C++ 4.X will result in the
	incorrect deletion of registry entries used by Microsoft products for the
	location of Help files. Non-Microsoft products, or Microsoft products not using
	the specific registry path given below are unaffected.
	
	CAUSE
	=====
	
	The DAO SDK uninstall incorrectly destroys the following registry entry:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\Help
	
	This is where many Microsoft products store information giving the path of their
	Help files. When the DAO SDK uninstall removes the entries in this registry
	path, the Online Help for any Microsoft product using this path will no longer
	function. The only way to recover the lost entries is to re-install the
	Microsoft products. If possible, perform partial re-install just on the Help
	components for each product.
	
	RESOLUTION
	==========
	
	Don't uninstall the DAO SDK. This problem is not an issue for the
	redistributable components.
	
	If you wish to prevent accidental uninstall, you can edit the registry to remove
	the DAO SDK from the uninstall list. Delete the following registry entry:
	
	  My Computer\ 
	     HKEY_LOCAL_MACHINE\ 
	        SOFTWARE\ 
	           Microsoft\ 
	              Windows\ 
	                 CurrentVersion\ 
	                    Uninstall\ 
	                       Data Access Objects (DAO)
	
	This will prevent Windows from allowing the uninstall of the DAO components.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbDAOsearch 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC32bitSearch kbExchange550SP5
	Version           : :4.0,4.1,4.2; WINDOWS:4.2
	Issue type        : kbbug
	
	=============================================================================
	
