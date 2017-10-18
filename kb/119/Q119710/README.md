---
layout: page
title: "Q119710: ADT2: Local Microsoft Access Installation Required by ADT"
permalink: kb/119/Q119710/
---

## Q119710: ADT2: Local Microsoft Access Installation Required by ADT

	Article: Q119710
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 24-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	Novice: Requires knowledge of the user interface on single-user computers.
	
	SUMMARY
	=======
	
	To have the full functionality of the Microsoft Access Developer's Toolkit
	(ADT), such as creating distribution disks for shipping your custom database
	application, you must have a local installation of Microsoft Access version 2.0.
	There is no way to work around this requirement.
	
	This means that you cannot perform an administrative installation of Microsoft
	Access to a server (with the SETUP /A command), perform workstation
	installations of Microsoft Access from the server, and then install and use the
	ADT on the workstations. The ADT does not work correctly with workstation
	installations of Microsoft Access; a local installation of Microsoft Access is
	required.
	
	MORE INFORMATION
	================
	
	This requirement is the first item listed in the "Errata and Omissions in
	Advanced Topics" section of the README.TXT file that is shipped with the ADT.
	
	Although there are methods of working around this requirement, these methods are
	not recommended because they create more problems than they solve. One reason
	for this is that the ADT Setup Wizard is written to look for specific files in
	specific locations, and a local installation of Microsoft Access puts the proper
	files in the proper places.
	
	The ADT will work with a Typical, Custom/Complete, or Laptop local installation
	of Microsoft Access. Which local installation option you choose should be
	determined by your development environment and which tools you need for
	developing your application. For example, if you are using ISAM drivers in your
	database application, you should choose the Complete installation option when
	you install Microsoft Access.
	
	REFERENCES
	==========
	
	Microsoft Access "User's Guide," version 2.0, Chapter 1, "Setting Up Microsoft
	Access"
	
	Additional query words: installing network
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbAudDeveloper kbAccessSearch kbAccessDevTK200 kbZNotKeyword3
	Version           : WINDOWS:2.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
