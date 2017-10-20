---
layout: page
title: "Q152084: Insufficient Memory Error Using Internet Explorer 2.0"
permalink: /kb/152/Q152084/
---

## Q152084: Insufficient Memory Error Using Internet Explorer 2.0

{% raw %}

	Article: Q152084
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:; winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you run the SETUP.EXE from an Internet explorer 2.0 Package for Windows
	3.1 in Package Command Manager (PCM), you get an "insufficient memory" error.
	
	
	CAUSE
	=====
	
	PCM executes the command, which is Setup.exe, as expected. Setup will extract
	Acmsetup from the .cab file, start it, and terminate. After the termination PCM
	of course closes the connection to SMS_PKGD because Setup.exe terminated without
	errors, but Acmsetup needs the connection to complete.
	
	RESOLUTION
	==========
	
	1. Use EXTRACT.EXE to extract all files from IEW31_1.CAB in a new directory.
	
	2. Add the files Files.inf, Setup.ini and Iew31_1.cab from the original setup
	  directory, so that the files in the new directory are:
	
	  _Mssetup.exe
	  Acmsetup.exe
	  Acmsetup.hlp
	  Basic.dll
	  Comctlie.dll
	  Files.inf
	  Iew31_1.cab
	  Internet.stf
	  License.txt
	  Mscpydis.dll
	  Mssetup.dll
	  Readme.txt
	  Setup.ini
	  Setup31.dll
	  Stacdial.inf
	
	3. Create a Run Command on Workstation Package and use the commandline:
	
	  ACMSETUP /T internet.stf
	
	4. Create a job for this package and send it to the clients.
	
	Additional query words: prodsms pcm internet explorer
	
	======================================================================
	Keywords          : kbnetwork kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : WINDOWS:; winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
