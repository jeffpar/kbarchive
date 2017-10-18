---
layout: page
title: "Q164256: ODE97: ODE Setup Wizard Creates Unexpected Registry Keys"
permalink: kb/164/Q164256/
---

## Q164256: ODE97: ODE Setup Wizard Creates Unexpected Registry Keys

	Article: Q164256
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 16-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access 97 
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	SYMPTOMS
	========
	
	When you create a custom application using the ODE Setup Wizard, extra entries
	are placed in the Windows registry when you run Setup for your custom
	application on any computer. The following entries are made to the Windows
	registry:
	
	- HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Access Runtime
	
	- HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Office\8.0\Access\Profiles
	
	These entries are made in the registry, regardless of what you have added to the
	Setup Wizard program.
	
	CAUSE
	=====
	
	The registry keys listed in the "Symptoms" section are always created, even
	though the options are not selected in the Setup Wizard program. This behavior
	occurs because a profile can be used on any computer running Microsoft Windows
	95 or Microsoft Windows NT, regardless of whether the developer of the
	application specifies a shortcut for the profile when creating the Setup program
	or not. This is also true for the run-time switch in some situations.
	
	MORE INFORMATION
	================
	
	A user profile is a special set of Windows Registry keys you can create to
	override standard Microsoft Access and Microsoft Jet database engine settings,
	and to specify additional run-time options. You then use the /profile
	command-line option to specify this user profile when you start your
	application.
	
	You can use a user profile, for example, to:
	
	- Prevent standard Microsoft Access settings that users might modify in their
	  database properties and startup options from conflicting with your
	  application needs.
	
	- Ensure that when you distribute your applications, other programs using the
	  Jet database engine do not override custom settings your application needs.
	
	- Test your application under different configurations.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a simple custom application that does not include the run-time
	  component or any profiles for the Windows registry. These options are set on
	  page three and page four of the Setup Wizard program.
	
	2. On the Add files page, add any text file and click to select the "Set as
	  Application's Main File" check box.
	
	3. On the Add Shortcuts page, add a shortcut for the text file.
	
	4. Click Next on the "List of Registry Values" screen.
	
	5. On the Add Redistributables page, make sure "Microsoft Access Run-Time
	  Version" is not selected. Click Next.
	
	6. Type a name for your application in the "What is the name of your
	  application" box. Click Next twice.
	
	7. On the Specify Disk Image Options page, select the type of disk images you
	  want to create, and then click Finish.
	
	8. Run Setup for your application on any computer.
	
	9. On the Start menu, click Run, and type Regedit in the Open box. Search for
	  the new registry entries using the paths in the "Symptoms" section.
	
	REFERENCES
	==========
	
	For more information about run-time options, search the Help Index for "runtime
	environment," or ask the Microsoft Access 97 Office Assistant.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbAccess97 kbOffice97Search kbAccess97Search kbOffice97 kbOffice97DevSearch
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
