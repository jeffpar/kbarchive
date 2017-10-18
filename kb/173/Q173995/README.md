---
layout: page
title: "Q173995: SMS: How to Configure Multiple Shared Apps to Use a Single Share"
permalink: kb/173/Q173995/
---

## Q173995: SMS: How to Configure Multiple Shared Apps to Use a Single Share

	Article: Q173995
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbusage kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In some situations, you may want to have multiple shared network applications
	using the same share or drive letter on the client workstation. Although you can
	easily accomplish this with a single Sharing package, the process becomes more
	complex when multiple packages are involved.
	
	The Microsoft Office 4.x sharing package that is created by using the Package
	Definition Files (PDFs) supplied with Systems Management Server gives a good
	example of how to set up a single Sharing package to run multiple applications.
	This article concentrates on how you can configure multiple Sharing packages
	delivered by Program Group Control (PGC) to use the same network share or drive
	letter.
	
	MORE INFORMATION
	================
	
	As an example, this article will configure two applications, Solitaire and
	FreeCell, as separate Systems Management Server Sharing packages that will both
	use the same network share. To do this, perform the following steps:
	
	1. Prepare the package source directory for each application.
	
	  To use a common share point, the files for each application must be located in
	  a subdirectory of the directory that will be defined as the package source
	  directory. For this example, all packages will be located under a Package
	  directory that is also shared as "Package."
	
	  For Solitaire, the files will be located in the Solitaire directory, with the
	  following structure:
	
	  Package\App1\Solitaire
	
	  For FreeCell, the files will be located in the FreeCell directory, with the
	  following structure:
	
	  Package\App2\FreeCell
	
	  NOTE: Defining the App1 and App2 directories as subdirectories of the Package
	  directory keeps Systems Management Server from combining the source
	  directories for both applications into the same compressed package.
	
	2. Use the Systems Management Server Administrator program to create a Systems
	  Management Server Sharing package for each application. To do this, perform
	  the following steps:
	
	For Solitaire
	-------------
	
	  a. Define the package source directory as \\<server>\Package\App1.
	
	  b. Define the common share that each application will use: SMS_APPS.
	
	  c. Create a program item with the following attributes for the Solitaire
	     package:
	
	  Description: Shared Solitaire
	  Command Line: Solitiaire\Sol.exe
	  Registry Name: solitaire
	  Configuration Command Line: <optional; not needed for Solitaire>
	
	     NOTE: You can customize the values defined for the Description, Registry
	     Name, and Configuration Command Line parameters, but you must manually
	     type the correct Command Line parameter for the Solitaire directory before
	     the executable file can be run.
	
	  d. Select the desired option for Drive Mode. For this example, select
	     Requires Specific Drive Letter and type "P:" for the network drive that
	     the client will use to connect to the SMS_APPS share on a Systems
	     Management Server distribution server.
	
	For FreeCell
	------------
	
	  a. Define the package source directory as \\<server>\Package\App2.
	
	  b. Define the common share that each application will use: SMS_APPS.
	
	  c. Create a program item with the following attributes for the FreeCell
	     package:
	
	  Description: Shared Freecell
	  Command Line: Freecell\Freecell.exe
	  Registry Name: freecell
	  Configuration Command Line: <optional, not needed for Freecell>
	
	  d. Select the desired option for Drive Mode, making certain to use the same
	     option that was chosen for the other package. Select Requires Specific
	     Drive Letter and type "P:".
	
	3. Use a separate Share Package On Server job for both the Solitaire and
	  FreeCell packages to deliver the shared applications. This creates the
	  following directory structure on each Systems Management Server distribution
	  server defined in the jobs:
	
	  Sms_apps\Freecell
	  Sms_apps\Solitaire
	
	4. Define one or more Systems Management Server program groups that includes the
	  program items created with each package.
	
	After the Systems Management Server client's desktop has been updated with the
	new icons for the shared applications, starting one of the applications maps the
	network drive P: to the Sms_apps share and runs the application from the
	appropriate subdirectory. The other application will also use the same drive
	when it is run, thus reducing the number of network drives consumed by these
	applications.
	
	NOTE: It is important to consider that a package cannot be updated by Systems
	Management Server if the drive or share is in use at the time Systems Management
	Server attempts to update it. Therefore, use caution when using the steps
	outlined above to configure multiple packages to use the same share.
	
	For example, if you needed to apply an update to Solitaire and there were users
	currently playing FreeCell, the update to Solitaire could not occur without
	first disconnecting all users from the Sms_apps share.
	
	WARNING: If a Remove Package From Server job is sent to remove one of the
	packages defined below the existing common share, all of the packages below the
	existing share will be removed. Therefore, if you need to remove a single
	package from a distribution server, it is recommended that you manually perform
	this procedure.
	
	Additional query words: prodsms PDF
	
	======================================================================
	Keywords          : kbusage kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbhowto
	
	=============================================================================
	
