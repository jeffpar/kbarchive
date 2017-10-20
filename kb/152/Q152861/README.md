---
layout: page
title: "Q152861: SMS: Using Dosetup to Create Registry Entries for PGC"
permalink: /kb/152/Q152861/
---

## Q152861: SMS: Using Dosetup to Create Registry Entries for PGC

{% raw %}

	Article: Q152861
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If distributing a Shared Application without a package definition file (PDF),
	the administrator will need to specify the Registry Entry name and a
	Configuration Command Line, in order for SMS to correctly configure the
	application and record that in its registry. Use the "Dosetup.exe" executable
	file to complete this task.
	
	MORE INFORMATION
	================
	
	DOSETUP.EXE can be used to run a user-specified setup program under Program
	Group Control (PGC). This program would normally be specified as the
	'ConfigurationScript' entry within the [Program Item Properties i] section of a
	PDF file. The command-line syntax is:
	
	     DOSETUP <RegName> <CommandLine>
	
	where RegName has the same value as the 'RegistryName' entry in the same section
	of the PDF, and CommandLine is any valid command line.
	
	For example, the following command will run the setup program for the Microsoft
	Access 2.0 Service Pack:
	
	     DOSETUP acs2pak setup.exe
	
	This program does not handle all of the complexities of making an arbitrary
	shared application fully SMS-compliant. It merely provides a mechanism for
	running a setup program and for setting certain SMS registry status flags
	required by PGC.
	
	DOSETUP runs the specified command line and manages the status entry under the
	program item's registry key
	
	(HKEY_CLASSES_ROOT\SMS\APPLICATIONS\<regName>\Configuration\Status)
	
	The status entry must be set to UNFINISHED, FAIL or SUCCESS.
	
	DOSETUP operates like SMSSETUP in most respects; it displays the SMS blue setup
	screen, reports errors, and does postprocessing following any system restart.
	The postprocessing sets an application's status flag to SUCCESS. DOSETUP
	initially sets an application's status to FAIL, in case anything goes wrong
	during its processing. To handle a possible system restart by an installation
	program, DOSETUP sets the status to UNFINISHED immediately before running the
	user's command line. When the installation program terminates, or when PGC Start
	reruns DOSETUP following a system restart, the status is reset to SUCCESS. There
	is currently no mechanism for an installation program to pass an error message
	to DOSETUP.
	
	DOSETUP will be installed into the MSTEST directory on the logon server so that
	it will be available to users from any PDF.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	
	=============================================================================
	

{% endraw %}
