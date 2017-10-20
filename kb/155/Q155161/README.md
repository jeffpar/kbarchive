---
layout: page
title: "Q155161: XCLN: ErrMsg: &quot;Setup Is Unable to Open the Data File...&quot;"
permalink: /kb/155/Q155161/
---

## Q155161: XCLN: ErrMsg: &quot;Setup Is Unable to Open the Data File...&quot;

{% raw %}

	Article: Q155161
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 03-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to set up the Microsoft Exchange Windows NT client version 4.0
	from the file Eng\Setup\I386\Acmsetup.EXE on the Microsoft Exchange client
	compact disc from a computer running Windows NT Server 4.0 or Windows NT
	Workstation NT, youmay get the following series of error messages:
	
	  Setup Error 544
	
	  ! Setup is unable to open the data file
	  '<drive>:\ENG\SETUP\I386\ACMSETUP.stf'; run Setup again from where you
	  originally ran it.
	
	  Setup Error 723
	
	  ! The processing of top-level information has failed.
	
	  Setup was not completed successfully.
	
	NOTE: In the first error message, "drive" is the location of the Microsoft
	Exchange client software compact disc.
	
	CAUSE
	=====
	
	This occurs when you attempt to run Setup from the wrong location.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	Install Microsoft Exchange Windows NT client version 4.0 from the compact disc in
	the following location:
	
	   ENG\WINNT\<Platform>\SETUP.EXE
	
	MORE INFORMATION
	================
	
	For more information on installing the Microsoft Exchange Windows NT client and
	other clients, refer to Chapter 5, "Setting Up Microsoft Exchange Client
	Software," in the Microsoft Exchange Server Administrator's Guide starting on
	page 125, or refer to Chapter 5 in Books Online.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT
	Version           : WINDOWS:4.0
	
	=============================================================================
	

{% endraw %}
