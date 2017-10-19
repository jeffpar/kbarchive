---
layout: page
title: "Q131422: PC Ext: Purpose and Function of -V20 Switch"
permalink: /kb/131/Q131422/
---

## Q131422: PC Ext: Purpose and Function of -V20 Switch

	Article: Q131422
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the purpose and function of the -V20 or CompatV20 switch
	used with the EXTERNAL.EXE program for versions 2.1, 3.0, and 3.2 of Microsoft
	Mail for PC Networks.
	
	MORE INFORMATION
	================
	
	To remain compatible with Microsoft Mail version 2.0 and related gateway
	programs, Microsoft Mail for PC Networks, versions 2.1 and later requires the
	use of the -V20 (CompatV20 in EXTERNAL.INI file) command-line option. Current
	versions of Microsoft Mail for PC Networks (versions 2.1 and later) are still
	compatible with the previous Microsoft product (version 2.0). This compatibility
	means that version 2.0 of Microsoft Mail should be able to transfer mail to a
	later version of Microsoft Mail using the latest version of the Microsoft Mail
	Message Transfer Agent (MTA), EXTERNAL.EXE.
	
	To remain compatible with version 2.0 Mail and related gateway programs,
	Microsoft Mail for PC Networks versions 2.1 and later allow the use of the -V20
	command line option (or CompatV20 in the EXTERNAL.INI file). This option allows
	the later versions of the External program to use the same type of file
	creation, detection, and deletion algorithms that the version 2.0 used.
	
	One function of External is to deliver mail to individual mailbags on a given
	mail server. In order to do this, there has to be some mechanism by which
	External keeps a mailbag open to put data into it. The MTAs that shipped with
	version 2.0 of Microsoft Mail used a different mechanism to "lock" mailbags than
	later versions use. This mechanism relied on file creation, detection, and
	deletion to prevent "mailbag contention" (more than one process trying to access
	the same mailbag at a time). Microsoft Mail for PC Networks versions 2.1 and
	later rely on the file locking capabilities provided by the specific network
	operating system to accomplish this task.
	
	Therefore, because of the way in which the version 2.0 EXTERNAL.EXE locked files,
	using the -V20 switch generally means that EXTERNAL.EXE will exhibit performance
	degradation and be more input/output intensive. Because of this, Microsoft
	discourages the use of the -V20 switch unless a version 2.0 postoffice or
	gateway is involved.
	
	If the -V20 switch is used for compatibility with version 2.0 postoffices or
	gateways, it MUST also be used on all other MTA processes that interact with
	them. For example, if the -V20 switch is used in a local area network, it will
	probably be needed on all the EXTERNAL.EXE processes.
	
	Notes:
	
	- Whenever possible, run the latest release of EXTERNAL.EXE or any gateway
	  software for Microsoft Mail for PC Networks.
	
	- Version 2.0 of the Microsoft Mail for PC Networks products require the -V20
	  switch, versions 2.1 and later do not require it.
	
	- For FFAPI-based gateways, check the version of the FFAPI component by typing
	  the following command:
	
	  " FFAPI_program -ver " (without the quotation marks)
	
	  For example,
	
	  " P:\MAILEXE\GTWGET -VER " (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN210
	Version           : WINDOWS:2.1,3.0,3.2
	
	=============================================================================
	
