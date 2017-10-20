---
layout: page
title: "Q116063: ADT2: &quot;Setup Parse Error&quot; Error Message in Run-Time Setup"
permalink: /kb/116/Q116063/
---

## Q116063: ADT2: &quot;Setup Parse Error&quot; Error Message in Run-Time Setup

{% raw %}

	Article: Q116063
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 08-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	When you are running Setup from disks that you created with the Microsoft Access
	Developer's Toolkit, you may receive the following error message after the
	"Setup is searching for installed components" screen:
	
	  Setup Parse Error in Initialize Pass. Object ID 1: AppSearch Object: Bad
	  Default Path Field.
	
	After this error message, Setup quits without completing.
	
	CAUSE
	=====
	
	When you ran the Setup Wizard to create the disks, you specified C:\ as the
	default installation directory, or you specified a directory name that is more
	than eight characters long. For example, specifying the directory C:\MYPROGRAM
	would cause the error message to occur.
	
	Including special characters in the installation directory or application name
	can also generate this message. For example, C:\!MYAPP in the default
	installation directory or "My Excellent! App" in the Application Name would
	cause this error.
	
	Regarding the Application Name, the problem is not with the Application Name
	itself but with the fact that it also creates a Program Manager Group Name,
	which cannot interpret the special character.
	
	RESOLUTION
	==========
	
	Create a new set of installation disks. In the Setup Wizard's Default
	Installation Directory box, make sure to specify the full path name for the
	directory into which your application should be installed (for example,
	C:\MYAPP).
	
	STATUS
	======
	
	This behavior no longer occurs in the Microsoft Access Developer's Toolkit for
	Windows 95 version 7.0.
	
	REFERENCES
	==========
	
	Microsoft Access Developer's Toolkit "Advanced Topics," version 2.0, Chapter 2,
	"Creating a Custom Setup Program"
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbAudDeveloper kbAccessSearch kbAccessDevTK200 kbZNotKeyword3
	Version           : WINDOWS:2.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
