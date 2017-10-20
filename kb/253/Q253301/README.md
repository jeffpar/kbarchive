---
layout: page
title: "Q253301: FIX: Regular Users Cannot Open VSS Database on W2K Computers"
permalink: /kb/253/Q253301/
---

## Q253301: FIX: Regular Users Cannot Open VSS Database on W2K Computers

{% raw %}

	Article: Q253301
	Product(s): Microsoft SourceSafe
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbsetup kbOSWin2000 kbSSafe600bug kbDSupport kbGrpDSSSafe kbVS600sp5fix
	Last Modified: 20-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you log in to Visual SourceSafe on a Microsoft Windows 2000-based computer,
	the following error message appears:
	
	  The database does not exist. Please select another.
	
	If you browse to the location of the srcsafe.ini file, select the file, and then
	click OK, you return to a blank list of available SourceSafe databases.
	
	CAUSE
	=====
	
	This behavior occurs because users who are not in the administrator's group have
	read-only permission to the registry key
	HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SourceSafe.
	
	RESOLUTION
	==========
	
	To resolve this problem, use Regedt32 to grant full control or special access to
	the registry key.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug has been fixed in Microsoft Visual Studio 6.0 Service Pack 5 (SP5).
	
	To download service pack 5, see the Visual Studio Product Updates page on the
	following Microsoft Web site at:
	
	  http://support.microsoft.com/support/servicepacks/VS/6.0/default.asp?sd=msdn
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Install Visual SourceSafe on a Windows 2000-based computer.
	
	2. Create a regular user with no administrative privileges.
	
	3. Log in to the Windows 2000-based computer as the user you created in step 2.
	
	4. Open the Visual SourceSafe explorer and log in as Admin with no password.
	  Note that you receive the error message listed in the "Symptoms" section.
	
	Additional query words: srcsafe
	
	======================================================================
	Keywords          : kbsetup kbOSWin2000 kbSSafe600bug kbDSupport kbGrpDSSSafe kbVS600sp5fix 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
