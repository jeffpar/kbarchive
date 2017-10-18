---
layout: page
title: "Q150089: InstallShield3 Closes Connection Prematurely"
permalink: kb/150/Q150089/
---

## Q150089: InstallShield3 Closes Connection Prematurely

	Article: Q150089
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	InstallShield3 requires the "-SMS" parameter for Setup.exe on the Command Line
	of an SMS Package. Having it there will force the connection from the client to
	the SMS Distribution server to stay open and will allow Setup.exe to run on
	remote computers.
	
	MORE INFORMATION
	================
	
	The following example illustrates this issue:
	
	     Normal:  SETUP or SETUP -fc:\test.ins
	     SMS:     SETUP -SMS or SETUP -fc:\test.ins -SMS
	
	-SMS indicates that Setup.exe should continue to run until the installation is
	done, thus allowing SMS to keep the remote computer connected. This adds the
	ability for Setup.exe to continue to run until the main installation engine is
	done.
	
	NOTE: This command has nothing to do with silent mode -S.
	
	The "-SMS" parameter is supported in versions 2.20.903 and greater of the
	InstallShield Software Developer's Kit (SDK), and documentation is listed under
	the "Setup.exe" topic in the online reference for versions 3.097 and earlier.
	
	Additional query words: prodsms pcm Install Shield mcafee
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
