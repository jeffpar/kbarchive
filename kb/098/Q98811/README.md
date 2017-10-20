---
layout: page
title: "Q98811: ATT: Err=-101 Function=FFAPI_RunGet / Error=20"
permalink: /kb/098/Q98811/
---

## Q98811: ATT: Err=-101 Function=FFAPI_RunGet / Error=20

{% raw %}

	Article: Q98811
	Product(s): Microsoft Mail For PC Networks
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to AT T, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Mail Gateway to AT&T EasyLink may display the following error
	message on the screen or in the ATTGATE.LOG file once the SMTPGATE.EXE is
	executed:
	
	  Err=-101 Function=FFAPI_RunGet FFAPI Run-Time Error. Error=20
	  Process=C:\ATTGATE\SMTPGET.EXE
	
	This error message indicates there was a problem trying to spawn SMTPGET.EXE--the
	File Format API (FFAPI)-based executable that pulls mail queued up for EasyLink,
	from the MS Mail postoffice. The Error=20 is a FFAPI error, meaning there is
	insufficient memory for it to run.
	
	The AT&T Gateway requires at least 470K of free conventional memory. The
	amount of conventional memory determines the number of recipients supported in a
	single message, and it can be determined by using the MS-DOS MEM command:
	
	  c:>mem
	
	For example, after all the required network drivers are loaded and there is 515K
	free conventional memory, the gateway supports approximately 350 recipients in a
	message passing through the gateway.
	
	NOTE: Each additional kilobyte supports approximately 15 more recipients. The
	size of the message body or attachment(s) is not limited by the amount of
	conventional memory.
	
	REFERENCES
	==========
	
	"Microsoft Mail Gateway to AT&T Mail Administrator's Guide"
	
	Version 3.0 of the Microsoft Mail Software Development Kit, "File Format API for
	Gateways and Applications" manual
	
	Additional query words: 3.20 SMTPPUT SMTP ErrMsg FFAPI Run-Time 20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateATT100
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
