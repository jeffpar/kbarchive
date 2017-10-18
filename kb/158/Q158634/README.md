---
layout: page
title: "Q158634: XCLN: Using Exchange Client With Windows NT Mandatory Profile"
permalink: kb/158/Q158634/
---

## Q158634: XCLN: Using Exchange Client With Windows NT Mandatory Profile

	Article: Q158634
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Microsoft Exchange Windows NT client on a Windows NT
	Workstation computer using mandatory Windows NT profiles, you are unable to save
	Exchange profile information. You can use the Exchange Profile Wizard to create
	a profile and may be able to access your mail, but once you log off Windows NT
	Workstation, all the Exchange profile settings are lost. Subsequently, when you
	log on to Windows NT Workstation and you start Exchange Client, the Exchange
	Profile Wizard starts.
	
	CAUSE
	=====
	
	On a computer running Windows NT workstation, Exchange profile information is
	kept in the registry. The purpose of mandatory Windows NT profiles is to
	prohibit the user from modifying the registry.
	
	RESOLUTION
	==========
	
	To use mandatory Windows NT profiles with Exchange Client, a unique user profile
	file (.usr) must be created for each Exchange user. This file is kept on the
	Windows NT server in the same location as the mandatory profile. This filename
	must also be referenced in User Manager for Domains within the User Properties
	for the user/Profile/User Profile Path. The user must log on and create an
	Exchange profile and then log off Windows NT; this will save the profile
	information to the registry and to the .usr file.
	
	When the Exchange profile information is saved in the .usr file, the mandatory
	profile can be reinstated. To do this, rename the .usr file to a .man extension
	and reference this file in the User Profile Path described above.
	
	To work around the problem, run the Microsoft Exchange utility Newprof.exe from
	the Windows NT login script with a Default.prf configured with profile
	information, including the Exchange Server name and the user's mailbox.
	Newprof.exe can be placed in the Startup program group, or it can be run from a
	batch file or login script so that a new Exchange profile is created
	automatically each time the user logs on to Windows NT.
	
	NOTE: No specific profile information can be saved by the user as long as
	mandatory profiles are in use.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q148595 XCLN: Creating Roving Users on Win95 and WinNT
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT
	Version           : WINDOWS:4.0
	
	=============================================================================
	
